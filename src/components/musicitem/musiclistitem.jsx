import React from 'react';
import './musiclistitem.scss';

let MusicItem = React.createClass({
	render(){
		let item = this.props.musicitem;
        return (
            <li className={`row${this.props.focus? ' focus':''} components-listitem`}>
                <p><span className="bold">{item.title}</span>  -  {item.artist}</p>
                <p className="-col-auto delete"></p>
            </li>
        );

	}
})
export default MusicItem;