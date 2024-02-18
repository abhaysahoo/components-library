import React from "react"
import { BsUpload } from "react-icons/bs";

export default function Card({ 
        children,
        backgroundColor = "#3F75FE",
        icon = <BsUpload />
    }) {
        
    const style = {
        background: backgroundColor
    }
    return (
        <div className="card">
            <div className="card-upload" style={style}>
                <div className="card-upload-icon">
                    {icon}
                </div>
            </div>
            {children}
        </div>
    )
}
