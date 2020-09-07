import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

class TabsTwo extends Component{
    render(){
        let
        tab1 = "Languages",
        tab2 = "Web Development",
        tab3 = "Frameworks",
        tab4 = "Tools";
        const { tabStyle } = this.props
        return(
            <div>
                {/* Start Tabs Area */}
                <div className="tabs-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <Tabs>
                                    <TabList  className={`${tabStyle}`}>
                                        <Tab>{tab1}</Tab>
                                        <Tab>{tab2}</Tab>
                                        <Tab>{tab3}</Tab>
                                        <Tab>{tab4}</Tab>
                                    </TabList>

                                    <TabPanel>
                                    <div className="single-tab-content">
                                        <ul>
                                            <li>
                                                <h6>Java</h6> Strong understanding developed through courses and several personal projects
                                            </li>
                                            <li>
                                                <h6>C/C++</h6> Strong understanding developed through courses and several projects and assignments
                                            </li>
                                            <li>
                                                <h6>JavaScript</h6> Developing skills through current projects
                                            </li>

                                            <li>
                                                <h6>MySQL</h6> Developing skills through current courses and projects
                                            </li>
                                        </ul>
                                    </div>
                                    </TabPanel>

                                    <TabPanel>
                                       <div className="single-tab-content">
                                       <ul>
                                           <li>
                                               <h6>SCSS</h6>
                                           </li>
                                           <li>
                                               <h6>CSS</h6>
                                           </li>
                                           <li>
                                               <h6>HTML</h6>
                                           </li>

                                           <li>
                                               <h6>JSX</h6>
                                           </li>
                                           <li>
                                               <h6>Liquid</h6>
                                           </li>
                                       </ul>
                                       </div>
                                    </TabPanel>



                                    <TabPanel>
                                       <div className="single-tab-content">
                                       <ul>
                                           <li>
                                               <h6>React.js</h6> Developing skills through personal projects
                                           </li>
                                           <li>
                                               <h6>Node.js</h6> Developing skills through personal projects
                                           </li>

                                       </ul>
                                       </div>
                                    </TabPanel>

                                    <TabPanel>
                                       <div className="single-tab-content">
                                       <ul>
                                           <li>
                                               <h6>IntelliJ</h6>
                                           </li>
                                           <li>
                                               <h6>Atom</h6>
                                           </li>
                                           <li>
                                               <h6>Git</h6>
                                           </li>
                                           <li>
                                               <h6>Visual Studio Code</h6>
                                           </li>
                                           <li>
                                               <h6>JUnit</h6>
                                           </li>
                                           <li>
                                               <h6>TDD</h6>
                                           </li>

                                       </ul>
                                       </div>
                                    </TabPanel>

                                </Tabs>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Tabs Area */}
            </div>
        )
    }
}



export default TabsTwo;
