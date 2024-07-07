(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[762],{76606:function(e,t,n){Promise.resolve().then(n.bind(n,743))},743:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return c}});var s=n(57437),o=n(58253),a=n(67506),i=n(48801),r=n(2265);function c(){return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(i.Z,{children:(0,s.jsx)(o.Z,{children:(0,s.jsx)(a.Z,{mode:"zg-server-time",loading:(0,s.jsx)("p",{children:"Synchronising..."}),error:(0,s.jsx)("p",{children:"Synchronisation error"}),children:(0,s.jsx)(()=>{var e=(0,r.useContext)(a.G);let[t,n]=(0,r.useState)(0);return(0,r.useEffect)(()=>{let t=()=>{n(e.toServerTime(Date.now()))},s=setInterval(()=>t(),0);return()=>{clearInterval(s)}},[e]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h1",{children:new Date(t).toISOString()}),(0,s.jsxs)("p",{children:["offset: ",e.offset]}),(0,s.jsxs)("p",{children:["rtt: ",e.rtt]}),(0,s.jsxs)("p",{children:["source: ",(0,s.jsx)("code",{children:JSON.stringify(e.source)})]}),(0,s.jsx)("p",{children:(0,s.jsx)("span",{style:{fontSize:256},children:new Date(t).getSeconds()})})]})},{})})})})})}},69026:function(e,t,n){"use strict";n.d(t,{N:function(){return s},Z:function(){return o}});let s=(e,t)=>{let{sid:n,pid:s,qid:o}=e;return{id:void 0,created:void 0,questionId:o,participantId:s,jsonValue:void 0,mimeType:void 0,pII:t}};class o{async getServerTime(){return console.debug("getServerTime"),new Promise(async(e,t)=>{let n=await fetch("".concat(this.baseUri,"/utils/servertime"),{method:"GET",headers:{"Content-Type":"application/json"}});n.ok?e(JSON.parse(await n.text())):t(n.statusText)})}async postDeliberationSessionAdmin(e,t){return console.debug("postDeliberationSessionAdmin"),new Promise(async(n,s)=>{let o={method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e)},body:JSON.stringify(t)},a=await fetch("".concat(this.baseUri,"/sessions/admin"),o);a.ok?n(JSON.parse(await a.text())):s(a.statusText)})}async putDeliberationSessionAdmin(e,t){return console.debug("putDeliberationSessionAdmin"),new Promise(async(n,s)=>{let o={method:"PUT",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e)},body:JSON.stringify(t)},a=await fetch("".concat(this.baseUri,"/sessions/admin/").concat(t.id),o);a.ok?n(JSON.parse(await a.text())):s(a.statusText)})}async postFacilitatorAction(e,t,n){return console.debug("postFacilitatorAction",n.action),new Promise(async(s,o)=>{let a={method:"POST",headers:{"Content-Type":"application/json","X-Deliberation-Session-Token":t,Authorization:"Bearer ".concat(e)},body:JSON.stringify(n)},i=await fetch("".concat(this.baseUri,"/sessions/admin/actions/").concat(n.sessionId),a);i.ok?s(JSON.parse(await i.text())):o(i.statusText)})}async getDeliberationSessionAdmin(e,t){return console.debug("getDeliberationSessionAdmin",e,t?"(with access token)":""),new Promise(async(n,s)=>{let o={method:"GET",headers:{"Content-Type":"application/json"}};t&&(o.headers.Authorization="Bearer ".concat(t));let a=await fetch("".concat(this.baseUri,"/sessions/admin/").concat(e),o);a.ok?n(JSON.parse(await a.text())):s(a.statusText)})}async listDeliberationSessions(e){return console.debug("listDeliberationSessions"),new Promise(async(t,n)=>{let s=await fetch("".concat(this.baseUri,"/sessions"),{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e)}});s.ok?t(JSON.parse(await s.text())):n(s.statusText)})}async getDeliberationSession(e,t){return console.debug("getDeliberationSession",e,t?"(with access token)":""),new Promise(async(n,s)=>{let o={method:"GET",headers:{"Content-Type":"application/json"}};t&&(o.headers.Authorization="Bearer ".concat(t));let a=await fetch("".concat(this.baseUri,"/sessions/").concat(e),o);a.ok?n(JSON.parse(await a.text())):s(a.statusText)})}async retrieveMeetingAttendeeData(e,t,n,s,o){console.debug("getDeliberationSessionMeeting");let a={name:s,participantId:n};return new Promise(async(n,s)=>{let i="".concat(this.baseUri,"/sessions/").concat(e,"/attendee"),r={method:"POST",headers:{"Content-Type":"application/json","X-Deliberation-Session-Token":t},body:JSON.stringify(a)};o&&(r.headers.Authorization="Bearer ".concat(o),i="".concat(this.baseUri,"/sessions/admin/").concat(e,"/attendee"));let c=await fetch(i,r);c.ok?n(JSON.parse(await c.text())):s(c.statusText)})}async exchangeJoinCodeForSessionToken(e){return console.debug("exchangeJoinCodeForSessionToken"),new Promise(async(t,n)=>{let s={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)},o=e.sessionId,a=await fetch("".concat(this.baseUri,"/sessions/").concat(o,"/token"),s);a.ok?t(JSON.parse(await a.text())):n(a.statusText)})}async postDeliberationAnswer(e,t,n){console.debug("postDeliberationAnswer",t);let s=t.questionId;return new Promise(async(o,a)=>{let i={method:"POST",headers:{"Content-Type":"application/json","X-Deliberation-Session-Token":n},body:JSON.stringify(t)},r=await fetch("".concat(this.baseUri,"/sessions/").concat(e,"/questions/").concat(s,"/answers"),i);r.ok?o(JSON.parse(await r.text())):a(r.statusText)})}async getDeliberationAnswer(e,t,n,s){return console.debug("getDeliberationAnswer",e,t,n),new Promise(async(o,a)=>{let i=await fetch("".concat(this.baseUri,"/sessions/").concat(e,"/questions/").concat(t,"/answers?pid=").concat(n),{method:"GET",headers:{"Content-Type":"application/json","X-Deliberation-Session-Token":s}});if(i.ok){let s=JSON.parse(await i.text());s.length>1&&a("".concat(s.length," answers returned for sid: ").concat(e,", qid: ").concat(t,", pid: ").concat(n," - there should be 0 or 1")),o(0==s.length?null:s[0])}else a(i.statusText)})}async getDeliberationAnswersForQuestion(e,t,n){return console.debug("getDeliberationAnswersForQuestion",e,t),new Promise(async(s,o)=>{let a=await fetch("".concat(this.baseUri,"/sessions/").concat(e,"/questions/").concat(t,"/answers"),{method:"GET",headers:{"Content-Type":"application/json","X-Deliberation-Session-Token":n}});a.ok?s(JSON.parse(await a.text())):o(a.statusText)})}async getDeliberationAnswersForParticipant(e,t,n){return console.debug("getDeliberationAnswersForParticipant",e,t),new Promise(async(s,o)=>{let a=await fetch("".concat(this.baseUri,"/sessions/").concat(e,"/participants/").concat(t,"/answers"),{method:"GET",headers:{"Content-Type":"application/json","X-Deliberation-Session-Token":n}});a.ok?s(JSON.parse(await a.text())):o(a.statusText)})}async getSessionContentAccessUrls(e,t,n){return console.debug("Retrieving ".concat(n.objectKeys.length," session content access URLs...")),new Promise(async(s,o)=>{let a={method:"POST",headers:{"Content-Type":"application/json","X-Deliberation-Session-Token":t},body:JSON.stringify(n)},i=await fetch("".concat(this.baseUri,"/sessions/").concat(e,"/content"),a);i.ok?s(JSON.parse(await i.text())):o(i.statusText)})}async getPublicContentAccessUrls(e,t){return console.debug("Retrieving public content access URLs for ".concat(t.workshopDirectory,"...")),new Promise(async(n,s)=>{let o={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)},a=await fetch("".concat(this.baseUri,"/sessions/").concat(e,"/content/public"),o);a.ok?n(JSON.parse(await a.text())):s(a.statusText)})}constructor(e){this.baseUri=e}}},58253:function(e,t,n){"use strict";n.d(t,{A:function(){return i},Z:function(){return r}});var s=n(57437),o=n(2265),a=n(69026);let i=(0,o.createContext)({});function r(e){let{baseUrl:t,children:n}=e,r=null!=t?t:"https://hf3n3vkh6g.execute-api.eu-west-2.amazonaws.com/prod";if(!r)throw"No base url found for Zeitgeist API";let[c,l]=(0,o.useState)(new a.Z(r));return(0,s.jsx)(i.Provider,{value:c,children:n})}},67506:function(e,t,n){"use strict";n.d(t,{G:function(){return u},Z:function(){return d}});var s,o,a=n(57437),i=n(2265),r=n(80237),c=n(75511),l=n(58253);let u=(0,i.createContext)({});function d(e){var t;let n=(0,i.useContext)(l.A),[s,d]=(0,i.useState)(0),[h,p]=(0,i.useState)(),[S,b]=(0,i.useState)(null!==(t=e.checks)&&void 0!==t?t:3);(0,i.useEffect)(()=>{switch(console.debug("ZgServerTimeProvider state",o[s]),s){case 0:c.Z.emit({type:c.z.Content_Progress_Update,data:{overall:{completed:0,total:S},bars:{}}}),d(1);break;case 1:m().then(e=>{p(e),d(3)}).catch(e=>{console.error(e),d(2)})}},[s]);let m=async()=>{switch(e.mode){case"server-date-lib":return f();case"zg-server-time":return w();default:throw Error("Unsupported time sync mode")}},w=async()=>{let e;console.debug("zg-server-time warmup",await n.getServerTime());let t=Number.MAX_SAFE_INTEGER,s=0;for(let o=0;o<S;o++){let a=Date.now(),i=await n.getServerTime(),r=Date.now();console.debug("zg-server-time response",i);let l=r-a,u=(a+r)/2,d=i.timestamp-u;l<t&&(t=l,s=d,e=i),c.Z.emit({type:c.z.Content_Progress_Update,data:{overall:{completed:o+1,total:S},bars:{}}}),await new Promise(e=>setTimeout(e,1e3))}let o={offset:s,rtt:t,source:e,toServerTime:e=>e+s,fromServerTime:e=>e-s};return console.debug("zg-server-time result",o),o},f=async()=>{let e;console.warn("ServerDateLib is only accurate to the second.");for(let t=0;t<S;t++){await new Promise(e=>setTimeout(e,1e3));let n=await (0,r.a)();(void 0===e||Math.abs(n.uncertainty)<Math.abs(e.uncertainty))&&(e=n),c.Z.emit({type:c.z.Content_Progress_Update,data:{overall:{completed:t+1,total:S},bars:{}}})}let t={offset:e.offset,source:e,rtt:e.uncertainty,toServerTime:t=>t+e.offset,fromServerTime:t=>t-e.offset};return console.debug("server-date result",e),t};return(0,a.jsxs)(a.Fragment,{children:[(0===s||1===s)&&e.loading,2===s&&e.error,3===s&&(0,a.jsx)(u.Provider,{value:h,children:e.children})]})}(s=o||(o={}))[s.Init=0]="Init",s[s.Synchronising=1]="Synchronising",s[s.Error=2]="Error",s[s.Complete=3]="Complete"},75511:function(e,t,n){"use strict";n.d(t,{z:function(){return o}});var s,o,a=n(37836),i=n.n(a);(s=o||(o={})).Request_SlideRefresh="REQUEST_SLIDE_REFRESH",s.WSS_Update_ConnectionState="WSS_UPDATE_CONNECTION_STATE",s.WSS_Distribute_Message="WSS_DISTRIBUTE_MESSAGE",s.Content_Progress_Update="CONTENT_PROGRESS_UPDATE";let r=new(i()),c={on:(e,t)=>r.on(e,t),once:(e,t)=>r.once(e,t),off:(e,t)=>r.off(e,t),emit:e=>r.emit(e.type,e)};Object.freeze(c),t.Z=c}},function(e){e.O(0,[292,887,501,971,23,744],function(){return e(e.s=76606)}),_N_E=e.O()}]);