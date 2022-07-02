import { createContext,useState} from "react";

export const globalcontext = createContext()

export function Providertheme({children}){
    const [state,setState] = useState(true)

    function toggle(){
        setState(!state)
    }
    return(
        <globalcontext.Provider value={
                {
                    themeState:state,
                    toggle:toggle
                }
            }>
            {children}
        </globalcontext.Provider>
    )
}

