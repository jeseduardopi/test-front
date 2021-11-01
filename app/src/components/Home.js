import React, { useState, useEffect } from 'react'
import Data from '../config/characters'
import './Home.css'
import Card from './Card'
import HeroesList from './HeroesList'
import { FaSistrix as SearchIcon } from 'react-icons/fa'

function Home() {

  const [ heroes, setHeroes ] = useState();
  const [ selectedHeroes, setSelectedHeroes ] = useState([]);
  const [ searchTerm, setSearchTerm ] = useState('');
  const [ list, setList ] = useState(true);
  const [ isPending, setIsPending ] = useState(true);

 
// ~~~~~~~ RECUPERATION DES DONNEES ~~~~~~ //
  useEffect(() => {
    // ~~~~~~~ Simulation de l'attente ~~~~~~~ //
    setTimeout(() => {
       getData();
    }, 1500)
   
  }, [])

  const getData = () => { 
    setIsPending(false);
    return setHeroes(Data);
   
  }
 
// ~~~~~~~~~~   ADD TO THE LIST~~~~~~~~~ //
  const onAdd = item => {
    const exist = selectedHeroes.find(x => x.id === item.id)
    if (exist) {
      setSelectedHeroes(selectedHeroes.map(x => (x.id === item.id ? { ...exist, qty: exist.qty + 1 } : x)))
    } else {
      setSelectedHeroes([...selectedHeroes, { ...item, qty: 1 }])
    }
  }

 
// ~~~~~~~~~~   REMOVE FROM THE LIST~~~~~~~~~ //
  const onRemove = item => {
    const exist = selectedHeroes.find(x => x.id === item.id)
    if (exist.qty === 1) {
      setSelectedHeroes(selectedHeroes.filter(x => x.id !== item.id))
    } else {
      setSelectedHeroes(selectedHeroes.map(x => (x.id === item.id ? { ...exist, qty: exist.qty - 1 } : x)))
    }
  }

// ~~~~~~~~~~   CLEAR THE LIST ~~~~~~~~~ //
  const clearList = () => {
    setList(false);
    if (!list) {
      setSelectedHeroes([]);
      setList(prevList => !prevList)
      // console.log(list)
    }
  }

// ~~~~~~~~~~   VALIDATE: LOG IN THE CONSOLE ~~~~~~~~~ //
  const logList = () => {
    if (selectedHeroes.length > 0) {
      const heroesList = selectedHeroes.map(({ qty, ...item }) => item);
      console.log(heroesList);
    } else {
      console.log('You need at least one item')
    }
  }

  return (
    <div>
      <header>
        <h1>Number of selected heroes : {selectedHeroes.length}</h1>
        <HeroesList selectedHeroes={selectedHeroes} onAdd={onAdd} onRemove={onRemove} />

        {/* Buttons */}
        <div className="buttons">
        <button onClick={logList} className='btn-salmon' disabled={ selectedHeroes.length >= 2 & selectedHeroes.length <=4  ? false : true }>
          Validate
        </button>
    
        <button onClick={clearList} className="btn-black btn-clean">
          Clear
        </button>
        </div>

        {/* Search bar */}

        <div className="search_wrap search_wrap_1">
          <div className="search_box">
            <input
              className="input"
              type="text"
              placeholder="Search heroes..."
              onChange={event => {
                setSearchTerm(event.target.value)
              }}
            />
            <div className="btn btn-common">
              <SearchIcon size="1.8em" color="#797979" title="search bar" className="searchicon" />
            </div>
          </div>
        </div>
      </header>
      <section
        className="grid"
      >
      {isPending && <div className="spin"></div>}
        {heroes &&
          heroes
            .filter(hero => {
              if (searchTerm == '') {
                return hero
              } else if (hero.title.toLowerCase().includes(searchTerm.toLowerCase())) {
                return hero
              }
            })
            .map(hero => {
              return (
                <div  key={hero.id}>
                  <Card onAdd={onAdd} onRemove={onRemove} hero={hero} list={list} clearList={clearList} className="col-12" />
              
                </div>
              )
            })}
      </section>
    </div>
  )
}

export default Home
