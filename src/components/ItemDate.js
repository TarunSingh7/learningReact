import './ItemDate.css';
function ItemDate(props){
    const date=props.day;
    const month=props.month;
    const year=props.year;
    return(
       
        
    <div className='king'>
    
        <span>{date}</span>
        <span>{month}</span>
        <span>{year}</span>
    
    </div>
    );

}
export default ItemDate;