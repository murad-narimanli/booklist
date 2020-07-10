import React from 'react';
import BookContextsProvider from './Contexts/BookContexts'
import Navbar from "./Components/Navbar";
import BookList from "./Components/BookList";
import NewBookForm from "./Components/NewBookFrom";
import 'alertifyjs/build/css/alertify.min.css';

function App() {
  return (
    <div className="App">
       <BookContextsProvider>
            <Navbar/>
            <BookList/>
            <NewBookForm />
       </BookContextsProvider>
    </div>
  );
}

export default App;
