import { CountProductContext } from "../contexts/CountProductContext"
import { useContext } from "react"

const Badge = () => {
    const countProduct = useContext(CountProductContext)
    return (
        <div className={`badge ${countProduct.amountProduct > 0 ? '' : 'hidden'}`}>
            <label>{countProduct.amountProduct}</label>
        </div>
    )
}

export default Badge
