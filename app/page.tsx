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
  const barbeiros = await db.barbeiros.findMany({
    where: {
      ativo: true,
    },
  })

  const servicos = await db.servicosBarbeiro.findMany({})
  const barberCount = barbeiros.length

  // Função para calcular a largura com base no número de barbeiros
  const getBarberWidthClass = (count: number) => {
    if (count === 1) return "w-250"
    if (count === 2) return "w-1/2"
    if (count === 3) return "w-1/3"
    if (count === 4) return "w-1/4"
    if (count >= 5) return "w-1/5"
    return "w-full" // Padrão
  }

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

        <div className="relative mt-6 h-[600px] w-full">
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
            <div className="flex flex-col gap-5 py-3 pl-5">
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

        {/* Lista de Barbeiros com flexbox responsivo e scroll horizontal */}
        <div
          className={`flex flex-nowrap justify-center gap-1 overflow-x-auto ${
            barberCount > 5 ? "space-x-2" : ""
          }`}
        >
          {barbeiros.map((barbeiro) => {
            const widthClass = getBarberWidthClass(barberCount) // Usa a função para obter a largura correta
            return (
              <div
                key={barbeiro.id}
                className={`${widthClass} flex-none`} // Aplica a classe calculada
              >
                <BarberItem barbeiro={barbeiro} />
              </div>
            )
          })}
        </div>

        <div className="scrollbar-hiden md:scrollbar-thin md:scrollbar-thumb-lime-100 md:scrollbar-track-lime-200 mt-6 flex gap-4 overflow-x-auto">
          {servicos.map((servicos) => (
            <ServicosItem key={servicos.id} servicos={servicos} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home
