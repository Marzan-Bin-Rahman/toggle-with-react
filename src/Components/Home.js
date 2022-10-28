import React from 'react'

import FAQs from './FAQs';
import faqsData from './FAQsData'
const Home = () => {
    return (
        <div style={{ margin: '0 20px' }}>
            <FAQs faqsData={faqsData} />
        </div>
    )
}

export default Home