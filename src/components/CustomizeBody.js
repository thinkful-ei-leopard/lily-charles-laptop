import React from 'react';
import CustomizeSection from './CustomizeSection'


class CustomizeBody extends React.Component {
  render() {
  const features = Object.keys(this.props.features).map((feature, idx) => 
    <CustomizeSection 
      key={idx} 
      feature={feature} 
      idx={idx} 
      features={this.props.features} 
      state={this.props.state} 
      USCurrencyFormat={this.props.USCurrencyFormat}
      updateFeature = {this.props.updateFeature}
      />
  );
  return(
    <form className="main__form">
      <h2>Customize your laptop</h2>
      {features}
    </form>
  )
  };
}



export default CustomizeBody