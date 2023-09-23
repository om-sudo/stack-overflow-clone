import React,{useState} from "react"
import { NavLink } from 'react-router-dom';
import Questions from "./Questions";
import './HomePage.css';



const HomePage = (props) => {

    const {stackData,currentQuestion,setCurrentQuestion} = props;

    return(<div className="homepage">
        <div className="homepage-container">
            <div className="homepage-container-top">
                <h2>All Questions</h2>
                <NavLink to='/add-question'><button>Add Question</button></NavLink>
            </div>
            <div className="homepage-container-desc">
                <p>All question stat</p>
            </div>
            <div className="questions">
                <div className="question">
                    {stackData.map((value,index) => <Questions currentQuestion={currentQuestion} setCurrentQuestion={setCurrentQuestion} value={value} index={index}/>)}
                </div>
            </div>
        </div>
    </div>);
}

export default HomePage;