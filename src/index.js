/**
 * React Micro slider
 */
import React from 'react';
import MicroSlider from 'micro-slider';
import PropTypes from 'prop-types';

export default class ReactMicroSlider extends React.Component {
  static propTypes = {
    onChange: PropTypes.func,
  }

  componentDidMount() {
    const options = { ...this.props };

    this._bind()
    delete options.children;
    delete options.onChange;
    options.onCycleTo = this._cycleTo
    this._microSlider = new MicroSlider(this._microSliderRef, options);
  }

  _bind() {
    this._cycleTo = this._cycleTo.bind(this)
  }

  _cycleTo(element, draggedY) {
    const { onChange } = this.props

    if (typeof (onChange) === 'function') {
      onChange(element, draggedY)
    }
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
