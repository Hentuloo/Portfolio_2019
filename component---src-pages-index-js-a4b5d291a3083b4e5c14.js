(window.webpackJsonp=window.webpackJsonp||[]).push([[2,3],{141:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(4),l=a.n(o),s=a(144),i=(a(147),s.d.p.withConfig({displayName:"Paragraph",componentId:"sc-158kqcp-0"})(["text-transform:uppercase;font-weight:",";"],function(e){var t=e.theme;return e.bold?t.font.bold:t.font.light})),c=a(145),p=a.n(c),f=Object(s.e)(["form{transform:translateY(-100%);}to{transform:translateY(0%);}"]),u=Object(s.e)(["from{opacity:0;}to{opacity:1;}"]),m=s.d.div.withConfig({displayName:"Portfolio__ImageWrapper",componentId:"sc-9tumh6-0"})(["position:absolute;top:6%;right:7%;width:40%;height:40%;overflow:hidden;img{position:absolute;max-width:100%;transform:translateY(-100%);animation:"," 0.5s 0.6s ease-in-out forwards;}"],f),g=Object(s.d)(i).withConfig({displayName:"Portfolio__HeaderName",componentId:"sc-9tumh6-1"})(["width:50%;margin:5% 2%;word-spacing:30px;font-size:",";line-height:",";"],function(e){return e.theme.font.l},function(e){return e.theme.font.l}),d=s.d.section.withConfig({displayName:"Portfolio__AnimatedWrapper",componentId:"sc-9tumh6-2"})(["opacity:0;animation:"," 0.3s 0.5s linear forwards;"],u),h=function(){return n.a.createElement(d,null,n.a.createElement(g,{as:"h2"},"Kamil Chędkowski"),n.a.createElement(m,null,n.a.createElement("img",{src:p.a,alt:"Moja skromna osoba"})))},b=function(){return n.a.createElement("section",null,"Kontakt")},v=function(){return n.a.createElement("section",null,"Portfolio")},x=function(e){var t=e.page;return"portfolio"===t?n.a.createElement(h,null):"kontakt"===t?n.a.createElement(b,null):"projekty"===t?n.a.createElement(v,null):null};x.propTypes={page:l.a.string},x.defaultProps={page:null};t.default=x},143:function(e,t,a){"use strict";a.r(t);var r=a(7),n=a.n(r),o=a(0),l=a.n(o),s=a(144),i=a(148),c=a.n(i);function p(){var e=c()(["\n@import url('https://fonts.googleapis.com/css?family=Baloo+Tamma|Rhodium+Libre&display=swap');\n*,*::after,*::before{\n  box-sizing:border-box;\n}\n  html{\n    font-size:62.5%;\n    width:100vw;\n    height:100vh;\n    overflow-x:hidden;\n  }\n  body {\n   font-size:1.6rem;\n   /* font-family: 'Rhodium Libre', serif; */\n   font-family: 'Baloo Tamma', cursive;\n   font-weight:700;\n   background-color: white;\n   margin:0px;\n  letter-spacing: 1px;\n  }\n@media (min-width: 768px) {\n    html {\n   font-size:80.5%;\n  }\n  }\n .focus-only {\n   color:white;\n  border: 0;\n  clip: rect(0 0 0 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n  white-space: nowrap; /* 1 */\n}\n.focus-only:active,\n.focus-only:focus {\n  clip: auto;\n  height: auto;\n  margin: 0;\n  overflow: visible;\n  position: static;\n  width: auto;\n  white-space: inherit;\n}\n  "]);return p=function(){return e},e}var f=Object(s.b)(p()),u={black:"rgb(68,68,68)",grayFirst:"rgb(225,224,224)",graySecond:"rgb(235,235,235)",grayDark:"rgb(123,123,123)",redFirst:"rgb(215,108,108)",redSecondary:"rgba(215,108,108,50%)",redThird:"rgb(220,166,166)",font:{bold:"700",light:"400",xxs:"1rem",xs:"1.2rem",s:"1.6rem",m:"2.1rem",l:"2.4rem",xl:"3.2rem",xxl:"4rem",xxxl:"7rem"},breakPointMobile:"768px"},m=a(4),g=a.n(m),d=Object(s.e)(["0%{transform:scaleY(1) scaleX(1) translate(0%,0%);}60%{transform:scaleY(0.2) scaleX(1) translate(0%,300px);}100%{transform:scaleY(0.2) scaleX(3) translate(20%,300px);}"]),h=Object(s.e)(["0%{transform:scaleY(1) scaleX(1) translate(0%,0%);}60%{transform:scaleY(0.4) scaleX(1) translate(0%,120px);}100%{transform:scaleY(0.4) scaleX(5) translate(20%,120px);}"]),b=Object(s.e)(["0%{transform:scaleY(0.2) scaleX(3) translate(20%,300px);}40%{transform:scaleY(0.2) scaleX(3)  translate(20%,120px);}70%{transform:scaleY(0.2) scaleX(5) translate(20%,120px);}100%{transform:scaleY(0.4) scaleX(5) translate(20%,120px);}"]),v=s.d.div.withConfig({displayName:"LeftBox__Box",componentId:"sc-1h4od26-0"})(["position:absolute;background-color:",";width:27%;height:70%;left:0%;top:0%;z-index:-2;",";"],function(e){return e.theme.redSecondary},function(e){var t=e.currentPage,a=e.previousPage;return"portfolio"===a&&"projekty"===t?Object(s.c)(["animation:"," 0.8s linear forwards;transform:scaleY(0.2) scaleX(3) translate(20%,300px);"],d):"projekty"===a&&"portfolio"===t?Object(s.c)(["animation:"," 0.8s linear reverse;transform:scaleY(1) scaleX(1) translate(0%,0%);"],d):"portfolio"===a&&"kontakt"===t?Object(s.c)(["animation:"," 0.8s linear forwards;transform:scaleY(0.4) scaleX(5) translate(20%,120px);"],h):"kontakt"===a&&"portfolio"===t?Object(s.c)(["animation:"," 0.8s linear reverse;transform:scaleY(1) scaleX(1) translate(0%,0%);"],h):"projekty"===a&&"kontakt"===t?Object(s.c)(["animation:"," 0.8s linear forwards;transform:scaleY(0.4) scaleX(5) translate(20%,120px);"],b):"kontakt"===a&&"projekty"===t?Object(s.c)(["animation:"," 0.8s linear reverse;transform:scaleY(0.2) scaleX(3) translate(20%,300px);"],b):"portfolio"===t?Object(s.c)(["transform:scaleY(1) scaleX(1) translate(0%,0%);"]):"projekty"===t?Object(s.c)(["transform:scaleY(0.2) scaleX(3) translate(20%,300px);"]):"kontakt"===t?Object(s.c)(["transform:scaleY(0.4) scaleX(5) translate(20%,120px);"]):Object(s.c)(["transform:scaleY(1) scaleX(1) translate(0%,0%);"])}),x=function(e){var t=e.currentPage,a=e.previousPage;return l.a.createElement(v,{currentPage:t,previousPage:a})};x.propTypes={currentPage:g.a.string,previousPage:g.a.string},x.defaultProps={currentPage:"portfolio",previousPage:"portfolio"};var P=x,k=Object(s.e)(["0%{transform:scaleY(1) scaleX(1) translate(0%,0%);}60%{transform:scaleY(0.3) scaleX(1) translate(0%,-80px);}100%{transform:scaleY(0.3) scaleX(2.4) translate(-20%,-80px);}"]),w=Object(s.e)(["0%{transform:scaleY(1) scaleX(1) translate(0%,0%);}40%{transform:scaleY(0.3) scaleX(1) translate(0%,-50px);}70%{transform:scaleY(0.3) scaleX(1) translate(-45%,-50px);}100%{transform:scaleY(0.3) scaleX(3) translate(-45%,-50px)}"]),y=Object(s.e)(["0%{transform:scaleY(0.3) scaleX(2.4) translate(-20%,-80px);}40%{transform:scaleY(0.3) scaleX(2.4) translate(-45%,-80px);}60%{transform:scaleY(0.3) scaleX(2.4) translate(-45%,-50px);}100%{transform:scaleY(0.3) scaleX(3) translate(-45%,-50px)}"]),j=s.d.div.withConfig({displayName:"RightBox__Box",componentId:"sc-1vtjtxh-0"})(["position:absolute;background-color:",";width:30%;height:33%;right:0%;top:0%;z-index:-2;",";"],function(e){return e.theme.redFirst},function(e){var t=e.currentPage,a=e.previousPage;return"portfolio"===a&&"projekty"===t?Object(s.c)(["animation:"," 0.8s linear forwards;transform:scaleY(0.3) scaleX(2.4) translate(-20%,-80px);"],k):"projekty"===a&&"portfolio"===t?Object(s.c)(["animation:"," 0.8s linear reverse;transform:scaleY(1) scaleX(1) translate(0%,0%);"],k):"portfolio"===a&&"kontakt"===t?Object(s.c)(["animation:"," 0.8s linear forwards;transform:scaleY(0.3) scaleX(3) translate(-45%,-50px);"],w):"kontakt"===a&&"portfolio"===t?Object(s.c)(["animation:"," 0.8s linear reverse;transform:scaleY(1) scaleX(1) translate(0%,0%);"],w):"projekty"===a&&"kontakt"===t?Object(s.c)(["animation:"," 0.8s linear forwards;transform:scaleY(0.3) scaleX(3) translate(-45%,-50px);"],y):"kontakt"===a&&"projekty"===t?Object(s.c)(["animation:"," 0.8s linear reverse;transform:scaleY(0.3) scaleX(2.4) translate(-20%,-80px);"],y):"portfolio"===t?Object(s.c)(["transform:scaleY(1) scaleX(1) translate(0%,0%);"]):"projekty"===t?Object(s.c)(["transform:scaleY(0.3) scaleX(2.4) translate(-20%,-80px);"]):"kontakt"===t?Object(s.c)(["transform:scaleY(0.3) scaleX(3) translate(-45%,-50px);"]):Object(s.c)(["transform:scaleY(1) scaleX(1) translate(0%,0%);"])}),Y=function(e){var t=e.currentPage,a=e.previousPage;return l.a.createElement(j,{currentPage:t,previousPage:a})};Y.propTypes={currentPage:g.a.string,previousPage:g.a.string},Y.defaultProps={currentPage:"portfolio",previousPage:"portfolio"};var X=Y,E=function(e){var t=e.currentPage,a=e.previousPage;return l.a.createElement("div",{key:Math.random()},l.a.createElement(P,{currentPage:t,previousPage:a}),l.a.createElement(X,{currentPage:t,previousPage:a}))};E.propTypes={previousPage:g.a.string,currentPage:g.a.string},E.defaultProps={previousPage:"portfolio",currentPage:"portfolio"};var O=E,C=s.d.li.withConfig({displayName:"Menu__ListElement",componentId:"sc-1wq3227-0"})(["display:block;flex-basis:33.333%;height:100%;position:relative;a{position:absolute;text-decoration:none;width:100%;height:100%;font-size:",";text-align:center;line-height:100px;color:black;}a.active{background-color:",";}"],function(e){return e.theme.font.m},function(e){return e.theme.redSecondary}),_=s.d.nav.withConfig({displayName:"Menu__MenuWrapper",componentId:"sc-1wq3227-1"})(["position:fixed;width:100%;max-width:100vw;height:100px;bottom:0%;left:0%;background-color:",";ul{display:flex;flex-wrap:wrap;height:100%;margin:0px;padding:0px;}"],function(e){return e.theme.redSecondary}),I=function(e){var t=e.onChangePage;return l.a.createElement(_,null,l.a.createElement("ul",null,l.a.createElement(C,null,l.a.createElement("a",{href:"/Portfolio_2019/#portfolio",onClick:function(){return t("portfolio")}},"Portfolio")),l.a.createElement(C,null,l.a.createElement("a",{href:"/Portfolio_2019/#portfolio",onClick:function(){return t("projekty")}},"Projekty")),l.a.createElement(C,null,l.a.createElement("a",{href:"/Portfolio_2019/#portfolio",onClick:function(){return t("kontakt")}},"Kontakt"))))};I.propTypes={onChangePage:g.a.func.isRequired};var N=I,T=s.d.div.withConfig({displayName:"MainTemplate__BackgroundBlock",componentId:"sf9sit-0"})(["width:120vw;height:250vw;position:fixed;top:100%;left:100%;transform-origin:50% center;transform:translate(-47%,-84%) rotate(26deg);background-color:",";z-index:-3;"],function(e){return e.theme.grayFirst}),z=function(e){var t=e.children,a=e.onChangePage,r=e.previousPage,n=e.currentPage;return l.a.createElement("div",null,l.a.createElement(N,{onChangePage:a,currentPage:n}),l.a.createElement(O,{previousPage:r,currentPage:n}),l.a.createElement(T,null),l.a.createElement("div",null,t))};z.propTypes={children:g.a.arrayOf(Object),onChangePage:g.a.func.isRequired,previousPage:g.a.string,currentPage:g.a.string},z.defaultProps={children:null,previousPage:"portfolio",currentPage:"portfolio"};var B=z,M=a(156),S=function(){return l.a.createElement(M.Helmet,null,l.a.createElement("meta",{charSet:"utf-8"}),l.a.createElement("title",null,"Kamil Chędkowski"))},F=a(141),q=function(e){function t(){for(var t,a=arguments.length,r=new Array(a),n=0;n<a;n++)r[n]=arguments[n];return(t=e.call.apply(e,[this].concat(r))||this).state={previousPage:"portfolio",currentPage:"portfolio"},t.handleChangePage=function(e){t.setState(function(t){return{previousPage:t.currentPage,currentPage:e}})},t}return n()(t,e),t.prototype.render=function(){var e=this.state,t=e.previousPage,a=e.currentPage;return l.a.createElement(l.a.Fragment,null,l.a.createElement(S,null),l.a.createElement(s.a,{theme:u},l.a.createElement(l.a.Fragment,null,l.a.createElement(f,null),l.a.createElement(B,{onChangePage:this.handleChangePage,previousPage:t,currentPage:a},l.a.createElement(F.default,{page:a})))))},t}(o.Component);t.default=q},145:function(e,t,a){e.exports=a.p+"static/person300-6ce69f2dcf26853e7bc47bb4e64edce3.png"}}]);
//# sourceMappingURL=component---src-pages-index-js-a4b5d291a3083b4e5c14.js.map