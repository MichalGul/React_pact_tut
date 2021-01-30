import React, { Component } from 'react';
import './Events.css'
class InputEvents extends Component {
  constructor(props) {
    super(props)

    this.state = {
      mouseDown: false,
      mouseClicked: 0,
      inputText: 'Hello world',
      formInputText: 'Hello world 2'
    }

    this.handleOnMouseDown = this.handleOnMouseDown.bind(this)
    this.handleOnMouseUp = this.handleOnMouseUp.bind(this)
  }


  handleOnClick = () => {
    console.log(this.state)
    // this.setState({
    //   mouseClicked: this.state.mouseClicked + 1
    // })
    this.setState((state) => {
      return {
        mouseClicked: state.mouseClicked + 1
      }
    });
  }

  handleOnMouseDown() {
    console.log("ASDAD")
    this.setState({
      mouseDown: true
    })
  }

  handleOnMouseUp() {
    this.setState({
      mouseDown: false
    })
  }

  handleOnChange = (event) => {
    this.setState({
      inputText: event.target.value
    })
  }

  handleSubmitChange = (event) => {
    this.setState({
      formInputText: event.target.value
    })
  }

  handleOnSubmit = (event) => { // public class fields
    event.preventDefault() // dont refresh page on submit
    this.setState({
      formInputTextSubmitted: this.state.formInputText
    })
  }


  render() {
    return (
      <>
      <section>
        <h3>Mouse events:</h3>
        <button onClick={ this.handleOnClick }
                onMouseDown={ this.handleOnMouseDown }
                onMouseUp={ this.handleOnMouseUp }>
          Click me
        </button>
        <p>Button mouse down: {this.state.mouseDown ? 'true' : 'false'}</p>
        <p>Button clicked: {this.state.mouseClicked}</p>
      </section>

      <section>
        <h3>Input change events:</h3>
        <input
          type="text"
          value={this.state.inputText}
          onChange={this.handleOnChange}
        />
        <p>Input value: {this.state.inputText}</p>
      </section>

      <section>
        <h3>Form Submit events:</h3>
        <form onSubmit={this.handleOnSubmit}>
          <input
            type="text"
            value={this.state.formInputText}
            onChange={this.handleSubmitChange}
          />
          <button type="submit">Submit</button>
          <p>Input value: {this.state.formInputText}</p>
          <p>Submitted value: {this.state.formInputTextSubmitted}</p>
        </form>
      </section>
      </>
    )
  }



}

export default InputEvents;