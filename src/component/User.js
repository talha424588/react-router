import { useParams,useLocation } from "react-router-dom";

function User()
{
    const params = useParams()
    const name = params.name
    const location = useLocation()
    console.log("location ",location);
    
    return (
        <>
        <h1>{name} Detail</h1>
        </>
    )
}
export default User;