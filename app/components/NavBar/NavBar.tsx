

export default function Page() {
    return (
        <div className="flex justify-center mt-10">
            <nav className=" flex justify-between gap-96">
                <div>
                    <h1>TIPJAR</h1>
                </div>

                <div>
                    <ul className="flex gap-5">
                        <li>Home</li>
                        <li>How it works</li>
                        <li>Leaderboard</li>
                        <li className="bg-blue-600 p-1 rounded">Conect Wallet</li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}