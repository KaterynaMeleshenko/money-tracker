import { useSelector } from "react-redux";


export default function ShowLimitInfo() {
  const balance = useSelector(state => state.addChargeReducer.balance);
  const user = useSelector(state => state.addUserInfo);

  if (user.alarm && user.limit > 0 && user.limit >= balance && balance > 0) {
    return (
      <div className="alarm-info">
        <i className="fas fa-exclamation-triangle"/>
          PLEASE PAY ATTENTION THAT YOUR BUDGET IS ALMOST OVER!
        <i className="fas fa-exclamation-triangle"/>
      </div>
    )
  } else if (user.alarm && balance <= 0) {
      return (
        <div className="alarm-info">
          <i class="far fa-surprise"></i>
            Uuuups! YOUR BUDGET IS OVER!
          <i class="far fa-surprise"></i>
        </div>
      )
    }
}