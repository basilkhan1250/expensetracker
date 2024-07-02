import React, { useContext } from "react";
import { Transcontext } from "./transcontext";

function History() {
    const { transactions, deleteTrans } = useContext(Transcontext);
    console.log(transactions);

    const handleDelete = (id) => {
        deleteTrans(id);
    };

    return (
        <div>
            <h3>History</h3>
            <hr />
            <ul className="translist">
                {transactions.map(transaction => (
                    <li className="li" key={transaction.id}>
                        <button
                            className="delete-button"
                            onClick={() => handleDelete(transaction.id)}>X</button>
                        <span>{transaction.desc}</span>
                        <span>{transaction.amount}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default History;
