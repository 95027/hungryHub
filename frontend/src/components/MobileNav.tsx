import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "./ui/sheet"
import { Button } from "./ui/button"
import { Separator } from "./ui/separator"


const MobileNav = () => {
  return (
    <Sheet>
        <SheetTrigger>
            <Menu className="text-green-500"/>
        </SheetTrigger>
        <SheetContent className="space-y-3">
            <SheetTitle>
                <span>Welcome to HungerHub</span>
            </SheetTitle>
            <Separator/>
            <SheetDescription className="flex">
                <Button className="flex-1 bg-green-500 font-bold">Login</Button>
            </SheetDescription>
        </SheetContent>
    </Sheet>
  )
}

export default MobileNav