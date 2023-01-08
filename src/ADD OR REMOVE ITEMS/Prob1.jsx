
// ................................ADD OR REMOVE ITEMS ...........................................


import React, { useState } from 'react'
import Todolist from './Todolist';
import './style.css'




const Prob1 = () => {

    const [item, setitem] = useState("");

    const [list, setlist] = useState([]);

    const itemhandler = (e) => {

        setitem(e.target.value)
    }

    const listhandler = (e) => {
        setlist((olditems) => {
            return [...olditems, item];
        })

        setitem("")
    }

    const deletehandler = (id) => {
        console.log("deleted.................");
        setlist((olditems) => {
            return olditems.filter((arrEle, index) => {  // ...........................current element and index......................
                return index !== id;  // ........if index == id then deleted,else return other elements................................
            })
        })

    }

    return (

        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <br />
                        <h3>TODO LIST</h3>
                        <br />

                        <input type="text" placeholder='add an item' value={item} onChange={itemhandler} />


                        <button className='btn btn-success' onClick={listhandler} >Add</button>

                        <ol>
                            {
                                list.map((data, index) => {
                                    return <Todolist
                                        key={index}
                                        id={index}
                                        text={data}

                                        onselect={deletehandler}

                                    />
                                 })
                            }

                        </ol>

                    </div>
                </div>
            </div>

        </>
    )
}

export default Prob1
