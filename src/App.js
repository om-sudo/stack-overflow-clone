import React,{useState} from 'react';
import './App.css';
import Header from './components/Header';
import HomePage from './components/HomePage';
import AddQuestion from './components/AddQuestion';
import ViewQuestion from './components/ViewQuestion';
import LoginPage from './components/Login';
import {
  BrowserRouter as Router,Routes,Route
}from 'react-router-dom'

function App() {

  const localData = localStorage.getItem("stackData");
  const loggedInUser = localStorage.getItem("loggedUser");
  const [stackData,setStackData] = useState(localData?JSON.parse(localData):[{author:'om thummar',questionTitle:"hello welcome to my clone of stackoverflow. hope you like it. thank you",questionBody:"hello welcome to my clone of stackoverflow. hope you like it. thank you hello welcome to my clone of stackoverflow. hope you like it. thank youhello welcome to my clone of stackoverflow. hope you like it. thank you",tags:["hello",'hello agian'],answers:[]}]);
  const [currentQuestion,setCurrentQuestion] = useState(0);
  const [isLoggedIn , setIsLoggedIn] = useState(loggedInUser?1:0);
  document.title='Stack Overflow'
  return (
    <div className="App">
      {isLoggedIn? 
      <Router>
      <Header  setIsLoggedIn={setIsLoggedIn} />
        <Routes>
        <Route  path='/' element={<HomePage stackData={stackData} setStackData={setStackData} currentQuestion={currentQuestion} setCurrentQuestion={setCurrentQuestion}/>}/>
        <Route  path='/add-question' element={<AddQuestion stackData={stackData} setStackData={setStackData} loggedInUser={loggedInUser}/>}/>
        <Route  path='/question' element={<ViewQuestion stackData={stackData} setStackData={setStackData} currentQuestion={currentQuestion} loggedInUser={loggedInUser}/>}/>
        </Routes> 
      </Router>
      :
        <LoginPage setIsLoggedIn={setIsLoggedIn}/>
      }
    </div>
  );
}

export default App;
