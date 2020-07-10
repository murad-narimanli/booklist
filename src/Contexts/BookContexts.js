// REDUCERSIZ state ile adi sheklde istifade ucundur
// import React ,  { createContext , useState  } from 'react';

// REDUCERLI
import React ,  { createContext , useReducer , useEffect  } from 'react';
import {bookReducers} from "../Reducers/bookReducer";
import uuid from 'uuid/dist/v1';


export const BookContexts = createContext();


const BookContextsProvider = (props) => {
    // REDUCERSIZ
    // const [books, setBooks] = useState([ ]);
    // REDUCERLE  hemcinin localstorage istifade etmek
    const [books, dispatch] = useReducer(bookReducers ,[] , ()=> {
        const localData = localStorage.getItem('books');
        return localData ? JSON.parse(localData) : []
    });

    // local storageye yeniden yazmaq ucun
    useEffect(()=>{
        localStorage.setItem('books' , JSON.stringify(books))
    } , [books] )

    // REDUCSERSIZ
    // const [message , dispatch] = useState('ADD BOOK AND AUTHOR PLEASE 😁')
    // const addBook  = (title , author) =>{
    //     if (title !='' && author !=''  ){
    //         setBooks([ ...books , { title: title , author : author , id : uuid() } ])
    //         setmessage('BOOK ADDED SUCCESSFULLY 😊');
    //     }
    //
    //     else {
    //         setmessage(' ADD BOOK AND AUTHOR !! 😡');
    //     }
    // }
    //
    // const removeBook = (id) =>{
    //     setBooks(books.filter(book => book.id !== id))
    // }

    return(
        // REDUCERSIZ
        // <BookContexts.Provider value={{books , message , addBook , removeBook}}>
        // REDUCERLE
        <BookContexts.Provider value={{books , dispatch}}>
            {props.children}
        </BookContexts.Provider> 
    );
}

export default BookContextsProvider