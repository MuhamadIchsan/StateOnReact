import React, { useEffect, useState } from 'react'
import axios from 'axios'
export default function UsersComponent() {
    const [users, setUsers] = useState([])
    const [identify, setIdentify] = useState(1)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const getUsers = async () => {
            setLoading(true)
            try {
                let response = await axios.get(`https://jsonplaceholder.typicode.com/users/${identify}`)
                setUsers(response.data)
                setLoading(false)
            } catch (e) {
                setLoading(true)
                console.log(e.message)
            }
        }
        getUsers()
    }, [identify])
    return (
        <div>
            <input type="text" value={identify} name="identify" onChange={(e) => setIdentify(e.target.value)} />
            <div className="table-responsive">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Nama</th>
                            <th>e-mail</th>
                            <th>hp</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            loading ? <tr> <td colSpan="3">  Loading...</td> </tr> :
                                <tr>
                                    <td>{users.name}</td>
                                    <td>{users.email}</td>
                                    <td>{users.phone}</td>
                                </tr>
                        }

                    </tbody>
                </table>
            </div>
        </div>
    )
}
