import styles from "./booklist.module.css";
import {mockBookList} from "./mockBookList.js";
import { useEffect, useState } from "react";



const BookList =()=>{
	const [books, setBooks] = useState([]);

	useEffect(()=>{
	const fetchBooks = async () =>{
		try{ 
			const data = await mockBookList();
			setBooks(data);
			console.log(data)
		}catch (error){
			console.log(error);
		}
	}
	fetchBooks();
},[])

    return(
        <div className={styles.wrapper}>
                <header>
	    	<div className={styles.pageBanner}>
	    		<h1 className={styles.title}> Book Collections</h1>
          <p>Books</p>
          <form className={styles.searchBooks}>
            <input type="text" placeholder="Search books..." />
          </form>
	    	</div>
	    </header>
	    <div className={styles.bookList}>
	    	<h2 className={styles.title}>Books to Read</h2>
	    	<ul>
	    		{books.map(({id,title}) => (
	    			<li key={id}>
	    				<span className={styles.name}>{title}</span>
	    				<span className={styles.delete}>delete</span>
	    			</li>
	    		))}
	    	</ul>
	    </div>
	    <form className={styles.addBook}>
	    	<input type="text" placeholder="Add a book..." />
	    	<button>Add</button>
	    </form>   
        </div>  
    )
}
    export default BookList;