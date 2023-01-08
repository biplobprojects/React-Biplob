
//...................................SEARCHING AN ITEM....................................................
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Prob2 = () => {

    const [user, setUser] = useState({})

    const [term, setTerm] = useState("")


    useEffect(() => {
        axios.get("https://randomuser.me/api/?results=20&amp;inc=name,picture,id,cell&amp;nat=in")
            .then((res) => {
                setUser(res.data)
            })
    }, [])




    return (
        <div className="container">
            <pre>{JSON.stringify(user)}</pre>
            <div className="row">
                <div className="col-md-6">
                    <h4>Messages</h4>
                    <input type="text" placeholder='search Names...' onChange={(e) => setTerm(e.target.value)} />



                    {
                        Object.keys(user).length > 0 ? <>

                            {
                                user.results.filter((data) => {
                                    if (term === "") {
                                        return data
                                    } else if (data.name.first.toLowerCase().includes(term.toLowerCase())) {
                                        return data
                                    }
                                }).map((data) => {
                                    return <ul>
                                        <li>{data.name.first}</li>
                                    </ul>
                                })
                            }

                        </> : null
                    }




                </div>
            </div>
        </div>
    )
}

export default Prob2
