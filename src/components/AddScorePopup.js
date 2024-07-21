import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addScore } from '../redux/leaderboardSlice';

const AddScorePopup = () => {
    const [username, setUsername] = useState('');
    const [score, setScore] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = () => {
        dispatch(addScore({ username, score }));
        setUsername('');
        setScore('');
    };

    return (
        <div className="popup">
            <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
            />
            <input
                type="text"
                value={score}
                onChange={(e) => setScore(e.target.value)}
                placeholder="MM:SS:MS"
            />
            <button onClick={handleSubmit}>Add Score</button>
        </div>
    );
};

export default AddScorePopup;
