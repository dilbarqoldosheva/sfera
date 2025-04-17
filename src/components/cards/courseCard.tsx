"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { IProps } from "@/types/cards"
import colors from "@/lib/colors"
import { URL } from "@/helpers/api"

export default function CourseCard({
    id,
    name,
    photo,
    subtitle,
    about,
}: IProps) {
    const [isHovered, setIsHovered] = useState(false)

    const truncateText = (text: string, wordLimit: number) => {
        const words = text.split(" ")
        if (words.length <= wordLimit) return text
        return words.slice(0, wordLimit).join(" ") + "..."
    }

    return (
        <div
            className="relative w-full max-w-sm h-[500px] rounded-lg overflow-hidden border-2"
            style={{ borderColor: colors.green }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Background Image */}
            <div className="absolute inset-0 transition-all duration-500">
                <Image
                    src={`${URL}${photo}`}
                    alt={name}
                    fill
                    className={`object-cover transition-all duration-500 ease-in-out ${isHovered ? "brightness-50 scale-105" : "brightness-100 scale-100"}`}
                    priority
                />
            </div>

            {/* Hover content */}
            <div className={`relative h-full flex flex-col z-10 transition-all duration-500 ease-in-out
    ${isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"} 
  `}>
                <div className="p-6 flex-1 flex flex-col items-center justify-center text-center">
                    <h3 className="text-2xl font-bold mb-2" style={{ color: colors.green }}>
                        {name}
                    </h3>
                    <p className="text-sm pb-10" style={{ color: colors.white }}>
                        {subtitle}
                    </p>
                    <Link
                        href={{
                            pathname: `course/${id}`,
                            query: { id, name },
                        }}
                        className="inline-block px-6 py-1 bg-transparent border rounded-xl"
                        style={{ color: colors.white, borderColor: colors.white }}
                    >
                        Batafsil
                    </Link>
                </div>
                <div className="p-6 text-center h-40" style={{ backgroundColor: colors.green }}>
                    <p className="text-base" style={{ color: colors.white }}>
                        {truncateText(about, 20)}
                    </p>
                </div>
            </div>

            {/* Non-hover content (about qismini hoverda yo‘qotamiz) */}
            <div
                className={`absolute bottom-0 w-full p-6 text-center h-40 z-[5] transition-all duration-500 ease-in-out
      ${isHovered ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"}
    `}
                style={{ backgroundColor: colors.white }}
            >
                <p className="text-base font-raleway" style={{ color: colors.grayText }}>
                    {truncateText(about, 20)}
                </p>
            </div>
        </div>

    )
}
