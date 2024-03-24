import { useParams } from "react-router-dom";

function User()
{
    const params = useParams()
    const name = params.name
    
    return (
        <>
        <h1>{name} Detail</h1>
        </>
    )
}
export default User;