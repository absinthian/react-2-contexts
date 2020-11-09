import * as React from 'react';
import { BookContext } from './BookContext';
import { UserContext } from './UserContext';

const UserList = () => {
    // @ts-ignore
    const { user } = React.useContext(UserContext);
    // @ts-ignore
    // const { books } = React.useContext(BookContext);

    return (
        <div>
            this is from user context: {user.id} {user.name}
            <br />
            {/* this is from books context: {JSON.stringify(books)} */}
        </div>
    );
}

export default UserList;