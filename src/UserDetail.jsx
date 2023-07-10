import { useParams, useLocation, Link } from "react-router-dom";

const UserDetail = () => {
    //share id from UsersCard
    const { id } = useParams()
    console.log(id)

    //give me data from UsersCard --> location
    const location = useLocation()
    const data = location.state

    //filter by single object
    let detail = data.filter((e) => {
        return e.id == id
    })


    return (
        <div>
            <h1>Profile:</h1>
            <p>{detail[0].name}</p>
            <p>Username: {detail[0].username}</p>
            <p>Email: {detail[0].email}</p>
            <a href={detail[0].website}>Website: {detail[0].website}</a>
            <p>Phone: {detail[0].phone}</p>
            <Link to='/'>back</Link>
        </div>
    )
}

export default UserDetail