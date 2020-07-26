
import React from 'react';
import { Component } from 'react';



class Demo1 extends Component {
 
  
    constructor() {
      super();
      this.state = {
        name: "React"
      };
      this.onChangeValue = this.onChangeValue.bind(this);
    }
  
    onChangeValue(event) {
      console.log(event.target.value);
    }
  
    render() {
      return (
        <div className="card">
          <center>
        <h3 className="survey-title">Personnel Survey</h3>
        <div className="survey-question">
        <br></br>
        <br></br>
            <h3>Enter Your Gender</h3>
            <br></br>
            <label className="check-container">
                <input type="radio" name="answer1" value="M" onClick={this.answerSelected} /> Male
            </label>
            <label className="check-container">
                <input type="radio" name="answer1" value="F" onClick={this.answerSelected} /> Female
            </label>
            <label className="check-container">
                <input type="radio" name="answer1" value="O" onClick={this.answerSelected} /> Others
            </label>
        </div>
        <div className="survey-question">
        <br></br>
            <h3>Enter your age</h3>
            <br></br>
            <label className="check-container">
                <input type="radio" name="answer2" value="> 15 to 20" onClick={this.answerSelected} /> <span>below 18</span>
           </label>
           <label className="check-container">
                <input type="radio" name="answer2" value="> 21 to 30" onClick={this.answerSelected} /> 18 to 25
           </label>
           <label className="check-container">
                <input type="radio" name="answer2" value="> 31 to 40" onClick={this.answerSelected} /> 25 above
           </label>
        </div>
        <br></br><br></br>
        <div className="survey-question">
            <h3>Education of the respondent</h3>
            <br></br>
            <label className="check-container">
                <input type="radio" name="answer3" value="School" onClick={this.answerSelected} /> High School
           </label>
           <label className="check-container">
                <input type="radio" name="answer3" value="Graduate" onClick={this.answerSelected} /> Associate Degree
           </label>
            <label className="check-container">
                <input type="radio" name="answer3" value="Post Graduate" onClick={this.answerSelected} /> College Degree(Bsc)
           </label>
            <label className="check-container">
                <input type="radio" name="answer3" value="Doctorate" onClick={this.answerSelected} /> Masters
           </label>
        </div>
        <br></br><br></br>
        <div className="survey-question">
            <h3>Occupation</h3>
            <br></br>
            <label className="check-container">
                <input type="radio" name="answer4" value="Information Technology" onClick={this.answerSelected} /> Technology
           </label>
           <label className="check-container">
                <input type="radio" name="answer4" value="manifacture" onClick={this.answerSelected} /> Business
           </label>
           <label className="check-container">
                <input type="radio" name="answer4" value="Arts and Music" onClick={this.answerSelected} /> Arts and Music
           </label>
           <label className="check-container">
                <input type="radio" name="answer4" value="Sports" onClick={this.answerSelected} /> Sports
           </label>
        </div>
        <br></br><br></br>
        <div className="survey-question">
            <h3>Job status</h3>
            <br></br>
            <label className="check-container">
                <input type="radio" name="answer5" value="Employed" onClick={this.answerSelected} /> Employed
           </label>
           <label className="check-container">
                <input type="radio" name="answer5" value="Unemployed" onClick={this.answerSelected} /> Unemployed
           </label>
           <label className="check-container">
                <input type="radio" className="radio" name="answer5" value="Looking for job" onClick={this.answerSelected} /> Looking for job
           </label>
           <label className="check-container">
                <input type="radio" className="radio" name="answer5" value="Student" onClick={this.answerSelected} /> Student
           </label>
        </div>
        <br></br><br></br>
        <input className="submitButton" type="submit"  value="submit"/>
        </center>
    </div>
        // <div onChange={this.onChangeValue}>
        //   <input type="radio" value="Male" name="gender" /> Male
        //   <input type="radio" value="Female" name="gender" /> Female
        //   <input type="radio" value="Other" name="gender" /> Other
        // </div>
      );
    }
  }
  
  export default Demo1;