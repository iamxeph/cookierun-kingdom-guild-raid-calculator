import React, { Component } from 'react';
import {format} from 'uck';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { notify } from 'react-notify-toast';

export class HPResultNumOnly extends Component {
    render() {
      return (
          <div>
            <div className="calc_result_numonly">({this.props.min.toLocaleString()}~{this.props.max.toLocaleString()})</div>
          </div>
      );
    }
  }

export class HPResultWithText extends Component {
  constructor(props) {
    super(props)

    this.state = {
      copyText: this.props.level*1 + '단계 ' + this.props.percent*1 + '% ' + this.formatNum(this.props.min) + '~' + this.formatNum(this.props.max),
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

  onChangeProps() {
    console.log('onChangeProps!');
    this.setState({
      setIsCopied: false,
      copyText: this.props.level*1 + '단계 ' + this.props.percent*1 + '% ' + this.formatNum(this.props.min) + '~' + this.formatNum(this.props.max)
    })
  }

  onCopyText() {
    this.setState({
      setIsCopied: true,
    })
    notify.show('체력값 복사 완료','success');
    setTimeout(() => {
      this.setState({
        setIsCopied: false,
      })
    }, 1000);
    console.log('Copied: ' + this.state.copyText);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.level !== this.props.level || prevProps.percent !== this.props.percent){
      this.onChangeProps();
    }
  }

  render() {
    return (
        <div>
          <CopyToClipboard text={this.state.copyText} onCopy={() => this.onCopyText()}>
          <div className="calc_result_withtext">{this.formatNum(this.props.min) + '~' + this.formatNum(this.props.max)}</div>
          </CopyToClipboard>
        </div>
    );
  }
}
