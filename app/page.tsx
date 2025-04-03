import { SearchIcon } from "lucide-react"
import Header from "./_components/header"
import { Button } from "./_components/ui/button"
import { Input } from "./_components/ui/input"
import Image from "next/image"
import { Card, CardContent } from "./_components/ui/card"
import { Badge } from "./_components/ui/badge"
import { Avatar, AvatarImage } from "./_components/ui/avatar"

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
        <Card className="mt-6">
          <CardContent className="flex justify-between p-0">
            <div className="flex flex-col gap-2 py-5 pl-5">
              <Badge className="w-fit bg-lime-900 text-lime-200">
                Confirmado
              </Badge>
              <h3 className="font-semibold text-lime-900">Corte de Cabelo</h3>
              <div className="flex items-center gap-2">
                <Avatar className="h-10 w-10">
                  <AvatarImage src="/Logoceleiro.png" />
                </Avatar>
                <p className="text-lime-900">Barbeiro André</p>
              </div>
            </div>
            <div className="flex flex-col justify-center border-l-1 border-solid px-5">
              <p className="text-sm text-lime-900">Agosto</p>
              <p className="text-xl text-lime-900">05</p>
              <p className="text-sm text-lime-900">10:30</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default Home
