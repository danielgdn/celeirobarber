import { Button } from "@/app/_components/ui/button"
import { db } from "@/app/_lib/prisma"
import { ChevronLeftIcon, MapPinIcon, MenuIcon, StarIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface BarbeiroPageProps {
  params: {
    id: string
  }
}

const BarbeiroPage = async ({ params }: BarbeiroPageProps) => {
  const barbeiro = await db.barbeiros.findUnique({
    where: {
      id: params.id,
    },
  })
  return (
    <div>
      <div className="relative h-[300px] w-full">
        <Image
          src={barbeiro?.imagemUrl}
          fill
          className="object-cover"
          alt={barbeiro?.nome}
        ></Image>
        <Button
          size="icon"
          className="absolute top-4 left-4 fill-lime-900 text-lime-200 hover:bg-lime-600"
          asChild
        >
          <Link href="/">
            <ChevronLeftIcon />
          </Link>
        </Button>

        <Button
          size="icon"
          className="absolute top-4 right-4 fill-lime-900 text-lime-200"
        >
          <MenuIcon />
        </Button>
      </div>
      <div className="border-b border-solid p-5">
        <h1 className="mb-3 text-xl font-bold">{barbeiro?.nome}</h1>
        <div className="mb-2 flex items-center gap-1">
          <MapPinIcon className="text-primary" size={18} />
          <p>{barbeiro?.telefones}</p>
        </div>

        <div className="flex items-center gap-1">
          <StarIcon className="text-primary fill-lime-800" size={18} />
          <p>4.7 (890 Avaliações)</p>
        </div>
      </div>

      <div className="space-y-2 border-b border-solid p-5">
        <h2 className="text-xs font-bold uppercase">Sobre</h2>
        <p className="text-justify text-sm">{barbeiro?.descricao}</p>
      </div>
    </div>
  )
}

export default BarbeiroPage
