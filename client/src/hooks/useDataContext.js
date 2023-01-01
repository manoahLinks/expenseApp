import { DataContext } from "../context/dataContext";
import { useContext } from "react";

export const useDataContext = () => {

    const context = useContext(DataContext)

    if(!context){
        throw Error('use DataContext must be used inside a dataContextProvider')
    }

    return context
}