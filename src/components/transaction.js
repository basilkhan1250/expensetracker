import React, { useContext } from "react";
import { Transcontext } from "./transcontext";
import { getincome,getexpense } from "../utils";


function Transaction() {
    let { transactions } = useContext(Transcontext)

    return (
        <div id="card">
            <h3>Income <h3 id="green">${getincome(transactions)}</h3></h3>
            <h3>Expense <h3 id="red">${getexpense(transactions)}</h3></h3>
        </div>
    )
}

export default Transaction;