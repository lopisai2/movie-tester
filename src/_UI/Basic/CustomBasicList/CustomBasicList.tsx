import { FC } from "react"
import { CustomBasicListI } from "./interfaces/interface"

const CustomBasicList: FC<CustomBasicListI> = ({...props}) => {
    return (
        <div>
            {props.data.map((item, index) => (
                <div key={index}>
                    {item.name}
                </div>
            ))}
        </div>
    )
}

export default CustomBasicList
