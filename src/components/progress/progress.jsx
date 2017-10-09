import React from 'react';
import ReactDOM from 'react-dom';
import './progress.scss'

let Progress = React.createClass({
	getDefaultProps() {
		return {
			barColor: '#0f0'
		}
	},
	changeProgress(e){
		let progressBar = this.refs.progressBar;
		let pgs = (e.clientX - progressBar.getBoundingClientRect().left)/progressBar.clientWidth;
		this.props.onProgressChange && this.props.onProgressChange(pgs);
	},
	render(){
		let tecent = this.props.progress;
		return (
				<div className="components-progress" onClick={this.changeProgress} ref="progressBar">
					<div className="progress" style={{width: `${tecent}%`,backgroundColor: this.props.barColor}} >
					</div>
				</div>
			);
	}
});

export default Progress;