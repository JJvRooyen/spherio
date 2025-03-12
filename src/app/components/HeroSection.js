

const Hero = () => {
    return (
        <div className="bg-[#eff0fe] lg:px-16 px-8">
            <div className="grid lg:grid-cols-2 gap-4 p-4 items-center min-h-[500px] pt-16 pb-34">
            {/* Left content */}
                <div className="bg-[#c6c5ed] p-6 flex flex-col gap-4 h-full justify-center rounded-3xl">
                <h1 className="font-semibold text-6xl text-black">Innovate Your Text Creation Journey</h1>
                <p className="text-xl text-black">
                    Supercharge your writing with AI. Generate, edit, and refine text effortlessly—whether for work, study, or creativity
                </p>
                <button className="border-2 border-black  px-1 max-w-50 py-5 rounded-3xl text-xl text-black">
                Contact us
                </button>
            </div>

                {/* Right content with Background Image */}
            <div
                className="h-full w-full bg-cover bg-center rounded-3xl"
                style={{ backgroundImage: "url('/hands.jpeg')" }}
                >
                </div>
            </div>
        </div>
    );
};

export default Hero;

