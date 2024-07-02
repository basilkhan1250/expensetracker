import React, { createContext, useReducer } from "react";
import Transreducer from "./transreducer";

const initialState = {
    transactions: []
};

export const Transcontext = createContext(initialState);

const Transprovider = ({ children }) => {
    const [state, dispatch] = useReducer(Transreducer, initialState);
    console.log(state);

    const deleteTrans = (id) => {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    };

    const addtrans = (transobj) => {
        dispatch({
            type: "ADD_TRANSACTION",
            payload: {
                id: Math.floor(Math.random() * 1000),
                amount: transobj.amount,
                desc: transobj.desc
            }
        });
    };

    return (
        <Transcontext.Provider value={{
            transactions: state.transactions,
            addtrans,
            deleteTrans
        }}>
            {children}
        </Transcontext.Provider>
    );
};

export default Transprovider;
