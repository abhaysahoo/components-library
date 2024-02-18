import React from "react"

export default function Banner({ variant, children }) {
    let variantClass
    if(variant==="success") {
        variantClass = "fa-circle-check"
    } else if(variant==="warning") {
        variantClass = "fa-triangle-exclamation"
    } else if(variant==="error") {
        variantClass = "fa-circle-xmark"
    } else {
        variantClass = "fa-circle-info"
    }
    
    return (
        <div className={`banner banner-${variant}`}>
            <i className={`fa-solid ${variantClass}`}></i>
            <div>
                {children}
            </div>   
        </div>
    )
}
