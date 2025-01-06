import React from 'react'

const Navigation = () => {
    return (
        <div>
            <div className="header-top">
                <div className='container'>
                    <div className="row">
                        <div className="col-md-3 col-3 logo">
                            <img src="public/images/logo.png" alt="logo" />
                        </div>

                        <div className="col-md-6 col-6">
                            <ul className='menu-list'>
                                <li>
                                    <a href="#">Menu</a>
                                </li>

                                <li>
                                    <a href="#">Location</a>
                                </li>

                                <li>
                                    <a href="#">About</a>
                                </li>

                                <li>
                                    <a href="#">Contact</a>
                                </li>
                            </ul>
                        </div>

                        <div className="col-md-3 col-3 button">
                            <button>Login</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navigation
