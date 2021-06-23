(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{115:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),r=c(12),s=c.n(r),o=(c(88),c(13)),i=c(18),l=c(15),j=c(32),d=c(2);var b=function(e){var t=Object(n.useState)(0),c=Object(o.a)(t,2),a=c[0],r=c[1];return Object(d.jsxs)("div",{children:[" ",Object(d.jsxs)(j.a,{activeIndex:a,onSelect:function(e,t){r(e)},style:{marginBottom:"20px"},children:[Object(d.jsxs)(j.a.Item,{style:{height:"400px"},children:[Object(d.jsx)("img",{className:"d-block w-100",src:"https://englishlive.ef.com/blog/wp-content/uploads/sites/2/2014/08/english-books.jpeg",alt:"First slide",style:{height:"400px"}}),Object(d.jsx)(j.a.Caption,{})]}),Object(d.jsxs)(j.a.Item,{style:{height:"400px"},children:[Object(d.jsx)("img",{className:"d-block w-100",src:"https://www.keepinspiring.me/wp-content/uploads/2020/02/a-room-without-books-body-without-soul-cicero-quote-min.jpg",alt:"Second slide",style:{height:"400px"}}),Object(d.jsx)(j.a.Caption,{})]}),Object(d.jsxs)(j.a.Item,{style:{height:"400px"},children:[Object(d.jsx)("img",{className:"d-block w-100",src:"https://www.writersdigest.com/.image/t_share/MTc4ODM0NDAwOTc5NDYxNjM5/72_of_the_best_quotes_about_writing.png",alt:"Third slide",style:{height:"400px"}}),Object(d.jsx)(j.a.Caption,{})]})]})]})},u=c(55),h=c(9),O=function(e,t){switch(t.type){case"GET_BOOKS":return Object(h.a)(Object(h.a)({},e),{},{books:t.BookList});case"ADDBOOK":return Object(h.a)(Object(h.a)({},e),{},{books:[].concat(Object(u.a)(e.books),[t.addBook])});case"COLOR":return Object(h.a)(Object(h.a)({},e),{},{color:!0});case"DELETE":return console.log("action of delete id",t.deleteBookId),Object(h.a)(Object(h.a)({},e),{},{books:Object(u.a)(e.books.filter((function(e){return e._id!==t.deleteBookId})))});case"BOOK_DETAILS":return Object(h.a)(Object(h.a)({},e),{},{SelectedBook:t.selectedBook});case"REGISTER":return Object(h.a)({},e);case"LOGIN":return Object(h.a)(Object(h.a)({},e),{},{isLoggedIn:!0,token:t.payload.token,user_name:t.payload.name});case"LOGOUT":return Object(h.a)(Object(h.a)({},e),{},{isLoggedIn:!1,token:"",user_name:""});case"USERS_LIST":return console.log(t.Users," Users List"),Object(h.a)(Object(h.a)({},e),{},{users:t.Users});case"SEARCH_BOOKS_BY_ID":return Object(h.a)(Object(h.a)({},e),{},{isSearched:!0,searchedBook:t.searchedBookById});case"SEARCH_BOOKS_BY_AUTHOR":return Object(h.a)(Object(h.a)({},e),{},{isSearched:!0,books:t.searchedBooksByAuthor});case"SEARCH_BOOKS_BY_TITLE":return Object(h.a)(Object(h.a)({},e),{},{isSearched:!0,books:t.searchedBooksByTitle});case"SEARCH_BOOKS_BY_RATING":return Object(h.a)(Object(h.a)({},e),{},{isSearched:!0,books:t.searchedBooksByRating});case"SEARCH_BOOKS_BY_PRICE":return Object(h.a)(Object(h.a)({},e),{},{isSearched:!0,books:t.searchedBooksByPrice});default:return e}},p=a.a.createContext({}),x=function(e){var t=Object(n.useReducer)(O,{},(function(){return{books:[],users:[],isLoggedIn:!1,token:"",SelectedBook:[],color:!1,formData:{}}})),c=Object(o.a)(t,2),a=c[0],r=c[1];return Object(d.jsx)(p.Provider,{value:{state:a,dispatch:r},children:e.children})},g=function(e){for(var t=e.rating,c=e.minof,n=4*(+t-+c)/(+e.outof-+c)+1,a=Math.floor(n),r=[],s=0;s<a;s++)r.push(Object(d.jsx)("i",{className:"fa fa-star"},s));return+n%1&&r.push(Object(d.jsx)("i",{className:"fa fa-star-half"},"final")),Object(d.jsx)("div",{children:r})},f=c(17),m=c.n(f),k=c(26),v=c(67),B=c(22),y=c.n(B),S=function e(){Object(v.a)(this,e),this.getAllBooks=function(){var e=Object(k.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.get("/api/books").then((function(e){t({type:"GET_BOOKS",BookList:e.data})})).catch((function(e){console.log(e.message)}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getBookById=function(){var e=Object(k.a)(m.a.mark((function e(t,c){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.get("/api/books/"+c).then((function(e){t({type:"BOOK_DETAILS",selectedBook:e.data})})).catch((function(e){console.log(e.message)}));case 2:case"end":return e.stop()}}),e)})));return function(t,c){return e.apply(this,arguments)}}(),this.addBooks=function(){var e=Object(k.a)(m.a.mark((function e(t,c){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="Bearer "+localStorage.getItem("login"),console.log("token from addbook",n),e.next=4,y.a.post("/api/books",c,{headers:{"Content-Type":"application/json",Authorization:n}});case 4:if(200!==e.sent.status){e.next=10;break}return t({type:"ADDBOOK",addBook:c}),e.abrupt("return",null);case 10:return e.abrupt("return","error");case 11:case"end":return e.stop()}}),e)})));return function(t,c){return e.apply(this,arguments)}}(),this.loginUser=function(){var e=Object(k.a)(m.a.mark((function e(t,c){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y.a.post("/api/users/login",c);case 3:n=e.sent,console.log("Response",n.data),localStorage.setItem("login",n.data),t({type:"LOGIN",payload:n.data}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),e.t0&&alert("Invalid Credentials");case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t,c){return e.apply(this,arguments)}}(),this.deleteBook=function(){var e=Object(k.a)(m.a.mark((function e(t,c){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="Bearer "+localStorage.getItem("login"),e.next=3,y.a.delete("/api/books/"+c,{headers:{"Content-Type":"application/json",Authorization:n}});case 3:e.sent,t({type:"DELETE",deleteBookId:c});case 5:case"end":return e.stop()}}),e)})));return function(t,c){return e.apply(this,arguments)}}(),this.registerUser=function(){var e=Object(k.a)(m.a.mark((function e(t,c){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.post("/api/users/register",t);case 2:n=e.sent,console.log("Response",n.data),console.log("Rsponse in resister",n.data),c({type:"REGISTER"});case 6:case"end":return e.stop()}}),e)})));return function(t,c){return e.apply(this,arguments)}}(),this.getUsers=function(){var e=Object(k.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.get("http://localhost:8060/users").then((function(e){t({type:"USERS_LIST",Users:e.data})})).catch((function(e){console.log(e.message)}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.searchBooks=function(){var e=Object(k.a)(m.a.mark((function e(t,c,n){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:"id"===c?y.a.get("/api/books/"+t).then((function(e){n({type:"SEARCH_BOOKS_BY_ID",searchedBookById:e.data})})).catch((function(e){console.log(e.message)})):"author"===c?y.a.get("/api/books/books/by/"+t).then((function(e){n({type:"SEARCH_BOOKS_BY_AUTHOR",searchedBooksByAuthor:e.data})})).catch((function(e){console.log(e.message)})):"title"===c?y.a.get("/api/books/by/title/"+t).then((function(e){n({type:"SEARCH_BOOKS_BY_TITLE",searchedBooksByTitle:e.data})})).catch((function(e){console.log(e.message)})):"rating"===c?y.a.get("/api/books/by/rating/"+t).then((function(e){n({type:"SEARCH_BOOKS_BY_RATING",searchedBooksByRating:e.data})})).catch((function(e){console.log(e.message)})):"price"===c&&y.a.get("/api/books/priced/0/"+t).then((function(e){n({type:"SEARCH_BOOKS_BY_PRICE",searchedBooksByPrice:e.data})})).catch((function(e){console.log(e.message)}));case 1:case"end":return e.stop()}}),e)})));return function(t,c,n){return e.apply(this,arguments)}}()},w=(c(51),function(e){return e.condition?e.children:null}),C=function(e){var t=Object(n.useContext)(p).state.SelectedBook;console.log(t);var c=new S,a=Object(n.useContext)(p).dispatch,r=Object(l.e)();return Object(d.jsx)("div",{children:Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("div",{className:"column1",children:Object(d.jsx)("img",{id:"imgDetails",src:t.cover,alt:t.title})}),Object(d.jsxs)("div",{className:"column2",children:[Object(d.jsx)("h2",{children:t.title}),Object(d.jsxs)("div",{className:"book-info",children:[Object(d.jsx)("p",{children:Object(d.jsxs)("strong",{children:["Author:",t.author]})}),Object(d.jsx)("p",{children:Object(d.jsxs)("strong",{children:["Rating:",t.rating]})}),Object(d.jsx)("p",{children:Object(d.jsxs)("strong",{children:["Price :\u20b9",t.price]})})]}),Object(d.jsx)("br",{}),Object(d.jsx)("p",{children:Object(d.jsx)("strong",{children:t.description})}),Object(d.jsx)(w,{condition:localStorage.getItem("login"),children:Object(d.jsx)("button",{id:"del-button",onClick:function(){c.deleteBook(a,t._id),r.push("/books")},children:"Delete"})})]})]})})},_=function(e){var t=Object(n.useState)(""),c=Object(o.a)(t,2),a=c[0],r=c[1],s=Object(n.useState)(""),i=Object(o.a)(s,2),l=i[0],j=i[1],b=Object(n.useContext)(p).dispatch;return Object(d.jsxs)("div",{className:"search-bar",children:[Object(d.jsxs)("select",{className:"select",onChange:function(e){j(e.target.value)},children:[Object(d.jsx)("option",{value:"text",children:"Select"}),Object(d.jsx)("option",{value:"id",children:"ID"}),Object(d.jsx)("option",{value:"author",children:"Author"}),Object(d.jsx)("option",{value:"title",children:"Title"}),Object(d.jsx)("option",{value:"rating",children:"Rating"}),Object(d.jsx)("option",{value:"price",children:"Price"})]}),Object(d.jsx)("input",{type:"text",name:"id",id:"st1",className:"search",required:!0,placeholder:"Enter here to search",onChange:function(e){r(e.target.value)}}),Object(d.jsx)("button",{id:"search-button",type:"submit",onClick:function(){return e.searchBooks(a,l,b)},children:"Search"})]})};var I=function(e){var t=Object(n.useContext)(p).state,c=Object(n.useContext)(p).dispatch,a=t.books,r=new S;return Object(n.useEffect)((function(){r.getAllBooks(c)}),[]),Object(d.jsxs)("div",{children:[Object(d.jsx)(_,{searchBooks:function(e,t,c){r.searchBooks(e,t,c)}}),a.map((function(e,t){return Object(d.jsxs)("div",{children:[Object(d.jsx)(i.c,{to:"/details/"+e._id,children:Object(d.jsxs)("div",{className:"book-card",id:e._id,onClick:function(){r.getBookById(c,e._id)},children:[Object(d.jsx)("br",{}),Object(d.jsx)("img",{id:"img",src:e.cover,alt:e.title}),Object(d.jsx)("h3",{children:e.title}),"Rating:",Object(d.jsx)("div",{className:"stars",children:Object(d.jsx)("span",{children:Object(d.jsx)(g,{rating:e.rating,outof:5,minof:1})})}),Object(d.jsx)("p",{className:"price",children:Object(d.jsxs)("strong",{children:["\u20b9",e.price]})})]})}),Object(d.jsx)(l.a,{path:"/details/"+e._id,component:C})]})}))]})};function R(e){var t=Object(n.useContext)(p),c=(t.state,t.dispatch),a=Object(n.useState)(""),r=Object(o.a)(a,2),s=r[0],i=r[1],j=Object(n.useState)(""),b=Object(o.a)(j,2),u=b[0],h=b[1],O=Object(n.useState)(""),x=Object(o.a)(O,2),g=x[0],f=x[1],m=Object(n.useState)(""),k=Object(o.a)(m,2),v=k[0],B=k[1],y=Object(n.useState)(""),w=Object(o.a)(y,2),C=w[0],_=w[1],I=Object(n.useState)(""),R=Object(o.a)(I,2),E=R[0],A=R[1],T=Object(l.e)(),L=new S;return Object(d.jsx)("div",{className:"book-form",children:Object(d.jsxs)("form",{className:"form-area",children:[Object(d.jsx)("h2",{children:"Add New Book"})," ",Object(d.jsx)("hr",{}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsxs)("div",{children:[Object(d.jsx)("label",{htmlFor:"title",children:"Title : "}),Object(d.jsx)("input",{type:"text",name:"title",placeholder:"Book title",value:s,onChange:function(e){i(e.target.value)},required:!0})]}),Object(d.jsx)("br",{}),Object(d.jsxs)("div",{children:[Object(d.jsx)("label",{htmlFor:"author",children:"Author : "}),Object(d.jsx)("input",{type:"text",name:"author",placeholder:"Book author",value:u,onChange:function(e){h(e.target.value)},required:!0})]}),Object(d.jsx)("br",{}),Object(d.jsxs)("div",{children:[Object(d.jsx)("label",{htmlFor:"price",children:"Price : "}),Object(d.jsx)("input",{type:"text",name:"price",placeholder:"Book price",value:g,onChange:function(e){f(e.target.value)},required:!0})]}),Object(d.jsx)("br",{}),Object(d.jsxs)("div",{children:[Object(d.jsx)("label",{htmlFor:"rating",children:"Rating : "}),Object(d.jsx)("input",{type:"text",name:"rating",placeholder:"Book rating",value:v,onChange:function(e){B(e.target.value)},required:!0})]}),Object(d.jsx)("br",{}),Object(d.jsxs)("div",{children:[Object(d.jsx)("label",{htmlFor:"description",children:"Description : "}),Object(d.jsx)("textarea",{name:"description",placeholder:"Description",value:C,onChange:function(e){_(e.target.value)},required:!0})]}),Object(d.jsx)("br",{}),Object(d.jsxs)("div",{children:[Object(d.jsx)("label",{htmlFor:"cover",children:"Cover : "}),Object(d.jsx)("input",{type:"text",name:"cover",placeholder:"Book cover",value:E,onChange:function(e){A(e.target.value)},required:!0})]}),Object(d.jsx)("br",{}),Object(d.jsx)("div",{children:Object(d.jsx)("button",{id:"add-button",type:"submit",onClick:function(){!function(){if(localStorage.getItem("login")||(c({type:"COLOR"}),T.push("/login?error=please login to add books")),""===s||""===u||""===g||""===v||""===C||""===E)console.log("enter all fields");else{var e={title:s,author:u,price:g,rating:v,description:C,cover:E};localStorage.getItem("login")?(L.addBooks(c,e),T.push("/books")):T.push("/login?error=please login to add books")}}()},children:"ADD"})}),Object(d.jsx)("br",{})]})})}var E=c(143),A=c(147),T=c(151),L=c(149),N=c(148),D=c(152),U=function(e){var t=Object(n.useState)(""),c=Object(o.a)(t,2),a=c[0],r=c[1],s=Object(n.useState)(""),i=Object(o.a)(s,2),j=i[0],b=i[1],u=Object(n.useState)(""),h=Object(o.a)(u,2),O=h[0],x=h[1],g=Object(n.useContext)(p).dispatch,f=Object(l.e)();var m=new S;return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(E.a,{children:Object(d.jsxs)(A.a,{elevation:10,style:{padding:20,height:"70vh",width:280,margin:"20px auto"},children:[Object(d.jsx)(E.a,{justify:"center",children:Object(d.jsx)("h2",{children:"Sign Up"})}),Object(d.jsx)(T.a,{label:"name",placeholder:"name",fullWidth:!0,required:!0,onChange:function(e){r(e.target.value)}}),Object(d.jsx)(T.a,{label:"Username",placeholder:"Enter username",fullWidth:!0,required:!0,onChange:function(e){b(e.target.value)}}),Object(d.jsx)(T.a,{label:"Password",placeholder:"Enter password",type:"password",fullWidth:!0,required:!0,onChange:function(e){x(e.target.value)}}),Object(d.jsx)(N.a,{control:Object(d.jsx)(D.a,{name:"checkedB",color:"primary"}),label:"Remember me"}),Object(d.jsx)(L.a,{type:"submit",color:"primary",variant:"contained",style:{margin:"8px 0"},fullWidth:!0,onClick:function(){!function(){var e={name:a,username:j,password:O};m.registerUser(e,g)}(),f.push("/")},children:"Sign Up"})]})})})},K=c(73),q=c(150),H=function(e){var t=Object(n.useState)(""),c=Object(o.a)(t,2),a=c[0],r=c[1],s=Object(n.useState)(""),i=Object(o.a)(s,2),j=i[0],b=i[1],u=Object(l.e)(),h=(Object(n.useContext)(p).state,Object(n.useContext)(p).dispatch);var O=new S;return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(E.a,{children:Object(d.jsxs)(A.a,{elevation:10,style:{padding:20,height:"70vh",width:280,margin:"40px auto"},children:[Object(d.jsxs)(E.a,{justify:"center",children:[Object(d.jsx)("h2",{children:"Sign In"}),Object(d.jsx)(w,{condition:window.location.href.indexOf("error")>-1,children:Object(d.jsx)("h3",{style:{color:"red"},children:"sign in to add book"})})]}),Object(d.jsx)(T.a,{label:"Username",placeholder:"Enter username",fullWidth:!0,required:!0,onChange:function(e){r(e.target.value)}}),Object(d.jsx)(T.a,{label:"Password",placeholder:"Enter password",type:"password",fullWidth:!0,required:!0,onChange:function(e){b(e.target.value)}}),Object(d.jsx)(N.a,{control:Object(d.jsx)(D.a,{name:"checkedB",color:"primary"}),label:"Remember me"}),Object(d.jsx)(L.a,{type:"submit",color:"primary",variant:"contained",style:{margin:"8px 0"},fullWidth:!0,onClick:function(){var e={username:a,password:j};O.loginUser(h,e),u.goBack()},children:"Sign in"}),Object(d.jsxs)(K.a,{children:[" Do you have an account ?",Object(d.jsx)(q.a,{onClick:function(){return u.push("/register")},children:"Register"})]})]})})})};var Y=function(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),c=(t[0],t[1],Object(n.useContext)(p)),a=c.state,r=c.dispatch;return Object(d.jsx)(i.a,{children:Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{children:"Book Management System"}),Object(d.jsxs)("ul",{className:"header",children:[Object(d.jsx)("li",{children:Object(d.jsx)(i.b,{to:"/",children:"Home"})}),Object(d.jsx)("li",{children:Object(d.jsx)(i.b,{to:"/books",children:"Book List"})}),Object(d.jsxs)("li",{children:[" ",Object(d.jsx)(i.b,{to:"/addbook",children:"Add Books"})," "]}),Object(d.jsxs)("li",{children:[" ",a.isLoggedIn?null:Object(d.jsx)(i.b,{to:"/login",children:"Login"})]}),Object(d.jsxs)("li",{children:["  ",a.isLoggedIn?Object(d.jsx)(i.b,{onClick:function(){localStorage.clear(),r({type:"LOGOUT"})},to:"/",children:" Logout"}):null]}),Object(d.jsx)(w,{condition:!a.isLoggedIn,children:Object(d.jsx)("li",{children:Object(d.jsx)(i.b,{to:"/register",children:"Register"})})})]}),Object(d.jsx)(l.a,{exact:!0,path:"/",component:b}),Object(d.jsx)(l.a,{path:"/books",component:I}),Object(d.jsx)(l.a,{exact:!0,path:"/addbook",component:R,children:Object(d.jsx)(R,{})}),Object(d.jsxs)(l.a,{path:"/login",children:[" ",Object(d.jsx)(H,{})]}),Object(d.jsx)(l.a,{path:"/details/:id",component:C}),Object(d.jsx)(l.a,{path:"/register",component:U})]})})};c(114);s.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(x,{children:Object(d.jsx)(Y,{})})}),document.getElementById("root"))},51:function(e,t,c){},88:function(e,t,c){}},[[115,1,2]]]);
//# sourceMappingURL=main.7e584bc3.chunk.js.map