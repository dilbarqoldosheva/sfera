import colors from '@/lib/colors' 


export default function CourseInfoSection({ course }: { course: any }) {
  if (!course) return null; // yoki <p>Ma'lumot topilmadi</p>

  return (
    <div style={{ backgroundColor: colors.green, color: colors.white }} className="w-full p-6">
      <div className="container mx-auto">
        <div
          className="grid grid-cols-1 md:grid-cols-4 gap-4 divide-y md:divide-y-0 md:divide-x"
          style={{ borderColor: colors.green }}
        >
          <div className="px-4 py-2">
            <h3 className="text-sm font-medium">Barcha darslar miqdori:</h3>
            <p className="text-2xl font-bold">{course.lesson_count ?? 0} dars</p>
          </div>

          <div className="px-4 py-2">
            <h3 className="text-sm font-medium">Ta&apos;lim formati:</h3>
            <p className="text-2xl font-bold">{course.format ?? 'Noma’lum'}</p>
          </div>

          <div className="px-4 py-2">
            <h3 className="text-sm font-medium">Kurs davomiyligi:</h3>
            <p className="text-2xl font-bold">{course.course_duration ?? 'Noma’lum'}</p>
          </div>

          <div className="px-4 py-2">
            <h3 className="text-sm font-medium">Dars davomiyligi:</h3>
            <p className="text-2xl font-bold">{course.lesson_duration ?? 'Noma’lum'}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
