import React, { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import './Quiz.scss';

function Quiz({ questions, setTimeOut, questionNr, setQuestionNr }) {
    const [question, setQuestion] = useState(null);

    useEffect(() => {
        setQuestion(questions[questionNr - 1]);
    }, [questions, questionNr]);

    return (
        <section className="quiz">
            <div className="question">{question?.question}</div>
            <div className="answers">
                {question?.answers.map((answer) => {
                    return (
                        <div className="answer" key={nanoid()}>
                            {answer.text}
                        </div>
                    );
                })}
            </div>
        </section>
    );
}

export default Quiz;
