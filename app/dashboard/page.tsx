'use client';

import { useEffect, useState } from "react";
import { generateSchedule } from "./actions";
import TimePicker from "../components/timePicker";
import { Loading } from "../components";
import Title from "../components/title";
import ThemeSelector from "../components/themeSelector";

export default function Dashboard() {

    const [loading, setLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    const [scheduleGenerated, setScheduleGenerated] = useState(false);

    const [startHours, setStartHours] = useState("9");
    const [startMinutes, setStartMinutes] = useState("00");
    const [startAMPM, setStartAMPM] = useState("AM");
    const [endHours, setEndHours] = useState("5");
    const [endMinutes, setEndMinutes] = useState("00");
    const [endAMPM, setEndAMPM] = useState("PM");

    const [tasks, setTasks] = useState<string[]>([]);
    const [currentTask, setCurrentTask] = useState("");
    const [schedule, setSchedule] = useState<{ task: string, startTime: string, endTime: string }[]>([]);
    const [summary, setSummary] = useState("");

    // { "task": "Running", "startTime": "9:00 AM", "endTime": "9:30 AM" }, { "task": "Workout", "startTime": "9:30 AM", "endTime": "10:00 AM" }, { "task": "Reading", "startTime": "10:00 AM", "endTime": "11:00 AM" }, { "task": "Coding", "startTime": "11:00 AM", "endTime": "12:00 PM" }, { "task": "Lunch Break", "startTime": "12:00 PM", "endTime": "1:00 PM" }, { "task": "Talking", "startTime": "1:00 PM", "endTime": "2:00 PM" }, { "task": "Coding", "startTime": "2:00 PM", "endTime": "3:00 PM" }, { "task": "Reading", "startTime": "3:00 PM", "endTime": "4:00 PM" }, { "task": "Wrap-up", "startTime": "4:00 PM", "endTime": "5:00 PM" }


    const fetchSchedule = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setLoading(true);
        const response = await generateSchedule({
            tasks: [currentTask],
            startTime: startHours + ":" + startMinutes + startAMPM,
            endTime: endHours + ":" + endMinutes + endAMPM
        });
        setLoading(false);

        if (response) {
            setSchedule(response.schedule);
            setSummary(response.summary);
            setScheduleGenerated(true);
        } else {
            setIsError(true);
            console.log("inError")
            alert("Something went wrong! Please try again")
            // window.location.reload();
        }
    }

    const onChangeTheme = (e: any) => {
        document.querySelector('html')?.setAttribute('data-theme', e);
    }

    return (
        <div className="h-screen overflow-hidden">


            {/* Background */}
            <div className="absolute top-0 h-screen w-screen rotate-180 transform bg-base-100 bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(252,205,238,.5)_100%)]"></div>

            <div className="flex flex-col items-center h-screen relative overflow-y-auto">
                <ThemeSelector onChangeTheme={onChangeTheme} />
                {/* Title */}
                <Title />

                {/* Loading */}
                {loading && <Loading />}

                {
                    !scheduleGenerated ? (
                        <div className="p-4 flex flex-col justify-center items-center">

                            {/* Time row */}
                            <p>When do you want to start and end your day?</p>
                            <div className="flex w-full px-4 justify-between my-4">
                                <TimePicker
                                    label="Start Time"
                                    value={startHours + ":" + startMinutes}
                                    onChangeHours={(value) => setStartHours(value)}
                                    onChangeMinutes={(value) => setStartMinutes(value)}
                                    onChangeAMPM={(value) => setStartAMPM(value)} />

                                <TimePicker
                                    label="End Time"
                                    value={endHours + ":" + endMinutes}
                                    ampmValue={endAMPM}
                                    onChangeHours={(value) => setEndHours(value)}
                                    onChangeMinutes={(value) => setEndMinutes(value)}
                                    onChangeAMPM={(value) => setEndAMPM(value)} />
                            </div>

                            <p>What activities do you want to perform in a day? (Ex: Workout, Reading, Work, Homework.)</p>

                            <form action="submit" onSubmit={fetchSchedule} className="flex flex-col w-full gap-2 items-center">
                                <input type="text" placeholder="Enter your activities" className="input input-primary input-bordered w-full my-4"
                                    value={currentTask} onChange={(e) => setCurrentTask(e.target.value)} />
                                {currentTask.length > 5 &&
                                    <button type="submit" className="btn btn-primary">Generate Schedule</button>
                                }
                            </form>

                            <p className="text-xs font-regular text-center mt-4">
                                You can also try adding additional details in the field to get a more personalized schedule.
                            </p>

                            {isError && <p className="text-red-500 text-xs font-regular text-center mt-4">
                                Try using words which can be understood by the AI.
                            </p>}


                        </div>
                    )
                        :
                        (
                            <div className="p-4 md:p-8 md:pt-4 w-full flex flex-col items-center">

                                <p className="font-bold">Your AI generated Schedule:</p>

                                <div className="p-4 mt-2 shadow-md bg-base-100 rounded-lg w-full md:w-[50%]">
                                    {schedule.map((task, index) => (
                                        <div key={index}>
                                            <div className="w-full h-[1px] bg-base-content rounded-full"></div>

                                            <div className="w-full flex justify-between items-center rounded-lg my-2">
                                                <p className="font-bold text-base-content w-[60%] text-wrap">{task.task}</p>
                                                <p className="w-full text-base-content text-end">
                                                    <span className="px-2 bg-primary text-primary-content rounded-full">{task.startTime}</span>
                                                    &nbsp; to &nbsp;
                                                    <span className="px-2 bg-secondary text-secondary-content rounded-full">{task.endTime}</span>
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <p className="my-4">{summary}</p>

                                <button className="btn btn-primary btn-wide mb-10" onClick={() => setScheduleGenerated(false)}>Go back</button>

                            </div>
                        )
                }
            </div>
        </div >
    )
}

