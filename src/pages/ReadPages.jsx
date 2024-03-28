import { useLoaderData } from "react-router-dom";
import { getReadingBooks } from "../utils/localStorage";
import { useEffect, useState } from "react";
import Statistics from "../components/Statistics";


const ReadPages = () => {
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
    },[books])
    console.log(readingBook);
   
    return (
        <div>
            <h2 className="text-3xl lg:text-5xl font-extrabold text-center">Bar Chart</h2>
            {/* {
                readingBook.map(book => <Statistics key={book.bookId} book = {book}/>)
            } */}
            {
                <Statistics key={readingBook.bookId} readingBook = {readingBook} />
            }
        </div>
    );
};

export default ReadPages;