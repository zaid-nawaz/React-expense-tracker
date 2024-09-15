import React from 'react'
import { useSelector } from 'react-redux'

function History() {
  const expenses = useSelector(state => state.expensed);
  return (
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
  )
}

export default History