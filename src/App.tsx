import * as React from "react";
import BookProvider from "./BookContext";
import Booklist from "./BookList";
import { UserProvider } from "./UserContext";
import UserList from "./UserList";

export default () => (
  <>
    <UserProvider>
      under user provider:
      <UserList />
    </UserProvider>
    <br />
    <BookProvider>
      under book provider:
      <Booklist />
    </BookProvider>
  </>
);
