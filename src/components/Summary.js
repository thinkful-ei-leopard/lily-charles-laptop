import React from 'react';
import SummaryOptions from './SummaryOptions'
import SummaryTotal from './SummaryTotal'

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



    return (
      <section className="main__summary">
        <h2>Your cart</h2>
        {summary}
        <SummaryTotal
          state={this.props.state}
          USCurrencyFormat={this.props.USCurrencyFormat}
        />
      </section>
    );
  }
}

export default Summary