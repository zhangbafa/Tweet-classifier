export default function Page() {
    return (
        <div className="w-fullh-screen flex justify-center items-center">
            <form action="" method="post" className="w-80">
                <div>
                    <input name="username" type="text" className="w-full h-12 pl-3 rounded-t-sm border"/>
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