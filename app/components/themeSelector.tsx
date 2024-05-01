export default function ThemeSelector({ onChangeTheme }: { onChangeTheme: (theme: string) => void }) {
    return (
        <div className="fixed top-4 right-6 w-screen relative flex justify-end">
            <p className="absolute right-0 text-xl">
                🌞
            </p>
            <select name="theme" onChange={(e) => onChangeTheme(e.target.value)}
                className="bg-transparent relative opacity-[1%] border appearance-none outline-none">
                <option value="cupcake">Cupcake</option>
                <option value="retro">Retro</option>
                <option value="dim">Dim</option>
                <option value="acid">Acid</option>
                <option value="forest">Forest</option>
                <option value="aqua">Aqua</option>
                <option value="synthwave">Synthwave</option>
                <option value="lemonade">Lemonade</option>
                <option value="garden">Garden</option>
                <option value="dark">Dark</option>
            </select>
        </div>
    )
}