import React, { useEffect, useState } from 'react'

import SideBar from '../sidebar/SideBar';

import {useSelector, useDispatch } from 'react-redux';
import { addExpense } from '../../features/expenseSlice';

function Dashboard() {
const [input,setInput] = useState();
const [price,setPrice] = useState();
const [selectedValue,setSelectedValue] = useState('miscellaneous');

const dispatch = useDispatch()
const expenses = useSelector(state => state.expensed);
const categories = useSelector(state => state.categorised);

const handleSubmit = (e) => {
  e.preventDefault();
    dispatch(addExpense({text : input,price : price,category: selectedValue}));
    setInput('');
    setPrice('');    
    const element = document.getElementById('logtag');
    
      element.style.display = 'inline';

}


  
  return (
    <>
    <div className='expenseAddAndLogs'>
        <div className='inputvalues'>


    <form className='p-16 flex' onSubmit={handleSubmit}>
    <input type="text" placeholder='write your purchased item' className=' border-0 py-1.5 pl-1 text-gray-900
     placeholder:text-purple-950 w-4/5 mr-8 rounded-lg ml-8 focus:outline-cyan-800 outline' value={input} onChange={(e) => setInput(e.target.value)}/>
    <input type="text" placeholder='write the price' className=' border-0 py-1.5 pl-1 text-gray-900 placeholder:text-purple-950
     w-2/5 mr-8
     rounded-lg  focus:outline-cyan-800 outline' value={price} onChange={(e) => setPrice(e.target.value)}/>
        <select name="diffCategories" id="selectCat" className='text-dark-purple rounded-sm w-48 mr-8 outline' value={selectedValue} onChange={(e) => setSelectedValue(e.target.value) } defaultValue='miscellaneous'>
          <option value='miscellaneous'>miscellaneous</option>      
      {categories?.map((category) => (<option value={category.text}>{category.text}</option>))}
    </select>
    <button type='submit' className='bg-dark-purple text-white w-40 rounded-lg '>Add</button>
 



    </form>


        </div>
        <div className='log font-serif text-xl ml-20 hidden' id='logtag'>logs</div>

        <div className='px-20'>
        <ul className="list-none">
        {expenses?.map((expense) => (
          <li
            className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
            key={expense.id}
          >
            <div className='text-white'>{expense.text}</div>
            <div className='text-white'>price :- {expense.price}</div>
            <div className='text-white'>{expense.date}</div>
            <div className='text-white'>category :- {expense.category}</div>

          </li>
        ))}
      </ul>
        </div>
    </div>
    </>
  )
}

export default Dashboard