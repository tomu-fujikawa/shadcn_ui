"use client"

type CourseCardProps = {
    joinDay: Date | undefined;
    date: Date | undefined;
}

export function CourseCard({
    joinDay,
    date
  }: CourseCardProps) {
  return (
    <div className="flex flex-col bg-white border shadow-sm rounded-xl p-4 md:p-5 dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70 w-[300px]">
  <h3 className="text-lg font-bold text-gray-800 dark:text-white">
  コース経過日数
  </h3>
  <p className="mt-1 text-xs font-medium uppercase text-gray-500 dark:text-neutral-500">
    目安：180日
  </p>
  <div className="flex items-end justify-center gap-2 mt-3">
  <p className="mt-2 text-9xl dark:text-neutral-400">
  {joinDay ? Math.floor((date?.getTime()! - joinDay.getTime()) / (1000 * 60 * 60 * 24)) : ""}
  </p>
  <p className="mt-2 text-5xl font-medium uppercase text-gray-500 dark:text-neutral-500 mb-2">
    日目
    </p>
    </div>
</div>
  )


}
export default CourseCard;