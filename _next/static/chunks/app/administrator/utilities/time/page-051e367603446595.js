(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[762],{76606:function(e,t,n){Promise.resolve().then(n.bind(n,41307))},68935:function(e,t,n){"use strict";n.d(t,{Z:function(){return g}});var s=n(23950),o=n(22988),r=n(2265),i=n(44839),a=n(87542),c=n(26259),l=n(41259),u=n(48762),d=n(47794),h=n(13143),p=n(57437);let f=["className","component","disableGutters","fixed","maxWidth","classes"],m=(0,h.Z)(),b=(0,d.Z)("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.root,t[`maxWidth${(0,l.Z)(String(n.maxWidth))}`],n.fixed&&t.fixed,n.disableGutters&&t.disableGutters]}}),y=e=>(0,u.Z)({props:e,name:"MuiContainer",defaultTheme:m}),w=(e,t)=>{let{classes:n,fixed:s,disableGutters:o,maxWidth:r}=e,i={root:["root",r&&`maxWidth${(0,l.Z)(String(r))}`,s&&"fixed",o&&"disableGutters"]};return(0,c.Z)(i,e=>(0,a.ZP)(t,e),n)};function g(e={}){let{createStyledComponent:t=b,useThemeProps:n=y,componentName:a="MuiContainer"}=e,c=t(({theme:e,ownerState:t})=>(0,o.Z)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!t.disableGutters&&{paddingLeft:e.spacing(2),paddingRight:e.spacing(2),[e.breakpoints.up("sm")]:{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}}),({theme:e,ownerState:t})=>t.fixed&&Object.keys(e.breakpoints.values).reduce((t,n)=>{let s=e.breakpoints.values[n];return 0!==s&&(t[e.breakpoints.up(n)]={maxWidth:`${s}${e.breakpoints.unit}`}),t},{}),({theme:e,ownerState:t})=>(0,o.Z)({},"xs"===t.maxWidth&&{[e.breakpoints.up("xs")]:{maxWidth:Math.max(e.breakpoints.values.xs,444)}},t.maxWidth&&"xs"!==t.maxWidth&&{[e.breakpoints.up(t.maxWidth)]:{maxWidth:`${e.breakpoints.values[t.maxWidth]}${e.breakpoints.unit}`}}));return r.forwardRef(function(e,t){let r=n(e),{className:l,component:u="div",disableGutters:d=!1,fixed:h=!1,maxWidth:m="lg"}=r,b=(0,s.Z)(r,f),y=(0,o.Z)({},r,{component:u,disableGutters:d,fixed:h,maxWidth:m}),g=w(y,a);return(0,p.jsx)(c,(0,o.Z)({as:u,ownerState:y,className:(0,i.Z)(g.root,l),ref:t},b))})}},47794:function(e,t,n){"use strict";let s=(0,n(87906).ZP)();t.Z=s},80237:function(e,t,n){"use strict";n.d(t,{a:function(){return o}});let s=async()=>{let e=new Date,{headers:t,ok:n,statusText:s}=await fetch(window.location,{cache:"no-store",method:"HEAD"});if(!n)throw Error(`Bad date sample from server: ${s}`);return{requestDate:e,responseDate:new Date,serverDate:new Date(t.get("Date"))}},o=async({fetchSample:e}={fetchSample:s})=>{let t={uncertainty:Number.MAX_VALUE};for(let n=0;n<10;n++)try{let{requestDate:n,responseDate:s,serverDate:o}=await e(),r=(s-n)/2+500;if(r<t.uncertainty){let e=new Date(o.getTime()+500);t={date:e,offset:e-s,uncertainty:r}}}catch(e){console.warn(e)}return t}},37836:function(e){"use strict";var t=Object.prototype.hasOwnProperty,n="~";function s(){}function o(e,t,n){this.fn=e,this.context=t,this.once=n||!1}function r(e,t,s,r,i){if("function"!=typeof s)throw TypeError("The listener must be a function");var a=new o(s,r||e,i),c=n?n+t:t;return e._events[c]?e._events[c].fn?e._events[c]=[e._events[c],a]:e._events[c].push(a):(e._events[c]=a,e._eventsCount++),e}function i(e,t){0==--e._eventsCount?e._events=new s:delete e._events[t]}function a(){this._events=new s,this._eventsCount=0}Object.create&&(s.prototype=Object.create(null),new s().__proto__||(n=!1)),a.prototype.eventNames=function(){var e,s,o=[];if(0===this._eventsCount)return o;for(s in e=this._events)t.call(e,s)&&o.push(n?s.slice(1):s);return Object.getOwnPropertySymbols?o.concat(Object.getOwnPropertySymbols(e)):o},a.prototype.listeners=function(e){var t=n?n+e:e,s=this._events[t];if(!s)return[];if(s.fn)return[s.fn];for(var o=0,r=s.length,i=Array(r);o<r;o++)i[o]=s[o].fn;return i},a.prototype.listenerCount=function(e){var t=n?n+e:e,s=this._events[t];return s?s.fn?1:s.length:0},a.prototype.emit=function(e,t,s,o,r,i){var a=n?n+e:e;if(!this._events[a])return!1;var c,l,u=this._events[a],d=arguments.length;if(u.fn){switch(u.once&&this.removeListener(e,u.fn,void 0,!0),d){case 1:return u.fn.call(u.context),!0;case 2:return u.fn.call(u.context,t),!0;case 3:return u.fn.call(u.context,t,s),!0;case 4:return u.fn.call(u.context,t,s,o),!0;case 5:return u.fn.call(u.context,t,s,o,r),!0;case 6:return u.fn.call(u.context,t,s,o,r,i),!0}for(l=1,c=Array(d-1);l<d;l++)c[l-1]=arguments[l];u.fn.apply(u.context,c)}else{var h,p=u.length;for(l=0;l<p;l++)switch(u[l].once&&this.removeListener(e,u[l].fn,void 0,!0),d){case 1:u[l].fn.call(u[l].context);break;case 2:u[l].fn.call(u[l].context,t);break;case 3:u[l].fn.call(u[l].context,t,s);break;case 4:u[l].fn.call(u[l].context,t,s,o);break;default:if(!c)for(h=1,c=Array(d-1);h<d;h++)c[h-1]=arguments[h];u[l].fn.apply(u[l].context,c)}}return!0},a.prototype.on=function(e,t,n){return r(this,e,t,n,!1)},a.prototype.once=function(e,t,n){return r(this,e,t,n,!0)},a.prototype.removeListener=function(e,t,s,o){var r=n?n+e:e;if(!this._events[r])return this;if(!t)return i(this,r),this;var a=this._events[r];if(a.fn)a.fn!==t||o&&!a.once||s&&a.context!==s||i(this,r);else{for(var c=0,l=[],u=a.length;c<u;c++)(a[c].fn!==t||o&&!a[c].once||s&&a[c].context!==s)&&l.push(a[c]);l.length?this._events[r]=1===l.length?l[0]:l:i(this,r)}return this},a.prototype.removeAllListeners=function(e){var t;return e?(t=n?n+e:e,this._events[t]&&i(this,t)):(this._events=new s,this._eventsCount=0),this},a.prototype.off=a.prototype.removeListener,a.prototype.addListener=a.prototype.on,a.prefixed=n,a.EventEmitter=a,e.exports=a},41307:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return h}});var s=n(57437),o=n(58253),r=n(67506),i=n(68935),a=n(12272),c=n(48024),l=n(69281);let u=(0,i.Z)({createStyledComponent:(0,c.ZP)("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.root,t["maxWidth".concat((0,a.Z)(String(n.maxWidth)))],n.fixed&&t.fixed,n.disableGutters&&t.disableGutters]}}),useThemeProps:e=>(0,l.Z)({props:e,name:"MuiContainer"})});var d=n(2265);function h(){return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(u,{children:(0,s.jsx)(o.Z,{children:(0,s.jsx)(r.Z,{mode:"zg-server-time",loading:(0,s.jsx)("p",{children:"Synchronising..."}),error:(0,s.jsx)("p",{children:"Synchronisation error"}),children:(0,s.jsx)(()=>{var e=(0,d.useContext)(r.G);let[t,n]=(0,d.useState)(0);return(0,d.useEffect)(()=>{let t=()=>{n(e.toServerTime(Date.now()))},s=setInterval(()=>t(),0);return()=>{clearInterval(s)}},[e]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h1",{children:new Date(t).toISOString()}),(0,s.jsxs)("p",{children:["offset: ",e.offset]}),(0,s.jsxs)("p",{children:["rtt: ",e.rtt]}),(0,s.jsxs)("p",{children:["source: ",(0,s.jsx)("code",{children:JSON.stringify(e.source)})]}),(0,s.jsx)("p",{children:(0,s.jsx)("span",{style:{fontSize:256},children:new Date(t).getSeconds()})})]})},{})})})})})}},69026:function(e,t,n){"use strict";n.d(t,{N:function(){return s},Z:function(){return o}});let s=(e,t)=>{let{sid:n,pid:s,qid:o}=e;return{id:void 0,created:void 0,questionId:o,participantId:s,jsonValue:void 0,mimeType:void 0,pII:t}};class o{async getServerTime(){return console.debug("getServerTime"),new Promise(async(e,t)=>{let n=await fetch("".concat(this.baseUri,"/utils/servertime"),{method:"GET",headers:{"Content-Type":"application/json"}});n.ok?e(JSON.parse(await n.text())):t(n.statusText)})}async postDeliberationSessionAdmin(e,t){return console.debug("postDeliberationSessionAdmin"),new Promise(async(n,s)=>{let o={method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e)},body:JSON.stringify(t)},r=await fetch("".concat(this.baseUri,"/sessions/admin"),o);r.ok?n(JSON.parse(await r.text())):s(r.statusText)})}async putDeliberationSessionAdmin(e,t){return console.debug("putDeliberationSessionAdmin"),new Promise(async(n,s)=>{let o={method:"PUT",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e)},body:JSON.stringify(t)},r=await fetch("".concat(this.baseUri,"/sessions/admin/").concat(t.id),o);r.ok?n(JSON.parse(await r.text())):s(r.statusText)})}async postFacilitatorAction(e,t,n){return console.debug("postFacilitatorAction",n.action),new Promise(async(s,o)=>{let r={method:"POST",headers:{"Content-Type":"application/json","X-Deliberation-Session-Token":t,Authorization:"Bearer ".concat(e)},body:JSON.stringify(n)},i=await fetch("".concat(this.baseUri,"/sessions/admin/actions/").concat(n.sessionId),r);i.ok?s(JSON.parse(await i.text())):o(i.statusText)})}async getDeliberationSessionAdmin(e,t){return console.debug("getDeliberationSessionAdmin",e,t?"(with access token)":""),new Promise(async(n,s)=>{let o={method:"GET",headers:{"Content-Type":"application/json"}};t&&(o.headers.Authorization="Bearer ".concat(t));let r=await fetch("".concat(this.baseUri,"/sessions/admin/").concat(e),o);r.ok?n(JSON.parse(await r.text())):s(r.statusText)})}async listDeliberationSessions(e){return console.debug("listDeliberationSessions"),new Promise(async(t,n)=>{let s=await fetch("".concat(this.baseUri,"/sessions"),{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e)}});s.ok?t(JSON.parse(await s.text())):n(s.statusText)})}async getDeliberationSession(e,t){return console.debug("getDeliberationSession",e,t?"(with access token)":""),new Promise(async(n,s)=>{let o={method:"GET",headers:{"Content-Type":"application/json"}};t&&(o.headers.Authorization="Bearer ".concat(t));let r=await fetch("".concat(this.baseUri,"/sessions/").concat(e),o);r.ok?n(JSON.parse(await r.text())):s(r.statusText)})}async retrieveMeetingAttendeeData(e,t,n,s,o){console.debug("getDeliberationSessionMeeting");let r={name:s,participantId:n};return new Promise(async(n,s)=>{let i="".concat(this.baseUri,"/sessions/").concat(e,"/attendee"),a={method:"POST",headers:{"Content-Type":"application/json","X-Deliberation-Session-Token":t},body:JSON.stringify(r)};o&&(a.headers.Authorization="Bearer ".concat(o),i="".concat(this.baseUri,"/sessions/admin/").concat(e,"/attendee"));let c=await fetch(i,a);c.ok?n(JSON.parse(await c.text())):s(c.statusText)})}async exchangeJoinCodeForSessionToken(e){return console.debug("exchangeJoinCodeForSessionToken"),new Promise(async(t,n)=>{let s={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)},o=e.sessionId,r=await fetch("".concat(this.baseUri,"/sessions/").concat(o,"/token"),s);r.ok?t(JSON.parse(await r.text())):n(r.statusText)})}async postDeliberationAnswer(e,t,n){console.debug("postDeliberationAnswer",t);let s=t.questionId;return new Promise(async(o,r)=>{let i={method:"POST",headers:{"Content-Type":"application/json","X-Deliberation-Session-Token":n},body:JSON.stringify(t)},a=await fetch("".concat(this.baseUri,"/sessions/").concat(e,"/questions/").concat(s,"/answers"),i);a.ok?o(JSON.parse(await a.text())):r(a.statusText)})}async getDeliberationAnswer(e,t,n,s){return console.debug("getDeliberationAnswer",e,t,n),new Promise(async(o,r)=>{let i=await fetch("".concat(this.baseUri,"/sessions/").concat(e,"/questions/").concat(t,"/answers?pid=").concat(n),{method:"GET",headers:{"Content-Type":"application/json","X-Deliberation-Session-Token":s}});if(i.ok){let s=JSON.parse(await i.text());s.length>1&&r("".concat(s.length," answers returned for sid: ").concat(e,", qid: ").concat(t,", pid: ").concat(n," - there should be 0 or 1")),o(0==s.length?null:s[0])}else r(i.statusText)})}async getDeliberationAnswersForQuestion(e,t,n){return console.debug("getDeliberationAnswersForQuestion",e,t),new Promise(async(s,o)=>{let r=await fetch("".concat(this.baseUri,"/sessions/").concat(e,"/questions/").concat(t,"/answers"),{method:"GET",headers:{"Content-Type":"application/json","X-Deliberation-Session-Token":n}});r.ok?s(JSON.parse(await r.text())):o(r.statusText)})}async getDeliberationAnswersForParticipant(e,t,n){return console.debug("getDeliberationAnswersForParticipant",e,t),new Promise(async(s,o)=>{let r=await fetch("".concat(this.baseUri,"/sessions/").concat(e,"/participants/").concat(t,"/answers"),{method:"GET",headers:{"Content-Type":"application/json","X-Deliberation-Session-Token":n}});r.ok?s(JSON.parse(await r.text())):o(r.statusText)})}async getSessionContentAccessUrls(e,t,n){return console.debug("Retrieving ".concat(n.objectKeys.length," session content access URLs...")),new Promise(async(s,o)=>{let r={method:"POST",headers:{"Content-Type":"application/json","X-Deliberation-Session-Token":t},body:JSON.stringify(n)},i=await fetch("".concat(this.baseUri,"/sessions/").concat(e,"/content"),r);i.ok?s(JSON.parse(await i.text())):o(i.statusText)})}async getPublicContentAccessUrls(e,t){return console.debug("Retrieving public content access URLs for ".concat(t.workshopDirectory,"...")),new Promise(async(n,s)=>{let o={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)},r=await fetch("".concat(this.baseUri,"/sessions/").concat(e,"/content/public"),o);r.ok?n(JSON.parse(await r.text())):s(r.statusText)})}constructor(e){this.baseUri=e}}},58253:function(e,t,n){"use strict";n.d(t,{A:function(){return i},Z:function(){return a}});var s=n(57437),o=n(2265),r=n(69026);let i=(0,o.createContext)({});function a(e){let{baseUrl:t,children:n}=e,a=null!=t?t:"https://bn6162p474.execute-api.eu-west-2.amazonaws.com/prod";if(!a)throw"No base url found for Zeitgeist API";let[c,l]=(0,o.useState)(new r.Z(a));return(0,s.jsx)(i.Provider,{value:c,children:n})}},67506:function(e,t,n){"use strict";n.d(t,{G:function(){return u},Z:function(){return d}});var s,o,r=n(57437),i=n(2265),a=n(80237),c=n(75511),l=n(58253);let u=(0,i.createContext)({});function d(e){var t;let n=(0,i.useContext)(l.A),[s,d]=(0,i.useState)(0),[h,p]=(0,i.useState)(),[f,m]=(0,i.useState)(null!==(t=e.checks)&&void 0!==t?t:3);(0,i.useEffect)(()=>{switch(console.debug("ZgServerTimeProvider state",o[s]),s){case 0:c.Z.emit({type:c.z.Content_Progress_Update,data:{overall:{completed:0,total:f},bars:{}}}),d(1);break;case 1:b().then(e=>{p(e),d(3)}).catch(e=>{console.error(e),d(2)})}},[s]);let b=async()=>{switch(e.mode){case"server-date-lib":return w();case"zg-server-time":return y();default:throw Error("Unsupported time sync mode")}},y=async()=>{let e;console.debug("zg-server-time warmup",await n.getServerTime());let t=Number.MAX_SAFE_INTEGER,s=0;for(let o=0;o<f;o++){let r=Date.now(),i=await n.getServerTime(),a=Date.now();console.debug("zg-server-time response",i);let l=a-r,u=(r+a)/2,d=i.timestamp-u;l<t&&(t=l,s=d,e=i),c.Z.emit({type:c.z.Content_Progress_Update,data:{overall:{completed:o+1,total:f},bars:{}}}),await new Promise(e=>setTimeout(e,1e3))}let o={offset:s,rtt:t,source:e,toServerTime:e=>e+s,fromServerTime:e=>e-s};return console.debug("zg-server-time result",o),o},w=async()=>{let e;console.warn("ServerDateLib is only accurate to the second.");for(let t=0;t<f;t++){await new Promise(e=>setTimeout(e,1e3));let n=await (0,a.a)();(void 0===e||Math.abs(n.uncertainty)<Math.abs(e.uncertainty))&&(e=n),c.Z.emit({type:c.z.Content_Progress_Update,data:{overall:{completed:t+1,total:f},bars:{}}})}let t={offset:e.offset,source:e,rtt:e.uncertainty,toServerTime:t=>t+e.offset,fromServerTime:t=>t-e.offset};return console.debug("server-date result",e),t};return(0,r.jsxs)(r.Fragment,{children:[(0===s||1===s)&&e.loading,2===s&&e.error,3===s&&(0,r.jsx)(u.Provider,{value:h,children:e.children})]})}(s=o||(o={}))[s.Init=0]="Init",s[s.Synchronising=1]="Synchronising",s[s.Error=2]="Error",s[s.Complete=3]="Complete"},75511:function(e,t,n){"use strict";n.d(t,{z:function(){return o}});var s,o,r=n(37836),i=n.n(r);(s=o||(o={})).Request_SlideRefresh="REQUEST_SLIDE_REFRESH",s.WSS_Update_ConnectionState="WSS_UPDATE_CONNECTION_STATE",s.WSS_Distribute_Message="WSS_DISTRIBUTE_MESSAGE",s.Content_Progress_Update="CONTENT_PROGRESS_UPDATE";let a=new(i()),c={on:(e,t)=>a.on(e,t),once:(e,t)=>a.once(e,t),off:(e,t)=>a.off(e,t),emit:e=>a.emit(e.type,e)};Object.freeze(c),t.Z=c}},function(e){e.O(0,[292,559,971,23,744],function(){return e(e.s=76606)}),_N_E=e.O()}]);