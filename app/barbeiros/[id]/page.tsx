import { Button } from "@/app/_components/ui/button"
import { db } from "@/app/_lib/prisma"
import { ChevronLeftIcon, MenuIcon } from "lucide-react"
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
          src={barbeiro.imagemUrl}
          fill
          className="object-cover"
          alt={barbeiro.nome}
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
    </div>
  )
}

export default BarbeiroPage
