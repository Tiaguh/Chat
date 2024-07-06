import {
    createContext,
    useContext,
    useReducer,
} from "react";

import { AuthContext } from "./AuthContext";

export const ChatContext = createContext();

export const ChatContextProvider = ({ children }) => {
    const { currentUser } = useContext(AuthContext);
    const INITIAL_STATE = {
        chatId: "null",
        user: {},
    };

    return (
        <ChatContext.Provider value={{ currentUser }}>
            {children}
        </ChatContext.Provider>
    );
};
