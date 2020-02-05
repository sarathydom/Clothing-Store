import React from 'react'
import {connect} from 'react-redux';
import {addItem} from '../../Redux/cart/cart.actions';
import './Collection.styles.scss';
import CustomButton from '../Custom-button/Custom-button.Component';

const CollectionItem = ({item,addItem}) => {
    let { name, price, imageUrl } = item;
    return <div className="collection-item">
        <div className="image"
            style={{ backgroundImage: `url(${imageUrl})` }}
        >
        </div>
        <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
        <CustomButton onClick={()=>addItem(item)} inverted>Add To Cart</CustomButton>
    </div>
}
let mapDispatchToProps = dispatch =>({
    addItem : item=> dispatch(addItem(item))
})
export default connect(null,mapDispatchToProps)(CollectionItem);