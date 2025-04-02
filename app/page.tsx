import { SearchIcon } from "lucide-react"
import Header from "./_components/header"
import { Button } from "./_components/ui/button"
import { Input } from "./_components/ui/input"
import Image from "next/image"

const Home = () => {
  return (
    <div>
      <Header />
      <div className="p-5">
        <h2 className="text-xl font-bold">Olá, Daniel!</h2>
        <p> Segunda - Feira, 10 de Março.</p>
        <div className="mt-6 flex items-center gap-2">
          <Input
            placeholder="Faça sua busca"
            className="border-2 border-lime-900"
          />
          <Button className="cursor-pointer bg-lime-900 text-lime-200 hover:bg-lime-700">
            <SearchIcon />
          </Button>
        </div>

        <div className="relative mt-6 h-[150px] w-full">
          <Image
            alt="agende seu horário"
            src="/Teste01.jpg"
            fill
            className="h-40 w-400 rounded-xl object-cover"
          />
        </div>
      </div>
    </div>
  )
}

export default Home
