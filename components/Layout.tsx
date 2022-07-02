import React from 'react'
import Footer from './Footer'
import Header from './Header'

const Layout = () => {
    return (
        <div className="flex flex-col min-h-screen ">
            <Header />
            <div className="flex-grow">
                Page content
            </div>
            <Footer />
        </div>
    )
}

export default Layout