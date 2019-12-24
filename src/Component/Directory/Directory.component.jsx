import React,{Component} from 'react';

import './Directory.styles.scss';
import {sections} from '../../directory.data';
import MenuItem from '../Menu-item/Menu-component'
class Directory extends Component {
    constructor(){
        super();
        this.state={
            sections: sections
        }
    }
    render(){
        let {sections}=this.state;
        return(
            <div className="directory-menu">
                {sections.map(({title,imageUrl,id, size})=>{
                   return <MenuItem title={title} key={id} imageUrl={imageUrl} size={size}/>
                })}
            </div>
        );
    }
}
export default Directory