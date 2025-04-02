import Image from "next/image"
import { Card, CardContent } from "./ui/card"
import { Button } from "./ui/button"
import { MenuIcon } from "lucide-react"

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
        <Button
          size="icon"
          variant="outline"
          className="cursor-pointer bg-lime-900 hover:bg-lime-700"
        >
          <MenuIcon></MenuIcon>
        </Button>
      </CardContent>
    </Card>
  )
}

export default Header
