(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{143:function(t,e,a){"use strict";a.r(e);var r=a(0),n=a.n(r),o=a(147),s=a(149),l=a(150),c=a(152);e.default=function(){return n.a.createElement(o.a,{theme:l.a},n.a.createElement(n.a.Fragment,null,n.a.createElement(s.a,null),n.a.createElement(c.a,{typePage:"first"})))}},148:function(t,e,a){var r;t.exports=(r=a(151))&&r.default||r},149:function(t,e,a){"use strict";var r=a(153),n=a.n(r),o=a(147);function s(){var t=n()(["\n@import url('https://fonts.googleapis.com/css?family=Baloo+Tamma|Rhodium+Libre&display=swap');\n*,*::after,*::before{\n  box-sizing:border-box;\n}\n  html{\n    font-size:62.5%;\n  }\n  body {\n   font-size:1.6rem;\n   font-family: 'Rhodium Libre', serif;\n   /* font-family: 'Baloo Tamma', cursive; */\n   font-weight:700;\n   background-color: white;\n   margin:0px;\n   overflow-x:hidden;\n  letter-spacing: 1px;\n  max-width:100vh;\n  max-height:100%;\n  }\n@media (min-width: 768px) {\n    html {\n   font-size:80.5%;\n  }\n  }\n .focus-only {\n   color:white;\n  border: 0;\n  clip: rect(0 0 0 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n  white-space: nowrap; /* 1 */\n}\n.focus-only:active,\n.focus-only:focus {\n  clip: auto;\n  height: auto;\n  margin: 0;\n  overflow: visible;\n  position: static;\n  width: auto;\n  white-space: inherit;\n}\n  "]);return s=function(){return t},t}var l=Object(o.b)(s());e.a=l},150:function(t,e,a){"use strict";a.d(e,"a",function(){return r});var r={black:"rgb(68,68,68)",grayFirst:"rgb(225,224,224)",graySecond:"rgb(235,235,235)",grayDark:"rgb(123,123,123)",redFirst:"rgb(215,108,108)",redSecondary:"rgba(215,108,108,50%)",redThird:"rgb(220,166,166)",font:{bold:"700",light:"400",xxs:"1rem",xs:"1.2rem",s:"1.6rem",m:"2.1rem",l:"2.4rem",xl:"3.2rem",xxl:"4rem",xxxl:"7rem"},breakPointMobile:"768px"}},151:function(t,e,a){"use strict";a.r(e);a(34);var r=a(0),n=a.n(r),o=a(4),s=a.n(o),l=a(55),c=a(2),i=function(t){var e=t.location,a=c.default.getResourcesForPathnameSync(e.pathname);return a?n.a.createElement(l.a,Object.assign({location:e,pageResources:a},a.json)):null};i.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},e.default=i},152:function(t,e,a){"use strict";var r=a(0),n=a.n(r),o=a(7),s=a.n(o),l=a(4),c=a.n(l),i=a(147),p=Object(i.e)(["0%{transform:scaleY(1) scaleX(1) translate(0%,0%);}60%{transform:scaleY(0.2) scaleX(1) translate(0%,300px);}100%{transform:scaleY(0.2) scaleX(3) translate(20%,300px);}"]),u=Object(i.e)(["0%{transform:scaleY(1) scaleX(1) translate(0%,0%);}60%{transform:scaleY(0.4) scaleX(1) translate(0%,120px);}100%{transform:scaleY(0.4) scaleX(5) translate(20%,120px);}"]),m=Object(i.e)(["0%{transform:scaleY(0.2) scaleX(3) translate(20%,300px);}40%{transform:scaleY(0.2) scaleX(3)  translate(20%,120px);}70%{transform:scaleY(0.2) scaleX(5) translate(20%,120px);}100%{transform:scaleY(0.4) scaleX(5) translate(20%,120px);}"]),f=i.d.div.withConfig({displayName:"LeftBox__Box",componentId:"sc-1h4od26-0"})(["position:absolute;background-color:",";width:20%;height:70%;left:0%;top:0%;",";"],function(t){return t.theme.redSecondary},function(t){var e=t.currentPath,a=t.previousPath;return"portfolio"===a&&"projekty"===e?Object(i.c)(["animation:"," 1s linear forwards;transform:scaleY(0.2) scaleX(3) translate(20%,300px);"],p):"projekty"===a&&"portfolio"===e?Object(i.c)(["animation:"," 1s linear reverse;transform:scaleY(1) scaleX(1) translate(0%,0%);"],p):"portfolio"===a&&"kontakt"===e?Object(i.c)(["animation:"," 1s linear forwards;transform:scaleY(0.4) scaleX(5) translate(20%,120px);"],u):"kontakt"===a&&"portfolio"===e?Object(i.c)(["animation:"," 1s linear reverse;transform:scaleY(1) scaleX(1) translate(0%,0%);"],u):"projekty"===a&&"kontakt"===e?Object(i.c)(["animation:"," 1s linear forwards;transform:scaleY(0.4) scaleX(5) translate(20%,120px);"],m):"kontakt"===a&&"projekty"===e?Object(i.c)(["animation:"," 1s linear reverse;transform:scaleY(0.2) scaleX(3) translate(20%,300px);"],m):"portfolio"===e?Object(i.c)(["transform:scaleY(1) scaleX(1) translate(0%,0%);"]):"projekty"===e?Object(i.c)(["transform:scaleY(0.2) scaleX(3) translate(20%,300px);"]):"kontakt"===e?Object(i.c)(["transform:scaleY(0.4) scaleX(5) translate(20%,120px);"]):Object(i.c)(["transform:scaleY(1) scaleX(1) translate(0%,0%);"])}),h=function(t){var e=t.currentPath,a=t.previousPath;return n.a.createElement(f,{currentPath:e,previousPath:a})};h.propTypes={currentPath:c.a.string,previousPath:c.a.string},h.defaultProps={currentPath:"portfolio",previousPath:"portfolio"};var d=h,b=Object(i.e)(["0%{transform:scaleY(1) scaleX(1) translate(0%,0%);}60%{transform:scaleY(0.3) scaleX(1) translate(0%,-80px);}100%{transform:scaleY(0.3) scaleX(2.4) translate(-20%,-80px);}"]),x=Object(i.e)(["0%{transform:scaleY(1) scaleX(1) translate(0%,0%);}40%{transform:scaleY(0.3) scaleX(1) translate(0%,-50px);}70%{transform:scaleY(0.3) scaleX(1) translate(-45%,-50px);}100%{transform:scaleY(0.3) scaleX(3) translate(-45%,-50px)}"]),v=Object(i.e)(["0%{transform:scaleY(0.3) scaleX(2.4) translate(-20%,-80px);}40%{transform:scaleY(0.3) scaleX(2.4) translate(-45%,-80px);}60%{transform:scaleY(0.3) scaleX(2.4) translate(-45%,-50px);}100%{transform:scaleY(0.3) scaleX(3) translate(-45%,-50px)}"]),g=i.d.div.withConfig({displayName:"RightBox__Box",componentId:"sc-1vtjtxh-0"})(["position:absolute;background-color:",";width:26%;height:33%;right:0%;top:0%;",";"],function(t){return t.theme.redFirst},function(t){var e=t.currentPath,a=t.previousPath;return"portfolio"===a&&"projekty"===e?Object(i.c)(["animation:"," 1s linear forwards;transform:scaleY(0.3) scaleX(2.4) translate(-20%,-80px);"],b):"projekty"===a&&"portfolio"===e?Object(i.c)(["animation:"," 1s linear reverse;transform:scaleY(1) scaleX(1) translate(0%,0%);"],b):"portfolio"===a&&"kontakt"===e?Object(i.c)(["animation:"," 1s linear forwards;transform:scaleY(0.3) scaleX(3) translate(-45%,-50px);"],x):"kontakt"===a&&"portfolio"===e?Object(i.c)(["animation:"," 1s linear reverse;transform:scaleY(1) scaleX(1) translate(0%,0%);"],x):"projekty"===a&&"kontakt"===e?Object(i.c)(["animation:"," 1s linear forwards;transform:scaleY(0.3) scaleX(3) translate(-45%,-50px);"],v):"kontakt"===a&&"projekty"===e?Object(i.c)(["animation:"," 1s linear reverse;transform:scaleY(0.3) scaleX(2.4) translate(-20%,-80px);"],v):"portfolio"===e?Object(i.c)(["transform:scaleY(1) scaleX(1) translate(0%,0%);"]):"projekty"===e?Object(i.c)(["transform:scaleY(0.3) scaleX(2.4) translate(-20%,-80px);"]):"kontakt"===e?Object(i.c)(["transform:scaleY(0.3) scaleX(3) translate(-45%,-50px);"]):Object(i.c)(["transform:scaleY(1) scaleX(1) translate(0%,0%);"])}),k=function(t){var e=t.currentPath,a=t.previousPath;return n.a.createElement(g,{currentPath:e,previousPath:a})};k.propTypes={currentPath:c.a.string,previousPath:c.a.string},k.defaultProps={currentPath:"portfolio",previousPath:"portfolio"};var w=k,j=function(t){function e(){for(var e,a=arguments.length,r=new Array(a),n=0;n<a;n++)r[n]=arguments[n];return(e=t.call.apply(t,[this].concat(r))||this).state={previousPath:"",currentPath:""},e}s()(e,t);var a=e.prototype;return a.componentDidMount=function(){window.currentPath=window.location.pathname.substring(16);var t=window,e=t.previousPath,a=t.currentPath;e=void 0===e||""===e||"/"===e?"portfolio":e.substring(1),a=void 0===a||""===a||"/"===a?"portfolio":window.location.pathname.substring(16),this.setState({previousPath:e,currentPath:a})},a.render=function(){var t=this.state,e=t.previousPath,a=t.currentPath;return console.log(e),console.log(a),n.a.createElement(n.a.Fragment,null,n.a.createElement(d,{currentPath:a,previousPath:e}),n.a.createElement(w,{currentPath:a,previousPath:e}))},e}(r.Component),y=a(33),P=a.n(y);a(148),n.a.createContext({});c.a.object,c.a.string.isRequired,c.a.func,c.a.func;var X=i.d.li.withConfig({displayName:"Menu__ListElement",componentId:"sc-1wq3227-0"})(["display:block;flex-basis:33.333%;height:100%;position:relative;a{position:absolute;text-decoration:none;width:100%;height:100%;font-size:",";text-align:center;line-height:100px;color:black;}a.active{background-color:",";}"],function(t){return t.theme.font.m},function(t){return t.theme.redSecondary}),Y=i.d.nav.withConfig({displayName:"Menu__MenuWrapper",componentId:"sc-1wq3227-1"})(["position:fixed;width:100%;height:100px;bottom:0%;left:0%;background-color:",";font-family:'Baloo Tamma',cursive;ul{display:flex;flex-wrap:wrap;height:100%;margin:0px;padding:0px;}"],function(t){return t.theme.redSecondary}),O=function(){return n.a.createElement(Y,null,n.a.createElement("ul",null,n.a.createElement(X,null,n.a.createElement(P.a,{to:"/",activeClassName:"active"},"Portfolio")),n.a.createElement(X,null,n.a.createElement(P.a,{to:"/projekty",activeClassName:"active"},"Projekty")),n.a.createElement(X,null,n.a.createElement(P.a,{to:"/kontakt",activeClassName:"active"},"Kontakt"))))},E=function(t){var e=t.children;return n.a.createElement("div",null,n.a.createElement(O,null),n.a.createElement(j,null),n.a.createElement(n.a.Fragment,null,e))};E.propTypes={children:c.a.arrayOf(Object)},E.defaultProps={children:null};e.a=E}}]);
//# sourceMappingURL=component---src-pages-index-js-a4fdcb798e33ba18b57d.js.map