(this["webpackJsonpcovid19-tracker"]=this["webpackJsonpcovid19-tracker"]||[]).push([[0],{105:function(e,t,a){e.exports=a(213)},110:function(e,t,a){},115:function(e,t,a){e.exports=a.p+"static/media/cov-19.8f7675f4.png"},213:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(10),c=a.n(o),l=(a(110),a(50)),i=a(70),s=a.n(i),u=a(89),m=a(15),d=a(216),f=a(249),p=a(243),E=a(96),h=a(247),g=a(240),b=a(251),y=a(242),v=a(248),R=a(253),C=function(e){var t=e.country,n=e.onCountryChange,o=e.countries,c=e.handleDarkMode,l=e.darkMode,i=x(),s=o.sort((function(e,t){return e.name.toLowerCase()<t.name.toLowerCase()?-1:e.name.toLowerCase()>t.name.toLowerCase()?1:0}));return r.a.createElement(f.a,{className:i.container},r.a.createElement(f.a,{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center"},r.a.createElement("img",{className:i.image,src:a(115),width:"50",height:"50",alt:"Covid-19"}),r.a.createElement(g.a,{variant:"h4"},"Covid-19 Tracker")),r.a.createElement(f.a,{className:i.options},r.a.createElement(b.a,{checked:l,onChange:c}),r.a.createElement(y.a,null,r.a.createElement(v.a,{value:t,variant:"outlined",onChange:n},r.a.createElement(R.a,{value:"worldwide"},"Worldwide"),s.map((function(e){return r.a.createElement(R.a,{key:e.name,value:e.code},e.name)}))))))},x=Object(p.a)({container:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"20px"},image:{marginRight:"10px"},options:{display:"flex",flexDirection:"row",alignItems:"center"}}),O=a(244),j=a(245),D={BACKGROUND:"#424242",PRIMARY_GREEN:"#32965D",PRIMARY_RED:"#BD1E1E",SECONDARY_RED:"#500119",BACKGROUND_RED:"rgba(204, 16, 52, 0.5)",BORDER_RED:"#CC1034",PRIMARY_GRAY:"#6a5d5d",SECONDARY_GRAY:"#403a3a",BACKGROUND_LIGHT:"#f3f2f8"},w=function(e){var t=e.title,a=e.cases,n=e.total,o=e.onClick,c=e.type,l=k(),i={cases:D.PRIMARY_RED,recovered:D.PRIMARY_GREEN,deaths:D.SECONDARY_RED};return r.a.createElement(O.a,{onClick:o,className:l.InfoBoxCard},r.a.createElement(j.a,null,r.a.createElement(g.a,{className:l.InfoBoxCardText,color:"textSecondary"},t),r.a.createElement(g.a,{className:l.InfoBoxCardText,style:{color:i[c]},variant:"h5"},a),r.a.createElement(g.a,{color:"textSecondary"},n)))},k=Object(p.a)({InfoBoxCard:{flex:1,marginRight:"10px","&:last-child":{marginRight:0}},InfoBoxCardText:{fontWeight:600}}),I=a(93),N=a(42),A=a.n(N),S=function(e){return A()(e).format("0,0")},Y=function(e){return A()(e).format("+0.0a")},_={legend:{display:!1},elements:{point:{radius:0}},maintainAspectRatio:!1,tooltips:{mode:"index",intersect:!1,callbacks:{label:function(e){return t=e.value,A()(t).format("+0,0");var t}}},scales:{xAxes:[{type:"time",time:{format:"MM/DD/YY",tooltipFormat:"ll"}}],yAxes:[{gridLines:{display:!1},ticks:{callback:function(e){return t=e,A()(t).format("0a");var t}}}]}},B=function(e){var t=e.type,a=Object(n.useState)({}),o=Object(m.a)(a,2),c=o[0],l=o[1];return Object(n.useEffect)((function(){fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=90").then((function(e){return e.json()})).then((function(e){var a=function(e,t){var a,n=[];for(var r in e[t]){if(a){var o={x:r,y:e[t][r]-a};n.push(o)}a=e[t][r]}return n}(e,t);l(a)}))}),[t]),r.a.createElement(r.a.Fragment,null,r.a.createElement(g.a,{variant:"h6"},"Worldwide new cases"),r.a.createElement(f.a,null,(null===c||void 0===c?void 0:c.length)>0&&r.a.createElement(I.Line,{data:{datasets:[{backgroundColor:D.BACKGROUND_RED,borderColor:D.BORDER_RED,data:c}]},options:_})))},M=a(94),G=a(252),T=a(254),L=a(255),P=a(256),K=(a(212),{cases:{color:D.PRIMARY_RED,multiplier:600},recovered:{color:D.PRIMARY_GREEN,multiplier:1e3},deaths:{color:D.SECONDARY_RED,multiplier:1800}}),U=function(e){var t=e.mapCenter,a=e.mapZoom,n=e.countries,o=e.casesType,c=z();return r.a.createElement(f.a,{className:c.container},r.a.createElement(L.a,{className:c.map,style:{height:"100%"},center:t,zoom:a},r.a.createElement(P.a,{attribution:'&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"cases";return e.map((function(e){return r.a.createElement(G.a,{key:e.country,center:{lat:e.countryInfo.lat,lng:e.countryInfo.long},color:K[t].color,fillColor:K[t].color,fillOpacity:.4,radius:Math.sqrt(e[t])*K[t].multiplier},r.a.createElement(T.a,null,r.a.createElement(f.a,null,r.a.createElement(f.a,{style:Object(M.a)({backgroundImage:"url(".concat(e.countryInfo.flag,")")},W)}),r.a.createElement(g.a,{variant:"subtitle2"},e.country),r.a.createElement(g.a,{variant:"subtitle2"},"Cases: ",S(e.cases)),r.a.createElement(g.a,{variant:"subtitle2"},"Recovered: ",S(e.recovered)),r.a.createElement(g.a,{variant:"subtitle2"},"Deaths: ",S(e.deaths)))))}))}(n,o)))},z=Object(p.a)((function(e){return{container:{height:"350px",padding:"1rem",borderRadius:"20px",marginTop:"16px",boxShadow:"0 0 8px -4px rgba(0, 0, 0, 0.5)",backgroundColor:"light"!==e.palette.type?D.BACKGROUND:"#fff"},map:{height:"100%",borderRadius:"12px",zIndex:1}}})),W={height:"80px",width:"100%",backgroundSize:"contain",marginBottom:"5px",backgroundRepeat:"no-repeat"},F=function(e){var t=e.countries,a=e.type;return r.a.createElement(O.a,null,r.a.createElement(j.a,null,r.a.createElement(Z,{countries:t}),r.a.createElement(B,{type:a})))},H=function(e){var t=e.countryInfo,a=e.setDataType,n=J();return r.a.createElement(f.a,{className:n.container},r.a.createElement(w,{type:"cases",onClick:function(){return a("cases")},title:"Covid cases",cases:Y(t.todayCases),total:Y(t.cases)}),r.a.createElement(w,{type:"recovered",onClick:function(){return a("recovered")},title:"Recovered",cases:Y(t.todayRecovered),total:Y(t.recovered)}),r.a.createElement(w,{type:"deaths",onClick:function(){return a("deaths")},title:"Deaths",cases:Y(t.todayDeaths),total:Y(t.deaths)}))},J=Object(p.a)({container:{display:"flex",justifyContent:"space-between"}}),Z=function(e){var t=e.countries,a=q(),n=t.sort((function(e,t){return t.cases-e.cases}));return r.a.createElement(f.a,null,r.a.createElement(g.a,{variant:"h6"},"Live Cases by Country"),r.a.createElement(f.a,{className:a.table},r.a.createElement("table",null,r.a.createElement("tbody",null,n.map((function(e){return r.a.createElement("tr",{key:e.name,className:a.tr},r.a.createElement("td",{className:a.td},e.name),r.a.createElement("td",{className:a.td},r.a.createElement("strong",null,S(e.cases))))}))))))},q=Object(p.a)({table:{marginTop:"20px",marginBottom:"20px",overflowY:"scroll",height:"300px",backgroundColor:"#fff",color:D.PRIMARY_GRAY},tr:{display:"flex",justifyContent:"space-between","&:nth-of-type(odd)":{backgroundColor:D.BACKGROUND_LIGHT}},td:{padding:"0.5rem"}}),$="https://disease.sh/v3/covid-19",Q=a(246),V=function(e){var t=e.loading,a=X();return r.a.createElement(r.a.Fragment,null,t&&r.a.createElement("div",{className:a.container},r.a.createElement(Q.a,{className:a.loadingIndicator}),r.a.createElement(g.a,{className:a.text,variant:"h6"},"Loading...")))},X=Object(p.a)({container:{position:"absolute",backgroundColor:"rgba(66, 66, 66, 0.4)",top:0,left:0,right:0,bottom:0,alignItems:"center",justifyContent:"center",display:"flex",zIndex:2,flexDirection:"column"},loadingIndicator:{color:D.SECONDARY_GRAY},text:{color:D.SECONDARY_GRAY,marginTop:10}}),ee=function(){var e=Object(n.useState)([]),t=Object(m.a)(e,2),a=t[0],o=t[1],c=Object(n.useState)("worldwide"),l=Object(m.a)(c,2),i=l[0],p=l[1],g=Object(n.useState)({}),b=Object(m.a)(g,2),y=b[0],v=b[1],R=Object(n.useState)("cases"),x=Object(m.a)(R,2),O=x[0],j=x[1],D=Object(n.useState)({lat:34,lng:10}),w=Object(m.a)(D,2),k=w[0],I=w[1],N=Object(n.useState)(2),A=Object(m.a)(N,2),S=A[0],Y=A[1],_=Object(n.useState)([]),B=Object(m.a)(_,2),M=B[0],G=B[1],T=Object(n.useState)(!0),L=Object(m.a)(T,2),P=L[0],K=L[1],z=Object(n.useState)(!1),W=Object(m.a)(z,2),J=W[0],Z=W[1],q=te(),Q=Object(E.a)({palette:{type:P?"dark":"light"}});Object(n.useEffect)((function(){Z(!0),fetch($+"/countries").then((function(e){return e.json()})).then((function(e){var t=e.map((function(e){return{name:e.country,code:e.countryInfo.iso2,cases:e.cases}}));o(t),G(e)})),Z(!1)}),[]),Object(n.useEffect)((function(){X()}),[]);var X=function(){var e=Object(u.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Z(!0),e.next=3,fetch($+"/all");case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,v(a),Z(!1);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement(h.a,{theme:Q},r.a.createElement(d.a,{className:q.app},r.a.createElement(V,{loading:J}),r.a.createElement(f.a,{className:q.appLeftSide},r.a.createElement(C,{countries:a,country:i,onCountryChange:function(e){var t=e.target.value;"worldwide"!==t?(Z(!0),fetch($+"/countries"+"/".concat(t)).then((function(e){return e.json()})).then((function(e){p(t),v(e),I({lat:e.countryInfo.lat,lng:e.countryInfo.long}),Y(3)})),Z(!1)):(X(),p("worldwide"))},handleDarkMode:function(){K(!P)},darkMode:P}),r.a.createElement(H,{setDataType:function(e){j(e)},countryInfo:y}),r.a.createElement(U,{casesType:O,countries:M,mapCenter:k,mapZoom:S})),r.a.createElement(F,{countries:a,type:O})))},te=Object(p.a)((function(e){return{app:Object(l.a)({display:"flex",justifyContent:"space-evenly",flex:1,padding:"20px",height:"100vh"},e.breakpoints.down("sm"),{flexDirection:"column",height:"100%"}),appLeftSide:{flex:.9}}}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ee,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[105,1,2]]]);
//# sourceMappingURL=main.58a0ada2.chunk.js.map