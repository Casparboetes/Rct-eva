import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Green from '../../images/checked.svg'
import Red from '../../images/warning-sign.svg'
import Yellow from '../../images/confused.svg'
import './EvaluationMark.css'


class EvalutionMark extends PureComponent {
  static propTypes = {
    yellow: PropTypes.bool,
    red: PropTypes.bool,
    green: PropTypes.bool,
  }

  renderIcon() {
    const { yellow, red, green } = this.props

    if (yellow) return <img src={Yellow} alt="yellow" />
    if (red) return <img src={Red} alt="red" />
    if (green) return <img src={Green} alt="green" />

    return null
  }

  renderLabel() {
    const { yellow, red, green } = this.props

    if (yellow) return <span>Ok</span>
    if (red) return <span>Attention!</span>
    if (green) return <span>Excellent</span>

    return null
  }

  classNames() {
    const { yellow, red, green } = this.props

    const baseClass = 'EvalutionMark'

    if (yellow) return baseClass + ' yellow'
    if (red) return baseClass + ' red'
    if (green) return baseClass + ' green'

    return baseClass
  }

  render() {
    const { yellow, red, green } = this.props

    if (!yellow && !red && !green) return null

    return (
      <li className={this.classNames()}>
        { this.renderIcon() }
        { this.renderLabel() }
      </li>
    )
  }
}

export default EvalutionMark
