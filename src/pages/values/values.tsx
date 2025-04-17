import SectionTitle from "@/components/SectionTitle/SectionTitle";
import { URL } from "@/helpers/api";
import colors from "@/lib/colors";
import Image from "next/image";

// Props tipi aniq bo'lishi uchun `achievementData` ni massiv deb e'lon qilamiz
interface Achievement {
  id: number;
  title: string;
  description: string;
  image: string;
}

interface ValuesProps {
  achievementData: Achievement[];
}

export default function Values({ achievementData = [] }: ValuesProps) {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto py-20">
        <div className="my-10">
          <SectionTitle title="YUTUQLARIMIZ" />
        </div>

        {achievementData.length > 0 ? (
          achievementData.map((achievement) => (
            <div key={achievement.id}>
              <div
                className={`lg:flex justify-center items-center ${
                  achievement.id % 2 === 0 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className="lg:w-1/2">
                  <h2
                    className="text-3xl font-bold mb-4 text-center"
                    style={{ color: colors.green }}
                  >
                    {achievement.title}
                  </h2>
                  <p className="text-lg leading-relaxed mb-8 text-center px-4 md:px-20">
                    {achievement.description}
                  </p>
                </div>
                <div className="lg:w-1/2 mt-8 lg:mt-0">
                  <div className="overflow-hidden">
                    <Image
                      src={`${URL}/${achievement.image}`}
                      alt={achievement.title}
                      width={500}
                      height={600}
                      className="w-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">Yutuqlar topilmadi</p>
        )}
      </div>
    </section>
  );
}
