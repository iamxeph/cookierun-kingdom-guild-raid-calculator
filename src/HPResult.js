import React, { Component } from 'react';

class HPResult extends Component {
    render() {
      return (
          <div>
            <div class="calc_result">{this.props.min.toLocaleString()} ~ {this.props.max.toLocaleString()}</div>
          </div>
      );
    }
  }

  export default HPResult;
