/*
use nos dice que es un hook.
*/
import {useState} from 'react';
import PropTypes from 'prop-types';

export const Counter= ({value}) => {
  
const [ counter, setCounter]= useState(value);
  
const add= () => setCounter( counter + 1)
const rest= () => setCounter(counter - 1)
const reset=()=> setCounter(value)
  return (
    <>
      <section class="text-white p-3">
        <div class="flex flex-col">
        <h1 class="pb-4">Counter App</h1>
        <span class="pb-4">{counter}</span>
        
        <div class='flex justify-around'>
        <button onClick={add} class="bg-white text-black w-1/3 ">Add 1+</button>
        <button onClick={rest} class="bg-white text-black w-1/3 mx-1">- 1</button>
        <button onClick={reset} class="bg-white text-black w-1/3">reset</button>
        </div>
        
         </div>
       </section>
    </>
    )
}

Counter.propTypes= {
title: PropTypes.number
}
