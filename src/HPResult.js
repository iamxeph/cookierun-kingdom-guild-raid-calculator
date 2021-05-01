import React, { Component } from 'react';

class HPResult extends Component {
    render() {
      return (
          <div>
            <div className="calc_result">{this.props.min.toLocaleString()} ~ {this.props.max.toLocaleString()}</div>
          </div>
      );
    }
  }

  export default HPResult;
