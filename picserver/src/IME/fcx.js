!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k="".trim,l={},m="1.11.0",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return n.each(this,a,b)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(e=arguments[h]))for(d in e)a=g[d],c=e[d],g!==c&&(j&&c&&(n.isPlainObject(c)||(b=n.isArray(c)))?(b?(b=!1,f=a&&n.isArray(a)?a:[]):f=a&&n.isPlainObject(a)?a:{},g[d]=n.extend(j,f,c)):void 0!==c&&(g[d]=c));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray||function(a){return"array"===n.type(a)},isWindow:function(a){return null!=a&&a==a.window},isNumeric:function(a){return a-parseFloat(a)>=0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},isPlainObject:function(a){var b;if(!a||"object"!==n.type(a)||a.nodeType||n.isWindow(a))return!1;try{if(a.constructor&&!j.call(a,"constructor")&&!j.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}if(l.ownLast)for(b in a)return j.call(a,b);for(b in a);return void 0===b||j.call(a,b)},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(b){b&&n.trim(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=s(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:k&&!k.call("\ufeff\xa0")?function(a){return null==a?"":k.call(a)}:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){var d;if(b){if(g)return g.call(b,a,c);for(d=b.length,c=c?0>c?Math.max(0,d+c):c:0;d>c;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,b){var c=+b.length,d=0,e=a.length;while(c>d)a[e++]=b[d++];if(c!==c)while(void 0!==b[d])a[e++]=b[d++];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=s(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(f=a[b],b=a,a=f),n.isFunction(a)?(c=d.call(arguments,2),e=function(){return a.apply(b||this,c.concat(d.call(arguments)))},e.guid=a.guid=a.guid||n.guid++,e):void 0},now:function(){return+new Date},support:l}),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s="sizzle"+-new Date,t=a.document,u=0,v=0,w=eb(),x=eb(),y=eb(),z=function(a,b){return a===b&&(j=!0),0},A="undefined",B=1<<31,C={}.hasOwnProperty,D=[],E=D.pop,F=D.push,G=D.push,H=D.slice,I=D.indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(this[b]===a)return b;return-1},J="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",K="[\\x20\\t\\r\\n\\f]",L="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",M=L.replace("w","w#"),N="\\["+K+"*("+L+")"+K+"*(?:([*^$|!~]?=)"+K+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+M+")|)|)"+K+"*\\]",O=":("+L+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+N.replace(3,8)+")*)|.*)\\)|)",P=new RegExp("^"+K+"+|((?:^|[^\\\\])(?:\\\\.)*)"+K+"+$","g"),Q=new RegExp("^"+K+"*,"+K+"*"),R=new RegExp("^"+K+"*([>+~]|"+K+")"+K+"*"),S=new RegExp("="+K+"*([^\\]'\"]*?)"+K+"*\\]","g"),T=new RegExp(O),U=new RegExp("^"+M+"$"),V={ID:new RegExp("^#("+L+")"),CLASS:new RegExp("^\\.("+L+")"),TAG:new RegExp("^("+L.replace("w","w*")+")"),ATTR:new RegExp("^"+N),PSEUDO:new RegExp("^"+O),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+K+"*(even|odd|(([+-]|)(\\d*)n|)"+K+"*(?:([+-]|)"+K+"*(\\d+)|))"+K+"*\\)|)","i"),bool:new RegExp("^(?:"+J+")$","i"),needsContext:new RegExp("^"+K+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+K+"*((?:-\\d)?\\d*)"+K+"*\\)|)(?=[^-]|$)","i")},W=/^(?:input|select|textarea|button)$/i,X=/^h\d$/i,Y=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,$=/[+~]/,_=/'|\\/g,ab=new RegExp("\\\\([\\da-f]{1,6}"+K+"?|("+K+")|.)","ig"),bb=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)};try{G.apply(D=H.call(t.childNodes),t.childNodes),D[t.childNodes.length].nodeType}catch(cb){G={apply:D.length?function(a,b){F.apply(a,H.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function db(a,b,d,e){var f,g,h,i,j,m,p,q,u,v;if((b?b.ownerDocument||b:t)!==l&&k(b),b=b||l,d=d||[],!a||"string"!=typeof a)return d;if(1!==(i=b.nodeType)&&9!==i)return[];if(n&&!e){if(f=Z.exec(a))if(h=f[1]){if(9===i){if(g=b.getElementById(h),!g||!g.parentNode)return d;if(g.id===h)return d.push(g),d}else if(b.ownerDocument&&(g=b.ownerDocument.getElementById(h))&&r(b,g)&&g.id===h)return d.push(g),d}else{if(f[2])return G.apply(d,b.getElementsByTagName(a)),d;if((h=f[3])&&c.getElementsByClassName&&b.getElementsByClassName)return G.apply(d,b.getElementsByClassName(h)),d}if(c.qsa&&(!o||!o.test(a))){if(q=p=s,u=b,v=9===i&&a,1===i&&"object"!==b.nodeName.toLowerCase()){m=ob(a),(p=b.getAttribute("id"))?q=p.replace(_,"\\$&"):b.setAttribute("id",q),q="[id='"+q+"'] ",j=m.length;while(j--)m[j]=q+pb(m[j]);u=$.test(a)&&mb(b.parentNode)||b,v=m.join(",")}if(v)try{return G.apply(d,u.querySelectorAll(v)),d}catch(w){}finally{p||b.removeAttribute("id")}}}return xb(a.replace(P,"$1"),b,d,e)}function eb(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function fb(a){return a[s]=!0,a}function gb(a){var b=l.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function hb(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function ib(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||B)-(~a.sourceIndex||B);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function jb(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function kb(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function lb(a){return fb(function(b){return b=+b,fb(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function mb(a){return a&&typeof a.getElementsByTagName!==A&&a}c=db.support={},f=db.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},k=db.setDocument=function(a){var b,e=a?a.ownerDocument||a:t,g=e.defaultView;return e!==l&&9===e.nodeType&&e.documentElement?(l=e,m=e.documentElement,n=!f(e),g&&g!==g.top&&(g.addEventListener?g.addEventListener("unload",function(){k()},!1):g.attachEvent&&g.attachEvent("onunload",function(){k()})),c.attributes=gb(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=gb(function(a){return a.appendChild(e.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Y.test(e.getElementsByClassName)&&gb(function(a){return a.innerHTML="<div class='a'></div><div class='a i'></div>",a.firstChild.className="i",2===a.getElementsByClassName("i").length}),c.getById=gb(function(a){return m.appendChild(a).id=s,!e.getElementsByName||!e.getElementsByName(s).length}),c.getById?(d.find.ID=function(a,b){if(typeof b.getElementById!==A&&n){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ab,bb);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ab,bb);return function(a){var c=typeof a.getAttributeNode!==A&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return typeof b.getElementsByTagName!==A?b.getElementsByTagName(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return typeof b.getElementsByClassName!==A&&n?b.getElementsByClassName(a):void 0},p=[],o=[],(c.qsa=Y.test(e.querySelectorAll))&&(gb(function(a){a.innerHTML="<select t=''><option selected=''></option></select>",a.querySelectorAll("[t^='']").length&&o.push("[*^$]="+K+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||o.push("\\["+K+"*(?:value|"+J+")"),a.querySelectorAll(":checked").length||o.push(":checked")}),gb(function(a){var b=e.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&o.push("name"+K+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||o.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),o.push(",.*:")})),(c.matchesSelector=Y.test(q=m.webkitMatchesSelector||m.mozMatchesSelector||m.oMatchesSelector||m.msMatchesSelector))&&gb(function(a){c.disconnectedMatch=q.call(a,"div"),q.call(a,"[s!='']:x"),p.push("!=",O)}),o=o.length&&new RegExp(o.join("|")),p=p.length&&new RegExp(p.join("|")),b=Y.test(m.compareDocumentPosition),r=b||Y.test(m.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},z=b?function(a,b){if(a===b)return j=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===e||a.ownerDocument===t&&r(t,a)?-1:b===e||b.ownerDocument===t&&r(t,b)?1:i?I.call(i,a)-I.call(i,b):0:4&d?-1:1)}:function(a,b){if(a===b)return j=!0,0;var c,d=0,f=a.parentNode,g=b.parentNode,h=[a],k=[b];if(!f||!g)return a===e?-1:b===e?1:f?-1:g?1:i?I.call(i,a)-I.call(i,b):0;if(f===g)return ib(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)k.unshift(c);while(h[d]===k[d])d++;return d?ib(h[d],k[d]):h[d]===t?-1:k[d]===t?1:0},e):l},db.matches=function(a,b){return db(a,null,null,b)},db.matchesSelector=function(a,b){if((a.ownerDocument||a)!==l&&k(a),b=b.replace(S,"='$1']"),!(!c.matchesSelector||!n||p&&p.test(b)||o&&o.test(b)))try{var d=q.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return db(b,l,null,[a]).length>0},db.contains=function(a,b){return(a.ownerDocument||a)!==l&&k(a),r(a,b)},db.attr=function(a,b){(a.ownerDocument||a)!==l&&k(a);var e=d.attrHandle[b.toLowerCase()],f=e&&C.call(d.attrHandle,b.toLowerCase())?e(a,b,!n):void 0;return void 0!==f?f:c.attributes||!n?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},db.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},db.uniqueSort=function(a){var b,d=[],e=0,f=0;if(j=!c.detectDuplicates,i=!c.sortStable&&a.slice(0),a.sort(z),j){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return i=null,a},e=db.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=db.selectors={cacheLength:50,createPseudo:fb,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ab,bb),a[3]=(a[4]||a[5]||"").replace(ab,bb),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||db.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&db.error(a[0]),a},PSEUDO:function(a){var b,c=!a[5]&&a[2];return V.CHILD.test(a[0])?null:(a[3]&&void 0!==a[4]?a[2]=a[4]:c&&T.test(c)&&(b=ob(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ab,bb).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=w[a+" "];return b||(b=new RegExp("(^|"+K+")"+a+"("+K+"|$)"))&&w(a,function(a){return b.test("string"==typeof a.className&&a.className||typeof a.getAttribute!==A&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=db.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),t=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&t){k=q[s]||(q[s]={}),j=k[a]||[],n=j[0]===u&&j[1],m=j[0]===u&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[u,n,m];break}}else if(t&&(j=(b[s]||(b[s]={}))[a])&&j[0]===u)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(t&&((l[s]||(l[s]={}))[a]=[u,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||db.error("unsupported pseudo: "+a);return e[s]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?fb(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=I.call(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:fb(function(a){var b=[],c=[],d=g(a.replace(P,"$1"));return d[s]?fb(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),!c.pop()}}),has:fb(function(a){return function(b){return db(a,b).length>0}}),contains:fb(function(a){return function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:fb(function(a){return U.test(a||"")||db.error("unsupported lang: "+a),a=a.replace(ab,bb).toLowerCase(),function(b){var c;do if(c=n?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===m},focus:function(a){return a===l.activeElement&&(!l.hasFocus||l.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return X.test(a.nodeName)},input:function(a){return W.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:lb(function(){return[0]}),last:lb(function(a,b){return[b-1]}),eq:lb(function(a,b,c){return[0>c?c+b:c]}),even:lb(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:lb(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:lb(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:lb(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=jb(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=kb(b);function nb(){}nb.prototype=d.filters=d.pseudos,d.setFilters=new nb;function ob(a,b){var c,e,f,g,h,i,j,k=x[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=Q.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=R.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(P," ")}),h=h.slice(c.length));for(g in d.filter)!(e=V[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?db.error(a):x(a,i).slice(0)}function pb(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function qb(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=v++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[u,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[s]||(b[s]={}),(h=i[d])&&h[0]===u&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function rb(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function sb(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function tb(a,b,c,d,e,f){return d&&!d[s]&&(d=tb(d)),e&&!e[s]&&(e=tb(e,f)),fb(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||wb(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:sb(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=sb(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?I.call(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=sb(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):G.apply(g,r)})}function ub(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],i=g||d.relative[" "],j=g?1:0,k=qb(function(a){return a===b},i,!0),l=qb(function(a){return I.call(b,a)>-1},i,!0),m=[function(a,c,d){return!g&&(d||c!==h)||((b=c).nodeType?k(a,c,d):l(a,c,d))}];f>j;j++)if(c=d.relative[a[j].type])m=[qb(rb(m),c)];else{if(c=d.filter[a[j].type].apply(null,a[j].matches),c[s]){for(e=++j;f>e;e++)if(d.relative[a[e].type])break;return tb(j>1&&rb(m),j>1&&pb(a.slice(0,j-1).concat({value:" "===a[j-2].type?"*":""})).replace(P,"$1"),c,e>j&&ub(a.slice(j,e)),f>e&&ub(a=a.slice(e)),f>e&&pb(a))}m.push(c)}return rb(m)}function vb(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,i,j,k){var m,n,o,p=0,q="0",r=f&&[],s=[],t=h,v=f||e&&d.find.TAG("*",k),w=u+=null==t?1:Math.random()||.1,x=v.length;for(k&&(h=g!==l&&g);q!==x&&null!=(m=v[q]);q++){if(e&&m){n=0;while(o=a[n++])if(o(m,g,i)){j.push(m);break}k&&(u=w)}c&&((m=!o&&m)&&p--,f&&r.push(m))}if(p+=q,c&&q!==p){n=0;while(o=b[n++])o(r,s,g,i);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=E.call(j));s=sb(s)}G.apply(j,s),k&&!f&&s.length>0&&p+b.length>1&&db.uniqueSort(j)}return k&&(u=w,h=t),r};return c?fb(f):f}g=db.compile=function(a,b){var c,d=[],e=[],f=y[a+" "];if(!f){b||(b=ob(a)),c=b.length;while(c--)f=ub(b[c]),f[s]?d.push(f):e.push(f);f=y(a,vb(e,d))}return f};function wb(a,b,c){for(var d=0,e=b.length;e>d;d++)db(a,b[d],c);return c}function xb(a,b,e,f){var h,i,j,k,l,m=ob(a);if(!f&&1===m.length){if(i=m[0]=m[0].slice(0),i.length>2&&"ID"===(j=i[0]).type&&c.getById&&9===b.nodeType&&n&&d.relative[i[1].type]){if(b=(d.find.ID(j.matches[0].replace(ab,bb),b)||[])[0],!b)return e;a=a.slice(i.shift().value.length)}h=V.needsContext.test(a)?0:i.length;while(h--){if(j=i[h],d.relative[k=j.type])break;if((l=d.find[k])&&(f=l(j.matches[0].replace(ab,bb),$.test(i[0].type)&&mb(b.parentNode)||b))){if(i.splice(h,1),a=f.length&&pb(i),!a)return G.apply(e,f),e;break}}}return g(a,m)(f,b,!n,e,$.test(a)&&mb(b.parentNode)||b),e}return c.sortStable=s.split("").sort(z).join("")===s,c.detectDuplicates=!!j,k(),c.sortDetached=gb(function(a){return 1&a.compareDocumentPosition(l.createElement("div"))}),gb(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||hb("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&gb(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||hb("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),gb(function(a){return null==a.getAttribute("disabled")})||hb(J,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),db}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=n.expr.match.needsContext,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^.[^:#\[\.,]*$/;function x(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(w.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return n.inArray(a,b)>=0!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=[],d=this,e=d.length;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;e>b;b++)if(n.contains(d[b],this))return!0}));for(b=0;e>b;b++)n.find(a,d[b],c);return c=this.pushStack(e>1?n.unique(c):c),c.selector=this.selector?this.selector+" "+a:a,c},filter:function(a){return this.pushStack(x(this,a||[],!1))},not:function(a){return this.pushStack(x(this,a||[],!0))},is:function(a){return!!x(this,"string"==typeof a&&u.test(a)?n(a):a||[],!1).length}});var y,z=a.document,A=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,B=n.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a.charAt(0)&&">"===a.charAt(a.length-1)&&a.length>=3?[null,a,null]:A.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||y).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:z,!0)),v.test(c[1])&&n.isPlainObject(b))for(c in b)n.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}if(d=z.getElementById(c[2]),d&&d.parentNode){if(d.id!==c[2])return y.find(a);this.length=1,this[0]=d}return this.context=z,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof y.ready?y.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};B.prototype=n.fn,y=n(z);var C=/^(?:parents|prev(?:Until|All))/,D={children:!0,contents:!0,next:!0,prev:!0};n.extend({dir:function(a,b,c){var d=[],e=a[b];while(e&&9!==e.nodeType&&(void 0===c||1!==e.nodeType||!n(e).is(c)))1===e.nodeType&&d.push(e),e=e[b];return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),n.fn.extend({has:function(a){var b,c=n(a,this),d=c.length;return this.filter(function(){for(b=0;d>b;b++)if(n.contains(this,c[b]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=u.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.unique(f):f)},index:function(a){return a?"string"==typeof a?n.inArray(this[0],n(a)):n.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.unique(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function E(a,b){do a=a[b];while(a&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return n.dir(a,"parentNode")},parentsUntil:function(a,b,c){return n.dir(a,"parentNode",c)},next:function(a){return E(a,"nextSibling")},prev:function(a){return E(a,"previousSibling")},nextAll:function(a){return n.dir(a,"nextSibling")},prevAll:function(a){return n.dir(a,"previousSibling")},nextUntil:function(a,b,c){return n.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return n.dir(a,"previousSibling",c)},siblings:function(a){return n.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return n.sibling(a.firstChild)},contents:function(a){return n.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(D[a]||(e=n.unique(e)),C.test(a)&&(e=e.reverse())),this.pushStack(e)}});var F=/\S+/g,G={};function H(a){var b=G[a]={};return n.each(a.match(F)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?G[a]||H(a):n.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(c=a.memory&&l,d=!0,f=g||0,g=0,e=h.length,b=!0;h&&e>f;f++)if(h[f].apply(l[0],l[1])===!1&&a.stopOnFalse){c=!1;break}b=!1,h&&(i?i.length&&j(i.shift()):c?h=[]:k.disable())},k={add:function(){if(h){var d=h.length;!function f(b){n.each(b,function(b,c){var d=n.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&f(c)})}(arguments),b?e=h.length:c&&(g=d,j(c))}return this},remove:function(){return h&&n.each(arguments,function(a,c){var d;while((d=n.inArray(c,h,d))>-1)h.splice(d,1),b&&(e>=d&&e--,f>=d&&f--)}),this},has:function(a){return a?n.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],e=0,this},disable:function(){return h=i=c=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,c||k.disable(),this},locked:function(){return!i},fireWith:function(a,c){return!h||d&&!i||(c=c||[],c=[a,c.slice?c.slice():c],b?i.push(c):j(c)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!d}};return k},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&n.isFunction(a.promise)?e:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var I;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){if(a===!0?!--n.readyWait:!n.isReady){if(!z.body)return setTimeout(n.ready);n.isReady=!0,a!==!0&&--n.readyWait>0||(I.resolveWith(z,[n]),n.fn.trigger&&n(z).trigger("ready").off("ready"))}}});function J(){z.addEventListener?(z.removeEventListener("DOMContentLoaded",K,!1),a.removeEventListener("load",K,!1)):(z.detachEvent("onreadystatechange",K),a.detachEvent("onload",K))}function K(){(z.addEventListener||"load"===event.type||"complete"===z.readyState)&&(J(),n.ready())}n.ready.promise=function(b){if(!I)if(I=n.Deferred(),"complete"===z.readyState)setTimeout(n.ready);else if(z.addEventListener)z.addEventListener("DOMContentLoaded",K,!1),a.addEventListener("load",K,!1);else{z.attachEvent("onreadystatechange",K),a.attachEvent("onload",K);var c=!1;try{c=null==a.frameElement&&z.documentElement}catch(d){}c&&c.doScroll&&!function e(){if(!n.isReady){try{c.doScroll("left")}catch(a){return setTimeout(e,50)}J(),n.ready()}}()}return I.promise(b)};var L="undefined",M;for(M in n(l))break;l.ownLast="0"!==M,l.inlineBlockNeedsLayout=!1,n(function(){var a,b,c=z.getElementsByTagName("body")[0];c&&(a=z.createElement("div"),a.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",b=z.createElement("div"),c.appendChild(a).appendChild(b),typeof b.style.zoom!==L&&(b.style.cssText="border:0;margin:0;width:1px;padding:1px;display:inline;zoom:1",(l.inlineBlockNeedsLayout=3===b.offsetWidth)&&(c.style.zoom=1)),c.removeChild(a),a=b=null)}),function(){var a=z.createElement("div");if(null==l.deleteExpando){l.deleteExpando=!0;try{delete a.test}catch(b){l.deleteExpando=!1}}a=null}(),n.acceptData=function(a){var b=n.noData[(a.nodeName+" ").toLowerCase()],c=+a.nodeType||1;return 1!==c&&9!==c?!1:!b||b!==!0&&a.getAttribute("classid")===b};var N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){if(void 0===c&&1===a.nodeType){var d="data-"+b.replace(O,"-$1").toLowerCase();if(c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}n.data(a,b,c)}else c=void 0}return c}function Q(a){var b;for(b in a)if(("data"!==b||!n.isEmptyObject(a[b]))&&"toJSON"!==b)return!1;return!0}function R(a,b,d,e){if(n.acceptData(a)){var f,g,h=n.expando,i=a.nodeType,j=i?n.cache:a,k=i?a[h]:a[h]&&h;if(k&&j[k]&&(e||j[k].data)||void 0!==d||"string"!=typeof b)return k||(k=i?a[h]=c.pop()||n.guid++:h),j[k]||(j[k]=i?{}:{toJSON:n.noop}),("object"==typeof b||"function"==typeof b)&&(e?j[k]=n.extend(j[k],b):j[k].data=n.extend(j[k].data,b)),g=j[k],e||(g.data||(g.data={}),g=g.data),void 0!==d&&(g[n.camelCase(b)]=d),"string"==typeof b?(f=g[b],null==f&&(f=g[n.camelCase(b)])):f=g,f}}function S(a,b,c){if(n.acceptData(a)){var d,e,f=a.nodeType,g=f?n.cache:a,h=f?a[n.expando]:n.expando;if(g[h]){if(b&&(d=c?g[h]:g[h].data)){n.isArray(b)?b=b.concat(n.map(b,n.camelCase)):b in d?b=[b]:(b=n.camelCase(b),b=b in d?[b]:b.split(" ")),e=b.length;while(e--)delete d[b[e]];if(c?!Q(d):!n.isEmptyObject(d))return}(c||(delete g[h].data,Q(g[h])))&&(f?n.cleanData([a],!0):l.deleteExpando||g!=g.window?delete g[h]:g[h]=null)}}}n.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(a){return a=a.nodeType?n.cache[a[n.expando]]:a[n.expando],!!a&&!Q(a)},data:function(a,b,c){return R(a,b,c)},removeData:function(a,b){return S(a,b)},_data:function(a,b,c){return R(a,b,c,!0)},_removeData:function(a,b){return S(a,b,!0)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=n.data(f),1===f.nodeType&&!n._data(f,"parsedAttrs"))){c=g.length;while(c--)d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d]));n._data(f,"parsedAttrs",!0)}return e}return"object"==typeof a?this.each(function(){n.data(this,a)}):arguments.length>1?this.each(function(){n.data(this,a,b)}):f?P(f,a,n.data(f,a)):void 0},removeData:function(a){return this.each(function(){n.removeData(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=n._data(a,b),c&&(!d||n.isArray(c)?d=n._data(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return n._data(a,c)||n._data(a,c,{empty:n.Callbacks("once memory").add(function(){n._removeData(a,b+"queue"),n._removeData(a,c)})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=n._data(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var T=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,U=["Top","Right","Bottom","Left"],V=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)},W=n.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)n.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},X=/^(?:checkbox|radio)$/i;!function(){var a=z.createDocumentFragment(),b=z.createElement("div"),c=z.createElement("input");if(b.setAttribute("className","t"),b.innerHTML="  <link/><table></table><a href='/a'>a</a>",l.leadingWhitespace=3===b.firstChild.nodeType,l.tbody=!b.getElementsByTagName("tbody").length,l.htmlSerialize=!!b.getElementsByTagName("link").length,l.html5Clone="<:nav></:nav>"!==z.createElement("nav").cloneNode(!0).outerHTML,c.type="checkbox",c.checked=!0,a.appendChild(c),l.appendChecked=c.checked,b.innerHTML="<textarea>x</textarea>",l.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue,a.appendChild(b),b.innerHTML="<input type='radio' checked='checked' name='t'/>",l.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,l.noCloneEvent=!0,b.attachEvent&&(b.attachEvent("onclick",function(){l.noCloneEvent=!1}),b.cloneNode(!0).click()),null==l.deleteExpando){l.deleteExpando=!0;try{delete b.test}catch(d){l.deleteExpando=!1}}a=b=c=null}(),function(){var b,c,d=z.createElement("div");for(b in{submit:!0,change:!0,focusin:!0})c="on"+b,(l[b+"Bubbles"]=c in a)||(d.setAttribute(c,"t"),l[b+"Bubbles"]=d.attributes[c].expando===!1);d=null}();var Y=/^(?:input|select|textarea)$/i,Z=/^key/,$=/^(?:mouse|contextmenu)|click/,_=/^(?:focusinfocus|focusoutblur)$/,ab=/^([^.]*)(?:\.(.+)|)$/;function bb(){return!0}function cb(){return!1}function db(){try{return z.activeElement}catch(a){}}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=n._data(a);if(r){c.handler&&(i=c,c=i.handler,e=i.selector),c.guid||(c.guid=n.guid++),(g=r.events)||(g=r.events={}),(k=r.handle)||(k=r.handle=function(a){return typeof n===L||a&&n.event.triggered===a.type?void 0:n.event.dispatch.apply(k.elem,arguments)},k.elem=a),b=(b||"").match(F)||[""],h=b.length;while(h--)f=ab.exec(b[h])||[],o=q=f[1],p=(f[2]||"").split(".").sort(),o&&(j=n.event.special[o]||{},o=(e?j.delegateType:j.bindType)||o,j=n.event.special[o]||{},l=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},i),(m=g[o])||(m=g[o]=[],m.delegateCount=0,j.setup&&j.setup.call(a,d,p,k)!==!1||(a.addEventListener?a.addEventListener(o,k,!1):a.attachEvent&&a.attachEvent("on"+o,k))),j.add&&(j.add.call(a,l),l.handler.guid||(l.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,l):m.push(l),n.event.global[o]=!0);a=null}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=n.hasData(a)&&n._data(a);if(r&&(k=r.events)){b=(b||"").match(F)||[""],j=b.length;while(j--)if(h=ab.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=k[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),i=f=m.length;while(f--)g=m[f],!e&&q!==g.origType||c&&c.guid!==g.guid||h&&!h.test(g.namespace)||d&&d!==g.selector&&("**"!==d||!g.selector)||(m.splice(f,1),g.selector&&m.delegateCount--,l.remove&&l.remove.call(a,g));i&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete k[o])}else for(o in k)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(k)&&(delete r.handle,n._removeData(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,l,m,o=[d||z],p=j.call(b,"type")?b.type:b,q=j.call(b,"namespace")?b.namespace.split("."):[];if(h=l=d=d||z,3!==d.nodeType&&8!==d.nodeType&&!_.test(p+n.event.triggered)&&(p.indexOf(".")>=0&&(q=p.split("."),p=q.shift(),q.sort()),g=p.indexOf(":")<0&&"on"+p,b=b[n.expando]?b:new n.Event(p,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=q.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:n.makeArray(c,[b]),k=n.event.special[p]||{},e||!k.trigger||k.trigger.apply(d,c)!==!1)){if(!e&&!k.noBubble&&!n.isWindow(d)){for(i=k.delegateType||p,_.test(i+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),l=h;l===(d.ownerDocument||z)&&o.push(l.defaultView||l.parentWindow||a)}m=0;while((h=o[m++])&&!b.isPropagationStopped())b.type=m>1?i:k.bindType||p,f=(n._data(h,"events")||{})[b.type]&&n._data(h,"handle"),f&&f.apply(h,c),f=g&&h[g],f&&f.apply&&n.acceptData(h)&&(b.result=f.apply(h,c),b.result===!1&&b.preventDefault());if(b.type=p,!e&&!b.isDefaultPrevented()&&(!k._default||k._default.apply(o.pop(),c)===!1)&&n.acceptData(d)&&g&&d[p]&&!n.isWindow(d)){l=d[g],l&&(d[g]=null),n.event.triggered=p;try{d[p]()}catch(r){}n.event.triggered=void 0,l&&(d[g]=l)}return b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(n._data(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,g=0;while((e=f.handlers[g++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(e.namespace))&&(a.handleObj=e,a.data=e.data,c=((n.event.special[e.origType]||{}).handle||e.handler).apply(f.elem,i),void 0!==c&&(a.result=c)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!=this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(e=[],f=0;h>f;f++)d=b[f],c=d.selector+" ",void 0===e[c]&&(e[c]=d.needsContext?n(c,this).index(i)>=0:n.find(c,this,null,[i]).length),e[c]&&e.push(d);e.length&&g.push({elem:i,handlers:e})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},fix:function(a){if(a[n.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=$.test(e)?this.mouseHooks:Z.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new n.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=f.srcElement||z),3===a.target.nodeType&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,g.filter?g.filter(a,f):a},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button,g=b.fromElement;return null==a.pageX&&null!=b.clientX&&(d=a.target.ownerDocument||z,e=d.documentElement,c=d.body,a.pageX=b.clientX+(e&&e.scrollLeft||c&&c.scrollLeft||0)-(e&&e.clientLeft||c&&c.clientLeft||0),a.pageY=b.clientY+(e&&e.scrollTop||c&&c.scrollTop||0)-(e&&e.clientTop||c&&c.clientTop||0)),!a.relatedTarget&&g&&(a.relatedTarget=g===a.target?b.toElement:g),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==db()&&this.focus)try{return this.focus(),!1}catch(a){}},delegateType:"focusin"},blur:{trigger:function(){return this===db()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return n.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=n.extend(new n.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?n.event.trigger(e,null,b):n.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=z.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){var d="on"+b;a.detachEvent&&(typeof a[d]===L&&(a[d]=null),a.detachEvent(d,c))},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&(a.returnValue===!1||a.getPreventDefault&&a.getPreventDefault())?bb:cb):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={isDefaultPrevented:cb,isPropagationStopped:cb,isImmediatePropagationStopped:cb,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=bb,a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=bb,a&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=bb,this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!n.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),l.submitBubbles||(n.event.special.submit={setup:function(){return n.nodeName(this,"form")?!1:void n.event.add(this,"click._submit keypress._submit",function(a){var b=a.target,c=n.nodeName(b,"input")||n.nodeName(b,"button")?b.form:void 0;c&&!n._data(c,"submitBubbles")&&(n.event.add(c,"submit._submit",function(a){a._submit_bubble=!0}),n._data(c,"submitBubbles",!0))})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&n.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){return n.nodeName(this,"form")?!1:void n.event.remove(this,"._submit")}}),l.changeBubbles||(n.event.special.change={setup:function(){return Y.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(n.event.add(this,"propertychange._change",function(a){"checked"===a.originalEvent.propertyName&&(this._just_changed=!0)}),n.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1),n.event.simulate("change",this,a,!0)})),!1):void n.event.add(this,"beforeactivate._change",function(a){var b=a.target;Y.test(b.nodeName)&&!n._data(b,"changeBubbles")&&(n.event.add(b,"change._change",function(a){!this.parentNode||a.isSimulated||a.isTrigger||n.event.simulate("change",this.parentNode,a,!0)}),n._data(b,"changeBubbles",!0))})},handle:function(a){var b=a.target;return this!==b||a.isSimulated||a.isTrigger||"radio"!==b.type&&"checkbox"!==b.type?a.handleObj.handler.apply(this,arguments):void 0},teardown:function(){return n.event.remove(this,"._change"),!Y.test(this.nodeName)}}),l.focusinBubbles||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a),!0)};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=n._data(d,b);e||d.addEventListener(a,c,!0),n._data(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=n._data(d,b)-1;e?n._data(d,b,e):(d.removeEventListener(a,c,!0),n._removeData(d,b))}}}),n.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(f in a)this.on(f,b,c,a[f],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=cb;else if(!d)return this;return 1===e&&(g=d,d=function(a){return n().off(a),g.apply(this,arguments)},d.guid=g.guid||(g.guid=n.guid++)),this.each(function(){n.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=cb),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});function eb(a){var b=fb.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}var fb="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",gb=/ jQuery\d+="(?:null|\d+)"/g,hb=new RegExp("<(?:"+fb+")[\\s/>]","i"),ib=/^\s+/,jb=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,kb=/<([\w:]+)/,lb=/<tbody/i,mb=/<|&#?\w+;/,nb=/<(?:script|style|link)/i,ob=/checked\s*(?:[^=]|=\s*.checked.)/i,pb=/^$|\/(?:java|ecma)script/i,qb=/^true\/(.*)/,rb=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,sb={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:l.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},tb=eb(z),ub=tb.appendChild(z.createElement("div"));sb.optgroup=sb.option,sb.tbody=sb.tfoot=sb.colgroup=sb.caption=sb.thead,sb.th=sb.td;function vb(a,b){var c,d,e=0,f=typeof a.getElementsByTagName!==L?a.getElementsByTagName(b||"*"):typeof a.querySelectorAll!==L?a.querySelectorAll(b||"*"):void 0;if(!f)for(f=[],c=a.childNodes||a;null!=(d=c[e]);e++)!b||n.nodeName(d,b)?f.push(d):n.merge(f,vb(d,b));return void 0===b||b&&n.nodeName(a,b)?n.merge([a],f):f}function wb(a){X.test(a.type)&&(a.defaultChecked=a.checked)}function xb(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function yb(a){return a.type=(null!==n.find.attr(a,"type"))+"/"+a.type,a}function zb(a){var b=qb.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function Ab(a,b){for(var c,d=0;null!=(c=a[d]);d++)n._data(c,"globalEval",!b||n._data(b[d],"globalEval"))}function Bb(a,b){if(1===b.nodeType&&n.hasData(a)){var c,d,e,f=n._data(a),g=n._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;e>d;d++)n.event.add(b,c,h[c][d])}g.data&&(g.data=n.extend({},g.data))}}function Cb(a,b){var c,d,e;if(1===b.nodeType){if(c=b.nodeName.toLowerCase(),!l.noCloneEvent&&b[n.expando]){e=n._data(b);for(d in e.events)n.removeEvent(b,d,e.handle);b.removeAttribute(n.expando)}"script"===c&&b.text!==a.text?(yb(b).text=a.text,zb(b)):"object"===c?(b.parentNode&&(b.outerHTML=a.outerHTML),l.html5Clone&&a.innerHTML&&!n.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):"input"===c&&X.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):"option"===c?b.defaultSelected=b.selected=a.defaultSelected:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}}n.extend({clone:function(a,b,c){var d,e,f,g,h,i=n.contains(a.ownerDocument,a);if(l.html5Clone||n.isXMLDoc(a)||!hb.test("<"+a.nodeName+">")?f=a.cloneNode(!0):(ub.innerHTML=a.outerHTML,ub.removeChild(f=ub.firstChild)),!(l.noCloneEvent&&l.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(d=vb(f),h=vb(a),g=0;null!=(e=h[g]);++g)d[g]&&Cb(e,d[g]);if(b)if(c)for(h=h||vb(a),d=d||vb(f),g=0;null!=(e=h[g]);g++)Bb(e,d[g]);else Bb(a,f);return d=vb(f,"script"),d.length>0&&Ab(d,!i&&vb(a,"script")),d=h=e=null,f},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k,m=a.length,o=eb(b),p=[],q=0;m>q;q++)if(f=a[q],f||0===f)if("object"===n.type(f))n.merge(p,f.nodeType?[f]:f);else if(mb.test(f)){h=h||o.appendChild(b.createElement("div")),i=(kb.exec(f)||["",""])[1].toLowerCase(),k=sb[i]||sb._default,h.innerHTML=k[1]+f.replace(jb,"<$1></$2>")+k[2],e=k[0];while(e--)h=h.lastChild;if(!l.leadingWhitespace&&ib.test(f)&&p.push(b.createTextNode(ib.exec(f)[0])),!l.tbody){f="table"!==i||lb.test(f)?"<table>"!==k[1]||lb.test(f)?0:h:h.firstChild,e=f&&f.childNodes.length;while(e--)n.nodeName(j=f.childNodes[e],"tbody")&&!j.childNodes.length&&f.removeChild(j)}n.merge(p,h.childNodes),h.textContent="";while(h.firstChild)h.removeChild(h.firstChild);h=o.lastChild}else p.push(b.createTextNode(f));h&&o.removeChild(h),l.appendChecked||n.grep(vb(p,"input"),wb),q=0;while(f=p[q++])if((!d||-1===n.inArray(f,d))&&(g=n.contains(f.ownerDocument,f),h=vb(o.appendChild(f),"script"),g&&Ab(h),c)){e=0;while(f=h[e++])pb.test(f.type||"")&&c.push(f)}return h=null,o},cleanData:function(a,b){for(var d,e,f,g,h=0,i=n.expando,j=n.cache,k=l.deleteExpando,m=n.event.special;null!=(d=a[h]);h++)if((b||n.acceptData(d))&&(f=d[i],g=f&&j[f])){if(g.events)for(e in g.events)m[e]?n.event.remove(d,e):n.removeEvent(d,e,g.handle);j[f]&&(delete j[f],k?delete d[i]:typeof d.removeAttribute!==L?d.removeAttribute(i):d[i]=null,c.push(f))}}}),n.fn.extend({text:function(a){return W(this,function(a){return void 0===a?n.text(this):this.empty().append((this[0]&&this[0].ownerDocument||z).createTextNode(a))},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=xb(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=xb(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?n.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||n.cleanData(vb(c)),c.parentNode&&(b&&n.contains(c.ownerDocument,c)&&Ab(vb(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++){1===a.nodeType&&n.cleanData(vb(a,!1));while(a.firstChild)a.removeChild(a.firstChild);a.options&&n.nodeName(a,"select")&&(a.options.length=0)}return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return W(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a)return 1===b.nodeType?b.innerHTML.replace(gb,""):void 0;if(!("string"!=typeof a||nb.test(a)||!l.htmlSerialize&&hb.test(a)||!l.leadingWhitespace&&ib.test(a)||sb[(kb.exec(a)||["",""])[1].toLowerCase()])){a=a.replace(jb,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(vb(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,n.cleanData(vb(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,k=this.length,m=this,o=k-1,p=a[0],q=n.isFunction(p);if(q||k>1&&"string"==typeof p&&!l.checkClone&&ob.test(p))return this.each(function(c){var d=m.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(k&&(i=n.buildFragment(a,this[0].ownerDocument,!1,this),c=i.firstChild,1===i.childNodes.length&&(i=c),c)){for(g=n.map(vb(i,"script"),yb),f=g.length;k>j;j++)d=i,j!==o&&(d=n.clone(d,!0,!0),f&&n.merge(g,vb(d,"script"))),b.call(this[j],d,j);if(f)for(h=g[g.length-1].ownerDocument,n.map(g,zb),j=0;f>j;j++)d=g[j],pb.test(d.type||"")&&!n._data(d,"globalEval")&&n.contains(h,d)&&(d.src?n._evalUrl&&n._evalUrl(d.src):n.globalEval((d.text||d.textContent||d.innerHTML||"").replace(rb,"")));i=c=null}return this}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=0,e=[],g=n(a),h=g.length-1;h>=d;d++)c=d===h?this:this.clone(!0),n(g[d])[b](c),f.apply(e,c.get());return this.pushStack(e)}});var Db,Eb={};function Fb(b,c){var d=n(c.createElement(b)).appendTo(c.body),e=a.getDefaultComputedStyle?a.getDefaultComputedStyle(d[0]).display:n.css(d[0],"display");return d.detach(),e}function Gb(a){var b=z,c=Eb[a];return c||(c=Fb(a,b),"none"!==c&&c||(Db=(Db||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=(Db[0].contentWindow||Db[0].contentDocument).document,b.write(),b.close(),c=Fb(a,b),Db.detach()),Eb[a]=c),c}!function(){var a,b,c=z.createElement("div"),d="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0";c.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",a=c.getElementsByTagName("a")[0],a.style.cssText="float:left;opacity:.5",l.opacity=/^0.5/.test(a.style.opacity),l.cssFloat=!!a.style.cssFloat,c.style.backgroundClip="content-box",c.cloneNode(!0).style.backgroundClip="",l.clearCloneStyle="content-box"===c.style.backgroundClip,a=c=null,l.shrinkWrapBlocks=function(){var a,c,e,f;if(null==b){if(a=z.getElementsByTagName("body")[0],!a)return;f="border:0;width:0;height:0;position:absolute;top:0;left:-9999px",c=z.createElement("div"),e=z.createElement("div"),a.appendChild(c).appendChild(e),b=!1,typeof e.style.zoom!==L&&(e.style.cssText=d+";width:1px;padding:1px;zoom:1",e.innerHTML="<div></div>",e.firstChild.style.width="5px",b=3!==e.offsetWidth),a.removeChild(c),a=c=e=null}return b}}();var Hb=/^margin/,Ib=new RegExp("^("+T+")(?!px)[a-z%]+$","i"),Jb,Kb,Lb=/^(top|right|bottom|left)$/;a.getComputedStyle?(Jb=function(a){return a.ownerDocument.defaultView.getComputedStyle(a,null)},Kb=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Jb(a),g=c?c.getPropertyValue(b)||c[b]:void 0,c&&(""!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),Ib.test(g)&&Hb.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0===g?g:g+""}):z.documentElement.currentStyle&&(Jb=function(a){return a.currentStyle},Kb=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Jb(a),g=c?c[b]:void 0,null==g&&h&&h[b]&&(g=h[b]),Ib.test(g)&&!Lb.test(b)&&(d=h.left,e=a.runtimeStyle,f=e&&e.left,f&&(e.left=a.currentStyle.left),h.left="fontSize"===b?"1em":g,g=h.pixelLeft+"px",h.left=d,f&&(e.left=f)),void 0===g?g:g+""||"auto"});function Mb(a,b){return{get:function(){var c=a();if(null!=c)return c?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d,e,f,g,h=z.createElement("div"),i="border:0;width:0;height:0;position:absolute;top:0;left:-9999px",j="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0";h.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",b=h.getElementsByTagName("a")[0],b.style.cssText="float:left;opacity:.5",l.opacity=/^0.5/.test(b.style.opacity),l.cssFloat=!!b.style.cssFloat,h.style.backgroundClip="content-box",h.cloneNode(!0).style.backgroundClip="",l.clearCloneStyle="content-box"===h.style.backgroundClip,b=h=null,n.extend(l,{reliableHiddenOffsets:function(){if(null!=c)return c;var a,b,d,e=z.createElement("div"),f=z.getElementsByTagName("body")[0];if(f)return e.setAttribute("className","t"),e.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",a=z.createElement("div"),a.style.cssText=i,f.appendChild(a).appendChild(e),e.innerHTML="<table><tr><td></td><td>t</td></tr></table>",b=e.getElementsByTagName("td"),b[0].style.cssText="padding:0;margin:0;border:0;display:none",d=0===b[0].offsetHeight,b[0].style.display="",b[1].style.display="none",c=d&&0===b[0].offsetHeight,f.removeChild(a),e=f=null,c},boxSizing:function(){return null==d&&k(),d},boxSizingReliable:function(){return null==e&&k(),e},pixelPosition:function(){return null==f&&k(),f},reliableMarginRight:function(){var b,c,d,e;if(null==g&&a.getComputedStyle){if(b=z.getElementsByTagName("body")[0],!b)return;c=z.createElement("div"),d=z.createElement("div"),c.style.cssText=i,b.appendChild(c).appendChild(d),e=d.appendChild(z.createElement("div")),e.style.cssText=d.style.cssText=j,e.style.marginRight=e.style.width="0",d.style.width="1px",g=!parseFloat((a.getComputedStyle(e,null)||{}).marginRight),b.removeChild(c)}return g}});function k(){var b,c,h=z.getElementsByTagName("body")[0];h&&(b=z.createElement("div"),c=z.createElement("div"),b.style.cssText=i,h.appendChild(b).appendChild(c),c.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;display:block;padding:1px;border:1px;width:4px;margin-top:1%;top:1%",n.swap(h,null!=h.style.zoom?{zoom:1}:{},function(){d=4===c.offsetWidth}),e=!0,f=!1,g=!0,a.getComputedStyle&&(f="1%"!==(a.getComputedStyle(c,null)||{}).top,e="4px"===(a.getComputedStyle(c,null)||{width:"4px"}).width),h.removeChild(b),c=h=null)}}(),n.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var Nb=/alpha\([^)]*\)/i,Ob=/opacity\s*=\s*([^)]*)/,Pb=/^(none|table(?!-c[ea]).+)/,Qb=new RegExp("^("+T+")(.*)$","i"),Rb=new RegExp("^([+-])=("+T+")","i"),Sb={position:"absolute",visibility:"hidden",display:"block"},Tb={letterSpacing:0,fontWeight:400},Ub=["Webkit","O","Moz","ms"];function Vb(a,b){if(b in a)return b;var c=b.charAt(0).toUpperCase()+b.slice(1),d=b,e=Ub.length;while(e--)if(b=Ub[e]+c,b in a)return b;return d}function Wb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=n._data(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&V(d)&&(f[g]=n._data(d,"olddisplay",Gb(d.nodeName)))):f[g]||(e=V(d),(c&&"none"!==c||!e)&&n._data(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}function Xb(a,b,c){var d=Qb.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Yb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+U[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+U[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+U[f]+"Width",!0,e))):(g+=n.css(a,"padding"+U[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+U[f]+"Width",!0,e)));return g}function Zb(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Jb(a),g=l.boxSizing()&&"border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=Kb(a,b,f),(0>e||null==e)&&(e=a.style[b]),Ib.test(e))return e;d=g&&(l.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Yb(a,b,c||(g?"border":"content"),d,f)+"px"}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Kb(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":l.cssFloat?"cssFloat":"styleFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;if(b=n.cssProps[h]||(n.cssProps[h]=Vb(i,h)),g=n.cssHooks[b]||n.cssHooks[h],void 0===c)return g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b];if(f=typeof c,"string"===f&&(e=Rb.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(n.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||n.cssNumber[h]||(c+="px"),l.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),!(g&&"set"in g&&void 0===(c=g.set(a,c,d)))))try{i[b]="",i[b]=c}catch(j){}}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Vb(a.style,h)),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(f=g.get(a,!0,c)),void 0===f&&(f=Kb(a,b,d)),"normal"===f&&b in Tb&&(f=Tb[b]),""===c||c?(e=parseFloat(f),c===!0||n.isNumeric(e)?e||0:f):f}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?0===a.offsetWidth&&Pb.test(n.css(a,"display"))?n.swap(a,Sb,function(){return Zb(a,b,d)}):Zb(a,b,d):void 0},set:function(a,c,d){var e=d&&Jb(a);return Xb(a,c,d?Yb(a,b,d,l.boxSizing()&&"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),l.opacity||(n.cssHooks.opacity={get:function(a,b){return Ob.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=n.isNumeric(b)?"alpha(opacity="+100*b+")":"",f=d&&d.filter||c.filter||"";c.zoom=1,(b>=1||""===b)&&""===n.trim(f.replace(Nb,""))&&c.removeAttribute&&(c.removeAttribute("filter"),""===b||d&&!d.filter)||(c.filter=Nb.test(f)?f.replace(Nb,e):f+" "+e)}}),n.cssHooks.marginRight=Mb(l.reliableMarginRight,function(a,b){return b?n.swap(a,{display:"inline-block"},Kb,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+U[d]+b]=f[d]||f[d-2]||f[0];return e}},Hb.test(a)||(n.cssHooks[a+b].set=Xb)}),n.fn.extend({css:function(a,b){return W(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=Jb(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return Wb(this,!0)},hide:function(){return Wb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){V(this)?n(this).show():n(this).hide()})}});function $b(a,b,c,d,e){return new $b.prototype.init(a,b,c,d,e)}n.Tween=$b,$b.prototype={constructor:$b,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=$b.propHooks[this.prop];return a&&a.get?a.get(this):$b.propHooks._default.get(this)},run:function(a){var b,c=$b.propHooks[this.prop];return this.pos=b=this.options.duration?n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):$b.propHooks._default.set(this),this}},$b.prototype.init.prototype=$b.prototype,$b.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[n.cssProps[a.prop]]||n.cssHooks[a.prop])?n.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},$b.propHooks.scrollTop=$b.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},n.fx=$b.prototype.init,n.fx.step={};var _b,ac,bc=/^(?:toggle|show|hide)$/,cc=new RegExp("^(?:([+-])=|)("+T+")([a-z%]*)$","i"),dc=/queueHooks$/,ec=[jc],fc={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=cc.exec(b),f=e&&e[3]||(n.cssNumber[a]?"":"px"),g=(n.cssNumber[a]||"px"!==f&&+d)&&cc.exec(n.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,n.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function gc(){return setTimeout(function(){_b=void 0}),_b=n.now()}function hc(a,b){var c,d={height:a},e=0;for(b=b?1:0;4>e;e+=2-b)c=U[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function ic(a,b,c){for(var d,e=(fc[b]||[]).concat(fc["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function jc(a,b,c){var d,e,f,g,h,i,j,k,m=this,o={},p=a.style,q=a.nodeType&&V(a),r=n._data(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,m.always(function(){m.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[p.overflow,p.overflowX,p.overflowY],j=n.css(a,"display"),k=Gb(a.nodeName),"none"===j&&(j=k),"inline"===j&&"none"===n.css(a,"float")&&(l.inlineBlockNeedsLayout&&"inline"!==k?p.zoom=1:p.display="inline-block")),c.overflow&&(p.overflow="hidden",l.shrinkWrapBlocks()||m.always(function(){p.overflow=c.overflow[0],p.overflowX=c.overflow[1],p.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],bc.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(q?"hide":"show")){if("show"!==e||!r||void 0===r[d])continue;q=!0}o[d]=r&&r[d]||n.style(a,d)}if(!n.isEmptyObject(o)){r?"hidden"in r&&(q=r.hidden):r=n._data(a,"fxshow",{}),f&&(r.hidden=!q),q?n(a).show():m.done(function(){n(a).hide()}),m.done(function(){var b;n._removeData(a,"fxshow");for(b in o)n.style(a,b,o[b])});for(d in o)g=ic(q?r[d]:0,d,m),d in r||(r[d]=g.start,q&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function kc(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function lc(a,b,c){var d,e,f=0,g=ec.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=_b||gc(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:_b||gc(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(kc(k,j.opts.specialEasing);g>f;f++)if(d=ec[f].call(j,a,k,j.opts))return d;return n.map(k,ic,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(lc,{tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],fc[c]=fc[c]||[],fc[c].unshift(b)},prefilter:function(a,b){b?ec.unshift(a):ec.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(V).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=lc(this,n.extend({},a),f);(e||n._data(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=n._data(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&dc.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=n._data(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(hc(b,!0),a,d,e)}}),n.each({slideDown:hc("show"),slideUp:hc("hide"),slideToggle:hc("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=n.timers,c=0;for(_b=n.now();c<b.length;c++)a=b[c],a()||b[c]!==a||b.splice(c--,1);b.length||n.fx.stop(),_b=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){ac||(ac=setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){clearInterval(ac),ac=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(a,b){return a=n.fx?n.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a,b,c,d,e=z.createElement("div");e.setAttribute("className","t"),e.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",a=e.getElementsByTagName("a")[0],c=z.createElement("select"),d=c.appendChild(z.createElement("option")),b=e.getElementsByTagName("input")[0],a.style.cssText="top:1px",l.getSetAttribute="t"!==e.className,l.style=/top/.test(a.getAttribute("style")),l.hrefNormalized="/a"===a.getAttribute("href"),l.checkOn=!!b.value,l.optSelected=d.selected,l.enctype=!!z.createElement("form").enctype,c.disabled=!0,l.optDisabled=!d.disabled,b=z.createElement("input"),b.setAttribute("value",""),l.input=""===b.getAttribute("value"),b.value="t",b.setAttribute("type","radio"),l.radioValue="t"===b.value,a=b=c=d=e=null}();var mc=/\r/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(mc,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.text(a)}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(l.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)if(d=e[g],n.inArray(n.valHooks.option.get(d),f)>=0)try{d.selected=c=!0}catch(h){d.scrollHeight}else d.selected=!1;return c||(a.selectedIndex=-1),e}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>=0:void 0}},l.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var nc,oc,pc=n.expr.attrHandle,qc=/^(?:checked|selected)$/i,rc=l.getSetAttribute,sc=l.input;n.fn.extend({attr:function(a,b){return W(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===L?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),d=n.attrHooks[b]||(n.expr.match.bool.test(b)?oc:nc)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=n.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void n.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(F);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)?sc&&rc||!qc.test(c)?a[d]=!1:a[n.camelCase("default-"+c)]=a[d]=!1:n.attr(a,c,""),a.removeAttribute(rc?c:d)},attrHooks:{type:{set:function(a,b){if(!l.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),oc={set:function(a,b,c){return b===!1?n.removeAttr(a,c):sc&&rc||!qc.test(c)?a.setAttribute(!rc&&n.propFix[c]||c,c):a[n.camelCase("default-"+c)]=a[c]=!0,c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=pc[b]||n.find.attr;pc[b]=sc&&rc||!qc.test(b)?function(a,b,d){var e,f;return d||(f=pc[b],pc[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,pc[b]=f),e}:function(a,b,c){return c?void 0:a[n.camelCase("default-"+b)]?b.toLowerCase():null}}),sc&&rc||(n.attrHooks.value={set:function(a,b,c){return n.nodeName(a,"input")?void(a.defaultValue=b):nc&&nc.set(a,b,c)}}),rc||(nc={set:function(a,b,c){var d=a.getAttributeNode(c);return d||a.setAttributeNode(d=a.ownerDocument.createAttribute(c)),d.value=b+="","value"===c||b===a.getAttribute(c)?b:void 0}},pc.id=pc.name=pc.coords=function(a,b,c){var d;return c?void 0:(d=a.getAttributeNode(b))&&""!==d.value?d.value:null},n.valHooks.button={get:function(a,b){var c=a.getAttributeNode(b);return c&&c.specified?c.value:void 0},set:nc.set},n.attrHooks.contenteditable={set:function(a,b,c){nc.set(a,""===b?!1:b,c)}},n.each(["width","height"],function(a,b){n.attrHooks[b]={set:function(a,c){return""===c?(a.setAttribute(b,"auto"),c):void 0}}})),l.style||(n.attrHooks.style={get:function(a){return a.style.cssText||void 0},set:function(a,b){return a.style.cssText=b+""}});var tc=/^(?:input|select|textarea|button|object)$/i,uc=/^(?:a|area)$/i;n.fn.extend({prop:function(a,b){return W(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return a=n.propFix[a]||a,this.each(function(){try{this[a]=void 0,delete this[a]}catch(b){}})}}),n.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!n.isXMLDoc(a),f&&(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=n.find.attr(a,"tabindex");return b?parseInt(b,10):tc.test(a.nodeName)||uc.test(a.nodeName)&&a.href?0:-1}}}}),l.hrefNormalized||n.each(["href","src"],function(a,b){n.propHooks[b]={get:function(a){return a.getAttribute(b,4)}}}),l.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this}),l.enctype||(n.propFix.enctype="encoding");var vc=/[\t\r\n\f]/g;n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j="string"==typeof a&&a;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(F)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(vc," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=n.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j=0===arguments.length||"string"==typeof a&&a;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(F)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(vc," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?n.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(n.isFunction(a)?function(c){n(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=n(this),f=a.match(F)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===L||"boolean"===c)&&(this.className&&n._data(this,"__className__",this.className),this.className=this.className||a===!1?"":n._data(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(vc," ").indexOf(b)>=0)return!0;return!1}}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var wc=n.now(),xc=/\?/,yc=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;n.parseJSON=function(b){if(a.JSON&&a.JSON.parse)return a.JSON.parse(b+"");var c,d=null,e=n.trim(b+"");return e&&!n.trim(e.replace(yc,function(a,b,e,f){return c&&b&&(d=0),0===d?a:(c=e||b,d+=!f-!e,"")}))?Function("return "+e)():n.error("Invalid JSON: "+b)},n.parseXML=function(b){var c,d;if(!b||"string"!=typeof b)return null;try{a.DOMParser?(d=new DOMParser,c=d.parseFromString(b,"text/xml")):(c=new ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b))}catch(e){c=void 0}return c&&c.documentElement&&!c.getElementsByTagName("parsererror").length||n.error("Invalid XML: "+b),c};var zc,Ac,Bc=/#.*$/,Cc=/([?&])_=[^&]*/,Dc=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Ec=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Fc=/^(?:GET|HEAD)$/,Gc=/^\/\//,Hc=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Ic={},Jc={},Kc="*/".concat("*");try{Ac=location.href}catch(Lc){Ac=z.createElement("a"),Ac.href="",Ac=Ac.href}zc=Hc.exec(Ac.toLowerCase())||[];function Mc(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(F)||[];if(n.isFunction(c))while(d=f[e++])"+"===d.charAt(0)?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Nc(a,b,c,d){var e={},f=a===Jc;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Oc(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(d in b)void 0!==b[d]&&((e[d]?a:c||(c={}))[d]=b[d]);return c&&n.extend(!0,a,c),a}function Pc(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===e&&(e=a.mimeType||b.getResponseHeader("Content-Type"));if(e)for(g in h)if(h[g]&&h[g].test(e)){i.unshift(g);break}if(i[0]in c)f=i[0];else{for(g in c){if(!i[0]||a.converters[g+" "+i[0]]){f=g;break}d||(d=g)}f=f||d}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Qc(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Ac,type:"GET",isLocal:Ec.test(zc[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Kc,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Oc(Oc(a,n.ajaxSettings),b):Oc(n.ajaxSettings,a)},ajaxPrefilter:Mc(Ic),ajaxTransport:Mc(Jc),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=n.ajaxSetup({},b),l=k.context||k,m=k.context&&(l.nodeType||l.jquery)?n(l):n.event,o=n.Deferred(),p=n.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!j){j={};while(b=Dc.exec(f))j[b[1].toLowerCase()]=b[2]}b=j[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?f:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return i&&i.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||Ac)+"").replace(Bc,"").replace(Gc,zc[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=n.trim(k.dataType||"*").toLowerCase().match(F)||[""],null==k.crossDomain&&(c=Hc.exec(k.url.toLowerCase()),k.crossDomain=!(!c||c[1]===zc[1]&&c[2]===zc[2]&&(c[3]||("http:"===c[1]?"80":"443"))===(zc[3]||("http:"===zc[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=n.param(k.data,k.traditional)),Nc(Ic,k,b,v),2===t)return v;h=k.global,h&&0===n.active++&&n.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!Fc.test(k.type),e=k.url,k.hasContent||(k.data&&(e=k.url+=(xc.test(e)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=Cc.test(e)?e.replace(Cc,"$1_="+wc++):e+(xc.test(e)?"&":"?")+"_="+wc++)),k.ifModified&&(n.lastModified[e]&&v.setRequestHeader("If-Modified-Since",n.lastModified[e]),n.etag[e]&&v.setRequestHeader("If-None-Match",n.etag[e])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+Kc+"; q=0.01":""):k.accepts["*"]);for(d in k.headers)v.setRequestHeader(d,k.headers[d]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(d in{success:1,error:1,complete:1})v[d](k[d]);if(i=Nc(Jc,k,b,v)){v.readyState=1,h&&m.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,i.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,c,d){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),i=void 0,f=d||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,c&&(u=Pc(k,v,c)),u=Qc(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(n.lastModified[e]=w),w=v.getResponseHeader("etag"),w&&(n.etag[e]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,h&&m.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),h&&(m.trigger("ajaxComplete",[v,k]),--n.active||n.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){if(n.isFunction(a))return this.each(function(b){n(this).wrapAll(a.call(this,b))});if(this[0]){var b=n(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&1===a.firstChild.nodeType)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return this.each(n.isFunction(a)?function(b){n(this).wrapInner(a.call(this,b))}:function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0||!l.reliableHiddenOffsets()&&"none"===(a.style&&a.style.display||n.css(a,"display"))},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var Rc=/%20/g,Sc=/\[\]$/,Tc=/\r?\n/g,Uc=/^(?:submit|button|image|reset|file)$/i,Vc=/^(?:input|select|textarea|keygen)/i;function Wc(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||Sc.test(a)?d(a,e):Wc(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Wc(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Wc(c,a[c],b,e);return d.join("&").replace(Rc,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&Vc.test(this.nodeName)&&!Uc.test(a)&&(this.checked||!X.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(Tc,"\r\n")}}):{name:b.name,value:c.replace(Tc,"\r\n")}}).get()}}),n.ajaxSettings.xhr=void 0!==a.ActiveXObject?function(){return!this.isLocal&&/^(get|post|head|put|delete|options)$/i.test(this.type)&&$c()||_c()}:$c;var Xc=0,Yc={},Zc=n.ajaxSettings.xhr();a.ActiveXObject&&n(a).on("unload",function(){for(var a in Yc)Yc[a](void 0,!0)}),l.cors=!!Zc&&"withCredentials"in Zc,Zc=l.ajax=!!Zc,Zc&&n.ajaxTransport(function(a){if(!a.crossDomain||l.cors){var b;return{send:function(c,d){var e,f=a.xhr(),g=++Xc;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)void 0!==c[e]&&f.setRequestHeader(e,c[e]+"");f.send(a.hasContent&&a.data||null),b=function(c,e){var h,i,j;if(b&&(e||4===f.readyState))if(delete Yc[g],b=void 0,f.onreadystatechange=n.noop,e)4!==f.readyState&&f.abort();else{j={},h=f.status,"string"==typeof f.responseText&&(j.text=f.responseText);try{i=f.statusText}catch(k){i=""}h||!a.isLocal||a.crossDomain?1223===h&&(h=204):h=j.text?200:404}j&&d(h,i,j,f.getAllResponseHeaders())},a.async?4===f.readyState?setTimeout(b):f.onreadystatechange=Yc[g]=b:b()},abort:function(){b&&b(void 0,!0)}}}});function $c(){try{return new a.XMLHttpRequest}catch(b){}}function _c(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c=z.head||n("head")[0]||z.documentElement;return{send:function(d,e){b=z.createElement("script"),b.async=!0,a.scriptCharset&&(b.charset=a.scriptCharset),b.src=a.url,b.onload=b.onreadystatechange=function(a,c){(c||!b.readyState||/loaded|complete/.test(b.readyState))&&(b.onload=b.onreadystatechange=null,b.parentNode&&b.parentNode.removeChild(b),b=null,c||e(200,"success"))},c.insertBefore(b,c.firstChild)},abort:function(){b&&b.onload(void 0,!0)}}}});var ad=[],bd=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=ad.pop()||n.expando+"_"+wc++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(bd.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&bd.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(bd,"$1"+e):b.jsonp!==!1&&(b.url+=(xc.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,ad.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||z;var d=v.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=n.buildFragment([a],b,e),e&&e.length&&n(e).remove(),n.merge([],d.childNodes))};var cd=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&cd)return cd.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=a.slice(h,a.length),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(f="POST"),g.length>0&&n.ajax({url:a,type:f,dataType:"html",data:b}).done(function(a){e=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,e||[a.responseText,b,a])}),this},n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};var dd=a.document.documentElement;function ed(a){return n.isWindow(a)?a:9===a.nodeType?a.defaultView||a.parentWindow:!1}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&n.inArray("auto",[f,i])>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d={top:0,left:0},e=this[0],f=e&&e.ownerDocument;if(f)return b=f.documentElement,n.contains(b,e)?(typeof e.getBoundingClientRect!==L&&(d=e.getBoundingClientRect()),c=ed(f),{top:d.top+(c.pageYOffset||b.scrollTop)-(b.clientTop||0),left:d.left+(c.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}):d},position:function(){if(this[0]){var a,b,c={top:0,left:0},d=this[0];return"fixed"===n.css(d,"position")?b=d.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(c=a.offset()),c.top+=n.css(a[0],"borderTopWidth",!0),c.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-c.top-n.css(d,"marginTop",!0),left:b.left-c.left-n.css(d,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||dd;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||dd})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c=/Y/.test(b);n.fn[a]=function(d){return W(this,function(a,d,e){var f=ed(a);return void 0===e?f?b in f?f[b]:f.document.documentElement[d]:a[d]:void(f?f.scrollTo(c?n(f).scrollLeft():e,c?e:n(f).scrollTop()):a[d]=e)},a,d,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=Mb(l.pixelPosition,function(a,c){return c?(c=Kb(a,b),Ib.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return W(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var fd=a.jQuery,gd=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=gd),b&&a.jQuery===n&&(a.jQuery=fd),n},typeof b===L&&(a.jQuery=a.$=n),n});
//全局变量
var WHHCXW95518BHO_Settings = {
    s_pageData:{jobNo:'',jobName:'',reportDate:'',reportHour:''},
    s_caseInfo : {
        caseinfo:[],   //暂存的所有的案件数据
        policyinfo:[], //暂存保单数组
        importCaseId:0,//选择导入的案件id
        handleCaseId:0, //默认暂存案件id
        handleCaseStatus:0 //默认未暂存
    },
    s_idHeader : "WHHCXW95518BHOHEADER", //所有HTML元素共用这个字符串做ID的头部，为了防止重名。

    s_wechatInfo:{mobileNo:'',id:0,reportDate:0,licenseNo:''},//微信提示框默认存储数据，联系人的手机号，对应的记录的id，报案时间

    s_tipsLength:10, //设置对应的地址框，出险经过框，默认显示的字体长度，超长用...替代。

    s_jsServer:{
        serverIP:'http://30.4.32.35:5091/', //服务器地址
        //serverIP:'http://192.168.1.15:5091/', //测试服务器地址
        //api_QueryCaseInfo:'api/Public/QueryCaseInfo',//查询暂存信息
        api_QueryCaseInfo:'api/Public/fcxQueryCaseInfo',//查询暂存信息
        api_importHandleInfo:'api/Public/fcxHandleCase',//导入成功后结果处理
        api_WeChatGuide:'api/Public/WeChatGuide',//查询是否进行微信报案引导资格
        api_UpdateWeChatInfo:'api/Public/UpdateWeChatInfo',//微信弹窗点确定取消的接口
        api_ImportCaseInfo:'api/Public/ImportCaseInfo',//更新案件导入
        //api_HandleCaseInfo:'api/Public/HandleCaseInfo',//暂存接口，insert（传入id = 0;返回id），update
        api_HandleCaseInfo:'api/Public/AddCases',//新暂存接口
        api_CancelHandleCase:'api/Public/CancelHandleCase',//取消暂存案件接口，传入id;

        api_SavePageHTML:'api/Public/SavePageHTML',//暂存接口2
        api_LoadPageHTML:'api/Public/LoadPageHTML',//读取暂存接口2
        api_QueryPageHTML:'api/Public/QueryPageHTML',//读取暂存列表接口2
        api_QueryPageHTMLById:'api/Public/QueryPageHTMLById' //根据id查询页面html代码
    },
    s_jsonp:function(){
        return new Object({
            url: '',
            type: "POST",
            data: null,
            async: true,
            crossDomain: true == !(document.all),
            timeout: 60000,
            success: function (result) {
            	alert(result.code);
            },
            error: function (jqXHR, textStatus, errorThrown) {
            	alert("网络请求错误");
               // alert('jqXHR:'+JSON.stringify(jqXHR));
               // alert('TypeError:'+jqXHR.TypeError);
               // alert('textStatus:'+JSON.stringify(textStatus));
               // alert('errorThrown:'+JSON.stringify(errorThrown));
//                alert('message:'+errorThrown.message.toString());
//                alert('number:'+errorThrown.number);
//                alert('description:'+errorThrown.description);
                // alert('《跨域请求错误》' +
                //     '\r\n' +
                //     '错误代码：'+ errorThrown.number +
                //     '\r\n' +
                //     '错误信息：'+ errorThrown.message +
                //     '\r\n' +
                //     '请检查您的IE浏览器中的跨域设置：' +
                //     '\r\n' +
                //     '「Internet选项」-「安全」-「Internet/本地Intranet/可信站点/受限站点」 -' +
                //     '\r\n' +
                //     '「自定义级别」 - 设置「通过域访问数据源」为：启用。');
            }
        });
    }

};


if (typeof JSON !== "object") {
    JSON = {};
}

(function () {
    //初始化事件
    "use strict";
    var rx_one = /^[\],:{}\s]*$/;
    var rx_two = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g;
    var rx_three = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g;
    var rx_four = /(?:^|:|,)(?:\s*\[)+/g;
    var rx_escapable = /[\\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
    var rx_dangerous = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;

    function f(n) {
        // Format integers to have at least two digits.
        return n < 10
            ? "0" + n
            : n;
    }

    function this_value() {
        return this.valueOf();
    }

    if (typeof Date.prototype.toJSON !== "function") {

        Date.prototype.toJSON = function () {

            return isFinite(this.valueOf())
                ? this.getUTCFullYear() + "-" +
                f(this.getUTCMonth() + 1) + "-" +
                f(this.getUTCDate()) + "T" +
                f(this.getUTCHours()) + ":" +
                f(this.getUTCMinutes()) + ":" +
                f(this.getUTCSeconds()) + "Z"
                : null;
        };

        Boolean.prototype.toJSON = this_value;
        Number.prototype.toJSON = this_value;
        String.prototype.toJSON = this_value;
    }

    var gap;
    var indent;
    var meta;
    var rep;


    function quote(string) {

// If the string contains no control characters, no quote characters, and no
// backslash characters, then we can safely slap some quotes around it.
// Otherwise we must also replace the offending characters with safe escape
// sequences.

        rx_escapable.lastIndex = 0;
        return rx_escapable.test(string)
            ? "\"" + string.replace(rx_escapable, function (a) {
            var c = meta[a];
            return typeof c === "string"
                ? c
                : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4);
        }) + "\""
            : "\"" + string + "\"";
    }


    function str(key, holder) {

// Produce a string from holder[key].

        var i;          // The loop counter.
        var k;          // The member key.
        var v;          // The member value.
        var length;
        var mind = gap;
        var partial;
        var value = holder[key];

// If the value has a toJSON method, call it to obtain a replacement value.

        if (value && typeof value === "object" &&
            typeof value.toJSON === "function") {
            value = value.toJSON(key);
        }

// If we were called with a replacer function, then call the replacer to
// obtain a replacement value.

        if (typeof rep === "function") {
            value = rep.call(holder, key, value);
        }

// What happens next depends on the value's type.

        switch (typeof value) {
            case "string":
                return quote(value);

            case "number":

// JSON numbers must be finite. Encode non-finite numbers as null.

                return isFinite(value)
                    ? String(value)
                    : "null";

            case "boolean":
            case "null":

// If the value is a boolean or null, convert it to a string. Note:
// typeof null does not produce "null". The case is included here in
// the remote chance that this gets fixed someday.

                return String(value);

// If the type is "object", we might be dealing with an object or an array or
// null.

            case "object":

// Due to a specification blunder in ECMAScript, typeof null is "object",
// so watch out for that case.

                if (!value) {
                    return "null";
                }

// Make an array to hold the partial results of stringifying this object value.

                gap += indent;
                partial = [];

// Is the value an array?

                if (Object.prototype.toString.apply(value) === "[object Array]") {

// The value is an array. Stringify every element. Use null as a placeholder
// for non-JSON values.

                    length = value.length;
                    for (i = 0; i < length; i += 1) {
                        partial[i] = str(i, value) || "null";
                    }

// Join all of the elements together, separated with commas, and wrap them in
// brackets.

                    v = partial.length === 0
                        ? "[]"
                        : gap
                        ? "[\n" + gap + partial.join(",\n" + gap) + "\n" + mind + "]"
                        : "[" + partial.join(",") + "]";
                    gap = mind;
                    return v;
                }

// If the replacer is an array, use it to select the members to be stringified.

                if (rep && typeof rep === "object") {
                    length = rep.length;
                    for (i = 0; i < length; i += 1) {
                        if (typeof rep[i] === "string") {
                            k = rep[i];
                            v = str(k, value);
                            if (v) {
                                partial.push(quote(k) + (
                                    gap
                                        ? ": "
                                        : ":"
                                    ) + v);
                            }
                        }
                    }
                } else {

// Otherwise, iterate through all of the keys in the object.

                    for (k in value) {
                        if (Object.prototype.hasOwnProperty.call(value, k)) {
                            v = str(k, value);
                            if (v) {
                                partial.push(quote(k) + (
                                    gap
                                        ? ": "
                                        : ":"
                                    ) + v);
                            }
                        }
                    }
                }

// Join all of the member texts together, separated with commas,
// and wrap them in braces.

                v = partial.length === 0
                    ? "{}"
                    : gap
                    ? "{\n" + gap + partial.join(",\n" + gap) + "\n" + mind + "}"
                    : "{" + partial.join(",") + "}";
                gap = mind;
                return v;
        }
    }

// If the JSON object does not yet have a stringify method, give it one.

    if (typeof JSON.stringify !== "function") {
        meta = {    // table of character substitutions
            "\b": "\\b",
            "\t": "\\t",
            "\n": "\\n",
            "\f": "\\f",
            "\r": "\\r",
            "\"": "\\\"",
            "\\": "\\\\"
        };
        JSON.stringify = function (value, replacer, space) {

// The stringify method takes a value and an optional replacer, and an optional
// space parameter, and returns a JSON text. The replacer can be a function
// that can replace values, or an array of strings that will select the keys.
// A default replacer method can be provided. Use of the space parameter can
// produce text that is more easily readable.

            var i;
            gap = "";
            indent = "";

// If the space parameter is a number, make an indent string containing that
// many spaces.

            if (typeof space === "number") {
                for (i = 0; i < space; i += 1) {
                    indent += " ";
                }

// If the space parameter is a string, it will be used as the indent string.

            } else if (typeof space === "string") {
                indent = space;
            }

// If there is a replacer, it must be a function or an array.
// Otherwise, throw an error.

            rep = replacer;
            if (replacer && typeof replacer !== "function" &&
                (typeof replacer !== "object" ||
                    typeof replacer.length !== "number")) {
                throw new Error("JSON.stringify");
            }

// Make a fake root object containing our value under the key of "".
// Return the result of stringifying the value.

            return str("", {"": value});
        };
    }


// If the JSON object does not yet have a parse method, give it one.

    if (typeof JSON.parse !== "function") {
        JSON.parse = function (text, reviver) {

// The parse method takes a text and an optional reviver function, and returns
// a JavaScript value if the text is a valid JSON text.

            var j;

            function walk(holder, key) {

// The walk method is used to recursively walk the resulting structure so
// that modifications can be made.

                var k;
                var v;
                var value = holder[key];
                if (value && typeof value === "object") {
                    for (k in value) {
                        if (Object.prototype.hasOwnProperty.call(value, k)) {
                            v = walk(value, k);
                            if (v !== undefined) {
                                value[k] = v;
                            } else {
                                delete value[k];
                            }
                        }
                    }
                }
                return reviver.call(holder, key, value);
            }


// Parsing happens in four stages. In the first stage, we replace certain
// Unicode characters with escape sequences. JavaScript handles many characters
// incorrectly, either silently deleting them, or treating them as line endings.

            text = String(text);
            rx_dangerous.lastIndex = 0;
            if (rx_dangerous.test(text)) {
                text = text.replace(rx_dangerous, function (a) {
                    return "\\u" +
                        ("0000" + a.charCodeAt(0).toString(16)).slice(-4);
                });
            }

// In the second stage, we run the text against regular expressions that look
// for non-JSON patterns. We are especially concerned with "()" and "new"
// because they can cause invocation, and "=" because it can cause mutation.
// But just to be safe, we want to reject all unexpected forms.

// We split the second stage into 4 regexp operations in order to work around
// crippling inefficiencies in IE's and Safari's regexp engines. First we
// replace the JSON backslash pairs with "@" (a non-JSON character). Second, we
// replace all simple value tokens with "]" characters. Third, we delete all
// open brackets that follow a colon or comma or that begin the text. Finally,
// we look to see that the remaining characters are only whitespace or "]" or
// "," or ":" or "{" or "}". If that is so, then the text is safe for eval.

            if (
                rx_one.test(
                    text
                        .replace(rx_two, "@")
                        .replace(rx_three, "]")
                        .replace(rx_four, "")
                )
                ) {

// In the third stage we use the eval function to compile the text into a
// JavaScript structure. The "{" operator is subject to a syntactic ambiguity
// in JavaScript: it can begin a block or an object literal. We wrap the text
// in parens to eliminate the ambiguity.

                j = eval("(" + text + ")");

// In the optional fourth stage, we recursively walk the new structure, passing
// each name/value pair to a reviver function for possible transformation.

                return (typeof reviver === "function")
                    ? walk({"": j}, "")
                    : j;
            }

// If the text is not JSON parseable, then a SyntaxError is thrown.

            throw new SyntaxError("JSON.parse");
        };
    }
}());

var $j = jQuery.noConflict();
//全局样式
var WHHCXW95518BHO_Css = {

//    c_caseTable_tdBorder_Right:"border-right: 1px solid #000000;",//导入案件框的td右边框样式
//    c_caseTable_tdBorder_Bottom:"border-bottom: 1px solid #000000;",//导入案件框的td下边框样式
    //c_caseTable_tdBorder_Right:"border-bottom: 1px solid #E4E4E4;",//导入案件框的td右边框样式
    //c_caseTable_tdBorder_Bottom:"border-bottom: 1px solid #E4E4E4;",//导入案件框的td下边框样式
    c_caseTable_tdBorder_Bottom:"height:30px;line-height:30px;",
    c_caseTable_trStyle:"height: 30px;line-height: 30px;vertical-align: middle;",//导入案件框的td下边框样式
    c_wechatMessageWin_content_div:"padding: 20px;text-align: left;",//微信提示框的内容div框样式

    c_buttons_div:"width: 100%;height: 60px;line-height: 60px;vertical-align: middle;text-align: center;",//包含按钮对象的外层div样式
    c_buttons_yesno:"width: 100px;height:30px;background-color:#F3F3F3;border: 1px solid #000000;",//确定/取消/导入 按钮样式
    c_buttons_margin:"margin-right: 100px;",//确定/取消/导入 按钮样式
    c_buttons_margin1:"margin-right: 100px;",//取消/导入 按钮样式
    c_buttons_yes:"background:#00cdcd;width:80px;height:30px;border:0;color:#fff;line-height:34px;",
    c_buttons_no:"background:#ff8400;;width:80px;height:30px;border:0;color:#fff;line-height:34px;",
    c_win_title_Color:'background-color:#00CCCC;color:#ffffff;',//所有弹出框标题栏色
    c_div_hint_Color:'#FFFFCC', // 提示层背景色 ， 必须用纯属性。不能写background;
    c_div_zIndex:{
        caseTableDiv:999990,
        pageMaskDiv:999980,
        caseRemarkDiv:999991,
        wechatMessageWinDiv:999990
    }
};

//全局基础函数
var WHHCXW95518BHO_Functions = {

    //设置页面变量
    f_set:{
        /* 传入元素id和值 设置checkbox勾选状态 */
        checkbox:function(id,check){
            //var checkbox = document.getElementById(id);
            //checkbox.checked = check==1 ? true : false;
            var checkbox = document.getElementById(id);
            /*if(id == 'mainCarLoss' || id == 'carDamageFlag'){ //特定不需要触发时间的checkbox,直接打勾.
             checkbox.checked = check==1 ? true : false;
             } else {
             checkbox.click();//需要触发事件的checkbox就用click
             }
             */
            // 需要主动打勾的 或 需要主动取消勾的

            if(id == 'prpLregistEx.hurtFlag' && check == 1){
                checkbox.click();
            }else if (id == 'treatmentFlag' && check == 1){
                checkbox.click();
            }else if(id == 'prpLregistEx.loserFlag' && check == 1){
            	checkbox.click();
            }else if(id=='prpLregistEx.handleInfo0'&& check == 1){
            	checkbox.click();
            }else if(id=='prpLregistEx.handleInfo1'&& check == 0){
            	checkbox.click();
            }else if(id=='prpLregistEx.handleInfo2'&& check == 1){
            	checkbox.click();
            }else if(id=='prpLregistEx.handleInfo4'&& check == 1){
            	checkbox.click();
            }else if(id=='prpLregistEx.handleInfo5'&& check == 1){
            	checkbox.click();
            }else if(id=='prpLregistEx.handleInfo6'&& check == 1){
            	checkbox.click();
            }else if(id=='prpLregistEx.handleInfo8'&& check == 1){
            	checkbox.click();
            }else if(id=='prpLregistEx.handleInfo9'&& check == 1){
            	checkbox.click();
            }
            else if(id=='prpLregistEx.solutionUnit1'&& check ==0){
            	checkbox.click();
            }else if(id=='prpLregistEx.solutionUnit9'&& check == 1){
            	checkbox.click();
            }

            
        },
            /* 传入元素id和值 设置select框 */
        select:function(id,check){
           // alert('_id:'+id+',value:'+check);
            /*    var select = document.getElementById(id.toString());
             try {
             for(var i=0; i<select.options.length; i++){
             //                if(select.options[i].innerHTML == check){
             if(select.options[i].value == check){
             select.options[i].selected = true;
             break;
             }
             }
             } catch(e){
             alert('try1 err')
             }
             */
            var select2 = $j('#'+id);//document.getElementById(id);
           try {
                select2.find("option[value="+check+"]").attr("selected",true);
                //select.value = check + "";
                // var select2 = document.getElementsByName('prplregistPlat.registPosition');
                // alert(select2.length);
                // alert(select2[0].innerHTML);
            } catch(e){
                //alert('try2 err');
                alert(JSON.stringify(e));
            }


            //document.getElementById(id).value = check;
            //alert(111);
            //$j('#'+id).val(check);
            //alert(222);


        },
        /* 传入元素id和值 设置radio框 */
        radio:function(id,check){
            //var radio = document.getElementById(id);
            //radio.checked = check==1 ? true : false;
            //$j('#'+id).attr("checked",check);
        },

        reportDate:function(){
            document.getElementById('reportDate').value = WHHCXW95518BHO_Settings.s_pageData.reportDate;
        },
        reportHour:function(){
            document.getElementById('reportHour').value = WHHCXW95518BHO_Settings.s_pageData.reportHour;
        },
        jobNo:function(){
            var registinfoDiv = document.getElementById('registinfo');
            var userTds = registinfoDiv.getElementsByTagName('td');
            userTds[3].innerText = WHHCXW95518BHO_Settings.s_pageData.jobNo;
        },
        jobName:function(){
            var registinfoDiv = document.getElementById('registinfo');
            var userTds = registinfoDiv.getElementsByTagName('td');
            userTds[5].innerText = WHHCXW95518BHO_Settings.s_pageData.jobName;
        }
    },

    //获取页面变量
    f_get:{
        checkbox:function(id){
            return document.getElementById(id).checked ? 1:0;
        },
        radio:function(name){
            //alert('r_id:'+name+' - ' + $j("input[name='"+name+"'][checked]").val());
            return 0;
            //return true;
            /*
             return document.getElementById(id).checked ? 1:0;
             */
        },
        select:function(id){
            //alert('in select 5');
            //alert('in select 8 ' + 'id: '+id);
            //var val = $j('#'+id + ' option:selected').text();
            //var val = $j('#prpLregisDamageCode').text();
            //alert('val:'+val);
            //var val2 = $('#'+id).find("option:selected").text();
            //alert('find:'+val2);
            //var val5 = $('#'+id)[0].selectedIndex;
            //alert('selectedIndex5:'+val5);
            //var val3 = $('#'+id).text();
            //alert('text:'+val3);
            //alert('dv:'+document.getElementById(id).value);
            //alert('dt:'+document.getElementById(id).innerText);
            //var val6 = $('#'+id)[0].text();;
            //alert('text2'+val6);
            //var val4 = $('#'+id).get(0).selectedIndex;
            //alert('index:'+val4);
            return document.getElementById(id).value;
            /*
             var select_hc = document.getElementById(id);
             //alert(typeof(select_hc));
             //var index_hc = select_hc.selectedIndex; // 选中索引
             //alert('index'+index_hc);

             var selectOptions = select_hc.options;
             alert('length:'+selectOptions.length);
             for(var i = 0;i<selectOptions.length;i++){
             var op = selectOptions[i];
             if(op.getAttribute('selected')){
             alert(op.value);
             return op.value;
             }
             }
             alert('end');
             alert(select_hc.options[index_hc].value);
             return select_hc.options[index_hc].value; //返回选中值
             return '000';
             */
        },

        caseId:function(){
//            return '1';
            var rds = document.getElementsByName(WHHCXW95518BHO_Settings.s_idHeader + '.CaseTableRadio');
            for(var i=0;i<rds.length;i++){
                if(rds[i].checked){
                    return rds[i].value;
                }
            }
            return false;
        },
        licenseNo:function(){
//            return '浙B95518';
            return document.getElementById('licenseNo').value;
        },
        mobileNo:function(){
//            return '13871100252';
            return document.getElementById('reportorNumberText').value;
        },
        reportDate:function(){
//            return '2016-08-16';
            return document.getElementById('reportDate').value;
        },
        reportHour:function(){
//            return '11:22:33';
            return document.getElementById('reportHour').value;
        },
        damageDate:function(){
//            return '2016-08-16';
            return document.getElementById('damageDate').value;
        },
        damageHour:function(){
//            return '11:22:33';
            return document.getElementById('damageHour').value;
        },
        damageProvinceText:function(){
//            return '湖北省';
            return document.getElementById('damageProvinceText').value;
        },
        damageAddrCity:function(){
//            return '武汉市';
            return document.getElementById('damageAddrCity').value;
        },
        damageAddressText:function(){
//            return '洪山区 光谷SBI创业街3栋1301';
            return document.getElementById('damageAddressText').value;
        },
        remark:function(){
//            return '出险经过出险经过出险经过出险经过出险经过';
            return document.getElementById('prpLregist.remark').value;
        },
        jobNo:function(){
//            return '周红';
            var registinfoDiv = document.getElementById('registinfo');
            var userTds = registinfoDiv.getElementsByTagName('td');
            return userTds[3].innerText; // userTds[5]为初登坐席姓名， userTds[3]为初登坐席工号
        },
        jobName:function(){
//            return 'jobNo';
            var registinfoDiv = document.getElementById('registinfo');
            var userTds = registinfoDiv.getElementsByTagName('td');
            return userTds[5].innerText; // userTds[5]为初登坐席姓名， userTds[3]为初登坐席工号
        },
        createUser:function(){
//            return '周红';
            var registinfoDiv = document.getElementById('registinfo');
            var userTds = registinfoDiv.getElementsByTagName('td');
            return userTds[5].innerText; // userTds[5]为初登坐席姓名， userTds[3]为初登坐席工号
        }
    },

    /* 构建页面遮罩 */
    f_createPageMask:function(){
        var pageMaskDiv = document.createElement('div');
        pageMaskDiv.id = WHHCXW95518BHO_Settings.s_idHeader + ".PageMaskDiv";
        pageMaskDiv.style.width = '100%';
        pageMaskDiv.style.height = document.body.clientHeight;//'100%';
        pageMaskDiv.style.textAlign = 'center';
        pageMaskDiv.style.position = 'absolute';
        pageMaskDiv.style.margin = 0;
        pageMaskDiv.style.padding = 0;
        pageMaskDiv.style.top = 0;
        pageMaskDiv.style.left = 0;
        pageMaskDiv.style.zIndex = WHHCXW95518BHO_Css.c_div_zIndex.pageMaskDiv;
        pageMaskDiv.style.display = 'none';
        pageMaskDiv.style.backgroundColor = '#000';
        pageMaskDiv.style.opacity = 0.3;
        pageMaskDiv.style.filter = 'alpha(opacity:30)';
        document.body.appendChild(pageMaskDiv);

        /* 直接添加 页面遮罩提示框 */
        pageMaskDiv.innerHTML="<div style='width: 200px;height: 40px;line-height: 40px;margin-top: 200px;margin-left: 400px;display: none;background-color: "+WHHCXW95518BHO_Css.c_div_hint_Color+";text-align: center;color: #000000' id='"+WHHCXW95518BHO_Settings.s_idHeader + ".PageMaskHintDiv"+"'><strong>数据加载中...</strong></div>";
    },

    /* 展示页面遮罩 */
    f_showPageMask:function(){
        var pageMaskDiv = document.getElementById(WHHCXW95518BHO_Settings.s_idHeader + ".PageMaskDiv");
        pageMaskDiv.style.display = "block";
        pageMaskDiv.style.opacity = 0.3;
        pageMaskDiv.style.filter = 'alpha(opacity:30)';
        pageMaskDiv.style.width = '100%';
        pageMaskDiv.style.textAlign = 'center';
        pageMaskDiv.style.margin = '0 auto';
    },

    /* 隐藏页面遮罩 */
    f_hidePageMask:function(){
        var pageMaskDiv = document.getElementById(WHHCXW95518BHO_Settings.s_idHeader + ".PageMaskDiv");
        pageMaskDiv.style.display = "none";
    },

    /* 显示页面遮罩提示框 */
    f_showPageMaskHint:function(){
        var pageMaskHintDiv = document.getElementById(WHHCXW95518BHO_Settings.s_idHeader + ".PageMaskHintDiv");
        pageMaskHintDiv.style.display = 'block';
    },

    /* 隐藏页面遮罩提示框 */
    f_hidePageMaskHint:function(){
        var pageMaskHintDiv = document.getElementById(WHHCXW95518BHO_Settings.s_idHeader + ".PageMaskHintDiv");
        pageMaskHintDiv.style.display = 'none';
    },


    /* 构建暂存案件栏对象 */
    f_createCaseTable:function(){
        var caseTableDiv = document.createElement('div');
        caseTableDiv.id = WHHCXW95518BHO_Settings.s_idHeader + ".CaseTableDiv";
//        caseTableDiv.style.border = '1px solid #000000';
        caseTableDiv.style.backgroundColor = '#ffffff';
        caseTableDiv.style.width = '1000px';
//        caseTableDiv.style.height = '150px';
//        caseTableDiv.style.paddingTop = '20px';
//        caseTableDiv.style.paddingLeft = '20px';
//        caseTableDiv.style.paddingRight = '20px';
        caseTableDiv.style.position = 'absolute';
        caseTableDiv.style.top = '50px';
        caseTableDiv.style.left = '50px';//( ( document.documentElement.clientWidth - 1000 ) / 2 ) + 'px';
        caseTableDiv.style.zIndex = WHHCXW95518BHO_Css.c_div_zIndex.caseTableDiv;
        caseTableDiv.style.display = 'none';
        document.body.appendChild(caseTableDiv);
    },

    /* 展示并填充暂存案件栏 */
    f_showCaseTable:function(){
        var caseTableDiv = document.getElementById(WHHCXW95518BHO_Settings.s_idHeader + ".CaseTableDiv");
        caseTableDiv.style.display = "block";
		 caseTableDiv.style.border="#ccc solid 1px";
		 caseTableDiv.style.borderTop="#ccc solid 0px";
        var caseTableInnerHTML = "";
        caseTableInnerHTML += "<table cellspacing='0' cellpadding='0' style='width: 100%;text-align: center;margin-bottom: 20px;'>" +
            "<tr style='"+WHHCXW95518BHO_Css.c_caseTable_trStyle+WHHCXW95518BHO_Css.c_win_title_Color+"'>" +
            "<td style='"+WHHCXW95518BHO_Css.c_caseTable_tdBorder_Bottom+"'>选择</td>" +
            "<td style='"+WHHCXW95518BHO_Css.c_caseTable_tdBorder_Bottom+"'>保单号</td>" +
            "<td style='"+WHHCXW95518BHO_Css.c_caseTable_tdBorder_Bottom+"'>车牌号</td>" +
            "<td style='"+WHHCXW95518BHO_Css.c_caseTable_tdBorder_Bottom+"'>出险日期</td>" +
            "<td style='"+WHHCXW95518BHO_Css.c_caseTable_tdBorder_Bottom+"'>出险时间</td>" +
            "<td style='"+WHHCXW95518BHO_Css.c_caseTable_tdBorder_Bottom+"'>上次报案日期</td>" +
            "<td style='"+WHHCXW95518BHO_Css.c_caseTable_tdBorder_Bottom+"'>出险地点</td>" +
            "<td style='"+WHHCXW95518BHO_Css.c_caseTable_tdBorder_Bottom+"'>出险经过说明</td>" +
            "</tr>";
        for(var i = 0;i<WHHCXW95518BHO_Settings.s_caseInfo.caseinfo.length;i++){
            var caseData = WHHCXW95518BHO_Settings.s_caseInfo.caseinfo[i];

            var remark = caseData.remark ? caseData.remark : "";
            if(remark.length > WHHCXW95518BHO_Settings.s_tipsLength){
                remark = caseData.remark.substr(0,WHHCXW95518BHO_Settings.s_tipsLength) + '...';
            }

            var address = caseData.damage_province_text + caseData.damage_addr_city + caseData.damage_address_text;
            var address1=caseData.damageAddressQuery;
            if(address.length > WHHCXW95518BHO_Settings.s_tipsLength){
                address = address.substr(0,WHHCXW95518BHO_Settings.s_tipsLength) + '...';
            }

            var policy_no ='';
            var policyArr = caseData.policy_no.split('/');
            for(var j = 0;j<policyArr.length;j++){
                policy_no += policyArr[j] + '<br>';
                if(j == policyArr.length -1){
                    policy_no = policy_no.substr(0,policy_no.length - 4);
                }
            }
            caseTableInnerHTML += "<tr style='"+WHHCXW95518BHO_Css.c_caseTable_trStyle+"'>" +
                "<td style='"+WHHCXW95518BHO_Css.c_caseTable_tdBorder_Right+"'><input type='radio' value='"+caseData.id+"' name='" + WHHCXW95518BHO_Settings.s_idHeader + ".CaseTableRadio'/></td>" +
                "<td style='"+WHHCXW95518BHO_Css.c_caseTable_tdBorder_Right+"'>"+policy_no+"</td>" +
                "<td style='"+WHHCXW95518BHO_Css.c_caseTable_tdBorder_Right+"'>"+caseData.license_no+"</td>" +
                "<td style='"+WHHCXW95518BHO_Css.c_caseTable_tdBorder_Right+"'>"+caseData.damage_date+"</td>" +
                "<td style='"+WHHCXW95518BHO_Css.c_caseTable_tdBorder_Right+"'>"+caseData.damage_hour+"</td>" +
                "<td style='"+WHHCXW95518BHO_Css.c_caseTable_tdBorder_Right+"'>"+caseData.report_date+"</td>" +
                "<td onmouseover='WHHCXW95518BHO_Functions.f_showCaseRemark(1,"+i+",this)' onmouseout='WHHCXW95518BHO_Functions.f_hideCaseRemark()' id='"+WHHCXW95518BHO_Settings.s_idHeader + '.CaseTableDiv.ad'+i+"' style='"+WHHCXW95518BHO_Css.c_caseTable_tdBorder_Right+"'>"+address1+"</td>" +
                "<td onmouseover='WHHCXW95518BHO_Functions.f_showCaseRemark(2,"+i+",this)' onmouseout='WHHCXW95518BHO_Functions.f_hideCaseRemark()' id='"+WHHCXW95518BHO_Settings.s_idHeader + '.CaseTableDiv.rm'+i+"' style='"+WHHCXW95518BHO_Css.c_caseTable_tdBorder_Right+"'>"+remark+"</td></tr>";// 设置出险经过的td的id;
        }
        caseTableInnerHTML += "</table>";

        buttonsHTML = "<div style='"+WHHCXW95518BHO_Css.c_buttons_div+"'>" +
            "<input type='button' value='导入' style='"+WHHCXW95518BHO_Css.c_buttons_yesno+WHHCXW95518BHO_Css.c_buttons_margin+WHHCXW95518BHO_Css.c_buttons_yes+"' onclick='WHHCXW95518BHO_Business.b_importCaseInfo()'/>" +
            "<input type='button' value='取消' style='"+WHHCXW95518BHO_Css.c_buttons_yesno+WHHCXW95518BHO_Css.c_buttons_no+"' onclick='WHHCXW95518BHO_Functions.f_hideCaseTable()'/>" +
            "</div>";
        caseTableDiv.innerHTML = caseTableInnerHTML+buttonsHTML;

        /* 同时记得创建提示框 */
        WHHCXW95518BHO_Functions.f_createCaseRemark();
    },
    
    /* 隐藏暂存案件栏 */
    f_hideCaseTable:function(){
        var caseTableDiv = document.getElementById(WHHCXW95518BHO_Settings.s_idHeader + ".CaseTableDiv");
        caseTableDiv.style.display = "none";
    },

    /* 构建暂存案件栏内容提示窗 */
    f_createCaseRemark:function(){
        var caseRemarkDiv = document.createElement('div');
        caseRemarkDiv.id = WHHCXW95518BHO_Settings.s_idHeader + ".CaseRemarkDiv";
        caseRemarkDiv.style.border = '1px solid #000000';
        caseRemarkDiv.style.backgroundColor = WHHCXW95518BHO_Css.c_div_hint_Color;
        caseRemarkDiv.style.width = '300px';
        caseRemarkDiv.style.padding = '5px';
        caseRemarkDiv.style.position = 'absolute';
        caseRemarkDiv.style.zIndex = WHHCXW95518BHO_Css.c_div_zIndex.pageMaskDiv;//比CaseTableDiv+1
        caseRemarkDiv.style.display = 'none';
        var caseTableDiv = document.getElementById(WHHCXW95518BHO_Settings.s_idHeader + ".CaseTableDiv");
        caseTableDiv.appendChild(caseRemarkDiv);
    },

    /* 展示并填充暂存案件栏内容提示窗 */
    f_showCaseRemark:function(type,index,obj){
        var tdid = "";
        if(type == "2"){
            tdid = WHHCXW95518BHO_Settings.s_idHeader + '.CaseTableDiv.rm'+index;
        } else if(type == '1'){ //type=1则显示地址
            tdid = WHHCXW95518BHO_Settings.s_idHeader + '.CaseTableDiv.ad'+index;
        } else {
            return;
        }
//        alert(obj.innerHTML);
        var caseRemarkDiv = document.getElementById(WHHCXW95518BHO_Settings.s_idHeader + ".CaseRemarkDiv");
        caseRemarkDiv.style.display = "block";

        var td = document.getElementById(tdid);
        var tdTop = td.offsetTop + 30 + 30;//tip框定位
        var tdLeft = td.offsetLeft;// - 80; //tip框定位
        caseRemarkDiv.style.top = tdTop+'px';
        caseRemarkDiv.style.left = tdLeft+'px';

        if(type == "2"){
            caseRemarkDiv.innerText = WHHCXW95518BHO_Settings.s_caseInfo.caseinfo[index].remark;
        } else if(type == '1'){ //type=1则显示地址
            caseRemarkDiv.innerText =obj.innerHTML;
        }
    },

    /* 隐藏暂存案件栏内容提示窗 */
    f_hideCaseRemark:function(){
        var caseRemarkDiv = document.getElementById(WHHCXW95518BHO_Settings.s_idHeader + ".CaseRemarkDiv");
        caseRemarkDiv.style.display = "none";
    },

    /* 构建微信报案引导窗口对象 */
    f_createWechatMessageWin:function(){
        var wechatMessageWinDiv = document.createElement('div');
        wechatMessageWinDiv.id = WHHCXW95518BHO_Settings.s_idHeader + ".WechatMessageWinDiv";
//        wechatMessageWinDiv.style.border = '1px solid #000000';
        wechatMessageWinDiv.style.backgroundColor = '#ffffff';
        wechatMessageWinDiv.style.width = '500px';
//        wechatMessageWinDiv.style.height = '350px';
//        wechatMessageWinDiv.style.padding = '30px';
        wechatMessageWinDiv.style.position = 'absolute';
        wechatMessageWinDiv.style.top = '50px';
        wechatMessageWinDiv.style.left = '50px';
        wechatMessageWinDiv.style.zIndex = WHHCXW95518BHO_Css.c_div_zIndex.wechatMessageWinDiv;
//        caseTableDiv.style.display = 'none';
        document.body.appendChild(wechatMessageWinDiv);
    },

    /* 显示并填充微信报案引导窗口 */
    f_showWechatMessageWin:function(step){
        var wechatMessageWinDiv = document.getElementById(WHHCXW95518BHO_Settings.s_idHeader + ".WechatMessageWinDiv");
        wechatMessageWinDiv.style.display = "block";

        var headerDivHTML = "<div style='width:100%;height: 40px;"+WHHCXW95518BHO_Css.c_win_title_Color+"'>" +
            "<span style='float: left;padding-left: 10px;line-height: 40px;vertical-align: middle;'>微信理赔引导</span>" +
            "<span style='float: right;padding-right: 20px;cursor: hand;line-height: 40px;vertical-align: middle;' onclick='WHHCXW95518BHO_Business.b_updateWeChatInfo(0,-2);'>x</span>" +
            "</div>";
        var contentDivHTML = "";
        var footerDivHTML = "";
       


        wechatMessageWinDiv.innerHTML = "";
    },
    /* 关闭微信报案引导窗口 */
    f_hideWechatMessageWin:function(){
        var wechatMessageWinDiv = document.getElementById(WHHCXW95518BHO_Settings.s_idHeader + ".WechatMessageWinDiv");
        wechatMessageWinDiv.style.display = "none";
    },

    /* 为全局变量.保单信息数组赋值 */
    f_getPagePolicyInfo:function(){
        var i = 0;
        var policyArray = [];
        while(true){
            var policyString = document.getElementById('policyInfos['+i+'].policyString');
            if(policyString){
                var policy = policyString.value.split('|');
                var policy_xzCode = document.getElementById('policyInfos['+i+'].xzCode').value;
                policyArray[i] = {policy_no:policy[0],license_no:policy[1],xzCode:policy_xzCode};
//                alert(policy_xzCode);
                i++;
            } else {
                break;
            }
        }
        WHHCXW95518BHO_Settings.s_caseInfo.policyinfo = policyArray;
    },

    /* 填充页面数据 */
    f_fillPageData:function(id){
    	// alert("导入的id:"+id);
    	//alert("进入导入");
        var caseinfo = WHHCXW95518BHO_Settings.s_caseInfo.caseinfo;
        var caseData = false;
        for(var i = 0;i<caseinfo.length;i++){
            if(caseinfo[i].id == id){
                caseData = caseinfo[i];
            }
        }
        if(!caseData){
            alert('数据导入失败，没找到对应的数据');
        } else {
        	//20180410新增             
        document.getElementById('prpLregist.reportorName').value=caseData.reportorname; /* 报案人 */ 
        document.getElementById('prpLregist.reportorNumber').value=caseData.reportornumber;/* 报案人电话 */
        document.getElementById('prpLregist.reportorMobile').value=caseData.reportormobile ;/* 报案人手机 */
        document.getElementById('prpLregist.linkerName').value=caseData.contacts;/* 联系人 */
        document.getElementById('prpLregist.phoneNumber').value=caseData.contactsPhone;/* 联系人电话 */
        document.getElementById('prpLregist.linkerMobile').value=caseData.contactsmobile;/* 联系人手机 */
        document.getElementById('prpLregist.relationShip_ac').value=caseData.relation_ship;/* 报案人与被保险人关系 */
        document.getElementById('damageDate').value=caseData.damagedate;/* 出险日期 */
        document.getElementById('damageHour').value=caseData.damagehour ;/* 出险时间 */
        document.getElementById('prpLregist.damageCode_ac').value=caseData.prp_lregis_damage_code;/* 出险原因 */
        document.getElementById('prpLregist.mercyFlag_ac').value=caseData.case_degree;/* 紧急程度 */
        //caseData.damage_province_text = document.getElementById('damageProvinceText').value;/* 出险地点 - 出险省份 */
        //caseData.damage_addr_city = document.getElementById('damageAddrCity').value;/* 出险地点 - 出险地市 */
        document.getElementById('prpLregist.damageAddress').value=caseData.damage_address_text ;/* 出险地点 - 出险地址 */ 
        document.getElementById('prpLregist.remark').value="##"+caseData.outProcess;/* 出险经过 */  //todo:?判断传值 textarea
        document.getElementById('prpLregistEx.estimateLoss').value=caseData.estimateLoss; /*估损金额*/ 
        if(caseData.per_loss==1){
        	WHHCXW95518BHO_Functions.f_set.checkbox('prpLregistEx.hurtFlag',caseData.per_loss);/*是否人伤*/
            document.getElementById('prpLregistEx.hurtNum').value=caseData.hurt_num;/* 伤 */
            document.getElementById('prpLregistEx.dieNum').value=caseData.die_num;/* 亡 */
        }        
        WHHCXW95518BHO_Functions.f_set.checkbox('treatmentFlag',caseData.treatmentFlag);/*是否住院*/
        WHHCXW95518BHO_Functions.f_set.checkbox('prpLregistEx.loserFlag',caseData.loserFlag);/*是否物损*/
        WHHCXW95518BHO_Functions.f_set.select('currency',caseData.currency);/*是否物损*/
        document.getElementById("prpLregistEx.loser").value=caseData.loser; /*物损的值*/
        document.getElementById("checkAreaName").value=caseData.checkAreaName; /*查勘属地*/
        document.getElementById("prpLregist.checkAddress").value=caseData.checkAddress; /*查勘地点*/
        document.getElementById("factContent").value=caseData.factContent; /*事故处理结果*/
        document.getElementById("prpLregistFact.content").value=caseData.prpLregistFact; /*添加处理的结果*/
        WHHCXW95518BHO_Functions.f_set.checkbox('prpLregistEx.handleInfo0',caseData.handleInfo0);
        WHHCXW95518BHO_Functions.f_set.checkbox('prpLregistEx.handleInfo1',caseData.handleInfo1);
        WHHCXW95518BHO_Functions.f_set.checkbox('prpLregistEx.handleInfo4',caseData.handleInfo4);
        WHHCXW95518BHO_Functions.f_set.checkbox('prpLregistEx.handleInfo5',caseData.handleInfo5);
        WHHCXW95518BHO_Functions.f_set.checkbox('prpLregistEx.handleInfo6',caseData.handleInfo6);
        WHHCXW95518BHO_Functions.f_set.checkbox('prpLregistEx.handleInfo7',caseData.handleInfo7);
        WHHCXW95518BHO_Functions.f_set.checkbox('prpLregistEx.handleInfo8',caseData.handleInfo8);
        WHHCXW95518BHO_Functions.f_set.checkbox('prpLregistEx.handleInfo9',caseData.handleInfo9);
        WHHCXW95518BHO_Functions.f_set.checkbox('prpLregistEx.solutionUnit1',caseData.solutionUnit1);
        WHHCXW95518BHO_Functions.f_set.checkbox('prpLregistEx.solutionUnit9',caseData.solutionUnit9);
        WHHCXW95518BHO_Functions.b_importHandleInfo(id,function(){
        		 alert("导入成功");
                 document.getElementById('divInputMethod').style.display = 'none';
                 document.getElementById("saveRegistButton").disabled=false;
                ResetPage();
       	})
        

        }
    },
    b_importHandleInfo:function(id,cb){
       var server = WHHCXW95518BHO_Settings.s_jsServer;
       var jsonp = new WHHCXW95518BHO_Settings.s_jsonp();
       jsonp.url = server.serverIP + server.api_importHandleInfo;
       jsonp.data = {
            id:id,
            randomTag:new Date().getTime()
        };
        jsonp.success = function(result){  
            if(result.code=="200"){
              cb();
            }else{
              alert(result.msg);
            }
        }
        $j.ajax(jsonp);

    },
    /* 获取页面数据 */
    f_getPageData:function(){

        //alert('进入读取');
        // alert("获取页面数据");
        var caseData = {};
        //0408新增caseData的重新定义
        caseData.policyNo=document.getElementById('policyInfos[0].policyNo').value;  /*保单号*/                 
        caseData.reportorname = document.getElementById('prpLregist.reportorName').value; /* 报案人 */ 
        caseData.reportornumber = document.getElementById('prpLregist.reportorNumber').value;/* 报案人电话 */
        caseData.reportormobile = document.getElementById('prpLregist.reportorMobile').value;/* 报案人手机 */
        caseData.contacts = document.getElementById('prpLregist.linkerName').value;/* 联系人 */
        caseData.contactsPhone = document.getElementById('prpLregist.phoneNumber').value;/* 联系人电话 */
        caseData.contactsmobile = document.getElementById('prpLregist.linkerMobile').value;/* 联系人手机 */
        caseData.relation_ship = document.getElementById('prpLregist.relationShip_ac').value;/* 报案人与被保险人关系 */
        caseData.reportdate=document.getElementById('reportDate1').value;/*报案日期*/
        caseData.reporthour=document.getElementById('reportHour1').value;/*报案时间*/
        caseData.damagedate = document.getElementById('damageDate').value;/* 出险日期 */
        caseData.damagehour = document.getElementById('damageHour').value;/* 出险时间 */
        caseData.prp_lregis_damage_code =document.getElementById('prpLregist.damageCode_ac').value;/* 出险原因 */
        caseData.insurant =document.getElementById('policyInfos[0].insuredName').value;/*被保险人*/
        caseData.case_degree = document.getElementById('prpLregist.mercyFlag_ac').value;/* 紧急程度 */
        caseData.damage_address_text = document.getElementById('prpLregist.damageAddress').value;/* 出险地点 - 出险地址 */
        caseData.outProcess = document.getElementById('prpLregist.remark').value;/* 出险经过 */  //todo:?判断传值 textarea
        caseData.estimateLoss = document.getElementById('prpLregistEx.estimateLoss').value; /*估损金额*/
        caseData.per_loss = WHHCXW95518BHO_Functions.f_get.checkbox('prpLregistEx.hurtFlag');/* 涉及人员伤亡 */ //todo: 重要，勾选将触发人员损失。并且会同时勾选 涉及第三者人员伤亡(thirdPerLoss)
        caseData.hurt_num = document.getElementById('prpLregistEx.hurtNum').value;/* 伤 */
        caseData.die_num = document.getElementById('prpLregistEx.dieNum').value;/* 亡 */
        caseData.treatmentFlag = WHHCXW95518BHO_Functions.f_get.checkbox('treatmentFlag')/*是否有人伤在住院治疗*/
        caseData.loserFlag=WHHCXW95518BHO_Functions.f_get.checkbox('prpLregistEx.loserFlag')/*是否物损*/
        caseData.loser=document.getElementById("prpLregistEx.loser").value; /*物损的值*/
        caseData.checkAreaName=document.getElementById("checkAreaName").value; /*查勘属地*/
        caseData.checkAddress=document.getElementById("prpLregist.checkAddress").value; /*查勘地点*/
        caseData.factContent=document.getElementById("factContent").value; /*事故处理结果*/
        caseData.prpLregistFact=document.getElementById("prpLregistFact.content").value; /*添加处理的结果*/
        caseData.currency=document.getElementById("currency").value;/*添加币种*/
        caseData.handleInfo0 = WHHCXW95518BHO_Functions.f_get.checkbox('prpLregistEx.handleInfo0')/*处理信息*/
        caseData.handleInfo1 = WHHCXW95518BHO_Functions.f_get.checkbox('prpLregistEx.handleInfo1')/*处理信息*/
        caseData.handleInfo4 = WHHCXW95518BHO_Functions.f_get.checkbox('prpLregistEx.handleInfo4')/*处理信息*/
        caseData.handleInfo5 = WHHCXW95518BHO_Functions.f_get.checkbox('prpLregistEx.handleInfo5')/*处理信息*/
        caseData.handleInfo6 = WHHCXW95518BHO_Functions.f_get.checkbox('prpLregistEx.handleInfo6')/*处理信息*/
        caseData.handleInfo8 = WHHCXW95518BHO_Functions.f_get.checkbox('prpLregistEx.handleInfo8')/*处理信息*/
        caseData.handleInfo9 = WHHCXW95518BHO_Functions.f_get.checkbox('prpLregistEx.handleInfo9')/*处理信息*/
        caseData.solutionUnit1 = WHHCXW95518BHO_Functions.f_get.checkbox('prpLregistEx.solutionUnit1')/*处理信息保险部门*/
        caseData.solutionUnit9= WHHCXW95518BHO_Functions.f_get.checkbox('prpLregistEx.solutionUnit9')/*处理信息其他部门*/
        caseData.institution=$j("#polisyInfo table tr td:nth-child(7)").html();
        
        //alert("获取页面数据caseData"+JSON.stringify(caseData));

       

        return caseData;

    },

    /* 获取页面三者车信息 */
    f_getPageThirdCarData:function(){
        var thirdCarArray = [];
        ///var tit = globalindex['traceInfoTable'];
/*
        while(true){
            var policyString = document.getElementById('policyInfos['+i+'].policyString');
            if(policyString){
                var policy = policyString.value.split('|');
                var policy_xzCode = document.getElementById('policyInfos['+i+'].xzCode').value;
                policyArray[i] = {policy_no:policy[0],license_no:policy[1],xzCode:policy_xzCode};
//                alert(policy_xzCode);
                i++;
            } else {
                break;
            }
        }
 if(isNaN(carIndex)){
 carIndex = registForm.woundConfirmIndex.value;
 }
        */
        //alert('tit:'+tit);
        return [];
    },

    /* 获取页面三者人伤信息 */
    f_getPagePerLossData:function(){
        //var pit = globalindex['personInfoTable'];
        //alert('pit:'+pit);
        return [];
    },


    /* 获取页面三者财损信息 */
    f_getPagePollLossData:function(){
//        var btnPollLoss = document.getElementById('addPollLoss');
        var wit = globalindex['worthInfoTable'];
        //alert('wit:'+wit);
        var pollLossArray = [];
        if(!isNaN(wit)){
            for(var i = 0;i<wit;i++){
                var obj = {
                    create_user:WHHCXW95518BHO_Functions.f_get.createUser(),
                    wound_gradeww:document.getElementById('WoundGradeww_['+i+']').value,
                    lossItem_name:document.getElementsByName('prpLregistProps_['+i+'].lossItemName')[0].value
                };
                pollLossArray.push(obj);
            }
        }
        //alert(JSON.stringify(pollLossArray));
        return pollLossArray;
    },


    /* 填充页面HTML */
//    f_fillPageHTML:function(id,result){
    f_fillPageHTML:function(caseData){
//        var caseinfo = WHHCXW95518BHO_Settings.s_caseInfo.caseinfo;
//        var caseData = false;
//        for(var i = 0;i<caseinfo.length;i++){
//            if(caseinfo[i].id == id){
//                caseData = caseinfo[i];
//            }
//        }
        /*
         var caseData = {
         registinfo:localStorage.getItem('registinfo'+'_'+id),
         registinfo2:localStorage.getItem('registinfo2'+'_'+id),
         registinfo3:localStorage.getItem('registinfo3'+'_'+id),
         disposeinfo:localStorage.getItem('disposeinfo'+'_'+id),
         driverinfo1:localStorage.getItem('driverinfo1'+'_'+id),
         driverinfotest:localStorage.getItem('driverinfotest'+'_'+id),
         damagecourse:localStorage.getItem('damagecourse'+'_'+id),
         specialdis:localStorage.getItem('specialdis'+'_'+id)
         };

         //        console.log(id);
         //        console.log(caseData);

         if(!caseData.registinfo){
         alert('数据导入失败，没找到对应的暂存数据');
         } else {
         */
        //暂存页面数据
        WHHCXW95518BHO_Settings.s_pageData.jobName = WHHCXW95518BHO_Functions.f_get.jobName();
        WHHCXW95518BHO_Settings.s_pageData.jobNo = WHHCXW95518BHO_Functions.f_get.jobNo();
        WHHCXW95518BHO_Settings.s_pageData.reportDate = WHHCXW95518BHO_Functions.f_get.reportDate();
        WHHCXW95518BHO_Settings.s_pageData.reportHour = WHHCXW95518BHO_Functions.f_get.reportHour();
        //恢复页面内容
        document.getElementById('registinfo').innerHTML = caseData.registinfo;
        document.getElementById('registinfo2').innerHTML = caseData.registinfo2;
        document.getElementById('registinfo3').innerHTML = caseData.registinfo3;
        document.getElementById('disposeinfo').innerHTML = caseData.disposeinfo;
        document.getElementById('driverinfo1').innerHTML = caseData.driverinfo1;
        document.getElementById('driverinfotest').innerHTML = caseData.driverinfotest;
        document.getElementById('damagecourse').innerHTML = caseData.damagecourse;
        document.getElementById('specialdis').innerHTML = caseData.specialdis;
        document.getElementById('prpLregist.remark').value=caseData.outProcess;
        //恢复暂存数据
        // WHHCXW95518BHO_Functions.f_set.jobName();
        // WHHCXW95518BHO_Functions.f_set.jobNo();
        // WHHCXW95518BHO_Functions.f_set.reportDate();
        // WHHCXW95518BHO_Functions.f_set.reportHour();
        /*
         //清除暂存案件页面内容
         localStorage.removeItem('registinfo'+'_'+id);
         localStorage.removeItem('registinfo2'+'_'+id);
         localStorage.removeItem('registinfo3'+'_'+id);
         localStorage.removeItem('disposeinfo'+'_'+id);
         localStorage.removeItem('driverinfo1'+'_'+id);
         localStorage.removeItem('driverinfotest'+'_'+id);
         localStorage.removeItem('damagecourse'+'_'+id);
         localStorage.removeItem('specialdis'+'_'+id);
         } */

    },

    /* 获取页面html */
    f_getPageHTML:function(){

    }

};

//全局业务逻辑函数
var WHHCXW95518BHO_Business = {
    /* 初始化页面数据 */
//     b_initPageData:function(){
//         WHHCXW95518BHO_Functions.f_getPagePolicyInfo(); // 获取页面保单数据
//         WHHCXW95518BHO_Settings.s_wechatInfo.mobileNo = WHHCXW95518BHO_Functions.f_get.mobileNo();

//         WHHCXW95518BHO_Functions.f_createPageMask(); // 构建遮罩并且构建遮罩提示
//         WHHCXW95518BHO_Functions.f_showPageMask();   //显示遮罩
//         WHHCXW95518BHO_Functions.f_showPageMaskHint(); //显示遮罩提示

//         var policyinfo = WHHCXW95518BHO_Settings.s_caseInfo.policyinfo;
//         if(policyinfo.length > 0){
//             WHHCXW95518BHO_Business.b_queryCaseInfo();//获取暂存案件信息
// //            WHHCXW95518BHO_Business.b_queryPageHTML();//获取暂存案件信息2
//         } else {
//             //如果没有保单信息，直接关闭遮罩
//             WHHCXW95518BHO_Functions.f_hidePageMaskHint();
//             WHHCXW95518BHO_Functions.f_hidePageMask();
//         }

//     },

    /* 页面根据保单号和车牌号获取暂存案件信息 */
    b_queryCaseInfo:function(){
    	//案件查询
    	// alert("进入案件查询")
        var server = WHHCXW95518BHO_Settings.s_jsServer;
        var jsonp = new WHHCXW95518BHO_Settings.s_jsonp();
        var plug_storageID =document.getElementById('plug_storageID').value; //保单号查询
        var plug_reporter =document.getElementById('plug_reporter').value; //报案人查询
        var plug_reStartTime =document.getElementById('plug_reStartTime').value; //报案开始时间
        var plug_reEndTime =document.getElementById('plug_reEndTime').value; //报案结束时间
        var hc_s1=parseInt(plug_reStartTime);
        var hc_s2=parseInt(plug_reEndTime);
        if(hc_s1>hc_s2){
        	alert("报案开始时间不能大于报案结束时间");
        	return;
        }
        var plug_outStartTime =document.getElementById('plug_outStartTime').value; //出险开始时间
        var plug_outEndTime=document.getElementById('plug_outEndTime').value; //出险结束时间
        var hc_s3=parseInt(plug_reStartTime);
        var hc_s4=parseInt(plug_reEndTime);
        if(hc_s3>hc_s4){
        	alert("出险开始时间不能大于出险结束时间");
        	return;
        }
        var hc_s5="";
        var hc_s6="";
        var hc_s7="";
        var hc_s8="";
        // if(plug_reStartTime){
        // 	hc_s5=plug_reStartTime.substr(0, 4)+"-"+plug_reStartTime.substr(4, 2)+"-"+plug_reStartTime.substr(6, 2);
        // }
        // if(plug_reEndTime){
        //     hc_s6=plug_reEndTime.substr(0, 4)+"-"+plug_reEndTime.substr(4, 2)+"-"+plug_reEndTime.substr(6, 2);
        // }
        // if(plug_outStartTime){
        // 	hc_s7=plug_outStartTime.substr(0, 4)+"-"+plug_outStartTime.substr(4, 2)+"-"+plug_outStartTime.substr(6, 2);
        // }
        // if(plug_outEndTime){
        // 	hc_s8=plug_outEndTime.substr(0, 4)+"-"+plug_outEndTime.substr(4, 2)+"-"+plug_outEndTime.substr(6, 2);
        // } 
        if(plug_reStartTime.length==8&&plug_reEndTime.length==8){
        	hc_s5=plug_reStartTime.substr(0, 4)+"-"+plug_reStartTime.substr(4, 2)+"-"+plug_reStartTime.substr(6, 2);
        	hc_s6=plug_reEndTime.substr(0, 4)+"-"+plug_reEndTime.substr(4, 2)+"-"+plug_reEndTime.substr(6, 2);
        }else if(!plug_reStartTime.length&&!plug_reEndTime.length){
            hc_s5="";
            hc_s6="";
        }else{
        	alert("请输入正确的报案时间格式,例如：20180101");
        	return false;
        }
        if(plug_outStartTime.length==8&&plug_outEndTime.length==8){
        	hc_s7=plug_outStartTime.substr(0, 4)+"-"+plug_outStartTime.substr(4, 2)+"-"+plug_outStartTime.substr(6, 2);
        	hc_s8=plug_outEndTime.substr(0, 4)+"-"+plug_outEndTime.substr(4, 2)+"-"+plug_outEndTime.substr(6, 2);
        }else if(!plug_outStartTime.length&&!plug_outEndTime.length){
            hc_s7="";
            hc_s8="";
        }else{
        	alert("请输入正确的出险时间格式,例如：20180101");
        	return false;
        }
        $j("#hc_case_result").show();
    	$j("#column_list").html("");
        jsonp.url = server.serverIP + server.api_QueryCaseInfo;
        jsonp.data = {
            //policyNo:encodeURI(policyNo),
            plug_storageID:plug_storageID,
            plug_reporter:plug_reporter,
            plug_reStartTime:hc_s5,
            plug_reEndTime:hc_s6,
            plug_outStartTime:hc_s7,
            plug_outEndTime:hc_s8,
            randomTag:new Date().getTime()
        };
        jsonp.success = function(result){
            // WHHCXW95518BHO_Functions.f_hidePageMaskHint();
            // WHHCXW95518BHO_Functions.f_hidePageMask();
            if(!result.data){
            	return;
            }
            WHHCXW95518BHO_Settings.s_caseInfo.caseinfo =result.data;
            // alert(JSON.stringify(result.data));            
            var plugListHtml="";
            if(result.data.length > 0){
                //如果有返回暂存信息，显示列表
                // WHHCXW95518BHO_Functions.f_createCaseTable();
                // WHHCXW95518BHO_Functions.f_showCaseTable();
		           plugListHtml+= "<table cellspacing='0' cellpadding='0' style='width: 100%;text-align: center;margin-bottom: 20px;'>" +
		            "<tr style='background:#ccc;height:30px;'>" +
		            "<td style='"+WHHCXW95518BHO_Css.c_caseTable_tdBorder_Bottom+"'>选择</td>" +
		            "<td style='"+WHHCXW95518BHO_Css.c_caseTable_tdBorder_Bottom+"'>暂存号</td>" +
		            "<td style='"+WHHCXW95518BHO_Css.c_caseTable_tdBorder_Bottom+"'>报案人</td>" +
		            "<td style='"+WHHCXW95518BHO_Css.c_caseTable_tdBorder_Bottom+"'>导入状态</td>" +
		            "</tr>";
		        for(var i = 0;i<WHHCXW95518BHO_Settings.s_caseInfo.caseinfo.length;i++){
		        	var caseData=WHHCXW95518BHO_Settings.s_caseInfo.caseinfo[i];
		        	var LeadString="";
		        	if(caseData.isLead==1){
		        		LeadString="已导入";
		        	}
		            plugListHtml += "<tr style='"+WHHCXW95518BHO_Css.c_caseTable_trStyle+"'>" +
		                "<td style='"+WHHCXW95518BHO_Css.c_caseTable_tdBorder_Right+"'><input type='radio' value='"+caseData.id+"' name='" + WHHCXW95518BHO_Settings.s_idHeader + ".CaseTableRadio'/></td>" +
		                "<td style='"+WHHCXW95518BHO_Css.c_caseTable_tdBorder_Right+"'>"+caseData.storageID+"</td>" +
		                "<td style='"+WHHCXW95518BHO_Css.c_caseTable_tdBorder_Right+"'>"+caseData.reportorname+"</td>"+
		                "<td style='"+WHHCXW95518BHO_Css.c_caseTable_tdBorder_Right+"'>"+LeadString+"</td></tr>"     
		            }
		            plugListHtml+= "</table>";
              
            } else {
              $j("#column_list").html("");
              plugListHtml='<div id="no_record" style="text-align:center;line-height:40px;">暂无相关信息</div>';  

            }
            $j("#column_list").append(plugListHtml);
        };
        $j.ajax(jsonp);
    },

    /* 点击"导入"按钮，导入案件信息 */
    b_importCaseInfo:function(){
        var server = WHHCXW95518BHO_Settings.s_jsServer;
        var jsonp = new WHHCXW95518BHO_Settings.s_jsonp();
        var id = WHHCXW95518BHO_Functions.f_get.caseId();
        //8.14新增导入时间和导入人处理
        create_user=WHHCXW95518BHO_Functions.f_get.createUser();
        if(id){

        	WHHCXW95518BHO_Settings.s_caseInfo.importCaseId = id; //保存id全局变量
            WHHCXW95518BHO_Functions.f_fillPageData(id);//填充页面html           
        } else {
            alert('请选择一个要导入的暂存案件信息');
        }
    },
    /* 暂存报案信息 */
    b_handleCaseInfo:function(){
    	//alert("进入暂存");
        var server = WHHCXW95518BHO_Settings.s_jsServer;
        var jsonp = new WHHCXW95518BHO_Settings.s_jsonp();
        var handleId = WHHCXW95518BHO_Settings.s_caseInfo.handleCaseId;
        var caseData = WHHCXW95518BHO_Functions.f_getPageData();
        // //9.1新增
        var s1=caseData.reportorname /* 报案人 */
        var s2=caseData.reportornumber/* 报案人电话 */
        var s3=caseData.contacts/* 联系人 */
        var s4=caseData.contactsPhone/* 联系人电话 */
        var s5=caseData.contactsmobile /*联系人手机*/;
        var s6=caseData.damagedate;/*出险日期*/
        var s7=caseData.damagehour/*出险时间*/
        var s8=caseData.relation_ship /*报案人与被保险人关系*/
        var s9=caseData.prp_lregis_damage_code /* 出险原因 */
        var s10=caseData.damage_address_text /* 出险地点 - 出险地址 */  
        if (s1 == "" || s1 == null || s1 == undefined || s1.length < 1) {
            alert("请输入正确的报案人信息");
            return;
        }
        if (s2 == "" || s2 == null || s2 == undefined || s2.length < 1) {
            alert("请输入正确的报案人电话信息");
            return;
        }
        if (s3 == "" || s3 == null || s3 == undefined || s3.length < 1) {
            alert("请输入正确的联系人信息");
            return;
        }
        if (s4 == "" || s4 == null || s4 == undefined || s4.length < 1) {
            alert("请输入正确的联系人电话信息");
            return;
        }
        if (s5 == "" || s5 == null || s5 == undefined || s5.length < 1) {
            alert("请输入正确的联系人手机信息");
            return;
        }
        if (s6 == "" || s6 == null || s6 == undefined || s6.length < 1) {
            alert("请输入正确的出险日期信息");
            return;
        }
        if (s7 == "" || s7 == null || s7 == undefined || s7.length < 1) {
            alert("请输入正确的出险时间信息");
            return;
        }
        if (s8 == "" || s8 == null || s8 == undefined || s8.length < 1) {
            alert("请输入正确的报案人与被保险人关系信息");
            return;
        }
        if (s9 == "" || s9 == null || s9 == undefined || s9.length < 1) {
            alert("请输入正确的出险原因信息");
            return;
        }
        if (s10 == "" || s10 == null || s10 == undefined || s10.length < 1) {
            alert("请输入正确的出险地点信息");
            return;
        }
		var policyno=caseData.policyNo;
		var insurant=caseData.insurant;
		//alert(insurant);
	    var injuredCondition=caseData.per_loss;/*默认人伤条件为是*/
		//alert(injuredCondition);
		//caseData={policyno:"test1111111",reportorname:"test"}
        jsonp.url = server.serverIP + server.api_HandleCaseInfo;
        //jsonp.url ="http://navis.3322.org:7091/api/Public/AddCases"

        jsonp.data = {
            id:handleId,
            policyno:policyno,
            insurant:insurant,
            injuredCondition:injuredCondition,
            CaseInfoData:JSON.stringify(caseData),
            // ThirdCarInfoData:JSON.stringify(thirdCarData),
            // PerLossInfoData:JSON.stringify(perLossData),
            // PollLossInfoData:JSON.stringify(pollLossData),
            randomTag:new Date().getTime()
        };     
        jsonp.success = function(result){   
            if(result.code=="200"){ 
                  alert("暂存成功");
                  document.getElementById('divInputMethod').style.display = 'none';
                  document.getElementById("saveRegistButton").disabled=false;
				  ResetPage();
                            WHHCXW95518BHO_Settings.s_caseInfo.handleCaseId = result.data.caseinfo_id;
                            WHHCXW95518BHO_Settings.s_caseInfo.handleCaseStatus = 1;
                            //暂存状态
                            var tempSpan = document.getElementById('hcxw_dqanzczt');
                            tempSpan.innerText = "已暂存";
                            tempSpan.style.backgroundColor="#ccc"
                            tempSpan.style.color = "#dadada";
                            
				
          //        $j.ajax({
          //           url: 'http://30.4.32.35:5091/api/Public/htmltel',
          //           type: "GET",
          //           data:{telephone:"13554219576"},
          //           success: function (result) {
					     // alert(JSON.stringify(result))
          //               if(result.success){
						 
	         //                console.log("短信发送成功");
                           
          //               }else{
          //                   console.log("短信请求错误");
          //               }

          //           },
          //           error: function (jqXHR, textStatus, errorThrown) {
          //               console.log("短信接口请求错误");
          //           }
          //       });
                  
            }else if(result.code=="10008"){
               alert(result.msg);
            }else{
               alert(result.msg);
            }
        };
		jsonp.error=function(err){
           alert("网络请求错误");
		}
							
		
		   
        $j.ajax(jsonp);
    },
    /* 取消暂存案件 */
    b_cancelHandleCase:function(){
        var server = WHHCXW95518BHO_Settings.s_jsServer;
        var jsonp = new WHHCXW95518BHO_Settings.s_jsonp();
        var handleId = WHHCXW95518BHO_Settings.s_caseInfo.handleCaseId;
        jsonp.url = server.serverIP + server.api_CancelHandleCase;

        jsonp.data = {
            id:handleId,
            randomTag:new Date().getTime()
        };
        jsonp.success = function(result){
            if(result.success){
                //暂存状态

                WHHCXW95518BHO_Settings.s_caseInfo.handleCaseStatus = 0;
                var tempSpan = document.getElementById('hcxw_dqanzczt');
                tempSpan.innerText = "未暂存";
                tempSpan.style.color = "green";
                document.getElementById("saveRegistButton").disabled=false;
                ResetPage();
            } else {
                alert('取消暂存失败，原因未知，请联系信息技术部');
            }
        };
        $j.ajax(jsonp);
    },
    b_closeCaseWindow:function(){
       alert("关闭");
       document.getElementById('prpLregist_remark_DIV').style.display = 'none';
       ResetPage();

    },
    /* 检查是否有资格进行微信查勘 */
    b_weChatGuide:function(){
        try{
            WHHCXW95518BHO_Functions.f_hideCaseTable();
        } catch(e){}

        var policyNo = "";//判断保单号，是否有商业险保单，如果有，则允许微信报案
        var licenseNo = "";//encodeURI(WHHCXW95518BHO_Functions.f_get.licenseNo());
        var policyinfo = WHHCXW95518BHO_Settings.s_caseInfo.policyinfo;
        for(var i = 0;i<policyinfo.length;i++){
            if(policyinfo[i].xzCode == 'DAA' || policyinfo[i].xzCode == 'DAT'){
                policyNo = policyinfo[i].policy_no; //如果有DAA/DAT的保单则是商业保单，记下保单号。取最后一个。
                licenseNo = policyinfo[i].license_no;
            }
        }

        if(policyNo != ""){
            var server = WHHCXW95518BHO_Settings.s_jsServer;
            var jsonp = new WHHCXW95518BHO_Settings.s_jsonp();

            var reportDate = encodeURI(WHHCXW95518BHO_Functions.f_get.reportHour());

            var mobileNo = encodeURI(WHHCXW95518BHO_Functions.f_get.mobileNo());

            var createUser = encodeURI(WHHCXW95518BHO_Functions.f_get.createUser());

//            var data = "?reportDate="+reportDate+"&licenseNo="+licenseNo+"&createUser="+createUser+"&mobileNo="+mobileNo+"&policyNo="+policyNo;

            jsonp.url = server.serverIP + server.api_WeChatGuide;// + data;
            jsonp.data = {
                reportDate:reportDate,
                licenseNo:licenseNo,
                createUser:createUser,
                mobileNo:mobileNo,
                policyNo:policyNo,
                randomTag:new Date().getTime()
            };
            jsonp.success = function(result){
                if(result.data.wechatinfo_status == '-1'){
                    // 如果没权限，则取消遮罩和遮罩提示。
                    // WHHCXW95518BHO_Functions.f_hidePageMaskHint();
                    WHHCXW95518BHO_Functions.f_hidePageMask();
                } else {
                    // WHHCXW95518BHO_Functions.f_hidePageMaskHint();
                    WHHCXW95518BHO_Settings.s_wechatInfo.id = result.data.wechatinfo_id; // 保存微信任务的id到全局变量
                    WHHCXW95518BHO_Functions.f_createWechatMessageWin();
                    WHHCXW95518BHO_Functions.f_showWechatMessageWin(1);
                }
            };

            WHHCXW95518BHO_Functions.f_showPageMaskHint();//显示提示
            $j.ajax(jsonp);//进行ajax查询

        } else {
            WHHCXW95518BHO_Functions.f_hidePageMask();
        }
    },
    b_updateWeChatInfo:function(step,status){
        var server = WHHCXW95518BHO_Settings.s_jsServer;
        var jsonp = new WHHCXW95518BHO_Settings.s_jsonp();

        var id = WHHCXW95518BHO_Settings.s_wechatInfo.id;
//        var data = "?id="+id+"&status="+status;

        jsonp.url = server.serverIP + server.api_UpdateWeChatInfo;// + data;
        jsonp.data = {
            id:id,
            status:status,
            randomTag:new Date().getTime()
        };
        jsonp.success = function(result){
            if(step == 0){
                WHHCXW95518BHO_Functions.f_hideWechatMessageWin();
                WHHCXW95518BHO_Functions.f_hidePageMask();
            } else {
                WHHCXW95518BHO_Functions.f_showWechatMessageWin(step);
            }
        };
        $j.ajax(jsonp);
    },
    /* 获取页面html */
    b_queryPageHTMLById:function(){
        var server = WHHCXW95518BHO_Settings.s_jsServer;
        var jsonp = new WHHCXW95518BHO_Settings.s_jsonp();
        var id = WHHCXW95518BHO_Functions.f_get.caseId();
        jsonp.url = server.serverIP + server.api_QueryPageHTMLById;// + data;
        jsonp.data = {id:id};
        jsonp.success = function(result){
            WHHCXW95518BHO_Functions.f_hidePageMaskHint();//隐藏提示
            WHHCXW95518BHO_Functions.f_hidePageMask();
            WHHCXW95518BHO_Functions.f_fillPageHTML(result.data[0]);
            WHHCXW95518BHO_Functions.f_hideCaseTable();
        };
//            WHHCXW95518BHO_Functions.f_showPageMaskHint();//显示提示
        $j.ajax(jsonp);
    },
    /* 保存页面的HTML到数据库 */
    b_savePageHTML:function(id){
        var server = WHHCXW95518BHO_Settings.s_jsServer;
        var jsonp = new WHHCXW95518BHO_Settings.s_jsonp();
        var policy_no = "";
        var policyinfo = WHHCXW95518BHO_Settings.s_caseInfo.policyinfo;
        for(var i = 0;i<policyinfo.length;i++){
            policy_no += policyinfo[i].policy_no + '/';
        }
        var license_no = WHHCXW95518BHO_Functions.f_get.licenseNo();
        var damage_date = WHHCXW95518BHO_Functions.f_get.damageDate();
        var damage_hour = WHHCXW95518BHO_Functions.f_get.damageHour();
        var report_date = WHHCXW95518BHO_Functions.f_get.reportDate();
        var damage_province_text = WHHCXW95518BHO_Functions.f_get.damageProvinceText();
        var damage_addr_city = WHHCXW95518BHO_Functions.f_get.damageAddrCity();      //有damageAddrCity数据
        var damage_address_text = WHHCXW95518BHO_Functions.f_get.damageAddressQuery();
        var damageAddressQuery=WHHCXW95518BHO_Functions.f_get.damageAddressQuery();
        var remark = WHHCXW95518BHO_Functions.f_get.remark();
        var registinfo = document.getElementById('registinfo').innerHTML;
        var registinfo2 = document.getElementById('registinfo2').innerHTML;
        var registinfo3 = document.getElementById('registinfo3').innerHTML;
        var disposeinfo = document.getElementById('disposeinfo').innerHTML;
        var driverinfo1 = document.getElementById('driverinfo1').innerHTML;
        var driverinfotest = document.getElementById('driverinfotest').innerHTML;
        var damagecourse = document.getElementById('damagecourse').innerHTML;
        var specialdis = document.getElementById('specialdis').innerHTML;
        /*
         var data = "?id="+id+"&policy_no="+encodeURI(policy_no)+"&license_no="+encodeURI(license_no)+"&damage_date="+encodeURI(damage_date)+
         "&damage_hour="+encodeURI(damage_hour)+"&report_date="+encodeURI(report_date)+"&damage_province_text="+encodeURI(damage_province_text)+
         "&damage_addr_city="+encodeURI(damage_addr_city)+"&damage_address_text="+encodeURI(damage_address_text)+"&remark="+encodeURI(remark) +
         "&registinfo=aa"+"&registinfo2=aa"+"&registinfo3=aa"+"&disposeinfo=aa"+"&driverinfo1=aa"+"&driverinfotest=aa"+"&damagecourse=aa"+"&specialdis=aa";
         */
        jsonp.url = server.serverIP + server.api_SavePageHTML;// + data;
        jsonp.data = {
            id:id,
            policy_no:policy_no,
            license_no:license_no,
            damage_date:damage_date,
            damage_hour:damage_hour,
            report_date:report_date,
            damage_province_text:damage_province_text,
            damage_addr_city:damage_addr_city,
//            damage_address_text:damage_address_text,
            damageAddressQuery:damageAddressQuery,
            remark:remark,
            registinfo:registinfo,
            registinfo2:registinfo2,
            registinfo3:registinfo3,
            disposeinfo:disposeinfo,
            driverinfo1:driverinfo1,
            driverinfotest:driverinfotest,
            damagecourse:damagecourse,
            specialdis:specialdis
        };
        jsonp.success = function(result){
//            var caseinfo_id = result.caseinfo_id;
            WHHCXW95518BHO_Functions.f_hidePageMaskHint();
            WHHCXW95518BHO_Functions.f_hidePageMask();
            //暂存页面内容
            /*
             localStorage.setItem('registinfo'+'_'+caseinfo_id,document.getElementById('registinfo').innerHTML);
             localStorage.setItem('registinfo2'+'_'+caseinfo_id,document.getElementById('registinfo2').innerHTML);
             localStorage.setItem('registinfo3'+'_'+caseinfo_id,document.getElementById('registinfo3').innerHTML);
             localStorage.setItem('disposeinfo'+'_'+caseinfo_id,document.getElementById('disposeinfo').innerHTML);
             localStorage.setItem('driverinfo1'+'_'+caseinfo_id,document.getElementById('driverinfo1').innerHTML);
             localStorage.setItem('driverinfotest'+'_'+caseinfo_id,document.getElementById('driverinfotest').innerHTML);
             localStorage.setItem('damagecourse'+'_'+caseinfo_id,document.getElementById('damagecourse').innerHTML);
             localStorage.setItem('specialdis'+'_'+caseinfo_id,document.getElementById('specialdis').innerHTML);
             */
        };
        WHHCXW95518BHO_Functions.f_showPageMask();
        WHHCXW95518BHO_Functions.f_showPageMaskHint();
        $j.ajax(jsonp);
    },

    /* 从数据库读取页面的HTML（更新状态为1） */
    b_loadPageHTML:function(){
        var server = WHHCXW95518BHO_Settings.s_jsServer;
        var jsonp = new WHHCXW95518BHO_Settings.s_jsonp();
        var id = WHHCXW95518BHO_Functions.f_get.caseId();
        if(id){
            WHHCXW95518BHO_Settings.s_caseInfo.importCaseId = id; //保存id全局变量
//            var data = "?id="+id;
            jsonp.url = server.serverIP + server.api_LoadPageHTML;// + data;
            jsonp.data = {id:id};
            jsonp.success = function(result){
//                console.log(result);
                WHHCXW95518BHO_Functions.f_hidePageMaskHint();//隐藏提示
                WHHCXW95518BHO_Functions.f_hidePageMask();
//                WHHCXW95518BHO_Functions.f_fillPageHTML(id,result.data[0]);
                WHHCXW95518BHO_Functions.f_hideCaseTable();
            };
            WHHCXW95518BHO_Functions.f_showPageMaskHint();//显示提示
            $j.ajax(jsonp);
            WHHCXW95518BHO_Business.b_queryPageHTMLById(id);//查询页面html
        } else {
            alert('请选择一个要导入的暂存案件信息');
        }
    }
};

//5.4viewshow

$j(document).ready(function(){
    $j("body").css("overflow-x","hidden");
    //绑定聚焦显示输入法
    document.getElementById("saveRegistButton").disabled=true;
    // var day=new Date();
    // var CurYear=day.getFullYear(); 
    // var CurMonth=day.getMonth() + 1;
    // if(CurMonth<10){
    // 	CurMonth="0"+CurMonth;  
    // }
    // var CurDay=day.getDate();
    // if(CurDay<10){
    // 	CurDay="0"+CurDay;  
    // }
    // var DayString=CurYear+CurMonth+CurDay;
    //document.getElementById('prpLregist.remark').onfocus = function () {
	var headStyle="background:#00bbcc;color:#fff;height:36px;line-height:36px;position:relative;text-align:center";
	var HcxwBtnStyle="background:#00bbcc;padding:5px 18px;display:inline-block;color:#fff;margin:5px 0px;"
	var titleStyle="border-bottom:#00bbcc solid 2px;height:36px;line-height:36px;color:#00bbcc;padding-left:16px;text-align:left";
	var leftStyle="float:left;width:50%;padding:5px 0px";
	var columnList="margin:0px;overflow:hidden;height:40px;padding-left:10px;padding-right:10px;";
	var rightStyle="float:right;width:50%;padding:5px 0px";
	var hcSpanStyle="width:120px;text-align:right!important;display:inline-block;margin-right:5px;padding-bottom:6px!important";
	var hcInputStyle="width:160px;height:30px!important;line-height:30px!important;";
    var	stringHtml='';
        stringHtml+='<div id="divInputMethod" class="zc_layout" style="text-align:left!important;position:absolute;width:606px;right:0px;bottom:0px;background:#fff;padding-bottom:20px;border:#666 solid 1px;border-top:0;">';
	    stringHtml+='<div class="zc_head" style="'+headStyle+'">95518坐席插件<div id="spanCloseInputMethod" style="position:absolute;top:0px;right:2px;width:20px;height:36px;line-height:36px;color:#fff;font-family:"宋体";fontSize:40px;font-weight:bold">x</div></div>';
	    stringHtml+='<div class="zc_body">';
	    stringHtml+='<div class="column_head" style="'+titleStyle+'">保单信息查询</div>';
	    stringHtml+='<div class="column_list" style="'+columnList+'margin-top:10px;">';
	    stringHtml+='<span style="'+hcSpanStyle+'">按暂存号查询:</span><input id="plug_storageID" type="text" style="'+hcInputStyle+'">';
	    stringHtml+='<span style="padding-left:20px;height:30px!important;line-height:30px!important;padding-bottom:6px!important">按报案人查询:</span><input id="plug_reporter" type="text" style="'+hcInputStyle+'margin-left:5px;">';
	    stringHtml+='</div>';
	    stringHtml+='<div class="column_list" style="'+columnList+';margin-top:5px;">';
	    stringHtml+='<span style="'+hcSpanStyle+'">按报案日期查询:</span><input id="plug_reStartTime" type="text"  style="'+hcInputStyle+'">';
	    stringHtml+='<span style="margin-left:10px;height:30px!important;line-height:30px!important;padding-bottom:6px!important">-</span><input id="plug_reEndTime"  type="text" style="'+hcInputStyle+'margin-left:12px;">';
	    stringHtml+='</div>';
	    stringHtml+='<div class="column_list" style="'+columnList+'">';
	    stringHtml+='<span style="'+hcSpanStyle+'">按出险日期查询:</span><input id="plug_outStartTime"  type="text" style="'+hcInputStyle+'">';
	    stringHtml+='<span style="margin-left:10px;height:30px!important;line-height:30px!important;padding-bottom:6px!important">-</span><input id="plug_outEndTime"  type="text" style="'+hcInputStyle+'margin-left:12px;">';
	    stringHtml+='</div>';
	    stringHtml+='<div style="text-align:center"><span style="'+HcxwBtnStyle+'" onclick="WHHCXW95518BHO_Business.b_queryCaseInfo();">查询</span></div>';
	    stringHtml+='<div class="zm_column" id="hc_case_result" style="display:none;overflow:hidden;">';
	    stringHtml+='<div class="column_head" style="'+titleStyle+'">保单查询结果</div>';
	    stringHtml+='<div class="column_list"  style="background:#fff;overflow:hiddden;height:36px;text-align:center;margin-top:10px;height:120px;">';
	    stringHtml+='<ul id="column_list" style="overflow-y:scroll;height:200px;margin-bottom:30px"></ul>'
	    stringHtml+='</div>';
        stringHtml+='</div>';
        stringHtml+='<div class="zc_foot">'
        stringHtml+='<div class="column_list">';
	    stringHtml+='<div class="column_left" style="'+leftStyle+'"><div style="float:right;text-align:center;margin-right:10px;background:#00bbcc;height:30px;width:100px;line-height:30px;color:#fff" onclick="WHHCXW95518BHO_Business.b_handleCaseInfo();" id="hcxw_dqanzczt">案件暂存</div></div>';
	    stringHtml+='<div class="column_right" style="'+rightStyle+'"><div style="float:left;text-align:center;margin-left:10px;background:#00bbcc;height:30px;width:100px;line-height:30px;color:#fff" onclick="WHHCXW95518BHO_Business.b_importCaseInfo()">一键导入</div></div>';
	    stringHtml+='</div>';
        stringHtml+='</div>';
        stringHtml+='</div>';

        $j("body").append(stringHtml);
        document.getElementById('spanCloseInputMethod').onclick = function () {
            document.getElementById('divInputMethod').style.display = 'none';
            document.getElementById("saveRegistButton").disabled=false;
            ResetPage();

        };
    //};

});
function stopDefault(e) {
    if (e && e.preventDefault) {//如果是FF下执行这个
        e.preventDefault();
    } else {
        window.event.returnValue = false;//如果是IE下执行这个
    }
    return false;
}

var Obj = {};
Obj.aa = 0;
Obj.aId = "";
Obj.bb = 0;
Obj.bId = "";
Obj.ipmTop = 0;
var hiddenCar = -2;
var hiddenStore = -2;
//重写trim()
String.prototype.trim = function () {
    return this.replace(/(^\s*)|(\s*$)/g, '');
};
/*重置*/
function ResetPage() {
    Obj.aa = 0;
    Obj.aId = "";
    Obj.bb = 0;
    Obj.bId = "";
    hiddenCar = -2;
    hiddenStore = -2;
    $j("#CarNameList").html("");
    $j("#TCarNameList").html("");
    $j("#CarName").val(" ");
    $j("#TCarName").val(" ");
    $j("#TCarNameData").hide();
    $j("#CarNameData").hide();

    $j("#city-picker").val(-1);
    $j("#Tcity-picker").val(-1);

    $j("#CarStore").hide();
    arriveStore1 = 0;
    $j("#threeCarStore").hide();
    TarriveStore1 = 0;

    // document.getElementById('three1').style.background = "white";
    // document.getElementById('three2').style.background = "#0ab";

    stopDefault(window.event);
}

/*获取车商名称*/
function changeCarName() {
    $j("#CarNameList").html("");
    $j("#CarNameData").show();
    var CarNameList = $j("#CarNameList");

    var bb = $j("#city-picker").val().toString().trim();

    var aa = $j("#CarName").val().toString().trim();

    var params = {
        "keyword": aa,
        "area3code": bb
    };

    hiddenStore = -2;

    funJsonp(params, function (result) {
        for (var i = 0; i < result.length; i++) {
            CarNameList.append("<li " +
                "style='margin: 0!important;padding: 0!important;" +
                "list-style-type: none;height: 30px;" +
                "line-height: 30px;overflow:auto;width: 100%;" +
                "z-index: 9999999999999;' " +
                "id='CarNameList_" + result[i].dealerId + "' " +
                "onmouseover='onMouseOverEventCarNameList(this.id)' " +
                "onmouseout='onMouseOutEventCarNameList(this.id)' " +
                "onclick='showCarname_new(\"" + result[i].dealername + "\"," + result[i].dealerId + ")'>" + result[i].dealername + "</li>");
        }
    });
}

function TchangeCarName() {
    $j("#TCarNameList").html("");
    $j("#TCarNameData").show();
    var CarNameList = $j("#TCarNameList");

    var bb = $j("#Tcity-picker").val().toString().trim();

    var aa = $j("#TCarName").val().toString().trim();

    var params = {
        "keyword": aa,
        "area3code": bb
    };

    hiddenStore = -2;

    funJsonp(params, function (result) {
            for (var i = 0; i < result.length; i++) {
                CarNameList.append("<li " +
                    "style='margin: 0!important;padding: 0!important;" +
                    "list-style-type: none;height: 30px;" +
                    "line-height: 30px;overflow:auto;width: 100%;" +
                    "z-index: 9999999999999;' " +
                    "id='TCarNameList_" + result[i].dealerId + "' " +
                    "onmouseover='onMouseOverEventCarNameList(this.id)' " +
                    "onmouseout='onMouseOutEventCarNameList(this.id)' " +
                    "onclick='TshowCarname_new(\"" + result[i].dealername + "\"," + result[i].dealerId + ")'>" + result[i].dealername + "</li>");
            }
        }
    );
}

function onMouseOverEventCarNameList(id) {
    document.getElementById(id).style.background = "#349AFD";
}

function onMouseOutEventCarNameList(id) {
    document.getElementById(id).style.background = "#D1D0CE";
}

function showCarname_new(info, dealerId) {
    $j("#CarName").val(info);
    $j("#CarNameData").hide();
    //Obj.aId = dealerId;

    //根据讨论现在修改为获取车商名称
    Obj.aId = "名称-" + info + "-ID-" + dealerId;

    stopDefault(window.event);
}

function TshowCarname_new(info, dealerId) {
    $j("#TCarName").val(info);
    $j("#TCarNameData").hide();
    //Obj.bId = dealerId;

    //根据讨论现在修改为获取车商名称
    Obj.bId = "名称-" + info + "-ID-" + dealerId;

    stopDefault(window.event);
}

/*是否到店*/
var arriveStore1 = 0;

function arriveStoreCar(num) {
    $j("#CarName").val(" ");
    if (num == 0) {
        arriveStore1 = 0;
        Obj.aa = 0;
        $j("#CarStore").hide();
        Obj.CarCode = '';
        $j("#city-picker").val(-1);
        document.getElementById('arrive1').style.background = "white";
        document.getElementById('arrive2').style.background = "#0ab";
    } else if (num == 1) {
        arriveStore1 = 1;
        Obj.aa = 1;
        $j("#CarStore").show();
        $j("#city-picker").val(-1);
        document.getElementById('arrive1').style.background = "#0ab";
        document.getElementById('arrive2').style.background = "white";
    }
    stopDefault(window.event);
}

var TarriveStore1 = 0;

function threeArriveStoreCar(n) {
    $j("#TCarName").val(" ");
    if (n == 0) {
        TarriveStore1 = 0;
        Obj.bb = 0;
        $j("#threeCarStore").hide();
        Obj.CarCode = '';
        $j("#Tcity-picker").val(-1);
        document.getElementById('three1').style.background = "white";
        document.getElementById('three2').style.background = "#0ab";
    } else if (n == 1) {
        TarriveStore1 = 1;
        Obj.bb = 1;
        $j("#threeCarStore").show();
        $j("#Tcity-picker").val(-1);
        document.getElementById('three1').style.background = "#0ab";
        document.getElementById('three2').style.background = "white";
    }
    stopDefault(window.event);
}

function insertInputMethodValue() {

//    alert('暂存啦');
//    WHHCXW95518BHO_Business.b_handleCaseInfo();
//    stopDefault(window.event);
//    return false;

    //if (Obj.aa == 0) {
    //    Obj.aId = '';
    //}
    //if (Obj.bb == 0) {
    //    Obj.bId = '';
    //}

    if (Obj.aa == 0) {
        Obj.aId = '';
        Obj.aa = '';
    }

    if (Obj.aa == 1) {
        //Obj.aId = '';
        Obj.aa = '事故车到店';
    }

    if (Obj.bb == 0) {
        Obj.bId = '';
        Obj.bb = '';
    }

    if (Obj.bb == 1) {
        //Obj.bId = '';
        Obj.bb = '三者车到店';
    }

    var imValue = "#" + Obj.aa + "##" + Obj.aId + "##" + Obj.bb + "##" + Obj.bId + "#";
    //    imValue = "#1##234##1##567#";
    var pr = document.getElementById('prpLregist.remark');

    var prValue = pr.value;
    var prIndex = prValue.indexOf('#');
    if (prIndex == -1) {
        pr.value = prValue + imValue;
    } else {
        var prSubstr = prValue.substr(0, prIndex);
        pr.value = prSubstr + imValue;
    }
    stopDefault(window.event);
}


/* div拖动 */
// by zhangxinxu welcome to visit my personal website http://www.zhangxinxu.com/
// zxx.drag v1.0 2010-03-23 元素的拖拽实现

var params = {
    left: 0,
    top: 0,
    currentX: 0,
    currentY: 0,
    flag: false
};
//获取相关CSS属性
var getCss = function (o, key) {
    return o.currentStyle ? o.currentStyle[key] : document.defaultView.getComputedStyle(o, false)[key];
};

//拖拽的实现
var startDrag = function (bar, target, callback) {
    if (getCss(target, "left") !== "auto") {
        params.left = getCss(target, "left");
    }
    if (getCss(target, "top") !== "auto") {
        params.top = getCss(target, "top");
    }
    //o是移动对象
    bar.onmousedown = function (event) {
        params.flag = true;
        if (!event) {
            event = window.event;
            //防止IE文字选中
            bar.onselectstart = function () {
                return false;
            }
        }
        var e = event;
        params.currentX = e.clientX;
        params.currentY = e.clientY;
    };
    document.onmouseup = function () {
        params.flag = false;
        if (getCss(target, "left") !== "auto") {
            params.left = getCss(target, "left");
        }
        if (getCss(target, "top") !== "auto") {
            params.top = getCss(target, "top");
        }
    };
    document.onmousemove = function (event) {
        var e = event ? event : window.event;
        if (params.flag) {
            var nowX = e.clientX, nowY = e.clientY;
            var disX = nowX - params.currentX, disY = nowY - params.currentY;
            target.style.left = parseInt(params.left) + disX + "px";
            target.style.top = parseInt(params.top) + disY + "px";
        }

        if (typeof callback == "function") {
            callback(parseInt(params.left) + disX, parseInt(params.top) + disY);
        }
    }
};