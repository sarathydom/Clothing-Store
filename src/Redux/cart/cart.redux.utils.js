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