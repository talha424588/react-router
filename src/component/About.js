import { Link, Outlet,useLocation } from "react-router-dom"

function About()
{
    const location = useLocation()
    console.log("location ",location);
    return(
        <>
        <h3>About Page</h3>
        <Link to={"company"}>Company</Link>
        <Outlet></Outlet>
        </>
    )
}
export default About