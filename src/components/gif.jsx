import React, { Component } from 'react';

class Gif extends Component {
  handleClick = (event) => {
    // console.log(this.props);
    this.props.selectGif(event.target.id);
  }

  render() {
    const src = `https://media2.giphy.com/media/${this.props.id}/giphy.gif`;
    return (
      <img src={src} alt="" className="gif" onClick={this.handleClick} id={this.props.id} />
    );
  }
}

export default Gif;
