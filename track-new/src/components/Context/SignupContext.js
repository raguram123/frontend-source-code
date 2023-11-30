import { createContext } from "react";
import { useState } from "react";

let SignupContext = createContext();


export const SignupProvider = ({ children }) => {
    const [isLibrarianVisible, setLibrarianVisible] = useState(false);
    return <SignupContext.Provider value={{ isLibrarianVisible, setLibrarianVisible }}>
        {children}
    </SignupContext.Provider>
}
export default SignupContext;