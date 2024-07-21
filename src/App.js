import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import Leaderboard from './components/Leaderboard';
import AddScorePopup from './components/AddScorePopup';
import Footer from './components/Footer';

const App = () => {
    return (
        <Provider store={store}>
            <div className="app">
                <Leaderboard />
                <AddScorePopup />
                <Footer />
            </div>
        </Provider>
    );
};

export default App;
