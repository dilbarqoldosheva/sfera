import Image from "next/image";
import colors from "@/lib/colors"

export default function Hero() {
  return (
    <section className="py-12 px-4 ">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row py-20 justify-between items-center">
          
          <div className="md:w-1/3 flex flex-col justify-center md:text-left mb-10 md:mb-0">
            <h2 className="text-4xl font-bold uppercase mb-2" style={{color:colors.green}}>
              Sfera Akademiyasi
            </h2>
            <h3 className="text-3xl font-bold uppercase mb-6 text-center " style={{color:colors.green}}>
              Qadriyatlari
            </h3>
            <p className="max-w-md mx-auto md:mx-0 text-sm leading-relaxed text-center" style={{color:colors.grayText}}>
              SFERA AKADEMIYASI HAR BIR O&apos;QUVCHINING SALOHIYATINI OCHISH, ZAMONAVIY BILIM VA KO&apos;NIKMALAR BILAN
              QUROLLANTIRSHGA INTILADI.
            </p>
          </div>

          <div className="md:w-2/3 flex justify-center items-center">
            <Image src="/home/achievements.png" width={800} height={800} alt="image" />
          </div>

        </div>
      </div>
    </section>
  );
}
