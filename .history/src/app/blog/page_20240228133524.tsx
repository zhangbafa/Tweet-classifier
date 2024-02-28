export default function Page() {
    return (
        <div className="w-full bg-slate-400 h-screen flex justify-center items-center">
            <form action="" method="post">
                <div className="w-96">
                    <input name="username" type="text" className="w-full"/>
                </div>
                <div>
                    <input type="password" name="password"/>
                </div>
                <div>
                    <button type="submit">submit</button>
                </div>
            </form>
        </div>
    )
}