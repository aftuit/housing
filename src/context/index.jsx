import { createContext } from "react";
import PropertiesProvider from "./properties";

const RootContext = createContext();

const RootProvider = ({ children }) => {
    return <>
        <RootContext.Provider>
            <PropertiesProvider>
                {children}
            </PropertiesProvider>
        </RootContext.Provider>
           </>
}

export default RootProvider;