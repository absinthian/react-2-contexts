import React, { useContext } from 'react';
import { BookContext } from './BookContext';
import { UserContext } from './UserContext';

const Booklist = () => {
    // @ts-ignore
    const { books } = useContext(BookContext);
    //@ts-ignore
    // const { user } = useContext(UserContext);

    return (
        <div>
            {/* <p>Hello, {user}</p> */}
            {books.map((book: any) => (
                <li key={book.id}>{book.title}</li>
            ))}
        </div>
    );
}

export default Booklist;