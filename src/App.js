import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import TextEditor from './components/TextEditor';
import Previewer from './components/Previewer';
import marked from 'marked';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      renderedText: {
        __html: ''
      }
    }

  }

  updateText(evt) {
    this.setState({
      renderedText: {
        __html: marked(evt.target.value)
      }
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h2>Free Code Camp - React Markdown Previewer</h2>
        </div>
        <div className="App-body">
          <Grid>
            <Row>
              <Col md={6} className="App-box">
                <TextEditor updateText={this.updateText.bind(this)}/>
              </Col>
              <Col md={6} className="App-box">
                <Previewer htmlText={this.state.renderedText}/>
              </Col>
            </Row>
          </Grid>
        </div>
      </div>
    );
  }
}

export default App;
