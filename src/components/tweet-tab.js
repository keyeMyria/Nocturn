import React, { PropTypes } from 'react';

export default class TweetTab extends React.Component {
  static propTypes = {
    account:     PropTypes.object.isRequired,
    active:      PropTypes.bool,
    children:    PropTypes.string.isRequired,
    tab:         PropTypes.string.isRequired,
    selectTab:   PropTypes.func.isRequired,
  }

  onTabClicked() {
    this.props.selectTab(this.props.tab, this.props.account);
  }

  render() {
    return(
      <li
        className={`tab ${this.props.active ? 'active' : ''}`}
        onClick={this.onTabClicked.bind(this)}
      >
        {this.props.children}
      </li>
    );
  }
}