(this["webpackJsonpcurrency-app"]=this["webpackJsonpcurrency-app"]||[]).push([[0],{11:function(e,t,n){e.exports={button:"Main_button__1CguC",exchangeBlock:"Main_exchangeBlock__4jye9",mainTitle:"Main_mainTitle__2hncg",mainResult:"Main_mainResult__2eJEk"}},16:function(e,t,n){e.exports={button:"CurrentCourse_button__1VqnK",courseTitle:"CurrentCourse_courseTitle__3xnbB",currentCurrency:"CurrentCourse_currentCurrency__1r_Q9"}},30:function(e,t,n){e.exports={myBtn:"MyButton_myBtn__xcxkS"}},41:function(e,t,n){},42:function(e,t,n){},72:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(14),a=n.n(r),u=(n(41),n(3)),s=n(21),i=(n(42),n(15)),o=n(2),j=n(36),l=n(30),b=n.n(l),d=n(1),O=["children","myClass"],h=function(e){var t=e.children,n=e.myClass,c=Object(j.a)(e,O);return Object(d.jsx)("button",Object(u.a)(Object(u.a)({},c),{},{className:[n,b.a.myBtn].join(" "),children:t}))},x=n(16),p=n.n(x),f=function(e){var t=Object.assign({},e);return Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{className:p.a.courseTitle,children:"Current exchange rate:"}),Object(d.jsxs)("div",{className:p.a.currentCurrency,children:[Object(d.jsx)("div",{children:"EUR"}),Object(d.jsxs)("div",{children:["= ",t.currency]}),Object(d.jsx)("div",{children:" RUB"})]}),Object(d.jsx)(h,{myClass:p.a.button,onClick:function(){return t.history.goBack()},children:"Go back"})]})},C=function(e){var t=Object.assign({},e);return Object(d.jsx)("input",Object(u.a)({type:"text",className:"form-control",id:"usr"},t))},m=n(11),v=n.n(m),g=function(e){var t=e.inputValue,n=e.setInputValue,c=e.getCurrentCourse,r=e.result;return Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{className:v.a.mainTitle,children:"Currency converter \u20ac \ud83d\udc49 \u20bd"}),Object(d.jsxs)("div",{className:v.a.exchangeBlock,children:[Object(d.jsx)(C,{placeholder:"Amount in EUR (15 EUR in RUB or 15)",onChange:function(e){return n(e.target.value)},value:t,onKeyDown:function(e){return"Enter"===e.code?c():null}}),Object(d.jsx)(h,{onClick:function(){return c()},myClass:v.a.button,children:"Convert"})]}),Object(d.jsxs)("div",{className:v.a.mainResult,children:["= ",r," RUB"]}),Object(d.jsx)(i.b,{to:"/test",children:Object(d.jsx)(h,{children:"Current rate"})})]})},_=n(10),y=n(33),R=n.n(y),B="http://api.exchangeratesapi.io/v1/latest?access_key=".concat("6c9b2a3f98c838445b926f7c5349a15a"),k="EXCHANGE-CURRENCY",E={count:0},N=function(){return function(e){R.a.get(B).then((function(t){return e((n=t.data.rates.RUB,{type:k,payload:n}));var n})).catch((function(e){return console.log(e,"Error")}))}};var T=function(){var e=Object(c.useState)(""),t=Object(s.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(0),j=Object(s.a)(a,2),l=j[0],b=j[1],O=Object(_.b)(),h=Object(_.c)((function(e){return e.exchangeReducer.count}));Object(c.useEffect)((function(){O(N())}),[O]);var x=function(){var e=n.replace(/[^0-9]/g,"");return b(e*h)};return Object(d.jsx)(i.a,{children:Object(d.jsx)("div",{className:"App",children:Object(d.jsx)("div",{className:"App__wrapper",children:Object(d.jsxs)(o.d,{children:[Object(d.jsx)(o.b,{path:"/main",render:function(){return Object(d.jsx)(g,{inputValue:n,setInputValue:r,result:l,getCurrentCourse:x})}}),Object(d.jsx)(o.b,{exact:!0,path:"/test",render:function(e){return Object(d.jsx)(f,Object(u.a)(Object(u.a)({getRes:l},e),{},{currency:h}))}}),Object(d.jsx)(o.a,{to:"/main"})]})})})})},U=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,73)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,u=t.getTTFB;n(e),c(e),r(e),a(e),u(e)}))},M=n(8),w=n(34),S=n(35),V=Object(M.combineReducers)({exchangeReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;return t.type===k?Object(u.a)(Object(u.a)({},e),{},{count:e.count+t.payload}):e}}),A=Object(M.createStore)(V,Object(w.composeWithDevTools)(Object(M.applyMiddleware)(S.a)));n(71);a.a.render(Object(d.jsx)(_.a,{store:A,children:Object(d.jsx)(T,{})}),document.getElementById("root")),U()}},[[72,1,2]]]);
//# sourceMappingURL=main.de58a446.chunk.js.map