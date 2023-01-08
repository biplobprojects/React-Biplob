import React, { useState } from 'react'

import './userstyle.css'

const User = () => {

    const [add,setAdd] = useState("")
const [item,setItem] = useState([])

   const addHandler=(e)=>{
    setItem((old)=>{
        return [...old,add]

    })
setAdd("")
   }


   const deleteHandler=(i)=>{
  const newDta=[...item]
  newDta.splice(i,1)
  setAdd(newDta);

   }

    return (
  
  <>
      <div className="container">
        <div className="row">
            <div className="col-md-12">


            <input type="text" placeholder='add items' value={add} onChange={(e)=>setAdd(e.target.value)}/>
            <button className='btn btn-success' onClick={addHandler}>Add items</button>


{
    item.length > 0? <>
    {
        item.map((data,i)=>{
            return <div>
            
          <span >{data}<button className='buttonname btn btn-danger' onClick={()=>deleteHandler(i)}>Delete</button></span>  
                
          </div>

        })
    }
    </> : null
}

            </div>
          

        </div>
      </div>
    </>
  )
}

export default User
