
//REACT CONTECT API

import React,{createContext, useContext, useReducer } from "react";

//preparing the data layer
export const StateContext = createContext();
export const StateProvider =({reducer,initialState,children})=>(<StateContext.Provider value= {useReducer(reducer,initialState)}>{children}
</StateContext.Provider>
);   
// children is referring to the app
//initial state is the initial state of the app when it is loaded
// reducer listens to changes

export const useStatevalue =() => useContext(StateContext);
// This is a hook which allows us to pull information from the data layer