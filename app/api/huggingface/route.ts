'use server';

export async function getFromLLM({ tasks, startTime, endTime }: { tasks: any; startTime: any; endTime: any }) {

    const system_prompt = `You are a psychologist and an expert who understands how to organize time 
    effectively in order to be really productive and you have been guiding people on making time tables for decades.`;

    const user_prompt = `Generate a time table for the following tasks: ${tasks} and fit them 
    from ${startTime} to ${endTime}. Make sure to sort them as per the time of the day. 
    Your response must be in the following format and then add a small-medium length summary at the end (do not say Summary:): 
    [xz8][{"task": "Reading", "startTime": "10:00 AM", "endTime": "11:00 AM"}, {"task": "Task 2", "startTime": "12:00 PM", "endTime": "1:00 PM"}][/xz8].
    Do not forget to include the xz8 starting and closing tags.`;

    const data = {
        "inputs": `${system_prompt}\n\n${user_prompt}`,
        "parameters": {
            "return_full_text": false,
            "max_new_tokens": 600,
        }
    }

    const response = await fetch(
        "https://api-inference.huggingface.co/models/meta-llama/Meta-Llama-3-8B-Instruct",
        {
            headers: {
                Authorization: `Bearer ${process.env.HUGGINGFACE_API_KEY}`,
                "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify(data),
        }
    );

    const result = await response.json();
    return result;
}

export async function parseSchedule(rawText: string) {

    try {
        const startTag = "[xz8]";
        const endTag = "[/xz8]";

        const startIndex = rawText.indexOf(startTag);
        const endIndex = rawText.indexOf(endTag);

        if (startIndex !== -1 && endIndex !== -1) {
            const scheduleString = rawText.substring(startIndex + startTag.length, endIndex);
            const summary = rawText.substring(endIndex + endTag.length).replace(/\n/g, ' ');

            console.log("Schedule String: ", scheduleString);

            const modifiedString = scheduleString.replace(/\n/g, '');

            console.log("Modified String: ", modifiedString);
            const schedule = JSON.parse(modifiedString);

            return { schedule: schedule, summary: summary.trim() };
        } else {
            return null;
        }
    }
    catch (error) {
        console.log(error);
        return null;
    }
}

export async function generateSchedule({ tasks, startTime, endTime }: { tasks: any; startTime: any; endTime: any }) {

    const llmResponse = await getFromLLM({ tasks, startTime, endTime });
    const rawText = llmResponse[0].generated_text;

    console.log("Full Response: ", rawText);

    const schedule = await parseSchedule(rawText);

    if (schedule) {
        return { schedule: schedule.schedule, summary: schedule.summary };
    }

    return null;
}

