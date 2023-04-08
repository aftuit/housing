import PropertiesProvider from "./properties";


const RootProvider = ({ children }) => {
    return <>
        <PropertiesProvider>
            {children}
        </PropertiesProvider>
    </>
}
 
export default RootProvider;