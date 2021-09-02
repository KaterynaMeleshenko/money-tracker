import { useSelector } from "react-redux";

const ShowQuestion = (sum) => {
  const balance = useSelector(state => state.addChargeReducer.balance);
  const user = useSelector(state => state.addUserInfo);

  if (user.alarm && user.limit >= balance && sum > (balance - user.limit) && sum !== 0) {
    return (
      <div className="alarm-info">
        <i class="fas fa-question"/>
          ARE YOU SURE THAT YOU WANT TO WASTE YOUR MONEY? 
        <i class="fas fa-question"/><br/><br/>
        <i class="fas fa-exclamation"/>
          IT'S BETTER TO WORK HARDER!
        <i class="fas fa-exclamation"/>
      </div>
    )
   }
}

export default ShowQuestion;