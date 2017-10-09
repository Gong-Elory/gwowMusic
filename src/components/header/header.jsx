import React from 'react';
import ReactDOM from 'react-dom';
import './header.scss'

let Header = React.createClass({
	render(){
		return (
				<div className="components-header row">
					<img src="/assets/images/logo.png" width="40" alt="" className="-col-auto"/>
					<h1 className="caption">Gwow</h1>
				</div>
			);
	}
});

export default Header;
