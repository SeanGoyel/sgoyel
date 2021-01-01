(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{48:function(e,a,t){e.exports=t(86)},85:function(e,a,t){},86:function(e,a,t){"use strict";t.r(a);var l=t(3),n=t(4),r=t(6),c=t(5),o=t(7),i=t(1),s=t.n(i),m=t(43),u=t.n(m),d=t(14),E=t.n(d),h=t(8),p=t(44),g=function(e){function a(){return Object(l.a)(this,a),Object(r.a)(this,Object(c.a)(a).apply(this,arguments))}return Object(o.a)(a,e),Object(n.a)(a,[{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement(p.Helmet,null,s.a.createElement("title",null,this.props.pageTitle),s.a.createElement("meta",{name:"description",content:"a poertfolio for Sean Goyel"})))}}]),a}(i.Component),v=t(47),b=t(25),f=t.n(b),y=t(12),N=t(11),k=t(21),w=t.n(k),j=t(2),S=[{Social:s.a.createElement(N.a,null),link:"https://github.com/SeanGoyel/"}],L=function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(r.a)(this,Object(c.a)(a).call(this,e))).menuTrigger=t.menuTrigger.bind(Object(y.a)(t)),t.CLoseMenuTrigger=t.CLoseMenuTrigger.bind(Object(y.a)(t)),t.stickyHeader=t.stickyHeader.bind(Object(y.a)(t)),window.addEventListener("load",function(){console.log("All assets are loaded")}),t}return Object(o.a)(a,e),Object(n.a)(a,[{key:"menuTrigger",value:function(){document.querySelector(".header-wrapper").classList.toggle("menu-open")}},{key:"CLoseMenuTrigger",value:function(){document.querySelector(".header-wrapper").classList.remove("menu-open")}},{key:"stickyHeader",value:function(){}},{key:"render",value:function(){var e=document.querySelectorAll(".has-droupdown > a");for(var a in e)e.hasOwnProperty(a)&&(e[a].onclick=function(){this.parentElement.querySelector(".submenu").classList.toggle("active"),this.classList.toggle("open")});window.addEventListener("scroll",function(){var e=window.scrollY;null!=document.querySelector(".header--fixed")&&(e>100?document.querySelector(".header--fixed").classList.add("sticky"):document.querySelector(".header--fixed").classList.remove("sticky"))});e=document.querySelectorAll(".has-droupdown > a");for(var a in e)e.hasOwnProperty(a)&&(e[a].onclick=function(){this.parentElement.querySelector(".submenu").classList.toggle("active"),this.classList.toggle("open")});var t=this.props,l=(t.logo,t.color),n=void 0===l?"default-color":l;return s.a.createElement("header",{className:"header-area header-style-two header--fixed ".concat(n)},s.a.createElement("div",{className:"header-wrapper"},s.a.createElement("div",{className:"header-left d-flex align-items-center"},s.a.createElement("nav",{className:"mainmenunav d-lg-block ml--50"},s.a.createElement(w.a,{className:"mainmenu",items:["home","about","contact","personal-project"],currentClassName:"is-current",offset:-200},s.a.createElement("li",null,s.a.createElement(j.HashLink,{to:"".concat("/SGoyel","/#home")},"Home")),s.a.createElement("li",null,s.a.createElement(j.HashLink,{to:"".concat("/SGoyel","/#about")},"About")),s.a.createElement("li",null,s.a.createElement(j.HashLink,{to:"".concat("/SGoyel","/contact")},"Contact")),s.a.createElement("li",{className:"has-droupdown "},s.a.createElement(j.HashLink,{to:"#"},"Personal Projects"),s.a.createElement("ul",{className:"submenu"},s.a.createElement("li",null,s.a.createElement(j.HashLink,{to:"/SortVis#project"},"SortVis")),s.a.createElement("li",null,s.a.createElement(j.HashLink,{to:"/PictureRun#project"},"Picture Run")),s.a.createElement("li",null,s.a.createElement(j.HashLink,{to:"/VenPlan#project"},"VenPlan")),s.a.createElement("li",null,s.a.createElement(j.HashLink,{to:"/Foodimize#project"},"Foodimize")),s.a.createElement("li",null,s.a.createElement(j.HashLink,{to:"/Eskil#project"},"Eskil"))))))),s.a.createElement("div",{className:"header-right"},s.a.createElement("div",{className:"social-share-inner"},s.a.createElement("ul",{className:"social-share rn-lg-size d-flex justify-content-center liststyle"},S.map(function(e,a){return s.a.createElement("li",{key:a},s.a.createElement("a",{target:"_blank",href:"".concat(e.link)},e.Social))}))),s.a.createElement("div",{className:"humberger-menu d-block d-lg-none pl--20"},s.a.createElement("span",{onClick:this.menuTrigger,className:"menutrigger text-white"},s.a.createElement(h.d,null))),s.a.createElement("div",{className:"close-menu d-block d-lg-none"},s.a.createElement("span",{onClick:this.CLoseMenuTrigger,className:"closeTrigger"},s.a.createElement(h.f,null))))))}}]),a}(i.Component),x=t(16),O=function(e){function a(){return Object(l.a)(this,a),Object(r.a)(this,Object(c.a)(a).apply(this,arguments))}return Object(o.a)(a,e),Object(n.a)(a,[{key:"render",value:function(){var e=this.props.tabStyle;return s.a.createElement("div",null,s.a.createElement("div",{className:"tabs-area"},s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-lg-12"},s.a.createElement(x.d,null,s.a.createElement(x.b,{className:"".concat(e)},s.a.createElement(x.a,null,"Languages"),s.a.createElement(x.a,null,"Web Development"),s.a.createElement(x.a,null,"Frameworks"),s.a.createElement(x.a,null,"Tools")),s.a.createElement(x.c,null,s.a.createElement("div",{className:"single-tab-content"},s.a.createElement("ul",null,s.a.createElement("li",null,s.a.createElement("h6",null,"Java")," Strong understanding developed through courses and several personal projects"),s.a.createElement("li",null,s.a.createElement("h6",null,"C/C++")," Strong understanding developed through courses and several projects and assignments"),s.a.createElement("li",null,s.a.createElement("h6",null,"JavaScript")," Developing skills through current projects"),s.a.createElement("li",null,s.a.createElement("h6",null,"MySQL")," Developing skills through current courses and projects")))),s.a.createElement(x.c,null,s.a.createElement("div",{className:"single-tab-content"},s.a.createElement("ul",null,s.a.createElement("li",null,s.a.createElement("h6",null,"SCSS")),s.a.createElement("li",null,s.a.createElement("h6",null,"CSS")),s.a.createElement("li",null,s.a.createElement("h6",null,"HTML")),s.a.createElement("li",null,s.a.createElement("h6",null,"JSX")),s.a.createElement("li",null,s.a.createElement("h6",null,"Liquid"))))),s.a.createElement(x.c,null,s.a.createElement("div",{className:"single-tab-content"},s.a.createElement("ul",null,s.a.createElement("li",null,s.a.createElement("h6",null,"React.js")," Developing skills through personal projects"),s.a.createElement("li",null,s.a.createElement("h6",null,"Node.js")," Developing skills through personal projects")))),s.a.createElement(x.c,null,s.a.createElement("div",{className:"single-tab-content"},s.a.createElement("ul",null,s.a.createElement("li",null,s.a.createElement("h6",null,"IntelliJ")),s.a.createElement("li",null,s.a.createElement("h6",null,"Atom")),s.a.createElement("li",null,s.a.createElement("h6",null,"Git")),s.a.createElement("li",null,s.a.createElement("h6",null,"Visual Studio Code")),s.a.createElement("li",null,s.a.createElement("h6",null,"JUnit")),s.a.createElement("li",null,s.a.createElement("h6",null,"TDD")))))))))))}}]),a}(i.Component),C=function(){return s.a.createElement("div",{className:"call-to-action"},s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-lg-12"},s.a.createElement("div",{className:"inner text-center"},s.a.createElement(j.HashLink,{to:"".concat("/SGoyel","/contact")},s.a.createElement("h3",{className:"rn-button-style--2"},s.a.createElement("span",null,"Contact Me"))))))),s.a.createElement("div",{className:"copyright-text",style:{color:"white"}},"Copyright \xa9 2020 SGoyel.ca"))},T=[{textPosition:"text-left",description:"",buttonText:"",buttonLink:""}],P=function(){return s.a.createElement("div",{className:"active-dark"},s.a.createElement(g,{pageTitle:"Home"}),s.a.createElement(L,{homeLink:"/",logo:"symbol-dark",color:"color-black"}),s.a.createElement("div",{id:"home",className:"fix"},s.a.createElement("div",{className:"slider-wrapper"},s.a.createElement("div",{className:"slider-activation slider-creative-agency with-particles",id:"home"},s.a.createElement("div",{className:"frame-layout__particles"},s.a.createElement(f.a,{params:{particles:{number:{value:100},size:{value:4}},interactivity:{events:{onhover:{enable:!0,mode:"repulse"}}}}})),s.a.createElement("div",null,T.map(function(e,a){return s.a.createElement("div",{className:"slide personal-portfolio-slider slider-paralax slider-style-3 d-flex align-items-center justify-content-center",key:a},s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-lg-12"},s.a.createElement("div",{className:"inner ".concat(e.textPosition)},s.a.createElement("h1",{className:"title"},"Hi, I\u2019m Sean Goyel",s.a.createElement("br",null),s.a.createElement(v.a,null,s.a.createElement("span",null," Developer."),s.a.createElement("span",null," Student."),s.a.createElement("span",null," Innovator."))," "),e.description?s.a.createElement("p",{className:"description"},e.description):"",e.buttonText?s.a.createElement("div",{className:"slide-btn"},s.a.createElement("a",{className:"rn-button-style--2 btn-primary-color",href:"".concat(e.buttonLink)},e.buttonText)):"")))))}))))),s.a.createElement("div",{id:"about",className:"fix"},s.a.createElement("div",{className:"about-area ptb--120  bg_color--1"},s.a.createElement("div",{className:"about-wrapper"},s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"row row--35 align-items-center"},s.a.createElement("div",{className:"col-lg-5"},s.a.createElement("div",{className:"thumbnail"},s.a.createElement("img",{className:"w-100",src:"".concat("/SGoyel","/assets/images/me.jpg"),alt:"About Images"}))),s.a.createElement("div",{className:"col-lg-7"},s.a.createElement("div",{className:"about-inner inner"},s.a.createElement("div",{className:"section-title"},s.a.createElement("h2",{className:"title"},"About Me"),s.a.createElement("p",{className:"description"},"I am a 3rd Year Computer Science and Master of Management (B+MM) student at UBC. My dedication and interest for technology is fuelled by my desire to create, to learn and to make change. Technology, more specifically computer science, is a platform which holds the ability to facilitate innovation and is a platform which I continue to explore each and everyday.")),s.a.createElement("div",{className:"row mt--30"},s.a.createElement(O,{tabStyle:"tab-style--1"}))))))))),s.a.createElement("div",{id:"contact"},s.a.createElement(C,null)),s.a.createElement("div",{className:"backto-top"},s.a.createElement(E.a,{showUnder:160},s.a.createElement(h.a,null))))},H=function(e){function a(){return Object(l.a)(this,a),Object(r.a)(this,Object(c.a)(a).apply(this,arguments))}return Object(o.a)(a,e),Object(n.a)(a,[{key:"render",value:function(){var e=this.props,a=e.title,t=e.details;return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"breadcrumb-area rn-bg-color ptb--120 bg_color--6","data-black-overlay":"6"},s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-lg-12"},s.a.createElement("div",{className:"breadcrumb-inner pt--100"},s.a.createElement("h2",{className:"title"},a),s.a.createElement("p",{style:{color:"white"}},t)))))))}}]),a}(i.Component),G=[{Social:s.a.createElement(N.a,null),link:"https://github.com/SeanGoyel/"}],_=function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(r.a)(this,Object(c.a)(a).call(this,e))).menuTrigger=t.menuTrigger.bind(Object(y.a)(t)),t.CLoseMenuTrigger=t.CLoseMenuTrigger.bind(Object(y.a)(t)),t.stickyHeader=t.stickyHeader.bind(Object(y.a)(t)),window.addEventListener("load",function(){console.log("All assets are loaded")}),t}return Object(o.a)(a,e),Object(n.a)(a,[{key:"menuTrigger",value:function(){document.querySelector(".header-wrapper").classList.toggle("menu-open")}},{key:"CLoseMenuTrigger",value:function(){document.querySelector(".header-wrapper").classList.toggle("menu-open")}},{key:"stickyHeader",value:function(){}},{key:"render",value:function(){var e=document.querySelectorAll(".has-droupdown > a");for(var a in e)e.hasOwnProperty(a)&&(e[a].onclick=function(){this.parentElement.querySelector(".submenu").classList.toggle("active"),this.classList.toggle("open")});window.addEventListener("scroll",function(){var e=window.scrollY;null!=document.querySelector(".header--fixed")&&(e>100?document.querySelector(".header--fixed").classList.add("sticky"):document.querySelector(".header--fixed").classList.remove("sticky"))});e=document.querySelectorAll(".has-droupdown > a");for(var a in e)e.hasOwnProperty(a)&&(e[a].onclick=function(){this.parentElement.querySelector(".submenu").classList.toggle("active"),this.classList.toggle("open")});this.props.color;return s.a.createElement("header",{className:"header-area header-style-two header--fixed"},s.a.createElement("div",{className:"header-wrapper"},s.a.createElement("div",{className:"header-left d-flex align-items-center"},s.a.createElement("nav",{className:"mainmenunav d-lg-block ml--50"},s.a.createElement(w.a,{className:"mainmenu",items:["home","about","contact","personal-project"],currentClassName:"is-current",offset:-200},s.a.createElement("li",null,s.a.createElement(j.HashLink,{to:"".concat("/SGoyel","/#home")},"Home")),s.a.createElement("li",null,s.a.createElement(j.HashLink,{to:"".concat("/SGoyel","/#about")},"About")),s.a.createElement("li",null,s.a.createElement(j.HashLink,{to:"".concat("/SGoyel","/contact")},"Contact")),s.a.createElement("li",{className:"has-droupdown "},s.a.createElement(j.HashLink,{to:"#"},"Personal Projects"),s.a.createElement("ul",{className:"submenu"},s.a.createElement("li",null,s.a.createElement(j.HashLink,{to:"/SortVis#project"},"SortVis")),s.a.createElement("li",null,s.a.createElement(j.HashLink,{to:"/PictureRun#project"},"Picture Run")),s.a.createElement("li",null,s.a.createElement(j.HashLink,{to:"/VenPlan#project"},"VenPlan")),s.a.createElement("li",null,s.a.createElement(j.HashLink,{to:"/Foodimize#project"},"Foodimize")),s.a.createElement("li",null,s.a.createElement(j.HashLink,{to:"/Eskil#project"},"Eskil"))))))),s.a.createElement("div",{className:"header-right"},s.a.createElement("div",{className:"social-share-inner"},s.a.createElement("ul",{className:"social-share rn-lg-size d-flex justify-content-center liststyle"},G.map(function(e,a){return s.a.createElement("li",{key:a},s.a.createElement("a",{target:"_blank",href:"".concat(e.link)},e.Social))}))),s.a.createElement("div",{className:"humberger-menu d-block d-lg-none pl--20"},s.a.createElement("span",{onClick:this.menuTrigger,className:"menutrigger text-white"},s.a.createElement(h.d,null))),s.a.createElement("div",{className:"close-menu d-block d-lg-none"},s.a.createElement("span",{onClick:this.CLoseMenuTrigger,className:"closeTrigger"},s.a.createElement(h.f,null))))))}}]),a}(i.Component),q=[{Social:s.a.createElement(N.a,null),link:"https://github.com/SeanGoyel/SortVis"}],V=function(e){function a(){return Object(l.a)(this,a),Object(r.a)(this,Object(c.a)(a).apply(this,arguments))}return Object(o.a)(a,e),Object(n.a)(a,[{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{id:"project"},s.a.createElement(g,{pageTitle:"SortVis"}),s.a.createElement(_,{homeLink:"/",logo:"symbol-dark",color:"color-black"}),s.a.createElement(H,{title:"SortVis",details:"Algorithm Visualizer"}),s.a.createElement("div",{className:"rn-portfolio-details ptb--120 bg_color--4"},s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-lg-12"},s.a.createElement("div",{className:"portfolio-details"},s.a.createElement("div",{className:"inner section-title text-left service-style--2 mb--30",color:"color-white"},s.a.createElement("h3",null,"Details"),s.a.createElement("br",null),s.a.createElement("div",{className:"portfolio-view-list service-style--2 d-flex flex-wrap",color:"color-white"},s.a.createElement("div",{className:"port-view"},s.a.createElement("h4",null,"A passion project I have created fuelled by my passion for sorting algorithms.This project offers the ability to watch an algorithm at a fraction of its speed to learn about the fascinating operations taking place or it can be sped up to see the power of sorting algorithms."))),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("div",{className:"portfolio-view-list service-style--2 d-flex flex-wrap",color:"color-white"},s.a.createElement("div",{className:"port-view"},s.a.createElement("h4",null,"Functionality"),s.a.createElement("span",null,"Quick Sort"),s.a.createElement("span",null,"Merge Sort"),s.a.createElement("span",null,"Insertion Sort"),s.a.createElement("span",null,"Bubble Sort"),s.a.createElement("span",null,"Selection Sort")),s.a.createElement("div",{className:"port-view"},s.a.createElement("h4",null,"Technologies"),s.a.createElement("span",null,"HTML5"),s.a.createElement("span",null,"CSS"),s.a.createElement("span",null,"JavaScript")),s.a.createElement("div",{className:"port-view"},s.a.createElement("h4",null,"Desgin"),s.a.createElement("span",null,"Separation of Concerns"))),s.a.createElement("div",{className:"portfolio-share-link mt--20 pb--70 pb_sm--40"},s.a.createElement("ul",{className:"social-share rn-lg-size d-flex justify-content-start liststyle mt--15"},q.map(function(e,a){return s.a.createElement("li",{key:a},s.a.createElement("a",{target:"_blank",href:"".concat(e.link)},e.Social))}))),s.a.createElement("div",{className:"portfolio-thumb-inner"},s.a.createElement("div",{className:"port-view",style:{fontSize:"1.3em"}},s.a.createElement("a",{href:"https://seangoyel.github.io/SortVis/",target:"_blank"},s.a.createElement("span",{style:{color:"white",margin:"10 10"}}," Check it out "),s.a.createElement("span",{style:{color:"#f81f01"}},"here!"))),s.a.createElement("div",{className:"thumb mb--30 center"},s.a.createElement("a",{href:"https://seangoyel.github.io/SortVis/",target:"_blank"},s.a.createElement("img",{src:"".concat("/SGoyel","/assets/images/portfolio/p1-image.png"),alt:"Portfolio Image"})))))))))),s.a.createElement("div",{className:"backto-top"},s.a.createElement(E.a,{showUnder:160},s.a.createElement(h.a,null))),s.a.createElement(C,null)))}}]),a}(i.Component),A=[{Social:s.a.createElement(N.a,null),link:"https://github.com/SeanGoyel/Picture-Run"}],z=function(e){function a(){return Object(l.a)(this,a),Object(r.a)(this,Object(c.a)(a).apply(this,arguments))}return Object(o.a)(a,e),Object(n.a)(a,[{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{id:"project"},s.a.createElement(g,{pageTitle:"Picture Run"}),s.a.createElement(_,{homeLink:"/",logo:"symbol-dark",color:"color-black"}),s.a.createElement(H,{title:"Picture Run",details:"Platform game with custom levels which players can design using everyday objects found in the real world"}),s.a.createElement("div",{className:"rn-portfolio-details ptb--120 bg_color--4"},s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-lg-12"},s.a.createElement("div",{className:"portfolio-details"},s.a.createElement("div",{className:"inner section-title text-left service-style--2 mb--30",color:"color-white"},s.a.createElement("h3",null,"Details"),s.a.createElement("br",null),s.a.createElement("div",{className:"portfolio-view-list service-style--2 d-flex flex-wrap",color:"color-white"},s.a.createElement("div",{className:"port-view"},s.a.createElement("h4",null,"This is a passion project I developed which caters to my love for platform games and sandbox games. I wanted to make a unique platform game which would offer users the ability to create their own levels and provide them with a unique opportunity to merge the real world with this game. Users can build their own levels in the real world by placing objects onto a surface and snapping a picture of it then proceeding to play on this customized level in the game. This allows users to use their creativity to create fun, challenging and engaging levels for them to play."))),s.a.createElement("div",{className:"row mt--10"},s.a.createElement("div",{className:"col-lg-6 col-md-6 col-12"},s.a.createElement("div",{className:"related-work text-center mt--30"},s.a.createElement("div",{className:"thumb"},s.a.createElement("img",{src:"".concat("/SGoyel","/assets/images/portfolio/p2-Example-Win.gif"),alt:"Portfolio Image"})))),s.a.createElement("div",{className:"col-lg-6 col-md-6 col-12"},s.a.createElement("div",{className:"related-work text-center mt--30"},s.a.createElement("div",{className:"thumb"},s.a.createElement("img",{src:"".concat("/SGoyel","/assets/images/portfolio/p2-Example-Dead.gif"),alt:"Portfolio Image"}))))),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("div",{className:"portfolio-view-list service-style--2 d-flex flex-wrap",color:"color-white"},s.a.createElement("div",{className:"port-view"},s.a.createElement("h4",null,"Functionality"),s.a.createElement("span",null,"Images are flood filled using BFS according to a colour tolerance to mark the background of the images."),s.a.createElement("span",null,"Checked whether each identified object is an intended platform or an inconsistency in the image such as a blemish by checking the nature, positioning and neighbouring pixels of the object."),s.a.createElement("span",null,"Each image is analyzed by checking that the calculated distance between platforms are within the necessary parameters to ensure that the level can be completed, in the cases that they are not then moving blocks are rendered in.")),s.a.createElement("div",{className:"port-view"},s.a.createElement("h4",null,"Visuals"),s.a.createElement("span",null,"This project allowed me to learn a lot about graphics and visual components in Java. I enjoyed making aesthetic and engaging player models, block models, menu screens, etc."))),s.a.createElement("div",{className:"portfolio-share-link mt--20 pb--70 pb_sm--40"},s.a.createElement("ul",{className:"social-share rn-lg-size d-flex justify-content-start liststyle mt--15"},A.map(function(e,a){return s.a.createElement("li",{key:a},s.a.createElement("a",{target:"_blank",href:"".concat(e.link)},e.Social))}))))))))),s.a.createElement("div",{className:"backto-top"},s.a.createElement(E.a,{showUnder:160},s.a.createElement(h.a,null))),s.a.createElement(C,null)))}}]),a}(i.Component),F=[{Social:s.a.createElement(N.a,null),link:"https://github.com/SeanGoyel/Foodimize"}],M=function(e){function a(){return Object(l.a)(this,a),Object(r.a)(this,Object(c.a)(a).apply(this,arguments))}return Object(o.a)(a,e),Object(n.a)(a,[{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{id:"project"},s.a.createElement(g,{pageTitle:"Foodimize"}),s.a.createElement(_,{homeLink:"/",logo:"symbol-dark",color:"color-black"}),s.a.createElement(H,{title:"Foodimize",details:"Food Consumption Tracker"}),s.a.createElement("div",{className:"rn-portfolio-details ptb--120 bg_color--4"},s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-lg-12"},s.a.createElement("div",{className:"portfolio-details"},s.a.createElement("div",{className:"inner section-title text-left service-style--2 mb--30",color:"color-white"},s.a.createElement("h3",null,"Details"),s.a.createElement("br",null),s.a.createElement("div",{className:"portfolio-view-list service-style--2 d-flex flex-wrap",color:"color-white"},s.a.createElement("div",{className:"port-view"},s.a.createElement("h4",null,"Foodimize is an application which gives the user the ability to see the effects and impacts of the food they eat. This application will record food along with the effects it has on the individual who consumes it. The collected data will be organized in a manner which provides users with the insight of which foods should be avoided and which should be ingested. "))),s.a.createElement("br",null),s.a.createElement("div",{className:"portfolio-view-list service-style--2 d-flex flex-wrap",color:"color-white"},s.a.createElement("div",{className:"port-view"},s.a.createElement("h4",null,"Functionality"),s.a.createElement("span",null,"Adding, removing, sorting, summoning, editing food items"),s.a.createElement("span",null,"Data persistence: storing, retrieving and updating data into a file"),s.a.createElement("span",null,"Error checking and handling"),s.a.createElement("span",null,"The implementation of robust class structures"),s.a.createElement("span",null,"Ui interaction audio")),s.a.createElement("div",{className:"port-view"},s.a.createElement("h4",{style:{marginTop:"30px"}},"Programing Practices"),s.a.createElement("span",null,"Black box testing with JUnit"),s.a.createElement("span",null,"Reading and creating UML diagrams"),s.a.createElement("span",null,"Implementing hierarchies"),s.a.createElement("span",null,"Implementing interfaces"),s.a.createElement("span",null,"Implementing bi-directional relationships"),s.a.createElement("span",null,"Adhering to Cohesion and Coupling principles"),s.a.createElement("span",null,"Adhering to the Liskov Substitution principle"))),s.a.createElement("div",{className:"portfolio-share-link mt--20 pb--70 pb_sm--40"},s.a.createElement("ul",{className:"social-share rn-lg-size d-flex justify-content-start liststyle mt--15"},F.map(function(e,a){return s.a.createElement("li",{key:a},s.a.createElement("a",{target:"_blank",href:"".concat(e.link)},e.Social))}))),s.a.createElement("div",{className:"portfolio-thumb-inner"},s.a.createElement("div",{className:"thumb mb--30 center"},s.a.createElement("img",{src:"".concat("/SGoyel","/assets/images/portfolio/p3-image.png"),alt:"Portfolio Image"}))))))))),s.a.createElement("div",{className:"backto-top"},s.a.createElement(E.a,{showUnder:160},s.a.createElement(h.a,null))),s.a.createElement("div",null,s.a.createElement(C,null))))}}]),a}(i.Component),I=[{Social:s.a.createElement(N.b,null),link:"https://eskil.com.tr/"}],D=function(e){function a(){return Object(l.a)(this,a),Object(r.a)(this,Object(c.a)(a).apply(this,arguments))}return Object(o.a)(a,e),Object(n.a)(a,[{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{id:"project"},s.a.createElement(g,{pageTitle:"Eskil"}),s.a.createElement(_,{homeLink:"/",logo:"symbol-dark",color:"color-black"}),s.a.createElement(H,{title:"Eskil",details:"E-commerce Website Desgin"}),s.a.createElement("div",{className:"rn-portfolio-details ptb--120 bg_color--4"},s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-lg-12"},s.a.createElement("div",{className:"portfolio-details"},s.a.createElement("div",{className:"inner section-title text-left service-style--2 mb--30",color:"color-white"},s.a.createElement("h3",null,"Details"),s.a.createElement("br",null),s.a.createElement("div",{className:"portfolio-view-list service-style--2 d-flex flex-wrap",color:"color-white"},s.a.createElement("div",{className:"port-view"},s.a.createElement("h4",null,"Designed and helped create a user-friendly e-commerce website. Exhibited an ability to self learn by researching SEO and implementing several aspects to improve SEO such as website load time, image tags and page meta data. Displayed creativity and marketing skills through online campaigns and giveaways through targeted Instagram and Facebook ads. "))),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("div",{className:"portfolio-share-link mt--20 pb--70 pb_sm--40"},s.a.createElement("ul",{className:"social-share rn-lg-size d-flex justify-content-start liststyle mt--15"},I.map(function(e,a){return s.a.createElement("li",{key:a},s.a.createElement("a",{target:"_blank",href:"".concat(e.link)},e.Social))}))),s.a.createElement("div",{className:"portfolio-thumb-inner"},s.a.createElement("div",{className:"thumb mb--30 center"},s.a.createElement("a",{href:"https://eskil.com.tr/",target:"_blank"},s.a.createElement("img",{src:"".concat("/SGoyel","/assets/images/portfolio/p4-image.png"),alt:"Portfolio Image"})))))))))),s.a.createElement("div",{className:"backto-top"},s.a.createElement(E.a,{showUnder:160},s.a.createElement(h.a,null))),s.a.createElement(C,null)))}}]),a}(i.Component),R=[{Social:s.a.createElement(N.a,null),link:"https://github.com/SeanGoyel/VenPlan"}],U=function(e){function a(){return Object(l.a)(this,a),Object(r.a)(this,Object(c.a)(a).apply(this,arguments))}return Object(o.a)(a,e),Object(n.a)(a,[{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{id:"project"},s.a.createElement(g,{pageTitle:"VenPlan"}),s.a.createElement(_,{homeLink:"/",logo:"symbol-dark",color:"color-black"}),s.a.createElement(H,{title:"VenPlan",details:"Cinema Venue Relational Database Application"}),s.a.createElement("div",{className:"rn-portfolio-details ptb--120 bg_color--4"},s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-lg-12"},s.a.createElement("div",{className:"portfolio-details"},s.a.createElement("div",{className:"inner section-title text-left service-style--2 mb--30",color:"color-white"},s.a.createElement("h3",null,"Details"),s.a.createElement("br",null),s.a.createElement("div",{className:"portfolio-view-list service-style--2 d-flex flex-wrap",color:"color-white"},s.a.createElement("div",{className:"port-view"},s.a.createElement("h4",null,"A CPSC 304 database project for cinema venues to mange and analyze their theatres, movies, showings and seatings plans."))),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("div",{className:"portfolio-view-list service-style--2 d-flex flex-wrap",color:"color-white"},s.a.createElement("div",{className:"port-view"},s.a.createElement("h4",null,"Technologies"),s.a.createElement("span",null,"MySQL"),s.a.createElement("span",null,"Java"),s.a.createElement("span",null,"JavaFX"),s.a.createElement("span",null,"XML"))),s.a.createElement("div",{className:"portfolio-share-link mt--20 pb--70 pb_sm--40"},s.a.createElement("ul",{className:"social-share rn-lg-size d-flex justify-content-start liststyle mt--15"},R.map(function(e,a){return s.a.createElement("li",{key:a},s.a.createElement("a",{target:"_blank",href:"".concat(e.link)},e.Social))}))),s.a.createElement("div",{className:"portfolio-thumb-inner"},s.a.createElement("div",{className:"thumb mb--30 center"},s.a.createElement("img",{src:"".concat("/SGoyel","/assets/images/portfolio/p5-VenPlan.gif"),alt:"Portfolio Image"})),s.a.createElement("div",{className:"thumb mb--30 center"},s.a.createElement("img",{src:"".concat("/SGoyel","/assets/images/portfolio/p5-VenPlan.png"),alt:"Portfolio Image"}))))))))),s.a.createElement("div",{className:"backto-top"},s.a.createElement(E.a,{showUnder:160},s.a.createElement(h.a,null))),s.a.createElement(C,null)))}}]),a}(i.Component),J=[{Social:s.a.createElement(N.a,null),link:"https://github.com/SeanGoyel/"}],W=function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(r.a)(this,Object(c.a)(a).call(this,e))).menuTrigger=t.menuTrigger.bind(Object(y.a)(t)),t.CLoseMenuTrigger=t.CLoseMenuTrigger.bind(Object(y.a)(t)),t.stickyHeader=t.stickyHeader.bind(Object(y.a)(t)),window.addEventListener("load",function(){console.log("All assets are loaded")}),t}return Object(o.a)(a,e),Object(n.a)(a,[{key:"menuTrigger",value:function(){document.querySelector(".header-wrapper").classList.toggle("menu-open")}},{key:"CLoseMenuTrigger",value:function(){document.querySelector(".header-wrapper").classList.remove("menu-open")}},{key:"stickyHeader",value:function(){}},{key:"render",value:function(){var e=document.querySelectorAll(".has-droupdown > a");for(var a in e)e.hasOwnProperty(a)&&(e[a].onclick=function(){this.parentElement.querySelector(".submenu").classList.toggle("active"),this.classList.toggle("open")});window.addEventListener("scroll",function(){var e=window.scrollY;null!=document.querySelector(".header--fixed")&&(e>100?document.querySelector(".header--fixed").classList.add("sticky"):document.querySelector(".header--fixed").classList.remove("sticky"))});e=document.querySelectorAll(".has-droupdown > a");for(var a in e)e.hasOwnProperty(a)&&(e[a].onclick=function(){this.parentElement.querySelector(".submenu").classList.toggle("active"),this.classList.toggle("open")});var t=this.props.color,l=void 0===t?"default-color":t;return s.a.createElement("header",{className:"header-area header-style-two header--fixed ".concat(l)},s.a.createElement("div",{className:"header-wrapper"},s.a.createElement("div",{className:"header-left d-flex align-items-center"},s.a.createElement("nav",{className:"mainmenunav d-lg-block ml--50"},s.a.createElement(w.a,{className:"mainmenu",items:["home","about","contact","personal-project"],currentClassName:"is-current",offset:-200},s.a.createElement("li",null,s.a.createElement(j.HashLink,{to:"".concat("/SGoyel","/#home")},"Home")),s.a.createElement("li",null,s.a.createElement(j.HashLink,{to:"".concat("/SGoyel","/#about")},"About")),s.a.createElement("li",null,s.a.createElement(j.HashLink,{to:"".concat("/SGoyel","/contact")},"Contact")),s.a.createElement("li",{className:"has-droupdown "},s.a.createElement(j.HashLink,{to:"#"},"Personal Projects"),s.a.createElement("ul",{className:"submenu"},s.a.createElement("li",null,s.a.createElement(j.HashLink,{to:"/SortVis#project"},"SortVis")),s.a.createElement("li",null,s.a.createElement(j.HashLink,{to:"/PictureRun#project"},"Picture Run")),s.a.createElement("li",null,s.a.createElement(j.HashLink,{to:"/VenPlan#project"},"VenPlan")),s.a.createElement("li",null,s.a.createElement(j.HashLink,{to:"/Foodimize#project"},"Foodimize")),s.a.createElement("li",null,s.a.createElement(j.HashLink,{to:"/Eskil#project"},"Eskil"))))))),s.a.createElement("div",{className:"header-right"},s.a.createElement("div",{className:"social-share-inner"},s.a.createElement("ul",{className:"social-share rn-lg-size d-flex justify-content-center liststyle"},J.map(function(e,a){return s.a.createElement("li",{key:a},s.a.createElement("a",{target:"_blank",href:"".concat(e.link)},e.Social))}))),s.a.createElement("div",{className:"humberger-menu d-block d-lg-none pl--20"},s.a.createElement("span",{onClick:this.menuTrigger,className:"menutrigger text-white"},s.a.createElement(h.d,null))),s.a.createElement("div",{className:"close-menu d-block d-lg-none"},s.a.createElement("span",{onClick:this.CLoseMenuTrigger,className:"closeTrigger"},s.a.createElement(h.f,null))))))}}]),a}(i.Component),B=function(){return s.a.createElement("div",{className:"text copyright-text"},s.a.createElement("p",null,"Copyright \xa9 2020 SGoyel.ca"))},Y=function(e){function a(){return Object(l.a)(this,a),Object(r.a)(this,Object(c.a)(a).apply(this,arguments))}return Object(o.a)(a,e),Object(n.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"one-page active-dark",id:"contact"},s.a.createElement(g,{pageTitle:"Contact"}),s.a.createElement(W,{homeLink:"/",logo:"symbol-dark",color:"color-white"}),s.a.createElement("div",{className:"slider-activation slider-creative-agency with-particles max-width"},s.a.createElement("div",{className:"frame-layout__particles"},s.a.createElement("div",{calssName:"max-height"},s.a.createElement(f.a,{params:{particles:{number:{value:100},size:{value:4}},color:{value:"#0a7d17"},interactivity:{events:{onhover:{enable:!1,mode:"repulse"}}}}}))),s.a.createElement("div",{className:" active-dark ","data-black-overlay":"6"},s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-lg-12"},s.a.createElement("div",{className:"rn-page-title text-center pt--100"},s.a.createElement("h2",{className:"title theme-gradient"},"Let's get in touch!")))))),s.a.createElement("div",{className:"rn-contact-top-area ptb--120 bg_color--5"},s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-lg-4 col-md-6 col-sm-6 col-12"},s.a.createElement("div",{className:"rn-address active-dark"},s.a.createElement("a",{href:"tel:+1 604 600 2148"},s.a.createElement("div",{className:"icon"},s.a.createElement(h.e,null)),s.a.createElement("div",{className:"inner"},s.a.createElement("h4",{className:"title"},"Phone Number"),s.a.createElement("h6",{className:"title"},"604 - 600 - 2148"))))),s.a.createElement("div",{className:"col-lg-4 col-md-6 col-sm-6 col-12 mt_mobile--50"},s.a.createElement("div",{className:"rn-address active-dark"},s.a.createElement("a",{href:"mailto: seangoyel@hotmail.com"},s.a.createElement("div",{className:"icon"},s.a.createElement(h.b,null)),s.a.createElement("div",{className:"inner"},s.a.createElement("h4",{className:"title"},"Email Address"),s.a.createElement("h6",{className:"title"},"seangoyel@hotmail.com"))))),s.a.createElement("div",{className:"col-lg-4 col-md-6 col-sm-6 col-12 mt_md--50 mt_sm--50"},s.a.createElement("div",{className:"rn-address active-dark"},s.a.createElement("div",{className:"icon"},s.a.createElement(h.c,null)),s.a.createElement("div",{className:"inner"},s.a.createElement("h4",{className:"title"},"Location"),s.a.createElement("h6",{className:"title"},"Vancouver BC, Canada"))))))),s.a.createElement("div",{className:"lock-bottom"},s.a.createElement(B,null))))}}]),a}(i.Component),Q=(t(85),t(34)),X=t(19),$=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function K(e,a){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),a&&a.onUpdate&&a.onUpdate(e)):(console.log("Content is cached for offline use."),a&&a.onSuccess&&a.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}var Z=function(e){function a(){return Object(l.a)(this,a),Object(r.a)(this,Object(c.a)(a).apply(this,arguments))}return Object(o.a)(a,e),Object(n.a)(a,[{key:"render",value:function(){return s.a.createElement(Q.HashRouter,{basename:"/"},s.a.createElement(X.g,null,s.a.createElement(X.d,{exact:!0,path:"/",component:P}),s.a.createElement(X.d,{exact:!0,path:"".concat("/SGoyel","/contact"),component:Y}),s.a.createElement(X.d,{exact:!0,path:"".concat("/SGoyel","/SortVis"),component:V}),s.a.createElement(X.d,{exact:!0,path:"".concat("/SGoyel","/PictureRun"),component:z}),s.a.createElement(X.d,{exact:!0,path:"".concat("/SGoyel","/Foodimize"),component:M}),s.a.createElement(X.d,{exact:!0,path:"".concat("/SGoyel","/Eskil"),component:D}),s.a.createElement(X.d,{exact:!0,path:"".concat("/SGoyel","/VenPlan"),component:U})))}}]),a}(i.Component);u.a.render(s.a.createElement(Z,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/SGoyel",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var a="".concat("/SGoyel","/service-worker.js");$?(function(e,a){fetch(e).then(function(t){var l=t.headers.get("content-type");404===t.status||null!=l&&-1===l.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):K(e,a)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(a,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):K(a,e)})}}()}},[[48,1,2]]]);
//# sourceMappingURL=main.8405ea34.chunk.js.map