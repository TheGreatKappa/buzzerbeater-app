import{a as e,j as r,d as a,W as N,F as d,n as b}from"./app-343a820e.js";import{P as h}from"./PrimaryButton-f0517082.js";import{G as w}from"./GuestLayout-b88e6947.js";import{A as k}from"./AuthenticatedLayout-797437c3.js";import{V as y}from"./Voting-3621b61d.js";import{S as z}from"./Sidebar-1d88a66a.js";import"./ApplicationLogo-2944ff99.js";import"./transition-2c3d7764.js";function j({forums:l}){return e("div",{className:"w-full bg-white shadow-sm rounded-b-md dark:bg-gray-200",children:e("ul",{role:"list",className:"divide-y divide-slate-300 dark:divide-slate-700",children:l.data.map(({id:i,slug:t,name:s,posts_count:n})=>e("li",{className:"px-4 py-4 dark:bg-gray-300",children:e("div",{className:"flex items-center space-x-4",children:r("div",{children:[e(a,{href:route("community.show",t),className:"font-semibold hover:text-blue-700",children:s}),r("span",{className:"ml-2",children:["Posztok (",n,")"]})]})})},i))})})}function H(l){const{posts:i,forums:t,recommended:s}=N().props,n=l.auth.user==null;return console.log(i),console.log(t),console.log(s),r(d,{children:[e(b,{title:"Főoldal"}),n?r(w,{children:[e("div",{children:r("p",{className:"text-center dark:text-gray-200",children:["Üdvözöllek a BuzzerBeater weboldalon!",e("br",{}),"Bejelentkezést vagy regisztrációt követően hozzáférsz az oldal tartalmához.",e("br",{})]})}),r("div",{className:"flex justify-evenly",children:[e(a,{href:route("login"),children:e(h,{className:"mt-4",children:"Bejelentkezés"})}),e(a,{href:route("register"),children:e(h,{className:"mt-4",children:"Regisztráció"})})]})]}):e(k,{auth:l.auth,errors:l.errors,children:r("section",{className:"flex flex-col md:flex-row m-2 p-2",children:[e("div",{className:"w-full md:w-8/12",children:i.data.map(({id:B,title:f,description:u,username:x,slug:c,upvotes:g,votes:m,forum_slug:o,comments:p,created_at:v})=>r("div",{className:"m-3 p-6 max-w-4xl bg-white overflow-hidden shadow-sm sm:rounded-lg dark:bg-gray-600",children:[e("div",{className:"w-auto",children:r("div",{className:"flex m-2 p-2 dark:text-gray-200",children:[e(y,{post:c,upvotes:g,votes:m.length>0?m[0].vote:0}),e("div",{className:"flex items-center justify-cente",children:r("span",{className:"ml-1",children:[x," posztja a ",e(a,{href:route("community.show",o),className:"hover:text-blue-700 dark:hover:text-indigo-300",children:o})," fórumon ",v]})})]})}),r("div",{className:"grow dark:text-gray-300",children:[e(a,{href:route("posts.show",[o,c]),className:"text-2xl font-bold ml-8 hover:text-blue-700 dark:hover:text-indigo-300",children:f}),e("p",{className:"ml-8",children:u}),e("div",{className:"flex m-2 p-2",children:r(a,{href:route("posts.show",[o,c]),className:"inline-flex items-center text-sm text-center px-2 py-3 ml-8 hover:text-blue-700 dark:hover:text-indigo-300",children:["Hozzászólások(",p,")"]})})]})]}))}),r("div",{className:"w-full md:w-4/12 p-4",children:[t.data.length>0?r(d,{children:[e("div",{className:" p-2 bg-slate-500 text-white shadow-sm rounded-t-md dark:bg-gray-600",children:e("h2",{children:"Legnépszerűbb fórumok"})}),e(z,{forums:t})]}):e(d,{}),s.data.length>0?r(d,{children:[e("div",{className:"p-2 bg-slate-500 text-white shadow-sm rounded-t-md dark:bg-gray-600 mt-4",children:e("h2",{children:"Ajánlott fórumok"})}),e(j,{forums:s})]}):e(d,{})]})]})})]})}export{H as default};