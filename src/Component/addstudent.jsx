import React from 'react'
import './styling.css'
import { Link } from 'react-router-dom'

function Addstudent() {

const handleSubmit = () => {
    <Link to="/student"/>
}

  return (
    <div className='newpage'>  
    <form onSubmit={handleSubmit}>  
       <font>Name:</font>
       <input type="text" className='name1'/> <br /><br />
       <font>Age:</font>
       <input type="number" className='age1'/> <br /><br />
       <font>Course:</font>
       <input type="text" className='course1'/> <br /><br />
       <font>Batch:</font>
       <input type="text" className='batch1'/> <br /><br />
       <input type="submit"/>
       </form>
    </div>
  )
}

export default Addstudent;