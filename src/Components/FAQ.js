import React, { useState } from 'react'
import { GoChevronDown, GoChevronUp } from "react-icons/go";

import style from './FAQ.module.css'
const FAQ = (props) => {
    const { title, description } = props.faqData;
    const [toggle, setToggle] = useState(false);

    return (
        <div>
            <div className={style.faqTitleContainer} onClick={() => {
                setToggle(!toggle)
            }}>
                <h2>{title}</h2>
                <span>{toggle ? <GoChevronUp /> : <GoChevronDown />}</span>
            </div>
            {toggle && (<p onClick={() => { setToggle(false) }}>{description}</p>)}

        </div>
    )
}

export default FAQ