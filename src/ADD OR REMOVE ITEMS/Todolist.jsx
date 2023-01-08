import React from 'react'

const Todolist = (props) => {




    return (
        <>
         
            <div className='todoList'>
                <li>{props.text}</li>
               <button className='btn btn-danger' onClick={()=>{
                props.onselect(props.id)
               }}>x</button>
               
               </div>

                
        

        </>
    )
}

export default Todolist
