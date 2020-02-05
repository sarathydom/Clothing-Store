import React from 'react';
import CollectionItem from '../Collection-Item/Collection-Item.component';
import './Preview.styles.scss'
 const PreviewComponent = ({title,items}) => {
    return (
        <div className="collection-preview ">
            <h1 className="title">{title.toUpperCase()}</h1>
            <div className='preview'>
            {items.filter((ele,index)=>index<4).map((item)=>{
            return <CollectionItem key={item.id} item={item}/>
            })}
            </div>
        </div>
    )
}
export default PreviewComponent;
