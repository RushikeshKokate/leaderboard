import React from 'react';
import { useSelector } from 'react-redux';
import ScoreItem from './ScoreItem';

const Leaderboard = () => {
    const scores = useSelector(state => state.leaderboard.scores);

    return (
        <div className="leaderboard">
            <h1>Leaderboard</h1>
            <ul>
                {scores.map((score, index) => (
                    <ScoreItem key={index} score={score} />
                ))}
            </ul>
        </div>
    );
};

export default Leaderboard;
