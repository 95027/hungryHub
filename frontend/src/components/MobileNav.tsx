import { CircleUserIcon, Menu } from "lucide-react"
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "./ui/sheet"
import { Button } from "./ui/button"
import { Separator } from "./ui/separator"
import { useAuth0 } from "@auth0/auth0-react"
import MobileNavLinks from "./MobileNavLinks"


const MobileNav = () => {

    const {isAuthenticated, user, loginWithRedirect} = useAuth0();
  return (
    <Sheet>
        <SheetTrigger>
            <Menu className="text-green-500"/>
        </SheetTrigger>
        <SheetContent className="space-y-3">
            <SheetTitle>
                {isAuthenticated ? <span className="flex items-center gap-2 font-bold"><CircleUserIcon className="text-green-500"/> {user?.name}</span> : <span>Welcome to HungerHub</span>}
            </SheetTitle>
            <Separator/>
            <SheetDescription className="flex flex-col gap-4">
                {isAuthenticated ? <MobileNavLinks/> : 
                <Button className="flex flex-1 items-center px-3 bg-green-500 font-bold" onClick={async () => await loginWithRedirect()}>Login</Button>
                }
            </SheetDescription>
        </SheetContent>
    </Sheet>
  )
}

export default MobileNav