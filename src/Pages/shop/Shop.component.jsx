import React from 'react'
import SHOP_DATA from '../../crwn-clothing_sct6_local_images/shop.data';
import PreviewComponent from '../../Component/PreviewCollectionComponent/Preview.Component'
class ShopPage extends React.Component{
    constructor(props){
        super(props);
        this.state={
            collections: SHOP_DATA
        }
    }
    render(){
        let {collections} = this.state;
        return (
            <div className='shop-page'>
                {collections.map(({id,...otherprops})=>{
                    return <PreviewComponent key={id} {...otherprops}/>

                })}
            </div>
        )

    }
}
export default ShopPage;