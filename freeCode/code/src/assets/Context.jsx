import React, { createContext } from 'react'

const appContext=createContext()

const Deliver=({children})=>{
    return <>
<appContext.Provider value={{name:'hammad',address:'karachi',skills:'web programming'}} >
{children}
</appContext.Provider>
</>
}

export {Deliver,appContext}