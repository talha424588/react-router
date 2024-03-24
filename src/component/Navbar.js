import { Link } from "react-router-dom"
function Navbar()
{
    return(
        <>
        <ul>
            <li><Link to={"/"}>home</Link></li>
            <li><Link to={"store"}>Store</Link></li>
            <li><Link to={"about"}>About Us</Link></li>
            <li><Link to={"user/anil"}>Anil</Link></li>
            <li><Link to={"user/peter"}>Peter</Link></li>
        </ul>
        </>
    )
}
export default Navbar