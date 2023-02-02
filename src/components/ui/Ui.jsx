import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import useMoney from 'store/useMoney';

import './Ui.scss';

function Ui() {
    const [question, setQuestion] = useState(1);

    const money = useMoney((state) => state.money);

    return (
        <div className="ui">
            <section className="ui-main">main</section>
            <section className="ui-pyramid">
                <ul className="ui-pyramid-money-list">
                    {money.map((mon) => {
                        return (
                            <li
                                key={nanoid()}
                                className={
                                    question === mon.id
                                        ? 'money-list-item active'
                                        : 'money-list-item'
                                }
                            >
                                <span className="list-item-number">
                                    {mon.id}
                                </span>
                                <span className="list-item-amount">
                                    ${mon.amount}
                                </span>
                            </li>
                        );
                    })}
                </ul>
            </section>
        </div>
    );
}

export default Ui;
