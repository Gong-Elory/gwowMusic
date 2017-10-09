/*
* @Author: Elory
* @Date:   2017-10-09 11:54:46
* @Last Modified by:   Elory
* @Last Modified time: 2017-10-09 13:29:32
*/
import React from 'react';
import Progress from '../components/progress/progress.jsx';
import './player.scss';
import {Link} from 'react-router';

let duration = null;
let Player = React.createClass({
	getInitialState() {
		return {
			progress: 0,
			volume: 0,
			isPlay: true
		}
	},
	componentDidMount() {
		var that = this;
		$("#player").bind($.jPlayer.event.timeupdate, (e) => {
			duration = e.jPlayer.status.duration;
			this.setState({
				volume: e.jPlayer.options.volume * 100,
				progress: e.jPlayer.status.currentPercentAbsolute
			});
		});
	},

	componentWillUnmount() {
		$('#player').unbind($.jPlayer.event.timeupdate);
	},

	progressChangeHandler(pgs){
		$('#player').jPlayer('play',duration*pgs);
	},
	volumeChangeHandler(pgs){
		$('#player').jPlayer('volume',pgs);
	},
	play(){
		this.state.isPlay?($('#player').jPlayer('pause')):($('#player').jPlayer('play'));
		this.setState({
			isPlay: !this.state.isPlay
		})
	},
	render(){
		return (
				
				<div className="player-page">
	                <h1 className="caption"><Link to="/list">我的私人音乐坊 &gt;</Link></h1>
	                <div className="mt20 row">
	                	<div className="controll-wrapper">
	                		<h2 className="music-title">{this.props.currentMusitItem.title}</h2>
	                		<h3 className="music-artist mt10">{this.props.currentMusitItem.artist}</h3>
	                		<div className="row mt20">
	                			<div className="left-time -col-auto">-</div>
	                			<div className="volume-container">
	                				<i className="icon-volume rt" style={{top: 5, left: -5}}></i>
	                				<div className="volume-wrapper">
						                 <Progress progress={this.state.volume} barColor='#333' onProgressChange={this.volumeChangeHandler}></Progress>
	                				</div>
	                			</div>
	                		</div>
	                		<div style={{height: 10, lineHeight: '10px'}}>
				                <Progress progress={this.state.progress} barColor='#f00' onProgressChange={this.progressChangeHandler}></Progress>
	                		</div>
	                		<div className="mt35 row">
	                			<div>
		                			<i className="icon prev" onClick={this.prev}></i>
		                			<i className={`icon ml20 ${this.state.isPlay ? 'pause' : 'play'}`} onClick={this.play}></i>
		                			<i className="icon next ml20" onClick={this.next}></i>
	                			</div>
	                			<div className="-col-auto">
	                				<i className={`icon repeat-${this.props.repeatType}`} onClick={this.changeRepeat}></i>
	                			</div>
	                		</div>
	                	</div>
	                	<div className="-col-auto cover">
	                		<img src={this.props.currentMusitItem.cover} alt={this.props.currentMusitItem.title}/>
	                	</div>
	                </div>
	            </div>

			)
	}
})

export default Player;