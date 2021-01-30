(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{13:function(e,t,c){},14:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c(1),i=c.n(r),s=c(6),a=c.n(s),o=c(2),l=c.n(o),u=c(3),j=c(5),d=(c(13),function(){return Object(n.jsx)("div",{className:"title",children:Object(n.jsx)("h1",{children:"Weather"})})}),h=function(e){var t=e.handleSubmit,c=e.handleType,r=e.tempType;return Object(n.jsxs)("div",{className:"options",children:[Object(n.jsx)("div",{className:"input",children:Object(n.jsx)("form",{onSubmit:function(e){e.preventDefault(),t(e)},children:Object(n.jsx)("input",{type:"text",name:"location",placeholder:"Search"})})}),Object(n.jsx)("button",{onClick:c,children:r})]})},p=function(e){var t,c=e.weather,r=e.opt;t="United States of America"===c.country?Object(n.jsxs)("h3",{children:[c.city," - USA"]}):Object(n.jsxs)("h3",{children:[c.city," - ",c.country]});var i="C"===r?c.tempC:c.tempF,s="C"===r?c.feelsLikeC:c.feelsLikeF;return c.city?Object(n.jsxs)("div",{className:"info",children:[Object(n.jsxs)("div",{className:"place-date",children:[Object(n.jsx)("div",{className:"place",children:t}),Object(n.jsx)("div",{className:"date",children:Object(n.jsx)("h3",{children:c.currentDate})})]}),Object(n.jsxs)("div",{className:"icon-temp-condition",children:[Object(n.jsx)("div",{className:"icon-container",children:Object(n.jsx)("img",{src:c.icon,alt:"icon"})}),Object(n.jsxs)("div",{className:"temp-condition",children:[Object(n.jsx)("h2",{id:"temp",children:i}),Object(n.jsx)("h3",{children:c.condition})]})]}),Object(n.jsxs)("div",{className:"humidity-wind",children:[Object(n.jsxs)("h3",{children:["Humidity: ",c.humidity]}),Object(n.jsxs)("h3",{children:["Wind: ",c.wind]})]}),Object(n.jsx)("div",{className:"feels-like",children:Object(n.jsxs)("h3",{children:["Feels like: ",s]})})]}):null},b=function(e){var t=e.split(/\D/g);return[t[2],t[1],t[0]].join("-")},m=function(){var e=Object(u.a)(l.a.mark((function e(t){var c,n,r,i,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=t.target.location.value,e.prev=1,e.next=4,fetch("https://api.weatherapi.com/v1/current.json?key=a5f5d927bbc64246a51205628200112&q=".concat(c),{mode:"cors"});case 4:return n=e.sent,e.next=7,n.json();case 7:return r=e.sent,i=r.location.localtime.split(" "),s={tempC:"".concat(r.current.temp_c,"\xb0 C"),tempF:"".concat(r.current.temp_f,"\xb0 F"),condition:r.current.condition.text,humidity:"".concat(r.current.humidity,"%"),wind:"".concat(r.current.wind_kph," Km/h"),country:r.location.country,city:r.location.name,feelsLikeC:"".concat(r.current.feelslike_c,"\xb0 C"),feelsLikeF:"".concat(r.current.feelslike_f,"\xb0 F"),icon:"https:".concat(r.current.condition.icon),currentDate:b(i[0]),currentTime:i[1]},e.abrupt("return",s);case 13:return e.prev=13,e.t0=e.catch(1),e.abrupt("return",e.t0);case 16:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t){return e.apply(this,arguments)}}(),f=function(){return Object(n.jsx)("div",{className:"footer",children:Object(n.jsx)("a",{href:"https://github.com/sebapkfd/Weather-app",target:"_blank",rel:"noreferrer",children:Object(n.jsx)("img",{src:"https://img.icons8.com/fluent-systems-filled/24/ffffff/github.png",alt:"Github",id:"Repo"})})})};var x=function(){var e=Object(r.useState)({}),t=Object(j.a)(e,2),c=t[0],i=t[1],s=Object(r.useState)("C"),a=Object(j.a)(s,2),o=a[0],b=a[1],x=function(){var e=Object(u.a)(l.a.mark((function e(t){var c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m(t);case 3:c=e.sent,i(c),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}();return Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)(d,{}),Object(n.jsx)(h,{handleSubmit:x,handleType:function(){b("C"===o?"F":"C")},tempType:o}),Object(n.jsx)(p,{weather:c,opt:o}),Object(n.jsx)(f,{})]})};a.a.render(Object(n.jsx)(i.a.StrictMode,{children:Object(n.jsx)(x,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.68a0dd31.chunk.js.map