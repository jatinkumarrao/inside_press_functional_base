(this.webpackJsonpinside_press=this.webpackJsonpinside_press||[]).push([[0],{10:function(e,t,s){},24:function(e,t,s){},25:function(e,t,s){"use strict";s.r(t);var a=s(0),c=s.n(a),n=s(11),r=s.n(n),i=(s(10),s(12)),o=s(13),l=s(17),j=s(15),b=s(5),h=s(1),p=function(){return Object(h.jsx)("div",{children:Object(h.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:Object(h.jsxs)("div",{className:"container-fluid",children:[Object(h.jsx)(b.b,{className:"navbar-brand",to:"/",children:"News"}),Object(h.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(h.jsx)("span",{className:"navbar-toggler-icon"})}),Object(h.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:Object(h.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(h.jsx)("li",{className:"nav-item",children:Object(h.jsx)(b.b,{className:"nav-link",to:"/business",children:"Business"})}),Object(h.jsx)("li",{className:"nav-item",children:Object(h.jsx)(b.b,{className:"nav-link",to:"/entertainment",children:"Entertainment"})}),Object(h.jsx)("li",{className:"nav-item",children:Object(h.jsx)(b.b,{className:"nav-link",to:"/",children:"General"})}),Object(h.jsx)("li",{className:"nav-item",children:Object(h.jsx)(b.b,{className:"nav-link",to:"/health",children:"Health"})}),Object(h.jsx)("li",{className:"nav-item",children:Object(h.jsx)(b.b,{className:"nav-link",to:"/science",children:"Science"})}),Object(h.jsx)("li",{className:"nav-item",children:Object(h.jsx)(b.b,{className:"nav-link",to:"/sports",children:"Sports"})}),Object(h.jsx)("li",{className:"nav-item",children:Object(h.jsx)(b.b,{className:"nav-link",to:"/technology",children:"Technology"})})]})})]})})})},g=s(3),d=s(6),u=s.n(d),x=s(9),m=s.p+"static/media/loader_image.065f8f5c.gif",O=function(){return Object(h.jsx)("div",{className:"text-center",children:Object(h.jsx)("img",{src:m,alt:"loading"})})},y=function(e){var t=e.author,s=e.date,a=e.description,c=e.title,n=e.imageurl,r=e.url,i=e.source;return Object(h.jsxs)("div",{className:"card my-2 hower ",children:[Object(h.jsx)("div",{style:{position:"absolute",justifyContent:"flex-end",right:"0",display:"flex"},children:Object(h.jsx)("span",{className:" badge rounded-pill bg-danger",children:i})}),Object(h.jsx)("img",{src:n||"https://image.shutterstock.com/image-vector/good-news-banner-colorful-paper-260nw-1162094869.jpg",className:"card-img-top",alt:"..."}),Object(h.jsxs)("div",{className:"card-body ",children:[Object(h.jsxs)("h5",{className:"card-title ",children:[c,"..."]}),Object(h.jsxs)("p",{className:"card-text cart-desc ",children:[a.replace(/\s+/g," ").trim(),"..."]}),Object(h.jsx)("p",{className:"card-text date_time",children:Object(h.jsxs)("small",{className:"text-muted",children:["By ",t?t.slice(0,13):"unKnown"," on ",new Date(s).toGMTString()]})}),Object(h.jsx)("a",{href:r,target:"_blank",rel:"noreferrer",className:"btn btn-dark",children:"More"})]})]})},v=(s(24),s(14)),f=function(e){var t=function(){var t=Object(x.a)(u.a.mark((function t(){var s,a,c;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e.setProgress(10),s="https://newsapi.org/v2/top-headlines?country=in&apiKey=".concat(e.apiKey," &page=").concat(l," &pageSize=").concat(e.pageSize,"&category=").concat(e.category),m(!0),t.next=6,fetch(s);case 6:return a=t.sent,e.setProgress(70),t.next=10,a.json();case 10:c=t.sent,console.log(c),"error"===c.status?m(!0):(r(c.articles),P(c.totalResults),m(!1)),e.setProgress(100),t.next=19;break;case 16:t.prev=16,t.t0=t.catch(0),console.log("err",t.t0);case 19:case"end":return t.stop()}}),t,null,[[0,16]])})));return function(){return t.apply(this,arguments)}}();Object(a.useEffect)((function(){document.title="".concat(z(e.category)," - NewsMonkey"),t()}),[]);var s=Object(a.useState)([]),c=Object(g.a)(s,2),n=c[0],r=c[1],i=Object(a.useState)(1),o=Object(g.a)(i,2),l=o[0],j=o[1],b=Object(a.useState)(!0),p=Object(g.a)(b,2),d=p[0],m=p[1],f=Object(a.useState)(0),N=Object(g.a)(f,2),S=N[0],P=N[1],z=function(e){return e.charAt(0).toUpperCase()+e.slice(1)},K=function(){var t=Object(x.a)(u.a.mark((function t(){var s,a,c;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s="https://newsapi.org/v2/top-headlines?country=in&apiKey=".concat(e.apiKey," &page=").concat(l+1," &pageSize=").concat(e.pageSize,"&category=").concat(e.category),j(l+1),t.next=4,fetch(s);case 4:return a=t.sent,t.next=7,a.json();case 7:c=t.sent,r(n.concat(c.articles)),P(c.totalResults);case 10:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("h1",{className:"text-center my-4",children:["Today ",z(e.category)," Headlines"]}),d&&Object(h.jsx)(O,{}),Object(h.jsx)(v.a,{dataLength:n.length,next:K,hasMore:n.length!==S,loader:Object(h.jsx)(O,{}),children:Object(h.jsx)("div",{className:"container",children:Object(h.jsx)("div",{className:"row",children:!d&&n.map((function(e,t){return Object(h.jsx)("div",{className:"col-sm-12 col-md-6 col-lg-4  ",children:Object(h.jsx)(y,{title:""!==e.title?e.title.slice(0,45):"",imageurl:e.urlToImage,description:e.description?e.description.slice(0,80):"",url:e.url,author:e.author,date:e.publishedAt,source:e.source.name})},e.url+t)}))})})})]})};f.defaultProps={country:"in",pageSize:8,category:"general"};var N=f,S=s(2),P=s(16),z=function(e){Object(l.a)(s,e);var t=Object(j.a)(s);function s(){var e;Object(i.a)(this,s);for(var a=arguments.length,c=new Array(a),n=0;n<a;n++)c[n]=arguments[n];return(e=t.call.apply(t,[this].concat(c))).pageSize=10,e.apiKey="cd45d9c0cc2c4df5bc5bb720529ba442",e.state={progress:0},e.setProgress=function(t){e.setState({progress:t})},e}return Object(o.a)(s,[{key:"render",value:function(){return Object(h.jsx)("div",{children:Object(h.jsxs)(b.a,{children:[Object(h.jsx)(p,{}),Object(h.jsx)(P.a,{color:"#f11946",height:2,progress:this.state.progress}),Object(h.jsxs)(S.c,{children:[Object(h.jsx)(S.a,{path:"/",exact:!0,element:Object(h.jsx)(N,{setProgress:this.setProgress,apiKey:this.apiKey,pageSize:this.pageSize,country:"in",category:"general"},"general")}),Object(h.jsx)(S.a,{path:"/business",exact:!0,element:Object(h.jsx)(N,{setProgress:this.setProgress,apiKey:this.apiKey,pageSize:this.pageSize,country:"in",category:"business"},"business")}),Object(h.jsx)(S.a,{path:"/entertainment",exact:!0,element:Object(h.jsx)(N,{setProgress:this.setProgress,apiKey:this.apiKey,pageSize:this.pageSize,country:"in",category:"entertainment"},"entertainment")}),Object(h.jsx)(S.a,{path:"/health",exact:!0,element:Object(h.jsx)(N,{setProgress:this.setProgress,apiKey:this.apiKey,pageSize:this.pageSize,country:"in",category:"health"},"health")}),Object(h.jsx)(S.a,{path:"/science",exact:!0,element:Object(h.jsx)(N,{setProgress:this.setProgress,apiKey:this.apiKey,pageSize:this.pageSize,country:"in",category:"science"},"science")}),Object(h.jsx)(S.a,{path:"/sports",exact:!0,element:Object(h.jsx)(N,{setProgress:this.setProgress,apiKey:this.apiKey,pageSize:this.pageSize,country:"in",category:"sports"},"sports")}),Object(h.jsx)(S.a,{path:"/technology",exact:!0,element:Object(h.jsx)(N,{setProgress:this.setProgress,apiKey:this.apiKey,pageSize:this.pageSize,country:"in",category:"technology"},"technology")})]})]})})}}]),s}(a.Component),K=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,26)).then((function(t){var s=t.getCLS,a=t.getFID,c=t.getFCP,n=t.getLCP,r=t.getTTFB;s(e),a(e),c(e),n(e),r(e)}))};r.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(z,{})}),document.getElementById("root")),K()}},[[25,1,2]]]);
//# sourceMappingURL=main.e2408ea7.chunk.js.map