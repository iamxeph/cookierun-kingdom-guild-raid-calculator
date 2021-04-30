import React, { Component } from 'react';

class NumberSelector extends Component {
    render() {
        return (
            <input
                type="number"
                tabIndex={this.props.tabIndex}
                id={this.props.id}
                autoFocus={this.props.autoFocus}
                min={this.props.min}
                max={this.props.max}
                ref={this.props.innerRef}
                value={this.props.value}
                onInput={(e) => this.props.onInput(e)}
                onKeyUp={(e) => this.props.onKeyUp(e)}
            >
            </input>
        );
    }
}

export default NumberSelector;
