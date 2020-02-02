import React from 'react'
import './Collection.styles.scss';
import CustomButton from '../Custom-button/Custom-button.Component';

const CollectionItem = ({ id, name, price, imageUrl }) => {
    return <div className="collection-item">
        <div className="image"
            style={{ backgroundImage: `url(${imageUrl})` }}
        >
        </div>
        <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
        <CustomButton inverted>Add To Cart</CustomButton>
    </div>
}
export default CollectionItem;