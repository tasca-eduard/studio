import Apple from "./Apple"
import Orange from "./Orange"

const FruitBox = () => {
    return (
        <div className="fruit-box box">
            <Apple />
            <Orange />
            <Apple />
            <Orange />
        </div>
    )
}

export default FruitBox
