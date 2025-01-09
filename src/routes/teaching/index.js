import { h } from 'preact';
import { useState } from 'preact/hooks';
import style from './style.css';

const Teaching = () => {
    const [activeTab, setActiveTab] = useState('graduate');

    const renderContent = () => {
        switch(activeTab) {
            case 'graduate':
                return (
                    <div>
                        <h2>Graduate Courses</h2>
                        <h3>Master-level courses:</h3>
                        <ul>
                            <li>Information and Communication Engineering TSKS35, Fall 2024. Linköping University.</li>
                            <li>Multiple Antenna Communications TSKS14, Spring 2024. Linköping University.</li>
                            <li>Modern topics in telecommunications and radio engineering 10 – Intelligent security. Spring 2023. University of Oulu, Finland.</li>
                            <li>Stochastic Processes for Engineering, Fall 2019. UFSCar, Brazil</li>
                        </ul>
                    </div>
                );
            case 'undergraduate':
                return (
                    <div>
                        <h2>Undergraduate Courses</h2>
                        <ul>
                            <li>Scientific Computing for Electrical and Mechanical Engineering, Spring/Fall, yearly from 2015 to 2019. UFSCar, Brazil</li>
                            <li>Introduction to Wireless Communications, Spring 2016, Fall 2016, Spring 2017, Spring 2018. UFSCar, Brazil</li>
                        </ul>
                    </div>
                );
            case 'other':
                return (
                    <div>
                        <h2>Other Educational and Public Lectures</h2>
                        <ul>
                            <li>Invited Lecture "Physical Layer Security in 6G", Escuela Politécnica Nacional (EPN), Ecuador</li>
                            <li>Invited Lecture: "On the road to 6G, what comes next?", Universidad de las Américas (UDLA), Ecuador</li>
                            <li>Invited Lecture: "What is 6G?", University of the Armed Forces (ESPE), Ecuador</li>
                            <li>Invited Lecture "Security for 6G mobile networks", UDLA, Ecuador</li>
                            <li>Invited Lecture "Security and Privacy in 6G", ESPE, Ecuador</li>
                        </ul>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div class={style.teaching}>
            <h1>Teaching</h1>
            <div class={style.tabs}>
                <button 
                    class={activeTab === 'graduate' ? style.active : ''} 
                    onClick={() => setActiveTab('graduate')}
                >
                    Graduate Courses
                </button>
                <button 
                    class={activeTab === 'undergraduate' ? style.active : ''} 
                    onClick={() => setActiveTab('undergraduate')}
                >
                    Undergraduate Courses
                </button>
                <button 
                    class={activeTab === 'other' ? style.active : ''} 
                    onClick={() => setActiveTab('other')}
                >
                    Other Lectures
                </button>
            </div>
            <div class={style.content}>
                {renderContent()}
            </div>
        </div>
    );
};

export default Teaching;



