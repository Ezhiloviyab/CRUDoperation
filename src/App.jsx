import 'bootstrap/dist/css/bootstrap.min.css';

import React, { useRef, useState } from 'react'
import './App.css'

function Crudoperation() {
    const list = [
        {
            id: 1, 
            name: "Ezhil",
            email: "ezhil123@gmail.com",
            location:"chennai",
            date:12-12-2023
        },
       
    ]
    const [lists, setList] = useState(list)
    const [updateState, setUpdateState] = useState(-1)
    return(
        <div className='container'>
      <div className='row'>
      <div className='col-md-4 order-md-1'>

        <div className='Crud'>
          <div className="form-container">
            <AddList setList = {setList }/>
            </div>
            </div>
            <div className='col-md-8 order-md-2'>
            <div className='cards-container'>
            <form onSubmit={handleSubmit}>
            <table>
                {
                   lists.map((current) => (
                    <div className="card mb-3" key={current.id}>
                        <div className="card-body">
                            <h5 className="card-title">{current.name}</h5>
                            <p className="card-text">Email: {current.email}</p>
                            <p className="card-text">Location: {current.location}</p>
                            <p className="card-text">Date: {current.date}</p>
                            <button className="btn btn-primary" onClick={() => handleEdit(current.id)}>Edit</button>
                            <button className="btn btn-danger" onClick={() => handleDelete(current.id)}>Delete</button>
                        </div>
                    </div>
                ))                
                }
            </table>
            </form>
            </div>
            </div>
            </div>
            </div></div>
        
    )

    function handleEdit(id) {
        setUpdateState(id)
    }
    function handleDelete(id) {
        const newlist = lists.filter((li) => li.id !== id)
        setList(newlist)
    }
    function handleSubmit(event) {
        event.preventDefault()
        const name = event.target.elements.name.value
        const email = event.target.elements.email.value
        const location = event.target.elements.location.value
        const date = event.target.elements.date.value
        const newlist = lists.map((li) => (
            li.id === updateState ? {...li, name:name, email: email,location:location,date:date} : li
        ))

        setList(newlist)
        setUpdateState(-1)
    }
}

function EditList({current, lists, setList}) {
    function handInputname(event) {
        const value = event.target.value;
        const newlist = lists.map((li) => (
            li.id === current.id ? {...li, name :value} : li
        ))

        setList(newlist)
    }
    function handInputemail(event) {
        const value = event.target.value;
        const newlist = lists.map((li) => (
            li.id === current.id ? {...li, email :value} : li
        ))

        setList(newlist)

    }
    function handInputlocation(event) {
        const value = event.target.value;
        const newlist = lists.map((li) => (
            li.id === current.id ? {...li, location :value} : li
        ))

        setList(newlist)
    }
    function handInputdate(event) {
        const value = event.target.value;
        const newlist = lists.map((li) => (
            li.id === current.id ? {...li, date :value} : li
        ))

        setList(newlist)
    }
    return(
        <tr>
            <td><input type="text" onChange={handInputname} name='name' value={current.name}/></td>
            <td><input type="text" onChange={handInputemail} name='email' value={current.email}/></td>
            <td><input type="text" onChange={handInputlocation} name='location' value={current.location}/></td>
            <td><input type="date" onChange={handInputdate} name='date' value={current.date}/></td>
            <td><button type='submit'>Update</button></td>
        </tr>
    )
}

function AddList({ setList }) {
    const nameRef = useRef();
    const emailRef = useRef();
    const locationRef = useRef();
    const dateRef = useRef();

    function handleSubmit(event) {
        event.preventDefault();
        const name = event.target.elements.name.value;
        const email = event.target.elements.email.value;
        const location = event.target.elements.location.value;
        const date = event.target.elements.date.value;
        const newlist = {
            id: 3,
            name,
            email,
            location, 
            date,     
        };
        setList((prevList) => {
            return prevList.concat(newlist);
        });
        nameRef.current.value = "";
        emailRef.current.value = "";
        locationRef.current.value = "";
        dateRef.current.value = "";
    }

    return (
        <div className="container">
        <form className='Form' onSubmit={handleSubmit}>
            <h2>Event Registration</h2>
            <div className='form-group'>
        <label className='label'>Name</label>
        <input
          type='text'
          name='name'
          className='form-control'
          placeholder='Enter Name'
          ref={nameRef}
        />
      </div>
      <div className='form-group'>
        <label className='label'>Email</label>
        <input
          type='text'
          name='email'
          className='form-control'
          placeholder='Enter email'
          ref={emailRef}
        />
      </div>
      <div className='form-group'>
        <label className='label'>Location</label>
        <input
          type='text'
          name='location'
          className='form-control'
          placeholder='Enter location'
          ref={locationRef}
        />
      </div>
      <div className='form-group'>
        <label className='label'>Date</label>
        <input type='date' name='date' className='form-control' ref={dateRef} />
      </div>
      <button type='submit' className='btn' id="add">
        Add
      </button>
    </form>
    </div>
    );
}


export default Crudoperation;
