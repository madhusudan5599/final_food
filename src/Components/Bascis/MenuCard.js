import React from 'react'

const MenuCard = ({a}) => {
  return (
    <>  
      <section className="main-card--container">
        {
        a.map((curElem) => {
          console.log(curElem.image);
          return (
              <>
              <div className='card-container' key={curElem.id}>
                  <div className='card'>
                      <div className='card-body'>
                            <span className='card-number card-circle subtle'>{curElem.id}</span>
                            <span className='card-author subtle'>{curElem.category}</span>
                            <h2 className="card-title">{curElem.name}</h2>
                            <span className="card-description subtle">{curElem.discription}</span>
                            
                            <div className='card-read'>Read</div>
                    </div>
                  <img src={curElem.image} alt="menuImages" className='card-media'/> 
                  
                    <span className="card-tag subtle">Order</span>
              </div>
          </div>
        </>
          )})};
          </section>
  
  
      </>
             
  );
        };
export default MenuCard