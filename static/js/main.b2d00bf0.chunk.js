(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{36:function(e,a,t){e.exports=t(47)},47:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(16),c=t.n(r),o=t(15),m=t(5);t(17);var i=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"px-5 py-4 my-5"},l.a.createElement("h1",{className:"mb-4"},"React Router"),l.a.createElement("h4",{className:"mb-3"},l.a.createElement("b",{className:"text-primary"},"React Router")," is a standard routing library for React. When you need to navigate through a React application with multiple views, you\u2019ll need a router to manage the URLs. React Router takes care of that, keeping your application UI and the URL in sync."),l.a.createElement("h4",{className:"mb-2"},l.a.createElement("b",null,"React")," is a popular library for creating single-page applications that are rendered on the client side"),l.a.createElement("h4",null,"React makes it painless to create interactive UIs.")))};var s=function(){return l.a.createElement("div",{className:"px-5 py-4 my-5"},l.a.createElement("h1",{className:"mb-4"},"About React"),l.a.createElement("h4",{className:"mb-4"},l.a.createElement("b",{className:"text-primary"},"React")," is an open-source JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications"),l.a.createElement("h4",{className:"mb-4"},l.a.createElement("b",{className:"text-primary"},"Routing")," is the process of keeping the browser URL in sync with what\u2019s being rendered on the page. React Router lets you handle routing declaratively. The declarative routing approach allows you to control the data flow in your application"))},u=t(8),p=t(33);var E=function(){return l.a.createElement("div",{className:"px-5 py-4"},l.a.createElement(u.a,null,l.a.createElement(u.a.Group,{controlId:"formBasicName"},l.a.createElement(u.a.Label,null,"Name"),l.a.createElement(u.a.Control,{type:"text",placeholder:"Enter name"})),l.a.createElement(u.a.Group,{controlId:"formBasicEmail"},l.a.createElement(u.a.Label,null,"Email address"),l.a.createElement(u.a.Control,{type:"email",placeholder:"Enter email"}),l.a.createElement(u.a.Text,{className:"text-muted"},"We'll never share your email with anyone else.")),l.a.createElement(u.a.Group,{controlId:"formBasicmessage"},l.a.createElement(u.a.Label,null,"Feedback"),l.a.createElement(u.a.Control,{type:"tel",placeholder:"Enter feedback"})),l.a.createElement(u.a.Group,{controlId:"formBasicCheckbox"},l.a.createElement(u.a.Check,{type:"checkbox",label:"Check me out"})),l.a.createElement(p.a,{variant:"primary",type:"submit"},"Submit")))},d=t(7),h=t.n(d),b=t(21);function y(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement(b.a,{className:"mx-auto my-5 px-5"},l.a.createElement("h1",{className:"".concat(h.a.Title," mb-3")},e.user.title),l.a.createElement("h5",null,"Name: ",e.user.Name),l.a.createElement("h5",null,"Age: ",e.user.Age),l.a.createElement("h5",null,"DOB: ",e.user.DOB),l.a.createElement("h5",null,"City: ",e.user.City),l.a.createElement("h5",null,"State: ",e.user.State),l.a.createElement("h5",null,"Country: ",e.user.Country)))}var g=[{id:1,title:"User 1",Name:"Kajal",Age:21,DOB:"14 - 03 - 1998",City:"Vapi",State:"Gujarat",Country:"India"},{id:2,title:"User 2",Name:"Amit",Age:29,DOB:"14 - 03 - 1990",City:"Vapi",State:"Gujarat",Country:"India"},{id:3,title:"User 3",Name:"Abhishek",Age:22,DOB:"07 - 04 - 1997",City:"Vadodara",State:"Gujarat",Country:"India"},{id:4,title:"User 4",Name:"Pooja",Age:25,DOB:"18 - 12 - 1994",City:"Junagadh",State:"Gujarat",Country:"India"}];function f(){return l.a.createElement(l.a.Fragment,null,g.map((function(e){return l.a.createElement(y,{user:e,key:e.id})})))}function R(){var e=Object(m.f)().Id;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"pt-5"},void 0===e?l.a.createElement("h1",{className:"text-danger"},"You should pass user id as parameter"):l.a.createElement("h1",null,"Displaying user info with ID ",e)," "),g.filter((function(a){return JSON.stringify(a.id)===e})).map((function(e){return l.a.createElement(y,{user:e,key:e.id})})))}var N=t(35),v=t(18);function k(){return l.a.createElement(v.a,{collapseOnSelect:!0,expand:"lg",fixed:"top",className:"p-4 mb-5 ".concat(h.a.Navbar)},l.a.createElement(v.a.Brand,{className:"".concat(h.a.Brand," font-weight-bolder text-light")},l.a.createElement("h1",null,"React-Routing")),l.a.createElement(v.a.Toggle,{"aria-controls":"responsive-navbar-nav",className:"bg-light"}),l.a.createElement(v.a.Collapse,{id:"responsive-navbar-nav"},l.a.createElement(N.a,{className:"ml-auto font-weight-bold"},l.a.createElement(o.b,{to:"/",className:"".concat(h.a.Link," m-3"),id:"Home"},"Home"),l.a.createElement(o.b,{to:"/about-us",className:"".concat(h.a.Link," m-3")},"About Us"),l.a.createElement(o.b,{to:"/contact-us",className:"".concat(h.a.Link," m-3")},"Contact Us"),l.a.createElement(o.b,{to:"/get-info",className:"".concat(h.a.Link," m-3")},"Get Info"),l.a.createElement(o.b,{to:"/get-info-by-id",className:"".concat(h.a.Link," m-3")},"Get Info(id)"))))}function _(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"".concat(h.a.Footer," p-4")},l.a.createElement("p",{className:"my-auto"},"Author: Kajal Karmakar",l.a.createElement("br",null),l.a.createElement("a",{href:"mailto:kajal.karmakar@theonetechnologies.co.in"},"kajal.karmakar@theonetechnologies.co.in"))),l.a.createElement("p",{className:"".concat(h.a.Copy," ").concat(h.a.Footer," mb-0")},l.a.createElement("small",null,"Copyright \xa9 2020")))}var C=function(){return l.a.createElement(o.a,null,l.a.createElement("div",null,l.a.createElement(k,null),l.a.createElement("br",null),l.a.createElement(b.a,{className:"mt-5 pt-5 ".concat(h.a.DisplayDetails)},l.a.createElement(m.c,null,l.a.createElement(m.a,{exact:!0,path:"/"},l.a.createElement(i,null)),l.a.createElement(m.a,{path:"/about-us"},l.a.createElement(s,null)),l.a.createElement(m.a,{path:"/contact-us"},l.a.createElement(E,null)),l.a.createElement(m.a,{path:"/get-info"},l.a.createElement(f,null)),l.a.createElement(m.a,{path:"/get-info-by-id/:Id?"},l.a.createElement(R,null)))),l.a.createElement(_,null)))};var x=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(C,null))};c.a.render(l.a.createElement(x,null),document.getElementById("root"))},7:function(e,a,t){e.exports={"text-light":"ReactRouter_text-light__3RYuc",Navbar:"ReactRouter_Navbar__1iRgr",Brand:"ReactRouter_Brand__37g5e",header:"ReactRouter_header__1iAVC",Active:"ReactRouter_Active__GCVK6",Link:"ReactRouter_Link__13zV0",Footer:"ReactRouter_Footer__2ltHF",Copy:"ReactRouter_Copy__401XK",Title:"ReactRouter_Title__2tbK7",DisplayDetails:"ReactRouter_DisplayDetails__1SbtO"}}},[[36,1,2]]]);
//# sourceMappingURL=main.b2d00bf0.chunk.js.map