"use client"
import Image from "next/image"
import React from "react"
import { cn } from "@/lib/utils"
import colors from "@/lib/colors"
import { URL } from "@/helpers/api"
import { BackendCardProps } from "@/types/cards"

const Avatar = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { children: React.ReactNode }
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full", className)}
    {...props}
  />
))
Avatar.displayName = "Avatar"

const AvatarImage = React.forwardRef<HTMLImageElement, React.ImgHTMLAttributes<HTMLImageElement>>(
  ({ className, ...props }, ref) => (
    <img ref={ref} className={cn("aspect-square h-full w-full", className)} {...props} alt={props.title} />
  ),
)
AvatarImage.displayName = "AvatarImage"

const AvatarFallback = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("flex h-full w-full items-center justify-center rounded-full", className)}
      style={{ backgroundColor: colors.grayText }}
      {...props}
    />
  ),
)
AvatarFallback.displayName = "AvatarFallback"


export default function BackendCard({
  courseTitle,
  start_date,
  duration,
  price,
  instructorName,
  photo,
  image
}: BackendCardProps) {
  return (
    <div
    className="rounded-lg px-6 pb-3 w-full"
    style={{ backgroundColor: colors.white, border: `1px solid ${colors.green}` }}
  >
    {/* Course Title – Tepada alohida */}
    <h2 className="text-xl font-medium text-center md:text-left" style={{ color: colors.green }}>
      {courseTitle}
    </h2>

    {/* Qolgan qismlar flex */}
    <div className="flex flex-col md:flex-row w-full gap-10 items-start">
      {/* Chap taraf – Image */}
      <div className="relative w-full max-w-[300px] h-auto aspect-[4/3] overflow-hidden rounded-md">
        <Image
          src={`${URL}${image}`}
          alt={courseTitle}
          fill
          className="object-contain rounded-2xl"
          sizes="(max-width: 768px) 100vw, 300px"
        />
      </div>

      {/* O'ng taraf – Malumotlar */}
      <div className="flex flex-col justify-between h-full flex-1">
        <div className="flex flex-col gap-5">
          <div className="flex justify-between gap-4">
            <div className="flex flex-col">
              <span style={{ color: colors.grayText }}>Yangi guruh:</span>
              <span className="font-medium" style={{ color: colors.green }}>
                {start_date}
              </span>
            </div>

            <div className="flex flex-col">
              <span style={{ color: colors.grayText }}>Davomiyligi:</span>
              <span className="font-medium" style={{ color: colors.green }}>
                {duration}
              </span>
            </div>
          </div>

          <div className="flex flex-col">
            <span style={{ color: colors.grayText }}>Narxi:</span>
            <span className="font-medium" style={{ color: colors.green }}>
              {price} ming so&apos;m
            </span>
          </div>
        </div>

        {/* Instructor – Pastda alohida chiqadi */}
        <div className="flex items-center gap-2 mt-10">
          <Avatar>
            <AvatarImage src={`${URL}${photo}`} alt={instructorName} />
            <AvatarFallback>{instructorName[0]}</AvatarFallback>
          </Avatar>
          <span className="font-medium" style={{ color: colors.black }}>
            {instructorName}
          </span>
        </div>
      </div>
    </div>
  </div>
  )
}
