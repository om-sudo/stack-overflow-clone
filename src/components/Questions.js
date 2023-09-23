import { Avatar } from "@mui/material";
import React from "react";
import {Link} from 'react-router-dom'
import './Questions.css'
const Questions = (props) => {

    const {value,index, setCurrentQuestion} = props;
    return(<div className="questions">
            <div className="questions-container">
                <div className="questions-data">
                    <div className="numberOfAnswers">
                        <p>{value.answers.length}</p>
                        <span>Answers</span>
                    </div>
                </div>
                <div className="question-answer">
                    <Link onClick={()=>{setCurrentQuestion(index)}}  to='/question'>{value.questionTitle}</Link>
                    <div className="answer">
                        <div dangerouslySetInnerHTML={{ __html: value.questionBody }}></div>
                    </div>
                    <div className="tags-container" >
                        {value.tags.map((tag)=> <span className="tags">{tag}</span>)}
                </div>
                <div className="author">
                    <div className="author-details">
                        <Avatar/>
                        <p>{value.author}</p>
                    </div>
                </div>
                </div>
                
            </div>
    </div>); 
}

export default Questions;