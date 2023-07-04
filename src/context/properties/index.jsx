import { createContext } from "react";
import { useReducer } from "react";
import { reducer } from "./reducer";
// import { apartments } from "../../mock/apartments";

const PropertiesContext = createContext();

const PropertiesProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, [])

    return <PropertiesContext.Provider value={[state, dispatch]}>{children}</PropertiesContext.Provider>
}

export default PropertiesProvider;