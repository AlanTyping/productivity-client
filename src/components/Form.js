import React from 'react';

const Form = ({ card, setCard, handleClick }) => {

  const handleChange = e => {
    setCard({
      ...card,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = () => {
    //validación de los datos
    if (title === '' || description === '') {
      alert('Todos los campos son obligatorios')
      return
    }

    //consulta
    const requestInit = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(card)
    }
    fetch('http://localhost:9000/api', requestInit)
      .then(res => console.log(res))

    //reiniciando state de card
    setCard({
      title: '',
      description: '',
    })
  };

  let { title, description } = card;

  return (
    <div className='h-[100%] w-[100%] z-40 fixed top-0 flex inset-0 justify-center items-center  bg-[rgba(0,0,0,0.8)]'>
      <form onSubmit={handleSubmit} className="h-[400px] w-[300px] rounded bg-[#000532] border-[2px] border-[#E300B1] flex justify-center items-center flex-col justify-evenly">
        <button onClick={handleClick} className='rounded-[100%] relative right-28 h-8 flex w-8 text-center justify-center items-center bg-[#000532] border-[2px] border-[#E300B1]'>x</button>
        <div>
          <label htmlFor="title">Title</label><br />
          <input defaultValue={title} autoComplete="off" name="title" onChange={handleChange} type="text" id="title" className="border-[bg-[#000532] text-black border-[2px] border-[#E300B1] border-[2px]" />
        </div><br />
        <div>
          <label htmlFor="description">Description</label><br />
          <textarea maxLength={2000} autoComplete="off" spellcheck="false" defaultValue={description} rows="2" name="description" onChange={handleChange} type="text" id="author" className="resize-none border-[bg-[#000532] text-black border-[2px] border-[#E300B1] border-[2px]" />
        </div><br />
        <button type="submit" className="h-12 w-20 rounded-[5px] bg-[#000532] border-[2px] border-[#E300B1]">Submit</button>
      </form>
    </div>
  );
}

export default Form;