import { NavLink } from "react-router-dom"
function Navbar()
{
    return(
        <>
        
        <ul className="navbar">
            <li><NavLink className={"navbar_link"} to={"/"}>home</NavLink></li>
            <li><NavLink className={"navbar_link"} to={"store"}>Store</NavLink></li>
            <li><NavLink className={"navbar_link"} to={"about"}>About Us</NavLink></li> 
            {/* //use location state work when you pass data from link  */}
            <li><NavLink className={"navbar_link"} to={"user/anil"} state={{name:"ani sidhu"}}>Anil</NavLink></li>
            <li><NavLink className={"navbar_link"} to={"user/peter"}>Peter</NavLink></li>
        </ul>
        </>
    )
}
export default Navbar