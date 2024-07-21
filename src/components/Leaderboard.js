import React from 'react';
import { useSelector } from 'react-redux';
import ScoreItem from './ScoreItem';

const Leaderboard = () => {
    const scores = useSelector(state => state.leaderboard.scores);

    return (
        <div className="leaderboard">
            <div>
                <div className='left-side'>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <h1>Leaderboard</h1>
                <div className='right-side'>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
            <ul>
                {scores.map((score, index) => (
                    <ScoreItem key={index} score={score} />
                ))}
            </ul>
        </div>
    );
};

export default Leaderboard;
