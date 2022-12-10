import React, { useState } from 'react'
import './style.css'



const white = { background: "white" }
const aqua = { background: "aqua" }


const Table = () => {

    const [data, setData] = useState([{

        firstName: "John",
        lastName: "Snow",
        age: 35,
        fullName: "John Snow"
    },
    {

        firstName: "Cersei",
        lastName: "Lannister",
        age: 42,
        fullName: "Cersei Lannister"
    },
    {
        firstName: "Adam",
        lastName: "Gill",
        age: 34,
        fullName: "Adam Gill"
    },
    {
        firstName: "Bikash",
        lastName: "singh",
        age: 45,
        fullName: "Bikash singh"
    },
    {
        firstName: "Dicky",
        lastName: "Rock",
        age: 55,
        fullName: "Dicky Rock"
    }
    ])
    const [order, setOrder] = useState("ASC")

    const sortingAsc = (col) => {
        if (order === "ASC") {
            const sorted = [...data].sort((a, b) =>
                a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1

            )

            setData(sorted)
            setOrder("DSC")
        }
    }
    const sortingDesc = (col) => {
        if (order === "DSC") {
            const sorted = [...data].sort((a, b) =>
                a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1)
            setData(sorted)
            setOrder("ASC")
        }
    }

    const [color, setColor] = useState(white)


    return (
        <div className="container">

            <div className="row">
                <div className="col-md-12">

                    <table className='table table-hover' >

                        <thead className='bg-primary text-white'>
                            <tr >

                                <th >First Name :<button onClick={() => sortingAsc("firstName")}>ASC</button>
                                    <button onClick={() => sortingDesc("firstName")}>DESC</button> </th>
                                <th >Last Name</th>
                                <th>Age</th>
                                <th >Full Name</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                data.map((data) => {
                                    return <tr style={color} onClick={() => setColor(aqua)}>
                                        <td>{data.firstName}</td>
                                        <td>{data.lastName}</td>
                                        <td>{data.age}</td>
                                        <td>{data.fullName}</td>
                                    </tr>
                                })
                            }
                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    )
}

export default Table
