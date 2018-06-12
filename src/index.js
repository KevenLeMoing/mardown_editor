import React from 'react';
import { render } from 'react-dom';
//CSS
import './style/css/bootstrap.min.css';
import './index.css';
//JS variables
import { sampleText } from './sampleText';
//Marked.js
import marked from 'marked';


class App extends React.Component {

	state = {
		text: sampleText
	};

	//Before the rendering will be launched
	componentWillMount() {
		const localStorageText = localStorage.getItem('text');

		if (localStorageText) {
			this.setState({ text: localStorageText });
		}
	}

	//After the rendering will be launched
	componentWillUpdate(nextProps, nextState) {
		localStorage.setItem('text', nextState.text);
	}

////Functions

	//To synchronize the two columns' display 
	editText = (event) => {
		const text = event.target.value;
		this.setState({ text });
	};

	//To interpret (only) the markdown syntaxe
	renderText = (text) => {
		const renderText = marked(text, { sanitize: true });
		return { __html: renderText };
	};

	//Display
	render(){
		return(
			<div className="container">
				<div className="row">
					<div className="col-sm-6">
						<textarea 
						value={this.state.text}
						rows="35" 
						className="form-controll"
						onChange={(e) => this.editText(e)}
						>

						</textarea>
					</div>

					<div className="col-sm-6">
						<div dangerouslySetInnerHTML={this.renderText(this.state.text)} />
					</div>
				</div>
			</div>

			)
	}	
}

render (
	<App />,
	document.getElementById('root')
)


//////////////////////////////////////////////OLD CODE
// Exemple de popup
//alert ('Petite pop-bla')
