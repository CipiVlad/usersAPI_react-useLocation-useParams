import { Link } from 'react-router-dom'

const UserCard = (props) => {
  return (
    <div className='card'>
      <p>Username: {props.username}</p>
      <Link to={`/detail/${props.id}`} state={props.usersData}>Profile</Link>
    </div>
  )
}

export default UserCard