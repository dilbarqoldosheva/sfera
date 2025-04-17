import Image from 'next/image'
import HoveredButton from "@/components/buttons/hovered-button";
import { cn } from "@/lib/utils";
import colors from "@/lib/colors"

const Hero = ({ course }: { course: any }) => {
    
    return (
        <div>
            <section className="relative">
                <Image
                    src="/home/hero-gif.gif"
                    alt="Gif"
                    className="w-full h-[60vh] sm:h-[75vh] md:h-[100vh] object-cover"
                    width={400}
                    height={300}
                    unoptimized
                />
                <div className="absolute top-1/2 -translate-y-1/2 flex w-full">
                    <div className="mx-auto text-center space-y-4 sm:space-y-6 md:space-y-8">
                        <h1 className={cn("uppercase text-3xl sm:text-4xl md:text-6xl font-bold tracking-wide mb-5")} style={{ color: colors.white }}>
                            {course?.name}
                        </h1>
                        <p className={cn("uppercase text-lg sm:text-xl md:text-2xl font-semibold mb-5")} style={{ color: colors.white }}>
                            {course?.subtitle}
                        </p>
                        <div className="space-x-0 sm:space-x-4">
                            <HoveredButton
                                className="py-3 sm:py-4 hover:border-white hover:bg-transparent"
                                name="BEPUL BIRINCHI DARS"
                                style={{ backgroundColor: colors.green, color: colors.white, borderColor: colors.green }}
                            />
                            <HoveredButton
                                className="py-3 sm:py-4 bg-slate-950 text-white border-white hover:bg-white hover:text-black"
                                name="BIZ BILAN BOG'LANISH"
                                style={{}}
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Hero;
