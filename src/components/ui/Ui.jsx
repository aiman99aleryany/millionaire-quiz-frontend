import React, { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import useMoney from 'store/money/useMoney';
import useQuestions from 'store/questions/useQuestions';
import Quiz from 'components/quiz/Quiz';

import './Ui.scss';

function Ui() {
    const [questionNr, setQuestionNr] = useState(1);
    const [stop, setStop] = useState(false);
    const [earned, setEarned] = useState('$ 0');

    const money = useMoney((state) => state.money);
    const questions = useQuestions((state) => state.questions);

    useEffect(() => {
        setEarned(money.find((m) => m.id === questionNr - 1)?.amount);
    }, [questionNr, money]);

    return (
        <div className="ui">
            <section className="ui-main">
                {stop ? (
                    <h1 className="center"> You Eearned: {earned}</h1>
                ) : (
                    <>
                        <div className="top">
                            <div className="timer">30</div>
                        </div>
                        <div className="bottom">
                            <Quiz
                                questions={questions}
                                setStop={setStop}
                                questionNr={questionNr}
                                setQuestionNr={setQuestionNr}
                            />
                        </div>
                    </>
                )}
            </section>
            <section className="ui-pyramid">
                <ul className="ui-pyramid-money-list">
                    {money.map((mon) => {
                        return (
                            <li
                                key={nanoid()}
                                className={
                                    questionNr === mon.id
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
