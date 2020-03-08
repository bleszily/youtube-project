import{u as e,i as t,c as n,N as s,F as r,e as i,t as l,f as a,g as o,a as c,d as h,S as u}from"./index-6a55ee4f.js";import{L as p}from"./ListErrors-03232e5f.js";var d=function(e,t){return e(t={exports:{}},t.exports),t.exports}((function(e){function t(){return{baseUrl:null,breaks:!1,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartLists:!1,smartypants:!1,xhtml:!1}}e.exports={defaults:{baseUrl:null,breaks:!1,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartLists:!1,smartypants:!1,xhtml:!1},getDefaults:t,changeDefaults:function(t){e.exports.defaults=t}}}));d.defaults,d.getDefaults,d.changeDefaults;const g=/[&<>"']/,f=/[&<>"']/g,m=/[<>"']|&(?!#?\w+;)/,b=/[<>"']|&(?!#?\w+;)/g,k={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},x=e=>k[e];const _=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi;function v(e){return e.replace(_,(e,t)=>"colon"===(t=t.toLowerCase())?":":"#"===t.charAt(0)?"x"===t.charAt(1)?String.fromCharCode(parseInt(t.substring(2),16)):String.fromCharCode(+t.substring(1)):"")}const y=/(^|[^\[])\^/g;const $=/[^\w:]/g,w=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;const S={},C=/^[^:]+:\/*[^/]*$/,z=/^([^:]+:)[\s\S]*$/,A=/^([^:]+:\/*[^/]*)[\s\S]*$/;function R(e,t){S[" "+e]||(C.test(e)?S[" "+e]=e+"/":S[" "+e]=L(e,"/",!0));const n=-1===(e=S[" "+e]).indexOf(":");return"//"===t.substring(0,2)?n?t:e.replace(z,"$1")+t:"/"===t.charAt(0)?n?t:e.replace(A,"$1")+t:e+t}function L(e,t,n){const s=e.length;if(0===s)return"";let r=0;for(;r<s;){const i=e.charAt(s-r-1);if(i!==t||n){if(i===t||!n)break;r++}else r++}return e.substr(0,s-r)}var Z={escape:function(e,t){if(t){if(g.test(e))return e.replace(f,x)}else if(m.test(e))return e.replace(b,x);return e},unescape:v,edit:function(e,t){e=e.source||e,t=t||"";const n={replace:(t,s)=>(s=(s=s.source||s).replace(y,"$1"),e=e.replace(t,s),n),getRegex:()=>new RegExp(e,t)};return n},cleanUrl:function(e,t,n){if(e){let e;try{e=decodeURIComponent(v(n)).replace($,"").toLowerCase()}catch(e){return null}if(0===e.indexOf("javascript:")||0===e.indexOf("vbscript:")||0===e.indexOf("data:"))return null}t&&!w.test(n)&&(n=R(t,n));try{n=encodeURI(n).replace(/%25/g,"%")}catch(e){return null}return n},resolveUrl:R,noopTest:{exec:function(){}},merge:function(e){let t,n,s=1;for(;s<arguments.length;s++)for(n in t=arguments[s],t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},splitCells:function(e,t){const n=e.replace(/\|/g,(e,t,n)=>{let s=!1,r=t;for(;--r>=0&&"\\"===n[r];)s=!s;return s?"|":" |"}).split(/ \|/);let s=0;if(n.length>t)n.splice(t);else for(;n.length<t;)n.push("");for(;s<n.length;s++)n[s]=n[s].trim().replace(/\\\|/g,"|");return n},rtrim:L,findClosingBracket:function(e,t){if(-1===e.indexOf(t[1]))return-1;const n=e.length;let s=0,r=0;for(;r<n;r++)if("\\"===e[r])r++;else if(e[r]===t[0])s++;else if(e[r]===t[1]&&(s--,s<0))return r;return-1},checkSanitizeDeprecation:function(e){e&&e.sanitize&&!e.silent&&console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options")}};const{noopTest:D,edit:q,merge:U}=Z,N={newline:/^\n+/,code:/^( {4}[^\n]+\n*)+/,fences:/^ {0,3}(`{3,}|~{3,})([^`~\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?:\n+|$)|$)/,hr:/^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6}) +([^\n]*?)(?: +#+)? *(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3})(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,html:"^ {0,3}(?:<(script|pre|style)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?\\?>\\n*|<![A-Z][\\s\\S]*?>\\n*|<!\\[CDATA\\[[\\s\\S]*?\\]\\]>\\n*|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:\\n{2,}|$)|<(?!script|pre|style)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$)|</(?!script|pre|style)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$))",def:/^ {0,3}\[(label)\]: *\n? *<?([^\s>]+)>?(?:(?: +\n? *| *\n *)(title))? *(?:\n+|$)/,nptable:D,table:D,lheading:/^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,_paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html)[^\n]+)*)/,text:/^[^\n]+/,_label:/(?!\s*\])(?:\\[\[\]]|[^\[\]])+/,_title:/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/};N.def=q(N.def).replace("label",N._label).replace("title",N._title).getRegex(),N.bullet=/(?:[*+-]|\d{1,9}\.)/,N.item=/^( *)(bull) ?[^\n]*(?:\n(?!\1bull ?)[^\n]*)*/,N.item=q(N.item,"gm").replace(/bull/g,N.bullet).getRegex(),N.list=q(N.list).replace(/bull/g,N.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+N.def.source+")").getRegex(),N._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",N._comment=/<!--(?!-?>)[\s\S]*?-->/,N.html=q(N.html,"i").replace("comment",N._comment).replace("tag",N._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),N.paragraph=q(N._paragraph).replace("hr",N.hr).replace("heading"," {0,3}#{1,6} +").replace("|lheading","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}|~{3,})[^`\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)").replace("tag",N._tag).getRegex(),N.blockquote=q(N.blockquote).replace("paragraph",N.paragraph).getRegex(),N.normal=U({},N),N.gfm=U({},N.normal,{nptable:/^ *([^|\n ].*\|.*)\n *([-:]+ *\|[-| :]*)(?:\n((?:.*[^>\n ].*(?:\n|$))*)\n*|$)/,table:/^ *\|(.+)\n *\|?( *[-:]+[-| :]*)(?:\n((?: *[^>\n ].*(?:\n|$))*)\n*|$)/}),N.pedantic=U({},N.normal,{html:q("^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))").replace("comment",N._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^ *(#{1,6}) *([^\n]+?) *(?:#+ *)?(?:\n+|$)/,fences:D,paragraph:q(N.normal._paragraph).replace("hr",N.hr).replace("heading"," *#{1,6} *[^\n]").replace("lheading",N.lheading).replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").getRegex()});const O={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:D,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(?!\s*\])((?:\\[\[\]]?|[^\[\]\\])+)\]/,nolink:/^!?\[(?!\s*\])((?:\[[^\[\]]*\]|\\[\[\]]|[^\[\]])*)\](?:\[\])?/,strong:/^__([^\s_])__(?!_)|^\*\*([^\s*])\*\*(?!\*)|^__([^\s][\s\S]*?[^\s])__(?!_)|^\*\*([^\s][\s\S]*?[^\s])\*\*(?!\*)/,em:/^_([^\s_])_(?!_)|^\*([^\s*<\[])\*(?!\*)|^_([^\s<][\s\S]*?[^\s_])_(?!_|[^\spunctuation])|^_([^\s_<][\s\S]*?[^\s])_(?!_|[^\spunctuation])|^\*([^\s<"][\s\S]*?[^\s\*])\*(?!\*|[^\spunctuation])|^\*([^\s*"<\[][\s\S]*?[^\s])\*(?!\*)/,code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:D,text:/^(`+|[^`])(?:[\s\S]*?(?:(?=[\\<!\[`*]|\b_|$)|[^ ](?= {2,}\n))|(?= {2,}\n))/,_punctuation:"!\"#$%&'()*+,\\-./:;<=>?@\\[^_{|}~"};O.em=q(O.em).replace(/punctuation/g,O._punctuation).getRegex(),O._escapes=/\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g,O._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/,O._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/,O.autolink=q(O.autolink).replace("scheme",O._scheme).replace("email",O._email).getRegex(),O._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/,O.tag=q(O.tag).replace("comment",N._comment).replace("attribute",O._attribute).getRegex(),O._label=/(?:\[[^\[\]]*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,O._href=/<(?:\\[<>]?|[^\s<>\\])*>|[^\s\x00-\x1f]*/,O._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/,O.link=q(O.link).replace("label",O._label).replace("href",O._href).replace("title",O._title).getRegex(),O.reflink=q(O.reflink).replace("label",O._label).getRegex(),O.normal=U({},O),O.pedantic=U({},O.normal,{strong:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,em:/^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/,link:q(/^!?\[(label)\]\((.*?)\)/).replace("label",O._label).getRegex(),reflink:q(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",O._label).getRegex()}),O.gfm=U({},O.normal,{escape:q(O.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,del:/^~+(?=\S)([\s\S]*?\S)~+/,text:/^(`+|[^`])(?:[\s\S]*?(?:(?=[\\<!\[`*~]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))|(?= {2,}\n|[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))/}),O.gfm.url=q(O.gfm.url,"i").replace("email",O.gfm._extended_email).getRegex(),O.breaks=U({},O.gfm,{br:q(O.br).replace("{2,}","*").getRegex(),text:q(O.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()});var E={block:N,inline:O};const{defaults:T}=d,{block:P}=E,{rtrim:I,splitCells:j,escape:B}=Z;var M=class e{constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||T,this.rules=P.normal,this.options.pedantic?this.rules=P.pedantic:this.options.gfm&&(this.rules=P.gfm)}static get rules(){return P}static lex(t,n){return new e(n).lex(t)}lex(e){return e=e.replace(/\r\n|\r/g,"\n").replace(/\t/g,"    "),this.token(e,!0)}token(e,t){let n,s,r,i,l,a,o,c,h,u,p,d,g,f,m,b;for(e=e.replace(/^ +$/gm,"");e;)if((r=this.rules.newline.exec(e))&&(e=e.substring(r[0].length),r[0].length>1&&this.tokens.push({type:"space"})),r=this.rules.code.exec(e)){const t=this.tokens[this.tokens.length-1];e=e.substring(r[0].length),t&&"paragraph"===t.type?t.text+="\n"+r[0].trimRight():(r=r[0].replace(/^ {4}/gm,""),this.tokens.push({type:"code",codeBlockStyle:"indented",text:this.options.pedantic?r:I(r,"\n")}))}else if(r=this.rules.fences.exec(e))e=e.substring(r[0].length),this.tokens.push({type:"code",lang:r[2]?r[2].trim():r[2],text:r[3]||""});else if(r=this.rules.heading.exec(e))e=e.substring(r[0].length),this.tokens.push({type:"heading",depth:r[1].length,text:r[2]});else if((r=this.rules.nptable.exec(e))&&(a={type:"table",header:j(r[1].replace(/^ *| *\| *$/g,"")),align:r[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:r[3]?r[3].replace(/\n$/,"").split("\n"):[]},a.header.length===a.align.length)){for(e=e.substring(r[0].length),p=0;p<a.align.length;p++)/^ *-+: *$/.test(a.align[p])?a.align[p]="right":/^ *:-+: *$/.test(a.align[p])?a.align[p]="center":/^ *:-+ *$/.test(a.align[p])?a.align[p]="left":a.align[p]=null;for(p=0;p<a.cells.length;p++)a.cells[p]=j(a.cells[p],a.header.length);this.tokens.push(a)}else if(r=this.rules.hr.exec(e))e=e.substring(r[0].length),this.tokens.push({type:"hr"});else if(r=this.rules.blockquote.exec(e))e=e.substring(r[0].length),this.tokens.push({type:"blockquote_start"}),r=r[0].replace(/^ *> ?/gm,""),this.token(r,t),this.tokens.push({type:"blockquote_end"});else if(r=this.rules.list.exec(e)){for(e=e.substring(r[0].length),i=r[2],f=i.length>1,o={type:"list_start",ordered:f,start:f?+i:"",loose:!1},this.tokens.push(o),r=r[0].match(this.rules.item),c=[],n=!1,g=r.length,p=0;p<g;p++)a=r[p],u=a.length,a=a.replace(/^ *([*+-]|\d+\.) */,""),~a.indexOf("\n ")&&(u-=a.length,a=this.options.pedantic?a.replace(/^ {1,4}/gm,""):a.replace(new RegExp("^ {1,"+u+"}","gm"),"")),p!==g-1&&(l=P.bullet.exec(r[p+1])[0],(i.length>1?1===l.length:l.length>1||this.options.smartLists&&l!==i)&&(e=r.slice(p+1).join("\n")+e,p=g-1)),s=n||/\n\n(?!\s*$)/.test(a),p!==g-1&&(n="\n"===a.charAt(a.length-1),s||(s=n)),s&&(o.loose=!0),m=/^\[[ xX]\] /.test(a),b=void 0,m&&(b=" "!==a[1],a=a.replace(/^\[[ xX]\] +/,"")),h={type:"list_item_start",task:m,checked:b,loose:s},c.push(h),this.tokens.push(h),this.token(a,!1),this.tokens.push({type:"list_item_end"});if(o.loose)for(g=c.length,p=0;p<g;p++)c[p].loose=!0;this.tokens.push({type:"list_end"})}else if(r=this.rules.html.exec(e))e=e.substring(r[0].length),this.tokens.push({type:this.options.sanitize?"paragraph":"html",pre:!this.options.sanitizer&&("pre"===r[1]||"script"===r[1]||"style"===r[1]),text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(r[0]):B(r[0]):r[0]});else if(t&&(r=this.rules.def.exec(e)))e=e.substring(r[0].length),r[3]&&(r[3]=r[3].substring(1,r[3].length-1)),d=r[1].toLowerCase().replace(/\s+/g," "),this.tokens.links[d]||(this.tokens.links[d]={href:r[2],title:r[3]});else if((r=this.rules.table.exec(e))&&(a={type:"table",header:j(r[1].replace(/^ *| *\| *$/g,"")),align:r[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:r[3]?r[3].replace(/\n$/,"").split("\n"):[]},a.header.length===a.align.length)){for(e=e.substring(r[0].length),p=0;p<a.align.length;p++)/^ *-+: *$/.test(a.align[p])?a.align[p]="right":/^ *:-+: *$/.test(a.align[p])?a.align[p]="center":/^ *:-+ *$/.test(a.align[p])?a.align[p]="left":a.align[p]=null;for(p=0;p<a.cells.length;p++)a.cells[p]=j(a.cells[p].replace(/^ *\| *| *\| *$/g,""),a.header.length);this.tokens.push(a)}else if(r=this.rules.lheading.exec(e))e=e.substring(r[0].length),this.tokens.push({type:"heading",depth:"="===r[2].charAt(0)?1:2,text:r[1]});else if(t&&(r=this.rules.paragraph.exec(e)))e=e.substring(r[0].length),this.tokens.push({type:"paragraph",text:"\n"===r[1].charAt(r[1].length-1)?r[1].slice(0,-1):r[1]});else if(r=this.rules.text.exec(e))e=e.substring(r[0].length),this.tokens.push({type:"text",text:r[0]});else if(e)throw new Error("Infinite loop on byte: "+e.charCodeAt(0));return this.tokens}};const{defaults:F}=d,{cleanUrl:X,escape:G}=Z;var H=class{constructor(e){this.options=e||F}code(e,t,n){const s=(t||"").match(/\S*/)[0];if(this.options.highlight){const t=this.options.highlight(e,s);null!=t&&t!==e&&(n=!0,e=t)}return s?'<pre><code class="'+this.options.langPrefix+G(s,!0)+'">'+(n?e:G(e,!0))+"</code></pre>\n":"<pre><code>"+(n?e:G(e,!0))+"</code></pre>"}blockquote(e){return"<blockquote>\n"+e+"</blockquote>\n"}html(e){return e}heading(e,t,n,s){return this.options.headerIds?"<h"+t+' id="'+this.options.headerPrefix+s.slug(n)+'">'+e+"</h"+t+">\n":"<h"+t+">"+e+"</h"+t+">\n"}hr(){return this.options.xhtml?"<hr/>\n":"<hr>\n"}list(e,t,n){const s=t?"ol":"ul";return"<"+s+(t&&1!==n?' start="'+n+'"':"")+">\n"+e+"</"+s+">\n"}listitem(e){return"<li>"+e+"</li>\n"}checkbox(e){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox"'+(this.options.xhtml?" /":"")+"> "}paragraph(e){return"<p>"+e+"</p>\n"}table(e,t){return t&&(t="<tbody>"+t+"</tbody>"),"<table>\n<thead>\n"+e+"</thead>\n"+t+"</table>\n"}tablerow(e){return"<tr>\n"+e+"</tr>\n"}tablecell(e,t){const n=t.header?"th":"td";return(t.align?"<"+n+' align="'+t.align+'">':"<"+n+">")+e+"</"+n+">\n"}strong(e){return"<strong>"+e+"</strong>"}em(e){return"<em>"+e+"</em>"}codespan(e){return"<code>"+e+"</code>"}br(){return this.options.xhtml?"<br/>":"<br>"}del(e){return"<del>"+e+"</del>"}link(e,t,n){if(null===(e=X(this.options.sanitize,this.options.baseUrl,e)))return n;let s='<a href="'+G(e)+'"';return t&&(s+=' title="'+t+'"'),s+=">"+n+"</a>",s}image(e,t,n){if(null===(e=X(this.options.sanitize,this.options.baseUrl,e)))return n;let s='<img src="'+e+'" alt="'+n+'"';return t&&(s+=' title="'+t+'"'),s+=this.options.xhtml?"/>":">",s}text(e){return e}},V=class{constructor(){this.seen={}}slug(e){let t=e.toLowerCase().trim().replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,"").replace(/\s/g,"-");if(this.seen.hasOwnProperty(t)){const e=t;do{this.seen[e]++,t=e+"-"+this.seen[e]}while(this.seen.hasOwnProperty(t))}return this.seen[t]=0,t}};const{defaults:W}=d,{inline:J}=E,{findClosingBracket:K,escape:Q}=Z;var Y=class e{constructor(e,t){if(this.options=t||W,this.links=e,this.rules=J.normal,this.options.renderer=this.options.renderer||new H,this.renderer=this.options.renderer,this.renderer.options=this.options,!this.links)throw new Error("Tokens array requires a `links` property.");this.options.pedantic?this.rules=J.pedantic:this.options.gfm&&(this.options.breaks?this.rules=J.breaks:this.rules=J.gfm)}static get rules(){return J}static output(t,n,s){return new e(n,s).output(t)}output(t){let n,s,r,i,l,a,o="";for(;t;)if(l=this.rules.escape.exec(t))t=t.substring(l[0].length),o+=Q(l[1]);else if(l=this.rules.tag.exec(t))!this.inLink&&/^<a /i.test(l[0])?this.inLink=!0:this.inLink&&/^<\/a>/i.test(l[0])&&(this.inLink=!1),!this.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(l[0])?this.inRawBlock=!0:this.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(l[0])&&(this.inRawBlock=!1),t=t.substring(l[0].length),o+=this.options.sanitize?this.options.sanitizer?this.options.sanitizer(l[0]):Q(l[0]):l[0];else if(l=this.rules.link.exec(t)){const s=K(l[2],"()");if(s>-1){const e=(0===l[0].indexOf("!")?5:4)+l[1].length+s;l[2]=l[2].substring(0,s),l[0]=l[0].substring(0,e).trim(),l[3]=""}t=t.substring(l[0].length),this.inLink=!0,r=l[2],this.options.pedantic?(n=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(r),n?(r=n[1],i=n[3]):i=""):i=l[3]?l[3].slice(1,-1):"",r=r.trim().replace(/^<([\s\S]*)>$/,"$1"),o+=this.outputLink(l,{href:e.escapes(r),title:e.escapes(i)}),this.inLink=!1}else if((l=this.rules.reflink.exec(t))||(l=this.rules.nolink.exec(t))){if(t=t.substring(l[0].length),n=(l[2]||l[1]).replace(/\s+/g," "),n=this.links[n.toLowerCase()],!n||!n.href){o+=l[0].charAt(0),t=l[0].substring(1)+t;continue}this.inLink=!0,o+=this.outputLink(l,n),this.inLink=!1}else if(l=this.rules.strong.exec(t))t=t.substring(l[0].length),o+=this.renderer.strong(this.output(l[4]||l[3]||l[2]||l[1]));else if(l=this.rules.em.exec(t))t=t.substring(l[0].length),o+=this.renderer.em(this.output(l[6]||l[5]||l[4]||l[3]||l[2]||l[1]));else if(l=this.rules.code.exec(t))t=t.substring(l[0].length),o+=this.renderer.codespan(Q(l[2].trim(),!0));else if(l=this.rules.br.exec(t))t=t.substring(l[0].length),o+=this.renderer.br();else if(l=this.rules.del.exec(t))t=t.substring(l[0].length),o+=this.renderer.del(this.output(l[1]));else if(l=this.rules.autolink.exec(t))t=t.substring(l[0].length),"@"===l[2]?(s=Q(this.mangle(l[1])),r="mailto:"+s):(s=Q(l[1]),r=s),o+=this.renderer.link(r,null,s);else if(this.inLink||!(l=this.rules.url.exec(t))){if(l=this.rules.text.exec(t))t=t.substring(l[0].length),this.inRawBlock?o+=this.renderer.text(this.options.sanitize?this.options.sanitizer?this.options.sanitizer(l[0]):Q(l[0]):l[0]):o+=this.renderer.text(Q(this.smartypants(l[0])));else if(t)throw new Error("Infinite loop on byte: "+t.charCodeAt(0))}else{if("@"===l[2])s=Q(l[0]),r="mailto:"+s;else{do{a=l[0],l[0]=this.rules._backpedal.exec(l[0])[0]}while(a!==l[0]);s=Q(l[0]),r="www."===l[1]?"http://"+s:s}t=t.substring(l[0].length),o+=this.renderer.link(r,null,s)}return o}static escapes(t){return t?t.replace(e.rules._escapes,"$1"):t}outputLink(e,t){const n=t.href,s=t.title?Q(t.title):null;return"!"!==e[0].charAt(0)?this.renderer.link(n,s,this.output(e[1])):this.renderer.image(n,s,Q(e[1]))}smartypants(e){return this.options.smartypants?e.replace(/---/g,"—").replace(/--/g,"–").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1‘").replace(/'/g,"’").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1“").replace(/"/g,"”").replace(/\.{3}/g,"…"):e}mangle(e){if(!this.options.mangle)return e;const t=e.length;let n,s="",r=0;for(;r<t;r++)n=e.charCodeAt(r),Math.random()>.5&&(n="x"+n.toString(16)),s+="&#"+n+";";return s}},ee=class{strong(e){return e}em(e){return e}codespan(e){return e}del(e){return e}text(e){return e}link(e,t,n){return""+n}image(e,t,n){return""+n}br(){return""}};const{defaults:te}=d,{merge:ne,unescape:se}=Z;var re=class e{constructor(e){this.tokens=[],this.token=null,this.options=e||te,this.options.renderer=this.options.renderer||new H,this.renderer=this.options.renderer,this.renderer.options=this.options,this.slugger=new V}static parse(t,n){return new e(n).parse(t)}parse(e){this.inline=new Y(e.links,this.options),this.inlineText=new Y(e.links,ne({},this.options,{renderer:new ee})),this.tokens=e.reverse();let t="";for(;this.next();)t+=this.tok();return t}next(){return this.token=this.tokens.pop(),this.token}peek(){return this.tokens[this.tokens.length-1]||0}parseText(){let e=this.token.text;for(;"text"===this.peek().type;)e+="\n"+this.next().text;return this.inline.output(e)}tok(){let e="";switch(this.token.type){case"space":return"";case"hr":return this.renderer.hr();case"heading":return this.renderer.heading(this.inline.output(this.token.text),this.token.depth,se(this.inlineText.output(this.token.text)),this.slugger);case"code":return this.renderer.code(this.token.text,this.token.lang,this.token.escaped);case"table":{let t,n,s,r,i="";for(s="",t=0;t<this.token.header.length;t++)s+=this.renderer.tablecell(this.inline.output(this.token.header[t]),{header:!0,align:this.token.align[t]});for(i+=this.renderer.tablerow(s),t=0;t<this.token.cells.length;t++){for(n=this.token.cells[t],s="",r=0;r<n.length;r++)s+=this.renderer.tablecell(this.inline.output(n[r]),{header:!1,align:this.token.align[r]});e+=this.renderer.tablerow(s)}return this.renderer.table(i,e)}case"blockquote_start":for(e="";"blockquote_end"!==this.next().type;)e+=this.tok();return this.renderer.blockquote(e);case"list_start":{e="";const t=this.token.ordered,n=this.token.start;for(;"list_end"!==this.next().type;)e+=this.tok();return this.renderer.list(e,t,n)}case"list_item_start":{e="";const t=this.token.loose,n=this.token.checked,s=this.token.task;if(this.token.task)if(t)if("text"===this.peek().type){const e=this.peek();e.text=this.renderer.checkbox(n)+" "+e.text}else this.tokens.push({type:"text",text:this.renderer.checkbox(n)});else e+=this.renderer.checkbox(n);for(;"list_item_end"!==this.next().type;)e+=t||"text"!==this.token.type?this.tok():this.parseText();return this.renderer.listitem(e,s,n)}case"html":return this.renderer.html(this.token.text);case"paragraph":return this.renderer.paragraph(this.inline.output(this.token.text));case"text":return this.renderer.paragraph(this.parseText());default:{const e='Token with "'+this.token.type+'" type was not found.';if(!this.options.silent)throw new Error(e);console.log(e)}}}};const{merge:ie,checkSanitizeDeprecation:le,escape:ae}=Z,{getDefaults:oe,changeDefaults:ce,defaults:he}=d;function ue(e,t,n){if(null==e)throw new Error("marked(): input parameter is undefined or null");if("string"!=typeof e)throw new Error("marked(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected");if(n||"function"==typeof t){n||(n=t,t=null),t=ie({},ue.defaults,t||{}),le(t);const s=t.highlight;let r,i,l=0;try{r=M.lex(e,t)}catch(e){return n(e)}i=r.length;const a=function(e){if(e)return t.highlight=s,n(e);let i;try{i=re.parse(r,t)}catch(t){e=t}return t.highlight=s,e?n(e):n(null,i)};if(!s||s.length<3)return a();if(delete t.highlight,!i)return a();for(;l<r.length;l++)!function(e){"code"!==e.type?--i||a():s(e.text,e.lang,(function(t,n){return t?a(t):null==n||n===e.text?--i||a():(e.text=n,e.escaped=!0,void(--i||a()))}))}(r[l])}else try{return t=ie({},ue.defaults,t||{}),le(t),re.parse(M.lex(e,t),t)}catch(e){if(e.message+="\nPlease report this to https://github.com/markedjs/marked.",(t||ue.defaults).silent)return"<p>An error occurred:</p><pre>"+ae(e.message+"",!0)+"</pre>";throw e}}ue.options=ue.setOptions=function(e){return ie(ue.defaults,e),ce(ue.defaults),ue},ue.getDefaults=oe,ue.defaults=he,ue.Parser=re,ue.parser=re.parse,ue.Renderer=H,ue.TextRenderer=ee,ue.Lexer=M,ue.lexer=M.lex,ue.InlineLexer=Y,ue.inlineLexer=Y.output,ue.Slugger=V,ue.parse=ue;var pe=ue;const de=l('<img class="comment-author-img" alt="">'),ge=l('<div class="card"><div class="card-block"><p class="card-text"></p></div><div class="card-footer">&nbsp;<span class="date-posted"></span></div></div>'),fe=l('<span class="mod-options"><i class="ion-trash-a"></i></span>'),me=l('<form class="card comment-form"><div class="card-block"><textarea class="form-control" placeholder="Write a comment..." rows="3"></textarea></div><div class="card-footer"><img class="comment-author-img" alt=""><button class="btn btn-sm btn-primary" type="submit">Post Comment</button></div></form>'),be=l('<div class="col-xs-12 col-md-8 offset-md-2"></div>'),ke=l("<p>&nbsp;or&nbsp;\x3c!----\x3e&nbsp;to add comments on this article.</p>"),xe=["children"],_e=["errors"],ve=["each"],ye=({comment:e,currentUser:r,onDelete:i})=>{const l=r&&r.username===e.author.username,{id:a,body:o,author:{username:c,image:h},createdAt:u}=e;return function(){const e=ge.cloneNode(!0),r=e.firstChild,p=r.firstChild,d=r.nextSibling,g=d.firstChild,f=g.nextSibling;return e.model=a,p.textContent=o,t(d,n(s,{href:`@${c}`,route:"profile",class:"comment-author",children:()=>{const e=de.cloneNode(!0);return e.src=h,e}},xe),g),t(d,n(s,{href:`@${c}`,route:"profile",class:"comment-author",children:c}),f),t(f,()=>new Date(u).toDateString()),t(d,l&&function(){const e=fe.cloneNode(!0);return e.firstChild.__click=i,e}(),null),e}()},$e=({slug:e,createComment:t,loadComments:s,currentUser:r})=>{const[i,l]=a({body:""}),h=e=>l({body:e.target.value}),[,u]=o({timeoutMs:500}),d=n=>{n.preventDefault(),l({isCreatingComment:!0}),t({body:i.body}).then(()=>{l({body:""}),u(()=>s(e))}).catch(e=>l({errors:e})).finally(()=>l({isCreatingComment:!1}))};return[n(p,{errors:()=>i.errors},_e),(()=>{const e=me.cloneNode(!0),t=e.firstChild,n=t.firstChild,s=t.nextSibling.firstChild;return e.onsubmit=d,n.onchange=h,c(e=>{const t=i.body,l=i.isCreatingComment,a=r.image;return t!==e._v$&&(n.value=e._v$=t),l!==e._v$2&&(n.disabled=e._v$2=l),a!==e._v$3&&(s.src=e._v$3=a),e},{_v$:void 0,_v$2:void 0,_v$3:void 0}),e})()]};var we=()=>{const[l,{createComment:a,deleteComment:o,loadComments:c}]=e(),{currentUser:h,articleSlug:u}=l,p=(e,t)=>o(t);return function(){const e=be.cloneNode(!0);return t(e,h?n($e,{slug:u,currentUser:h,createComment:a,loadComments:c}):function(){const e=ke.cloneNode(!0),r=e.firstChild,i=r.nextSibling;i.nextSibling;return t(e,n(s,{route:"login",children:()=>"Sign in"},xe),r),t(e,n(s,{route:"register",children:()=>"sign up"},xe),i),e}(),null),t(e,n(i,{fallback:"Loading comments",children:()=>n(r,{each:()=>l.comments,children:e=>n(ye,{comment:e,currentUser:h,onDelete:p})},ve)},xe),null),e}()};h(["click"]);const Se=l('<img alt="">'),Ce=l('<i class="ion-edit"></i>'),ze=l('<span><button class="btn btn-outline-danger btn-sm"><i class="ion-trash-a"></i> Delete Article</button></span>'),Ae=l('<div class="article-meta"><div class="info"><span class="date"></span></div></div>'),Re=l("<span></span>"),Le=l('<div class="article-page"><div class="banner"><div class="container"><h1></h1></div></div><div class="container page"><div class="row article-content"><div class="col-xs-12"><div></div><ul class="tag-list"></ul></div></div><hr><div class="article-actions"></div><div class="row"></div></div></div>'),Ze=l('<li class="tag-default tag-pill tag-outline"></li>'),De=["children","href"],qe=["children","fallback","when"],Ue=["article","canModify"],Ne=e=>function(){const r=Ae.cloneNode(!0),i=r.firstChild,l=i.firstChild;return t(r,n(s,{href:()=>{var t;return`@${null===(t=e.article)||void 0===t?void 0:t.author.username}`},route:"profile",children:()=>{const t=Se.cloneNode(!0);return c(()=>{var n;return t.src=null===(n=e.article)||void 0===n?void 0:n.author.image}),t}},De),i),t(i,n(s,{href:()=>{var t;return`@${null===(t=e.article)||void 0===t?void 0:t.author.username}`},route:"profile",class:"author",children:()=>{var t;return null===(t=e.article)||void 0===t?void 0:t.author.username}},De),l),t(l,()=>{var t;return new Date(null===(t=e.article)||void 0===t?void 0:t.createdAt).toDateString()}),t(r,n(u,{when:()=>e.canModify,fallback:()=>Re.cloneNode(!0),children:()=>{const r=ze.cloneNode(!0),i=r.firstChild;return t(r,n(s,{href:()=>`editor/${e.article.slug}`,route:"editor",class:"btn btn-outline-secondary btn-sm",children:()=>[Ce.cloneNode(!0)," Edit Article"]},De),i),i.__click=e.onDelete,r}},qe),null),r}();h(["click"]);export default({slug:s})=>{const[r,{deleteArticle:i}]=e(),l=()=>r.articles[s],a=()=>i(s).then(()=>location.hash="/");return function(){const e=Le.cloneNode(!0),s=e.firstChild,i=s.firstChild,o=i.firstChild,h=s.nextSibling.firstChild,u=h.firstChild.firstChild,p=u.nextSibling,d=h.nextSibling.nextSibling.nextSibling;return t(o,()=>{var e;return null===(e=l())||void 0===e?void 0:e.title}),t(i,n(Ne,{article:()=>l(),canModify:()=>{return r.currentUser&&r.currentUser.username===(null===(e=l())||void 0===e?void 0:e.author.username);var e},onDelete:a},Ue),null),t(p,()=>{var e;return null===(e=l())||void 0===e?void 0:e.tagList.map(e=>function(){const n=Ze.cloneNode(!0);return t(n,e),n}())}),t(d,n(we,{})),c(()=>{var e;return u.innerHTML=l()&&pe(null===(e=l())||void 0===e?void 0:e.body,{sanitize:!0})}),e}()};
