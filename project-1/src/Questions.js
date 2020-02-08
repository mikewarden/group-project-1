import React from 'react';
import './App.css';

const Questions = () => {

  const getQuestionsFromAPI = ()=> {
    let randQuestion
    fetch("http://localhost:8080/dev_survey/" + randQuestion)
    .then((res) => res.json())
    .then((response)=>{
      
    }).catch((err) => console.log(err));
    
  }


  return (
    <div className="App">
      <h2>Question Area</h2>
    </div>
  );
}

export default Questions;