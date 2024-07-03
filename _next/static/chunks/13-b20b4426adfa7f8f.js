"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[13],{69026:function(e,t,n){n.d(t,{N:function(){return s},Z:function(){return o}});let s=(e,t)=>{let{sid:n,pid:s,qid:o}=e;return{id:void 0,created:void 0,questionId:o,participantId:s,jsonValue:void 0,mimeType:void 0,pII:t}};class o{async getServerTime(){return console.debug("getServerTime"),new Promise(async(e,t)=>{let n=await fetch("".concat(this.baseUri,"/utils/servertime"),{method:"GET",headers:{"Content-Type":"application/json"}});n.ok?e(JSON.parse(await n.text())):t(n.statusText)})}async postDeliberationSessionAdmin(e,t){return console.debug("postDeliberationSessionAdmin"),new Promise(async(n,s)=>{let o={method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e)},body:JSON.stringify(t)},i=await fetch("".concat(this.baseUri,"/sessions/admin"),o);i.ok?n(JSON.parse(await i.text())):s(i.statusText)})}async putDeliberationSessionAdmin(e,t){return console.debug("putDeliberationSessionAdmin"),new Promise(async(n,s)=>{let o={method:"PUT",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e)},body:JSON.stringify(t)},i=await fetch("".concat(this.baseUri,"/sessions/admin/").concat(t.id),o);i.ok?n(JSON.parse(await i.text())):s(i.statusText)})}async postFacilitatorAction(e,t,n){return console.debug("postFacilitatorAction",n.action),new Promise(async(s,o)=>{let i={method:"POST",headers:{"Content-Type":"application/json","X-Deliberation-Session-Token":t,Authorization:"Bearer ".concat(e)},body:JSON.stringify(n)},a=await fetch("".concat(this.baseUri,"/sessions/admin/actions/").concat(n.sessionId),i);a.ok?s(JSON.parse(await a.text())):o(a.statusText)})}async getDeliberationSessionAdmin(e,t){return console.debug("getDeliberationSessionAdmin",e,t?"(with access token)":""),new Promise(async(n,s)=>{let o={method:"GET",headers:{"Content-Type":"application/json"}};t&&(o.headers.Authorization="Bearer ".concat(t));let i=await fetch("".concat(this.baseUri,"/sessions/admin/").concat(e),o);i.ok?n(JSON.parse(await i.text())):s(i.statusText)})}async listDeliberationSessions(e){return console.debug("listDeliberationSessions"),new Promise(async(t,n)=>{let s=await fetch("".concat(this.baseUri,"/sessions"),{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e)}});s.ok?t(JSON.parse(await s.text())):n(s.statusText)})}async getDeliberationSession(e,t){return console.debug("getDeliberationSession",e,t?"(with access token)":""),new Promise(async(n,s)=>{let o={method:"GET",headers:{"Content-Type":"application/json"}};t&&(o.headers.Authorization="Bearer ".concat(t));let i=await fetch("".concat(this.baseUri,"/sessions/").concat(e),o);i.ok?n(JSON.parse(await i.text())):s(i.statusText)})}async retrieveMeetingAttendeeData(e,t,n,s,o){console.debug("getDeliberationSessionMeeting");let i={name:s,participantId:n};return new Promise(async(n,s)=>{let a="".concat(this.baseUri,"/sessions/").concat(e,"/attendee"),r={method:"POST",headers:{"Content-Type":"application/json","X-Deliberation-Session-Token":t},body:JSON.stringify(i)};o&&(r.headers.Authorization="Bearer ".concat(o),a="".concat(this.baseUri,"/sessions/admin/").concat(e,"/attendee"));let c=await fetch(a,r);c.ok?n(JSON.parse(await c.text())):s(c.statusText)})}async exchangeJoinCodeForSessionToken(e){return console.debug("exchangeJoinCodeForSessionToken"),new Promise(async(t,n)=>{let s={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)},o=e.sessionId,i=await fetch("".concat(this.baseUri,"/sessions/").concat(o,"/token"),s);i.ok?t(JSON.parse(await i.text())):n(i.statusText)})}async postDeliberationAnswer(e,t,n){console.debug("postDeliberationAnswer",t);let s=t.questionId;return new Promise(async(o,i)=>{let a={method:"POST",headers:{"Content-Type":"application/json","X-Deliberation-Session-Token":n},body:JSON.stringify(t)},r=await fetch("".concat(this.baseUri,"/sessions/").concat(e,"/questions/").concat(s,"/answers"),a);r.ok?o(JSON.parse(await r.text())):i(r.statusText)})}async getDeliberationAnswer(e,t,n,s){return console.debug("getDeliberationAnswer",e,t,n),new Promise(async(o,i)=>{let a=await fetch("".concat(this.baseUri,"/sessions/").concat(e,"/questions/").concat(t,"/answers?pid=").concat(n),{method:"GET",headers:{"Content-Type":"application/json","X-Deliberation-Session-Token":s}});if(a.ok){let s=JSON.parse(await a.text());s.length>1&&i("".concat(s.length," answers returned for sid: ").concat(e,", qid: ").concat(t,", pid: ").concat(n," - there should be 0 or 1")),o(0==s.length?null:s[0])}else i(a.statusText)})}async getDeliberationAnswersForQuestion(e,t,n){return console.debug("getDeliberationAnswersForQuestion",e,t),new Promise(async(s,o)=>{let i=await fetch("".concat(this.baseUri,"/sessions/").concat(e,"/questions/").concat(t,"/answers"),{method:"GET",headers:{"Content-Type":"application/json","X-Deliberation-Session-Token":n}});i.ok?s(JSON.parse(await i.text())):o(i.statusText)})}async getDeliberationAnswersForParticipant(e,t,n){return console.debug("getDeliberationAnswersForParticipant",e,t),new Promise(async(s,o)=>{let i=await fetch("".concat(this.baseUri,"/sessions/").concat(e,"/participants/").concat(t,"/answers"),{method:"GET",headers:{"Content-Type":"application/json","X-Deliberation-Session-Token":n}});i.ok?s(JSON.parse(await i.text())):o(i.statusText)})}async getSessionContentAccessUrls(e,t,n){return console.debug("Retrieving ".concat(n.objectKeys.length," session content access URLs...")),new Promise(async(s,o)=>{let i={method:"POST",headers:{"Content-Type":"application/json","X-Deliberation-Session-Token":t},body:JSON.stringify(n)},a=await fetch("".concat(this.baseUri,"/sessions/").concat(e,"/content"),i);a.ok?s(JSON.parse(await a.text())):o(a.statusText)})}async getPublicContentAccessUrls(e,t){return console.debug("Retrieving public content access URLs for ".concat(t.workshopDirectory,"...")),new Promise(async(n,s)=>{let o={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)},i=await fetch("".concat(this.baseUri,"/sessions/").concat(e,"/content/public"),o);i.ok?n(JSON.parse(await i.text())):s(i.statusText)})}constructor(e){this.baseUri=e}}},58253:function(e,t,n){n.d(t,{A:function(){return a},Z:function(){return r}});var s=n(57437),o=n(2265),i=n(69026);let a=(0,o.createContext)({});function r(e){let{baseUrl:t,children:n}=e,r=null!=t?t:"https://bn6162p474.execute-api.eu-west-2.amazonaws.com/prod";if(!r)throw"No base url found for Zeitgeist API";let[c,l]=(0,o.useState)(new i.Z(r));return(0,s.jsx)(a.Provider,{value:c,children:n})}},94547:function(e,t,n){var s,o,i,a,r,c,l,d,u,h;n.d(t,{EQ:function(){return o},VS:function(){return a},_b:function(){return s},_y:function(){return i},um:function(){return r}}),(c=s||(s={}))[c.Controller=0]="Controller",c[c.Client=1]="Client",(l=o||(o={}))[l.Public=0]="Public",l[l.AutomatedTests=1]="AutomatedTests",l[l.ManualTesting=2]="ManualTesting",(d=i||(i={}))[d.Absent=0]="Absent",d[d.Ready=1]="Ready",d[d.Open=2]="Open",d[d.Closed=3]="Closed",(u=a||(a={}))[u.InPerson=0]="InPerson",u[u.Remote=1]="Remote",u[u.RemoteWithVideoCall=2]="RemoteWithVideoCall",(h=r||(r={}))[h.Offline=0]="Offline",h[h.Online=1]="Online",h[h.Connecting=2]="Connecting",h[h.Connected=3]="Connected",h[h.Joining=4]="Joining",h[h.Joined=5]="Joined",h[h.Disconnecting=6]="Disconnecting",h[h.Disconnected=7]="Disconnected",h[h.Error=8]="Error"},75511:function(e,t,n){n.d(t,{z:function(){return o}});var s,o,i=n(37836),a=n.n(i);(s=o||(o={})).Request_SlideRefresh="REQUEST_SLIDE_REFRESH",s.WSS_Update_ConnectionState="WSS_UPDATE_CONNECTION_STATE",s.WSS_Distribute_Message="WSS_DISTRIBUTE_MESSAGE",s.Content_Progress_Update="CONTENT_PROGRESS_UPDATE";let r=new(a()),c={on:(e,t)=>r.on(e,t),once:(e,t)=>r.once(e,t),off:(e,t)=>r.off(e,t),emit:e=>r.emit(e.type,e)};Object.freeze(c),t.Z=c},88620:function(e,t,n){n.d(t,{Z:function(){return u}});var s=n(57437),o=n(75511),i=n(22960),a=n(31193),r=n(34990),c=n(80511),l=n(99128),d=n(2265);function u(e){var t;let[n,u]=(0,d.useState)(),[h,p]=(0,d.useState)({overall:{completed:0,total:100},bars:{}});(0,d.useEffect)(()=>(o.Z.on(o.z.Content_Progress_Update,u),()=>{o.Z.off(o.z.Content_Progress_Update,u)}),[]),(0,d.useEffect)(()=>{void 0!==n&&n.type===o.z.Content_Progress_Update&&p(n.data)},[n]);let b=(0,i.Z)();return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(a.Z,{sx:{alignSelf:"center",display:"flex",justifyContent:"center",alignItems:"center",minHeight:"100%",width:"60%",maxWidth:"480px"},children:(0,s.jsxs)(r.Z,{elevation:1,sx:{p:2,flexGrow:1,textAlign:"start"},children:[(0,s.jsx)(c.Z,{component:"h2",variant:"h5",sx:{mb:2},style:{textAlign:"center"},children:e.title}),(0,s.jsx)(c.Z,{variant:"body1",children:(0,s.jsx)("span",{style:{color:e.isError?b.palette.error.main:"inherit"},children:null!==(t=e.message)&&void 0!==t?t:"Unknown error."})}),e.children&&(0,s.jsx)(a.Z,{sx:{my:1},children:e.children}),e.isBusy&&!e.showProgress&&(0,s.jsx)(l.Z,{sx:{mt:2}}),e.isBusy&&e.showProgress&&(0,s.jsx)(l.Z,{sx:{mt:2},value:h.overall.total>0?100*h.overall.completed/h.overall.total:void 0,variant:h.overall.total>0?"determinate":"indeterminate"}),e.isBusy&&e.showProgress&&Object.keys(h.bars).map((e,t)=>(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(l.Z,{color:"secondary",sx:{mt:1},value:h.bars[e].total>0?100*h.bars[e].completed/h.bars[e].total:0,variant:"determinate"},"loading-progress-bar-".concat(t,"-").concat(e))}))]})})})}},20909:function(e,t,n){n.d(t,{X:function(){return s}});let s=e=>e.split("/").at(-2)}}]);