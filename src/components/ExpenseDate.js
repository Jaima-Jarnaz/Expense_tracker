import "./ExpenseDate.css";
function ExpenseDate(props){
    const month=props.date.toLocaleString('en-US',{month:'long'}); 
    const day=props.date.toLocaleString('en-US',{day:'2-digit'});
    const year=props.date.getFullYear(); 
    return( 
        <div className="date-div">
            <div className="year">{year}</div>
            <div className="month">{month}</div>
            <div className="day">{day}</div>
        </div>
    );
}
export default ExpenseDate;