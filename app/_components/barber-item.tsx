import { Barbeiros } from "@prisma/client"
import { Card, CardContent } from "./ui/card"
import Image from "next/image"
import { Button } from "./ui/button"

interface BarberItemProps {
  barbeiro: Barbeiros
}

const BarberItem = ({ barbeiro }: BarberItemProps) => {
  return (
    <Card className="min-w-[159]">
      <CardContent className="m-0 p-0">
        <div className="relative mt-0 h-[159px] w-full">
          <Image
            fill
            className="object-cover"
            src={barbeiro.imagemUrl}
            alt={barbeiro.nome}
          />
        </div>
        <div className="px-2 py-3">
          <h3 className="font-semibold text-lime-900">{barbeiro.nome}</h3>
          <p className="text-sm text-lime-800">{barbeiro.telefones}</p>
          <Button className="cursor-pointer bg-lime-900 text-lime-200 hover:bg-lime-700">
            Reservar
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

export default BarberItem
