import React, { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import useSound from 'use-sound';
import play from '../../assets/play.mp3';
import correct from '../../assets/correct.mp3';
import wrong from '../../assets/wrong.mp3';

import './Quiz.scss';

function Quiz({ questions, setStop, questionNr, setQuestionNr }) {
    const [question, setQuestion] = useState(null);
    const [selectedAnswer, SetSelectedAnswer] = useState(null);
    const [className, setClassName] = useState('answer');
    const [letsPlay] = useSound(play);
    const [correctAnswer] = useSound(correct);
    const [wrongAnswer] = useSound(wrong);

    useEffect(() => {
        letsPlay();
    }, [letsPlay]);

    useEffect(() => {
        setQuestion(questions[questionNr - 1]);
    }, [questions, questionNr]);

    const delay = (duration, callback) => {
        setTimeout(() => {
            callback();
        }, duration);
    };

    const handleClick = (answer) => {
        SetSelectedAnswer(answer);
        setClassName('answer active');

        delay(3000, () =>
            setClassName(answer.correct ? 'answer correct' : 'answer wrong')
        );

        delay(5000, () => {
            if (answer.correct) {
                correctAnswer();
            } else {
                wrongAnswer();
            }
        });

        delay(6000, () => {
            if (answer.correct) {
                setQuestionNr((state) => state + 1);
                SetSelectedAnswer(null);
            } else {
                setStop(true);
            }
        });
    };

    return (
        <section className="quiz">
            <div className="question">{question?.question}</div>
            <div className="answers">
                {question?.answers.map((answer) => {
                    return (
                        <div
                            className={
                                selectedAnswer === answer ? className : 'answer'
                            }
                            key={nanoid()}
                            onClick={() => handleClick(answer)}
                        >
                            {answer.text}
                        </div>
                    );
                })}
            </div>
        </section>
    );
}

export default Quiz;
