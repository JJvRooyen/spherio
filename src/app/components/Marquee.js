import Image from "next/image";

const Marquee = () => {
    return (
        <div className="relative overflow-hidden w-full bg-[#4d4bd2] py-4 hidden lg:block">
        {/* Fade effect on edges */}
        <div className="absolute inset-0 pointer-events-none" />

        {/* Marquee wrapper */}
        <div className="flex items-center w-[200%] animate-marquee gap-12">
        {/* Duplicate images for smooth loop */}
        <MarqueeImages />
        <MarqueeImages />
        </div>
        </div>
    );
};

// Component for Marquee Images
const MarqueeImages = () => {
    return (
        <div className="flex space-x-8">
        <Image src="/logos/logoipsum-344.svg" alt="Logo 1" width={150} height={50} />
        <Image src="/logos/logoipsum-347.svg" alt="Logo 2" width={150} height={50} />
        <Image src="/logos/logoipsum-352.svg" alt="Logo 3" width={150} height={50} />
        <Image src="/logos/logoipsum-356.svg" alt="Logo 4" width={150} height={50} />
        <Image src="/logos/logoipsum-358.svg" alt="Logo 4" width={150} height={50} />
        <Image src="/logos/logoipsum-360.svg" alt="Logo 4" width={150} height={50} />
        <Image src="/logos/logoipsum-362.svg" alt="Logo 4" width={150} height={50} />
        <Image src="/logos/logoipsum-364.svg" alt="Logo 4" width={150} height={50} />
        </div>
    );
};

export default Marquee;

