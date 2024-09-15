import React, { useState } from 'react'
import userdp from './cuties_3.jpg';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addCategoryReducer } from '../../features/categorySlice';
function SideBar() {
    // const [createcat,setCreatecat] = useState();
    const [input,setInput] = useState();
    function showCategories(){
        const x = document.getElementsByClassName('categoriesDiv');
        const btn = document.getElementById('addCategory');
        if (x[0].style.display === "grid") {
            x[0].style.display = "none";
            btn.style.display = 'none';
          } else {
            x[0].style.display = "grid";
             btn.style.display = 'inline';
          }
        
        }

    const addCategory = () => {
        const element = document.getElementById('addcatform');
        if(element.style.display == 'inline'){
          element.style.display  = 'none';
        }else{
          element.style.display = 'inline'
        }
    }

    const dispatch = useDispatch();

    const createCategory = () => {
      dispatch(addCategoryReducer(input))
    }

    const categories = useSelector(state => state.categorised);
  return (
    <>
        <div className='allthelinks flex-initial w-1/4  bg-dark-purple text-white'>
    {/* <img src="../cuties_3.jpg" className='w-5 h-5' alt="" /> */}
    <div className='flex'>
    <img src={userdp} alt="" className='w-20 h-20 rounded-full m-7'/>
    <div className='items-center justify-center w-60 p-8 mt-1 ml-1 text-2xl'>
        Zaid Nawaz
    </div>
    </div>  
    
    <div className='grid mb-96'>
        <Link className='linksrouting m-8 text-2xl' to="..">Dashboard</Link>
        <div className=''>
        <button className='linksrouting m-8 text-2xl' onClick={showCategories}>Categories</button>
        <button className='text-2xl ml-20 hidden' id='addCategory' onClick={addCategory}>+</button>
    </div>
        <div className='categoriesDiv text-xl ml-20 hidden'>
          <div className='hidden' id='addcatform'>
        <input type="text" className='w-48 outline focus:outline-white bg-transparent rounded-sm' value={input} onChange={(e) => setInput(e.target.value)}/>
        <button className='ml-4 px-2 rounded-sm bg-white text-dark-purple' onClick={createCategory}>create</button>
        </div>
        <Link className='linksrouting mx-8 my-4 text-xl' to={`../categories/miscellaneous`}>miscellaneous</Link>
        {categories?.map((category) => (
          <Link className='linksrouting mx-8 my-4 text-xl' to={`../categories/${category.text}`}>{category.text}</Link>

          ))}
        


        </div>
        <Link className='linksrouting m-8 text-2xl mb-14' to='../history'>Transaction History</Link>



 
    </div>
    
    </div>
    </>
  )
}

export default SideBar