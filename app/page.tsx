import { SearchIcon } from "lucide-react"
import Header from "./_components/header"
import { Button } from "./_components/ui/button"
import { Input } from "./_components/ui/input"

const Home = () => {
  return (
    <div>
      <Header />
      <div className="p-5">
        <h2 className="text-xl font-bold">Olá, Daniel!</h2>
        <p> Segunda - Feira, 10 de Março.</p>
        <div className="mt-6 flex items-center gap-2">
          <Input placeholder="Faça sua busca" />
          <Button>
            <SearchIcon />
          </Button>
        </div>

        <div className="relative h-[280px] w-full"></div>
      </div>
    </div>
  )
}

export default Home
