import React, { Component } from 'react';
import './App.css';
import NumberSelector from './NumberSelector';
import {HPResultNumOnly, HPResultWithText} from './HPResult';
import ReactGA from 'react-ga';
import Notifications, {notify} from 'react-notify-toast';

ReactGA.initialize('UA-196007966-1');
ReactGA.pageview(window.location.pathname + window.location.search);

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
        <Notifications />
        <h3>쿠키런 킹덤 토벌전 체력 계산기</h3>
        <div id="calculator">
        <div className="calc_input_desc">토벌전 단계</div>
        <NumberSelector
          min="1"
          max="60"
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
        <div className="calc_input_desc">남은 체력 %</div>
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
        <div className="calc_input_desc">잔여 체력 범위</div>
        <div className="calc_copytoclipboard_desc">클릭하면 복사됩니다</div>
        <HPResultWithText level= {this.state.level} percent={this.state.percent} min={this.state.min} max={this.state.max}></HPResultWithText>
        <HPResultNumOnly min={this.state.min} max={this.state.max}></HPResultNumOnly>
        <br />
        </div>
        <div id="drawing">
          <img src="/calculating_yongcoo_small.webp" alt="Calculating Yongcoo"></img>
          <div className="drawing_desc">"계산하는 용쿠" 아뙈나라 作</div>
        </div>
        제작: [에어프라이어]길드 멍킹<br />
        문의 및 제안: iamxeph@gmail.com<br /><br />
        디자인 도움 환영합니다.<br />
        그림 투고 환영합니다.<br /><br />
      </div>
    );
  }
}

export default App;
