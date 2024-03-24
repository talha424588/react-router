import { Link } from "react-router-dom";

function NotFound()
{
    return(
        <>
        <h1>404</h1>
        <p>Page not found</p>
        <Link to={"/"}>Go Back To Homepage</Link>
        </>
    )
}
export default NotFound;