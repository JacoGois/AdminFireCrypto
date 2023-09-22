import { emergenceVariant } from "../../../animations"
import { BoxRoot } from "../../../components/BoxRoot"
import { Skeleton } from "../../../components/Skeleton"

export const NewsCard = ({ loadingNotice, dataNotice }) => {
  return (
    <BoxRoot variants={emergenceVariant} initial='hidden' animate='visible' className="flex flex-col w-full px-3 pt-2 h-[350px] overflow-scroll no-scrollbar no-scrollbar">
      <h4 className="text-lg font-semibold">News</h4>
      <span className="text-xs mt-3 text-gray-300">TODAY</span>
      <div className="mt-3">
        {loadingNotice && (
          <div className="flex flex-col gap-2">
            <Skeleton height='69' />
            <Skeleton height='69' />
            <Skeleton height='69' />
            <Skeleton height='69' />
            <Skeleton height='69' />
            <Skeleton height='69' />
            <Skeleton height='69' />
            <Skeleton height='69' />
            <Skeleton height='69' />
            <Skeleton height='69' />
          </div>
        )}
          {!loadingNotice && dataNotice.map(notice => (
            <div key={notice.url} className="h-[69px] px-3 py-2 border-b flex items-center gap-2 hover:bg-gray-100 transition-colors duration-300">
              <div className="h-[50px] w-[80px] flex justify-center items-center">
                <img className="object-cover h-full w-full" src={notice.banner_image}  />
              </div>
              <a href={notice.url} target="_blank" className="underline cursor-pointer hocer:opacity-75 truncate">{notice.title}</a>
            </div>
          ))}
        <div>
        </div>
      </div>
    </BoxRoot>
  )
}