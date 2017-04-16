import React, { Component } from 'react';
import Projects from './Components/Projects';
import './App.css';

class App extends Component {
	constructor() {
		super();
		this.state = {
			projects: []
		}
	}

	componentWillMount() {
		this.setState({projects: [
			{
				title: 'Sexy Website',
				category: "Not for kids"
			},
			{
				title: 'social App',
				category: "Mobile Development"
			},
			{
				title: 'Shopping Cart',
				category: "Finacial Site"
			}
		]});
	}

  render() {
    return (
      <div className="App">
        Hello Steve
        <Projects projects={this.state.projects}/>
      </div>
    );
  }
}

export default App;
