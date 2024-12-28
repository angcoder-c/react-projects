import { UserType } from "../store/users/usersSlice"

type Props = { 
    loading : boolean,
    users : UserType[],
    deleteUser : (email:string)=>void,
    orderByName : ()=>void,
    orderByLastname : ()=>void,
    orderByCountry : ()=>void
 }

const UsersTable = ({ 
    loading,
    users, 
    deleteUser, 
    orderByName, 
    orderByLastname, 
    orderByCountry
} : Props) => {
    return (
        <>
        <table>
            <thead>
                <tr>
                    <th>Photo</th>
                    <th onClick={()=>orderByName()}>Name</th>
                    <th onClick={()=>orderByLastname()}>Lastname</th>
                    <th onClick={()=>orderByCountry()}>Country</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
            {
                users.map(
                    (user, index) => (
                        <tr key={user.email+index}>
                            <td>
                                <img src={user.image} alt={user.email} />
                            </td>
                            <td>{ user.name }</td>
                            <td>{ user.lastname }</td>
                            <td>{ user.country }</td>
                            <td>
                                <button 
                                onClick={()=>deleteUser(user.email)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    )
                )
            }
            </tbody>
        </table>
        { loading ? <h2>Loading...</h2> : null }
        </>
    )
}

export default UsersTable