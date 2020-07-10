import React , { useContext  } from "react";
import {BookContexts} from "../Contexts/BookContexts";


const BookDetails = ({book}) => {
    const {dispatch} = useContext(BookContexts)
    return(
        <li>
           <div className="detail">
               <div>{book.title}</div>
               <div>{book.author}</div>
           </div>
            <button className="btn" onClick={() => dispatch({type: "REMOVE_BOOK" , id: book.id })} >Delete</button>
        </li>
    );
}

export default BookDetails