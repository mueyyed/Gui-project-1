(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[13],{"+lzj":function(t,e,n){n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return c})),n.d(e,"c",(function(){return s}));var r=n("vzKb"),a=n("3/Bf");const o={cumulativeLayoutShiftScore:0,firstInputDelay:null,longTaskDurations:[],largestContentfulPaint:null},i=()=>{o.longTaskDurations=[]},c=()=>o,s=async()=>{const t=({name:t,value:e})=>{"CLS"===t?Object(a.e)(t,100*e):Object(a.e)(t,e)};Object(r.a)({entryTypes:["longtask"]},t=>{t.getEntries().map(t=>o.longTaskDurations.push(t.duration))},()=>i()),Object(r.a)({type:"first-input",buffered:!0},(t,e)=>{const n=t.getEntries()[0];n&&n.startTime&&n.processingStart&&(o.firstInputDelay={startTime:n.startTime,endTime:n.processingStart}),e.disconnect()},()=>{o.firstInputDelay=null}),Object(r.a)({type:"largest-contentful-paint",buffered:!0},t=>{const e=t.getEntries(),n=e[e.length-1];n&&(o.largestContentfulPaint=n.renderTime||n.loadTime||null)}),Object(r.a)({type:"layout-shift",buffered:!0},t=>{t.getEntries().forEach(t=>{t.hadRecentInput||(o.cumulativeLayoutShiftScore+=t.value)})});try{const{getCLS:e,getFID:r,getLCP:a}=await n.e(522).then(n.bind(null,"ONNR"));r(t),a(t,!0),e(t,!0)}catch(e){}}},"/kAC":function(t,e,n){var r=n("3cYt")({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"});t.exports=r},"1inl":function(t,e,n){var r=n("Te9D"),a=n.n(r);const o={};o._showErrorCallback=o._showErrorCallback||null,o.setShowHtmlErrorCallback=function(t){o._showErrorCallback=t},o.showError=function(t,e,n){const r=a()(t);return o.showHtmlError(r,e,n)},o.showHtmlError=function(t,e,n){"function"==typeof o._showErrorCallback&&o._showErrorCallback(t,e,n)},e.a=o},"3R0Q":function(t,e,n){e.a=t=>{const e={};t.forEach(({label:t,timestamp:n})=>{e[t]=(e[t]||[]).concat([n])});const n={};return Object.keys(e).forEach(t=>{(e[t]||[]).forEach((e,r)=>{n[r?`${t}_${r+1}`:t]=e})}),n}},"3cYt":function(t,e){t.exports=function(t){return function(e){return null==t?void 0:t[e]}}},"4cpq":function(t,e,n){n.d(e,"a",(function(){return o}));var r=n("nKUr"),a=n("n6mq");function o(t){const{children:e,display:n,id:o}=t;return Object(r.jsx)(a.e,{"data-test-id":o,display:n,children:e})}},"4dcN":function(t,e,n){(function(t){var r=n("T0g9"),a=n("Jr++");let o;void 0===o&&(o=t),o._gaq=o._gaq||[];let i=[];const c=function(t){if(i.length)for(let e=0;e<i.length;e+=1){const n=i[e];o._gaq.push(["_setAccount",n]),o._gaq.push(t)}},s=function(t){if(i=t,!t.length)return;const e=document.createElement("script");e.type="text/javascript",e.async=!0,e.src=("https:"===document.location.protocol?"https://ssl":"http://www")+".google-analytics.com/ga.js",(document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0]).appendChild(e)},u=2,d=3,p={};p.init=function(t,e){s(t),c(["_setCustomVar",1,"is_logged_in",e?"logged in":"logged out",u])},p.initSterling=function(t,{isLoggedIn:e,advertiser:n,adminUser:r,viewingUser:a}){s(t),e?(r?c(["_setCustomVar",1,"adminUser",r.toString(),d]):a&&a.id?c(["_setCustomVar",1,"viewingUser",a.id.toString(),d]):c(["_setCustomVar",1,"is_logged_in","logged in",d]),n&&n.id&&c(["_setCustomVar",3,"advertiserId",n.id,d])):c(["_setCustomVar",1,"is_logged_in","logged out",d])};const l=function(t,e){let n=t;const o=Object(a.a)(e).q;return o&&(n+="?"+Object(r.a)({q:o})),n};p.trackPageview=function(t){c(["_setCustomVar",2,"page_name",t,d]),c(["_trackPageview",l(o.location.pathname,o.location.search)]),c(["_setPageGroup",1,t])},p.trackEvent=function(t,e,n,r,a){c(["_trackEvent",t,e,n,r,a])},p.trackCategoryEvent=function(t,e,n){p.trackEvent(t+"_"+e,n)},e.a=p}).call(this,n("yLpj"))},"4sDh":function(t,e,n){var r=n("4uTw"),a=n("03A+"),o=n("Z0cm"),i=n("wJg7"),c=n("shjB"),s=n("9Nap");t.exports=function(t,e,n){for(var u=-1,d=(e=r(e,t)).length,p=!1;++u<d;){var l=s(e[u]);if(!(p=null!=t&&n(t,l)))break;t=t[l]}return p||++u!=d?p:!!(d=null==t?0:t.length)&&c(d)&&i(l,d)&&(o(t)||a(t))}},"B/lV":function(t,e,n){const r=t=>{const e=t.replace(new RegExp("^"+(window.location.origin||"")),""),n=document&&document.querySelector(`head > script[src='${e}']`);return!!n&&n.hasAttribute("defer")},a=t=>["pinimg","pinterest","pinterdev"].every(e=>!t.includes(e+".com/"));e.a=(t,e)=>{const n=(({name:t,initiatorType:e})=>{switch(e){case"xmlhttprequest":return"xmlhttprequest";case"img":return"image";case"video":return"video";default:{const e=t.split("."),n=(e.length>1&&e.pop()||"").toLowerCase();return["js","mjs"].includes(n)?"script":"css"===n?"css":["mp4","m4v","mov"].includes(n)?"video":["bmp","gif","jpg","jpeg","png","tiff","webp","svg"].includes(n)?"image":"other"}}})(t),{name:o}=t;return{category:n,isDeferred:"script"===n&&r(o),isExternal:a(o),isVisuallyCompleteRequired:"image"===n&&e.includes(o),timing:t}}},BiGR:function(t,e,n){var r=n("nmnc"),a=n("03A+"),o=n("Z0cm"),i=r?r.isConcatSpreadable:void 0;t.exports=function(t){return o(t)||a(t)||!!(i&&t&&t[i])}},CP5N:function(t,e,n){var r=n("q1tI"),a=n("3R0Q"),o=n("B/lV"),i=n("vzKb"),c=n("FylZ"),s=n("mRg4"),u=n("LvPn"),d=n("XtwW"),p=n("LrH5"),l=n("fZG9"),m=n("xfna"),f=n("3/Bf");const b=Object(p.a)("PwtStopwatch"),y=(t,e)=>{if(d.a){if("start"===e.type&&!t.isTiming){const{name:t,startTime:n}=e;return Object(f.c)("TIMING."+t),{isTiming:!0,isSampled:e.isSampled,startTime:"number"==typeof n?n:d.a.now(),metricId:{type:"stopwatch",name:t},pwtStaticContext:e.pwtStaticContext,annotations:[],binaryAnnotations:{},spans:[]}}if("annotate"===e.type&&t.isTiming){const n=d.a.now();return b(`adding annotation {${e.label}: ${n}}`),{...t,annotations:t.annotations.concat([{label:e.label,timestamp:n}])}}if("binaryAnnotate"===e.type&&t.isTiming)return b(`adding binary annotation {${e.name}: ${String(e.value)}}`),{...t,binaryAnnotations:{...t.binaryAnnotations,[e.name]:{value:e.value,type:e.annotationType}}};if("binaryAnnotateOperation"===e.type&&t.isTiming){const{value:n,type:r}=e.binaryAnnotationValueAndType;if(t.binaryAnnotations[e.name]){const a=t.binaryAnnotations[e.name].value||0;return b(`operating on binary annotation {\n          name: ${e.name}\n          pervious value: ${String(a)}\n          operand: ${String(n)}\n        }`),{...t,binaryAnnotations:{...t.binaryAnnotations,[e.name]:{value:n?e.operation(a,n):a,type:r}}}}return{...t,binaryAnnotations:{...t.binaryAnnotations,[e.name]:{value:n,type:r}}}}if("addSubspan"===e.type&&t.isTiming){b(`adding subspan {${e.name}}`);const{startTime:n}=t;return{...t,spans:[...t.spans,{name:e.name,startTime:e.startTime||n,endTime:e.endTime,annotationMap:{...e.annotations},binaryAnnotationMap:{...e.binaryAnnotations}}]}}if("subspanStart"===e.type&&t.isTiming)return b(`starting subspan {${e.name}}`),{...t,spans:[...t.spans,{name:e.name,startTime:d.a.now(),endTime:1/0,annotationMap:{...e.annotations},binaryAnnotationMap:{...e.binaryAnnotations}}]};if("subspanStop"===e.type&&t.isTiming){b(`stopping subspan {${e.name}}`);const n=t.spans.findIndex(t=>t.name===e.name);return n>-1?(t.spans[n].endTime=d.a.now(),e.annotations&&(t.spans[n].annotationMap={...t.spans[n].annotationMap,...e.annotations}),e.binaryAnnotations&&(t.spans[n].binaryAnnotationMap={...t.spans[n].binaryAnnotationMap,...e.binaryAnnotations})):Object(f.b)("invalid_subspan_stop_name",{name:e.name}),t}if("stop"===e.type&&t.isTiming){const{startTime:n,metricId:r,pwtStaticContext:i,annotations:p,binaryAnnotations:m,isSampled:f,spans:b}=t;if(e.stopwatchPerformanceObserver&&e.stopwatchPerformanceObserver.disconnect(),f){const t=e.stopTime||d.a.now(),f={type:"COMPLETE",traceId:Object(c.a)(),startTime:n,endTime:t,spans:b.length?b.map(e=>(e.endTime===1/0&&(e.endTime=t),e)):(e.customStopwatchBuffer||[]).map(t=>Object(u.a)(Object(o.a)(t,[]))).filter(Boolean),annotationMap:Object(a.a)(p),binaryAnnotationMap:Object(l.a)({metricId:r,pwtStaticContext:i,binaryAnnotations:m,performanceResourceTimings:e.customStopwatchBuffer||[]})};Object(s.a)({metricId:r,pwtStaticContext:i,result:f})}return{isTiming:!1}}if("error"===e.type){const{error:t,stopwatchPerformanceObserver:n}=e;return t&&Object(f.b)(t),n&&n.disconnect(),{isTiming:!1}}if("abort"===e.type&&t.isTiming){e.stopwatchPerformanceObserver&&e.stopwatchPerformanceObserver.disconnect();const{metricId:n,pwtStaticContext:r}=t,a=e.reason||"";return Object(s.a)({metricId:n,pwtStaticContext:r,result:{type:"ABORT",reason:a}}),{isTiming:!1}}}return t};e.a=(t,e)=>{const n=Object(m.c)(),a=Object(r.useRef)([]),o=Object(r.useRef)(),[c,s]=Object(r.useReducer)(y,{isTiming:!1});return n?{isTiming:c.isTiming,start:r=>{if(window.PerformanceObserver){const t=1e3;a.current=[],o.current=Object(i.a)({entryTypes:["resource"]},e=>{a.current=a.current.concat(e.getEntries()),a.current.length>t&&(a.current=a.current.slice(-t))})}const c={type:"start",startTime:r,name:t,pwtStaticContext:n,isSampled:!e||Math.random()<e};return s(c)},stop:t=>s({type:"stop",stopTime:t,stopwatchPerformanceObserver:o.current,customStopwatchBuffer:a.current}),error:t=>{s({type:"error",stopwatchPerformanceObserver:o.current,error:t})},abort:t=>s({type:"abort",stopwatchPerformanceObserver:o.current,customStopwatchBuffer:a.current,reason:t}),annotate:t=>s({type:"annotate",label:t}),binaryAnnotate:(t,e,n)=>s({type:"binaryAnnotate",name:t,value:e,annotationType:n}),binaryAnnotateOperation:(t,e,n)=>s({type:"binaryAnnotateOperation",name:t,binaryAnnotationValueAndType:e,operation:n}),addSubspan:(t,e,n,r={},a={})=>s({type:"addSubspan",name:t,startTime:e,endTime:n,annotations:r,binaryAnnotations:a}),subspanStart:(t,e={},n={})=>s({type:"subspanStart",name:t,annotations:e,binaryAnnotations:n}),subspanStop:(t,e={},n={})=>s({type:"subspanStop",name:t,annotations:e,binaryAnnotations:n})}:null}},EHyI:function(t,e,n){n.d(e,"a",(function(){return i}));var r=()=>{var t;return!!(null===(t=window.performance)||void 0===t?void 0:t.timing)},a=n("XtwW"),o=n("gg0E");function i(t){return!("desktop"===t&&!r())&&(!!a.a&&Object(o.a)())}},F2ZA:function(t,e,n){n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return o})),n.d(e,"h",(function(){return i})),n.d(e,"f",(function(){return c})),n.d(e,"i",(function(){return d})),n.d(e,"g",(function(){return p})),n.d(e,"e",(function(){return l})),n.d(e,"d",(function(){return m}));n("n6mq");const r="mweb_today_tab_entry_point",a="/today/",o=3,i=(t,e,n=0)=>({num_days:e,referrer:n,...t?{}:{redux_normalize_feed:!0}});function c(t,e,n){const r=function(t){return 0===t||2===t?"trending":1===t?"best":"article"}(t),a=function(t){return t.toLowerCase().replace(/[.,\/#!?$%\^&\*+;:{}=\-_`~()\’'"]/g,"").trim().replace(/\s+/g,"-")}(e);return`/today/${r}/${encodeURIComponent(a)}/${n}/`}const s={"www.pinterest.com":"US","www.pinterest.co.uk":"GB","www.pinterest.ca":"CA","www.pinterest.com.au":"AU","br.pinterest.com":"BR","www.pinterest.com.mx":"MX","ar.pinterest.com":"AR","www.pinterest.cl":"CL","co.pinterest.com":"CO","www.pinterest.de":"DE","www.pinterest.at":"AT","www.pinterest.ch":"CH","www.pinterest.fr":"FR","in.pinterest.com":"IN","id.pinterest.com":"ID","www.pinterest.jp":"JP"},u={US:"en",GB:"en",CA:"en",AU:"en",BR:"pt",MX:"es",AR:"es",CL:"es",CO:"es",PE:"es",DE:"de",AT:"de",CH:"de",FR:"fr",IN:"en",ID:"id",JP:"ja",IT:"it"},d=(t,e)=>{const n=u[t];return!(null===n||n!==e&&!e.startsWith(n))},p=t=>s[t],l=(t,e)=>t||((null==e?void 0:e.origin_pinner)||(null==e?void 0:e.pinner)||""),m=(t,e)=>t||((null==e?void 0:e.origin_pinner)||(null==e?void 0:e.pinner))},F4HH:function(t,e,n){var r=n("nKUr"),a=n("q1tI"),o=n("CP5N"),i=n("1dBE"),c=n("xfna");e.a=({name:t,v2LoggerMetricName:e,sampleRate:n,abortOnUnloadOrClientNavigation:s=!0})=>{const{Provider:u,useHook:d}=Object(i.b)("Stopwatch_"+t);return{Provider:function({children:e}){const i=Object(o.a)(t,n),d=Object(c.b)(),p=d?d.time:0,l=Object(a.useRef)(!1),m=t=>{l.current&&(l.current=!1,i&&i.abort(t))};return Object(a.useEffect)(()=>()=>{s&&m("unloadOrClientNavigation")},[p]),Object(r.jsx)(u,{value:{abort:m,addAnnotation:t=>{l.current&&i&&i.annotate(t)},addBinaryAnnotation:(t,e,n)=>{l.current&&i&&i.binaryAnnotate(t,e,n)},binaryAnnotationOperation:(t,e,n)=>{l.current&&i&&i.binaryAnnotateOperation(t,e,n)},addSubspan:(t,e,n,r,a)=>{l.current&&i&&i.addSubspan(t,e,n,r,a)},subspanStart:(t,e,n)=>{l.current&&i&&i.subspanStart(t,e,n)},subspanStop:(t,e,n)=>{l.current&&i&&i.subspanStop(t,e,n)},error:t=>{l.current&&(l.current=!1,i&&i.error(t))},start:()=>{i&&l.current&&i.abort("duplicated_init_stopwatch_action"),l.current=!0,null==i||i.start()},stop:t=>{l.current&&(l.current=!1,i&&i.stop(t))}},children:e})},useHook:d}}},Juji:function(t,e){t.exports=function(t,e){return null!=t&&e in Object(t)}},K316:function(t,e,n){var r=n("mBfy");e.a=()=>r.default.isAuthenticated()&&!!r.default.attributes.facebook_id&&!r.default.isLimitedLogin()},LvPn:function(t,e,n){n.d(e,"a",(function(){return i}));var r=n("pody"),a=n("nEAA");const o=({category:t,isDeferred:e,isExternal:n})=>[t].concat(e?["deferred"]:[]).concat(n?["external"]:[]).join("_");function i(t){const{category:e,timing:n,isDeferred:i,isExternal:c,isVisuallyCompleteRequired:s}=t;return n.responseEnd&&("image"!==e||s)?{name:o(t),startTime:n.startTime,endTime:n.responseEnd,annotationMap:Object(r.a)(n),binaryAnnotationMap:{category:Object(a.d)(e),decodedBodySize:Object(a.b)(n.decodedBodySize||0),initiatorType:Object(a.d)(n.initiatorType),isDeferred:Object(a.a)(i),isExternal:Object(a.a)(c),name:Object(a.d)(n.name),nextHopProtocol:Object(a.d)(n.nextHopProtocol),transferSize:Object(a.b)(n.transferSize||0)}}:null}},QIyF:function(t,e,n){var r=n("Kz5y");t.exports=function(){return r.Date.now()}},Rfw2:function(t,e,n){n.d(e,"a",(function(){return o})),n.d(e,"e",(function(){return i})),n.d(e,"c",(function(){return c})),n.d(e,"b",(function(){return s})),n.d(e,"f",(function(){return u})),n.d(e,"d",(function(){return d}));var r=n("T0g9");const a=["and","that","but","or","as","if","when","than","because","while","where","after","so","though","since","until","whether","before","although","nor","like","once","unless","now","except","the","a","an","san","for","in","with"],o={AUTO_COMPLETE_DEFAULT:"query",AUTO_COMPLETE_HASHTAG:"hashtag",AUTO_COMPLETE_RECENT_SEARCH:"recent_query",AUTO_COMPLETE_RECOMMENDED_SEARCH:"recommended_query",AUTO_COMPLETE_TRENDING:"trending",TYPO_AUTO_CORRECT_ORIGINAL:"typo_auto_original",USER_INPUT:"typed",SEARCH_GUIDE:"add_refine"};function i(t){return(t||"").trim().replace(/\s+/g," ")}function c({type:t,term:e="",index:n}){switch(t){case o.USER_INPUT:case o.AUTO_COMPLETE_HASHTAG:case o.TYPO_AUTO_CORRECT_ORIGINAL:return`${e}|${t}`;case o.AUTO_COMPLETE_DEFAULT:return`${e}|autocomplete|${n}`;case o.AUTO_COMPLETE_RECENT_SEARCH:return`${e}|recentsearch|${n}`;case o.AUTO_COMPLETE_TRENDING:return`${e}|trending|${n}`;case o.AUTO_COMPLETE_RECOMMENDED_SEARCH:return`${e}|recommended|${n}`;case o.SEARCH_GUIDE:return`${e}|guide|word|${n}`;default:return""}}function s({queryStates:t}){return 0===t.length?"":"&"+Object(r.a)({term_meta:t.map(t=>c(t))})}function u(t){if(t){const e=t.trim().split(/\s+/);return e.find(t=>a.includes(t.toLowerCase()))?[t]:e}return[]}function d({type:t,query:e="",index:n}){switch(t){case o.USER_INPUT:case o.AUTO_COMPLETE_HASHTAG:case o.TYPO_AUTO_CORRECT_ORIGINAL:return u(e).map(e=>({index:n,term:e,type:t}));case o.AUTO_COMPLETE_RECENT_SEARCH:case o.AUTO_COMPLETE_RECOMMENDED_SEARCH:case o.AUTO_COMPLETE_TRENDING:case o.AUTO_COMPLETE_DEFAULT:return u(e).map(e=>({term:e,type:t,index:n}));default:return[]}}},TYy9:function(t,e,n){var r=n("XGnz");t.exports=function(t){return(null==t?0:t.length)?r(t,1):[]}},Te9D:function(t,e,n){var r=n("/kAC"),a=n("dt0z"),o=/[&<>"']/g,i=RegExp(o.source);t.exports=function(t){return(t=a(t))&&i.test(t)?t.replace(o,r):t}},TqAR:function(t,e,n){n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return i})),n.d(e,"e",(function(){return c})),n.d(e,"f",(function(){return s})),n.d(e,"d",(function(){return u})),n.d(e,"i",(function(){return d})),n.d(e,"k",(function(){return p})),n.d(e,"l",(function(){return l})),n.d(e,"m",(function(){return m})),n.d(e,"j",(function(){return f})),n.d(e,"h",(function(){return b})),n.d(e,"g",(function(){return O}));var r=n("F2ZA");n("n6mq");const a=408,o=16,i=2*(a+o),c=766,s=1.532,u=45,d=t=>{const{article_creator_user:e,display_type:n,feed_source:a,header_pin_id:o,id:i,title:c,video_pin:s}=t;switch(n){case 0:case 1:return c?Object(r.f)(a,c,i):"";case 8:return(null==e?void 0:e.username)?`/${encodeURIComponent(e.username)}/`:"";case 3:case 6:return o?`/pin/${o}/`:"";case 2:return(null==s?void 0:s.id)?`/pin/${s.id}/`:"";default:return""}},p=t=>"todayarticle"===t.type,l=t=>"story"===(null==t?void 0:t.type)&&"today_tab_footer"===(null==t?void 0:t.story_type),m=t=>"story"===(null==t?void 0:t.type)&&("today_tab_header"===(null==t?void 0:t.story_type)||"today_tab_date_header"===(null==t?void 0:t.story_type)),f=t=>Array.isArray(t)&&t.length>0&&t.every(t=>"story"===t.type),b=t=>t.height/t.width,y=["736x","236x","170x"],O=t=>{for(const e of y)if(t.images[e])return t.images[e];return null}},XGnz:function(t,e,n){var r=n("CH3K"),a=n("BiGR");t.exports=function t(e,n,o,i,c){var s=-1,u=e.length;for(o||(o=a),c||(c=[]);++s<u;){var d=e[s];n>0&&o(d)?n>1?t(d,n-1,o,i,c):r(c,d):i||(c[c.length]=d)}return c}},YYM5:function(t,e,n){n.d(e,"a",(function(){return a}));var r=n("+NLT");function a(){const t=r.a.instance;return`${t.is_mobile_agent?"mobile":"desktop"}.${t.country}.${t.user_agent_platform}.${t.browser_name}`.replace(/ /g,"_")}},ZdHo:function(t,e,n){n.d(e,"f",(function(){return a})),n.d(e,"e",(function(){return o})),n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return c})),n.d(e,"c",(function(){return s})),n.d(e,"g",(function(){return d})),n.d(e,"d",(function(){return p}));var r=n("eOdZ");function a(t){return{type:"CONVERSATION_SHOW",payload:{id:t}}}function o(t,e=!1,n=""){return{type:"CONVERSATION_OPEN",payload:{id:t,isPreview:e,contactRequestId:n}}}function i(t,e="",n=!1){return{type:"CONVERSATION_CLOSE",payload:{id:t,contactRequestId:e,isDeclined:n}}}function c(t){return{type:"CONVERSATION_CREATE",payload:t}}function s(t){return{type:"CONVERSATION_DELETE",payload:{id:t}}}const u=(()=>{let t=0;return()=>t++})();function d(t,e,n){let a;const o=new Promise((i,s)=>{a=(a,o)=>{const{text:d,pinId:p,boardId:l,userId:m,didItId:f}=e,b=o();function y(){const e=r.a.create("ConversationMessagesResource",{conversation_id:t,text:d,pin:p,board:l,user:m,user_did_it_data:f,source:n}),o=""+u();a(function(t,e){return{type:"MESSAGE_SEND_PENDING",payload:{id:t,message:e}}}(t,{text:d,sender:b.viewer,created_at:(new Date).toString(),created_ms:Date.now(),id:o,board:null,event_type:null,pin:p?b.pins[p]:null,type:"message",user_did_it_data:null,user:null})),e.callCreate().then(e=>{var n,r,c;a((n=t,r=o,c=e.resource_response.data.id,{type:"MESSAGE_SEND_PENDING_CLEAR",payload:{id:n,messageId:r,newMessageId:c}})),i()}).catch(s)}b.conversations.data[t]?y():r.a.create("ConversationResource",{conversation_id:t}).callGet().then(t=>{const e=t&&t.resource_response&&t.resource_response.data;a(c(e)),y()})},a.getPromise=()=>o});return a}const p=(t,e,n)=>a=>r.a.create("ConversationsResource",{user_ids:t,emails:e,text:""}).callCreate().then(t=>{const e=t&&t.resource_response.data;a(o(e.id))}).catch(t=>{const e=t.message_detail||t.message||"";n(e)})},fZG9:function(t,e,n){n.d(e,"a",(function(){return y})),n.d(e,"b",(function(){return g}));var r=n("bNC6"),a=n("HMdf"),o=n("+lzj"),i=n("SyXB"),c=n("nEAA");const s=(t,e)=>(t||[]).reduce((t,n)=>({...t,["experiment."+n]:Object(c.d)(e(n))}),{}),u=(t,e)=>"number"==typeof e?t(e):null,d=t=>t.reduce((t,e)=>t+e,0),p=(t,e)=>Object.keys(e).reduce((n,r)=>({...n,[`${t}${r}`]:e[r]}),{}),l=t=>{if(!t.length)return{};const e=t.map(({startTime:t,requestStart:e,responseStart:n,responseEnd:r})=>{const a=e||t;return{startTime:t,requestStart:a,responseStart:n||a,responseEnd:r}}),n=d(e.map(t=>t.requestStart-t.startTime)),r=d(e.map(t=>t.responseStart-t.requestStart)),a=d(e.map(t=>t.responseEnd-t.responseStart)),o=n+r+a,i=d(t.map(t=>t.decodedBodySize||0));return{decodedBodySize:Object(c.b)((s=i,Number(Number(s/1024).toFixed(3)))),"duration.all":Object(c.b)(o),"duration.requestStartToResponseStart":Object(c.b)(r),"duration.responseStartToResponseEnd":Object(c.b)(a),"duration.startToRequestStart":Object(c.b)(n)};var s},m=t=>{const e=t.filter(t=>!!t.responseEnd);return{...t.length?{...l(e),"count.completed":Object(c.b)(e.length)}:{},"count.all":Object(c.b)(t.length)}},f=t=>{const e=t.reduce((t,e)=>(t[e.category]=(t[e.category]||[]).concat([e]),t),{}),n={script:e.script,script_deferred:t.filter(t=>t.isDeferred),external:t.filter(t=>t.isExternal),css:e.css,image:e.image,video:e.video,xmlhttprequest:e.xmlhttprequest,visually_complete:t.filter(t=>t.isVisuallyCompleteRequired)};return Object.keys(n).reduce((t,e)=>({...t,...p(`resource.${e}.`,m((n[e]||[]).map(t=>t.timing)))}),{})},b=(t,e)=>{const{devicePixelRatio:n,navigator:a,innerWidth:o,innerHeight:i}=window,{deviceMemory:s,hardwareConcurrency:u,platform:d,userAgent:p}=a,{appType:l,appVersion:m,browserName:f,browserVersion:b,deviceType:y,isBot:O,isSocialBot:g,locale:T,osName:_,stageName:v}=e,E="desktop"===y?l||5:l||6,w="surface"===t.type&&"initial_app_load"===t.navigationType?1:4;return{"app.type":Object(c.c)(E),"app.version":Object(c.d)(m),"browser.name":Object(c.d)(f),"browser.version":Object(c.d)(b),"cpu.speed":Object(c.c)(u),"device.memory":Object(c.c)(s),"device.type":Object(c.c)(0),"device.typeName":Object(c.d)(y),"device.version":Object(c.d)("unknown"),"pwt.cause":Object(c.c)(w),"pwt.result":Object(c.c)(1),"view.type":Object(c.b)(0),"viewport.height":Object(c.b)(i||0),"viewport.width":Object(c.b)(o||0),devicePixelRatio:Object(c.b)(n||0),isBot:Object(c.a)(O),isSocialBot:Object(c.a)(g),locale:Object(c.d)(T),osName:Object(c.d)(_),platform:Object(c.d)(d||null),profilerVersion:Object(c.d)("3"),pwtActionName:Object(c.c)(Object(r.a)(t)),stageName:Object(c.d)(v),userAgent:Object(c.d)(p)}},y=({metricId:t,pwtStaticContext:e,binaryAnnotations:n={},performanceResourceTimings:r=[]})=>{let o={};{const{connection:t,hardwareConcurrency:e,deviceMemory:n}=window.navigator;o={"net.effectiveType":Object(c.d)((null==t?void 0:t.effectiveType)||null),"net.rtt":Object(c.b)(u(t=>10*Math.round(t/10),null==t?void 0:t.rtt)),"net.speed":Object(c.b)(Object(a.b)(r,!1)),"cpu.threads":Object(c.c)(e),"memory.size":Object(c.b)(n)}}return{...b(t,e),...n,...o}},O=(t,e,n,r)=>{var s;const{navigator:p}=window,{connection:l,serviceWorker:m}=p,{surface:f,navigationType:b,isAuthenticated:y}=t,{cumulativeLayoutShiftScore:O,longTaskDurations:g}=Object(o.b)();return{...g.length?{"longTask.count":Object(c.b)(g.length),"longTask.maxDuration":Object(c.b)(Math.max(...g)),"longTask.totalDuration":Object(c.b)(d(g))}:{},cumulativeLayoutShiftScore:Object(c.b)(100*O),"masonry.paginationMarkCount":Object(c.b)(Object(i.e)(i.a,e)),"metricId.isAuthenticated":Object(c.a)(y),"metricId.navigationType":Object(c.d)(b),"metricId.surface":Object(c.d)(f),"net.effectiveType":Object(c.d)((null==l?void 0:l.effectiveType)||null),"net.rtt":Object(c.b)(u(t=>10*Math.round(t/10),null==l?void 0:l.rtt)),"net.speed":Object(c.b)(Object(a.b)(n)),entryChunkAfterDoc:Object(c.a)(r),resourceBufferClearedCount:Object(c.c)(Object(i.e)("resourceBufferCleared",e)),scrollDuringLayout:Object(c.a)(Object(i.f)("scrollDuringLayout",e)),serviceWorker:Object(c.a)(m?!!m.controller:null),serviceWorkerState:Object(c.d)((null==m||null===(s=m.controller)||void 0===s?void 0:s.state)||null)}},g=({annotateExperiments:t,binaryAnnotations:e={},entries:n,entryChunkAfterDoc:r,metricId:a,performanceResources:o,pwtEndTime:i,pwtStaticContext:c})=>({...e,...f(o),...s(t,c.getExperimentGroup),...b(a,c),...O(a,i,n,r)})},fhk9:function(t,e,n){n.d(e,"a",(function(){return r})),n.d(e,"c",(function(){return o})),n.d(e,"b",(function(){return i}));const r={type:"OPEN_CONVERSATIONS_DROPDOWN"},a={type:"CLOSE_CONVERSATIONS_DROPDOWN"},o=t=>({updateBadgeCount:e=>{t({type:"UPDATE_BADGE_COUNT",payload:e})}}),i=t=>({openConversationsDropdown:()=>t(r),closeConversationsDropdown:()=>t(a)})},hgQt:function(t,e,n){var r=n("Juji"),a=n("4sDh");t.exports=function(t,e){return null!=t&&a(t,e,r)}},iS6d:function(t,e,n){var r=n("q1tI");e.a=Object(r.createContext)(!1)},mRg4:function(t,e,n){n.d(e,"a",(function(){return g}));let r=null;var a=(t,e)=>(r=r||{results:[],context:e},r.results.push(t),r),o=n("FZ8N"),i=n("LrH5"),c=n("bNC6"),s=n("3/Bf"),u=n("o9su"),d=n("FylZ");const p=(t,e)=>Object.keys(t).reduce((n,r)=>{const a=t[r];return a&&(n[r]={timestamp:e+a}),n},{}),l=({span:t,id:e,parentId:n,timeOrigin:r})=>{return{id:e,parent_id:n,result:1,name:t.name,timestamp:r+t.startTime,duration:t.endTime-t.startTime,annotations:p(t.annotationMap,r),binary_annotations:(a=t.binaryAnnotationMap,Object.keys(a).reduce((t,e)=>{const n=a[e];if(!n)return t;const{value:r,type:o}=n;return null==r?t:t.concat({name:e,value:r,annotation_type:o})},[]))};var a},m=(t,{startTime:e,endTime:n,annotationMap:r,binaryAnnotationMap:a})=>({name:"pwt/"+t,startTime:e,endTime:n,annotationMap:r,binaryAnnotationMap:a}),f=({annotations:t})=>t.reduce((t,{key:e,timestamp:n})=>({...t,["server_"+e]:{timestamp:n}}),{}),b=(t,e)=>({...t,annotations:{...f(e),...t.annotations},binary_annotations:[...e.binary_annotations,...t.binary_annotations]}),y=({traceId:t,actionName:e,result:n,timeOrigin:r,serverDataToJoin:a})=>{const o=(null==a?void 0:a.client_span_id)||Object(d.a)();let i=l({span:m(e,n),id:o,parentId:null,timeOrigin:r}),c=null;return a&&(i=b(i,a),c=((t,e,n)=>{const r=Object(u.a)();return(null==r?void 0:r.responseEnd)?b(l({span:{name:"html",startTime:0,endTime:(null==r?void 0:r.responseEnd)||1,annotationMap:{},binaryAnnotationMap:{}},id:t.server_span_id||Object(d.a)(),parentId:e,timeOrigin:n}),t):null})(a,o,r)),{trace_id:t,spans:[i,...c?[c]:[],...n.spans.map(t=>l({span:t,id:Object(d.a)(),parentId:o,timeOrigin:r}))]}},O=Object(i.a)("reportResult");function g({metricId:t,pwtStaticContext:e,result:n}){const{ajax:r,serverData:i}=e,u=Object(c.b)(t),d=`${n.type}.${u}`;if(Object(s.c)(n.reason?d.concat("."+n.reason):d),"COMPLETE"!==n.type)return void O("Abort metric "+u,n);const p=(null===(l=window.performance)||void 0===l?void 0:l.now)?Date.now()-window.performance.now():"unknown";var l,m;if("unknown"===p)return O(`Unable to convert to absolute times for ${u} due to missing time origin`),void Object(s.c)("missingTimeOrigin."+u);if(o.c&&(window.PWT_LAB_DATA=a(n,e)),!o.c){const a="surface"===t.type&&"initial_app_load"===t.navigationType,c=n.traceId,s=y({traceId:c,actionName:u,result:n,timeOrigin:p,serverDataToJoin:a&&i||null});r({type:"POST",url:"/_/_/trace/trace/",data:{report_data:JSON.stringify(s),report_context:JSON.stringify((m=e,{debugTrace:o.a,locale:m.locale,stageName:m.stageName,userId:m.isAuthenticated?m.userId:null}))}}),O(`PinTrace ${u} will be available shortly: https://pintrace.pinadmin.com/zipkin/traces/${c}`,{duration:n.endTime-n.startTime,result:n,pwtStaticContext:e})}}},nEAA:function(t,e,n){n.d(e,"c",(function(){return a})),n.d(e,"b",(function(){return o})),n.d(e,"d",(function(){return i})),n.d(e,"a",(function(){return c}));const r=t=>"number"==typeof t?Math.round(t):t,a=t=>({type:"I16",value:r(t)}),o=t=>({type:"I32",value:r(t)}),i=t=>({type:"STRING",value:t}),c=t=>({type:"BOOL",value:t})},o9su:function(t,e,n){var r=n("XtwW");e.a=()=>{const[t]=r.a?r.a.getEntriesByType("navigation"):[];return t}},pody:function(t,e,n){e.a=t=>({connectEnd:t.connectEnd||0,connectStart:t.connectStart||0,domainLookupEnd:t.domainLookupEnd||0,domainLookupStart:t.domainLookupStart||0,fetchStart:t.fetchStart||0,requestStart:t.requestStart||0,redirectEnd:t.redirectEnd||0,redirectStart:t.redirectStart||0,responseEnd:t.responseEnd||0,responseStart:t.responseStart||0,secureConnectionStart:t.secureConnectionStart||0,startTime:t.startTime||0,workerStart:t.workerStart||0})},sEfC:function(t,e,n){var r=n("GoyQ"),a=n("QIyF"),o=n("tLB3"),i=Math.max,c=Math.min;t.exports=function(t,e,n){var s,u,d,p,l,m,f=0,b=!1,y=!1,O=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function g(e){var n=s,r=u;return s=u=void 0,f=e,p=t.apply(r,n)}function T(t){return f=t,l=setTimeout(v,e),b?g(t):p}function _(t){var n=t-m;return void 0===m||n>=e||n<0||y&&t-f>=d}function v(){var t=a();if(_(t))return E(t);l=setTimeout(v,function(t){var n=e-(t-m);return y?c(n,d-(t-f)):n}(t))}function E(t){return l=void 0,O&&s?g(t):(s=u=void 0,p)}function w(){var t=a(),n=_(t);if(s=arguments,u=this,m=t,n){if(void 0===l)return T(m);if(y)return clearTimeout(l),l=setTimeout(v,e),g(m)}return void 0===l&&(l=setTimeout(v,e)),p}return e=o(e)||0,r(n)&&(b=!!n.leading,d=(y="maxWait"in n)?i(o(n.maxWait)||0,e):d,O="trailing"in n?!!n.trailing:O),w.cancel=function(){void 0!==l&&clearTimeout(l),f=0,s=m=u=l=void 0},w.flush=function(){return void 0===l?p:E(a())},w}},vZlu:function(t,e,n){n.d(e,"e",(function(){return r})),n.d(e,"c",(function(){return a})),n.d(e,"d",(function(){return o})),n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return c}));const r=t=>({type:"TOGGLE_TYPEAHEAD_OVERLAY",payload:{value:t}});function a(t){const{currentTime:e,isPromoted:n,pinId:r}=t;return{type:"SET_CURRENT_VIDEO",payload:{pinId:r,isPromoted:n,currentTime:e}}}function o(t){return{type:"SET_IS_AUTOPLAY",payload:{isAutoplay:t}}}function i(t){const{currentTime:e,isPromoted:n,pinId:r}=t;return{type:"PAUSE_CURRENT_VIDEO",payload:{currentTime:e,pinId:r,isPromoted:n}}}function c(t){return{type:"SET_APP_FOCUS_STATE",payload:{appInFocus:t}}}},xfna:function(t,e,n){n.d(e,"a",(function(){return m})),n.d(e,"b",(function(){return f})),n.d(e,"c",(function(){return b}));var r=n("nKUr"),a=n("q1tI"),o=n("EHyI"),i=n("gg0E"),c=n("SyXB"),s=n("3/Bf"),u=n("+lzj"),d=n("HMdf");const p=Object(a.createContext)(null),l=Object(a.createContext)(null);function m({children:t,immutableLocation:e,resourceTimingCacheSize:n,routerHistoryAction:m,staticContext:f}){const b=Object(a.useRef)(null),y=Object(a.useRef)(null),O=Object(a.useRef)(e),g=Object(a.useRef)(!0);if(Object(a.useEffect)(()=>{Object(d.e)({size:n||1e3}),Object(u.c)(),Object(s.c)("totalSessionVolume"),window.performance?["clearMarks","clearMeasures","clearResourceTimings","getEntries","getEntriesByName","getEntriesByType","mark","measure","now","setResourceTimingBufferSize"].forEach(t=>{window.performance[t]||Object(s.c)("not_supported.window.performance."+t)}):Object(s.c)("not_supported.window.performance"),window.PerformanceObserver||Object(s.c)("not_supported.window.PerformanceObserer"),Object(i.a)()||Object(s.c)("not_supported.grid_profiler"),g.current=!1},[]),O.current!==e){O.current=e,y.current=(null===(T=window.performance)||void 0===T?void 0:T.now)?window.performance.now():null;const{current:t}=y;if(!g.current){Object(s.c)("routeStart",{tags:{action:m}}),Object(d.a)(),Object(u.a)(),Object(c.b)();const{customBufferSize:e,defaultBufferSize:n}=Object(d.d)();t&&(Object(s.c)("routeStart.customBufferSize",{count:e}),Object(s.c)("routeStart.defaultBufferSize",{count:n}),b.current={time:t,action:m})}}var T;const _=Object(o.a)(f.deviceType);return Object(r.jsx)(p.Provider,{value:_?f:null,children:Object(r.jsx)(l.Provider,{value:b.current,children:t})})}const f=()=>Object(a.useContext)(l),b=()=>Object(a.useContext)(p)},"xs/l":function(t,e,n){var r=n("TYy9"),a=n("Ioao"),o=n("wclG");t.exports=function(t){return o(a(t,void 0,r),t+"")}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/js/13-f773334ac3a6e8605260.mjs.map