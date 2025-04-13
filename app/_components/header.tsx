import Image from "next/image"
import { Card, CardContent } from "./ui/card"
import { Button } from "./ui/button"
import { CalendarIcon, HomeIcon, LogOutIcon, MenuIcon } from "lucide-react"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet"
import { buscaRapida } from "../_constants/search"
import { Avatar } from "./ui/avatar"
import { AvatarImage } from "./ui/avatar"
import Link from "next/link"

const Header = () => {
  return (
    <Card>
      <CardContent className="p2 intems-center flex flex-row justify-between">
        <Image
          alt="Saloon Barber"
          src="/Photoroom1.png"
          height={2}
          width={250}
        />

        <Sheet>
          <SheetTrigger asChild>
            <Button
              size="icon"
              variant="outline"
              className="cursor-pointer bg-lime-900 hover:bg-lime-700"
            >
              <MenuIcon />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>MENU</SheetTitle>
            </SheetHeader>
            <div className="flex items-center gap-3 border-b border-solid p-5 py-5">
              <Avatar>
                <AvatarImage src="https://images.unsplash.com/photo-1742201877377-03d18a323c18?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D://unsplash.com/pt-br/fotografias/o-homem-mongol-usa-um-chapeu-e-um-casaco-de-pele-tradicionais-qvm1ZpgtiUw" />
              </Avatar>
              <div>
                <p className="font-bold"> Daniel Sousa</p>
                <p className="text-xs">13-abril, 06:03 </p>
              </div>
            </div>

            <div className="flex flex-col gap-2 border-b border-solid p-5">
              <SheetClose asChild>
                <Button
                  className="cursor-pointer justify-start bg-lime-900 text-lime-100 hover:bg-lime-700"
                  asChild
                >
                  <Link href="/">
                    <HomeIcon size={12} /> Inicio
                  </Link>
                </Button>
              </SheetClose>
              <Button className="cursor-pointer justify-start bg-lime-900 text-lime-100 hover:bg-lime-700">
                <CalendarIcon size={12} /> Agendamentos
              </Button>
            </div>

            <div className="flex flex-col gap-2 border-b border-solid p-5">
              {buscaRapida.map((opcao) => (
                <Button
                  className="cursor-pointer justify-start bg-lime-900 text-lime-100 hover:bg-lime-700"
                  key={opcao.title}
                >
                  <Image
                    className="cursor-pointer bg-lime-900 text-lime-100 hover:bg-lime-700"
                    src={opcao.imageUrl}
                    height={18}
                    width={18}
                    alt={opcao.title}
                  />{" "}
                  {opcao.title}
                </Button>
              ))}
            </div>
            <div className="flex flex-col gap-2 border-b border-solid p-5">
              <Button
                className="cursor-pointer justify-start text-lime-900 hover:bg-lime-900"
                variant="ghost"
              >
                <LogOutIcon /> Sair da Conta
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </CardContent>
    </Card>
  )
}

export default Header
