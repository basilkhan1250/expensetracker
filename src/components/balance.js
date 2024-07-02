import React, { useContext } from "react";
import { getincome, getexpense } from "../utils";
import { Transcontext } from "./transcontext";

function Balance() {
    let { transactions } = useContext(Transcontext)
    return (
        <div>
            <h2>Your Balance</h2>
            <h1 id="balance">${getincome(transactions) + getexpense(transactions)}</h1>
        </div>
    )
}

export default Balance;