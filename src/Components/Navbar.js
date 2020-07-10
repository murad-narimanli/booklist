import React, { useContext } from 'react'
import { BookContexts } from '../Contexts/BookContexts';

const Navbar = ()=>{
    const {books}=  useContext(BookContexts)
    return(
        <div className="navbar">
            <h1>YOUR BOOK LIST</h1>
            <p>{books.length} BOOKS ADDED</p>
        </div>
    )
}

export default Navbar