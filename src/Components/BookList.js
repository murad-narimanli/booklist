import React , {useContext} from "react";
import BookDetails from "./BookDetails";
import {BookContexts} from "../Contexts/BookContexts";

const BookList = () =>{
    const {books , message} = useContext(BookContexts)

    return  books.length ?
    (
        <div className="booklist">
            <ul>
                {
                    books.map(book => {
                        return(
                            <BookDetails book={book} key={book.id}  />
                        )
                    })
                }
            </ul>
            {/*<p className="message">{message}</p>*/}
        </div>
    ):
        (
           <div>
               <div className='empty'>
                   YOU HAVE NOT BOOKS 🤨
               </div>
               {/*<p className="message">{message}</p>*/}
           </div>
        )


}

export default BookList