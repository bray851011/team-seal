import React, { useState, useEffect } from 'react';

import { ReactComponent as SealLogo} from '../../assets/logo.svg';
import logo from '../../assets/logo2.png'
import seal from '../../assets/seal.png'

import './home.stlyes.scss'

const Home = () => {
    const [isSplit, setIsSplit] = useState(false);

    useEffect(() => {
        // Set a timeout to split the container after 2 seconds
        const timer = setTimeout(() => {
            setIsSplit(true);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={`container ${isSplit ? 'split' : ''}`}>
            <div className="left-container">
                <div>
                    <img src={logo} />
                </div>
                <div>
                    <img src={seal} />
                </div>
            </div>
            <div className='right-container'>
            <p>海報泳隊成立於</p>
            </div>
        </div>
    )
}

export default Home;