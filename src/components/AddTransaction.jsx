import React, { useState,useContext } from 'react'
import { GlobalContext } from "../context/GlobalContext";


const AddTransaction = () => {
    const [text,setText]= useState('');
    const [amount, setAmount]=useState(0);
    const {addTransaction}=useContext(GlobalContext);

    function handleTextChange(event){
        const text= event.target.value;
        setText(text);
    }

    function handleAmountChange(event){
        const amount=event.target.value;
        setAmount(amount);
    }

    const onSubmit =event=>{
        event.preventDefault();
        const newTransaction={
            id: Math.floor(Math.random() * 100000),
            text,
            amount: +amount
        }

        addTransaction(newTransaction);
        setAmount(0);
        setText('');
    }

    return (
        <div>
        <h3>Add New Transaction</h3>
        <hr className="line"/>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="text" className="text-label">Text</label>
                    <input type="text" value={text} onChange={handleTextChange} placeholder="Enter Text......" />
                    <label htmlFor="amount" className="text-label">Amount</label>
                    <p>(negative - expense, positive - income)</p>
                    <input type="number" value={amount} onChange={handleAmountChange} placeholder="Enter Amount......" />
                    <button className="transaction-btn">Add Transaction</button>
                </div>
            </form>
        </div>
    )
}

export default AddTransaction
