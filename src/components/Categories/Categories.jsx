import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'

function Categories() {
  const {cate} = useParams();
  const logs = useSelector(state => state.expensed);
  const expenses = logs.filter((item) => item.category == cate);
  return (
    <>
    <div className='px-20 text-4xl'>{cate}</div>
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
      </li>
    ))}
  </ul>
    </div>
    
    </>
  )
}

export default Categories