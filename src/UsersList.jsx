import { useEffect, useState } from 'react'
import UserCard from './UserCard.jsx'

const UsersList = () => {
    const [usersData, setUsersData] = useState([])
    async function getUsersData() {
        await fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => setUsersData(json))
    }

    useEffect(() => {
        getUsersData()
    }, [])
    return (
        <div>
            {
                usersData.map((e) => (
                    <UserCard
                        key={e.id}
                        id={e.id}
                        name={e.username}
                        username={e.username}
                        email={e.email}
                        website={e.website}
                        phone={e.phone}
                        usersData={usersData}
                    />
                ))
            }
        </div>
    )
}

export default UsersList

