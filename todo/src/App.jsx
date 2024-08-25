import { useState } from 'react'
import './App.css'


function App() {
  const [items, addTodo] = useState([])
  const [value, inputChange] = useState("")


  const foo = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    addTodo(updatedItems)
  }

  return (
    <>

      <h2 className='text-center mt-5 fw-bold text-primary'>TODO</h2>
      <div className='d-flex justify-content-center gap-3'>

        <div className="my-3">
          <input type="text" value={value} onChange={(e) => inputChange(e.target.value)} className="form-control" placeholder='Enter items' />
        </div>

        <div className='d-flex align-items-center gap-3'>

          <button className='btn btn-primary' onClick={() => {
            value.trim() ? addTodo([...items, value]) : value
            inputChange("")
          }}>Add Todo</button>
          <button className='btn btn-danger' onClick={() => {
            addTodo([])
            inputChange("")
          } } >Delete All</button>

      </div>


    </div >

      <div className='container mt-3 overflow-hidden'>

        <table className="table table-responsive">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col-5">Items</th>
              <th scope="col" className="text-end pe-5">Delete</th>
            </tr>
          </thead>
          <tbody className="table-group-divider">


            {items.map((v, i) => {
              return (
                <tr key={i}>
                  <th scope="row" className='fs-4 fw-medium'>{i + 1}</th>
                  <td className='fs-4'>{v}</td>
                  <td className="d-flex align-items-center justify-content-end gap-3 ">
                    <button onClick={() => foo(i)} className="btn btn-danger px-4">Delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>


      </div>


    </>
  )
}

export default App
