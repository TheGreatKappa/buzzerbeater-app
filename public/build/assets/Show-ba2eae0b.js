import{W as F,r as T,j as t,a as e,n as O}from"./app-6f881c3b.js";import{A as P}from"./AuthenticatedLayout-ed6de0c0.js";import{P as B}from"./Pagination-5fbe35c3.js";import"./ApplicationLogo-f4531a8c.js";import"./transition-d3fe222f.js";function M(w){const{matchStatistics:f}=F().props,[b,j]=T.useState([]);let N="",k="",_=0,z=0,S="";T.useEffect(()=>{f&&j(f.data)},[f]);const u=b.reduce((a,{team:r,player:s,game:d,fga:l,fgm:c,fg3a:o,fg3m:n,fta:p,ftm:h,pts:m,min:y,reb:x,ast:g})=>(a[r.id]||(a[r.id]={name:r.full_name,habitat:r.id===d.home_team_id?"home":"away",score:r.id===d.home_team_id?d.home_team_score:d.visitor_team_score,match_date:new Date(d.date).toLocaleDateString(),players:[],total:{fga:0,fgm:0,fg3a:0,fg3m:0,fta:0,ftm:0,pts:0,min:0,reb:0,ast:0}}),a[r.id].players.push({...s,fga:l,fgm:c,fg3a:o,fg3m:n,fta:p,ftm:h,pts:m,min:y,reb:x,ast:g}),a[r.id].total.fga+=l,a[r.id].total.fgm+=c,a[r.id].total.fg3a+=o,a[r.id].total.fg3m+=n,a[r.id].total.fta+=p,a[r.id].total.ftm+=h,a[r.id].total.pts+=m,a[r.id].total.min+=y,a[r.id].total.reb+=x,a[r.id].total.ast+=g,a),{}),i=Object.values(u).find(a=>a.habitat==="home"),v=Object.values(u).find(a=>a.habitat==="away");return typeof i<"u"&&typeof v<"u"&&(N=i.name,k=v.name,_=i.score,z=v.score,S=i.match_date),t(P,{auth:w.auth,errors:w.errors,header:t("div",{className:"justify-center items-center grid grid-rows-3",children:[e("h2",{className:"font-semibold text-xl text-gray-800 leading-tight dark:text-gray-200 text-center",children:"Mérkőzés részletei"}),e("div",{className:" text-gray-500 dark:text-gray-300 text-center m-1",children:S}),t("div",{className:" text-gray-500 dark:text-gray-300 text-center m-1",children:[N," ",_," - ",z," ",k]})]}),children:[e(O,{title:`${N} - ${k}`}),e("div",{className:"py-12",children:e("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8",children:e("div",{className:"bg-white overflow-hidden shadow-sm sm:rounded-lg dark:bg-slate-700",children:e("div",{className:"py-6",children:e("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8",children:Object.values(u).map(({name:a,players:r,total:s})=>t("div",{className:"relative overflow-x-auto shadow-md sm:rounded-lg mb-6",children:[e("h2",{className:"font-bold p-3 dark:text-gray-300",children:a}),t("table",{className:"w-full text-sm text-left text-gray-500 dark:text-gray-400 p-2 bg:text-gray-400",children:[e("thead",{className:"text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400",children:t("tr",{children:[e("th",{scope:"col",className:"px-6 py-3",children:"Név"}),e("th",{scope:"col",className:"px-6 py-3",children:"Játékpercek"}),e("th",{scope:"col",className:"px-6 py-3",children:"Dobóhatékonyság"}),e("th",{scope:"col",className:"px-6 py-3",children:"Triplák"}),e("th",{scope:"col",className:"px-6 py-3",children:"Büntetők"}),e("th",{scope:"col",className:"px-6 py-3",children:"Lepattanók"}),e("th",{scope:"col",className:"px-6 py-3",children:"Asszisztok"}),e("th",{scope:"col",className:"px-6 py-3",children:"Pontok"})]})}),t("tbody",{children:[r.filter(({min:d})=>parseInt(d)>0).sort((d,l)=>l.pts-d.pts).map(({id:d,first_name:l,last_name:c,fga:o,fgm:n,fg3a:p,fg3m:h,fta:m,ftm:y,pts:x,reb:g,ast:A,min:D})=>t("tr",{className:"bg-white border-b dark:bg-gray-600 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-600",children:[t("th",{scope:"row",className:"px-6 py-4",children:[l,"  ",c]}),e("td",{className:"px-6 py-4",children:parseInt(D)}),t("td",{className:"px-6 py-4",children:[n," - ",o]}),t("td",{className:"px-6 py-4",children:[h," - ",p]}),t("td",{className:"px-6 py-4",children:[y," - ",m]}),e("td",{className:"px-6 py-4",children:g}),e("td",{className:"px-6 py-4",children:A}),e("td",{className:"px-6 py-4",children:x})]},d)),t("tr",{className:"bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600",children:[e("th",{scope:"row",className:"px-6 py-4",children:"Összesen"}),e("td",{className:"px-6 py-4 font-bold"}),t("td",{className:"px-6 py-4 font-bold",children:[s.fgm," - ",s.fga]}),t("td",{className:"px-6 py-4 font-bold",children:[s.fg3m," - ",s.fg3a]}),t("td",{className:"px-6 py-4 font-bold",children:[s.ftm," - ",s.fta]}),e("td",{className:"px-6 py-4 font-bold",children:s.reb}),e("td",{className:"px-6 py-4 font-bold",children:s.ast}),e("td",{className:"px-6 py-4 font-bold",children:s.pts})]}),t("tr",{className:"bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600",children:[e("th",{scope:"row",className:"px-6 py-4",children:"Átlag"}),e("td",{className:"px-6 py-4 font-bold"}),t("td",{className:"px-6 py-4 font-bold",children:[(s.fgm/s.fga*100).toFixed(1),"%"]}),t("td",{className:"px-6 py-4 font-bold",children:[(s.fg3m/s.fg3a*100).toFixed(1),"%"]}),t("td",{className:"px-6 py-4 font-bold",children:[(s.ftm/s.fta*100).toFixed(1),"%"]}),e("td",{}),e("td",{}),e("td",{})]}),b.length===0&&e("tr",{children:e("td",{className:"px-6 py-4 border-t",colSpan:"4",children:"Az általad keresett mérkőzéshez nem találtunk részleteket."})})]})]}),e(B,{links:b.links})]},a))})})})})})]})}export{M as default};