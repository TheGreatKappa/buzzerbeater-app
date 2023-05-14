import{W as c,j as r,a as e,n as h,d}from"./app-343a820e.js";import{A as i}from"./AuthenticatedLayout-797437c3.js";import{P as n}from"./Pagination-8362fc0e.js";import"./ApplicationLogo-2944ff99.js";import"./transition-2c3d7764.js";function g(o){const{forums:t}=c().props;return console.log({forums:t}),r(i,{auth:o.auth,errors:o.errors,header:e("h2",{className:"font-semibold text-xl text-gray-800 leading-tight dark:text-gray-200",children:"Fórumok"}),children:[e(h,{title:"Fórumok"}),e("div",{className:"py-12",children:e("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8",children:r("div",{className:"relative overflow-x-auto shadow-md sm:rounded-lg",children:[e("div",{className:"m-2 p-2 text-right",children:e(d,{type:"button",href:route("forums.create"),className:"bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded",children:"Fórum hozzáadása"})}),r("table",{className:"w-full text-sm text-left text-gray-500 dark:text-gray-400",children:[e("thead",{className:"text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400",children:r("tr",{children:[e("th",{scope:"col",className:"px-6 py-3",children:"Név"}),e("th",{scope:"col",className:"px-6 py-3",children:"Slug"}),e("th",{scope:"col",className:"px-6 py-3",children:e("span",{className:"sr-only",children:"Edit"})})]})}),r("tbody",{children:[t.data.map(({id:l,name:s,slug:a})=>r("tr",{className:"bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600",children:[e("th",{scope:"row",className:"px-6 py-4",children:e(d,{href:`/forum/${a}`,className:"text-blue-500 hover:text-blue-700 dark:hover:text-indigo-300",children:s})}),e("td",{className:"px-6 py-4",children:a}),r("td",{className:"px-4 py-4 text-right",children:[e(d,{href:route("forums.edit",a),className:"font-medium bg-blue-500 hover:bg-blue-400 text-white py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded",children:"Szerkesztés"}),e(d,{href:route("forums.destroy",a),method:"delete",className:"ml-4 font-medium bg-red-500 hover:bg-red-400 text-white py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded",children:"Törlés"})]})]},l)),t.length===0&&e("tr",{children:e("td",{className:"px-6 py-4 border-t",colSpan:"4",children:"No contacts found."})})]})]}),e(n,{links:t.links})]})})})]})}export{g as default};