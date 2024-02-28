export default function Page() {
    return (
        <div className="w-full bg-slate-400 h-px">
            <form action="" method="post" >
                <div>
                    <input name="username" type="text"/>
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