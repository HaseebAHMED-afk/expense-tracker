import React,{useContext} from 'react'
import {GlobalContext} from '../context/GlobalContext';

const Balance = () => {
    const {transactions}=useContext(GlobalContext);

    const amounts = transactions.map(transaction=>transaction.amount)
    const total = amounts.reduce((acc,item)=>(acc+=item),0).toFixed(2);
    return (
        <div>
            <h3>Your Balance</h3>
            <p>$ {total}</p>
        </div>
    )
}

export default Balance 