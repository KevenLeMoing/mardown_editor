import React from 'react';
import { render } from 'react-dom';
//CSS
import './style/css/bootstrap.min.css';
import './index.css';
//JS variables
import { sampleText } from './sampleText';


class App extends React.Component {
	render(){
		return(
			<div className="container">
				<div className="row">
					<div className="col-sm-6">
						<textarea value={sampleText} rows="35" className="form-controll">

						</textarea>
					</div>

					<div className="col-sm-6">
						<h1>Results</h1>
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
