import React from 'react'

import FAQs from './FAQs';
import faqsData from './FAQsData'
const Home = () => {
    return (
        <div style={{ margin: '0 20px' }}>
            <FAQs faqsData={faqsData} />
            <p style={{textAlign: 'center', fontSize: '22px', color: '#1bb566'}}>Made with ❤️ by <a style={{textDecoration: 'underline wavy', color: '#fd1'}} href='https://github.com/Marzan-Bin-Rahman'>Marzan</a></p>
        </div>
    )
}

export default Home