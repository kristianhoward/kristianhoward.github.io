import { createContext, useState } from "react";

const AppContext = createContext();
export default AppContext

export function AppProvider({ children }) {
    const [currentPage, setCurrentPage] = useState("home");

    return (
        <AppContext.Provider value={{ currentPage, setCurrentPage }}>
            {children}
        </AppContext.Provider>
    );
}