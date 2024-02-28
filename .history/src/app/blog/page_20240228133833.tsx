export default function Page() {
    return (
        <div className="w-full bg-slate-400 h-screen flex justify-center items-center">
            <form action="" method="post" className="w-80">
                <div>
                    <input name="username" type="text" className="w-full h-12 pl-3 rounded-t-sm border border-b-0"/>
                </div>
                <div>
                    <input type="password" name="password" className="w-full h-12 pl-3 rounded-b-sm border border-t-0"/>
                </div>
                <div>
                    <button type="submit">submit</button>
                </div>
            </form>
        </div>
    )
}