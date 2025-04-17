"use client"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import TeamMemberCard from "@/components/cards/TeamMember"
import SectionTitle from "@/components/SectionTitle/SectionTitle"
import {  teacher, TeamMemberCardProps } from "@/types/cards"

const Team = ({ teacherData }: { teacherData: TeamMemberCardProps[] }) => {
    if (!teacherData || teacherData.length === 0) {
        return <div>Loading...</div>; // Or display an appropriate fallback message
    }

    return (
        <section className="w-full px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto py-10">
                <div className="mb-10">
                    <SectionTitle title="BIZNING JAMOA" />
                </div>
                <Swiper
                    className="relative"
                    modules={[Navigation, Pagination]}
                    spaceBetween={20}
                    navigation
                    breakpoints={{
                        640: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                        1280: { slidesPerView: 4 },
                    }}
                >
                    {teacherData.map((member: TeamMemberCardProps) => (
                        <SwiperSlide key={member.id}>
                            <TeamMemberCard
                                name={member.name}
                                level={member.level}
                                photo={member.photo}
                                // socialLinks={member.socialLinks}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
                <style jsx global>{`
                    .swiper-button-next,
                    .swiper-button-prev {
                        color: white;
                        background-color: #1ca855;
                        padding: 10px;
                        border-radius: 9999px;
                        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                        width: 40px;
                        height: 40px;
                    }

                    .swiper-button-next::after,
                    .swiper-button-prev::after {
                        font-size: 16px;
                    }
                `}</style>
            </div>
        </section>
    );
};


export default Team
