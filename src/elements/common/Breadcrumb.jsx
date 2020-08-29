import React, { Component } from "react";


class Breadcrumb extends Component{
    render(){
        const { title, details } = this.props;
        return(
            <React.Fragment>
                <div className="breadcrumb-area rn-bg-color ptb--120 bg_color--6" data-black-overlay="6">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="breadcrumb-inner pt--100">
                                    <h2 className="title">{title}</h2>
                                    <p style={{color:"white"}}>{details}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Breadcrumb;
