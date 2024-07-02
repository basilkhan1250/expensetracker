import React, { useContext, useState } from "react";
import { Transcontext } from "./transcontext";

function Addtransaction() {
    let { addtrans } = useContext(Transcontext);
    let [newdesc, setdesc] = useState("");
    let [newamount, setaomunt] = useState(0);

    const handleaddition = (event) => {
        event.preventDefault();
        if (Number(newamount) === 0) {
            alert("Please enter some value");
            return false;
        }
        addtrans({
            amount: Number(newamount),
            desc: newdesc,
        })
        setdesc("");
        setaomunt(0);
    };

    return (
        <div>
            <h3>Add New Transaction</h3>
            <hr></hr>
            <form onSubmit={handleaddition}>
                <label htmlFor="diss">Enter Description</label>
                <br></br>
                <input type="text" id="diss" placeholder="Description" value={newdesc} onChange={(e) => setdesc(e.target.value)}></input>
                <br></br>
                <label htmlFor="amount">Enter Amount</label>
                <br></br>
                <input type="number" id="amount" placeholder="Amount" value={newamount} onChange={(e) => setaomunt(e.target.value)}></input>
                <button className="btn">Add Transaction</button>
            </form>
        </div>
    );
}

export default Addtransaction;
