import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getReadingBooks } from "../utils/localStorage";
import ReadingBookCard from "./ReadingBookCard";


const ReadBooks = () => {
    const books = useLoaderData();
    const [readingBook,setReadingBook] = useState([])
    useEffect(()=>{
        const storedReadBooks = getReadingBooks();
        if(books.length > 0){
           const rbook = [];
           for(const bookId of storedReadBooks){
            const bk = books.find(book => book.bookId === bookId)
            if(bk){
                rbook.push(bk)
            }
           }
           setReadingBook(rbook)
        }
    },[])
    console.log(readingBook);
    return (
        <main>
            
           {
            readingBook.map((book)=> <ReadingBookCard key={book.bookId} book = {book}/>)
           }
        </main>
    );
};

export default ReadBooks;