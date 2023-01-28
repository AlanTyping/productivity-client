import React, { useState, useEffect } from 'react';

function Card({ cardObj, card, setCard, id, setListUpdated }) {

  const [showCard, setShowCard] = useState(false);

  const handleCardClick = () => {
    setShowCard((showCard) => !showCard)
  };

  let { title, description } = cardObj;

  const handleChange = e => {
    setCard({
      ...cardObj,
      [e.target.name]: e.target.value
    })
  }

  const handleUpdate = id => {
    if (title === '') {
      alert('Todos los campos son obligatorios')
      return
    }
    const requestInit = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(card)
    }
    fetch('http://localhost:9000/api/' + id, requestInit)
      .then(res => res.text())
      .then(res => console.log(res))

    //reiniciando state de libro
    setCard({
      title: '',
      description: ''
    })

    setListUpdated(true)
  }

  const handleDelete = id => {
    const requestInit = {
      method: 'DELETE'
    }
    fetch('http://localhost:9000/api/' + id, requestInit)
      .then(res => res.text())
      .then(res => console.log(res))

    setListUpdated(true)
  }

  return (
    <>
      {showCard ? (
        <div className='h-[100%] w-[100%] z-40 fixed top-0 flex inset-0 justify-center items-center  bg-[rgba(0,0,0,0.8)]'>
          <form className="h-[400px] w-[300px] rounded bg-[#000532] border-[2px] border-[#E300B1] flex justify-center items-center flex-col justify-evenly">
            <button onClick={handleCardClick} className='rounded-[100%] relative right-28 h-8 flex w-8 text-center justify-center items-center bg-[#000532] border-[2px] border-[#E300B1]'>x</button>
            <div>
              <label>Title</label><br />
              <input defaultValue={title} autoComplete="off" name="title" onChange={handleChange} type="text" id="title" className="border-[bg-[#000532] text-black border-[2px] border-[#E300B1] border-[2px]" />
            </div><br />
            <div>
              <label>Description</label><br />
              <textarea maxLength={2000} autoComplete="off" defaultValue={description} rows="3" name="description" onChange={handleChange} type="text" id="author" spellcheck="false"  className="border-[bg-[#000532] resize-none text-black border-[2px] border-[#E300B1] border-[2px]" />
            </div><br />
            <div className='w-[100%] flex flex-row justify-center items-center'>
              <button onClick={() => handleDelete(id)} className="h-12 w-20 rounded-[5px] bg-[#000532] m-[5px] border-[2px] border-[#E300B1]">Delete</button>
              <button onClick={() => handleUpdate(id)} className="h-12 w-20 rounded-[5px] bg-[#000532] m-[5px] border-[2px] border-[#E300B1]">Update</button>
            </div>

          </form>
        </div>
      )
        :
        (
          <div onClick={handleCardClick} className="card h-[100px] w-[100px] m-[10px] cursor-pointer bg-[#ca009e] rounded flex justify-center items-center">
            <h2 className='text-[1.3rem]'>{cardObj.title}</h2>
          </div>
        )
      }
    </>
  )
}

export default Card