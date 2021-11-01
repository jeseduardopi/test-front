import React, { useState, useEffect } from 'react';
import './Card.css';

function Card({ hero, onAdd, selectedHeroes, onRemove, list, clearList }) {
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    if (list) {
      clearList();
      setToggle(false);
    }
  }, [list]);

  const switchMode = () => {
    setToggle(prevToggle => !prevToggle)
    if (!toggle) {
      onAdd(hero)
      // console.log(toggle)
    } else {
      onRemove(hero)
    }
  };
 

  return (
    <div className={ toggle ? 'bg-green text-white card' : 'card'}>
      <div className="scroll-card">
        <div className="scroll-div">
          <div className="scroll-object">
            <h3>
              {hero.title}
            </h3>
            <p className={!toggle ? 'text-grey' : 'text-white'}>{hero.description}</p>
          </div>
        </div>
        <button onClick={switchMode} className={toggle ? 'btn-black' : 'btn-salmon'}>
          {toggle ? 'Unselect' : 'Select'}
        </button>
      </div>
    </div>
  )
}

export default Card;
