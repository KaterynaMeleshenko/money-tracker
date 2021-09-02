import { useSelector } from "react-redux"

function Balance() {
    const balance = useSelector(state => state.addChargeReducer.balance);
    
    return (
    <div className="content__balance">
      <h2 className="content__balance-title">Balance</h2>
      <p className="content__balance-number">{balance}</p>
    </div>
    )
}

export default Balance;