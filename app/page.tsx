import { SearchIcon } from "lucide-react"
import Header from "./_components/header"
import { Button } from "./_components/ui/button"
import { Input } from "./_components/ui/input"
import Image from "next/image"
import { Card, CardContent } from "./_components/ui/card"
import { Badge } from "./_components/ui/badge"
import { Avatar, AvatarImage } from "./_components/ui/avatar"
import { db } from "./_lib/prisma"
import BarberItem from "./_components/barber-item"
import ServicosItem from "./_components/servicos-item"
import { buscaRapida } from "./_constants/search"

const Home = async () => {
  const barbeiros = await db.barbeiros.findMany({})

  const servicos = await db.servicosBarbeiro.findMany({})

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

        <div className="mt-6 flex gap-3">
          {buscaRapida.map((option) => (
            <Button className="gap-2 text-lime-200" key={option.title}>
              <Image
                src={option.imageUrl}
                width={16}
                height={16}
                alt={option.title}
              />
              {option.title}
            </Button>
          ))}
        </div>

        <div className="relative mt-6 h-[400px] w-full">
          <Image
            alt="agende seu horário"
            src="/Teste01.jpg"
            fill
            className="h-40 w-400 rounded-xl object-cover"
          />
        </div>
        <h2 className="mt-6 mb-3 text-xs font-bold text-lime-800 uppercase">
          Agendamentos
        </h2>
        <Card>
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

        <h2 className="mt-6 mb-3 text-xs font-bold text-lime-800 uppercase">
          Recomendado
        </h2>
        <div className="scrollbar-hiden md:scrollbar-thin md:scrollbar-thumb-lime-100 md:scrollbar-track-lime-200 flex gap-4 overflow-x-auto">
          {barbeiros.map((barbeiro) => (
            <BarberItem key={barbeiro.id} barbeiro={barbeiro} />
          ))}
        </div>

        <div className="scrollbar-hiden md:scrollbar-thin md:scrollbar-thumb-lime-100 md:scrollbar-track-lime-200 mt-6 flex gap-4 overflow-x-auto">
          {servicos.map((servicos) => (
            <ServicosItem key={servicos.id} servicos={servicos} />
          ))}
        </div>
      </div>

      <footer>
        <Card>
          <CardContent className="px-5 py-2">
            <p className="text-center text-sm text-lime-950">
              © Copyright Celeiro Saloon Barber Av. Pref. José Juvenal Mafra,
              1340 - Centro, Navegantes - SC, 88372-506 Telefone: (47)
              99118-1181
            </p>
          </CardContent>
        </Card>
      </footer>
    </div>
  )
}

export default Home
