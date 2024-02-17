import { useAuth0 } from "@auth0/auth0-react"
import { Button } from "./ui/button"
import { Link } from "react-router-dom";

const MobileNavLinks = () => {

    const {logout} = useAuth0();

  return (
    <>
    <Link to='/user-profile' className="flex font-bold hover:text-green-500">User profile</Link>
    <Button className="flex flex-1 bg-green-500 hover:text-green-500 hover:bg-white font-bold" onClick={() => logout()}>Logout</Button>
    </>
  )
}

export default MobileNavLinks