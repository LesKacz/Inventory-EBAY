import React from 'react';
import { link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1>Beanie Babies</h1>
            <link to="/choose">
                <button> Beanie Babies</button>
                <button> Bears</button>
                <button> Birds</button>
                <button> Animals</button>
                <button> Baseball Cards</button>
                <button> Dolls</button>
            </link>
        </div>
    );
};
export default Home;