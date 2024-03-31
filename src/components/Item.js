import './Item.css';

function Item(props){
const itemName=props.name;
return(<p className='Family'>{itemName}</p>);
}
export default Item;