import React from 'react';
import './Menu-item.styles.scss';
import {withRouter} from 'react-router-dom'
const MenuItem = ({title,imageUrl,size,linkUrl,history,match}) => {
return (
    <div className={`menu-item ${size}` }>
        <div
            style={{
                backgroundImage:`url(${imageUrl})`
            }}
            className="background-image"
            onClick={()=>history.push(`${match.url}${linkUrl}`)}
        />
                    <div className="content">
                        <h1 className="title">{title.toUpperCase()}</h1>
                        <span className="subtitle">Shop Now</span>
                    </div>
                </div>
)
}
export default withRouter(MenuItem);