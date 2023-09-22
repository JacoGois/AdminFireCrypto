import { useResolvedPath } from "react-router-dom"
import { useGetNameByPath } from "./hooks/useGetNameByPath"

export const Header = () => {
  const { pathname } = useResolvedPath()
  return (
    <div className="h-16 w-full border-b bg-surface flex justify-between px-3 md:px-5 items-center">
      <h3 className="text-xl font-semibold">{useGetNameByPath(pathname.replace(/[/]/g, ""))}</h3>
      <div className="flex gap-2 items-center">
        <div className="h-10 w-10 overflow-hidden rounded-full">
          <img className="object-cover" src="/images/man.jpg" alt="" />
        </div>
        <div className="hidden sm:flex flex-col italic">
          <p className="font-semibold text-base">Michael</p>
          <span className="-mt-1 text-gray-300 text-sm">michael@email.com</span>
        </div>
      </div>
    </div>
  )
}