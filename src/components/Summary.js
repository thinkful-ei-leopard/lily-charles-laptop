import React from 'react';
import SummaryOptions from './SummaryOptions'

class Summary extends React.Component {
  render(){
  const summary = Object.keys(this.props.state.selected).map((feature, idx) => 
      <SummaryOptions 
      feature={feature}
      idx={idx}
      state={this.props.state}
      USCurrencyFormat={this.props.USCurrencyFormat}
      />
    );

    const total = Object.keys(this.props.state.selected).reduce(
      (acc, curr) => acc + this.props.state.selected[curr].cost,
      0
    );

    return (
      <section className="main__summary">
        <h2>Your cart</h2>
        {summary}
        <div className="summary__total">
          <div className="summary__total__label">Total</div>
          <div className="summary__total__value">
            {this.props.USCurrencyFormat.format(total)}
          </div>
        </div>
      </section>
    );
  }
}

export default Summary