import React from 'react'
import "./style.css"
import Menu from './Menuapi'
import { useState } from 'react'
import MenuCard from './MenuCard'

const Restaurant = () =>
 {
        const [menuData,setMenuData]=useState(Menu)  //intialdata//);// useState return array with two items //despite this we can use redux
    
        const filterItem=(cate) =>

        {
              //  const updatedList = Menu.filter((curElem) => { return curElem.category=== cate;})
              const updatedList = Menu.filter( function (a) {
                  return a.category===cate;
                })
              setMenuData(updatedList);

        };
          const searchi =(event)=>
       {

            const idata=event.target.value.toLowerCase();
            console.log(idata)
            
            
            // console.log(idata)
            // console.log("idate",idata)
            let x=[];
      
            x=Menu.filter((data) => { return ((data.name.toLowerCase()).search(idata)!==-1)})
       
              console.log("x",x)
              
              setMenuData(x);
            
              
            

        }

      

      return (
          <div className='ongrp'>
            <input type='text'  className='textbox' placeholder='Enter your favourite dish'  onChange={searchi}/>
              <nav className='navbar'>
                      <div className='btn-group'>
                        
                        <button className='btn-group__item' onClick={ () => filterItem("Breakfast")}>Breakfast</button>
                        <button className='btn-group__item' onClick={ () => filterItem("lunch")}>lunch</button>
                        <button className='btn-group__item' onClick={ () => filterItem("Dinner")}>dinner</button>
                        <button className='btn-group__item' onClick={ () => setMenuData(Menu)}>All</button>

                      </div>
                      
                      </nav>
                
               
              <MenuCard a={menuData} />
              </div>
        
      );
 };

export default Restaurant