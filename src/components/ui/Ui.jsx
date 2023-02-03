import React, { useEffect, useState } from 'react';
import Start from 'components/start/Start';
import { nanoid } from 'nanoid';
import useMoney from 'store/money/useMoney';
import useQuestions from 'store/questions/useQuestions';
import Quiz from 'components/quiz/Quiz';
import Timer from 'components/timer/Timer';

import './Ui.scss';

function Ui() {
    const [username, setUsername] = useState(null);
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
            {username ? (
                <>
                    <section className="ui-main">
                        {stop ? (
                            <h1 className="center"> You Eearned: {earned}</h1>
                        ) : (
                            <>
                                <div className="top">
                                    <div className="timer">
                                        <Timer
                                            setStop={setStop}
                                            questionNr={questionNr}
                                        />
                                    </div>
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
                </>
            ) : (
                <Start setUsername={setUsername} />
            )}
        </div>
    );
}

export default Ui;
