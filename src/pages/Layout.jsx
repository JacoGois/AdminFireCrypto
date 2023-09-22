import { Header } from "../components/Header"
import { Loader } from "../components/Loader"
import { Sidebar } from "../components/Sidebar/Sidebar"
import { useBalance } from "../contexts/BalanceContext"

export const Layout = ({ children }) => {
  const { loadingCotation } = useBalance()

  return (
    <main className="flex md:text-sm xl:text-base min-h-screen h-full text-base no-srollbar bg-background font-Montserrat no-scrollbar">
      <Sidebar />
      <div className="w-full">
        <Header />
        <section className="overflow-y-scroll p-4 h-screenLayout">
          {loadingCotation ? (
            <div className="h-full w-full flex items-center justify-center">
              <Loader />
            </div>
          ) : 
            children
          }
        </section>
      </div>
    </main>
  )
}