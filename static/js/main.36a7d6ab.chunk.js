(this["webpackJsonpcrusade-log"]=this["webpackJsonpcrusade-log"]||[]).push([[0],[,,,,,,function(e,t,n){e.exports=n.p+"static/media/DeleteIcon.0d10f8f1.svg"},,,function(e,t,n){e.exports=n.p+"static/media/EditIcon.aa0b5ae2.svg"},function(e,t,n){e.exports=n.p+"static/media/CopyIcon.49972eac.svg"},function(e,t,n){e.exports=n(18)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a,r=n(0),l=n.n(r),c=n(8),u=n.n(c),i=(n(16),n(17),n(1)),o=n(2),m=n(3);function d(e){var t=0;e.outOfAction&&e.outOfAction.forEach((function(e){e.isActive&&e.xp&&(t+=e.xp)}));var n=e.battleParticipation+3*e.markedForGreatness+e.agendaXp+Math.floor(e.kills/3)-t;return n>0?n:0}function s(e){var t,n,a=e.battleHonours&&e.battleHonours.length>0?null===(t=e.battleHonours)||void 0===t||null===(n=t.map((function(e){return e.crusadePoints})))||void 0===n?void 0:n.reduce((function(e,t){return(null!==e&&void 0!==e?e:0)+t})):0,r=0;return e.outOfAction&&e.outOfAction.forEach((function(e){e.effect&&r--})),a+r}!function(e){e.BattleReady="Battle-Ready",e.Blooded="Blooded",e.BattleHardened="Battle-Hardened",e.Heroic="Heroic",e.Legendary="Legendary"}(a||(a={}));var f=function(e){function t(t,n){e.editUnit((function(e){var a=Object(o.a)({},e.outOfAction[n]);t(a),e.outOfAction.splice(n,1,a)}))}var n=[];return e.unit.outOfAction&&e.unit.outOfAction.length>0&&e.unit.outOfAction.forEach((function(e,a){e.isActive&&n.push(l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("input",{value:e.effect,onChange:function(e){return t((function(t){return t.effect=e.target.value}),a)},type:"textbox"})),l.a.createElement("td",null,l.a.createElement("input",{value:e.xp,onChange:function(e){return t((function(t){return t.xp=Number.parseInt(e.target.value)}),a)},type:"number"}))))})),l.a.createElement(l.a.Fragment,null,l.a.createElement("tr",null,l.a.createElement("td",null,"Out Of Action"),l.a.createElement("td",null,l.a.createElement("button",{onClick:function(t){t.preventDefault(),e.editUnit((function(e){var t=e.outOfAction;t||(t=[]),t.push({isActive:!0}),e.outOfAction=t}))},type:"button",style:{padding:"10px"}},"Add"))),l.a.createElement("tr",null,l.a.createElement("td",null,"Battle Scar"),l.a.createElement("td",null,"Experience Loss")),n)};var E=function(e){var t=d(e.unit)+1,n=Object(r.useState)(t-1),c=Object(i.a)(n,1)[0],u=0,s=e.unit.battleHonours.map((function(t){u+=t.crusadePoints;var n=t.effect;return(t.rank===a.Blooded&&c<6||t.rank===a.BattleHardened&&c<16||t.rank===a.Heroic&&c<31||t.rank===a.Legendary&&c<51)&&(n=l.a.createElement("input",{type:"text",value:t.effect,onChange:function(n){var a=Object(o.a)({},e.unit);a.battleHonours.find((function(e){return e.rank===t.rank})).effect=n.target.value,e.updateUnit(a)}})),l.a.createElement("tr",null,l.a.createElement("td",null,t.rank),l.a.createElement("td",null,n))}));return l.a.createElement("div",null,l.a.createElement("table",{className:"edittable-table"},l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("b",null,e.unit.name)),l.a.createElement("td",null,"Crusade Points: "," "+u)),l.a.createElement("tr",null,l.a.createElement("td",null,"Battle Participation:"),l.a.createElement("td",null,"".concat(e.unit.battleParticipation," + 1"))),l.a.createElement("tr",null,l.a.createElement("td",null,"Marked For Greatness:"),l.a.createElement("td",null,l.a.createElement("input",{type:"number",onChange:function(t){var n=Object(o.a)({},e.unit);n.markedForGreatness=Number.parseInt(t.target.value),e.updateUnit(n)},value:e.unit.markedForGreatness}))),l.a.createElement("tr",null,l.a.createElement("td",null,"Agenda:"),l.a.createElement("td",null,l.a.createElement("input",{type:"number",onChange:function(t){var n=Object(o.a)({},e.unit);n.agendaXp=Number.parseInt(t.target.value),e.updateUnit(n)},value:e.unit.agendaXp}))),l.a.createElement("tr",null,l.a.createElement("td",null,"Kills:"),l.a.createElement("td",null,l.a.createElement("input",{type:"number",onChange:function(t){var n=Object(o.a)({},e.unit);n.kills=Number.parseInt(t.target.value),e.updateUnit(n)},value:e.unit.kills}))),l.a.createElement("tr",null,l.a.createElement("td",null,"Total Experience:"),l.a.createElement("td",null,t)),s,l.a.createElement(f,{unit:e.unit,editUnit:function(t){var n=Object(o.a)({},e.unit,{outOfAction:Object(m.a)(e.unit.outOfAction||[])});t(n),e.updateUnit(n)}}))))};var p=function(e){var t=Object(r.useState)(e.crusadeArmy.units),n=Object(i.a)(t,2),c=n[0],u=n[1],s=Object(r.useState)(1),f=Object(i.a)(s,2),p=f[0],v=f[1],b=c.map((function(t,n){if(e.selectedUnitIndexes.includes(n))return l.a.createElement(E,{unit:t,updateUnit:function(e){return function(e,t){var n=Object(m.a)(c),r=d(e)+1;e.battleHonours.findIndex((function(e){return e.rank===a.Blooded}))<0&&r>=6?e.battleHonours.push({crusadePoints:e.powerLevel>=11?2:1,effect:"",rank:a.Blooded}):e.battleHonours.findIndex((function(e){return e.rank===a.BattleHardened}))<0&&r>=16?e.battleHonours.push({crusadePoints:e.powerLevel>=11?2:1,effect:"",rank:a.BattleHardened}):e.battleHonours.findIndex((function(e){return e.rank===a.Heroic}))<0&&r>=31?e.battleHonours.push({crusadePoints:e.powerLevel>=11?2:1,effect:"",rank:a.Heroic}):e.battleHonours.findIndex((function(e){return e.rank===a.Legendary}))<0&&r>=51&&e.battleHonours.push({crusadePoints:e.powerLevel>=11?2:1,effect:"",rank:a.Legendary}),n.splice(t,1,e),u(n)}(e,n)}})}));return l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",null,"Fill Post Game Stats"),l.a.createElement("table",{className:"edittable-table"},l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"Requisition Points:"),l.a.createElement("td",null,l.a.createElement("input",{type:"number",onChange:function(e){return v(Number.parseInt(e.target.value))},value:p}))))),b,l.a.createElement("div",{className:"button-container"},l.a.createElement("button",{onClick:e.goBack},"Back"),l.a.createElement("button",{className:"primary",onClick:function(){var t=Object(o.a)({},e.crusadeArmy);t.units=c,c.forEach((function(e){return e.battleParticipation++})),e.updateArmy(t)}},"Save")))};var v=function(e){var t=Object(r.useState)([]),n=Object(i.a)(t,2),a=n[0],c=n[1],u=Object(r.useState)(),o=Object(i.a)(u,2),d=o[0],s=o[1],f=e.crusadeArmy.units.map((function(e,t){return l.a.createElement("div",{className:"read-only-display-item",onClick:function(){return function(e){var t=[];t=a.includes(e)?a.filter((function(t){return t!==e})):[].concat(Object(m.a)(a),[e]),c(t)}(t)}},l.a.createElement("input",{type:"checkbox",onChange:function(){},checked:a.includes(t)}),l.a.createElement("span",null,e.name),l.a.createElement("span",null,e.powerLevel+" ","PL"))})),E=0;return e.crusadeArmy.units.map((function(e,t){a.includes(t)&&(E+=e.powerLevel)})),d?l.a.createElement(p,{crusadeArmy:e.crusadeArmy,selectedUnitIndexes:a,goBack:function(){return s(!1)},updateArmy:e.updateArmy}):l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",null,"Select Battle Roster"),l.a.createElement("p",null,"Selected Power Level:"," "+E),l.a.createElement("div",{className:"report-units expand"},f),l.a.createElement("div",{className:"button-container"},l.a.createElement("button",{onClick:e.goBack},"Back"),l.a.createElement("button",{className:"primary",onClick:function(){return s(!0)}},"Continue")))},b=n(6),g=n.n(b);var y=function(e){var t=Object(r.useState)(""===e.unit.name),n=Object(i.a)(t,1)[0],c=Object(r.useState)(e.unit),u=Object(i.a)(c,2),s=u[0],E=u[1];function p(t){t.preventDefault(),t.stopPropagation(),e.saveUnit(s)}function v(e){var t=Object(o.a)({},s,{battleHonours:Object(m.a)(s.battleHonours),outOfAction:Object(m.a)(s.outOfAction||[])});e(t);var n=d(t);t.battleHonours.findIndex((function(e){return e.rank===a.Blooded}))<0&&n>=6?t.battleHonours.push({crusadePoints:t.powerLevel>=11?2:1,effect:"",rank:a.Blooded}):t.battleHonours.findIndex((function(e){return e.rank===a.BattleHardened}))<0&&n>=16?t.battleHonours.push({crusadePoints:t.powerLevel>=11?2:1,effect:"",rank:a.BattleHardened}):t.battleHonours.findIndex((function(e){return e.rank===a.Heroic}))<0&&n>=31?t.battleHonours.push({crusadePoints:t.powerLevel>=11?2:1,effect:"",rank:a.Heroic}):t.battleHonours.findIndex((function(e){return e.rank===a.Legendary}))<0&&n>=51&&t.battleHonours.push({crusadePoints:t.powerLevel>=11?2:1,effect:"",rank:a.Legendary}),E(t)}var b=d(s),y=0,k=s.battleHonours.map((function(e){y+=e.crusadePoints;var t=l.a.createElement("input",{type:"text",value:e.effect,onChange:function(t){v((function(n){n.battleHonours.find((function(t){return t.rank===e.rank})).effect=t.target.value}))}});return l.a.createElement("tr",null,l.a.createElement("td",null,e.rank),l.a.createElement("td",null,t))}));return l.a.createElement("form",{onSubmit:p,id:"edit-unit"},l.a.createElement("div",{className:"header"},l.a.createElement("h1",null,(n?"Add Unit: ":"Edit Unit: ")+s.name,l.a.createElement("img",{className:"icon",src:g.a,alt:"Edit Links",onClick:function(){window.confirm("Are you sure you wish to delete this unit?")&&e.deleteUnit(e.unit)}}))),l.a.createElement("div",{className:"expand"},l.a.createElement("table",{className:"edittable-table"},l.a.createElement("tr",null,l.a.createElement("td",null,"Name:"),l.a.createElement("td",null,l.a.createElement("input",{onChange:function(e){return v((function(t){return t.name=e.target.value}))},type:"textbox",value:s.name}))),l.a.createElement("tr",null,l.a.createElement("td",null,"Power Level"),l.a.createElement("td",null,l.a.createElement("input",{onChange:function(e){return v((function(t){return t.powerLevel=Number.parseInt(e.target.value)}))},type:"number",value:s.powerLevel}))),l.a.createElement("tr",null,l.a.createElement("td",null,"Crusade Points"),l.a.createElement("td",null,y)),l.a.createElement("tr",null,l.a.createElement("td",null,"Battle Participation:"),l.a.createElement("td",null,l.a.createElement("input",{type:"number",onChange:function(e){return v((function(t){return t.battleParticipation=Number.parseInt(e.target.value)}))},value:s.battleParticipation}))),l.a.createElement("tr",null,l.a.createElement("td",null,"Marked For Greatness:"),l.a.createElement("td",null,l.a.createElement("input",{type:"number",onChange:function(e){return v((function(t){return t.markedForGreatness=Number.parseInt(e.target.value)}))},value:s.markedForGreatness}))),l.a.createElement("tr",null,l.a.createElement("td",null,"Agenda:"),l.a.createElement("td",null,l.a.createElement("input",{type:"number",onChange:function(e){return v((function(t){return t.agendaXp=Number.parseInt(e.target.value)}))},value:s.agendaXp}))),l.a.createElement("tr",null,l.a.createElement("td",null,"Kills:"),l.a.createElement("td",null,l.a.createElement("input",{type:"number",onChange:function(e){return v((function(t){return t.kills=Number.parseInt(e.target.value)}))},value:s.kills}))),l.a.createElement("tr",null,l.a.createElement("td",null,"Total Experience:"),l.a.createElement("td",null,b)),k,l.a.createElement(f,{unit:s,editUnit:v}))),l.a.createElement("div",{className:"button-container"},l.a.createElement("button",{onClick:e.goBack,type:"button"},"Back"),l.a.createElement("button",{className:"primary",onClick:p,type:"submit"},"Save")))},k=n(9),h=n.n(k);var O=function(e){return l.a.createElement("div",{className:"header"},l.a.createElement("h1",null,e.headerText,l.a.createElement("img",{className:"icon",src:h.a,alt:"Edit Links",onClick:e.onEdit})),l.a.createElement("div",null,l.a.createElement("div",{className:"heading-sub-header"},l.a.createElement("b",null,e.powerLevel+" "),"PL"),l.a.createElement("div",{className:"heading-sub-header"},l.a.createElement("b",null,e.crusadePoints+" "),"CP")))};var A=function(e){var t=Object(r.useState)(!1),n=Object(i.a)(t,2),a=n[0],c=n[1];if(a)return l.a.createElement(y,{deleteUnit:e.deleteUnit,goBack:function(){return c(!1)},unit:e.unit,saveUnit:function(t){e.saveUnit(t),c(!1)}});var u=d(e.unit),o=s(e.unit),m=e.unit.battleHonours.map((function(e){return l.a.createElement("tr",null,l.a.createElement("td",null,e.rank),l.a.createElement("td",null,e.effect))})),f=[];return e.unit.outOfAction&&e.unit.outOfAction.length>0&&(f.push(l.a.createElement("tr",null,l.a.createElement("td",null,"Out Of Action"),l.a.createElement("td",null))),e.unit.outOfAction.forEach((function(e){if(e.isActive){var t=e.effect?"Battle Scar":"Experience Loss";f.push(l.a.createElement("tr",null,l.a.createElement("td",null,t),l.a.createElement("td",null,e.effect||"-"+e.xp)))}}))),l.a.createElement(l.a.Fragment,null,l.a.createElement(O,{crusadePoints:o,headerText:e.unit.name,powerLevel:e.unit.powerLevel,onEdit:function(){return c(!0)}}),l.a.createElement("div",{className:"expand"},l.a.createElement("table",{className:"edittable-table"},l.a.createElement("tr",null,l.a.createElement("td",null,"Battle Participation:"),l.a.createElement("td",null,e.unit.battleParticipation)),l.a.createElement("tr",null,l.a.createElement("td",null,"Marked For Greatness:"),l.a.createElement("td",null,e.unit.markedForGreatness)),l.a.createElement("tr",null,l.a.createElement("td",null,"Agenda:"),l.a.createElement("td",null,e.unit.agendaXp)),l.a.createElement("tr",null,l.a.createElement("td",null,"Kills:"),l.a.createElement("td",null,e.unit.kills)),l.a.createElement("tr",null,l.a.createElement("td",null,"Total Experience:"),l.a.createElement("td",null,u)),m,f)),l.a.createElement("div",{className:"button-container"},l.a.createElement("button",{onClick:e.goBack,type:"button"},"Back")))};var N=n(10),j=n.n(N);var w=function(e){var t=Object(r.useState)(""===e.crusadeArmy.name),n=Object(i.a)(t,1)[0],a=Object(r.useState)(e.crusadeArmy),c=Object(i.a)(a,2),u=c[0],m=c[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement("form",{onSubmit:function(){return e.saveArmy(u)},id:"edit-army"},l.a.createElement("div",{className:"header"},l.a.createElement("h1",null,(n?"Add Army: ":"Edit Army: ")+u.name,l.a.createElement("img",{className:"icon",src:g.a,alt:"Edit Links",onClick:function(){window.confirm("Are you sure you wish to delete this army?")&&e.handleDeleteArmy()}}))),l.a.createElement("div",{className:"expand"},l.a.createElement("table",{className:"edittable-table"},l.a.createElement("tr",null,l.a.createElement("td",null,"Name:"),l.a.createElement("td",null,l.a.createElement("input",{onChange:function(e){return function(e){var t=Object(o.a)({},u);e(t),m(t)}((function(t){return t.name=e.target.value}))},type:"textbox",value:u.name}))),l.a.createElement("tr",null,l.a.createElement("td",null,"Copy from Clipboard:"),l.a.createElement("td",null,l.a.createElement("img",{className:"icon",src:j.a,alt:"Edit Links",onClick:function(){return function(e){if(navigator.clipboard){var t=JSON.stringify(e);navigator.clipboard.writeText(t).then((function(){window.alert("Copied to clipboard")})).catch((function(){window.alert("Can't copy to clipboard")}))}else window.alert("Can't copy to clipboard")}(e.crusadeArmy)}}))),l.a.createElement("tr",null,l.a.createElement("td",{colSpan:2},l.a.createElement("textarea",{style:{width:"calc(100% - 8px)"},onChange:function(e){var t=JSON.parse(e.target.value);t.id=u.id,m(t)},value:JSON.stringify(u)}))))),l.a.createElement("div",{className:"button-container"},l.a.createElement("button",{onClick:e.goBack,type:"button"},"Back"),l.a.createElement("button",{className:"primary",onClick:function(){return e.saveArmy(u)},type:"submit"},"Save"))))};var C=function(e){var t=Object(r.useState)(),n=Object(i.a)(t,2),c=n[0],u=n[1],m=Object(r.useState)(),d=Object(i.a)(m,2),f=d[0],E=d[1],p=Object(r.useState)(),b=Object(i.a)(p,2),g=b[0],y=b[1],k=Object(r.useState)(),h=Object(i.a)(k,2),N=h[0],j=h[1];function C(t){e.updateArmy(t),y(!1),E(!1)}Object(r.useEffect)((function(){var t=e.crusadeArmy.units.map((function(e){var t,n,r=null!==(t=null===(n=e.battleHonours[e.battleHonours.length-1])||void 0===n?void 0:n.rank)&&void 0!==t?t:a.BattleReady,c=s(e);return l.a.createElement("tr",{className:"read-only-display-item",onClick:function(){return u(e)}},l.a.createElement("td",null,e.name),l.a.createElement("td",{style:{whiteSpace:"nowrap"}},r),l.a.createElement("td",null,c))}));j(t)}),[e.crusadeArmy,c,g]);var x=0,B=0;if(e.crusadeArmy.units.forEach((function(e){x+=s(e),B+=e.powerLevel})),f)return l.a.createElement(w,{crusadeArmy:e.crusadeArmy,goBack:function(){return E(!1)},handleDeleteArmy:function(){return e.deleteArmy(e.crusadeArmy)},saveArmy:C});if(g)return l.a.createElement(v,{crusadeArmy:e.crusadeArmy,goBack:function(){return y(!1)},updateArmy:C});if(c)return l.a.createElement(A,{deleteUnit:function(t){var n=Object(o.a)({},e.crusadeArmy),a=n.units.findIndex((function(e){return e.id===t.id}));a>=0&&n.units.splice(a,1),e.updateArmy(n),u(void 0)},goBack:function(){return u(void 0)},saveUnit:function(t){var n=Object(o.a)({},e.crusadeArmy),a=n.units.findIndex((function(e){return e.id===t.id}));a>=0?n.units.splice(a,1,t):n.units.push(t),e.updateArmy(n),u(t)},unit:c});var S=null;return 0!==(null===N||void 0===N?void 0:N.length)&&(S=l.a.createElement("table",{className:"army-roster-units"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Name"),l.a.createElement("th",null,"Rank"),l.a.createElement("th",null,"CP"))),N)),l.a.createElement(l.a.Fragment,null,l.a.createElement(O,{crusadePoints:x,headerText:e.crusadeArmy.name,powerLevel:B,onEdit:function(){return E(!0)}}),l.a.createElement("div",{className:"army-roster-content"},S),l.a.createElement("div",{className:"button-container"},l.a.createElement("button",{onClick:e.goBack},"Back"),l.a.createElement("button",{onClick:function(){var t={id:e.crusadeArmy.units.length,agendaXp:0,battleHonours:[],battleParticipation:0,crusadePoints:0,kills:0,markedForGreatness:0,name:"",notes:"",outOfAction:[],powerLevel:0};u(t)}},"Add"),l.a.createElement("button",{className:"primary",onClick:function(){return y(!0)}},"Log")))};var x=function(){var e=Object(r.useState)(),t=Object(i.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)(),u=Object(i.a)(c,2),o=u[0],m=u[1],d=Object(r.useState)(),f=Object(i.a)(d,2),E=f[0],p=f[1],v=Object(r.useState)(),b=Object(i.a)(v,2),g=b[0],y=b[1];function k(e){var t=JSON.parse(window.localStorage.getItem("crusadeArmies")||"[]"),n=t.findIndex((function(t){return t.id===e.id}));n>=0?t.splice(n,1,e):t.push(e),window.localStorage.setItem("crusadeArmies",JSON.stringify(t)),m(t);var a=t.find((function(t){return t.id===e.id}));p(a)}function h(e){var t=JSON.parse(window.localStorage.getItem("crusadeArmies")||"[]"),n=t.findIndex((function(t){return t.id===e.id}));n>=0&&t.splice(n,1),window.localStorage.setItem("crusadeArmies",JSON.stringify(t)),m(t),p(void 0)}return Object(r.useEffect)((function(){var e=JSON.parse(window.localStorage.getItem("crusadeArmies")||"[]");m(e)}),[]),Object(r.useEffect)((function(){if(o){var e=o.map((function(e){var t=0,n=0;return e.units.forEach((function(e){t+=s(e),n+=e.powerLevel})),l.a.createElement("div",{className:"armies-list-display",onClick:function(){return p(e)}},l.a.createElement("h2",null,e.name),l.a.createElement("span",null,n+" PL"),l.a.createElement("span",null,t+" CP"))}));y(e)}}),[o]),n?l.a.createElement(w,{crusadeArmy:n,handleDeleteArmy:function(){return h(n)},goBack:function(){return a(void 0)},saveArmy:k}):E?l.a.createElement(C,{deleteArmy:h,crusadeArmy:E,goBack:function(){return p(void 0)},updateArmy:k}):l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",null,"Crusade Armies"),l.a.createElement("div",{className:"expand"},g),l.a.createElement("div",{className:"button-container"},l.a.createElement("button",{onClick:function(){var e,t={name:"",id:null!==(e=null===o||void 0===o?void 0:o.length)&&void 0!==e?e:0,units:[]};a(t)},className:"primary"},"Add")))};var B=function(){return l.a.createElement("div",{className:"app"},l.a.createElement(x,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(B,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[11,1,2]]]);
//# sourceMappingURL=main.36a7d6ab.chunk.js.map