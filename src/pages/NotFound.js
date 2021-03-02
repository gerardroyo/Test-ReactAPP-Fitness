import React from 'react'
import '../components/styles/NotFound.css'

class NotFound extends React.Component {
    render () {
        return (
            <body className="body">
                <div>
                    <section className="error-container">
                        <span>4</span>
                        <span><span class="screen-reader-text">0</span></span>
                        <span>4</span>
                    </section>
                    <div class="link-container">
                        <a target="_blank" href="http://localhost:3000/exercise" class="more-link">Home</a>
                    </div>
    
                </div>
            </body>
        )
    }
}

export default NotFound