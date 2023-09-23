import React,{useState} from "react";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css'
import { Link } from 'react-router-dom';
import { TagsInput} from "react-tag-input-component"
import './AddQuestion.css'

const AddQuestion =(props) =>{
    const {stackData , setStackData,loggedInUser} = props;
    console.log(loggedInUser);
    const [question , setQuestion] = useState('');
    const [questionBody , setQuestionBody] = useState('');
    const [questionTags , setQuestionTags] = useState([]);

    const handleAddQuestion = (event) => {
        event.preventDefault();
        localStorage.setItem("stackData",JSON.stringify([...stackData,{author:loggedInUser,questionTitle:question,questionBody:questionBody,tags:questionTags,answers:[]}]));
        setStackData([...stackData,{author:loggedInUser,questionTitle:question,questionBody:questionBody,tags:questionTags,answers:[]}])
    }

    const handleSetQuestion = (event) => {
        setQuestion(event.target.value);
    }

    const handleSetQuestionBody = (event) => {
        setQuestionBody(event);
    }


    const handleTags = (event) => {
        setQuestionTags(event);
    }

    return(<div className="add-question">
        <div className="add-question-container">
            <div className="container-title">
                <h1>Ask a public question</h1>
            </div>
            <div className="question-container">
                <div className="question-segments">
                <div className="question-segment">
                    <div className="question-title">
                        <h3>title</h3>
                        <small>Be specific and imagine , you are asking question to another person.</small>
                    </div>
                    <input onChange={handleSetQuestion} type="text" placeholder="add question subject"></input>
                </div>
                <div className="question-segment">
                    <div className="question-title">
                        <h3>Body</h3>
                        <small>Include all the information about the question Someone would need to ansawer your question.</small>
                        <ReactQuill onChange={handleSetQuestionBody} className="react-quill" theme="snow"/>
                    </div>
                </div>
                <div className="question-segment">
                <div className="question-title">
                        <h3>Tags</h3>
                        <small>Add upto 5 tags to describe your question.</small>
                        <TagsInput onChange={handleTags} className="tagsInput" name="tags" placeHolder="press Enter to add tag"/>
                    </div>
                </div>
                </div>
            </div>
            <Link to='/'> <button onClick={handleAddQuestion} className="add-question-button">Add Question</button></Link> 
        </div>

    </div>);
}

export default AddQuestion;