import React, {useContext, useState} from "react";
import {BookContexts} from "../Contexts/BookContexts";
import alertify from 'alertifyjs'
const NewBookForm = () => {
    // const  {addBook } =  useContext(BookContexts);
    const  {dispatch } =  useContext(BookContexts);
    const [title , setTitle] =  useState('');
    const [author , setAuthor] = useState('');
    const handleSubmit = (e) =>{
        e.preventDefault();
        // reducerle
        if (title != '' && author !=''){
            dispatch({type: 'ADD_BOOK', book:{
                    title , author
                }})
            alertify.set('notifier','position', 'bottom-center');
            alertify.success('BOOK ADDED SUCCESSFULLY 😍')
        }
        else{
            alertify.set('notifier','position', 'bottom-center');
            alertify.error('ADD BOOK AND AUTHOR PLEASE 🙂 ')
        }

        // reducersiz
        // addBook(title,author);
        setTitle('');
        setAuthor('');
    }



    return(
        <form onSubmit={handleSubmit}>
            <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} placeholder="Book name" />
            <input type="text" value={author}  onChange={(e)=>setAuthor(e.target.value)} placeholder="Book Author" />
                <input className="btn" value="ADD" type="submit" />
        </form>
    );

}
export default NewBookForm