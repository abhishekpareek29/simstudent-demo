import React, { Component } from "react";
import PropTypes from "prop-types";


class MakeEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first_number: '',
      last_number: '',
      output: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const conf = {
      method: 'post',
      body: JSON.stringify(this.state),
      headers: {
        'Content-Type': 'application/json',
      }
    };
    fetch(this.props.API + this.props.endpoint, conf)
    .then(response => {
      return response.json();
    })
    .then(data =>
      this.setState({
        output: data.addition,
      })
    );
  }

  render() {
    return (
      <form class="make-form" onSubmit={this.handleSubmit}>
        <label>
          <input type="text" name="first_number" value={this.state.first_number} onChange={this.handleChange} />
        </label>
        <label class="math_op">+</label>
        <label>
          <input type="text" name="last_number" value={this.state.last_number} onChange={this.handleChange} />
        </label>
        <label class="math_op">=</label>
        <label>
          <input disabled="disabled" type="text" name="output" value={this.state.output} onChange={this.handleChange} />
        </label>
        <input class="submit" type="submit" value="Add" />
      </form>
    );
  }
}
export default MakeEntry;
