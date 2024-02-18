import React from "react"

export default function Badge({ color, shape, children }) {
    return (
        <div className={`badge ${color ? color : "gray"} ${shape ? shape : "square"}`}>
            {children}
        </div>
    )
}
