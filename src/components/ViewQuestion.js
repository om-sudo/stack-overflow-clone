import React,{useState} from "react"
import { Avatar } from "@mui/material";
import ReactQuill from "react-quill";
import './ViewQuestion.css'
import 'react-quill/dist/quill.snow.css'

const ViewQuestion = (props) => {

    const{stackData , setStackData , currentQuestion,loggedInUser} = props;

    const [answerValue , setAnswerValue] = useState({});

    const questionToView = stackData[currentQuestion];


    const handleAddAnswer = (event) => {
        event.preventDefault();
        setAnswerValue('');
        const tempStackData = [...stackData];
        tempStackData[currentQuestion] = {...tempStackData[currentQuestion],answers:[...tempStackData[currentQuestion].answers,{answerBody:answerValue,author:loggedInUser}]};
        localStorage.setItem("stackData",JSON.stringify(tempStackData))
        setStackData(tempStackData);
    }

    const handleChangeAnswerValue = (event) => {
        setAnswerValue(event);
    }

    return(<div className="question">
        <div className="question-container">
            <div className="question-top"> 
                <h2 className="main-question">{questionToView.questionTitle}</h2>
            </div>
             <div className="question-body">
                <div className="question-answer">
                    <p dangerouslySetInnerHTML={{ __html:questionToView.questionBody }}></p>
                    <div className="author">
                        <small>asked by</small>
                        <div className="author-details">
                            <Avatar/>
                            <p>{questionToView.author}</p>
                        </div>
                    </div>
                </div>
             </div>
             <div className="answers">
                <div className="answers-container">

                {questionToView.answers.map(value => <div className="question-answer">
                    <p dangerouslySetInnerHTML={{ __html: value.answerBody }}></p>
                    <div className="author">
                        <small>answered by</small>
                        <div className="author-details">
                            <Avatar/>
                            <p>{value.author}</p>
                        </div>
                        </div>
                </div>)}
                </div>
             </div>
        </div>
        <div className="add-answer">
            <div className="add-answer-container">
                <h3>Your Answer</h3>
                <button onClick={handleAddAnswer}>add your Answer</button>
            </div>
            <ReactQuill value={answerValue} onChange={handleChangeAnswerValue} className="react-quill" theme="snow" style={{ height:"100px" , margin:"10px 0 10px 0"}}/>           
        </div>
       
    </div>);
}

export default ViewQuestion;