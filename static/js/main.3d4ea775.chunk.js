(this["webpackJsonpcrusade-log"]=this["webpackJsonpcrusade-log"]||[]).push([[0],{110:function(e,t,a){e.exports=a.p+"static/media/EditIcon.aa0b5ae2.svg"},111:function(e,t,a){e.exports=a.p+"static/media/CopyIcon.49972eac.svg"},114:function(e,t,a){e.exports=a.p+"static/media/ThreeDotsVerticalIcon.f1d479ac.svg"},117:function(e,t,a){e.exports=a(295)},122:function(e,t,a){},123:function(e,t,a){},295:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(108),c=a.n(l),o=(a(122),a(123),a(7)),u=a(6),i=a(9);function m(e){var t,a=e.battleParticipation+3*e.markedForGreatness+e.agendaXp+Math.floor(e.kills/3)-(null!==(t=e.experienceLoss)&&void 0!==t?t:0);return a>0?a:0}function s(e){var t,a,n,r;return(e.warlordTrait?1:0)+(e.relic?1:0)+(e.battleHonours&&e.battleHonours.length>0?null===(t=e.battleHonours)||void 0===t||null===(a=t.map((function(e){return e.crusadePoints})))||void 0===a?void 0:a.reduce((function(e,t){return(null!==e&&void 0!==e?e:0)+t})):0)+(0-(null!==(n=null===(r=e.battleScars)||void 0===r?void 0:r.length)&&void 0!==n?n:0))}function d(e){return f(e,e.isUsingAlternateName)}function f(e,t){return t&&e.alternateName||e.name}var E=a(298),v=a(109),b=a(302);var p=function(e){var t=[];return e.nameEffects.forEach((function(e,a){t.push(r.a.createElement(r.a.Fragment,{key:a},r.a.createElement(b.a.Subtitle,{className:"mt-1 ml-2"},e.name),r.a.createElement(b.a.Text,{className:"ml-2"},e.effect)))})),r.a.createElement(E.a,{className:"mb-3"},r.a.createElement(v.a,null,r.a.createElement(b.a,null,r.a.createElement(b.a.Header,{className:"py-1"},e.header),t)))};var g,y=function(e){var t=Object(n.useState)(!1),a=Object(u.a)(t,2),l=a[0],c=a[1],o=m(e.unit),i=null;e.unit.warlordTrait&&(i=r.a.createElement(p,{header:"Warlord Trait",nameEffects:[e.unit.warlordTrait]}));var s=null;e.unit.relic&&(s=r.a.createElement(p,{header:"Relic",nameEffects:[e.unit.relic]}));var d=void 0;if(e.unit.battleHonours&&e.unit.battleHonours.length>0){var f=[];e.unit.battleHonours.forEach((function(e){e.battleTrait&&f.push(e.battleTrait)})),d=r.a.createElement(p,{header:"Battle Honours",nameEffects:f})}var b=void 0;if(e.unit.battleScars&&e.unit.battleScars.length>0){var g=[];e.unit.battleScars.forEach((function(e){g.push(e)})),b=r.a.createElement(p,{header:"Battle Scars",nameEffects:g})}var y=null;l&&(y=r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a,{className:"mb-2"},r.a.createElement(v.a,null,"Battle Participation"),r.a.createElement(v.a,null,e.unit.battleParticipation)),r.a.createElement(E.a,{className:"mb-2"},r.a.createElement(v.a,null,"Marked For Greatness"),r.a.createElement(v.a,null,e.unit.markedForGreatness)),r.a.createElement(E.a,{className:"mb-2"},r.a.createElement(v.a,null,"Agenda"),r.a.createElement(v.a,null,e.unit.agendaXp)),r.a.createElement(E.a,{className:"mb-2"},r.a.createElement(v.a,null,"Kills"),r.a.createElement(v.a,null,e.unit.kills))));var h=null;return e.unit.otherTraits&&e.unit.otherTraits.length>0&&(h=e.unit.otherTraits.map((function(e,t){return r.a.createElement(p,{key:t,header:e.name,nameEffects:e.nameEffects})}))),r.a.createElement(r.a.Fragment,null,i,s,d,b,h,r.a.createElement(E.a,{className:"mb-2",onClick:function(){c(!l)}},r.a.createElement(v.a,null,"Total Experience"),r.a.createElement(v.a,null,o)),y)};!function(e){e.BattleReady="Battle-Ready",e.Blooded="Blooded",e.Custom="Custom Battle Trait",e.BattleHardened="Battle-Hardened",e.Heroic="Heroic",e.Legendary="Legendary"}(g||(g={}));var h=a(301);var C=function(e){var t,a,n=void 0;return e.formName&&(n=r.a.createElement(E.a,null,r.a.createElement(v.a,null,r.a.createElement(h.a.Label,null,e.formName)))),r.a.createElement(h.a.Group,{as:E.a,className:"mb-2",controlId:"form".concat(e.formName)},r.a.createElement(v.a,null,n,r.a.createElement(E.a,null,r.a.createElement(v.a,{className:"pr-1"},r.a.createElement(h.a.Control,{type:"textbox",onChange:e.onNameChange,value:null===(t=e.nameEffect)||void 0===t?void 0:t.name,placeholder:"Name"})),r.a.createElement(v.a,{className:"pl-1"},r.a.createElement(h.a.Control,{type:"textbox",onChange:e.onEffectChange,value:null===(a=e.nameEffect)||void 0===a?void 0:a.effect,placeholder:"Effect"})))))},k=a(305);var N=function(e){return r.a.createElement(ne.Consumer,null,(function(t){return r.a.createElement(k.a,{variant:e.primary?"primary":"outline-primary",onClick:e.onClick,type:e.submit?"submit":"button",block:!0,style:{borderColor:e.color||t.color,color:e.primary?"white":e.color||t.color,backgroundColor:e.primary?e.color||t.color:"white"},size:e.small?void 0:"lg"},e.name)}))};var O=function(e){function t(t,a){e.editUnit((function(e){var n=Object(o.a)({},e.battleScars[a]);t(n),e.battleScars.splice(a,1,n)}))}var a=[];return e.unit.battleScars&&e.unit.battleScars.length>0&&e.unit.battleScars.forEach((function(e,n){a.push(r.a.createElement(C,{key:n,onEffectChange:function(e){return t((function(t){return t.effect=e.target.value}),n)},onNameChange:function(e){return t((function(t){return t.name=e.target.value}),n)},nameEffect:e}))})),r.a.createElement(h.a.Group,{as:E.a,className:"mb-2",controlId:"formWarlordTrait"},r.a.createElement(v.a,null,r.a.createElement(E.a,{className:"mb-2"},r.a.createElement(v.a,null,r.a.createElement(h.a.Label,null,"Battle Scars")),r.a.createElement(v.a,null,r.a.createElement(N,{small:!0,onClick:function(t){t.preventDefault(),e.editUnit((function(e){var t=e.battleScars;t||(t=[]),e.battleScars.push({})}))},name:"Add"}))),a))};var A=function(e){return r.a.createElement(h.a.Group,{as:E.a,className:"mb-2",controlId:"form".concat(e.formName)},r.a.createElement(v.a,{xs:e.resetFirstColSpan?void 0:4},r.a.createElement(h.a.Label,null,e.formName)),r.a.createElement(v.a,null,r.a.createElement(h.a.Control,{type:e.inputType,onChange:e.onChange,value:e.value,placeholder:e.placeHolder||e.formName})))};var T=function(e){var t=e.firstColumn;return e.label&&(t=r.a.createElement(h.a.Label,null,e.firstColumn)),r.a.createElement(E.a,{className:"mb-2",onClick:e.onClick},r.a.createElement(v.a,null,t),r.a.createElement(v.a,null,e.secondColumn))};var j=function(e){var t=m(e.unit)+1,a=Object(n.useState)(t-1),l=Object(u.a)(a,1)[0],c=e.unit.battleHonours.map((function(t,a){var n,c;return t.rank===g.Blooded&&l<6||t.rank===g.BattleHardened&&l<16||t.rank===g.Heroic&&l<31||t.rank===g.Legendary&&l<51?r.a.createElement(C,{nameEffect:t.battleTrait,onEffectChange:function(a){var n=Object(o.a)({},e.unit),r=n.battleHonours.find((function(e){return e.rank===t.rank}));(null===r||void 0===r?void 0:r.battleTrait)||(r.battleTrait={}),r.battleTrait.effect=a.target.value,e.updateUnit(n)},onNameChange:function(a){var n=Object(o.a)({},e.unit),r=n.battleHonours.find((function(e){return e.rank===t.rank}));(null===r||void 0===r?void 0:r.battleTrait)||(r.battleTrait={}),r.battleTrait.name=a.target.value,e.updateUnit(n)},formName:t.rank}):r.a.createElement(T,{key:a,firstColumn:(null===(n=t.battleTrait)||void 0===n?void 0:n.name)||"",label:!0,secondColumn:(null===(c=t.battleTrait)||void 0===c?void 0:c.effect)||""})}));return r.a.createElement(ne.Consumer,null,(function(a){return r.a.createElement(E.a,null,r.a.createElement(v.a,null,r.a.createElement("h3",{className:"mt-3",style:{borderTop:"1px solid ".concat(a.color)}},f(e.unit,a.isUsingAlternateName)),r.a.createElement(T,{firstColumn:"Battle Participation",label:!0,secondColumn:"".concat(e.unit.battleParticipation," + 1")}),r.a.createElement(A,{resetFirstColSpan:!0,inputType:"number",onChange:function(t){var a=Object(o.a)({},e.unit);a.markedForGreatness=Number.parseInt(t.target.value),e.updateUnit(a)},formName:"Greatness",value:e.unit.markedForGreatness}),r.a.createElement(A,{resetFirstColSpan:!0,inputType:"number",onChange:function(t){var a=Object(o.a)({},e.unit);a.agendaXp=Number.parseInt(t.target.value),e.updateUnit(a)},formName:"Agenda",value:e.unit.agendaXp}),r.a.createElement(A,{resetFirstColSpan:!0,inputType:"number",onChange:function(t){var a=Object(o.a)({},e.unit);a.kills=Number.parseInt(t.target.value),e.updateUnit(a)},formName:"Kills",value:e.unit.kills}),r.a.createElement(T,{firstColumn:"Total Experience",label:!0,secondColumn:t}),c,r.a.createElement(O,{unit:e.unit,editUnit:function(t){var a=Object(o.a)(Object(o.a)({},e.unit),{},{battleScars:Object(i.a)(e.unit.battleScars||[])});t(a),e.updateUnit(a)}})))}))};var w=function(e){return r.a.createElement(E.a,{className:"mb-2"},e.tertiaryButtonOnClick&&e.tertiaryButtonName&&r.a.createElement(v.a,null,r.a.createElement(N,{color:e.color,name:e.tertiaryButtonName,onClick:e.tertiaryButtonOnClick})),r.a.createElement(v.a,null,r.a.createElement(N,{color:e.color,name:e.secondaryButtonName,onClick:e.secondaryButtonOnClick})),r.a.createElement(v.a,null,r.a.createElement(N,{color:e.color,name:e.primaryButtonName,onClick:e.primaryButtonOnClick,primary:!0,submit:!0})))},B=a(110),P=a.n(B);function x(e){switch(e){case"#FF0000":return"red";case"#0000FF":return"blue";case"#ebdb00":return"yellow";case"#6b6b6b":return"dark-grey";case"#00a00d":return"green";case"#a00097":return"purple";case"#00a7a2":return"teal";case"#996401":return"brown";default:return"grey"}}var S=function(e){var t,a=void 0;e.onEdit&&(a=r.a.createElement("img",{className:"icon",src:P.a,alt:"Edit Links",onClick:e.onEdit}));var n=null===(t=e.subHeaderInfo)||void 0===t?void 0:t.map((function(e,t){return r.a.createElement(E.a,{key:t},r.a.createElement("b",null,e.value+" "),e.name)}));return r.a.createElement(ne.Consumer,null,(function(t){return r.a.createElement(E.a,{className:"my-2 mx-1 header"},r.a.createElement(v.a,{as:"h2",className:"p-0",xs:9},e.headerText,a),r.a.createElement(v.a,{xs:2,className:"p-0 pt-2"},r.a.createElement(h.a.Check,{type:"switch",id:"custom-switch",className:x(t.color),label:"",checked:t.isUsingAlternateName||!1,onClick:t.toggleIsUsingAlternateName})),r.a.createElement(v.a,{xs:1,className:"pl-0"},n))}))};var H=function(e){var t=Object(n.useState)(e.crusadeArmy.units),a=Object(u.a)(t,2),l=a[0],c=a[1],d=Object(n.useState)(e.crusadeArmy.requisitionPoints?e.crusadeArmy.requisitionPoints+1:1),f=Object(u.a)(d,2),E=f[0],v=f[1],b=[];l.forEach((function(t,a){var n;(null===(n=e.crusadeArmy.battleRosterUnitIds)||void 0===n?void 0:n.includes(t.id))&&b.push(r.a.createElement(j,{unit:t,key:t.id,updateUnit:function(e){return function(e,t){var a=Object(i.a)(l),n=m(e)+1;e.battleHonours.findIndex((function(e){return e.rank===g.Blooded}))<0&&n>=6?e.battleHonours.push({crusadePoints:e.powerLevel>=11?2:1,battleTrait:{effect:""},rank:g.Blooded}):e.battleHonours.findIndex((function(e){return e.rank===g.BattleHardened}))<0&&n>=16?e.battleHonours.push({crusadePoints:e.powerLevel>=11?2:1,battleTrait:{effect:""},rank:g.BattleHardened}):e.battleHonours.findIndex((function(e){return e.rank===g.Heroic}))<0&&n>=31?e.battleHonours.push({crusadePoints:e.powerLevel>=11?2:1,battleTrait:{effect:""},rank:g.Heroic}):e.battleHonours.findIndex((function(e){return e.rank===g.Legendary}))<0&&n>=51&&e.battleHonours.push({crusadePoints:e.powerLevel>=11?2:1,battleTrait:{effect:""},rank:g.Legendary}),a.splice(t,1,e),c(a)}(e,a)}}))}));var p=0,y=0;return e.crusadeArmy.units.forEach((function(t){var a;(null===(a=e.crusadeArmy.battleRosterUnitIds)||void 0===a?void 0:a.includes(t.id))&&(p+=t.powerLevel,y+=s(t))})),r.a.createElement(r.a.Fragment,null,r.a.createElement(S,{subHeaderInfo:[{name:"PL",value:p},{name:"CP",value:y},{name:"RP",value:e.crusadeArmy.requisitionPoints}],headerText:"Fill Unit Stats"}),r.a.createElement(h.a,null,r.a.createElement(A,{resetFirstColSpan:!0,formName:"RP",inputType:"number",onChange:function(e){return v(Number.parseInt(e.target.value))},value:E}),b,r.a.createElement(w,{primaryButtonName:"Save",primaryButtonOnClick:function(){var t=Object(o.a)({},e.crusadeArmy);t.units=l,l.forEach((function(e){return e.battleParticipation++})),t.battleRosterUnitIds=void 0,t.requisitionPoints=E,e.updateArmy(t)},secondaryButtonName:"Back",secondaryButtonOnClick:e.goBack})))};var L=function(e){var t=Object(n.useState)(),a=Object(u.a)(t,2),l=a[0],c=a[1],o=[];if(e.crusadeArmy.units.forEach((function(t){e.crusadeArmy.battleRosterUnitIds&&e.crusadeArmy.battleRosterUnitIds.includes(t.id)&&(o.push(r.a.createElement(ne.Consumer,{key:t.id+" Header"},(function(e){return r.a.createElement("h3",{className:"mt-3",style:{borderTop:"1px solid ".concat(e.color)}},f(t,e.isUsingAlternateName))}))),o.push(r.a.createElement(y,{unit:t,key:t.id})))})),l)return r.a.createElement(H,{crusadeArmy:e.crusadeArmy,goBack:function(){return c(!1)},updateArmy:e.updateArmy});var i=0,m=0;return e.crusadeArmy.units.forEach((function(t){var a;(null===(a=e.crusadeArmy.battleRosterUnitIds)||void 0===a?void 0:a.includes(t.id))&&(i+=t.powerLevel,m+=s(t))})),r.a.createElement(r.a.Fragment,null,r.a.createElement(S,{subHeaderInfo:[{name:"PL",value:i},{name:"CP",value:m},{name:"RP",value:e.crusadeArmy.requisitionPoints}],headerText:"Battle Roster"}),e.crusadeArmy.detachmentTrait&&r.a.createElement(p,{nameEffects:[e.crusadeArmy.detachmentTrait],header:"Detachment Trait"}),o,r.a.createElement(w,{primaryButtonName:"Continue",primaryButtonOnClick:function(){return c(!0)},secondaryButtonName:"Back",secondaryButtonOnClick:e.goBack}))};var I=function(e){var t=Object(n.useState)([]),a=Object(u.a)(t,2),l=a[0],c=a[1],m=e.crusadeArmy.units.map((function(t){var a=s(t);return r.a.createElement(ne.Consumer,null,(function(n){return r.a.createElement(h.a.Group,{onClick:function(){return function(e){var t=[];t=l.includes(e)?l.filter((function(t){return t!==e})):[].concat(Object(i.a)(l),[e]),c(t)}(t.id)},className:"mb-1"},r.a.createElement(h.a.Check,{type:"checkbox",className:"custom-control ".concat(x(e.crusadeArmy.traitColor)),color:n.color},r.a.createElement(h.a.Check.Input,{className:"custom-control-input mr-1",color:n.color,checked:l.includes(t.id),style:{position:"relative"}}),r.a.createElement(h.a.Check.Label,{className:"custom-control-label",children:"".concat(f(t,n.isUsingAlternateName)," ").concat(t.powerLevel,"PL  ").concat(a,"CP"),style:{fontWeight:"unset"}})))}))})),d=0,b=0;return e.crusadeArmy.units.forEach((function(e){l.includes(e.id)&&(d+=e.powerLevel,b+=s(e))})),e.crusadeArmy.battleRosterUnitIds?r.a.createElement(L,{crusadeArmy:e.crusadeArmy,goBack:function(){var t=Object(o.a)({},e.crusadeArmy);t.battleRosterUnitIds=void 0,e.updateArmy(t)},updateArmy:e.updateArmy}):r.a.createElement(r.a.Fragment,null,r.a.createElement(S,{subHeaderInfo:[{name:"PL",value:d},{name:"CP",value:b}],headerText:"Battle Roster"}),r.a.createElement(h.a,null,r.a.createElement(E.a,{className:"mb-2"},r.a.createElement(v.a,null,r.a.createElement(N,{small:!0,name:"Select All",onClick:function(){var t=e.crusadeArmy.units.map((function(e){return e.id}));c(t)}}))),m),r.a.createElement(w,{primaryButtonName:"Continue",primaryButtonOnClick:function(){var t=Object(o.a)({},e.crusadeArmy);t.battleRosterUnitIds=l,e.updateArmy(t)},secondaryButtonName:"Back",secondaryButtonOnClick:e.goBack}))},U=a(47),R=a.n(U);var F=function(e){var t=Object(n.useState)(""===e.unit.name),a=Object(u.a)(t,1)[0],l=Object(n.useState)(e.unit),c=Object(u.a)(l,2),s=c[0],d=c[1],f=Object(n.useState)(!1),b=Object(u.a)(f,2),p=b[0],y=b[1];function k(t){t.preventDefault(),t.stopPropagation();var a=s;a.otherTraits&&a.otherTraits.length>0&&(a.otherTraits=a.otherTraits.filter((function(e){return""!==e.name}))),e.saveUnit(a)}function j(e){var t=Object(o.a)(Object(o.a)({},s),{},{battleHonours:Object(i.a)(s.battleHonours),battleScars:Object(i.a)(s.battleScars||[])});e(t);var a=m(t);t.battleHonours.findIndex((function(e){return e.rank===g.Blooded}))<0&&a>=6?t.battleHonours.push({crusadePoints:t.powerLevel>=11?2:1,battleTrait:{effect:""},rank:g.Blooded}):t.battleHonours.findIndex((function(e){return e.rank===g.BattleHardened}))<0&&a>=16?t.battleHonours.push({crusadePoints:t.powerLevel>=11?2:1,battleTrait:{effect:""},rank:g.BattleHardened}):t.battleHonours.findIndex((function(e){return e.rank===g.Heroic}))<0&&a>=31?t.battleHonours.push({crusadePoints:t.powerLevel>=11?2:1,battleTrait:{effect:""},rank:g.Heroic}):t.battleHonours.findIndex((function(e){return e.rank===g.Legendary}))<0&&a>=51&&t.battleHonours.push({crusadePoints:t.powerLevel>=11?2:1,battleTrait:{effect:""},rank:g.Legendary}),d(t)}var B=m(s),P=0,x=s.battleHonours.map((function(e,t){return P+=e.crusadePoints,r.a.createElement(C,{key:t,formName:e.rank,onNameChange:function(t){j((function(a){var n=a.battleHonours.find((function(t){return t.rank===e.rank}));(null===n||void 0===n?void 0:n.battleTrait)||(n.battleTrait={}),n.battleTrait.name=t.target.value}))},onEffectChange:function(t){j((function(a){var n=a.battleHonours.find((function(t){return t.rank===e.rank}));(null===n||void 0===n?void 0:n.battleTrait)||(n.battleTrait={}),n.battleTrait.effect=t.target.value}))},nameEffect:e.battleTrait})})),S=p&&r.a.createElement(r.a.Fragment,null,r.a.createElement(A,{formName:"Participation",inputType:"number",onChange:function(e){return j((function(t){return t.battleParticipation=Number.parseInt(e.target.value)}))},value:s.battleParticipation}),r.a.createElement(A,{formName:"Greatness",inputType:"number",onChange:function(e){return j((function(t){return t.markedForGreatness=Number.parseInt(e.target.value)}))},value:s.markedForGreatness}),r.a.createElement(A,{formName:"Agenda",inputType:"number",onChange:function(e){return j((function(t){return t.agendaXp=Number.parseInt(e.target.value)}))},value:s.agendaXp}),r.a.createElement(A,{formName:"Kills",inputType:"number",onChange:function(e){return j((function(t){return t.kills=Number.parseInt(e.target.value)}))},value:s.kills}),r.a.createElement(A,{formName:"Loss",inputType:"number",onChange:function(e){return j((function(t){return t.experienceLoss=Number.parseInt(e.target.value)}))},value:s.experienceLoss}));function H(e,t,a){j((function(n){if(n.otherTraits){var r=n.otherTraits[e].nameEffects[t];a(r)}}))}var L=null;return s.otherTraits&&s.otherTraits.length>0&&(L=s.otherTraits.map((function(e,t){var a=null;return e.nameEffects&&e.nameEffects.length>0&&(a=e.nameEffects.map((function(e,a){return r.a.createElement(C,{key:a,nameEffect:e,onEffectChange:function(e){return H(t,a,(function(t){return t.effect=e.target.value}))},onNameChange:function(e){return H(t,a,(function(t){return t.name=e.target.value}))}})}))),r.a.createElement(r.a.Fragment,{key:t},r.a.createElement(E.a,{className:"mb-2"},r.a.createElement(v.a,null,r.a.createElement(h.a.Control,{type:"textbox",onChange:function(e){return function(e,t){j((function(a){a.otherTraits&&(a.otherTraits[e].name=t)}))}(t,e.target.value)},value:e.name,placeholder:"Ability Name"})),r.a.createElement(v.a,null,r.a.createElement(N,{small:!0,name:"Add Effect",onClick:function(){return function(e){j((function(t){t.otherTraits&&t.otherTraits[e].nameEffects.push({})}))}(t)}}))),a)}))),r.a.createElement(h.a,{onSubmit:k,id:"edit-unit"},r.a.createElement(E.a,{className:"my-2 mx-1 header"},r.a.createElement("h2",null,a?"Adding Unit ":"Editting Unit ",r.a.createElement("img",{className:"icon",src:R.a,alt:"Edit Links",onClick:function(){window.confirm("Are you sure you wish to delete this unit?")&&e.deleteUnit(e.unit)}}))),r.a.createElement(A,{formName:"Name",inputType:"textbox",onChange:function(e){return j((function(t){return t.name=e.target.value}))},value:s.name}),r.a.createElement(A,{formName:"Alternate Name",inputType:"textbox",onChange:function(e){return j((function(t){return t.alternateName=e.target.value}))},value:s.alternateName}),r.a.createElement(A,{formName:"Power Level",inputType:"number",onChange:function(e){return j((function(t){return t.powerLevel=Number.parseInt(e.target.value)}))},value:s.powerLevel}),r.a.createElement(T,{label:!0,firstColumn:"Total Experience",secondColumn:B,onClick:function(){return y(!p)}}),S,r.a.createElement(E.a,{className:"mb-2"},r.a.createElement(v.a,null,r.a.createElement(h.a.Label,null,"Traits and Honours")),r.a.createElement(v.a,null,r.a.createElement(N,{small:!0,name:"Add",onClick:function(){j((function(e){return e.battleHonours.push({rank:g.Custom,battleTrait:{},crusadePoints:e.powerLevel>=11?2:1})}))}}))),x,r.a.createElement(O,{unit:s,editUnit:j}),s.warlordTrait&&r.a.createElement(C,{formName:"Warlord Trait",onNameChange:function(e){return j((function(t){t.warlordTrait||(t.warlordTrait={}),t.warlordTrait.name=e.target.value}))},onEffectChange:function(e){return j((function(t){t.warlordTrait||(t.warlordTrait={}),t.warlordTrait.effect=e.target.value}))},nameEffect:s.warlordTrait}),r.a.createElement(T,{label:!0,firstColumn:"Crusade Points",secondColumn:P}),r.a.createElement(T,{label:!0,firstColumn:"Other Abilities",secondColumn:r.a.createElement(N,{name:"Add Ability",small:!0,onClick:function(){return j((function(e){e.otherTraits||(e.otherTraits=[]),e.otherTraits.push({name:"",nameEffects:[{}]})}))}})}),L,r.a.createElement(w,{primaryButtonName:"Save",primaryButtonOnClick:k,secondaryButtonName:"Back",secondaryButtonOnClick:e.goBack}))};var G=function(e){var t=Object(n.useState)(!1),a=Object(u.a)(t,2),l=a[0],c=a[1],o=Object(n.useMemo)((function(){return""===e.unit.name}),[e.unit.name]);if(l||o)return r.a.createElement(F,{deleteUnit:e.deleteUnit,goBack:function(){return o?e.goBack():c(!1)},unit:e.unit,saveUnit:function(t){e.saveUnit(t),c(!1),o&&e.goBack()}});var i=s(e.unit);return r.a.createElement(ne.Consumer,null,(function(t){return r.a.createElement(r.a.Fragment,null,r.a.createElement(S,{subHeaderInfo:[{name:"PL",value:e.unit.powerLevel},{name:"CP",value:i}],headerText:f(e.unit,t.isUsingAlternateName)}),r.a.createElement(y,{unit:e.unit}),r.a.createElement(w,{primaryButtonName:"Edit",primaryButtonOnClick:function(){return c(!0)},secondaryButtonName:"Back",secondaryButtonOnClick:e.goBack}))}))};var q=a(111),D=a.n(q),J=a(112);var M=function(e){var t=Object(n.useState)(""===e.crusadeArmy.name),a=Object(u.a)(t,1)[0],l=Object(n.useState)(e.crusadeArmy),c=Object(u.a)(l,2),i=c[0],m=c[1];function s(e){var t=Object(o.a)({},i);e(t),m(t)}return r.a.createElement(r.a.Fragment,null,r.a.createElement(h.a,{onSubmit:function(){return e.saveArmy(i)}},r.a.createElement(E.a,{className:"my-2 mx-1 header"},r.a.createElement("h2",null,a?"Add Army":"Edit Army",r.a.createElement("img",{className:"icon",src:R.a,alt:"Edit Links",onClick:function(){window.confirm("Are you sure you wish to delete this army?")&&e.handleDeleteArmy()}}))),r.a.createElement(A,{formName:"Name",onChange:function(e){return s((function(t){return t.name=e.target.value}))},inputType:"textbox",value:i.name}),r.a.createElement(A,{formName:"Alternate Name",onChange:function(e){return s((function(t){return t.alternateName=e.target.value}))},inputType:"textbox",value:i.alternateName}),r.a.createElement(A,{formName:"Requisition Points",onChange:function(e){return s((function(t){return t.requisitionPoints=Number.parseInt(e.target.value)}))},inputType:"number",value:i.requisitionPoints}),r.a.createElement(A,{formName:"Max PL",onChange:function(e){return s((function(t){return t.maximumPowerLevel=Number.parseInt(e.target.value)}))},inputType:"number",value:i.maximumPowerLevel}),r.a.createElement(C,{formName:"Trait",onNameChange:function(e){return s((function(t){t.detachmentTrait||(t.detachmentTrait={}),t.detachmentTrait.name=e.target.value}))},nameEffect:i.detachmentTrait,onEffectChange:function(e){return s((function(t){t.detachmentTrait||(t.detachmentTrait={}),t.detachmentTrait.effect=e.target.value}))}}),r.a.createElement(E.a,{className:"mb-2"},r.a.createElement(v.a,null,r.a.createElement(J.CirclePicker,{width:"90vw",onChange:function(e){return s((function(t){return t.traitColor=e.hex}))},color:i.traitColor||"blue",colors:["#FF0000","#0000FF","#ebdb00","#6b6b6b","#00a00d","#a00097","#00a7a2","#996401"]}))),r.a.createElement(E.a,{className:"mb-2"},r.a.createElement(v.a,null,r.a.createElement(h.a.Label,null,"Copy from Clipboard")),r.a.createElement(v.a,null,r.a.createElement("img",{className:"icon",src:D.a,alt:"Edit Links",onClick:function(){return function(e){if(navigator.clipboard){var t=JSON.stringify(e);navigator.clipboard.writeText(t).then((function(){window.alert("Copied to clipboard")})).catch((function(){window.alert("Can't copy to clipboard")}))}else window.alert("Can't copy to clipboard")}(e.crusadeArmy)}}))),r.a.createElement(E.a,{className:"mb-2"},r.a.createElement(v.a,null,r.a.createElement(h.a.Control,{as:"textarea",rows:5,onChange:function(e){var t=JSON.parse(e.target.value);t.id=i.id,m(t)},value:JSON.stringify(i)}))),r.a.createElement(w,{primaryButtonName:"Save",primaryButtonOnClick:function(){return e.saveArmy(i)},secondaryButtonName:"Back",secondaryButtonOnClick:e.goBack,color:i.traitColor})))};var W=function(e){var t,a,l=Object(n.useState)(null!==(t=e.crusadeArmy.requisitionPoints)&&void 0!==t?t:0),c=Object(u.a)(l,2),m=c[0],s=c[1],d=Object(n.useState)(null!==(a=e.crusadeArmy.maximumPowerLevel)&&void 0!==a?a:0),f=Object(u.a)(d,2),b=f[0],p=f[1],g=Object(n.useState)([]),y=Object(u.a)(g,2),k=y[0],O=y[1],A=Object(n.useState)([]),j=Object(u.a)(A,2),B=j[0],P=j[1],x=Object(n.useState)([]),H=Object(u.a)(x,2),L=H[0],I=H[1],U=[r.a.createElement("option",{value:-1})],R=[r.a.createElement("option",{value:-1})],F=[r.a.createElement("option",{value:-1})];e.crusadeArmy.units.forEach((function(e){e.warlordTrait||U.push(r.a.createElement("option",{value:e.id},e.name)),e.relic||R.push(r.a.createElement("option",{value:e.id},e.name)),e.battleScars.find((function(e){return void 0!==e}))&&F.push(r.a.createElement("option",{value:e.id},e.name))}));var G=[];null===k||void 0===k||k.forEach((function(e,t){G.push(r.a.createElement(r.a.Fragment,{key:t},r.a.createElement(E.a,{className:"mb-2"},r.a.createElement(v.a,{className:"pr-0"},r.a.createElement(h.a.Control,{onChange:function(a){var n=Object(i.a)(k);null===n||void 0===n||n.splice(t,1,Object(o.a)(Object(o.a)({},e),{},{id:Number.parseInt(a.target.value)})),O(n)},value:e.id,as:"select"},U)),r.a.createElement(v.a,null,r.a.createElement(N,{name:"Remove",small:!0,onClick:function(){var e=Object(i.a)(k);null===e||void 0===e||e.splice(t,1),O(e),s(m+1)}}))),r.a.createElement(C,{onNameChange:function(a){var n=Object(i.a)(k);e.nameEffect.name=a.target.value,null===n||void 0===n||n.splice(t,1,e),O(n)},onEffectChange:function(a){var n=Object(i.a)(k);e.nameEffect.effect=a.target.value,null===n||void 0===n||n.splice(t,1,e),O(n)},nameEffect:e.nameEffect})))}));var q=[];null===B||void 0===B||B.forEach((function(e,t){q.push(r.a.createElement(r.a.Fragment,{key:t},r.a.createElement(E.a,{className:"mb-2"},r.a.createElement(v.a,{className:"pr-0"},r.a.createElement(h.a.Control,{onChange:function(a){var n=Object(i.a)(B);null===n||void 0===n||n.splice(t,1,Object(o.a)(Object(o.a)({},e),{},{id:Number.parseInt(a.target.value)})),P(n)},value:e.id,as:"select"},R)),r.a.createElement(v.a,null,r.a.createElement(N,{name:"Remove",small:!0,onClick:function(){var e=Object(i.a)(B);null===e||void 0===e||e.splice(t,1),P(e),s(m+1)}}))),r.a.createElement(C,{onNameChange:function(a){var n=Object(i.a)(k);e.nameEffect.name=a.target.value,null===n||void 0===n||n.splice(t,1,e),P(n)},onEffectChange:function(a){var n=Object(i.a)(B);e.nameEffect.effect=a.target.value,null===n||void 0===n||n.splice(t,1,e),P(n)},nameEffect:e.nameEffect})))}));var D=[];return null===L||void 0===L||L.forEach((function(t,a){var n=[];if(void 0!==t.id&&-1!==t.id){var l=e.crusadeArmy.units.find((function(e){return e.id===t.id})),c=[];null===l||void 0===l||l.battleScars.forEach((function(e){c.push(r.a.createElement("option",{value:e.name},e.name))})),n.push(r.a.createElement(E.a,{className:"mb-2"},r.a.createElement(v.a,null,r.a.createElement(h.a.Control,{onChange:function(e){var n=Object(i.a)(L);null===n||void 0===n||n.splice(a,1,Object(o.a)(Object(o.a)({},t),{},{name:e.target.value})),I(n)},value:t.name,as:"select"},c))))}D.push(r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a,{className:"mb-2"},r.a.createElement(v.a,{className:"pr-0"},r.a.createElement(h.a.Control,{onChange:function(e){var n=Object(i.a)(L);null===n||void 0===n||n.splice(a,1,Object(o.a)(Object(o.a)({},t),{},{id:Number.parseInt(e.target.value)})),I(n)},value:t.id,as:"select"},F)),r.a.createElement(v.a,null,r.a.createElement(N,{name:"Remove",small:!0,onClick:function(){var e=Object(i.a)(L);null===e||void 0===e||e.splice(a,1),I(e),s(m+1)}}))),n))})),r.a.createElement(r.a.Fragment,null,r.a.createElement(S,{headerText:"RP Spending"}),r.a.createElement(T,{firstColumn:"Requisition Points",secondColumn:m}),r.a.createElement(T,{firstColumn:"Maximum Power Level",secondColumn:b}),r.a.createElement(E.a,{className:"mb-2"},r.a.createElement(v.a,null,r.a.createElement(N,{onClick:function(){p(b-5),s(m+1)},name:"Undo"})),r.a.createElement(v.a,null,r.a.createElement(N,{onClick:function(){p(b+5),s(m-1)},name:"Increase Supply Limit"}))),r.a.createElement(E.a,{className:"mb-2"},r.a.createElement(v.a,null,r.a.createElement(N,{onClick:function(){var e=[].concat(Object(i.a)(k),[{id:-1,nameEffect:{}}]);s(m-1),O(e)},name:"Warlord Trait"}))),G,r.a.createElement(E.a,{className:"mb-2"},r.a.createElement(v.a,null,r.a.createElement(N,{onClick:function(){var e=[].concat(Object(i.a)(B),[{id:-1,nameEffect:{}}]);s(m-1),P(e)},name:"Relic"}))),q,r.a.createElement(E.a,{className:"mb-2"},r.a.createElement(v.a,null,r.a.createElement(N,{name:"Repair and Recuperate",onClick:function(){var e=[].concat(Object(i.a)(L),[{id:-1}]);s(m-1),I(e)}}))),D,r.a.createElement(w,{secondaryButtonName:"Back",secondaryButtonOnClick:e.goBack,primaryButtonName:"Save",primaryButtonOnClick:function(){var t=Object(o.a)({},e.crusadeArmy);t.maximumPowerLevel=b,t.requisitionPoints=m,k.forEach((function(e){var a=t.units.find((function(t){return t.id===e.id}));a&&(a.warlordTrait=e.nameEffect)})),B.forEach((function(e){var a=t.units.find((function(t){return t.id===e.id}));a&&(a.relic=e.nameEffect)})),L.forEach((function(e){var a=t.units.find((function(t){return t.id===e.id}));a&&(a.battleScars=a.battleScars.filter((function(t){return(null===t||void 0===t?void 0:t.name)===e.name})))})),e.updateArmy(t),e.goBack()}}))},X=a(113),K=a(304),z=a(303),V=a(299),$=a(116),Q=a(114),Y=a.n(Q);function Z(e){var t=r.a.useRef(null),a=r.a.useRef(null),n=Object(K.a)({accept:"row",hover:function(a,n){var r;if(t.current){var l=a.index,c=e.index;if(l!==c){var o=t.current.getBoundingClientRect(),u=(o.bottom-o.top)/2,i=n.getClientOffset(),m=(null!==(r=null===i||void 0===i?void 0:i.y)&&void 0!==r?r:0)-o.top;l<c&&m<u||l>c&&m>u||(e.moveRow&&e.moveRow(l,c),a.index=c)}}}}),l=Object(u.a)(n,2)[1],c=e.index,o=Object(z.a)({item:{type:"row",index:c},collect:function(e){return{isDragging:e.isDragging()}}}),i=Object(u.a)(o,3),m=i[0].isDragging,s=i[1],d=m?0:1;return(0,i[2])(l(t)),s(a),r.a.createElement("tr",{ref:t,style:{opacity:d}},r.a.createElement("td",{ref:a,style:{width:"36px"}},r.a.createElement("img",{className:"icon",src:Y.a,alt:"Move Unit"})),e.row.cells.map((function(t){return r.a.createElement("td",Object.assign({},t.getCellProps(),{onClick:e.onRowClick}),t.render("Cell"))})))}var _=function(e){var t=r.a.useMemo((function(){return e.columns}),[e.columns]),a=e.crusadeArmy.units.map((function(t){return Object(o.a)(Object(o.a)({},t),{},{crusadePoints:s(t),name:f(t,e.crusadeArmy.isUsingAlternateName)})})),n=r.a.useCallback((function(e){return e.id}),[]),l=Object(X.useTable)({data:a,columns:t,getRowId:n}),c=l.getTableProps,u=l.getTableBodyProps,i=l.headerGroups,m=l.rows,d=l.prepareRow;function E(t,a){var n=e.crusadeArmy.units[t];e.updateRowPosition&&e.updateRowPosition(n.id,a)}return r.a.createElement(V.a,{backend:$.a,options:{enableMouseEvents:!0}},r.a.createElement("table",Object.assign({},c(),{className:"table table-striped table-bordered table-hover"}),r.a.createElement("thead",null,i.map((function(e){return r.a.createElement("tr",e.getHeaderGroupProps(),r.a.createElement("th",null),e.headers.map((function(e){return r.a.createElement("th",e.getHeaderProps(),e.render("Header"))})))}))),r.a.createElement("tbody",u(),m.map((function(t,a){return d(t),r.a.createElement(Z,Object.assign({index:a,row:t,onRowClick:function(){return e.onRowClick(t.original.id)},moveRow:E,updateRowPosition:e.updateRowPosition},t.getRowProps()))})))))};var ee=function(e){var t=Object(n.useState)(),a=Object(u.a)(t,2),l=a[0],c=a[1],m=Object(n.useState)(),f=Object(u.a)(m,2),b=f[0],g=f[1],y=Object(n.useState)(),C=Object(u.a)(y,2),k=C[0],O=C[1],A=Object(n.useState)(),j=Object(u.a)(A,2),B=j[0],P=j[1];function x(t){e.updateArmy(t),O(!1),g(!1)}var H=0,L=0;if(e.crusadeArmy.units.forEach((function(e){H+=s(e),L+=e.powerLevel})),b)return r.a.createElement(M,{crusadeArmy:e.crusadeArmy,goBack:function(){return g(!1)},handleDeleteArmy:function(){return e.deleteArmy(e.crusadeArmy)},saveArmy:x});if(k||e.crusadeArmy.battleRosterUnitIds)return r.a.createElement(I,{crusadeArmy:e.crusadeArmy,goBack:function(){return O(!1)},updateArmy:x});if(l)return r.a.createElement(G,{deleteUnit:function(t){var a=Object(o.a)({},e.crusadeArmy),n=a.units.findIndex((function(e){return e.id===t.id}));n>=0&&a.units.splice(n,1),e.updateArmy(a),c(void 0)},goBack:function(){return c(void 0)},saveUnit:function(t){var a=Object(o.a)({},e.crusadeArmy),n=a.units.findIndex((function(e){return e.id===t.id}));n>=0?a.units.splice(n,1,t):a.units.push(t),e.updateArmy(a),c(t)},unit:l});if(B)return r.a.createElement(W,{goBack:function(){return P(!1)},crusadeArmy:e.crusadeArmy,updateArmy:x});var U=null;if(0!==e.crusadeArmy.units.length){U=r.a.createElement(_,{columns:[{Header:"Name",accessor:"name"},{Header:"CP",accessor:"crusadePoints"},{Header:"PL",accessor:"powerLevel"}],crusadeArmy:e.crusadeArmy,updateRowPosition:function(t,a){var n=Object(i.a)(e.crusadeArmy.units),r=n.findIndex((function(e){return e.id===t})),l=n.splice(r,1);n.splice(a,0,l[0]);var c=Object(o.a)({},e.crusadeArmy);c.units=n,e.updateArmy(c)},onRowClick:function(t){var a=e.crusadeArmy.units.find((function(e){return e.id===t}));a&&c(a)}})}var R=void 0;return e.crusadeArmy.detachmentTrait&&(R=r.a.createElement(p,{header:"Detachment Trait",nameEffects:[e.crusadeArmy.detachmentTrait]})),r.a.createElement(r.a.Fragment,null,r.a.createElement(S,{subHeaderInfo:[{name:"PL",value:L},{name:"CP",value:H}],headerText:d(e.crusadeArmy),onEdit:function(){return g(!0)}}),r.a.createElement(E.a,{className:"mb-2"},r.a.createElement(v.a,null,r.a.createElement(h.a.Label,null,"Requisition Points:")," "+e.crusadeArmy.requisitionPoints),r.a.createElement(v.a,null,r.a.createElement(N,{name:"Spend",onClick:function(){return P(!0)},small:!0}))),R,r.a.createElement(E.a,{className:"mb-2"},r.a.createElement(v.a,null,r.a.createElement(h.a.Label,null,r.a.createElement("h3",null,"Units"))),r.a.createElement(v.a,null,r.a.createElement(N,{name:"Add",onClick:function(){var t=0;e.crusadeArmy.units.forEach((function(e){e.id>t&&(t=e.id)})),c({id:t+1,agendaXp:0,battleHonours:[],battleParticipation:0,crusadePoints:0,kills:0,markedForGreatness:0,name:"",notes:"",battleScars:[],powerLevel:0})},small:!0}))),r.a.createElement(T,{firstColumn:"Power Level",secondColumn:L+"/"+e.crusadeArmy.maximumPowerLevel}),r.a.createElement(E.a,{className:"mb-2"},r.a.createElement(v.a,null,U)),r.a.createElement(w,{primaryButtonName:"Battle!",primaryButtonOnClick:function(){return O(!0)},secondaryButtonName:"Back",secondaryButtonOnClick:e.goBack}))};a(294);var te=function(){var e=Object(n.useState)(),t=Object(u.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(),i=Object(u.a)(c,2),m=i[0],f=i[1],p=Object(n.useState)(),g=Object(u.a)(p,2),y=g[0],h=g[1],C=Object(n.useState)(),N=Object(u.a)(C,2),O=N[0],A=N[1];function T(e){var t=JSON.parse(window.localStorage.getItem("crusadeArmies")||"[]"),a=t.findIndex((function(t){return t.id===e.id}));a>=0?t.splice(a,1,e):t.push(e),window.localStorage.setItem("crusadeArmies",JSON.stringify(t)),f(t);var n=t.find((function(t){return t.id===e.id}));h(n)}function j(e){var t=JSON.parse(window.localStorage.getItem("crusadeArmies")||"[]"),a=t.findIndex((function(t){return t.id===e.id}));a>=0&&t.splice(a,1),window.localStorage.setItem("crusadeArmies",JSON.stringify(t)),f(t),h(void 0)}if(Object(n.useEffect)((function(){var e=JSON.parse(window.localStorage.getItem("crusadeArmies")||"[]");f(e)}),[]),Object(n.useEffect)((function(){if(m){var e=m.map((function(e,t){var a=0,n=0;return e.units.forEach((function(e){a+=s(e),n+=e.powerLevel})),r.a.createElement(b.a,{className:"mb-3",key:t,onClick:function(){return h(e)},style:{border:"1px solid ".concat(e.traitColor||"rgb(0, 123, 255)")}},r.a.createElement(b.a.Body,null,r.a.createElement(b.a.Title,{as:"h2"},d(e)),r.a.createElement(b.a.Text,null,n+" PL ",a+" CP ",e.requisitionPoints+" RP")))}));A(e)}}),[m]),a)return r.a.createElement(M,{crusadeArmy:a,handleDeleteArmy:function(){return j(a)},goBack:function(){return l(void 0)},saveArmy:T});if(y){var w={color:y.traitColor||"blue",isUsingAlternateName:y.isUsingAlternateName,toggleIsUsingAlternateName:function(){if(y){var e=Object(o.a)({},y);e.isUsingAlternateName=void 0===y.isUsingAlternateName||!y.isUsingAlternateName,T(e)}}};return r.a.createElement(ne.Provider,{value:w},r.a.createElement(ee,{deleteArmy:j,crusadeArmy:y,goBack:function(){return h(void 0)},updateArmy:T}))}return r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a,{className:"my-2 mx-1 header"},r.a.createElement("h2",null,"Crusade Armies")),r.a.createElement(E.a,{className:"flex-grow-1",style:{overflow:"auto"}},r.a.createElement(v.a,null,O)),r.a.createElement(E.a,{md:"2"},r.a.createElement(v.a,{xs:4},r.a.createElement(k.a,{block:!0,size:"lg",variant:"primary",onClick:function(){var e,t={name:"",id:null!==(e=null===m||void 0===m?void 0:m.length)&&void 0!==e?e:0,maximumPowerLevel:50,requisitionPoints:5,units:[]};l(t)}},"Add"))))},ae=a(300),ne=r.a.createContext({color:"blue"});var re=function(){return r.a.createElement(ae.a,{fluid:!0,className:"h-100"},r.a.createElement(te,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(re,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},47:function(e,t,a){e.exports=a.p+"static/media/DeleteIcon.0d10f8f1.svg"}},[[117,1,2]]]);
//# sourceMappingURL=main.3d4ea775.chunk.js.map