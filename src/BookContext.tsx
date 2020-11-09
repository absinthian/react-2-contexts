import React, { createContext, useState } from 'react';

export const BookContext = createContext({});

const BookProvider = (props: any) => {
    const [books, setBooks] = useState<any>([
        { title: 'wind', id: 1 },
        { title: 'king', id: 2 },
        { title: 'water', id: 3 },
    ]);

    return (
        <BookContext.Provider value={{ books }}>
            {props.children}
        </BookContext.Provider>
    );
}

export default BookProvider;        