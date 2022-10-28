import React from 'react'
import FAQ from './FAQ';

import style from './FAQs.module.css'
const FAQs = (props) => {
    const {faqsData} = props;
  return (
    <div className={style.faqContainer}>
            <h1 style={{textAlign: 'center'}}>FAQs</h1>
        {faqsData.map(faqData => <FAQ faqData={faqData} key={faqData.id}/>)}
    </div>
  )
}

export default FAQs