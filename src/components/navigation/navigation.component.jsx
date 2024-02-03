import { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react";
import seal from '../../assets/seal.png'


import './navigation.styles.scss'

const Navigation = () => {
    const linkTexts = ['海豹泳隊。', '泳者無懼。']; // Define your link texts here
    const [currentIndex, setCurrentIndex] = useState(0);
    const [fadeClass, setFadeClass] = useState('fade-in');

    useEffect(() => {
        const interval = setInterval(() => {
          setFadeClass('fade-out');
    
          setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % linkTexts.length);
            setFadeClass('fade-in');
          }, 1000); // Matches the fade-out animation time
        }, 4000); // Change text every 2 seconds
    
        return () => clearInterval(interval); // Cleanup the interval on component unmount
      }, []);
    return (
        <Fragment>
            <div className="navigation">
                <Link className="logo-container" to='/'>
                    <img src={seal} />
                    <p className={fadeClass}>{linkTexts[currentIndex]}</p>

                </Link>
                <div className="nav-links-container">
                    <Link className="nav-link" to='/sign-in'>
                        教練介紹
                    </Link>
                    <Link className="nav-link" to='/sign-in'>
                        泳隊成員
                    </Link>
                    <Link className="nav-link" to='/inquiry'>
                        成績查詢
                    </Link>
                    <Link className="nav-link" to='/sign-in'>
                        比賽成果
                    </Link>
                    <Link className="nav-link" to='/sign-in'>
                        贊助泳隊
                    </Link>
                    <Link className="nav-link" to='/sign-in'>
                        加入泳隊
                    </Link>
                    <Link className="nav-link" to='/sign-in'>
                        登入系統
                    </Link>
                </div>
            </div>
            <Outlet />
        </Fragment>
    );
}

export default Navigation;