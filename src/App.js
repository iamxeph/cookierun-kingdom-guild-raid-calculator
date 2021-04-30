import React, { Component } from 'react';
import './App.css';
import NumberSelector from './NumberSelector';
import HPResult from './HPResult';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      level: "",
      percent: "",
      min: 0,
      max: 0
    }

    this.dragonHP = [
      0,
      3000000,
      3150000,
      3474000,
      3648000,
      3830000,
      4022200,
      4224000,
      4436000,
      4658000,
      4890000,
      5134000,
      5390000,
      5660000,
      5944000,
      6242000,
      6554000,
      6882000,
      7226000,
      7588000,
      8366000,
      9224000,
      10170000,
      11212000,
      12360000,
      13626000,
      15024000,
      16564000,
      18262000,
      20134000,
      22198000,
      24474000,
      26982000,
      29748000,
      32798000,
      35472000,
      37632000,
      39922000,
      42354000,
      44932000,
      47206000,
      49114000,
      51098000,
      53162000,
      55310000,
      57262000,
      58992000,
      60774000,
      62612000,
      64506000,
      66456000,
      68464000,
      70532000,
      72664000,
      74860000,
      77122000,
      79452000,
      81854000,
      84328000,
      86876000,
      89502000,
      ]

      this.inputHPPercentRef = React.createRef();
  }

  componentDidMount() {
    // this.displayHPResult()
  }

  handleInputEnter(e){
    e.which = e.which || e.keyCode;
    if (e.which === 13){
      switch (e.target.id) {
        case "input-level":
          this.inputHPPercentRef.current.focus();
          break;
        default:
          break;
      }
    }
  }

  handleLevelChange(e) {
    this.setState({
      level: e.target.value,
    })
    this.displayHPResult()
  }

  handleHPPercentChange(e) {
    this.setState({
      percent: e.target.value,
    })
    this.displayHPResult()
  }

  calcMinHP(state) {
    let result = this.dragonHP[state.level] * (state.percent - 1)/100 + 1
    if (result < 0)
    {
      return 0
    }
    else {
      return result;
    }
  }

  calcMaxHP(state) {
    let result = this.dragonHP[state.level] * (state.percent)/100
    if (result < 0)
    {
      return 0
    }
    else {
      return result;
    }
  }

  displayHPResult() {
    this.setState((state) => {
      return {
        min: this.calcMinHP(state),
        max: this.calcMaxHP(state),
      }
    })
  }

  render() {
    return (
      <div className="App">
        <h2>토벌전 체력 계산기</h2>
        <h3>토벌전 단계</h3>
        <NumberSelector
          min="1"
          max="50"
          tabIndex="1"
          id="input-level"
          autoFocus={true}
          value={this.state.level}
          onInput={(e) => this.handleLevelChange(e)}
          onKeyUp={(e) => this.handleInputEnter(e)}
        >
        </NumberSelector>
        <br />
        <br />
        <h3>남은 체력 %</h3>
        <NumberSelector
          min="1"
          max="100"
          tabIndex="2"
          innerRef={this.inputHPPercentRef}
          value={this.state.percent}
          onInput={(e) => this.handleHPPercentChange(e)}
          onKeyUp={(e) => null}
        >
        </NumberSelector>
        <br />
        <br />
        <h3>잔여 체력 범위</h3>
        <HPResult min={this.state.min} max={this.state.max}></HPResult>
        <br />
        제작: [에어프라이어]길드 멍킹<br />
        문의: iamxeph@gmail.com<br />
        디자인 도움 환영합니다
      </div>
    );
  }
}

export default App;