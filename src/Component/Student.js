import React from 'react'
import { Link } from 'react-router-dom'
function Student() {
  return (
    <div className='Std'>
      <Link class="addnew" to="/addstudent">Add New Student</Link>
    <table class="table table-bordered">
    <thead>
      <tr>
        <th scope="col">Name</th>
        <th scope="col">Age</th>
        <th scope="col">Course</th>
        <th scope="col">Batch</th>
        <th scope="col">Change</th>

      </tr>
    </thead>
    <tbody>
      <tr>
        <td>John</td>
        <td>24</td>
        <td>MERN</td>
        <td>October</td>
        <td><a>Edit</a></td>
      </tr>
      <tr>
      <td>Mark</td>
        <td>25</td>
        <td>MERN</td>
        <td>September</td>
        <td><a>Edit</a></td>
      </tr>
      <tr>
      <td>Mike</td>
        <td>26</td>
        <td>MERN</td>
        <td>November</td>
        <td><a>Edit</a></td>
      </tr>
    </tbody>
  </table>
  </div>

)
}

export default Student