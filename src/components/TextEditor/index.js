import React, {Component} from 'react';
import './styles.css';

class TextEditor extends Component {
  render() {
    return (
      <div className="TextEditor">
        <textarea className="TextEditor-TextArea" onChange={this.props.updateText}/>
      </div>
    )
  }

}

export default TextEditor;
