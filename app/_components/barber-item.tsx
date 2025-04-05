import { Barbeiros } from "@prisma/client"
import { Card, CardContent } from "./ui/card"
import Image from "next/image"
import { Button } from "./ui/button"

interface BarberItemProps {
  barbeiro: Barbeiros
}

const BarberItem = ({ barbeiro }: BarberItemProps) => {
  return (
    <Card className="m-0 min-w-[159px] py-0">
      <CardContent className="mt-0 p-0">
        <div className="relative h-[159px] w-full">
          <Image
            fill
            className="mt-0 rounded-xl object-cover"
            src={barbeiro.imagemUrl}
            alt={barbeiro.nome}
          />
        </div>
        <div className="px-2 py-3">
          <h3 className="truncate font-semibold text-lime-900">
            {barbeiro.nome}
          </h3>
          <p className="truncate text-sm text-lime-800">{barbeiro.telefones}</p>
          <Button className="mt-3 w-full cursor-pointer bg-lime-900 px-1 text-lime-200 hover:bg-lime-700">
            Reservar
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

export default BarberItem
