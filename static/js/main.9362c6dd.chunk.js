(this["webpackJsonpcrusade-log"]=this["webpackJsonpcrusade-log"]||[]).push([[0],{101:function(e,t,a){e.exports=a(276)},106:function(e,t,a){},107:function(e,t,a){},276:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(96),c=a.n(l),o=(a(106),a(107),a(6)),u=a(7),i=a(11);function m(e){var t=0;e.outOfAction&&e.outOfAction.forEach((function(e){e.isActive&&e.xp&&(t+=e.xp)}));var a=e.battleParticipation+3*e.markedForGreatness+e.agendaXp+Math.floor(e.kills/3)-t;return a>0?a:0}function s(e){var t,a,n=e.warlordTrait?1:0,r=e.battleHonours&&e.battleHonours.length>0?null===(t=e.battleHonours)||void 0===t||null===(a=t.map((function(e){return e.crusadePoints})))||void 0===a?void 0:a.reduce((function(e,t){return(null!==e&&void 0!==e?e:0)+t})):0,l=0;return e.outOfAction&&e.outOfAction.forEach((function(e){e.battleScar&&l--})),n+r+l}var d=a(277),f=a(97),E=a(281);var v=function(e){var t=[];return e.nameEffects.forEach((function(e){t.push(r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a.Subtitle,{className:"mt-1 ml-2"},e.name),r.a.createElement(E.a.Text,{className:"ml-2"},e.effect)))})),r.a.createElement(d.a,{className:"mb-3"},r.a.createElement(f.a,null,r.a.createElement(E.a,null,r.a.createElement(E.a.Header,{className:"py-1"},e.header),t)))};var b,p=function(e){var t=Object(n.useState)(!1),a=Object(o.a)(t,2),l=a[0],c=a[1],u=m(e.unit),i=null;e.unit.warlordTrait&&(i=r.a.createElement(v,{header:"Warlord Trait",nameEffects:[e.unit.warlordTrait]}));var s=void 0;if(e.unit.battleHonours&&e.unit.battleHonours.length>0){var E=[];e.unit.battleHonours.forEach((function(e){e.battleTrait&&E.push(e.battleTrait)})),s=r.a.createElement(v,{header:"Battle Honours",nameEffects:E})}var b=void 0;if(e.unit.outOfAction&&e.unit.outOfAction.length>0){var p=[];e.unit.outOfAction.forEach((function(e){e.isActive&&e.battleScar&&p.push(e.battleScar)})),b=r.a.createElement(v,{header:"Battle Scars",nameEffects:p})}var y=null;return l&&(y=r.a.createElement(r.a.Fragment,null,r.a.createElement(d.a,{className:"mb-2"},r.a.createElement(f.a,null,"Battle Participation"),r.a.createElement(f.a,null,e.unit.battleParticipation)),r.a.createElement(d.a,{className:"mb-2"},r.a.createElement(f.a,null,"Marked For Greatness"),r.a.createElement(f.a,null,e.unit.markedForGreatness)),r.a.createElement(d.a,{className:"mb-2"},r.a.createElement(f.a,null,"Agenda"),r.a.createElement(f.a,null,e.unit.agendaXp)),r.a.createElement(d.a,{className:"mb-2"},r.a.createElement(f.a,null,"Kills"),r.a.createElement(f.a,null,e.unit.kills)))),r.a.createElement(r.a.Fragment,null,i,s,b,r.a.createElement(d.a,{className:"mb-2",onClick:function(){c(!l)}},r.a.createElement(f.a,null,"Total Experience"),r.a.createElement(f.a,null,u)),y)};!function(e){e.BattleReady="Battle-Ready",e.Blooded="Blooded",e.BattleHardened="Battle-Hardened",e.Heroic="Heroic",e.Legendary="Legendary"}(b||(b={}));var y=a(280),h=a(282);var g=function(e){function t(t){t.preventDefault(),e.editUnit((function(e){var t=e.outOfAction;t||(t=[]),t.push({isActive:!0}),e.outOfAction=t}))}function a(t,a){e.editUnit((function(e){var n=Object(u.a)({},e.outOfAction[a]);t(n),e.outOfAction.splice(a,1,n)}))}var n=[];return e.unit.outOfAction&&e.unit.outOfAction.length>0&&(n.push(r.a.createElement(d.a,{className:"mb-2"},r.a.createElement(f.a,null,"Battle Scar"),r.a.createElement(f.a,null,"Out Of Action"))),e.unit.outOfAction.forEach((function(e,t){var l;e.isActive&&n.push(r.a.createElement(d.a,{className:"mb-2"},r.a.createElement(f.a,{className:"pr-1"},r.a.createElement(y.a.Control,{type:"textbox",onChange:function(e){return a((function(t){return t.battleScar.effect=e.target.value}),t)},value:null===(l=e.battleScar)||void 0===l?void 0:l.effect,placeholder:"Name"})),r.a.createElement(f.a,{className:"pl-1"},r.a.createElement(y.a.Control,{type:"textbox",onChange:function(e){return a((function(t){return t.xp=Number.parseInt(e.target.value)}),t)},value:e.xp,placeholder:"Effect"}))))}))),r.a.createElement(K.Consumer,null,(function(e){return r.a.createElement(y.a.Group,{as:d.a,className:"mb-2",controlId:"formWarlordTrait"},r.a.createElement(f.a,null,r.a.createElement(d.a,{className:"mb-2"},r.a.createElement(f.a,null,r.a.createElement(y.a.Label,null,"Out Of Action")),r.a.createElement(f.a,null,r.a.createElement(h.a,{variant:"outline-primary",onClick:t,type:"button",block:!0,style:{borderColor:e,color:e}},"Add"))),n))}))};var C=function(e){return r.a.createElement(y.a.Group,{as:d.a,className:"mb-2",controlId:"form".concat(e.formName)},r.a.createElement(f.a,{xs:e.resetFirstColSpan?void 0:4},r.a.createElement(y.a.Label,null,e.formName)),r.a.createElement(f.a,null,r.a.createElement(y.a.Control,{type:e.inputType,onChange:e.onChange,value:e.value,placeholder:e.placeHolder||e.formName})))};var k=function(e){var t,a,n=void 0;return e.formName&&(n=r.a.createElement(d.a,null,r.a.createElement(f.a,null,r.a.createElement(y.a.Label,null,e.formName)))),r.a.createElement(y.a.Group,{as:d.a,className:"mb-2",controlId:"form".concat(e.formName)},r.a.createElement(f.a,null,n,r.a.createElement(d.a,null,r.a.createElement(f.a,{className:"pr-1"},r.a.createElement(y.a.Control,{type:"textbox",onChange:e.onNameChange,value:null===(t=e.nameEffect)||void 0===t?void 0:t.name,placeholder:"Name"})),r.a.createElement(f.a,{className:"pl-1"},r.a.createElement(y.a.Control,{type:"textbox",onChange:e.onEffectChange,value:null===(a=e.nameEffect)||void 0===a?void 0:a.effect,placeholder:"Effect"})))))};var O=function(e){var t=e.firstColumn;return e.label&&(t=r.a.createElement(y.a.Label,null,e.firstColumn)),r.a.createElement(d.a,{className:"mb-2"},r.a.createElement(f.a,null,t),r.a.createElement(f.a,null,e.secondColumn))};var N=function(e){var t=m(e.unit)+1,a=Object(n.useState)(t-1),l=Object(o.a)(a,1)[0],c=0,s=e.unit.battleHonours.map((function(t){var a;return c+=t.crusadePoints,t.rank===b.Blooded&&l<6||t.rank===b.BattleHardened&&l<16||t.rank===b.Heroic&&l<31||t.rank===b.Legendary&&l<51?r.a.createElement(k,{nameEffect:t.battleTrait,onEffectChange:function(a){var n=Object(u.a)({},e.unit),r=n.battleHonours.find((function(e){return e.rank===t.rank}));(null===r||void 0===r?void 0:r.battleTrait)||(r.battleTrait={}),r.battleTrait.effect=a.target.value,e.updateUnit(n)},onNameChange:function(a){var n=Object(u.a)({},e.unit),r=n.battleHonours.find((function(e){return e.rank===t.rank}));(null===r||void 0===r?void 0:r.battleTrait)||(r.battleTrait={}),r.battleTrait.name=a.target.value,e.updateUnit(n)},formName:t.rank}):r.a.createElement(O,{firstColumn:t.rank,label:!0,secondColumn:(null===(a=t.battleTrait)||void 0===a?void 0:a.effect)||""})}));return r.a.createElement(K.Consumer,null,(function(a){return r.a.createElement(d.a,null,r.a.createElement(f.a,null,r.a.createElement("h3",{className:"mt-3",style:{borderTop:"1px solid ".concat(a)}},e.unit.name),r.a.createElement(O,{firstColumn:"Crusade Points",label:!0,secondColumn:c}),r.a.createElement(O,{firstColumn:"Battle Participation",label:!0,secondColumn:"".concat(e.unit.battleParticipation," + 1")}),r.a.createElement(C,{resetFirstColSpan:!0,inputType:"number",onChange:function(t){var a=Object(u.a)({},e.unit);a.markedForGreatness=Number.parseInt(t.target.value),e.updateUnit(a)},formName:"Greatness",value:e.unit.markedForGreatness}),r.a.createElement(C,{resetFirstColSpan:!0,inputType:"number",onChange:function(t){var a=Object(u.a)({},e.unit);a.agendaXp=Number.parseInt(t.target.value),e.updateUnit(a)},formName:"Agenda",value:e.unit.agendaXp}),r.a.createElement(C,{resetFirstColSpan:!0,inputType:"number",onChange:function(t){var a=Object(u.a)({},e.unit);a.kills=Number.parseInt(t.target.value),e.updateUnit(a)},formName:"Kills",value:e.unit.kills}),r.a.createElement(O,{firstColumn:"Total Experience",label:!0,secondColumn:t}),s,r.a.createElement(g,{unit:e.unit,editUnit:function(t){var a=Object(u.a)(Object(u.a)({},e.unit),{},{outOfAction:Object(i.a)(e.unit.outOfAction||[])});t(a),e.updateUnit(a)}})))}))};var A=function(e){return r.a.createElement(K.Consumer,null,(function(t){return r.a.createElement(h.a,{variant:e.primary?"primary":"outline-primary",onClick:e.onClick,type:e.submit?"submit":"button",block:!0,style:{borderColor:e.color||t,color:e.primary?"white":e.color||t,backgroundColor:e.primary?e.color||t:"white"},size:e.small?void 0:"lg"},e.name)}))};var B=function(e){return r.a.createElement(d.a,{className:"mb-2"},e.tertiaryButtonOnClick&&e.tertiaryButtonName&&r.a.createElement(f.a,null,r.a.createElement(A,{color:e.color,name:e.tertiaryButtonName,onClick:e.tertiaryButtonOnClick})),r.a.createElement(f.a,null,r.a.createElement(A,{color:e.color,name:e.secondaryButtonName,onClick:e.secondaryButtonOnClick})),r.a.createElement(f.a,null,r.a.createElement(A,{color:e.color,name:e.primaryButtonName,onClick:e.primaryButtonOnClick,primary:!0,submit:!0})))};var T=function(e){var t=Object(n.useState)(e.crusadeArmy.units),a=Object(o.a)(t,2),l=a[0],c=a[1],s=Object(n.useState)(e.crusadeArmy.requisitionPoints?e.crusadeArmy.requisitionPoints+1:1),f=Object(o.a)(s,2),E=f[0],v=f[1],p=[];return l.forEach((function(t){var a;(null===(a=e.crusadeArmy.battleRosterUnitIds)||void 0===a?void 0:a.includes(t.id))&&p.push(r.a.createElement(N,{unit:t,updateUnit:function(e){return function(e,t){var a=Object(i.a)(l),n=m(e)+1;e.battleHonours.findIndex((function(e){return e.rank===b.Blooded}))<0&&n>=6?e.battleHonours.push({crusadePoints:e.powerLevel>=11?2:1,battleTrait:{effect:""},rank:b.Blooded}):e.battleHonours.findIndex((function(e){return e.rank===b.BattleHardened}))<0&&n>=16?e.battleHonours.push({crusadePoints:e.powerLevel>=11?2:1,battleTrait:{effect:""},rank:b.BattleHardened}):e.battleHonours.findIndex((function(e){return e.rank===b.Heroic}))<0&&n>=31?e.battleHonours.push({crusadePoints:e.powerLevel>=11?2:1,battleTrait:{effect:""},rank:b.Heroic}):e.battleHonours.findIndex((function(e){return e.rank===b.Legendary}))<0&&n>=51&&e.battleHonours.push({crusadePoints:e.powerLevel>=11?2:1,battleTrait:{effect:""},rank:b.Legendary}),a.splice(t,1,e),c(a)}(e,t.id)}}))})),r.a.createElement(r.a.Fragment,null,r.a.createElement(d.a,{className:"my-2 mx-1 header"},r.a.createElement("h2",null,"Fill Unit Stats")),r.a.createElement(y.a,null,r.a.createElement(C,{resetFirstColSpan:!0,formName:"RP",inputType:"number",onChange:function(e){return v(Number.parseInt(e.target.value))},value:E}),p,r.a.createElement(B,{primaryButtonName:"Save",primaryButtonOnClick:function(){var t=Object(u.a)({},e.crusadeArmy);t.units=l,l.forEach((function(e){return e.battleParticipation++})),t.battleRosterUnitIds=void 0,t.requisitionPoints=E,e.updateArmy(t)},secondaryButtonName:"Back",secondaryButtonOnClick:e.goBack})))},w=a(98),j=a.n(w);var P=function(e){var t,a=void 0;e.onEdit&&(a=r.a.createElement("img",{className:"icon",src:j.a,alt:"Edit Links",onClick:e.onEdit}));var n=null===(t=e.subHeaderInfo)||void 0===t?void 0:t.map((function(e){return r.a.createElement(d.a,null,r.a.createElement("b",null,e.value+" "),e.name)}));return r.a.createElement(d.a,{className:"my-2 mx-1 header"},r.a.createElement("h2",null,e.headerText,a),r.a.createElement(d.a,null,r.a.createElement(f.a,null,n)))};var x=function(e){var t,a=Object(n.useState)(),l=Object(o.a)(a,2),c=l[0],u=l[1],i=[];if(null===(t=e.crusadeArmy.battleRosterUnitIds)||void 0===t||t.forEach((function(t){var a=e.crusadeArmy.units.find((function(e){return e.id===t}));a&&(i.push(r.a.createElement(K.Consumer,null,(function(e){return r.a.createElement("h3",{className:"mt-3",style:{borderTop:"1px solid ".concat(e)}},a.name)}))),i.push(r.a.createElement(p,{unit:a,key:t})))})),c)return r.a.createElement(T,{crusadeArmy:e.crusadeArmy,goBack:function(){return u(!1)},updateArmy:e.updateArmy});var m=0,d=0;return e.crusadeArmy.units.map((function(t){var a;(null===(a=e.crusadeArmy.battleRosterUnitIds)||void 0===a?void 0:a.includes(t.id))&&(m+=t.powerLevel,d+=s(t))})),r.a.createElement(r.a.Fragment,null,r.a.createElement(P,{subHeaderInfo:[{name:"PL",value:m},{name:"CP",value:d},{name:"RP",value:e.crusadeArmy.requisitionPoints}],headerText:"Battle Roster"}),e.crusadeArmy.detachmentTrait&&r.a.createElement(v,{nameEffects:[e.crusadeArmy.detachmentTrait],header:"Detachment Trait"}),i,r.a.createElement(B,{primaryButtonName:"Continue",primaryButtonOnClick:function(){return u(!0)},secondaryButtonName:"Back",secondaryButtonOnClick:e.goBack}))};var S=function(e){var t=Object(n.useState)([]),a=Object(o.a)(t,2),l=a[0],c=a[1],m=e.crusadeArmy.units.map((function(e){return r.a.createElement(K.Consumer,null,(function(t){return r.a.createElement(y.a.Group,{onClick:function(){return function(e){var t=[];t=l.includes(e)?l.filter((function(t){return t!==e})):[].concat(Object(i.a)(l),[e]),c(t)}(e.id)},className:"mb-1"},r.a.createElement(y.a.Check,{type:"checkbox",className:"custom-control",color:t},r.a.createElement(y.a.Check.Input,{className:"custom-control-input mr-1",color:t,checked:l.includes(e.id),style:{position:"relative"}}),r.a.createElement(y.a.Check.Label,{className:"custom-control-label",children:"".concat(e.name," ").concat(e.powerLevel," PL"),style:{fontWeight:"unset"}})))}))})),f=0,E=0;return e.crusadeArmy.units.map((function(e){l.includes(e.id)&&(f+=e.powerLevel,E+=s(e))})),e.crusadeArmy.battleRosterUnitIds?r.a.createElement(x,{crusadeArmy:e.crusadeArmy,goBack:function(){var t=Object(u.a)({},e.crusadeArmy);t.battleRosterUnitIds=void 0,e.updateArmy(t)},updateArmy:e.updateArmy}):r.a.createElement(r.a.Fragment,null,r.a.createElement(d.a,{className:"my-2 mx-1 header"},r.a.createElement("h2",null,"Select Battle Roster")),r.a.createElement(O,{firstColumn:"Selected Power Level",secondColumn:f}),r.a.createElement(O,{firstColumn:"Selected Crusade Points",secondColumn:E}),r.a.createElement("p",null,"Selected Power Level:"," "+f),r.a.createElement(y.a,null,m),r.a.createElement(B,{primaryButtonName:"Continue",primaryButtonOnClick:function(){var t=Object(u.a)({},e.crusadeArmy);t.battleRosterUnitIds=l,e.updateArmy(t)},secondaryButtonName:"Back",secondaryButtonOnClick:e.goBack}))},L=a(40),H=a.n(L);var I=function(e){var t=Object(n.useState)(""===e.unit.name),a=Object(o.a)(t,1)[0],l=Object(n.useState)(e.unit),c=Object(o.a)(l,2),s=c[0],f=c[1];function E(t){t.preventDefault(),t.stopPropagation(),e.saveUnit(s)}function v(e){var t=Object(u.a)(Object(u.a)({},s),{},{battleHonours:Object(i.a)(s.battleHonours),outOfAction:Object(i.a)(s.outOfAction||[])});e(t);var a=m(t);t.battleHonours.findIndex((function(e){return e.rank===b.Blooded}))<0&&a>=6?t.battleHonours.push({crusadePoints:t.powerLevel>=11?2:1,battleTrait:{effect:""},rank:b.Blooded}):t.battleHonours.findIndex((function(e){return e.rank===b.BattleHardened}))<0&&a>=16?t.battleHonours.push({crusadePoints:t.powerLevel>=11?2:1,battleTrait:{effect:""},rank:b.BattleHardened}):t.battleHonours.findIndex((function(e){return e.rank===b.Heroic}))<0&&a>=31?t.battleHonours.push({crusadePoints:t.powerLevel>=11?2:1,battleTrait:{effect:""},rank:b.Heroic}):t.battleHonours.findIndex((function(e){return e.rank===b.Legendary}))<0&&a>=51&&t.battleHonours.push({crusadePoints:t.powerLevel>=11?2:1,battleTrait:{effect:""},rank:b.Legendary}),f(t)}var p=m(s),h=0,N=s.battleHonours.map((function(e,t){return h+=e.crusadePoints,r.a.createElement(k,{key:t,formName:e.rank,onNameChange:function(t){v((function(a){var n=a.battleHonours.find((function(t){return t.rank===e.rank}));(null===n||void 0===n?void 0:n.battleTrait)||(n.battleTrait={}),n.battleTrait.name=t.target.value}))},onEffectChange:function(t){v((function(a){var n=a.battleHonours.find((function(t){return t.rank===e.rank}));(null===n||void 0===n?void 0:n.battleTrait)||(n.battleTrait={}),n.battleTrait.effect=t.target.value}))},nameEffect:e.battleTrait})}));return r.a.createElement(y.a,{onSubmit:E,id:"edit-unit"},r.a.createElement(d.a,{className:"my-2 mx-1 header"},r.a.createElement("h2",null,a?"Adding Unit ":"Editting Unit ",r.a.createElement("img",{className:"icon",src:H.a,alt:"Edit Links",onClick:function(){window.confirm("Are you sure you wish to delete this unit?")&&e.deleteUnit(e.unit)}}))),r.a.createElement(C,{formName:"Name",inputType:"textbox",onChange:function(e){return v((function(t){return t.name=e.target.value}))},value:s.name}),r.a.createElement(C,{formName:"Power Level",inputType:"number",onChange:function(e){return v((function(t){return t.powerLevel=Number.parseInt(e.target.value)}))},value:s.powerLevel}),r.a.createElement(C,{formName:"Participation",inputType:"number",onChange:function(e){return v((function(t){return t.battleParticipation=Number.parseInt(e.target.value)}))},value:s.battleParticipation}),r.a.createElement(C,{formName:"Greatness",inputType:"number",onChange:function(e){return v((function(t){return t.markedForGreatness=Number.parseInt(e.target.value)}))},value:s.markedForGreatness}),r.a.createElement(C,{formName:"Agenda",inputType:"number",onChange:function(e){return v((function(t){return t.agendaXp=Number.parseInt(e.target.value)}))},value:s.agendaXp}),r.a.createElement(C,{formName:"Kills",inputType:"number",onChange:function(e){return v((function(t){return t.kills=Number.parseInt(e.target.value)}))},value:s.kills}),r.a.createElement(O,{label:!0,firstColumn:"Total Experience",secondColumn:p}),N,r.a.createElement(g,{unit:s,editUnit:v}),s.warlordTrait&&r.a.createElement(k,{formName:"Warlord Trait",onNameChange:function(e){return v((function(t){t.warlordTrait||(t.warlordTrait={}),t.warlordTrait.name=e.target.value}))},onEffectChange:function(e){return v((function(t){t.warlordTrait||(t.warlordTrait={}),t.warlordTrait.effect=e.target.value}))},nameEffect:s.warlordTrait}),r.a.createElement(O,{label:!0,firstColumn:"Crusade Points",secondColumn:h}),r.a.createElement(B,{primaryButtonName:"Save",primaryButtonOnClick:E,secondaryButtonName:"Back",secondaryButtonOnClick:e.goBack}))};var U=function(e){var t=Object(n.useState)(!1),a=Object(o.a)(t,2),l=a[0],c=a[1],u=Object(n.useMemo)((function(){return""===e.unit.name}),[]);if(l||u)return r.a.createElement(I,{deleteUnit:e.deleteUnit,goBack:function(){return u?e.goBack():c(!1)},unit:e.unit,saveUnit:function(t){e.saveUnit(t),c(!1),u&&e.goBack()}});var i=s(e.unit);return r.a.createElement(r.a.Fragment,null,r.a.createElement(P,{subHeaderInfo:[{name:"PL",value:i},{name:"CP",value:e.unit.powerLevel}],headerText:e.unit.name}),r.a.createElement(p,{unit:e.unit}),r.a.createElement(B,{primaryButtonName:"Edit",primaryButtonOnClick:function(){return c(!0)},secondaryButtonName:"Back",secondaryButtonOnClick:e.goBack}))};var F=a(99),R=a.n(F),q=a(100);var G=function(e){var t=Object(n.useState)(""===e.crusadeArmy.name),a=Object(o.a)(t,1)[0],l=Object(n.useState)(e.crusadeArmy),c=Object(o.a)(l,2),i=c[0],m=c[1];function s(e){var t=Object(u.a)({},i);e(t),m(t)}return r.a.createElement(r.a.Fragment,null,r.a.createElement(y.a,{onSubmit:function(){return e.saveArmy(i)}},r.a.createElement(d.a,{className:"my-2 mx-1 header"},r.a.createElement("h2",null,a?"Add Army":"Edit Army",r.a.createElement("img",{className:"icon",src:H.a,alt:"Edit Links",onClick:function(){window.confirm("Are you sure you wish to delete this army?")&&e.handleDeleteArmy()}}))),r.a.createElement(C,{formName:"Name",onChange:function(e){return s((function(t){return t.name=e.target.value}))},inputType:"textbox",value:i.name}),r.a.createElement(C,{formName:"Requisition Points",onChange:function(e){return s((function(t){return t.requisitionPoints=Number.parseInt(e.target.value)}))},inputType:"number",value:i.requisitionPoints}),r.a.createElement(C,{formName:"Max PL",onChange:function(e){return s((function(t){return t.maximumPowerLevel=Number.parseInt(e.target.value)}))},inputType:"number",value:i.maximumPowerLevel}),r.a.createElement(k,{formName:"Trait",onNameChange:function(e){return s((function(t){t.detachmentTrait||(t.detachmentTrait={}),t.detachmentTrait.name=e.target.value}))},nameEffect:i.detachmentTrait,onEffectChange:function(e){return s((function(t){t.detachmentTrait||(t.detachmentTrait={}),t.detachmentTrait.effect=e.target.value}))}}),r.a.createElement(d.a,{className:"mb-2"},r.a.createElement(f.a,null,r.a.createElement(q.CirclePicker,{width:"90vw",onChange:function(e){return s((function(t){return t.traitColor=e.hex}))},color:i.traitColor||"blue",colors:["#FF0000","#0000FF","#ebdb00","#6b6b6b","#00a00d"]}))),r.a.createElement(d.a,{className:"mb-2"},r.a.createElement(f.a,null,r.a.createElement(y.a.Label,null,"Copy from Clipboard")),r.a.createElement(f.a,null,r.a.createElement("img",{className:"icon",src:R.a,alt:"Edit Links",onClick:function(){return function(e){if(navigator.clipboard){var t=JSON.stringify(e);navigator.clipboard.writeText(t).then((function(){window.alert("Copied to clipboard")})).catch((function(){window.alert("Can't copy to clipboard")}))}else window.alert("Can't copy to clipboard")}(e.crusadeArmy)}}))),r.a.createElement(d.a,{className:"mb-2"},r.a.createElement(f.a,null,r.a.createElement(y.a.Control,{as:"textarea",rows:5,onChange:function(e){var t=JSON.parse(e.target.value);t.id=i.id,m(t)},value:JSON.stringify(i)}))),r.a.createElement(B,{primaryButtonName:"Save",primaryButtonOnClick:function(){return e.saveArmy(i)},secondaryButtonName:"Back",secondaryButtonOnClick:e.goBack,color:i.traitColor})))},J=a(278);var D=function(e){var t,a,l=Object(n.useState)(null!==(t=e.crusadeArmy.requisitionPoints)&&void 0!==t?t:0),c=Object(o.a)(l,2),m=c[0],s=c[1],E=Object(n.useState)(null!==(a=e.crusadeArmy.maximumPowerLevel)&&void 0!==a?a:0),v=Object(o.a)(E,2),b=v[0],p=v[1],h=Object(n.useState)([]),g=Object(o.a)(h,2),C=g[0],N=g[1],T=[r.a.createElement("option",{value:-1})];e.crusadeArmy.units.forEach((function(e){e.warlordTrait||T.push(r.a.createElement("option",{value:e.id},e.name))}));var w=[];return null===C||void 0===C||C.forEach((function(e,t){w.push(r.a.createElement(r.a.Fragment,null,r.a.createElement(d.a,{className:"mb-2"},r.a.createElement(f.a,{className:"pr-0"},r.a.createElement(y.a.Control,{onChange:function(a){var n=Object(i.a)(C);null===n||void 0===n||n.splice(t,1,Object(u.a)(Object(u.a)({},e),{},{id:Number.parseInt(a.target.value)})),N(n)},value:e.id,as:"select"},T)),r.a.createElement(f.a,null,r.a.createElement(A,{name:"Remove",small:!0,onClick:function(){var e=Object(i.a)(C);null===e||void 0===e||e.splice(t,1),N(e),s(m+1)}}))),r.a.createElement(k,{onNameChange:function(a){var n=Object(i.a)(C);e.nameEffect.name=a.target.value,null===n||void 0===n||n.splice(t,1,e),N(n)},onEffectChange:function(a){var n=Object(i.a)(C);e.nameEffect.effect=a.target.value,null===n||void 0===n||n.splice(t,1,e),N(n)},nameEffect:e.nameEffect})))})),r.a.createElement(r.a.Fragment,null,r.a.createElement(P,{headerText:"RP Spending"}),r.a.createElement(O,{firstColumn:"Requisition Points",secondColumn:m}),r.a.createElement(O,{firstColumn:"Maximum Power Level",secondColumn:b}),r.a.createElement(d.a,{className:"mb-2"},r.a.createElement(f.a,null,r.a.createElement(A,{onClick:function(){p(b-5),s(m+1)},name:"Undo"})),r.a.createElement(f.a,null,r.a.createElement(A,{onClick:function(){p(b+5),s(m-1)},name:"Increase Supply Limit"}))),r.a.createElement(d.a,{className:"mb-2"},r.a.createElement(f.a,null,r.a.createElement(A,{onClick:function(){var e=[].concat(Object(i.a)(C),[{id:-1,nameEffect:{}}]);s(m-1),N(e)},name:"Warlord Trait"}))),w,r.a.createElement(B,{secondaryButtonName:"Back",secondaryButtonOnClick:e.goBack,primaryButtonName:"Save",primaryButtonOnClick:function(){var t=Object(u.a)({},e.crusadeArmy);t.maximumPowerLevel=b,t.requisitionPoints=m,C.forEach((function(e){t.units.find((function(t){return t.id===e.id})).warlordTrait=e.nameEffect})),e.updateArmy(t),e.goBack()}}))};var W=function(e){var t=Object(n.useState)(),a=Object(o.a)(t,2),l=a[0],c=a[1],i=Object(n.useState)(),m=Object(o.a)(i,2),E=m[0],p=m[1],h=Object(n.useState)(),g=Object(o.a)(h,2),C=g[0],k=g[1],N=Object(n.useState)(),T=Object(o.a)(N,2),w=T[0],j=T[1],x=Object(n.useState)(),L=Object(o.a)(x,2),H=L[0],I=L[1];function F(t){e.updateArmy(t),k(!1),p(!1)}Object(n.useEffect)((function(){var t=e.crusadeArmy.units.map((function(e){var t,a,n=null!==(t=null===(a=e.battleHonours[e.battleHonours.length-1])||void 0===a?void 0:a.rank)&&void 0!==t?t:b.BattleReady;s(e);return r.a.createElement("tr",{key:e.id,className:"read-only-display-item",onClick:function(){return c(e)}},r.a.createElement("td",null,e.name),r.a.createElement("td",{style:{whiteSpace:"nowrap"}},n),r.a.createElement("td",null,e.powerLevel))}));I(t)}),[e.crusadeArmy,l,C]);var R=0,q=0;if(e.crusadeArmy.units.forEach((function(e){R+=s(e),q+=e.powerLevel})),E)return r.a.createElement(G,{crusadeArmy:e.crusadeArmy,goBack:function(){return p(!1)},handleDeleteArmy:function(){return e.deleteArmy(e.crusadeArmy)},saveArmy:F});if(C||e.crusadeArmy.battleRosterUnitIds)return r.a.createElement(S,{crusadeArmy:e.crusadeArmy,goBack:function(){return k(!1)},updateArmy:F});if(l)return r.a.createElement(U,{deleteUnit:function(t){var a=Object(u.a)({},e.crusadeArmy),n=a.units.findIndex((function(e){return e.id===t.id}));n>=0&&a.units.splice(n,1),e.updateArmy(a),c(void 0)},goBack:function(){return c(void 0)},saveUnit:function(t){var a=Object(u.a)({},e.crusadeArmy),n=a.units.findIndex((function(e){return e.id===t.id}));n>=0?a.units.splice(n,1,t):a.units.push(t),e.updateArmy(a),c(t)},unit:l});if(w)return r.a.createElement(D,{goBack:function(){return j(!1)},crusadeArmy:e.crusadeArmy,updateArmy:F});var W=null;0!==(null===H||void 0===H?void 0:H.length)&&(W=r.a.createElement(J.a,{striped:!0,bordered:!0,hover:!0},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"Rank"),r.a.createElement("th",null,"PL"))),r.a.createElement("tbody",null,H)));var X=void 0;return e.crusadeArmy.detachmentTrait&&(X=r.a.createElement(v,{header:"Detachment Trait",nameEffects:[e.crusadeArmy.detachmentTrait]})),r.a.createElement(r.a.Fragment,null,r.a.createElement(P,{subHeaderInfo:[{name:"PL",value:q},{name:"CP",value:R}],headerText:e.crusadeArmy.name,onEdit:function(){return p(!0)}}),r.a.createElement(d.a,{className:"mb-2"},r.a.createElement(f.a,null,r.a.createElement(y.a.Label,null,"Requisition Points:")," "+e.crusadeArmy.requisitionPoints),r.a.createElement(f.a,null,r.a.createElement(A,{name:"Spend",onClick:function(){return j(!0)}}))),X,r.a.createElement(d.a,{className:"mb-2"},r.a.createElement(f.a,null,r.a.createElement(y.a.Label,null,r.a.createElement("h3",null,"Units"))),r.a.createElement(f.a,null,r.a.createElement(A,{name:"Add",onClick:function(){var t=0;e.crusadeArmy.units.forEach((function(e){e.id>t&&(t=e.id)})),c({id:t+1,agendaXp:0,battleHonours:[],battleParticipation:0,crusadePoints:0,kills:0,markedForGreatness:0,name:"",notes:"",outOfAction:[],powerLevel:0})}}))),r.a.createElement(O,{firstColumn:"Power Level",secondColumn:q+"/"+e.crusadeArmy.maximumPowerLevel}),r.a.createElement(d.a,{className:"mb-2"},r.a.createElement(f.a,null,W)),r.a.createElement(B,{primaryButtonName:"Battle!",primaryButtonOnClick:function(){return k(!0)},secondaryButtonName:"Back",secondaryButtonOnClick:e.goBack}))};a(275);var X=function(){var e=Object(n.useState)(),t=Object(o.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(),u=Object(o.a)(c,2),i=u[0],m=u[1],v=Object(n.useState)(),b=Object(o.a)(v,2),p=b[0],y=b[1],g=Object(n.useState)(),C=Object(o.a)(g,2),k=C[0],O=C[1];function N(e){var t=JSON.parse(window.localStorage.getItem("crusadeArmies")||"[]"),a=t.findIndex((function(t){return t.id===e.id}));a>=0?t.splice(a,1,e):t.push(e),window.localStorage.setItem("crusadeArmies",JSON.stringify(t)),m(t);var n=t.find((function(t){return t.id===e.id}));y(n)}function A(e){var t=JSON.parse(window.localStorage.getItem("crusadeArmies")||"[]"),a=t.findIndex((function(t){return t.id===e.id}));a>=0&&t.splice(a,1),window.localStorage.setItem("crusadeArmies",JSON.stringify(t)),m(t),y(void 0)}return Object(n.useEffect)((function(){var e=JSON.parse(window.localStorage.getItem("crusadeArmies")||"[]");m(e)}),[]),Object(n.useEffect)((function(){if(i){var e=i.map((function(e,t){var a=0,n=0;return e.units.forEach((function(e){a+=s(e),n+=e.powerLevel})),r.a.createElement(E.a,{className:"mb-3",key:t,onClick:function(){return y(e)},style:{border:"1px solid ".concat(e.traitColor||"rgb(0, 123, 255)")}},r.a.createElement(E.a.Body,null,r.a.createElement(E.a.Title,{as:"h2"},e.name),r.a.createElement(E.a.Text,null,n+" PL ",a+" CP ",e.requisitionPoints+" RP")))}));O(e)}}),[i]),a?r.a.createElement(G,{crusadeArmy:a,handleDeleteArmy:function(){return A(a)},goBack:function(){return l(void 0)},saveArmy:N}):p?r.a.createElement(K.Provider,{value:p.traitColor||"blue"},r.a.createElement(W,{deleteArmy:A,crusadeArmy:p,goBack:function(){return y(void 0)},updateArmy:N})):r.a.createElement(r.a.Fragment,null,r.a.createElement(d.a,{className:"my-2 mx-1 header"},r.a.createElement("h2",null,"Crusade Armies")),r.a.createElement(d.a,{className:"flex-grow-1",style:{overflow:"auto"}},r.a.createElement(f.a,null,k)),r.a.createElement(d.a,{md:"2"},r.a.createElement(f.a,{xs:4},r.a.createElement(h.a,{block:!0,size:"lg",variant:"primary",onClick:function(){var e,t={name:"",id:null!==(e=null===i||void 0===i?void 0:i.length)&&void 0!==e?e:0,maximumPowerLevel:50,requisitionPoints:5,units:[]};l(t)}},"Add"))))},M=a(279),K=r.a.createContext("blue");var z=function(){return r.a.createElement(M.a,{fluid:!0,className:"h-100"},r.a.createElement(X,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},40:function(e,t,a){e.exports=a.p+"static/media/DeleteIcon.0d10f8f1.svg"},98:function(e,t,a){e.exports=a.p+"static/media/EditIcon.aa0b5ae2.svg"},99:function(e,t,a){e.exports=a.p+"static/media/CopyIcon.49972eac.svg"}},[[101,1,2]]]);
//# sourceMappingURL=main.9362c6dd.chunk.js.map