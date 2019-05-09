import React from "react";

class Form extends React.Component {
  render() {
    return (
      <form className="App_form" onSubmit={this.props.getWeather}>
        <input type="text" name="City" placeholder="City..." />
        <input type="text" name="Country" placeholder="Country..." />
        <button>Get weather</button>
      </form>
    );
  }
}

export default Form;
