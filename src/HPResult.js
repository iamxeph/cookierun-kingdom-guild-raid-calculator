import React, { Component } from 'react';
import {format} from 'uck';

export class HPResultNumOnly extends Component {
    render() {
      return (
          <div>
            <div className="calc_result_numonly">({this.props.min.toLocaleString()} ~ {this.props.max.toLocaleString()})</div>
          </div>
      );
    }
  }

export class HPResultWithText extends Component {
  constructor(props) {
    super(props)

    this.state = {
      copyText: "",
      setText: "",
      isCopied: false,
      setIsCopied: false
    }
  }
  formatNum(num) {
    if (num < 1000) {
      return num;
    }
    else if (num < 10000) {
      return format('.' + (num.toString().length - 3) + 'f천')(num);
    }
    else if (num < 100000000) {
      return format('.' + (num.toString().length - 4) + 'f만')(num);
    } else if (num < 100000000000) {
      return format('.' + (num.toString().length - 6) + 'f억')(num);
    } else {
      return num;
    }
  }

  render() {
    return (
        <div>
          <div className="calc_result_withtext">{this.formatNum(this.props.min)} ~ {this.formatNum(this.props.max)}</div>
        </div>
    );
  }
}
