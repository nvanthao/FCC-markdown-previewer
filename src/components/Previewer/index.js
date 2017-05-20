import React, {Component} from 'react';
import './styles.css';

class Previewer extends Component {
  render() {
    return (
      <div className="Previewer">
        <div dangerouslySetInnerHTML={this.props.htmlText}></div>
      </div>
    )
  }
}

export default Previewer;
