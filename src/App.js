import React, { useState, useEffect, useContext } from 'react';
import CardList from './components/CardList';
import Form from './components/Form';
import { ThemeContext } from "./contexts/theme.js";
import Pagination from './components/Pagination';
import Nav from './components/header/nav/Nav';

function App() {
  const [cards, setCards] = useState([]);
  const [listUpdated, setListUpdated] = useState(false);
  useEffect(() => {
    const getCards = () => {
      fetch('http://localhost:9000/api')
        .then(res => res.json())
        .then(res => setCards(res))
    }
    getCards()
    setListUpdated(false)
  }, [listUpdated])

  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage] = useState(6);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  // Get current posts
  const indexOfLastPost = currentPage * cardsPerPage;
  const indexOfFirstPost = indexOfLastPost - cardsPerPage;
  const currentCards = cards.slice(indexOfFirstPost, indexOfLastPost);

  const [{ theme }] = useContext(ThemeContext);
  const [showCreate, setShowCreate] = useState(false);

  const handleClick = () => {
    setShowCreate((showCreate) => !showCreate);
  };

  const [card, setCard] = useState({
    title: '',
    description: '',
  });

  console.log(cards)

  return (
    <div className="h-[100vh] w-[100%] flex justify-center items-center flex-col pt-[70px]"
      style={{
        backgroundColor: theme.backgroundColor,
        color: theme.color,
      }}>
      <Nav />
      <div className="h-[80%] w-[80%] bg-[#060a27] justify-start rounded border-[2px] border-[#E300B1] flex flex-col items-center">
        <div className='w-[100%] flex items-center justify-center flex-row mt-[5px]'>
          <div className='w-[57%] flex justify-end'><h1 className='text-[1.9rem]'>Card List</h1></div>
          <div className='w-[43%] flex justify-end'>
            <button
            className="h-[50px] w-[100px] bg-[#000532] rounded m-[10px] boton mr-[50px] border-[1px] border-[#E300B1] flex justify-center items-center"
            onClick={handleClick}>
            New Cart
          </button>
          </div>
        </div>

        {showCreate ? (<Form card={card} setCard={setCard} handleClick={handleClick} />) : (
          <>
            <CardList card={card} setCard={setCard} setListUpdated={setListUpdated} cards={currentCards} />
          </>
        )}
        <div className='h-[20px] w-full flex flex-row items-center justify-center'>
            <Pagination cardsPerPage={cardsPerPage} totalCards={cards.length} paginate={paginate}/>
        </div>
      </div>
    </div>
  );
}

export default App;