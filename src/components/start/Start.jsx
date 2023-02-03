import React, { useState } from 'react';

import './Start.scss';

function Start(props) {
    const [user, setUser] = useState('');

    const handleClick = () => {
        props.setUsername(user);
    };

    return (
        <section className="start">
            <input
                type="text"
                placeholder="Enter your name"
                className="start-input"
                value={user}
                onChange={(e) => setUser(e.target.value)}
            />
            <button
                className="start-button"
                onClick={handleClick}
                disabled={!user ? true : false}
            >
                Start
            </button>
        </section>
    );
}

export default Start;
