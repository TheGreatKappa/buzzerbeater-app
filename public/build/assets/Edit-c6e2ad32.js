import{W as g,_ as f,j as r,a as e,n as x}from"./app-343a820e.js";import{A as N}from"./AuthenticatedLayout-797437c3.js";import{T as o,I as l}from"./TextInput-0e7904da.js";import{I as d}from"./InputLabel-f100fee4.js";import{P as v}from"./PrimaryButton-f0517082.js";import"./ApplicationLogo-2944ff99.js";import"./transition-2c3d7764.js";function j(s){const{forum:t}=g().props;console.log(t);const{data:m,processing:c,errors:n,setData:u,put:p}=f({name:t.name||"",description:t.description||""}),i=a=>{u(a.target.name,a.target.type==="checkbox"?a.target.checked:a.target.value)},h=a=>{a.preventDefault(),p(route("forums.update",t.slug))};return r(N,{auth:s.auth,errors:s.errors,header:e("h2",{className:"font-semibold text-xl text-gray-800 leading-tight dark:text-gray-200",children:"Fórum szerkesztése"}),children:[e(x,{title:"Fórum szerkesztése"}),e("div",{className:"py-12",children:e("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8",children:e("div",{className:"max-w-md mx-auto bg-white m-2 p-6 dark:bg-gray-600 rounded",children:r("form",{onSubmit:h,children:[r("div",{children:[e(d,{forInput:"name",value:"Fórum neve"}),e(o,{id:"name",name:"name",value:m.name,className:"mt-1 block w-full",autoComplete:"name",isFocused:!0,handleChange:i,required:!0}),e(l,{message:n.name,className:"mt-2"})]}),r("div",{className:"mt-4",children:[e(d,{forInput:"description",value:"Leírás"}),e(o,{id:"description",name:"description",value:m.description,className:"mt-1 block w-full",autoComplete:"description",handleChange:i,required:!0}),e(l,{message:n.description,className:"mt-2"})]}),e("div",{className:"flex items-center justify-end mt-4",children:e(v,{className:"ml-4",processing:c,children:"Szerkesztés"})})]})})})})]})}export{j as default};
