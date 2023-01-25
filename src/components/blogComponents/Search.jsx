import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


const Search = () => {

    const navigate = useNavigate()
    const [search, setSearch] = useState('')

    function handleSearch(e){
        e.preventDefault();
        setSearch('')
        let value = search.trim().replace(/\s+/g, '-').toLocaleLowerCase()
        navigate(`/blog/articles/search/${value}`)
    }

  return (
    <form onSubmit={handleSearch}>
        <div className='flex items-center border-b border-teal-500 py-2'>
        <input className='appearance-none bg-transparent tracking-[1px] border-none w-full text-gray-400 mr-3 py-1 px-2 leading-tight focus:outline-none' type="seacrh" placeholder='Recherche...' required 
        value={search} onChange={e => setSearch(e.target.value)} />
        <button className='flex-shrink-0 bg-teal-500 hover:bg-teal-700 tracking-[1px] border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded' type='submit'>
            Recherche
        </button>
        </div>
    </form>
  )
}

export default Search