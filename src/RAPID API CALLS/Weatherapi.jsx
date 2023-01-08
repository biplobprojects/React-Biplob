import React, { useEffect, useState } from 'react'
import './style.css'


const Weatherapi = () => {

const [city,setcity] = useState("")
const [search,setsearch] = useState({})


useEffect(()=>{


},[])

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="card">


              <div className="card-header">
                <input type="search" onChange={(e) => {
setsearch(e.target.value)

                }} />
              </div>


              <div className="card-body">
                <div className='info'>
                  <h2 className='location'>
                    <i class="fa-solid fa-street-view"></i> Assam

                  </h2>
                  <h1 className='temp'>
                    5.25 cel
                  </h1>

                  <h3 className='tempmin_max'>Min: 5.25 cel / Max: 5.25 cel</h3>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="wave1"></div>
      <div className="wave2"></div>
      <div className="wave3"></div>



    </>
  )
}

export default Weatherapi
