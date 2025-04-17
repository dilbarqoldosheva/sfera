import Image from "next/image"
import Link from "next/link"
import { BestStudent } from "@/types/cards"
import colors from "@/lib/colors"
import { URL } from "@/helpers/api"

export default function StudentTestimonialCard({
  course_name,
  description,
  photo,
  readMoreUrl = "/",
  readMoreText = "Ko'proq",
}: BestStudent) {
  return (
    <div
      className="rounded-2xl border-2 overflow-hidden flex flex-col md:flex-row max-w-3xl"
      style={{ borderColor: colors.green, backgroundColor: colors.white }}
    >
      <div className="md:w-2/5 relative">
        <div className="aspect-square md:h-full relative">
          <Image
            src={`${URL}${photo}`}
            alt={course_name}
            fill
            className="object-cover rounded-2xl"
            sizes="(max-width: 768px) 100vw, 384px"
            priority
          />
        </div>
      </div>

      <div className="p-6 md:w-3/5 flex flex-col justify-center">
        <h3 className="text-2xl font-bold mb-1" style={{ color:colors.green }}>
          {course_name}
        </h3>
        <p className="mb-4">
          Kurs: <span className="font-medium" style={{ color: colors.green }}>{course_name}</span>
        </p>

        <p className="mb-1">
          {description}
          {readMoreUrl && (
            <Link
              href={readMoreUrl}
              className="hover:underline ml-1"
              style={{ color: colors.green }}
            >
              {readMoreText}
            </Link>
          )}
        </p>
      </div>
    </div>
  )
}
