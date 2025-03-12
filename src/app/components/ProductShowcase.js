import { BotMessageSquare, ChartLine, Handshake, Workflow } from "lucide-react"

const ShowCase = () => {
    return(
        <>
            <div className="h-content flex flex-cols-1 grid lg:grid-cols-2 lg:grid-rows-2 gap-8 p-16">
                <div className="">
                    <div className="flex justify-center items-center pb-7">
                        <ChartLine
                        size={50}
                        />
                    </div>
                    <div>
                        <h1 className="font-bold text-center lg:text-left text-3xl lg:text-4xl py-4 px-3 text-black">Advanced Writing Analytics</h1>
                        <p className="px-3 text-black font-meduim text-xl lg:tex-left text-center">Unlock insights into your writing with real-time analytics and performance metrics.</p>
                    </div>
                </div>


                <div className="">
                    <div className="flex justify-center items-center pb-7">
                        <BotMessageSquare
                        size={50}
                        />
                    </div>
                    <div>
                        <h1 className="font-bold text-center lg:text-left text-3xl lg:text-4xl py-4 px-3 text-black">AI-Powered Content Suggestions</h1>
                        <p className="px-3 text-black font-meduim text-xl lg:tex-left text-center">Enhance your content with intelligent, context-aware suggestions tailored to your needs.</p>
                    </div>
                </div>


                <div className="">
                    <div className="flex justify-center items-center pb-7">
                        <Handshake
                        size={50}
                        />
                    </div>
                    <div>
                        <h1 className="font-bold text-center lg:text-left text-3xl lg:text-4xl py-4 px-3 text-black">Seamless Team Collaboration</h1>
                        <p className="px-3 text-black font-meduim text-xl lg:tex-left text-center">Collaborate effortlessly with team members in a dynamic, integrated writing environment.</p>
                    </div>
                </div>


                <div className="">
                    <div className="flex justify-center items-center pb-7">
                        <Workflow
                        size={50}
                        />
                    </div>
                    <div>
                        <h1 className="font-bold text-center lg:text-left text-3xl lg:text-4xl py-4 px-3 text-black">Customizable Workflow Solutions</h1>
                        <p className="px-3 text-black font-meduim text-xl lg:tex-left text-center">Tailor your writing workflow with customizable templates and flexible integration options.</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ShowCase
