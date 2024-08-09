(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[97],{7251:function(e,i,s){Promise.resolve().then(s.bind(s,66977))},66977:function(e,i,s){"use strict";s.r(i),s.d(i,{default:function(){return eb}});var t,n,o,l,r=s(57437),a=s(96537),d=s(88620),c=s(2265),u=s(67022),h=s(94547),p=s(20920);let x=e=>{var i;return(null==e?void 0:null===(i=e.profile)||void 0===i?void 0:i.hasOwnProperty("cognito:groups"))?e.profile["cognito:groups"]:[]},f=e=>e.includes(h.SC[h.SC.administrators]),m=e=>e.includes(h.SC[h.SC.analysts])||f(e),g=e=>e.includes("facilitators")||f(e)||!0,v=(0,c.createContext)({});function w(e){var i;let[s,t]=(0,c.useState)((null===(i=window)||void 0===i?void 0:i.localStorage.getItem("DeviceId"))||(0,p.Z)());(0,c.useEffect)(()=>{window&&window.localStorage.setItem("DeviceId",s)},[s]);let[n,o]=(0,c.useState)(!1),[l,h]=(0,c.useState)(null),[f,m]=(0,c.useState)(e.role),g=(0,u.aC)(),w=async()=>{await g.removeUser(),h(null)};(0,c.useEffect)(()=>g.events.addAccessTokenExpiring(async()=>{console.debug("Access token renewal with auth.signinSilent()...");let e=await g.signinSilent();console.debug("User renewal: ".concat(e?"found":"not found")),h(e)}),[g.events,g.signinSilent]);let[j,y]=(0,c.useState)({user:l,role:f,deviceId:s,groups:[],onSignOut:w});(0,c.useEffect)(()=>{y({...j,role:f})},[f]),(0,c.useEffect)(()=>{y({...j,deviceId:s})},[s]),(0,c.useEffect)(()=>{y({...j,user:l,groups:x(l)})},[l]);let b=async()=>{try{o(!0);let e=await g.signinSilent();null===e?await g.signinRedirect():h(e)}finally{o(!1)}};return(0,c.useEffect)(()=>{!g.isLoading&&g.user&&h(g.user)},[g.isLoading]),(0,r.jsxs)(r.Fragment,{children:[(n||g.isLoading)&&(0,r.jsx)(d.Z,{isError:!1,isBusy:!0,title:"Checking authentication...",message:"Please wait while we confirm permission to access the facilitator overview.",showProgress:!1}),!g.isLoading&&!n&&(0,r.jsxs)(r.Fragment,{children:[null===l&&(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(d.Z,{isError:!1,isBusy:!1,title:"Please sign in",message:"Please sign in to use the facilitator overview.",showProgress:!1,children:(0,r.jsx)(a.Z,{variant:"contained",onClick:()=>b(),disabled:n,children:"Sign in"})})}),(null==l?void 0:l.expired)&&(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(d.Z,{isError:!0,isBusy:!1,title:"Authentication expired",message:"Please sign in again to use the facilitator overview.",showProgress:!1,children:(0,r.jsx)(a.Z,{variant:"contained",onClick:()=>b(),disabled:n,children:"Sign in"})})}),null!==j.user&&!j.user.expired&&(0,r.jsx)(v.Provider,{value:j,children:e.children})]})]})}var j=s(32184),y=s(57300),b=s(80511),S=s(31193),Z=s(27270);function k(){let e=(0,c.useContext)(v);return(0,r.jsx)(r.Fragment,{children:e.user.profile.email})}function D(e){let[i,s]=(0,c.useState)(0),t=(0,c.useContext)(v),[n,l]=(0,c.useState)([]);return(0,c.useEffect)(()=>{let e=[];g(t.groups)&&e.push(0),m(t.groups)&&e.push(1),l(e)},[t.groups]),(0,c.useEffect)(()=>{console.log("Selection",o[i]),e.onSetSelection(i)},[i]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(j.Z,{children:n.map(e=>(0,r.jsx)(y.Z,{onClick:()=>s(e),selected:i==e,children:(0,r.jsxs)(b.Z,{variant:"h5",children:[(0,r.jsx)("img",{src:"/icons/workshops.svg",style:{height:26,verticalAlign:"middle",marginRight:12}}),o[e]]})},"facilitator-overview-menu-item-".concat(o[e])))}),e.showUsername&&(0,r.jsx)(S.Z,{sx:{position:"absolute",left:"1em",bottom:"1em",zIndex:100},children:(0,r.jsxs)(Z.Z,{severity:"success",action:e.showSignOut?(0,r.jsx)(a.Z,{color:"inherit",size:"small",onClick:t.onSignOut,children:"Sign out"}):void 0,children:["Signed in as: ",(0,r.jsx)(k,{})]})})]})}(t=o||(o={}))[t.Workshops=0]="Workshops",t[t.Reports=1]="Reports";var C=s(58253),E=s(20909),T=s(79393),A=s(99128),W=s(45133),P=s(63742),R=s(16463),I=s(10105),F=s(7547),N=s(19783);let _=(e,i)=>new Date(new Date(e).getTime()+6e4*i),q=e=>{window.open((0,I.k)(e),"_blank","noreferrer")};function L(e){var i,s,t;let[n,o]=(0,c.useState)();return(0,c.useEffect)(()=>{N.toDataURL((0,I.v)(e.session)).then(e=>{o(e)}).catch(e=>{o(void 0),console.error(e)})},[e.session]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(S.Z,{display:"flex",flexDirection:"row",alignItems:"flex-start",sx:{mb:2,py:1},children:[n&&(0,r.jsx)(S.Z,{sx:{mr:2},children:(0,r.jsx)("img",{src:n,style:{width:150,height:150}})}),(0,r.jsxs)(S.Z,{display:"flex",flexGrow:1,flexDirection:"column",sx:{mr:4},children:[(0,r.jsx)(b.Z,{variant:"h4",children:e.session.sessionName}),(0,r.jsx)(b.Z,{variant:"body1",sx:{mt:1},children:(0,r.jsx)("span",{dangerouslySetInnerHTML:{__html:e.session.sessionDescription}})})]}),(0,r.jsx)(S.Z,{display:"flex",flexDirection:"column",alignItems:"flex-end",gap:1,children:(0,r.jsx)(a.Z,{fullWidth:!0,variant:"outlined",color:"buttonStandard",onClick:()=>e.onEditSession(e.session),children:"Edit"})})]}),(0,r.jsxs)(j.Z,{children:[(0,r.jsx)(F.ZP,{children:(0,r.jsxs)(S.Z,{display:"flex",flexDirection:"row",children:[(0,r.jsx)("img",{src:"/icons/session-type.svg",style:{height:32,verticalAlign:"middle",marginRight:12}}),(0,r.jsxs)(S.Z,{display:"flex",flexDirection:"column",children:[(0,r.jsx)(b.Z,{variant:"body2",children:"TYPE"}),(0,r.jsxs)(b.Z,{variant:"body1",style:{fontWeight:"bold"},children:[h.VS[e.session.remoteConfiguration]," ",h.EQ[e.session.audience]]})]})]})}),e.session.location&&(0,r.jsx)(F.ZP,{children:(0,r.jsxs)(S.Z,{display:"flex",flexDirection:"row",children:[(0,r.jsx)("img",{src:"/icons/session-location.svg",style:{height:32,verticalAlign:"middle",marginRight:12}}),(0,r.jsxs)(S.Z,{display:"flex",flexDirection:"column",children:[(0,r.jsx)(b.Z,{variant:"body2",children:"LOCATION"}),(0,r.jsx)(b.Z,{variant:"body1",style:{fontWeight:"bold"},children:null!==(i=e.session.location)&&void 0!==i?i:"(not specified)"})]})]})}),(0,r.jsx)(F.ZP,{children:(0,r.jsxs)(S.Z,{display:"flex",flexDirection:"row",children:[(0,r.jsx)("img",{src:"/icons/session-date.svg",style:{height:32,verticalAlign:"middle",marginRight:12}}),(0,r.jsxs)(S.Z,{display:"flex",flexDirection:"column",children:[(0,r.jsx)(b.Z,{variant:"body2",children:"DATE"}),(0,r.jsx)(b.Z,{variant:"body1",style:{fontWeight:"bold"},children:new Date(e.session.sessionStartTime).toISOString().substring(0,10)})]})]})}),(0,r.jsx)(F.ZP,{children:(0,r.jsxs)(S.Z,{display:"flex",flexDirection:"row",children:[(0,r.jsx)("img",{src:"/icons/session-time.svg",style:{height:32,verticalAlign:"middle",marginRight:12}}),(0,r.jsxs)(S.Z,{display:"flex",flexDirection:"column",children:[(0,r.jsx)(b.Z,{variant:"body2",children:"TIME"}),(0,r.jsx)(b.Z,{variant:"body1",style:{fontWeight:"bold"},children:"".concat(new Date(e.session.sessionStartTime).toLocaleTimeString()," - ").concat(_(e.session.sessionStartTime,e.session.sessionDurationMins).toLocaleTimeString())})]})]})}),(0,r.jsx)(F.ZP,{children:(0,r.jsxs)(S.Z,{display:"flex",flexDirection:"row",children:[(0,r.jsx)("img",{src:"/icons/session-participants.svg",style:{height:32,verticalAlign:"middle",marginRight:12}}),(0,r.jsxs)(S.Z,{display:"flex",flexDirection:"column",children:[(0,r.jsx)(b.Z,{variant:"body2",children:"PARTICIPANTS"}),(0,r.jsx)(b.Z,{variant:"body1",style:{fontWeight:"bold"},children:null!==(s=e.session.anticipatedParticipants)&&void 0!==s?s:"(not specified)"})]})]})}),(0,r.jsx)(F.ZP,{children:(0,r.jsxs)(S.Z,{display:"flex",flexDirection:"row",children:[(0,r.jsx)("img",{src:"/icons/session-participants.svg",style:{height:32,verticalAlign:"middle",marginRight:12}}),(0,r.jsxs)(S.Z,{display:"flex",flexDirection:"column",children:[(0,r.jsx)(b.Z,{variant:"body2",children:"FACILITATOR"}),(0,r.jsx)(b.Z,{variant:"body1",style:{fontWeight:"bold"},children:null!==(t=e.session.facilitatorEmail)&&void 0!==t?t:"(not specified)"})]})]})}),(0,r.jsx)(y.Z,{onClick:()=>{var i;null===(i=navigator)||void 0===i||i.clipboard.writeText((0,I.v)(e.session))},children:(0,r.jsxs)(S.Z,{display:"flex",flexDirection:"row",children:[(0,r.jsx)("img",{src:"/icons/session-type.svg",style:{height:32,verticalAlign:"middle",marginRight:12}}),(0,r.jsxs)(S.Z,{display:"flex",flexDirection:"column",children:[(0,r.jsx)(b.Z,{variant:"body2",children:"JOIN CODE"}),(0,r.jsx)(b.Z,{variant:"body1",style:{fontWeight:"bold"},children:e.session.joinCode})]})]})})]}),(0,r.jsxs)(S.Z,{sx:{width:"100%",display:"flex",flexDirection:"row",justifyContent:"stretch",gap:2,pt:1,borderTop:"solid 1px black"},children:[(0,r.jsx)(a.Z,{variant:"contained",color:"buttonStandard",sx:{flexGrow:1},onClick:()=>q(e.session),children:"Enter workshop"}),(0,r.jsx)(a.Z,{variant:"contained",color:"buttonStandard",sx:{flexGrow:1},onClick:()=>{var i;null===(i=navigator)||void 0===i||i.clipboard.writeText((0,I.v)(e.session))},children:"Copy participant link"})]})]})}var z=s(69065),O=s(66124),U=s(60335),Q=s(18502),G=s(80824),M=s(28549),V=s(56065),B=s(19004),Y=s(11656),H=s(66858),J=s(98784),X=s(7630),K=s(54952),$=s(39986),ee=s(5069),ei=s(62737),es=s.n(ei),et=s(47109),en=s(24072),eo=s(76396);let el=[{title:"Zeitgeist demo",description:"A Zeitgeist demonstration workshop.",duration_mins:15,audience:h.EQ.DemoWorkshop,slug:"zg-demo",uris:["/workshops/zg-demo/presentation.xml"]},{title:"Zeitgeist gallery",description:"A Zeitgeist gallery workshop (for testing).",duration_mins:15,audience:h.EQ.TestingWorkshop,slug:"zg-gallery",uris:["/workshops/zg-welcome/presentation.xml","/workshops/zg-gallery/presentation.xml"]},{title:"Situation Room: Water Scarcity",description:"<p>The increasing floods and drought seen across the country in recent years are showing us some of the impacts from climate change. We need to work together to come up with a plan.</p><p><i>Step into The Situation Room, where you will decide how to deal with issues such as flooding, water scarcity and coastal erosion. A series of videos will introduce you to the topic, and you’ll vote on different options to minimise the impact of climate change with your fellow participants. Can you create a successful strategy for your local area?</i></p>",duration_mins:120,audience:h.EQ.LiveWorkshop,slug:"sr-water-scarcity",uris:["/workshops/sr-a-intro/presentation.xml","/workshops/sr-b-water-scarcity/0-start.xml","/workshops/sr-b-water-scarcity/1-reuse.xml","/workshops/sr-b-water-scarcity/2-reduce.xml","/workshops/sr-b-water-scarcity/3-restrict.xml","/workshops/sr-b-water-scarcity/4-end.xml","/workshops/sr-z-outro/presentation.xml"]},{title:"Situation Room: Coastal Erosion and Flooding",description:"<p>The increasing floods and drought seen across the country in recent years are showing us some of the impacts from climate change. We need to work together to come up with a plan.</p><p><i>Step into The Situation Room, where you will decide how to deal with issues such as flooding, water scarcity and coastal erosion. A series of videos will introduce you to the topic, and you’ll vote on different options to minimise the impact of climate change with your fellow participants. Can you create a successful strategy for your local area?</i></p>",duration_mins:120,audience:h.EQ.LiveWorkshop,slug:"sr-coastal-erosion",uris:["/workshops/sr-a-intro/presentation.xml","/workshops/sr-c-coastal-erosion/0-start.xml","/workshops/sr-c-coastal-erosion/1-pfr.xml","/workshops/sr-c-coastal-erosion/2-engineered.xml","/workshops/sr-c-coastal-erosion/3-nature.xml","/workshops/sr-c-coastal-erosion/4-rollback.xml","/workshops/sr-c-coastal-erosion/5-end.xml","/workshops/sr-z-outro/presentation.xml"]},{title:"Situation Room: Inland Flooding",description:"<p>The increasing floods and drought seen across the country in recent years are showing us some of the impacts from climate change. We need to work together to come up with a plan.</p><p><i>Step into The Situation Room, where you will decide how to deal with issues such as flooding, water scarcity and coastal erosion. A series of videos will introduce you to the topic, and you’ll vote on different options to minimise the impact of climate change with your fellow participants. Can you create a successful strategy for your local area?</i></p>",duration_mins:120,audience:h.EQ.LiveWorkshop,slug:"sr-inland-flooding",uris:["/workshops/sr-a-intro/presentation.xml","/workshops/sr-d-inland-flooding/0-start.xml","/workshops/sr-d-inland-flooding/1-pfr.xml","/workshops/sr-d-inland-flooding/2-suds.xml","/workshops/sr-d-inland-flooding/3-engineered.xml","/workshops/sr-d-inland-flooding/4-nature.xml","/workshops/sr-d-inland-flooding/5-end.xml","/workshops/sr-z-outro/presentation.xml"]}];Object.values(h.VS).filter(e=>!isNaN(Number(e))).map(e=>Number(e));let er=[{value:h.EQ.LiveWorkshop,title:"Live workshop",description:"A live session with real participants."},{value:h.EQ.DemoWorkshop,title:"Demo workshop",description:"A demonstration workshop."},{value:h.EQ.TestingWorkshop,title:"Test workshop",description:"A test workshop, to review content or test new features."}],ea=e=>{let i=parseInt(e);return isNaN(i)?void 0:i};function ed(e){let i=(0,c.useContext)(v),s=()=>{var e;return null!==(e=i.user.profile.email)&&void 0!==e?e:"Unknown facilitator"},[t,n]=(0,c.useState)(),[o,l]=(0,c.useState)(),[d,u]=(0,c.useState)(!1),[p,x]=(0,c.useState)(),[f,m]=(0,c.useState)(),[g,w]=(0,c.useState)(),[j,y]=(0,c.useState)(),[b,Z]=(0,c.useState)(),[k,D]=(0,c.useState)(),[C,E]=(0,c.useState)(),[T,A]=(0,c.useState)(),[W,P]=(0,c.useState)(),[R,I]=(0,c.useState)(),[F,N]=(0,c.useState)(),[_,q]=(0,c.useState)(),[L,ei]=(0,c.useState)(),[ed,ec]=(0,c.useState)(),[eu,eh]=(0,c.useState)(),[ep,ex]=(0,c.useState)();(0,c.useEffect)(()=>{var i,s;n(null!==(s=null===(i=e.prefill)||void 0===i?void 0:i.sessionSlug)&&void 0!==s?s:"")},[e.open,e.prefill]),(0,c.useEffect)(()=>{l(el.find(e=>e.slug===t))},[t,e.prefill]),(0,c.useEffect)(()=>{var i,t,n,l,r,a,d,c,p,f,g,v,j,b,S,k,D;console.debug("selected template",o),x(null!==(b=null===(i=e.prefill)||void 0===i?void 0:i.sessionName)&&void 0!==b?b:null==o?void 0:o.title),m(void 0),w(null!==(S=null===(t=e.prefill)||void 0===t?void 0:t.sessionDescription)&&void 0!==S?S:null==o?void 0:o.description),y(void 0),ei((null===(n=e.prefill)||void 0===n?void 0:n.sessionDurationMins)!==void 0?null===(l=e.prefill)||void 0===l?void 0:l.sessionDurationMins:null==o?void 0:o.duration_mins),ec(void 0),Z((null===(r=e.prefill)||void 0===r?void 0:r.audience)!==void 0?null===(a=e.prefill)||void 0===a?void 0:a.audience:null==o?void 0:o.audience),E((null===(d=e.prefill)||void 0===d?void 0:d.remoteConfiguration)!==void 0?e.prefill.remoteConfiguration:void 0!==o?h.VS.InPerson:void 0),A(void 0),P((null!==(k=null===(c=e.prefill)||void 0===c?void 0:c.facilitatorEmail)&&void 0!==k?k:void 0!==o)?s():void 0),I(void 0),N((null===(p=e.prefill)||void 0===p?void 0:p.sessionStartTime)!==void 0?es()(null===(f=e.prefill)||void 0===f?void 0:f.sessionStartTime):void 0!==o?es()():void 0),q(void 0),eh((null!==(D=null===(g=e.prefill)||void 0===g?void 0:g.location)&&void 0!==D?D:void 0!==o)?"":void 0),ex((null===(v=e.prefill)||void 0===v?void 0:v.anticipatedParticipants)!==void 0?null===(j=e.prefill)||void 0===j?void 0:j.anticipatedParticipants:void 0!==o?12:void 0),u(void 0!==o)},[o,e.prefill]);let ef=()=>{let e=!0;return void 0===p||p.trim().length<1?(m("Title is required"),e=!1):m(void 0),void 0===g||g.trim().length<1?(y("Description is required"),e=!1):y(void 0),void 0===F?(q("Start date is required"),e=!1):q(void 0),void 0===L||L<1?(ec("Duration is required"),e=!1):ec(void 0),void 0===C?(A("Remote configuration is required"),e=!1):A(void 0),void 0===b?(D("Audience is required"),e=!1):D(void 0),void 0===W||W.trim().length<1?(I("Facilitator is required"),e=!1):I(void 0),e},em=()=>{e.busy||e.onCloseRequest()},eg=e=>(0,r.jsx)(en.ZP,{variant:"popover",popupId:e.id,children:i=>(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(U.Z,{sx:{alignSelf:"start"},"aria-label":e.description,...(0,eo.LI)(i),children:(0,r.jsx)(et.Z,{})}),(0,r.jsx)(Q.ZP,{...(0,eo.ZW)(i),anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"right"},children:(0,r.jsx)(S.Z,{sx:{p:1},children:e.children})})]})});return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(z.Z,{fullWidth:!0,maxWidth:"sm",open:e.open,onClose:em,children:[(0,r.jsxs)(G.Z,{children:[void 0!==e.prefill?"Edit":"Create new"," session",(0,r.jsx)(S.Z,{style:{position:"absolute",top:0,right:0},children:(0,r.jsx)(U.Z,{"aria-label":"close",onClick:em,children:(0,r.jsx)(X.Z,{})})})]}),(0,r.jsx)(O.Z,{children:(0,r.jsxs)(S.Z,{sx:{p:1},display:"flex",flexDirection:"column",alignItems:"stretch",gap:2,children:[(0,r.jsx)(S.Z,{display:"flex",flexDirection:"row",gap:1,children:(0,r.jsxs)(M.Z,{fullWidth:!0,children:[(0,r.jsx)(V.Z,{id:"new-session-template-label",children:"Workshop"}),(0,r.jsx)(B.Z,{labelId:"new-session-template-label",value:null!=t?t:"",label:"Workshop",required:!0,disabled:e.busy,onChange:e=>n(e.target.value),children:el.map(e=>(0,r.jsx)(Y.Z,{value:e.slug,children:e.title},"session-template-option-".concat(e.slug)))})]})}),(0,r.jsxs)(S.Z,{display:"flex",flexDirection:"row",gap:1,children:[(0,r.jsxs)(M.Z,{fullWidth:!0,children:[(0,r.jsx)(V.Z,{id:"new-session-audience-label",children:"Audience"}),(0,r.jsx)(B.Z,{labelId:"new-session-audience-label",value:null!=b?b:"",label:"Audience",required:!0,disabled:!d||e.busy,onChange:e=>Z(e.target.value),children:er.map(e=>(0,r.jsx)(Y.Z,{value:e.value,children:e.title},"session-audience-option-".concat(e.value)))})]}),(0,r.jsxs)(eg,{id:"session-audience-info-popup",description:"Workshop audience info",children:[(0,r.jsx)("p",{children:"Choose between:"}),(0,r.jsx)("ul",{children:er.map(e=>(0,r.jsxs)("li",{children:[(0,r.jsx)("b",{children:e.title}),": ",e.description]},"session-audience-info-".concat(e.value)))})]})]}),(0,r.jsx)(S.Z,{display:"flex",flexDirection:"row",gap:1,children:(0,r.jsx)(H.Z,{fullWidth:!0,label:"Session title",value:null!=p?p:"",required:!0,onChange:e=>x(e.target.value),disabled:!d||e.busy,error:!!f,helperText:f})}),(0,r.jsx)(S.Z,{display:"flex",flexDirection:"row",gap:1,children:(0,r.jsx)(H.Z,{fullWidth:!0,label:"Session description",value:null!=g?g:"",required:!0,onChange:e=>w(e.target.value),disabled:!d||e.busy,error:!!j,helperText:j})}),(0,r.jsx)(S.Z,{display:"flex",flexDirection:"row",gap:1,children:(0,r.jsx)(K._,{dateAdapter:ee.y,children:(0,r.jsx)($.x,{label:"Session start",value:void 0!==F?F:null,onChange:e=>N(null!=e?e:void 0),disabled:!d||e.busy,slotProps:{textField:{fullWidth:!0,required:!0,error:!!_,helperText:_}}})})}),(0,r.jsx)(S.Z,{display:"flex",flexDirection:"row",gap:1,children:(0,r.jsx)(H.Z,{fullWidth:!0,inputProps:{type:"number"},label:"Duration (mins)",value:null!=L?L:"",required:!0,onChange:e=>ei(ea(e.target.value)),disabled:!d||e.busy,error:!!ed,helperText:ed})}),(0,r.jsxs)(S.Z,{display:"flex",flexDirection:"row",gap:1,children:[(0,r.jsxs)(M.Z,{fullWidth:!0,children:[(0,r.jsx)(V.Z,{id:"new-session-remote-config-label",children:"Remote configuration"}),(0,r.jsxs)(B.Z,{labelId:"new-session-remote-config-label",value:null!=C?C:"",label:"Remote configuration",required:!0,onChange:e=>E(e.target.value),disabled:!d||e.busy,error:!!T,children:[(0,r.jsx)(Y.Z,{value:h.VS.InPerson,children:"In person"}),(0,r.jsx)(Y.Z,{value:h.VS.Remote,children:"Remote"}),(0,r.jsx)(Y.Z,{value:h.VS.RemoteWithVideoCall,children:"Remote (with video call)"})]})]}),(0,r.jsx)(eg,{id:"remote-config-info-popup",description:"Remote configuration info",children:(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:"In person: Audio plays from facilitator only"}),(0,r.jsx)("li",{children:"Remote: Audio plays from all devices"}),(0,r.jsx)("li",{children:"Remote with video call: Audio plays from all devices, embedded video call"})]})})]}),(0,r.jsx)(S.Z,{display:"flex",flexDirection:"row",gap:1,children:(0,r.jsx)(H.Z,{fullWidth:!0,label:"Facilitator",value:null!=W?W:"",onChange:e=>P(e.target.value),required:!0,disabled:!d||e.busy,error:!!R,helperText:R})}),(0,r.jsx)(S.Z,{display:"flex",flexDirection:"row",gap:1,children:(0,r.jsx)(H.Z,{fullWidth:!0,label:"Location",value:null!=eu?eu:"",onChange:e=>eh(e.target.value),disabled:!d||e.busy})}),(0,r.jsx)(S.Z,{display:"flex",flexDirection:"row",gap:1,children:(0,r.jsx)(H.Z,{fullWidth:!0,label:"Anticipated participants",inputProps:{type:"number"},value:null!=ep?ep:"",onChange:e=>ex(ea(e.target.value)),disabled:!d||e.busy})})]})}),(0,r.jsxs)(J.Z,{children:[(0,r.jsx)(a.Z,{variant:"outlined",onClick:em,disabled:e.busy,children:"Cancel"}),(0,r.jsx)(a.Z,{variant:"outlined",onClick:()=>{e.onClearRequest(),n(void 0)},disabled:e.busy,children:"Clear"}),(0,r.jsx)(a.Z,{variant:"contained",onClick:()=>{if(ef()){var i,s,t,n,l,r;let a={...e.prefill,id:null===(i=e.prefill)||void 0===i?void 0:i.id,sessionName:p,sessionDescription:g,sessionSlug:o.slug,sessionStartTime:F.set("second",0).toDate(),sessionDurationMins:L,remoteConfiguration:C,facilitatorEmail:W,location:eu,anticipatedParticipants:ep,sessionGraphicAltText:null===(s=e.prefill)||void 0===s?void 0:s.sessionGraphicAltText,sessionPresentationUris:o.uris,answers:null!==(r=null===(t=e.prefill)||void 0===t?void 0:t.answers)&&void 0!==r?r:[],audience:b,facilitationState:(null===(n=e.prefill)||void 0===n?void 0:n.facilitationState)!==void 0?e.prefill.facilitationState:h._y.Ready,fullScreen:(null===(l=e.prefill)||void 0===l?void 0:l.fullScreen)===void 0||e.prefill.fullScreen};e.onSubmitRequest(a)}},disabled:e.busy,children:"Submit"})]})]})})}function ec(e){let i="".concat(100*e.menuWidth,"%"),s="".concat((1-e.menuWidth)*100,"%");return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(S.Z,{sx:{display:"flex",flexDirection:"row",overflow:"hidden",height:"100vh",gap:2,px:1,...e.sx},children:[(0,r.jsx)(S.Z,{sx:{width:i,height:"100%",display:"block",overflowY:"auto"},children:e.menu}),(0,r.jsx)(S.Z,{sx:{width:s,height:"100%",display:"block",overflowY:"auto"},children:e.main})]})})}let eu=e=>["Sun","Mon","Tue","Wed","Thu","Fri","Sat","Sun"][e];function eh(){let e=(0,c.useContext)(C.A),i=(0,c.useContext)(v),[s,t]=(0,c.useState)(!1),[n,o]=(0,c.useState)([]),[l,d]=(0,c.useState)({}),[u,p]=(0,c.useState)({}),[x,f]=(0,c.useState)(),[m,g]=(0,c.useState)(!1),[w,Z]=(0,c.useState)(!1),[k,D]=(0,c.useState)(""),[I,F]=(0,c.useState)(),[N,_]=(0,c.useState)(!1),q=(0,R.useSearchParams)(),[z,O]=(0,c.useState)(0);(0,c.useEffect)(()=>{let e=q.get("flags"),i=0;e&&(e.includes("m")&&(i|=2),e.includes("a")&&(i|=1),O(i))},[q]);let U=()=>{n.forEach(i=>{let s=(0,E.X)(i.sessionPresentationUris[0]);if(!l.hasOwnProperty(s)){let t={workshopDirectory:s};e.getPublicContentAccessUrls(i.id,t).then(e=>{d(i=>{let s={...i};return s[t.workshopDirectory]={thumb:e.thumbnailUrl,poster:e.posterUrl},s})})}})},Q=e=>{var i;let s=(0,E.X)(e.sessionPresentationUris[0]),t=l.hasOwnProperty(s)?l[s]:void 0;return null!==(i=null==t?void 0:t.thumb)&&void 0!==i?i:null==t?void 0:t.poster},G=e=>{let i={};return e.forEach(e=>{let s=new Date(e.sessionStartTime).toLocaleDateString("en-GB",{month:"long",year:"numeric"});i[s]||(i[s]=[]),i[s].push(e)}),console.debug("sessions grouped by month",i),i},M=async()=>{try{console.debug("Fetching sessions..."),o([]),t(!0);let s=await e.listDeliberationSessions(i.user.access_token,h.yI.Upcoming);console.debug("Sessions",s);let n=s.filter(e=>e.audience!==h.EQ.AutomatedTests||1&z&&e.audience===h.EQ.AutomatedTests).toSorted((e,i)=>new Date(e.sessionStartTime).getTime()-new Date(i.sessionStartTime).getTime());o(n)}catch(e){console.error(e)}finally{t(!1)}};(0,c.useEffect)(()=>{f(void 0),U(),p(G(n))},[n]),(0,c.useEffect)(()=>{M()},[]);let V=async s=>{console.debug("New session submitted",s);try{if(_(!0),!(void 0===s.id?await e.postDeliberationSessionAdmin(i.user.access_token,s):await e.putDeliberationSessionAdmin(i.user.access_token,s)).id)throw"Session creation failed.";g(!1),D("Session submitted successfully."),Z(!0),M()}catch(e){console.error(e),D("Session submission failed. Please contact support."),Z(!0)}finally{_(!1)}};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(ed,{open:m,busy:N,onCloseRequest:()=>{g(!1)},onClearRequest:()=>{F(void 0)},onSubmitRequest:V,prefill:I}),(0,r.jsx)(T.Z,{open:w,autoHideDuration:6e3,onClose:()=>Z(!1),message:k}),(0,r.jsx)(ec,{menuWidth:.5,menu:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(S.Z,{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between",children:[(0,r.jsx)(b.Z,{variant:"h4",children:"Upcoming workshops"}),(0,r.jsxs)(S.Z,{display:"flex",flexDirection:"row",gap:1,children:[(0,r.jsx)(a.Z,{variant:"outlined",color:"buttonStandard",onClick:()=>{F(void 0),g(!0)},disabled:s,children:"Add"}),(0,r.jsx)(a.Z,{variant:"outlined",color:"buttonStandard",onClick:()=>{M()},disabled:s,children:"Refresh"})]})]}),s&&(0,r.jsx)(A.Z,{}),(0,r.jsx)(j.Z,{subheader:(0,r.jsx)("li",{}),children:!!u&&Object.keys(u).map(e=>(0,r.jsx)("li",{children:(0,r.jsxs)("ul",{children:[(0,r.jsx)(W.Z,{sx:{background:"transparent",borderBottom:"solid 1px grey",backdropFilter:"blur(5px)",p:1,my:2},children:(0,r.jsx)(b.Z,{variant:"h6",children:e})}),u[e].map((e,i)=>(0,r.jsx)(y.Z,{alignItems:"center",onClick:()=>f(e),selected:(null==x?void 0:x.id)===e.id,children:(0,r.jsxs)(S.Z,{sx:{display:"flex",flexDirection:"row",gap:1,width:"100%"},children:[(0,r.jsxs)(S.Z,{sx:{alignSelf:"center",alignItems:"center",borderRight:"solid 2px lightGray",display:"flex",flexDirection:"column",gap:0,px:1},children:[(0,r.jsx)(b.Z,{variant:"body2",children:eu(new Date(e.sessionStartTime).getDay())}),(0,r.jsx)(b.Z,{variant:"h4",children:new Date(e.sessionStartTime).getDate()})]}),(0,r.jsxs)(S.Z,{sx:{display:"flex",flexDirection:"column",gap:1,flexGrow:1},children:[(0,r.jsx)(b.Z,{variant:"body1",children:e.sessionName}),(0,r.jsxs)(S.Z,{sx:{display:"flex",flexDirection:"column",gap:.5},children:[(0,r.jsxs)(S.Z,{sx:{display:"flex",flexDirection:"row",flexWrap:"wrap",gap:.5,rowGap:.5},children:[(0,r.jsx)(P.Z,{component:"span",size:"small",label:h._y[e.facilitationState],color:"primary"}),(0,r.jsx)(P.Z,{component:"span",size:"small",label:h.VS[e.remoteConfiguration],color:"primary"}),(0,r.jsx)(P.Z,{component:"span",size:"small",label:h.EQ[e.audience],color:e.audience===h.EQ.LiveWorkshop?"error":void 0}),(0,r.jsx)(P.Z,{component:"span",size:"small",label:new Date(e.sessionStartTime).toLocaleTimeString()})]}),(0,r.jsxs)(S.Z,{sx:{display:"flex",flexDirection:"row",flexWrap:"wrap",gap:.5,rowGap:.5},children:[e.facilitatorEmail&&(0,r.jsx)(P.Z,{component:"span",size:"small",label:e.facilitatorEmail,color:"secondary"}),e.location&&(0,r.jsx)(P.Z,{component:"span",size:"small",label:e.location,color:"secondary"})]})]})]}),Q(e)&&(0,r.jsx)("img",{style:{maxWidth:100,height:"auto",alignSelf:"start",justifySelf:"end"},src:Q(e),alt:e.sessionGraphicAltText})]})},"session-button-".concat(i)))]})},"overview-month-".concat(e)))})]}),main:x&&(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(L,{session:x,onEditSession:e=>{F(e),g(!0)},onDeleteSession:e=>{}})})})]})}(n=l||(l={}))[n.ShowAutomatedTesting=1]="ShowAutomatedTesting",n[n.ShowManualTesting=2]="ShowManualTesting";var ep=s(95107);function ex(e){let i=(0,c.useContext)(v),s=(0,c.useContext)(C.A),[t,n]=(0,c.useState)([]),[o,l]=(0,c.useState)([]),[d,u]=(0,c.useState)(!1);(0,c.useEffect)(()=>{p()},[]);let p=()=>{u(!0),n([]),e.onSelection(void 0),s.listDeliberationSessions(i.user.access_token,h.yI.Answered).then(e=>n(e)).catch(e=>{console.error(e)}).finally(()=>{u(!1)})};(0,c.useEffect)(()=>{l(t.filter(e=>e.audience!==h.EQ.AutomatedTests).sort((e,i)=>new Date(e.sessionStartTime).getTime()-new Date(i.sessionStartTime).getTime()).reverse().map(e=>({id:e.id,workshop:e.sessionName,start:new Date(e.sessionStartTime).toLocaleDateString()+" "+new Date(e.sessionStartTime).toLocaleTimeString(),audience:h.EQ[e.audience],location:e.location,participants:new Set(e.answers.map(e=>e.participantId)).size,questions:new Set(e.answers.map(e=>e.questionId)).size})))},[t]);let x=i=>{let s=t.find(e=>e.id===i);e.onSelection(s)};return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(S.Z,{sx:{py:1,minHeight:"100%",display:"flex",flexDirection:"column",gap:1},children:[(0,r.jsxs)(S.Z,{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between",children:[(0,r.jsx)(b.Z,{variant:"h4",children:"Available reports"}),(0,r.jsx)(S.Z,{display:"flex",flexDirection:"row",gap:1,children:(0,r.jsx)(a.Z,{variant:"outlined",color:"buttonStandard",onClick:()=>{p()},disabled:d,children:"Refresh"})})]}),d&&(0,r.jsx)(A.Z,{}),(0,r.jsx)(ep._,{sx:{flexGrow:1},rows:o,columns:[{editable:!1,field:"start",headerName:"Start",width:175},{editable:!1,field:"workshop",headerName:"Workshop",width:250},{editable:!1,field:"audience",headerName:"Audience",width:150},{editable:!1,field:"location",headerName:"Location",width:150},{editable:!1,field:"participants",headerName:"Participants",width:75},{editable:!1,field:"questions",headerName:"Questions",width:75}],hideFooter:!0,onRowClick:(e,i,s)=>x(e.row.id)})]})})}let ef=e=>{if(null==e||""===e)return;let i=h.gY[e];if(void 0===i)throw console.error("Unknown report type: ".concat(e)),"Unknown report type: ".concat(e);return i},em=e=>{let i="report-".concat(e.sessionId,"-").concat(e.reportType,".json"),s="data:text/json;charset=utf-8,".concat(encodeURIComponent(JSON.stringify(e))),t=document.createElement("a");t.href=s,t.download=i,t.click()},eg=e=>{let i=Object.keys(e[0]);return[i,...e.map(e=>i.map(i=>e[i]))]},ev=function(e){let i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:",";return e.map(e=>e.map(e=>e&&isNaN(e)?'"'.concat(e.replace(/"/g,'""'),'"'):e).join(i)).join("\n")},ew=e=>{let i=ev(eg(e.report)),s="report-".concat(e.sessionId,"-").concat(e.reportType,".csv"),t=document.createElement("a");t.href="data:text/csv;charset=utf-8,".concat(i),t.download=s,t.click()};function ej(e){let i=(0,c.useContext)(C.A),s=(0,c.useContext)(v),[t,n]=(0,c.useState)(!1),[o,l]=(0,c.useState)(""),[d,u]=(0,c.useState)(),[p,x]=(0,c.useState)(),[f,m]=(0,c.useState)("");(0,c.useEffect)(()=>{console.debug("AnalystSessionPreview",e.session),console.debug("Groups",s.user.profile["cognito:groups"])},[e.session]),(0,c.useEffect)(()=>{l(""),u(void 0),x(void 0)},[e.session]),(0,c.useEffect)(()=>{m(""),x(void 0),void 0!==d&&(n(!0),g(d).then(e=>{x(e)}).catch(e=>{console.error(e),m("Unable to retrieve report: ".concat(JSON.stringify(e)))}).finally(()=>{n(!1)}))},[d]);let g=async t=>await i.getReport(e.session.id,s.user.access_token,t);return(0,c.useEffect)(()=>{p?m(JSON.stringify(p,null,2)):m("")},[p]),(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(S.Z,{sx:{display:"flex",flexDirection:"column",gap:1,minHeight:"100%",py:1},children:[(0,r.jsx)(b.Z,{variant:"h4",children:"Session report"}),(0,r.jsx)(b.Z,{variant:"h5",children:e.session.sessionName}),(0,r.jsxs)("ul",{children:[(0,r.jsxs)("li",{children:["Audience: ",h.EQ[e.session.audience]]}),(0,r.jsxs)("li",{children:["Location: ",e.session.location]}),(0,r.jsxs)("li",{children:["Facilitator: ",e.session.facilitatorEmail]}),(0,r.jsxs)("li",{children:["Start: ",new Date(e.session.sessionStartTime).toLocaleDateString()+" "+new Date(e.session.sessionStartTime).toLocaleTimeString()]}),(0,r.jsxs)("li",{children:["Unique participants: ",new Set(e.session.answers.map(e=>e.participantId)).size]}),(0,r.jsxs)("li",{children:["Questions answered: ",new Set(e.session.answers.map(e=>e.questionId)).size," (non PII)"]})]}),(0,r.jsxs)(M.Z,{fullWidth:!0,children:[(0,r.jsx)(V.Z,{id:"report-select-label",children:"Report"}),(0,r.jsxs)(B.Z,{labelId:"report-select-label",id:"report-select",value:o,label:"Report",onChange:(e,i)=>{l(e.target.value),u(ef(e.target.value))},children:[(0,r.jsx)(Y.Z,{value:h.gY[h.gY.ContactAndConsent],children:"Contact and consent"}),(0,r.jsx)(Y.Z,{value:h.gY[h.gY.EnjoymentAndSatisfaction],children:"Enjoyment and satisfaction"})]})]}),t&&(0,r.jsx)(A.Z,{}),p&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(S.Z,{sx:{background:"white",border:"solid 1px grey",borderRadius:1,p:1,overflowX:"auto",flexGrow:1},children:(0,r.jsx)("pre",{children:f})}),(0,r.jsxs)(S.Z,{sx:{display:"flex",flexDirection:"row",flexWrap:"wrap",gap:1,rowGap:1},children:[(0,r.jsx)(a.Z,{variant:"contained",onClick:()=>ew(p),children:"Download CSV"}),(0,r.jsx)(a.Z,{variant:"outlined",color:"buttonStandard",onClick:()=>em(p),children:"Download JSON"})]})]})]})})}function ey(){let[e,i]=(0,c.useState)(),[s,t]=(0,c.useState)(void 0);return(0,c.useEffect)(()=>{i(s&&(0,r.jsx)(ej,{session:s}))},[s]),(0,r.jsx)(ec,{menuWidth:.5,menu:(0,r.jsx)(ex,{onSelection:t}),main:e})}function eb(){(0,c.useContext)(v);let[e,i]=(0,c.useState)(o.Workshops),[s,t]=(0,c.useState)((0,r.jsx)(eh,{}));return(0,c.useEffect)(()=>{void 0!==document&&(document.title="Facilitator overview")},[]),(0,c.useEffect)(()=>{switch(e){case o.Workshops:t((0,r.jsx)(eh,{}));break;case o.Reports:t((0,r.jsx)(ey,{}));break;default:throw"".concat(o[e]," not implemented.")}},[e]),(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(C.Z,{children:(0,r.jsx)(w,{role:h._b.Controller,children:(0,r.jsx)(ec,{sx:{background:"linear-gradient(270deg, rgba(0, 0, 255, 0.25) 0%, rgba(0, 0, 255, 0.00) 50%, rgba(0, 0, 255, 0.00) 100%)"},menu:(0,r.jsx)(D,{onSetSelection:i,showUsername:!0,showSignOut:!0}),menuWidth:.2,main:s})})})})}},88620:function(e,i,s){"use strict";s.d(i,{Z:function(){return u}});var t=s(57437),n=s(75511),o=s(22960),l=s(31193),r=s(34990),a=s(80511),d=s(99128),c=s(2265);function u(e){var i;let[s,u]=(0,c.useState)(),[h,p]=(0,c.useState)({overall:{completed:0,total:100},bars:{}});(0,c.useEffect)(()=>(n.Z.on(n.z.Content_Progress_Update,u),()=>{n.Z.off(n.z.Content_Progress_Update,u)}),[]),(0,c.useEffect)(()=>{void 0!==s&&s.type===n.z.Content_Progress_Update&&p(s.data)},[s]);let x=(0,o.Z)();return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(l.Z,{sx:{alignSelf:"center",display:"flex",justifyContent:"center",alignItems:"center",minHeight:"100%",width:"60%",maxWidth:"480px"},children:(0,t.jsxs)(r.Z,{elevation:1,sx:{p:2,flexGrow:1,textAlign:"start"},children:[(0,t.jsx)(a.Z,{component:"h2",variant:"h5",sx:{mb:2},style:{textAlign:"center"},children:e.title}),(0,t.jsx)(a.Z,{variant:"body1",children:(0,t.jsx)("span",{style:{color:e.isError?x.palette.error.main:"inherit"},children:null!==(i=e.message)&&void 0!==i?i:"Unknown error."})}),e.children&&(0,t.jsx)(l.Z,{sx:{my:1},children:e.children}),e.isBusy&&!e.showProgress&&(0,t.jsx)(d.Z,{sx:{mt:2}}),e.isBusy&&e.showProgress&&(0,t.jsx)(d.Z,{sx:{mt:2},value:h.overall.total>0?100*h.overall.completed/h.overall.total:void 0,variant:h.overall.total>0?"determinate":"indeterminate"}),e.isBusy&&e.showProgress&&Object.keys(h.bars).map((e,i)=>(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(d.Z,{color:"secondary",sx:{mt:1},value:h.bars[e].total>0?100*h.bars[e].completed/h.bars[e].total:0,variant:"determinate"},"loading-progress-bar-".concat(i,"-").concat(e))}))]})})})}},10105:function(e,i,s){"use strict";s.d(i,{k:function(){return n},v:function(){return t}});let t=e=>"".concat(window.location.href.split("/")[0],"//").concat(window.location.href.split("/")[2],"/participant/session?sid=").concat(e.id,"&code=").concat(e.joinCode),n=e=>"".concat(window.location.href.split("/")[0],"//").concat(window.location.href.split("/")[2],"/facilitator/session?sid=").concat(e.id,"&code=").concat(e.joinCode)},20909:function(e,i,s){"use strict";s.d(i,{X:function(){return t}});let t=e=>e.split("/").at(-2)}},function(e){e.O(0,[732,887,403,465,810,516,107,842,247,971,23,744],function(){return e(e.s=7251)}),_N_E=e.O()}]);