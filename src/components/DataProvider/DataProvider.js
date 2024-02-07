

import React,{createContext, useReducer} from 'react'

export const DataContext = createContext();

export const DataProvider = ({children,Reducer,initialstate}) => {
    return (
      <DataContext.Provider value={useReducer(Reducer, initialstate)}>

        {children}
        
      </DataContext.Provider>
    );
    
}

