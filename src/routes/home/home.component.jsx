import React, { useState, useEffect } from 'react';

import logo from '../../assets/logo2.png'
import seal from '../../assets/seal.png'

import './home.stlyes.scss'

const Home = () => {

    const [typedText, setTypedText] = useState('');
    const fullText = "  海豹泳隊是個成立超過十年的游泳團隊，多年來培育出眾多全國級別的頂尖游泳選手。海豹教練團隊由一群經驗豐富的教練組成，每位教練都擁有深厚的游泳知識和豐富的指導、比賽經驗。海豹泳隊致力於科學化的教學方法，以確保每位隊員都能在水中發揮出最佳的性能和技巧。我們相信，通過科學的訓練方法和個性化的指導，每一位隊員都能夠達到他們的最高潛能。在這個團隊中，我們不僅追求競技水平的提升，更重視選手們人格的培養和團隊精神的建立。無論你是一名對游泳充滿熱情的新手，還是一位尋求更高挑戰的資深選手，我們的都歡迎你的加入。在這裡，你將獲得最專業的訓練，遇見最優秀的隊友，一起在游泳的道路上不斷前進，攜手創造更多的佳績。加入海豹泳隊，一起激揚水花，書寫屬於你的游泳傳奇！";
    var speed = 20; // Typing speed in milliseconds

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
        setTypedText((prev) => prev + fullText.charAt(index));
        index++;
        if (index === fullText.length) {
            clearInterval(interval);
        }
        }, speed);
        
        return () => clearInterval(interval); // Cleanup on component unmount
    }, [fullText, speed]);

    return (
        <div className={'container'}>
            <div className='inner-container1'>
                <div className='slide-container-rtl'>
                    <div className='text-wrapper'>
                        <h1>Team Seal</h1>
                    </div>
                    <div className='text-wrapper'>
                        <h1>Team Seal</h1>
                    </div>
                    <div className='text-wrapper'>
                        <h1>Team Seal</h1>
                    </div>
                    <div className='text-wrapper'>
                        <h1>Team Seal</h1>
                    </div>
                    <div className='text-wrapper'>
                        <h1>Team Seal</h1>
                    </div>
                    <div className='text-wrapper'>
                        <h1>Team Seal</h1>
                    </div>
                    <div className='text-wrapper'>
                        <h1>Team Seal</h1>
                    </div>
                    <div className='text-wrapper'>
                        <h1>Team Seal</h1>
                    </div>
                    <div className='text-wrapper'>
                        <h1>Team Seal</h1>
                    </div>
                    <div className='text-wrapper'>
                        <h1>Team Seal</h1>
                    </div>
                    <div className='text-wrapper'>
                        <h1>Team Seal</h1>
                    </div>
                    <div className='text-wrapper'>
                        <h1>Team Seal</h1>
                    </div>
                    <div className='text-wrapper'>
                        <h1>Team Seal</h1>
                    </div>
                    <div className='text-wrapper'>
                        <h1>Team Seal</h1>
                    </div>
                    <div className='text-wrapper'>
                        <h1>Team Seal</h1>
                    </div>
                    <div className='text-wrapper'>
                        <h1>Team Seal</h1>
                    </div>
                    <div className='text-wrapper'>
                        <h1>Team Seal</h1>
                    </div>
                    <div className='text-wrapper'>
                        <h1>Team Seal</h1>
                    </div>
                    <div className='text-wrapper'>
                        <h1>Team Seal</h1>
                    </div>
                    <div className='text-wrapper'>
                        <h1>Team Seal</h1>
                    </div>
                    <div className='text-wrapper'>
                        <h1>Team Seal</h1>
                    </div>
                    <div className='text-wrapper'>
                        <h1>Team Seal</h1>
                    </div>
                    <div className='text-wrapper'>
                        <h1>Team Seal</h1>
                    </div>
                    <div className='text-wrapper'>
                        <h1>Team Seal</h1>
                    </div>
                </div>

                <img src={logo} className='fade-in-right' alt=''/>

                <div className='slide-container-ltr'>
                    <div className='text-wrapper'>
                        <h1>海豹泳隊</h1>
                    </div>
                    <div className='text-wrapper'>
                        <h1>海豹泳隊</h1>
                    </div>
                    <div className='text-wrapper'>
                        <h1>海豹泳隊</h1>
                    </div>
                    <div className='text-wrapper'>
                        <h1>海豹泳隊</h1>
                    </div>
                    <div className='text-wrapper'>
                        <h1>海豹泳隊</h1>
                    </div>
                    <div className='text-wrapper'>
                        <h1>海豹泳隊</h1>
                    </div>
                    <div className='text-wrapper'>
                        <h1>海豹泳隊</h1>
                    </div>
                    <div className='text-wrapper'>
                        <h1>海豹泳隊</h1>
                    </div>
                    <div className='text-wrapper'>
                        <h1>海豹泳隊</h1>
                    </div>
                    <div className='text-wrapper'>
                        <h1>海豹泳隊</h1>
                    </div>
                    <div className='text-wrapper'>
                        <h1>海豹泳隊</h1>
                    </div>
                    <div className='text-wrapper'>
                        <h1>海豹泳隊</h1>
                    </div>
                    <div className='text-wrapper'>
                        <h1>海豹泳隊</h1>
                    </div>
                    <div className='text-wrapper'>
                        <h1>海豹泳隊</h1>
                    </div>
                    <div className='text-wrapper'>
                        <h1>海豹泳隊</h1>
                    </div>
                    <div className='text-wrapper'>
                        <h1>海豹泳隊</h1>
                    </div>
                    <div className='text-wrapper'>
                        <h1>海豹泳隊</h1>
                    </div>
                    <div className='text-wrapper'>
                        <h1>海豹泳隊</h1>
                    </div>
                    <div className='text-wrapper'>
                        <h1>海豹泳隊</h1>
                    </div>
                    <div className='text-wrapper'>
                        <h1>海豹泳隊</h1>
                    </div>
                    <div className='text-wrapper'>
                        <h1>海豹泳隊</h1>
                    </div>
                    <div className='text-wrapper'>
                        <h1>海豹泳隊</h1>
                    </div>
                    <div className='text-wrapper'>
                        <h1>海豹泳隊</h1>
                    </div>
                    <div className='text-wrapper'>
                        <h1>海豹泳隊</h1>
                    </div>
                </div>
            </div>

            <div className='inner-container2'>
                <div className='left-container'>
                    <img src={seal} className='fade-in-left' alt=''/>
                </div>
                <div className='right-container'>
                    <h1 className='team-name'>新竹市海豹泳隊</h1>
                    <hr></hr>
                    <p className='cursor'>{typedText}</p>
                </div>
            </div>
            
            <div className='inner-container1'>
            
            </div>
        </div>
    )
}

export default Home;