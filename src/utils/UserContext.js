import { createContext } from 'react';

const UserContext = createContext({username: '', updateUserContext: (email) => {}})

export default UserContext;