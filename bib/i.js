/*!
 *
 *  # Pipi: BiB/i Putter
 *
 *  - "Putting EPUBs in a Web Page with BiB/i."
 *  - (c) Satoru MATSUSHIMA - http://bibi.epub.link or https://github.com/satorumurmur/bibi
 *  - Licensed under the MIT license. - http://www.opensource.org/licenses/mit-license.php
 */
!function(){if(!window["bibi:pipi"]){var e=window["bibi:pipi"]={version:"0.999.0",build:20160324.2259,Status:"",Bibis:[],Anchors:[],Holders:[],Frames:[],TrustworthyOrigins:[location.origin],Loaded:0};e.Path=function(){if(document.currentScript)return document.currentScript.src;var e=document.getElementsByTagName("script");return e[e.length-1].src}(),e.embed=function(){e.Status="Started";for(var t=document.body.querySelectorAll("a[data-bibi]"),i=t.length,n=0;i>n;n++)if(t[n].getAttribute("href")&&!t[n].Bibi){var o={Index:n,Number:n+1},a=o.Anchor=t[n];/ bibi-anchor /.test(" "+a.className+" ")||(a.className="bibi-anchor"+(a.className?" "+a.className:""));var r=Href=a.getAttribute("href"),d=a.getAttribute("data-bibi-class"),s=a.getAttribute("data-bibi-id"),b=a.getAttribute("data-bibi-style"),c=a.getAttribute("data-bibi-reader-view-mode"),u=a.getAttribute("data-bibi-reader-view-mode-fixed"),l=a.getAttribute("data-bibi-autostart"),m=a.getAttribute("data-bibi-play-in-new-window"),h=a.getAttribute("data-bibi-hide-arrows"),g=a.getAttribute("data-bibi-to"),p=a.getAttribute("data-bibi-nav"),f=a.innerHTML;a.origin!=location.origin&&e.TrustworthyOrigins.push(a.origin),a.addEventListener("bibi:load",function(e){console.log("BiB/i: Loaded. - #"+e.detail.Number+": "+e.detail.Anchor.href)},!1),e.Anchors.push(a);var v=o.Holder=e.create("span",{className:"bibi-holder",id:"bibi-holder-"+(n+1),title:(a.innerText?a.innerText+" ":"")+"(powered by BiB/i)"});d&&(v.className+=" "+d),s&&(v.id=s),b&&v.setAttribute("style",b),e.Holders.push(v);var w=new e.Fragment;w.add("parent-title",e.encode(document.title)),w.add("parent-uri",e.encode(location.href)),w.add("parent-origin",e.encode(location.origin)),w.add("parent-pipi-path",e.encode(e.Path)),w.add("parent-bibi-label",e.encode(f)),w.add("parent-holder-id",v.id),/^(horizontal|vertical|paged)$/.test(c)&&w.add("reader-view-mode",c),/^(true|false|yes|no|mobile|desktop)?$/.test(u)&&w.add("reader-view-mode-fixed",u),/^(true|false|yes|no|mobile|desktop)?$/.test(l)&&w.add("autostart",l),/^(true|false|yes|no|mobile|desktop)?$/.test(m)&&w.add("play-in-new-window",m),/^(true|false|yes|no|mobile|desktop)?$/.test(h)&&w.add("hide-arrows",h),/^[1-9][\d\-\.]*$/.test(g)&&w.add("to",g),/^[1-9]\d*$/.test(p)&&w.add("nav",p);var E=o.Frame=v.appendChild(e.create("iframe",{className:"bibi-frame",frameborder:"0",scrolling:"auto",allowfullscreen:"true",src:r+(/#/.test(r)?",":"#")+w.make()}));E.addEventListener("load",function(){e.Loaded++,this.Bibi.Anchor.dispatchEvent(new CustomEvent("bibi:load",{detail:this.Bibi})),"Timeouted"!=e.Status&&e.Loaded==e.Bibis.length&&(e.Status="Loaded",document.dispatchEvent(new CustomEvent("bibi:load",{detail:e})))},!1),e.Frames.push(E),e.Bibis.push(o),E.Bibi=v.Bibi=a.Bibi=o}for(var n=0,i=e.Bibis.length;i>n;n++)if(!e.Bibis[n].Embedded){var o=e.Bibis[n];o.move=function(e){"number"==typeof Target&&this.Frame.contentWindow.postMessage('{"bibi:command:move":"'+e+'"}',this.Anchor.origin)},o.focus=function(e){("string"==typeof e||"number"==typeof e)&&this.Frame.contentWindow.postMessage('{"bibi:command:focus":"'+e+'"}',this.Anchor.origin)},o.changeView=function(e){"string"==typeof Target&&this.Frame.contentWindow.postMessage('{"bibi:command:changeView":"'+e+'"}',this.Anchor.origin)},o.togglePanel=function(){this.Frame.contentWindow.postMessage('{"bibi:command:togglePanel":""}',this.Anchor.origin)},o.Anchor.style.display="none",o.Anchor.parentNode.insertBefore(o.Holder,o.Anchor),o.Anchor.dispatchEvent(new CustomEvent("bibi:ready",{detail:o}))}return setTimeout(function(){"Loaded"!=e.Status&&(e.Status="Timeouted",document.dispatchEvent(new CustomEvent("bibi:timeout",{detail:e})))},12e3),e.Status="Readied",document.dispatchEvent(new CustomEvent("bibi:ready",{detail:e})),e.Bibis},e.encode=function(e){return encodeURIComponent(e).replace("(","_BibiKakkoOpen_").replace(")","_BibiKakkoClose_")},e.create=function(e,t){var i=document.createElement(e);for(var n in t)i[n]=t[n];return i},e.Fragment=function(){return this.Fragment=[],this.add=function(e,t){this.Fragment.push([e,t].join(":"))},this.make=function(){return this.Fragment.length?"pipi("+this.Fragment.join(",")+")":""},this},(!window.CustomEvent||"function"!=typeof window.CustomEvent&&-1===window.CustomEvent.toString().indexOf("CustomEventConstructor"))&&(window.CustomEvent=function(e,t){t=t||{bubbles:!1,cancelable:!1,detail:void 0};var i=document.createEvent("CustomEvent");return i.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),i},window.CustomEvent.prototype=window.Event.prototype),window.addEventListener("message",function(t){if(t&&t.data)for(var i=0,n=e.TrustworthyOrigins.length;n>i;i++)if(t.origin==e.TrustworthyOrigins[i]){var o=t.data;try{if(o=JSON.parse(o),"object"!=typeof o||!o)return!1;for(var a in o)/^bibi:command:/.test(a)&&document.dispatchEvent(new CustomEvent(a,{detail:o[a]}));return!0}catch(r){}return!1}},!1),document.getElementsByTagName("head")[0].appendChild(e.create("link",{rel:"stylesheet",id:"bibi-css",href:e.Path.replace(/\.js$/,".css")})),document.addEventListener("bibi:ready",function(e){console.log("BiB/i: Readied. - "+e.detail.Bibis.length+" Bibi(s).")},!1),document.addEventListener("bibi:load",function(e){console.log("BiB/i: Loaded. - "+e.detail.Bibis.length+" Bibi(s).")},!1),document.addEventListener("bibi:timeout",function(e){console.log("BiB/i: Timeouted.")},!1),document.addEventListener("DOMContentLoaded",e.embed,!1)}}();