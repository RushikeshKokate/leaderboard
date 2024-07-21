import React from 'react';

const ScoreItem = ({ score }) => {
    return (
        <li>
            {score.username} - {score.score}
        </li>
    );
};

export default ScoreItem;
