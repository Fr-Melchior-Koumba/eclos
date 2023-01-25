import React, {useState, useEffect} from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { left, right } from '../../assets/images'

const Paginnation = ({ totalPage }) => {
    
    const { search } = useLocation()
    const [pageNumbers, setPageNumbers] = useState([])
    const page = Number(new URLSearchParams(search).get('page'))|| 1

    useEffect(() => {
        if(totalPage <= 1) return;
        if(totalPage <= 5){
            const newArr = [...Array(totalPage)].map((_, i) => i + 1)
            return setPageNumbers(newArr)
        }

        let newArr = []

        for(let index = 1; index <= 5; index++){
            if(page <= 2){
                newArr.push(index)
            }

            if(page > 2 && page < totalPage - 2){
                newArr.push(page + index - 3)
            }
            if(page >= totalPage -2){
                newArr.push(index - 5 + totalPage)
            }
        }

        setPageNumbers(newArr)
    }, [totalPage, page])


    if(totalPage <= 1) return null




  return (
    <div>


    <ul className="flex mb-5">
        <li>
        <Link to={`?page=${page - 1 <= 1 ? 1 : page - 1}`} className="px-5 flex items-center py-2 ml-0 tracking-[1px] text-primary hover:bg-secondary font-bold bg-terciary rounded-l-lg"><img src={left} alt="arrow-left" className='mr-2'/>Précédant</Link>
        </li>
        {pageNumbers.map(num => (
            <li key={num}>
             <Link to={`?page=${num}`} className={`${page === num ? 'bg-blue-600' : ''} px-3 py-2 flex items-center text-primary bg-teal-500 font-bold border border-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}>{num}</Link>
            </li>
        ))}
        <li>
        <Link to={`?page=${page + 1 >= totalPage ? totalPage : page + 1}`} className="px-5 flex items-center py-2 ml-0 tracking-[1px] text-primary hover:bg-secondary font-bold bg-terciary rounded-r-lg">Suivant<img src={right} alt='arrow-right' className='ml-2' /></Link>
        </li>
    </ul>
     
    
  </div>
  )
}

export default Paginnation