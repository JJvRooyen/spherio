import Link from "next/link"

const Navbar = () =>{
    return(
        <nav className="sticky flex justify-between text-center w-full p-4 border-b border-zinc-200">
            <div className="flex items-center">
                <h1>Spherio</h1>
            </div>
                <ul className="space-x-4 flex text-center flex-grow justify-center p-4">
                    <Link href={"/fetures"}>Fetures</Link>
                    <Link href={"/pricing"}>Pricing</Link>
                    <Link href={"/blog"}>Blog</Link>
                </ul>
            <div className="flex items-center">
                <button className="bg-[#4d4db2] text-white p-2 rounded-xl">Contact us</button>
            </div>
        </nav>
    )
}
export default Navbar
