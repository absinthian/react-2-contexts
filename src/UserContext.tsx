import * as React from 'react';
import { useEffect, useState } from 'react';

export const UserContext = React.createContext({});

export const UserProvider = (props:any) => {
    const [user, setuser] = useState({id: 0, name: 'nio'});


    // useEffect(() => {
    //     setuser('kon');
    // }, [user]);

    return (
        <UserContext.Provider value={{user}}>
            {props.children}
        </UserContext.Provider>
    )
}
