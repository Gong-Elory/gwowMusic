import React from 'react';
import MusicItem from '../components/musicitem/musiclistitem.jsx';


let MusicList = React.createClass({
	render(){
		let listEle = null;
		listEle = this.props.musiclist.map((item)=>{
			return <MusicItem focus={item === this.props.currentMusitItem} key={item.id} musicitem={item}>{item.title}</MusicItem>
		})


		return (
				<ul>
					{listEle}
				</ul>
			)

	}
})
export default MusicList;