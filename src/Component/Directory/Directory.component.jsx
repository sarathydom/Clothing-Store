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
                {sections.map(({id,...directorySectionProps})=>{
                   return <MenuItem  key={id} {...directorySectionProps}/>
                })}
            </div>
        );
    }
}
export default Directory