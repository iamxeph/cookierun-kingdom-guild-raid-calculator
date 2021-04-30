import React, { Component } from 'react';

class HPResult extends Component {
    render() {
      return (
          <div>
            <h2>{this.props.min.toLocaleString()} ~ {this.props.max.toLocaleString()}</h2>
          </div>
      );
    }
  }

  export default HPResult;
