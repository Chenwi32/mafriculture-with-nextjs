import React, { createContext, useContext, useReducer } from "react";

// sets up the data layer
export const StateContext = createContext()

// app wrapper for state management

export const StateProvider = ({ reducer, initialState, children }) => {
    return (
        <StateContext.Provider value={useReducer(reducer, initialState)}>
            {children}
        </StateContext.Provider>
    )
}


// This function is to get data from the layer
export const useStateValue = () => useContext(StateContext)










