import Image from "next/image"
import { Card, CardContent } from "./ui/card"
import { Button } from "./ui/button"
import { MenuIcon } from "lucide-react"

const Header = () => {
  return (
    <Card>
      <CardContent className="p5 intems-center flex flex-row justify-between">
        <Image
          alt="Saloon Barber"
          src="/Logoceleiro.png"
          height={100}
          width={40}
        />
        <Button size="icon" variant="outline">
          <MenuIcon></MenuIcon>
        </Button>
      </CardContent>
    </Card>
  )
}

export default Header
