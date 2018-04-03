import React, { Component } from 'react';
import './App.css';
import Validation from './Validation/ValidationComponent';
import Char from './Char/CharComponent';

class App extends Component {

  state = {
    text: '',
    count: 0
  }

  textChangedHandler = (event) => {

    this.setState({
      text: event.target.value,
      count: event.target.value.length
    });

    console.log(this.state);
  }

  deleteLetterHandler = (letterIndex) => {
    console.log(letterIndex);

    const arrayLetters = this.state.text.split('');

    arrayLetters.splice(letterIndex, 1);

    this.setState({
      text: arrayLetters.join(''),
      count: arrayLetters.length
    })

  };

  render() {

    return (
      <div className="App">
        <input 
          type="text" 
          placeholder="Add text" 
          onChange={this.textChangedHandler}
          value={this.state.text}/>
        <p>The length of the text is: {this.state.count}</p>

        <Validation length={this.state.count}/>

        {this.state.text.split('').map((letter, index) => {
          return <Char 
            click={() => this.deleteLetterHandler(index)}
            key={index}
            letter={letter} />
        })}

        {/* <ol>
          <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
          <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
          <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
          <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
          <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
          <li>When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p> */}
      </div>
    );
  }
}

export default App;
