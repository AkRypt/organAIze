export default function TimePicker({label, value, ampmValue, onChangeHours, onChangeMinutes, onChangeAMPM}: {label?: string, value: string, ampmValue?: string, onChangeHours: (value: string) => void, onChangeMinutes: (value: string) => void, onChangeAMPM: (value: string) => void}) {
    return (
        <div className="flex flex-col">
        <p className="text-sm">{label}</p>
        <div className="p-2 rounded-lg shadow bg-base-100">
            <div className="flex">
                <select name="hours" value={value.split(":")[0]} onChange={(e) => onChangeHours(e.target.value)} 
                className="bg-transparent appearance-none outline-none ml-1">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                </select>
                <span className="text-xl mr-3">:</span>
                <select name="minutes" value={value.split(":")[1]} onChange={(e) => onChangeMinutes(e.target.value)} 
                className="bg-transparent appearance-none outline-none mr-4">
                    <option value="0">00</option>
                    <option value="30">30</option>
                </select>
                <select name="ampm" value={ampmValue ?? "AM"} onChange={(e) => onChangeAMPM(e.target.value)} 
                className="bg-transparent appearance-none outline-none">
                    <option value="AM">AM</option>
                    <option value="PM">PM</option>
                </select>
            </div>
        </div>
        </div>
    )
}