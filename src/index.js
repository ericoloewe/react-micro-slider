/**
 * React Micro slider
 */
import React from 'react';
import MicroSlider from 'micro-slider';

export default class ReactMicroSlider extends React.Component {
  componentDidMount() {
    const options = { ...this.props };

    delete options.children;
    this._microSlider = new MicroSlider(this._microSliderRef, options);
  }

  render() {
    return (
      <div className="react-micro-slider">
        <div ref={r => this._microSliderRef = r} className="micro-slider">
          {this.props.children}
        </div>
      </div>
    )
  }
}
