import SectionTitle from "@/components/SectionTitle/SectionTitle"
import Image from "next/image"
import colors from "@/lib/colors"
import { URL } from "@/helpers/api"

export default function Teacher({ course }: any) {
    // course yoki course.teachers mavjudligini tekshirish
    if (!course || !course.teachers || course.teachers.length === 0) {
        return <p className="text-center">No teachers found</p>; // Agar o'qituvchilar bo'lmasa, xabar ko'rsatish
    }

    return (
        <section className="py-10" style={{ color: colors.green }}>
            <div className="mb-10">
                <SectionTitle title={`${course.name} o’qituvchilari`} />
            </div>
            <div className="flex flex-col">
                <div style={{ backgroundColor: colors.green }}>
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col gap-40 md:flex-row">
                            {course.teachers.map((member: any) => (
                                <div key={member.id}>
                                    <div className="mt-10">
                                        <Image
                                            src={`${URL}${member.photo}`}
                                            alt={member.name}
                                            width={250}
                                            height={250}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="container mx-auto px-4">
                    <div className="flex flex-col gap-75 md:flex-row">
                        {course.teachers.map((member: any) => (
                            <div key={member.id}>
                                <h3 className="text-xl text-center">{member.name}</h3>
                                <p className="text-center" style={{ color: colors.grayText }}>
                                    {member.level}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
