import React from 'react';
import './HeroesList.css';

function HeroesList({selectedHeroes, onAdd}) {
    return (
        <div> 
            <span className='list'>Selected heroes : </span>
            {selectedHeroes.map((item, i) => (
           
              <span className='heroes' key={item.id} onChange={()=> onAdd(item) } >{item.title}{selectedHeroes.length !== i+1 ? ',': ''} </span>
            ))}
        </div>
    )
}

export default HeroesList;
