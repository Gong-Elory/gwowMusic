/*
* @Author: Elory
* @Date:   2017-10-09 09:09:59
* @Last Modified by:   Elory
* @Last Modified time: 2017-10-09 09:09:59
*/
import React from 'react';
import Header from './components/header/header.jsx';
import Player from './page/player.jsx';
import MusicList from './page/musiclist.jsx';
import {Router, IndexRoute, Link, Route, hashHistory} from 'react-router';

import $ from 'jquery';
import MUSIC_LIST from '../config/config';

let App = React.createClass({
	getInitialState(){
		return {
			musiclist: MUSIC_LIST,
			currentMusitItem: MUSIC_LIST[0]
		}
	}
	,
	componentDidMount() {
		var that = this;
		$('#player').jPlayer({
			ready: function(){
				$(this).jPlayer('setMedia',{
					mp3: 'http://m10.music.126.net/20171009171342/b0b63dce875eafda8480a2c2c454f487/ymusic/6e01/a4d4/bbef/2dda07904eb54d44abb278165e1c6ead.mp3'
				}).jPlayer('play');
			},
			supplied: 'mp3',
			wmode: 'window'
		})
	},
	render(){
		return (
				<div>
					<Header></Header>
					{React.cloneElement(this.props.children,this.state)}
				</div>
			)
	}
})
let Root = React.createClass({
	render(){
		return (<Router history={hashHistory}>
					<Route path="/" component={App}>
						<IndexRoute component={Player}></IndexRoute>
						<Route path="/list" component={MusicList}></Route>
					</Route>
				</Router>)
	}
})

export default Root;
// <Player currentMusitItem={this.state.currentMusitItem}></Player>	
// {this.props.children}
// <MusicList currentMusitItem={this.state.currentMusitItem} musiclist={this.state.musiclist}></MusicList>	