import React from 'react'

function Footer() {
    const date = new Date();
    const year = date.getFullYear();
  return (
    <> 
        <div class="wave-container wave">
            <p>© {year}, Developed & Designed with ❤️ by <a className='footer_tanveer' target='_tanveer' href='https://www.linkedin.com/in/md-tanveer-ansari-07985924a/'>Md Tanveer</a></p>
        </div>
    </>
  )
}

export default Footer