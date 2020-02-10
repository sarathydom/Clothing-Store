export const addItemToCart = (cartItem,cartItemToAdd) =>{
    let existingcartitem = cartItem.find(cartitem=>cartitem.id===cartItemToAdd.id);
    if(existingcartitem){
        return cartItem.map(cartitem=>
            cartitem.id===cartItemToAdd.id?{
            ...cartitem,quantity:cartitem.quantity+1
        }: cartitem);
    }
    return [...cartItem,{...cartItemToAdd,quantity:1}]
}

export const removeItemfromcart = (cartItems,itemtoRemove)=>{
    let existingItem = cartItems.find(cartitem=>cartitem.id===itemtoRemove.id);
    if(existingItem.quantity===1){
     return cartItems.filter(cartitem=>cartitem.id!=itemtoRemove.id)
    }
    let new_c = cartItems.map(cartitem=>{
        return cartitem.id === itemtoRemove.id ? {...cartitem,quantity:cartitem.quantity-1}:cartitem;
    })
    console.log(new_c,'newcccccccccccc') 
    return new_c
}
