import{a as e,_ as g,r as h,j as t,n as x,d as b}from"./app-6f881c3b.js";import{G as k}from"./GuestLayout-6c2809b9.js";import{T as i,I as d}from"./TextInput-b66563c3.js";import{I as c}from"./InputLabel-9b82e045.js";import{P as w}from"./PrimaryButton-6623b1b6.js";import"./ApplicationLogo-f4531a8c.js";function y({name:s,value:m,handleChange:r}){return e("input",{type:"checkbox",name:s,value:m,className:"rounded border-gray-300 text-indigo-600 shadow-sm focus:ring-indigo-500",onChange:l=>r(l)})}function B({status:s,canResetPassword:m}){const{data:r,setData:l,post:u,processing:p,errors:n,reset:f}=g({email:"",password:"",remember:""});h.useEffect(()=>()=>{f("password")},[]);const o=a=>{l(a.target.name,a.target.type==="checkbox"?a.target.checked:a.target.value)};return t(k,{children:[e(x,{title:"Bejelentkezés"}),s&&e("div",{className:"mb-4 font-medium text-sm text-green-600",children:s}),t("form",{onSubmit:a=>{a.preventDefault(),u(route("login"))},children:[t("div",{children:[e(c,{forInput:"email",value:"E-mail"}),e(i,{id:"email",type:"email",name:"email",value:r.email,className:"mt-1 block w-full",autoComplete:"email",isFocused:!0,handleChange:o}),e(d,{message:n.email,className:"mt-2"})]}),t("div",{className:"mt-4",children:[e(c,{forInput:"password",value:"Jelszó"}),e(i,{id:"password",type:"password",name:"password",value:r.password,className:"mt-1 block w-full",autoComplete:"current-password",handleChange:o}),e(d,{message:n.password,className:"mt-2"})]}),e("div",{className:"block mt-4",children:t("label",{className:"flex items-center",children:[e(y,{name:"remember",value:r.remember,handleChange:o}),e("span",{className:"ml-2 text-sm text-gray-600 dark:text-gray-200",children:"Emlékezz rám"})]})}),t("div",{className:"flex items-center justify-end mt-4",children:[m&&e(b,{href:route("password.request"),className:"underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:text-gray-300 dark:hover:text-gray-400",children:"Elfelejtetted a jelszavad?"}),e(w,{className:"ml-4",processing:p,children:"Bejelentkezés"})]})]})]})}export{B as default};