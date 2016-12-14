import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import styles from './CoreLayout.scss'

export class CoreLayout extends React.PureComponent {
  static propTypes = {
    children: PropTypes.element,
  }

  render() {
    return (
      <div className={styles.layout}>
        'TZ-Material'
      </div>
      )
  }
}

export default connect()(CoreLayout)
