(window.webpackJsonp=window.webpackJsonp||[]).push([[2,3],{142:function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),c=a(4),r=a.n(c),o=a(147),s=a(145),i=(a(33),a(146),n.a.createContext({})),f=function(e){return n.a.createElement(i.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):n.a.createElement("div",null,"Loading (StaticQuery)")})};f.propTypes={data:r.a.object,query:r.a.string.isRequired,render:r.a.func,children:r.a.func};var p=a(150),m=a.n(p),v=(a(151),s.d.p.withConfig({displayName:"Paragraph",componentId:"sc-158kqcp-0"})(["text-transform:uppercase;font-weight:",";"],function(e){var t=e.theme;return e.bold?t.font.bold:t.font.light})),d=s.d.div.withConfig({displayName:"Markdown__Wrapper",componentId:"sc-1gwezk0-0"})(["white-space:pre-wrap;font-family:'Rhodium Libre',serif;background-color:",";font-size:",";line-height:",";padding:4px 10px;"],function(e){return e.theme.graySecond},function(e){return e.theme.font.xxs},function(e){return e.theme.font.xs}),u=function(e){var t=e.markdown;return n.a.createElement(d,{dangerouslySetInnerHTML:{__html:t}})};u.propTypes={markdown:r.a.string.isRequired};var g=u,h=Object(s.e)(["form{transform:translateY(-100%);}to{transform:translateY(0%);}"]),w=Object(s.e)(["from{opacity:0;}to{opacity:1;}"]),b=s.d.div.withConfig({displayName:"Portfolio__MarkdownWrapper",componentId:"sc-9tumh6-0"})(["position:absolute;width:90%;bottom:100px;left:50%;transform:translate(-50%,0%);opacity:0;animation:"," 0.5s 0.6s linear forwards;"],w),P=s.d.div.withConfig({displayName:"Portfolio__ImageWrapper",componentId:"sc-9tumh6-1"})(["position:absolute;top:6%;right:7%;width:40%;height:40%;overflow:hidden;img{position:absolute;max-width:100%;max-height:80vh;transform:translateY(-100%);will-change:transform;animation:"," 0.5s 0.6s ease-in-out forwards;}"],h),x=Object(s.d)(v).withConfig({displayName:"Portfolio__HeaderName",componentId:"sc-9tumh6-2"})(["width:50%;margin:5% 2%;word-spacing:50px;font-size:",";line-height:",";"],function(e){return e.theme.font.l},function(e){return e.theme.font.l}),y=function(e){var t=e.data,a=t.myImage.childImageSharp.fluid,l=t.portfolio.mainPages[0].content;return n.a.createElement("section",null,n.a.createElement(x,{as:"h2"},"Kamil Chędkowski"),n.a.createElement(P,null,n.a.createElement(m.a,{alt:"Moja skromna osoba",fluid:a,backgroundColor:"black"})),n.a.createElement(b,null,n.a.createElement(g,{markdown:l})))};y.propTypes={data:r.a.objectOf(Object)},y.defaultProps={data:null};var k=function(){return n.a.createElement(f,{query:"2655401285",render:function(e){return n.a.createElement(y,{data:e})},data:o})},j=function(){return n.a.createElement("section",null,"Kontakt")},O=function(){return n.a.createElement("section",null,"Portfolio")},E=function(e){var t=e.page;return"portfolio"===t?n.a.createElement(k,null):"kontakt"===t?n.a.createElement(j,null):"projekty"===t?n.a.createElement(O,null):null};E.propTypes={page:r.a.string},E.defaultProps={page:null};t.default=E},144:function(e,t,a){"use strict";a.r(t);a(74),a(75);var l=a(7),n=a.n(l),c=a(0),r=a.n(c),o=a(145),s=a(152),i=a.n(s);function f(){var e=i()(["\n@import url('https://fonts.googleapis.com/css?family=Baloo+Tamma|Rhodium+Libre&display=swap');\n*,*::after,*::before{\n  box-sizing:border-box;\n}\n  html{\n    font-size:62.5%;\n    width:100vw;\n    height:100vh;\n    overflow-x:hidden;\n  }\n  body {\n   font-size:1.6rem;\n   /* font-family: 'Rhodium Libre', serif; */\n   font-family: 'Baloo Tamma', cursive;\n   font-weight:700;\n   background-color: white;\n   margin:0px;\n  letter-spacing: 1px;\n  }\n@media (min-width: 768px) {\n    html {\n   font-size:80.5%;\n  }\n  }\n .focus-only {\n   color:white;\n  border: 0;\n  clip: rect(0 0 0 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n  white-space: nowrap; /* 1 */\n}\n.focus-only:active,\n.focus-only:focus {\n  clip: auto;\n  height: auto;\n  margin: 0;\n  overflow: visible;\n  position: static;\n  width: auto;\n  white-space: inherit;\n}\n  "]);return f=function(){return e},e}var p=Object(o.b)(f()),m={black:"rgb(68,68,68)",grayFirst:"rgb(225,224,224)",graySecond:"rgb(235,235,235)",grayDark:"rgb(123,123,123)",redFirst:"rgb(215,108,108)",redSecondary:"rgba(215,108,108,50%)",redThird:"rgb(220,166,166)",font:{bold:"700",light:"400",xxs:"1rem",xs:"1.4rem",s:"1.6rem",m:"2.1rem",l:"2.4rem",xl:"3.2rem",xxl:"4rem",xxxl:"7rem"},breakPointMobile:"768px"},v=a(4),d=a.n(v),u=Object(o.e)(["0%{transform:scaleY(1) scaleX(1) translate(0%,0%);}60%{transform:scaleY(0.2) scaleX(1) translate(0%,300px);}100%{transform:scaleY(0.2) scaleX(3) translate(20%,300px);}"]),g=Object(o.e)(["0%{transform:scaleY(1) scaleX(1) translate(0%,0%);}60%{transform:scaleY(0.4) scaleX(1) translate(0%,120px);}100%{transform:scaleY(0.4) scaleX(4) translate(20%,120px);}"]),h=Object(o.e)(["0%{transform:scaleY(0.2) scaleX(3) translate(20%,300px);}40%{transform:scaleY(0.2) scaleX(3)  translate(20%,120px);}70%{transform:scaleY(0.2) scaleX(4) translate(20%,120px);}100%{transform:scaleY(0.4) scaleX(4) translate(20%,120px);}"]),w=o.d.div.withConfig({displayName:"LeftBox__Box",componentId:"sc-1h4od26-0"})(["position:absolute;background-color:",";width:27%;height:70%;left:0%;top:0%;z-index:-2;will-change:transform;",";"],function(e){return e.theme.redSecondary},function(e){var t=e.currentPage,a=e.previousPage;return"portfolio"===a&&"projekty"===t?Object(o.c)(["animation:"," 0.8s linear forwards;transform:scaleY(0.2) scaleX(3) translate(20%,300px);"],u):"projekty"===a&&"portfolio"===t?Object(o.c)(["animation:"," 0.8s linear reverse;transform:scaleY(1) scaleX(1) translate(0%,0%);"],u):"portfolio"===a&&"kontakt"===t?Object(o.c)(["animation:"," 0.8s linear forwards;transform:scaleY(0.4) scaleX(4) translate(20%,120px);"],g):"kontakt"===a&&"portfolio"===t?Object(o.c)(["animation:"," 0.8s linear reverse;transform:scaleY(1) scaleX(1) translate(0%,0%);"],g):"projekty"===a&&"kontakt"===t?Object(o.c)(["animation:"," 0.8s linear forwards;transform:scaleY(0.4) scaleX(4) translate(20%,120px);"],h):"kontakt"===a&&"projekty"===t?Object(o.c)(["animation:"," 0.8s linear reverse;transform:scaleY(0.2) scaleX(3) translate(20%,300px);"],h):"portfolio"===t?Object(o.c)(["transform:scaleY(1) scaleX(1) translate(0%,0%);"]):"projekty"===t?Object(o.c)(["transform:scaleY(0.2) scaleX(3) translate(20%,300px);"]):"kontakt"===t?Object(o.c)(["transform:scaleY(0.4) scaleX(4) translate(20%,120px);"]):Object(o.c)(["transform:scaleY(1) scaleX(1) translate(0%,0%);"])}),b=function(e){var t=e.currentPage,a=e.previousPage;return r.a.createElement(w,{currentPage:t,previousPage:a})};b.propTypes={currentPage:d.a.string,previousPage:d.a.string},b.defaultProps={currentPage:"portfolio",previousPage:"portfolio"};var P=b,x=Object(o.e)(["0%{transform:scaleY(1) scaleX(1) translate(0%,0%);}60%{transform:scaleY(0.3) scaleX(1) translate(0%,-80px);}100%{transform:scaleY(0.3) scaleX(2.4) translate(-20%,-80px);}"]),y=Object(o.e)(["0%{transform:scaleY(1) scaleX(1) translate(0%,0%);}40%{transform:scaleY(0.3) scaleX(1) translate(0%,-50px);}70%{transform:scaleY(0.3) scaleX(1) translate(-45%,-50px);}100%{transform:scaleY(0.3) scaleX(2.7) translate(-45%,-50px)}"]),k=Object(o.e)(["0%{transform:scaleY(0.3) scaleX(2.4) translate(-20%,-80px);}40%{transform:scaleY(0.3) scaleX(2.4) translate(-45%,-80px);}60%{transform:scaleY(0.3) scaleX(2.4) translate(-45%,-50px);}100%{transform:scaleY(0.3) scaleX(2.7) translate(-45%,-50px)}"]),j=o.d.div.withConfig({displayName:"RightBox__Box",componentId:"sc-1vtjtxh-0"})(["position:absolute;background-color:",";width:30%;height:33%;right:0%;top:0%;z-index:-2;will-change:transform;",";"],function(e){return e.theme.redFirst},function(e){var t=e.currentPage,a=e.previousPage;return"portfolio"===a&&"projekty"===t?Object(o.c)(["animation:"," 0.8s linear forwards;transform:scaleY(0.3) scaleX(2.4) translate(-20%,-80px);"],x):"projekty"===a&&"portfolio"===t?Object(o.c)(["animation:"," 0.8s linear reverse;transform:scaleY(1) scaleX(1) translate(0%,0%);"],x):"portfolio"===a&&"kontakt"===t?Object(o.c)(["animation:"," 0.8s linear forwards;transform:scaleY(0.3) scaleX(2.7) translate(-45%,-50px);"],y):"kontakt"===a&&"portfolio"===t?Object(o.c)(["animation:"," 0.8s linear reverse;transform:scaleY(1) scaleX(1) translate(0%,0%);"],y):"projekty"===a&&"kontakt"===t?Object(o.c)(["animation:"," 0.8s linear forwards;transform:scaleY(0.3) scaleX(2.7) translate(-45%,-50px);"],k):"kontakt"===a&&"projekty"===t?Object(o.c)(["animation:"," 0.8s linear reverse;transform:scaleY(0.3) scaleX(2.4) translate(-20%,-80px);"],k):"portfolio"===t?Object(o.c)(["transform:scaleY(1) scaleX(1) translate(0%,0%);"]):"projekty"===t?Object(o.c)(["transform:scaleY(0.3) scaleX(2.4) translate(-20%,-80px);"]):"kontakt"===t?Object(o.c)(["transform:scaleY(0.3) scaleX(2.7) translate(-45%,-50px);"]):Object(o.c)(["transform:scaleY(1) scaleX(1) translate(0%,0%);"])}),O=function(e){var t=e.currentPage,a=e.previousPage;return r.a.createElement(j,{currentPage:t,previousPage:a})};O.propTypes={currentPage:d.a.string,previousPage:d.a.string},O.defaultProps={currentPage:"portfolio",previousPage:"portfolio"};var E=O,Y=function(e){var t=e.currentPage,a=e.previousPage;return r.a.createElement("div",{key:Math.random()},r.a.createElement(P,{currentPage:t,previousPage:a}),r.a.createElement(E,{currentPage:t,previousPage:a}))};Y.propTypes={previousPage:d.a.string,currentPage:d.a.string},Y.defaultProps={previousPage:"portfolio",currentPage:"portfolio"};var X=Y,A=o.d.li.withConfig({displayName:"Menu__ListElement",componentId:"sc-1wq3227-0"})(["display:block;flex-grow:1;height:100%;position:relative;a{position:absolute;text-decoration:none;width:100%;height:100%;font-size:",";text-align:center;line-height:80px;color:black;}a.active{background-color:",";}"],function(e){return e.theme.font.m},function(e){return e.theme.redSecondary}),C=o.d.nav.withConfig({displayName:"Menu__MenuWrapper",componentId:"sc-1wq3227-1"})(["position:fixed;width:100%;max-width:100vw;height:70px;bottom:0%;left:0%;background-color:",";ul{list-style:none;display:flex;flex-wrap:wrap;height:100%;margin:0px;padding:0px;}"],function(e){return e.theme.redSecondary}),N=function(e){var t=e.onChangePage,a=e.currentPage;return r.a.createElement(C,null,r.a.createElement("ul",null,r.a.createElement(A,null,r.a.createElement("a",{href:"/Portfolio_2019/#portfolio",className:"portfolio"===a?"active":"",onClick:function(){return t("portfolio")}},"Portfolio")),r.a.createElement(A,null,r.a.createElement("a",{href:"/Portfolio_2019/#projekty",className:"projekty"===a?"active":"",onClick:function(){return t("projekty")}},"Projekty")),r.a.createElement(A,null,r.a.createElement("a",{href:"/Portfolio_2019/#kontakt",className:"kontakt"===a?"active":"",onClick:function(){return t("kontakt")}},"Kontakt"))))};N.propTypes={onChangePage:d.a.func.isRequired,currentPage:d.a.string},N.defaultProps={currentPage:"portfolio"};var z=N,I=o.d.div.withConfig({displayName:"MainTemplate__Layout",componentId:"sf9sit-0"})(["position:absolute;top:0%;width:100vw;height:100vh;overflow:hidden;"]),W=o.d.div.withConfig({displayName:"MainTemplate__BackgroundBlock",componentId:"sf9sit-1"})(["width:120vw;height:250vw;position:fixed;top:100%;left:100%;transform-origin:50% center;transform:translate(-47%,-84%) rotate(26deg);background-color:",";z-index:-3;"],function(e){return e.theme.grayFirst}),B=function(e){var t=e.children,a=e.onChangePage,l=e.previousPage,n=e.currentPage;return r.a.createElement("div",null,r.a.createElement(I,null,r.a.createElement(z,{onChangePage:a,currentPage:n}),r.a.createElement(X,{previousPage:l,currentPage:n}),r.a.createElement(W,null)),r.a.createElement("div",null,t))};B.propTypes={children:d.a.objectOf(Object),onChangePage:d.a.func.isRequired,previousPage:d.a.string,currentPage:d.a.string},B.defaultProps={children:null,previousPage:"portfolio",currentPage:"portfolio"};var S=B,M=a(160),Q=function(){return r.a.createElement(M.Helmet,null,r.a.createElement("meta",{charSet:"utf-8"}),r.a.createElement("title",null,"Kamil Chędkowski"))},L=a(142),F=function(e){function t(){for(var t,a=arguments.length,l=new Array(a),n=0;n<a;n++)l[n]=arguments[n];return(t=e.call.apply(e,[this].concat(l))||this).state={previousPage:"portfolio",currentPage:"portfolio"},t.pages=["portfolio","projekty","kontakt"],t.handleChangePage=function(e){var a=t.state.currentPage;e!==a&&t.setState(function(t){return{previousPage:t.currentPage,currentPage:e}})},t}n()(t,e);var a=t.prototype;return a.componentDidMount=function(){var e=window.location.hash.substring(1);this.pages.includes(e)&&this.setState({previousPage:e,currentPage:e})},a.render=function(){var e=this.state,t=e.previousPage,a=e.currentPage;return r.a.createElement(r.a.Fragment,null,r.a.createElement(Q,null),r.a.createElement(o.a,{theme:m},r.a.createElement(r.a.Fragment,null,r.a.createElement(p,null),r.a.createElement(S,{onChangePage:this.handleChangePage,previousPage:t,currentPage:a},r.a.createElement(L.default,{page:a})))))},t}(c.Component);t.default=F},146:function(e,t,a){var l;e.exports=(l=a(148))&&l.default||l},147:function(e){e.exports={data:{myImage:{childImageSharp:{fluid:{base64:"data:image/png;base64,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",tracedSVG:"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='400' height='560'%3e%3cpath d='M202 22v1c-5-2-26-2-28 0s-5 3-10 2c-5 0-8 1-7 2l-3 3c-4 0-8 2-8 3l-2 1-4 1-5 1c-4 0-5 1-5 4 0 4-1 4-4 4-5-1-5 0-3 5h-1c-2-1-2-1-2 1l-2 4-6 4-7 4c-3 0-5 2-3 2s1 2-1 3l-3 3-1 1v1l-1 2 2 4c3 5 3 5 0 5-2 0-2 0-1 1v3l-2 1-1 9 1 2c1 1 1 1-1 2-3 2-3 4 1 4s5 1 3 2l-3 2c-2 2-2 2 1 1 3 0 3 0 3 2l-1 2v1l-1 4-2 6v9c2 0 2 0 3 7 0 6 1 10 2 9l1 3 1 9a458 458 0 0 1 9 58l4-73c1-16 4-23 11-25l6-2c3-2 6-2 18-3a114 114 0 0 0 23-1l13-2h6l1-1h2l2 1v-1l10 1c2 1 14 0 15-1l6 1 9 1 5 1 3 1c2 0 3 0 5 4l3-1c3-1 9 0 9 2l1 1c2 0 5 8 6 13v10l2 10 3 20 1 2 1 2 1 2v3l1 1 1 2c3 2 7 14 8 22l1 7v3l2 4c1 2 1 12-1 19l-2 10-1 8 1 3 3-8 2-6c0 3 3 3 6 0l4-3 7-3c1-10 0-17-5-20-3-3-4-4-1-5l1-5c0-2 0-3 2-3 1 1 1 0 1-5 0-4 0-6 2-7a561 561 0 0 0-4-97l-2-3-3-4c-4-3-5-6-3-5h1l-4-3c-5-3-5-4-1-4 2 0 2 0 1-1a3350 3350 0 0 1-7-3v-2l-2-1c-2 0-3 0-3-2 0-4-2-6-2-3 0 2-2 4-3 3v-2c1-1 0-6-1-5l-1-5-2-9-4-11-3-6-2-1-4-2-4-4c-4-6-13-9-14-5l-3 1a255 255 0 0 0-10-1c-3-2-14-3-22-3-5-1-6 0-5 1m20 161c-9 2-13 8-6 9 9 1 27 0 28-2 2-2 5-1 8 1 2 2 4 3 6 2l5 1c4 3 4 0-1-4-7-7-14-11-13-7h-2l-3-1c0-2-17-1-22 1m-83 4l-13 1c-5 1-12 10-12 16 0 2 2 3 2 0 1-3 7-6 9-6h2l6-1c9 0 15 0 14-2l1-1c3 1 4-1 2-4-1-2-2-3-6-3h-5m89 19l2 5h1v-3h2l-1 3v3c1 2 27 2 27 0l-3-2-1-2h-1c-2 0-2 0-1-1v-1c-1 1-5 0-8-2l-11-3h-6v3m84-1c-2 2-3 3-2 4 5 12 6 32 2 37v3c3 0 4-7 5-20l1-17c1-5 0-9-1-9l-5 2m-167 3c-7 3-19 11-19 13h10c4 0 5-1 2-2s-3-2 0-5l3-2 1 2c2 5 5 6 9 5 4 0 5-2 6-8 0-4-7-5-12-3m154 21l1 3c0 2-3 1-3-1-2-3-3 1-5 12 0 5 1 7 2 4l3-2c5 0 6-2 6-8l-2-8c-2-3-3-3-2 0m-14 44l-1 5-1 2-1 1-1 2v4l-1 6-2 8-6 17s4-2 3-3l1-1v17l-2 15c0 17-1 22-6 34-2 6-3 15-2 20v3l-1 2c1 1 0 3-1 3l-1 4-1 2-1 2c1 1 0 2-1 3l-1 3v5l-1 3-1 1c-2 0-3-3-2-3l1-4c0-5-1-4-4 2-2 3-2 4-1 5v1c-1 0-5 11-5 14v3l1 12c2 13 2 14 1 14h-1l1 1 1 2c-1 2 1 4 2 2h5c2 0 4 3 2 4v10l-1 4c-1 1-2 3-1 6l-1 6v5l1 2h-1c-1-1-1-1-2 1-1 3 0 4 1 3l1 2-1 2-2 2 1 2h2c1 1 1-3 1-5s1-5 3-5v-5l2-18 1 3a894 894 0 0 0-2 22c-2 0-2 0 0 10l1 10 1 1c2 0 4 2 3 3l-2-1h-2l-1 1c-1 0-2-1-2-3l-1-4c-1-2-2 2-1 8l1 7c-1 4 1 7 4 7 2 0 3 0 2-2 0-3 2-6 3-4 2 2 4 2 4 0s3 2 3 4 1 2 6 2c4 0 6-1 6-2h1l1-2-1-3c-1-1-1 0-1 1 0 2-2 3-4 2h-5l-1 1c-2-2-1-4 2-4 4 1 5-1 3-4l-1-4c0-3-3-6-4-3h-1l-1 2h1l1 1v1c1 0 2 1 2 3 0 3 0 3-1 2h-1c0 3-3-2-3-5l-1-4c-1-2 0-5 1-3h5l2-2 2-1-2-1c-2 0-3 0-3-2s0-3 1-2l2-1-1-2c-1 1-2 0-3-1-1-3-1-3 2-3 2 0 3 0 3 3 0 2 1 3 2 3v-5l-1-4-1-3-1-6-2-8c-3-8-3-10-2-12 1-1 2-1 3 1v2l1 3 1 5c1 2 4 2 4-1l-2-2v-3l-1-3-1-4-1-3c-1-1-1-10 1-11l1 2 1 4 2 7a156 156 0 0 0 4 14c1 6 1 7 3 6 1-1 1-1 2 1s0 4-2 3h-1c-1 1 1 16 2 17l1 5 1 4 1 4c1 3 2 3 3 1v-3c-2-1-2-3-1-4l-1-3-1-4-1-4-1-3v-3l-1-2c0-5 3-3 3 1 1 3 4 3 4 0l-2-2v-6c-1-1-2-3-1-4l-1-2-1-4-1-4-1-3-2-12c-2-2-2-4-1-4 2-1 1-4-1-4l-2 2c-2 2-3 1-3-2-1-4 1-5 3-2l4 1c3-1 5 2 3 4-1 2-1 4 2 4l1-2c0-4 4-2 4 2 1 3 4 4 4 1l-1-3-1-2c1-1 0-3-1-4v-6c-2-2-3-10-2-10h2l1 2 1 3c2 0 2 0 1-5a139 139 0 0 1-1-11c-1-1 0-4 2-4v2l1 3c1 0 2 1 1 2l1 3v3l1 4 1 2v3c1 1 2 2 1 3l1 3 1 3v3c2 1 5-1 3-3l-3-9a128 128 0 0 0-2-12l-1-4-1-3v-2c-1-1-2-2-1-3l-1-2v-5l-1-2 2-2c2 0 2 0 2 2v7l1 1c1 1 2 3 1 4l1 2v3l1 2 1 4v2l1 4 1 4 1 1 2 10a67 67 0 0 1 4 15c0 3 1 4 2 4l1-3v-4l-1-4-1-3-1-3c-2 0-2-1-1-3l-1-4v-2c1-1 0-2-1-3s-2-2-1-3l-1-3v-3l-1-2-1-4-1-3v-3l-1-2-1-3v-3l-1-2v-7c1 0 1-1-1-1-2-2-1-5 1-5l2 2c0 3 1 4 3 2v-2l-1-4v-2l-1-3v-3c-2 0-1-3 1-3l1 1 1 1c1-1 4 0 4 2l-3 1h-1l2 1 1 2-1 1v3l1 3 1 2 1 3 2 9v2c0 3 1 5 3 4s5 1 5 3-3 1-4-1c-1-1-1-1-2 1v3c2 1 2 1 1 3v2l1 4 1 4v2l1 4 3 16 1 3 2 10 1 4 3 16 2 4v6l1 5v2l2 11c1 12 2 15 3 15s2-5 1-7l-1-3v-4l-1-3c1-3 4 0 4 3v4l1 3v5c1 2 1 2 3 0v-4l-1-4-1-11-1-4-1-10-2-8a21079 21079 0 0 0-6-47l1 2c3 0 4 3 3 5-2 2-2 2-1 4l2 3 1 7 1 7c0 3 1 4 3 3v-6c2 1 5-2 3-3l-1-2 2-19 1-5v-1c-1-1-2 1-2 4l-1 3v3l-1 4c-2 1-2 2-1 3s0 3-1 3c-3 0-3-2-2-3v-4l1-3v-3l1-3v-4l1-3 1-3v-4l1-3c0-2 0-2 2-3 3-1 4-2 2-4h-2l-1 2c-2-1-4-14-3-15v-6c0-5 0-5 2-4l1 2v7c-1 0-1 1 1 2v2c-1 0-1 7 1 8 2 0 2-1 2-3-1-4 0-5 2-2v11c1 3 1 4-1 4l1 1v4c-1 2 0 4 2 4l3 3v13l-1 6c0 4 0 5 2 5s2-1 2-6v-28l1-1 1-2v-20l1-1c2 0 3 3 3 8v8c-2 1-2 2-1 2v11c1 2 3 0 3-2a74 74 0 0 1 1-21l1-2c2 0 3 5 2 13 0 6 0 7 2 7 1 0 2-1 2-3v-13l2 1 1 7v14l-1 7c-1 6 0 8 2 7s2-1 1-3v-9c2-1 2-2 1-3v-2c1-1 0-14-1-17-1-2-1-2 1-3 2 0 2 0 1-1h-3l-2-1v-1l1-1-4-1-3-1v-1l-3-1-2-2-3-2-3-2-2-1-3-2c-2-2-5-3-6-2s-4 1-4-1h2c3 0 1-2-2-2h-1l-2 1h-2v1c-2 0-2 0-1 1v14l1 3v2c2 2 1 9-1 9s-3-3-1-4l-1-2v-4c-1-1-2-18 0-19v-2c-1-1-1-1 1-1h2c-1-1-1-1 1-1h2c0-1-4-2-6-1l-1 1-2 1h-2l-2-1v-1c1 1 2 0 1-1h4c-1-1 0-1 1-1v-1l-2-1c-1 1-3 0-4-1v-1c2 0 0-2-3-2l-2-1c1-2-4-4-5-3l-3-1h2l1-1-8-1-2 1v2l-1 2-2-2 1-2 1-1 1-1c1 0 2 0 1-1 0-2-4-3-4-1h-3c-3-1-4-4-4-8l-5-8v6c-1 0-2-6-1-7l-1-3-2-2v3c-2-2-2-3-1-3 1-1-2-5-4-5l-1-3c0-4-4-14-5-13l1 4c1 4 0 5-1 1-2-3-2-4-1-5 1 0 0-2-2-3l-3-3c0-2-3-5-5-4l-1-1h1l1-1-2-1-3-2 2-13 2-6 1-8 2-16c1-14 2-19 5-18l-1-2-2-3-1-1-1 3m-93 22h-37l4 3c5 3 7 4 9 2s31-1 34 0v2c0 1 0 2 2 1a94 94 0 0 0 19-5c5-2 3-3-4-3h-27m-54 49l-7 5-4 2 2 1c2 1 2 1 1 2l-2-1h-3v1c3 1 1 3-1 3-1-1-2 0-2 1l-2 2-2 1-2 3-2 1-3 4-3 2-1-1 1 3c0 3 0 3 1 1l3-1v3l-2 2-1 3-1 2-1 2-1 3-1 3-1 2-3 6-1 5-1 3-1 7 1-2 1-4 2-4 1-4 1-2c1-1 2-2 1-3 0-2 3-4 3-1 1 1-1 6-2 7l-1 2v2l-2 3-1 3-1 3-1 2v7l1-2c1-3 3-4 3-1l-1 2-1 1c1 1-2 8-4 9l-1 1-2 3-4 7-1 2v3l3-4c2-5 4-7 5-5 2 3 1 4 0 3-2-1-2-1-3 2-1 4-3 7-5 7h-2c2-3-4-2-6 1-1 2-2-1-1-3s0-3-1-3l-1 4 1 3v3h-2l-1-2c-2 0-1-9 2-20 2-9 3-15 1-13l-1 5-3 11c-1 3-2 7-1 8l-1 3-1 6c0 4-2 8-4 7l-2 2 1 2c2 0 1 2-1 2 0 0-2 0-2 2a150 150 0 0 1-5 9c-2 3-2 4-1 5 3 1 2 5 0 5l-3 4-2 2s-2 1-2 3c-1 1-1 2-2 1l-1-1c-1 0-2 3-1 5a754 754 0 0 1 20-19c3 0 5 0 3-1-1-1-1-4 1-4l1 1v1l2 1c0 2-1 4-3 4v8l-2 1-1-4c1-5 0-6-2-3v1c1 0 1 5-1 7 0 1-1 1-1-1l-1-2-1 2c-1 2 0 3 2 3 4 0 5 6 1 10l-2 3-2 3c-2 1-3 4-1 4l1 2c0 1-2 2-2 0l-4 2-4 4c-2 0-1-2 1-4l2-4 2-3 2-3h-2c-2 1-6 8-6 10l-2 2c-2 1-3 3 0 3l2 2c0 2-2 3-5 1s-5 1-3 3c2 1 2 1 1 2h-6c-1 2-1 2 1 3 3 1 3 1 2 4l1 4 2-2c0-3 2-5 4-5l3-2 1-2 1-1 2-2v1c-2 2-1 4 1 4l2-4 1-9 2-1c3 0 4 0 4-3l1-5v-4c2-2 3-1 2 1l1 5c1 2 1 2 2-4v-7l1-3h1c0 2 2 0 5-7 4-9 5-12 2-9-1 2-4 3-4 1l1-1 1-1v-3l-1-4-1-2h-2l2-3 1-4 2-3c2-1 3-6 2-8-1-1 0-3 2-1l2-2c0-2 3-4 3-1l-1 1-1 1c0 2 4-1 7-4l3-3v3c0 2-1 3-3 5l-4 3h3c3-3 3-2 1 1-2 4-1 6 1 3l7-11 1-1 1-1 1-2 2-4c1-4 2-8 3-7 0 2 6-4 6-7 0-1 0-2 1-1l1-1v-8c-2-4-2-8-1-10 0-4 0-4 1 3 1 8 2 12 12 22 4 5 9 6 7 2l1-2c3-1 3-3 1-5s-4-9-2-10v-4c0-3 1-7 2-6l1-5 1-10 4-17 1-11v-24c0-2-3-2-7 0m144 21l-2 9v4l-2 5-2 4c-2 1-2 1-1 3v1c-2 0-2 1-2 2l-1 3c-1 1-2 2-1 3 0 3 4 2 4-1l1-3 1-3 1-1 1-2v-3c2 0 4-6 4-12l1-3v-6l-1-4c1-6-1-3-1 4m11 25c1 2 0 3-1 3l-1 3v2l-1 2c1 2 1 3-1 3l-1 3-1 2-2 3-2 3-2 3-2 4c-2 2-3 4-1 4l3-3 5-8c3 0 3 2 0 4l-2 4-1 2-2 4c0 2 0 2 2 1l2-2c0-1 1-4 4-6l4-6 2-2 1-3c0-4-2-4-3 0-2 4-5 6-4 1l2-3 1-2 1-3v-3c-1-1-1-2 1-2l1-3c-1-1 0-2 1-2 2-2 1-5-2-5l-1 2M81 405l-9 3-1 1-1 2c-1 1-2 2-1 3l-1 2c-3 0-3-2-1-3v-2h-3l-4 2c-3 0-5 2-2 2 2 0 2 0 1 2h-4c-1-3-3-2-5 1-1 1-2 2-4 1l-5 2-4 2-1 1-1 2-2 3-2 2-2 2 1 1c1-1 0 3-2 4l-1 3-1 2-6 8-2 2-1 2-2 3-2 3-1 3-2 2-2 4-1 3c1 2 4 0 4-2l2-3c1-1 2-3 1-4l2-2 2-3 2-3 1-2 2-3 1-3 2-3 5-7 2-3 1-4 2-2c2 0 2-1 2-2 0-2 1-3 2-3 2 0 3 3 1 4l-2 2-2 3c-1 0-2 1-1 2l-1 3c-1 0-2 1-2 3l-1 2-2 3c0 2 3 1 4-2l2-3 1-3 2-2 1-2c0-2 3-5 4-3v2l-2 3-1 2-2 3-2 3c-1 1-2 3-1 4 0 1 2 0 4-4 3-7 5-10 6-8 1 1-2 8-4 9l-1 3-1 2-2 3-1 3c-1 0-2 1-2 3s0 2 2 0l2-3c0-2 2-3 4-2l2-1-1-1c-2-1-2-1-1-3h6v-2c-2 0-3-2-2-3h3c2 3 1 7-1 8l-2 2-1 3-3 3c0 2-1 3-2 3l-1 2-2 3-2 3-2 3c-1 1-2 2-1 3 1 2 5 0 4-3l1-2 3-3c1-3 2-4 4-2 1 1 1 1-1 3l-2 4-1 2-2 2-1 3-2 3-1 4c-3 2-2 3 0 3l2-3 2-3 1-3 2-3 2-4 2-2 1-1 2-3 2-3 2-3 2-2 2-3 2-3 2-2 2-3 2-2 1-2 2-4c2 0 3-1 2-2l1-2 5-10-1 1c-2 1-3 0-3-2l2-1c2 1 2 0 2-1l1-4 3-4v-3l1 3 1 4v-4l1-3v7c-1 5 0 8 2 8v-10c1-2 1-9-1-10-1 0-1-1 1-1l1-3c-1-2-2-2-5 0m-1 2l-1 2v2h-1l-2-2c-2 0-3 3-1 4 1 1 1 1-2 1-1 0-2 1-2 3l-2 3-1 1-1 3-1 2-2 2-2 3-2 2-2 2-2 4c-2 3-3 1 0-2l1-4 1-2 1-3 2-3 2-3c-1-1-8 7-8 9l-2 3v3l-1 2c-3 0-3 2-1 3 2 0 2 1 1 2v2l3-2c0-2 2-3 2-3l2-2 2-3 2-2 1-3a1507 1507 0 0 0 18-22c0-3 0-3-2-2m224 15c0 2-1 3-2 3l-1 3c1 2 0 2-1 3-2 0-2 1-2 3v2c-2 0-2 0-1 3 1 2 1 2-1 2l-1 3v2l-1 2v3l-1 3c1 1 0 2-1 3v6l2 4 2-6c0-5 0-7 3-7 2 0 3-1 1-2h-1l-1 1v-8l1-3 5-13c1-3 2-4 3-3v-1c-1-6-3-7-3-3m-275 5l-2 1-5 7c-4 2-6 5-6 6l-2 1-2 2-2 2-2 2-2 3-2 2-1 2c-2 2-4 9-2 8l1-3 2-2 2-3 2-1 1-1 2-3 2-3 2-2 2-1 2-2 2-3 2-2 2-1 2-3 2-2 1-2 2-2h-3m287 2l1 3 1 3v3l1 3 1 3v3l1 3 1 3v3l1 3 1 3 1 3v3l1 2 1 5v2l1 3c2 4 3 10 3 16l1 4 1 4c0 3 1 4 3 3 2 0 1-3-1-4v-6l-1-5-1-2v-3l-1-3-1-6-2-6-2-10-1-4-1-3v-3l-1-3c1-1 0-2-1-3v-3l-1-2-1-4v-2l-1-4c0-3-2-4-4-2M69 445l-2 4-2 2c-1 1-2 2-1 3l-2 2-2 3-2 2-2 3-2 3-2 3-2 2-2 2-2 3-1 2c1 1 0 2-1 3l-2 4-1 3-1 2-2 5-2 3-1 2-1 3-2 3-2 4-1 3-2 4-1 2-2 3-2 4v2c1 1 3 0 3-2l2-3 1-3 2-3 2-4 2-3 1-2c0-2 1-3 2-3l1-3 2-4 1-2 2-4 1-3 2-3 1-3 2-4 1-3 2-3 1-2c0-2 8-11 8-9l-1 3-2 3-1 3c-2 0-3 5-1 5 1 0 2-1 2-3l3-4 2-4 2-2 1-3c0-2 2-4 3-3 1 0 2-1 2-4l-1-3c-1 0-1-1 1-3 2-4 1-7-2-3m262 4l1 3 1 2v4c1 1 2 2 1 3l1 3v3l1 3 1 4v3c1 1 2 2 1 4-1 1 0 2 1 3v3l1 4 1 2c-1 1 0 3 1 4v3l1 3 1 4 1 10 2 11 1 4v3c-1 2 2 6 4 5 1-1-2-18-4-20v-9l-1-3-2-8-1-6-1-10-1-4-1-3v-2l-1-4-1-4-1-2v-3l-1-3-1-4c-1-2 0-4 1-2s2 1 2-2l-2-1c-1 1-2 0-2-1h-4m-13 42v3l1 7a604 604 0 0 0 0 10c0-3-2-6-3-5v6l2 6 2 7 3 9a339 339 0 0 0 8 26v-2l-1-4c0-3 3-1 3 3 0 2 1 3 3 3s2 0 1-4a4719 4719 0 0 0-6-15l-4-11-1-3v-6c-2-2-4-9-5-22 0-9-1-11-3-8M44 506l-1 3c-1 0-6 9-5 10s-1 4-2 4c-2 0-3 3-3 4l3-2c2-2 3-2 4-1 3 2 13-12 10-14h-3c-2 3-2 2 0-2v-4c-3-2-3-1-3 2m310 3l1 7v5l1 4 1 5v6l1 3v4l1 4 1 13c2 1 3-1 2-5a175 175 0 0 1-2-19v-6l-1-5v-3l-1-3v-4l-1-3-1-5-1-3c-2 0-2 0-1 5m12-1v2c1 3-1 5-3 3-1-3-3-2-1 2l1 10c0 3 1 5 2 5 2 0 3-4 1-6v-1c0-1 1-1 2 1s3 1 1-2v-9c0-6-1-9-3-5m5 21v5c2 6 2 10 2 14s1 5 5 3c2-2 2-3 1-5l1-4c2-3-1-7-3-4-2 2-4 0-4-5 0-4-1-6-2-4M34 539l1 3c0 2 0 2-2 2-2-1-4 2-4 6v4c-3 2-1 6 3 6 3 0 3 0 3-3l2-12c2-1 2-3 2-4-1-2-4-3-5-2' fill='%23d3d3d3' fill-rule='evenodd'/%3e%3c/svg%3e",aspectRatio:.7145833333333333,src:"/Portfolio_2019/static/dfef06d13934174ef50df196fdce45c8/647de/person.png",srcSet:"/Portfolio_2019/static/dfef06d13934174ef50df196fdce45c8/bf65b/person.png 100w,\n/Portfolio_2019/static/dfef06d13934174ef50df196fdce45c8/7c0ed/person.png 200w,\n/Portfolio_2019/static/dfef06d13934174ef50df196fdce45c8/647de/person.png 400w,\n/Portfolio_2019/static/dfef06d13934174ef50df196fdce45c8/59139/person.png 600w,\n/Portfolio_2019/static/dfef06d13934174ef50df196fdce45c8/af144/person.png 800w,\n/Portfolio_2019/static/dfef06d13934174ef50df196fdce45c8/75ab6/person.png 1372w",srcWebp:"/Portfolio_2019/static/dfef06d13934174ef50df196fdce45c8/f4957/person.webp",srcSetWebp:"/Portfolio_2019/static/dfef06d13934174ef50df196fdce45c8/74729/person.webp 100w,\n/Portfolio_2019/static/dfef06d13934174ef50df196fdce45c8/1932c/person.webp 200w,\n/Portfolio_2019/static/dfef06d13934174ef50df196fdce45c8/f4957/person.webp 400w,\n/Portfolio_2019/static/dfef06d13934174ef50df196fdce45c8/6fae7/person.webp 600w,\n/Portfolio_2019/static/dfef06d13934174ef50df196fdce45c8/c6096/person.webp 800w,\n/Portfolio_2019/static/dfef06d13934174ef50df196fdce45c8/b1057/person.webp 1372w",sizes:"(max-width: 400px) 100vw, 400px",originalImg:"/Portfolio_2019/static/dfef06d13934174ef50df196fdce45c8/75ab6/person.png",originalName:"person.png",presentationWidth:400,presentationHeight:560}}},portfolio:{mainPages:[{content:"[[\n'Witam',\n'Nazywam się Kamil Chędkowski',\n'Staram stać się web developerem',\n`Programowanie jest raczej moją obsesją robię to już od dawna a moje pierwsze projekty pisane w C++ poczynały się w technikum blisko 4lata temu`,\n`Od tamtej pory zdążyłem poznać sposoby budowania serwisów od strony Front-End jak i Back-End ucząc się z dokumentacji, bądź kursów online konkretnych technologii [hello-Roman, websamuraj, pasjainfromatyki] ale przede wszystkim zmagając się z własnymi projektami`,\n]];\n"}]}}}},148:function(e,t,a){"use strict";a.r(t);a(34);var l=a(0),n=a.n(l),c=a(4),r=a.n(c),o=a(56),s=a(2),i=function(e){var t=e.location,a=s.default.getResourcesForPathnameSync(t.pathname);return a?n.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json)):null};i.propTypes={location:r.a.shape({pathname:r.a.string.isRequired}).isRequired},t.default=i}}]);
//# sourceMappingURL=component---src-pages-index-js-a4fa37d1d4e50a461698.js.map