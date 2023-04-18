import React from "react";
import { useState, useRef } from "react"
import './Collapsible.scss'

export default function FullCollapsible(props) {
    const [open, setOpen] = useState(false);

    function toggle() {
        setOpen(!open);
    }

    const contentRef = useRef(this);
    // if (contentRef.current) console.log(contentRef.current.scrollHeight);

    return (
        <div>
            <button id="expand" onClick={toggle}>{props.label}</button>
            <div className="content"
                ref={contentRef} style={open ? { height: contentRef.current.scrollHeight + 'px' } : { height: '0px' }}>
                {props.children}
            </div>
        </div>
    )
}