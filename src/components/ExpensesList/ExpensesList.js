import React from 'react';
import './ExpensesList.css';
import ExpenseItem from '../ExpenseItem/ExpenseItem';

const ExpensesList = (props) => {
    const items = props.items.map((item) => {
        return (
            <li key={item.id}>
                <ExpenseItem
                    title={item.title}
                    amount={item.amount}
                    date={item.date}
                />
            </li>
        )
    });

    return (
        <ul className='expenses'>
            {items}
        </ul>
    )
};

export default ExpensesList;