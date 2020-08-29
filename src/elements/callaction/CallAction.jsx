import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'

const CallAction = () => {
    return (
        <div className="call-to-action">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="inner text-center">
                            <Link to={`${process.env.PUBLIC_URL}/contact`}><h3 className="rn-button-style--2" ><span>Contact Me</span></h3></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright-text" style={{color:"white"}}>Copyright © 2020 SGoyel.ca</div>
        </div>
    )
}
export default CallAction;
