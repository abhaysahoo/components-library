import React from "react"

export default function Testimonial({ src, alt, name, designation, children }) {
    return (
        <div className="testimonial">   
            <img className="testimonial-image" src={src} alt={alt} />
            <i className="fa-solid fa-quote-left"></i>
            <div className="testimonial-quotation">
                {children}
            </div>
            <div className="testimonial-headline">
                <div className="testimonial-headline-name">{name}</div>
                <div className="testimonial-headline-designation">{designation}</div>
            </div>
        </div>
    )
}
