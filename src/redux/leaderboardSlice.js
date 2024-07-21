import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    scores: [
        // Add some dummy data here for development and testing purposes
        { username: 'Player1', score: '01:30:123' },
        { username: 'Player2', score: '01:25:123' },
        { username: 'Player3', score: '01:20:123' },
        { username: 'Player4', score: '01:15:123' },
        { username: 'Player5', score: '01:10:123' },
        { username: 'Player6', score: '01:05:123' },
        { username: 'Player7', score: '01:00:123' },
        { username: 'Player8', score: '00:55:123' },
        { username: 'Player9', score: '00:50:123' },
        { username: 'Player10', score: '00:45:123' }
    ]
};

const leaderboardSlice = createSlice({
    name: 'leaderboard',
    initialState,
    reducers: {
        addScore: (state, action) => {
            state.scores.push(action.payload);
            state.scores.sort((a, b) => a.score.localeCompare(b.score));
            state.scores = state.scores.slice(0, 10);
        }
    }
});

export const { addScore } = leaderboardSlice.actions;
export default leaderboardSlice.reducer;
