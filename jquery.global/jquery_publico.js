
// JQUERY.UI Autocompletar/Calendar/Toltiptext/Más el core completo
/*! jQuery UI - v1.10.3 - 2013-09-25
* http://jqueryui.com
* Includes: jquery.ui.core.js, jquery.ui.widget.js, jquery.ui.mouse.js, jquery.ui.position.js, jquery.ui.draggable.js, jquery.ui.droppable.js, jquery.ui.resizable.js, jquery.ui.selectable.js, jquery.ui.sortable.js, jquery.ui.accordion.js, jquery.ui.autocomplete.js, jquery.ui.button.js, jquery.ui.datepicker.js, jquery.ui.dialog.js, jquery.ui.menu.js, jquery.ui.progressbar.js, jquery.ui.slider.js, jquery.ui.spinner.js, jquery.ui.tabs.js, jquery.ui.tooltip.js, jquery.ui.effect.js, jquery.ui.effect-blind.js, jquery.ui.effect-bounce.js, jquery.ui.effect-clip.js, jquery.ui.effect-drop.js, jquery.ui.effect-explode.js, jquery.ui.effect-fade.js, jquery.ui.effect-fold.js, jquery.ui.effect-highlight.js, jquery.ui.effect-pulsate.js, jquery.ui.effect-scale.js, jquery.ui.effect-shake.js, jquery.ui.effect-slide.js, jquery.ui.effect-transfer.js
* Copyright 2013 jQuery Foundation and other contributors; Licensed MIT */

(function(t,e){function n(e,n){var r,s,o,a=e.nodeName.toLowerCase();return"area"===a?(r=e.parentNode,s=r.name,e.href&&s&&"map"===r.nodeName.toLowerCase()?(o=t("img[usemap=#"+s+"]")[0],!!o&&i(o)):!1):(/input|select|textarea|button|object/.test(a)?!e.disabled:"a"===a?e.href||n:n)&&i(e)}function i(e){return t.expr.filters.visible(e)&&!t(e).parents().addBack().filter(function(){return"hidden"===t.css(this,"visibility")}).length}var r=0,s=/^ui-id-\d+$/;t.ui=t.ui||{},t.extend(t.ui,{version:"1.10.3",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}}),t.fn.extend({focus:function(e){return function(n,i){return"number"==typeof n?this.each(function(){var e=this;setTimeout(function(){t(e).focus(),i&&i.call(e)},n)}):e.apply(this,arguments)}}(t.fn.focus),scrollParent:function(){var e;return e=t.ui.ie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position"))?this.parents().filter(function(){return/(relative|absolute|fixed)/.test(t.css(this,"position"))&&/(auto|scroll)/.test(t.css(this,"overflow")+t.css(this,"overflow-y")+t.css(this,"overflow-x"))}).eq(0):this.parents().filter(function(){return/(auto|scroll)/.test(t.css(this,"overflow")+t.css(this,"overflow-y")+t.css(this,"overflow-x"))}).eq(0),/fixed/.test(this.css("position"))||!e.length?t(document):e},zIndex:function(n){if(n!==e)return this.css("zIndex",n);if(this.length)for(var i,r,s=t(this[0]);s.length&&s[0]!==document;){if(i=s.css("position"),("absolute"===i||"relative"===i||"fixed"===i)&&(r=parseInt(s.css("zIndex"),10),!isNaN(r)&&0!==r))return r;s=s.parent()}return 0},uniqueId:function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++r)})},removeUniqueId:function(){return this.each(function(){s.test(this.id)&&t(this).removeAttr("id")})}}),t.extend(t.expr[":"],{data:t.expr.createPseudo?t.expr.createPseudo(function(e){return function(n){return!!t.data(n,e)}}):function(e,n,i){return!!t.data(e,i[3])},focusable:function(e){return n(e,!isNaN(t.attr(e,"tabindex")))},tabbable:function(e){var i=t.attr(e,"tabindex"),r=isNaN(i);return(r||i>=0)&&n(e,!r)}}),t("<a>").outerWidth(1).jquery||t.each(["Width","Height"],function(n,i){function r(e,n,i,r){return t.each(s,function(){n-=parseFloat(t.css(e,"padding"+this))||0,i&&(n-=parseFloat(t.css(e,"border"+this+"Width"))||0),r&&(n-=parseFloat(t.css(e,"margin"+this))||0)}),n}var s="Width"===i?["Left","Right"]:["Top","Bottom"],o=i.toLowerCase(),a={innerWidth:t.fn.innerWidth,innerHeight:t.fn.innerHeight,outerWidth:t.fn.outerWidth,outerHeight:t.fn.outerHeight};t.fn["inner"+i]=function(n){return n===e?a["inner"+i].call(this):this.each(function(){t(this).css(o,r(this,n)+"px")})},t.fn["outer"+i]=function(e,n){return"number"!=typeof e?a["outer"+i].call(this,e):this.each(function(){t(this).css(o,r(this,e,!0,n)+"px")})}}),t.fn.addBack||(t.fn.addBack=function(t){return this.add(null==t?this.prevObject:this.prevObject.filter(t))}),t("<a>").data("a-b","a").removeData("a-b").data("a-b")&&(t.fn.removeData=function(e){return function(n){return arguments.length?e.call(this,t.camelCase(n)):e.call(this)}}(t.fn.removeData)),t.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),t.support.selectstart="onselectstart"in document.createElement("div"),t.fn.extend({disableSelection:function(){return this.bind((t.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(t){t.preventDefault()})},enableSelection:function(){return this.unbind(".ui-disableSelection")}}),t.extend(t.ui,{plugin:{add:function(e,n,i){var r,s=t.ui[e].prototype;for(r in i)s.plugins[r]=s.plugins[r]||[],s.plugins[r].push([n,i[r]])},call:function(t,e,n){var i,r=t.plugins[e];if(r&&t.element[0].parentNode&&11!==t.element[0].parentNode.nodeType)for(i=0;r.length>i;i++)t.options[r[i][0]]&&r[i][1].apply(t.element,n)}},hasScroll:function(e,n){if("hidden"===t(e).css("overflow"))return!1;var i=n&&"left"===n?"scrollLeft":"scrollTop",r=!1;return e[i]>0?!0:(e[i]=1,r=e[i]>0,e[i]=0,r)}})})(jQuery);(function(e,t){var i=0,a=Array.prototype.slice,s=e.cleanData;e.cleanData=function(t){for(var i,a=0;null!=(i=t[a]);a++)try{e(i).triggerHandler("remove")}catch(n){}s(t)},e.widget=function(i,a,s){var n,r,o,h,l={},u=i.split(".")[0];i=i.split(".")[1],n=u+"-"+i,s||(s=a,a=e.Widget),e.expr[":"][n.toLowerCase()]=function(t){return!!e.data(t,n)},e[u]=e[u]||{},r=e[u][i],o=e[u][i]=function(e,i){return this._createWidget?(arguments.length&&this._createWidget(e,i),t):new o(e,i)},e.extend(o,r,{version:s.version,_proto:e.extend({},s),_childConstructors:[]}),h=new a,h.options=e.widget.extend({},h.options),e.each(s,function(i,s){return e.isFunction(s)?(l[i]=function(){var e=function(){return a.prototype[i].apply(this,arguments)},t=function(e){return a.prototype[i].apply(this,e)};return function(){var i,a=this._super,n=this._superApply;return this._super=e,this._superApply=t,i=s.apply(this,arguments),this._super=a,this._superApply=n,i}}(),t):(l[i]=s,t)}),o.prototype=e.widget.extend(h,{widgetEventPrefix:r?h.widgetEventPrefix:i},l,{constructor:o,namespace:u,widgetName:i,widgetFullName:n}),r?(e.each(r._childConstructors,function(t,i){var a=i.prototype;e.widget(a.namespace+"."+a.widgetName,o,i._proto)}),delete r._childConstructors):a._childConstructors.push(o),e.widget.bridge(i,o)},e.widget.extend=function(i){for(var s,n,r=a.call(arguments,1),o=0,h=r.length;h>o;o++)for(s in r[o])n=r[o][s],r[o].hasOwnProperty(s)&&n!==t&&(i[s]=e.isPlainObject(n)?e.isPlainObject(i[s])?e.widget.extend({},i[s],n):e.widget.extend({},n):n);return i},e.widget.bridge=function(i,s){var n=s.prototype.widgetFullName||i;e.fn[i]=function(r){var o="string"==typeof r,h=a.call(arguments,1),l=this;return r=!o&&h.length?e.widget.extend.apply(null,[r].concat(h)):r,o?this.each(function(){var a,s=e.data(this,n);return s?e.isFunction(s[r])&&"_"!==r.charAt(0)?(a=s[r].apply(s,h),a!==s&&a!==t?(l=a&&a.jquery?l.pushStack(a.get()):a,!1):t):e.error("no such method '"+r+"' for "+i+" widget instance"):e.error("cannot call methods on "+i+" prior to initialization; "+"attempted to call method '"+r+"'")}):this.each(function(){var t=e.data(this,n);t?t.option(r||{})._init():e.data(this,n,new s(r,this))}),l}},e.Widget=function(){},e.Widget._childConstructors=[],e.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(t,a){a=e(a||this.defaultElement||this)[0],this.element=e(a),this.uuid=i++,this.eventNamespace="."+this.widgetName+this.uuid,this.options=e.widget.extend({},this.options,this._getCreateOptions(),t),this.bindings=e(),this.hoverable=e(),this.focusable=e(),a!==this&&(e.data(a,this.widgetFullName,this),this._on(!0,this.element,{remove:function(e){e.target===a&&this.destroy()}}),this.document=e(a.style?a.ownerDocument:a.document||a),this.window=e(this.document[0].defaultView||this.document[0].parentWindow)),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:e.noop,_getCreateEventData:e.noop,_create:e.noop,_init:e.noop,destroy:function(){this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled "+"ui-state-disabled"),this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")},_destroy:e.noop,widget:function(){return this.element},option:function(i,a){var s,n,r,o=i;if(0===arguments.length)return e.widget.extend({},this.options);if("string"==typeof i)if(o={},s=i.split("."),i=s.shift(),s.length){for(n=o[i]=e.widget.extend({},this.options[i]),r=0;s.length-1>r;r++)n[s[r]]=n[s[r]]||{},n=n[s[r]];if(i=s.pop(),a===t)return n[i]===t?null:n[i];n[i]=a}else{if(a===t)return this.options[i]===t?null:this.options[i];o[i]=a}return this._setOptions(o),this},_setOptions:function(e){var t;for(t in e)this._setOption(t,e[t]);return this},_setOption:function(e,t){return this.options[e]=t,"disabled"===e&&(this.widget().toggleClass(this.widgetFullName+"-disabled ui-state-disabled",!!t).attr("aria-disabled",t),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")),this},enable:function(){return this._setOption("disabled",!1)},disable:function(){return this._setOption("disabled",!0)},_on:function(i,a,s){var n,r=this;"boolean"!=typeof i&&(s=a,a=i,i=!1),s?(a=n=e(a),this.bindings=this.bindings.add(a)):(s=a,a=this.element,n=this.widget()),e.each(s,function(s,o){function h(){return i||r.options.disabled!==!0&&!e(this).hasClass("ui-state-disabled")?("string"==typeof o?r[o]:o).apply(r,arguments):t}"string"!=typeof o&&(h.guid=o.guid=o.guid||h.guid||e.guid++);var l=s.match(/^(\w+)\s*(.*)$/),u=l[1]+r.eventNamespace,d=l[2];d?n.delegate(d,u,h):a.bind(u,h)})},_off:function(e,t){t=(t||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,e.unbind(t).undelegate(t)},_delay:function(e,t){function i(){return("string"==typeof e?a[e]:e).apply(a,arguments)}var a=this;return setTimeout(i,t||0)},_hoverable:function(t){this.hoverable=this.hoverable.add(t),this._on(t,{mouseenter:function(t){e(t.currentTarget).addClass("ui-state-hover")},mouseleave:function(t){e(t.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(t){this.focusable=this.focusable.add(t),this._on(t,{focusin:function(t){e(t.currentTarget).addClass("ui-state-focus")},focusout:function(t){e(t.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(t,i,a){var s,n,r=this.options[t];if(a=a||{},i=e.Event(i),i.type=(t===this.widgetEventPrefix?t:this.widgetEventPrefix+t).toLowerCase(),i.target=this.element[0],n=i.originalEvent)for(s in n)s in i||(i[s]=n[s]);return this.element.trigger(i,a),!(e.isFunction(r)&&r.apply(this.element[0],[i].concat(a))===!1||i.isDefaultPrevented())}},e.each({show:"fadeIn",hide:"fadeOut"},function(t,i){e.Widget.prototype["_"+t]=function(a,s,n){"string"==typeof s&&(s={effect:s});var r,o=s?s===!0||"number"==typeof s?i:s.effect||i:t;s=s||{},"number"==typeof s&&(s={duration:s}),r=!e.isEmptyObject(s),s.complete=n,s.delay&&a.delay(s.delay),r&&e.effects&&e.effects.effect[o]?a[t](s):o!==t&&a[o]?a[o](s.duration,s.easing,n):a.queue(function(i){e(this)[t](),n&&n.call(a[0]),i()})}})})(jQuery);(function(e){var t=!1;e(document).mouseup(function(){t=!1}),e.widget("ui.mouse",{version:"1.10.3",options:{cancel:"input,textarea,button,select,option",distance:1,delay:0},_mouseInit:function(){var t=this;this.element.bind("mousedown."+this.widgetName,function(e){return t._mouseDown(e)}).bind("click."+this.widgetName,function(a){return!0===e.data(a.target,t.widgetName+".preventClickEvent")?(e.removeData(a.target,t.widgetName+".preventClickEvent"),a.stopImmediatePropagation(),!1):undefined}),this.started=!1},_mouseDestroy:function(){this.element.unbind("."+this.widgetName),this._mouseMoveDelegate&&e(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate)},_mouseDown:function(a){if(!t){this._mouseStarted&&this._mouseUp(a),this._mouseDownEvent=a;var i=this,r=1===a.which,s="string"==typeof this.options.cancel&&a.target.nodeName?e(a.target).closest(this.options.cancel).length:!1;return r&&!s&&this._mouseCapture(a)?(this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){i.mouseDelayMet=!0},this.options.delay)),this._mouseDistanceMet(a)&&this._mouseDelayMet(a)&&(this._mouseStarted=this._mouseStart(a)!==!1,!this._mouseStarted)?(a.preventDefault(),!0):(!0===e.data(a.target,this.widgetName+".preventClickEvent")&&e.removeData(a.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(e){return i._mouseMove(e)},this._mouseUpDelegate=function(e){return i._mouseUp(e)},e(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate),a.preventDefault(),t=!0,!0)):!0}},_mouseMove:function(t){return e.ui.ie&&(!document.documentMode||9>document.documentMode)&&!t.button?this._mouseUp(t):this._mouseStarted?(this._mouseDrag(t),t.preventDefault()):(this._mouseDistanceMet(t)&&this._mouseDelayMet(t)&&(this._mouseStarted=this._mouseStart(this._mouseDownEvent,t)!==!1,this._mouseStarted?this._mouseDrag(t):this._mouseUp(t)),!this._mouseStarted)},_mouseUp:function(t){return e(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,t.target===this._mouseDownEvent.target&&e.data(t.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(t)),!1},_mouseDistanceMet:function(e){return Math.max(Math.abs(this._mouseDownEvent.pageX-e.pageX),Math.abs(this._mouseDownEvent.pageY-e.pageY))>=this.options.distance},_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return!0}})})(jQuery);(function(e,t){function a(e,t,a){return[parseFloat(e[0])*(m.test(e[0])?t/100:1),parseFloat(e[1])*(m.test(e[1])?a/100:1)]}function i(t,a){return parseInt(e.css(t,a),10)||0}function r(t){var a=t[0];return 9===a.nodeType?{width:t.width(),height:t.height(),offset:{top:0,left:0}}:e.isWindow(a)?{width:t.width(),height:t.height(),offset:{top:t.scrollTop(),left:t.scrollLeft()}}:a.preventDefault?{width:0,height:0,offset:{top:a.pageY,left:a.pageX}}:{width:t.outerWidth(),height:t.outerHeight(),offset:t.offset()}}e.ui=e.ui||{};var s,n=Math.max,o=Math.abs,u=Math.round,d=/left|center|right/,l=/top|center|bottom/,h=/[\+\-]\d+(\.[\d]+)?%?/,c=/^\w+/,m=/%$/,p=e.fn.position;e.position={scrollbarWidth:function(){if(s!==t)return s;var a,i,r=e("<div style='display:block;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),n=r.children()[0];return e("body").append(r),a=n.offsetWidth,r.css("overflow","scroll"),i=n.offsetWidth,a===i&&(i=r[0].clientWidth),r.remove(),s=a-i},getScrollInfo:function(t){var a=t.isWindow?"":t.element.css("overflow-x"),i=t.isWindow?"":t.element.css("overflow-y"),r="scroll"===a||"auto"===a&&t.width<t.element[0].scrollWidth,s="scroll"===i||"auto"===i&&t.height<t.element[0].scrollHeight;return{width:s?e.position.scrollbarWidth():0,height:r?e.position.scrollbarWidth():0}},getWithinInfo:function(t){var a=e(t||window),i=e.isWindow(a[0]);return{element:a,isWindow:i,offset:a.offset()||{left:0,top:0},scrollLeft:a.scrollLeft(),scrollTop:a.scrollTop(),width:i?a.width():a.outerWidth(),height:i?a.height():a.outerHeight()}}},e.fn.position=function(t){if(!t||!t.of)return p.apply(this,arguments);t=e.extend({},t);var s,m,f,g,y,v,x=e(t.of),k=e.position.getWithinInfo(t.within),b=e.position.getScrollInfo(k),T=(t.collision||"flip").split(" "),S={};return v=r(x),x[0].preventDefault&&(t.at="left top"),m=v.width,f=v.height,g=v.offset,y=e.extend({},g),e.each(["my","at"],function(){var e,a,i=(t[this]||"").split(" ");1===i.length&&(i=d.test(i[0])?i.concat(["center"]):l.test(i[0])?["center"].concat(i):["center","center"]),i[0]=d.test(i[0])?i[0]:"center",i[1]=l.test(i[1])?i[1]:"center",e=h.exec(i[0]),a=h.exec(i[1]),S[this]=[e?e[0]:0,a?a[0]:0],t[this]=[c.exec(i[0])[0],c.exec(i[1])[0]]}),1===T.length&&(T[1]=T[0]),"right"===t.at[0]?y.left+=m:"center"===t.at[0]&&(y.left+=m/2),"bottom"===t.at[1]?y.top+=f:"center"===t.at[1]&&(y.top+=f/2),s=a(S.at,m,f),y.left+=s[0],y.top+=s[1],this.each(function(){var r,d,l=e(this),h=l.outerWidth(),c=l.outerHeight(),p=i(this,"marginLeft"),v=i(this,"marginTop"),M=h+p+i(this,"marginRight")+b.width,N=c+v+i(this,"marginBottom")+b.height,D=e.extend({},y),_=a(S.my,l.outerWidth(),l.outerHeight());"right"===t.my[0]?D.left-=h:"center"===t.my[0]&&(D.left-=h/2),"bottom"===t.my[1]?D.top-=c:"center"===t.my[1]&&(D.top-=c/2),D.left+=_[0],D.top+=_[1],e.support.offsetFractions||(D.left=u(D.left),D.top=u(D.top)),r={marginLeft:p,marginTop:v},e.each(["left","top"],function(a,i){e.ui.position[T[a]]&&e.ui.position[T[a]][i](D,{targetWidth:m,targetHeight:f,elemWidth:h,elemHeight:c,collisionPosition:r,collisionWidth:M,collisionHeight:N,offset:[s[0]+_[0],s[1]+_[1]],my:t.my,at:t.at,within:k,elem:l})}),t.using&&(d=function(e){var a=g.left-D.left,i=a+m-h,r=g.top-D.top,s=r+f-c,u={target:{element:x,left:g.left,top:g.top,width:m,height:f},element:{element:l,left:D.left,top:D.top,width:h,height:c},horizontal:0>i?"left":a>0?"right":"center",vertical:0>s?"top":r>0?"bottom":"middle"};h>m&&m>o(a+i)&&(u.horizontal="center"),c>f&&f>o(r+s)&&(u.vertical="middle"),u.important=n(o(a),o(i))>n(o(r),o(s))?"horizontal":"vertical",t.using.call(this,e,u)}),l.offset(e.extend(D,{using:d}))})},e.ui.position={fit:{left:function(e,t){var a,i=t.within,r=i.isWindow?i.scrollLeft:i.offset.left,s=i.width,o=e.left-t.collisionPosition.marginLeft,u=r-o,d=o+t.collisionWidth-s-r;t.collisionWidth>s?u>0&&0>=d?(a=e.left+u+t.collisionWidth-s-r,e.left+=u-a):e.left=d>0&&0>=u?r:u>d?r+s-t.collisionWidth:r:u>0?e.left+=u:d>0?e.left-=d:e.left=n(e.left-o,e.left)},top:function(e,t){var a,i=t.within,r=i.isWindow?i.scrollTop:i.offset.top,s=t.within.height,o=e.top-t.collisionPosition.marginTop,u=r-o,d=o+t.collisionHeight-s-r;t.collisionHeight>s?u>0&&0>=d?(a=e.top+u+t.collisionHeight-s-r,e.top+=u-a):e.top=d>0&&0>=u?r:u>d?r+s-t.collisionHeight:r:u>0?e.top+=u:d>0?e.top-=d:e.top=n(e.top-o,e.top)}},flip:{left:function(e,t){var a,i,r=t.within,s=r.offset.left+r.scrollLeft,n=r.width,u=r.isWindow?r.scrollLeft:r.offset.left,d=e.left-t.collisionPosition.marginLeft,l=d-u,h=d+t.collisionWidth-n-u,c="left"===t.my[0]?-t.elemWidth:"right"===t.my[0]?t.elemWidth:0,m="left"===t.at[0]?t.targetWidth:"right"===t.at[0]?-t.targetWidth:0,p=-2*t.offset[0];0>l?(a=e.left+c+m+p+t.collisionWidth-n-s,(0>a||o(l)>a)&&(e.left+=c+m+p)):h>0&&(i=e.left-t.collisionPosition.marginLeft+c+m+p-u,(i>0||h>o(i))&&(e.left+=c+m+p))},top:function(e,t){var a,i,r=t.within,s=r.offset.top+r.scrollTop,n=r.height,u=r.isWindow?r.scrollTop:r.offset.top,d=e.top-t.collisionPosition.marginTop,l=d-u,h=d+t.collisionHeight-n-u,c="top"===t.my[1],m=c?-t.elemHeight:"bottom"===t.my[1]?t.elemHeight:0,p="top"===t.at[1]?t.targetHeight:"bottom"===t.at[1]?-t.targetHeight:0,f=-2*t.offset[1];0>l?(i=e.top+m+p+f+t.collisionHeight-n-s,e.top+m+p+f>l&&(0>i||o(l)>i)&&(e.top+=m+p+f)):h>0&&(a=e.top-t.collisionPosition.marginTop+m+p+f-u,e.top+m+p+f>h&&(a>0||h>o(a))&&(e.top+=m+p+f))}},flipfit:{left:function(){e.ui.position.flip.left.apply(this,arguments),e.ui.position.fit.left.apply(this,arguments)},top:function(){e.ui.position.flip.top.apply(this,arguments),e.ui.position.fit.top.apply(this,arguments)}}},function(){var t,a,i,r,s,n=document.getElementsByTagName("body")[0],o=document.createElement("div");t=document.createElement(n?"div":"body"),i={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"},n&&e.extend(i,{position:"absolute",left:"-1000px",top:"-1000px"});for(s in i)t.style[s]=i[s];t.appendChild(o),a=n||document.documentElement,a.insertBefore(t,a.firstChild),o.style.cssText="position: absolute; left: 10.7432222px;",r=e(o).offset().left,e.support.offsetFractions=r>10&&11>r,t.innerHTML="",a.removeChild(t)}()})(jQuery);(function(e){e.widget("ui.draggable",e.ui.mouse,{version:"1.10.3",widgetEventPrefix:"drag",options:{addClasses:!0,appendTo:"parent",axis:!1,connectToSortable:!1,containment:!1,cursor:"auto",cursorAt:!1,grid:!1,handle:!1,helper:"original",iframeFix:!1,opacity:!1,refreshPositions:!1,revert:!1,revertDuration:500,scope:"default",scroll:!0,scrollSensitivity:20,scrollSpeed:20,snap:!1,snapMode:"both",snapTolerance:20,stack:!1,zIndex:!1,drag:null,start:null,stop:null},_create:function(){"original"!==this.options.helper||/^(?:r|a|f)/.test(this.element.css("position"))||(this.element[0].style.position="relative"),this.options.addClasses&&this.element.addClass("ui-draggable"),this.options.disabled&&this.element.addClass("ui-draggable-disabled"),this._mouseInit()},_destroy:function(){this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"),this._mouseDestroy()},_mouseCapture:function(t){var a=this.options;return this.helper||a.disabled||e(t.target).closest(".ui-resizable-handle").length>0?!1:(this.handle=this._getHandle(t),this.handle?(e(a.iframeFix===!0?"iframe":a.iframeFix).each(function(){e("<div class='ui-draggable-iframeFix' style='background: #fff;'></div>").css({width:this.offsetWidth+"px",height:this.offsetHeight+"px",position:"absolute",opacity:"0.001",zIndex:1e3}).css(e(this).offset()).appendTo("body")}),!0):!1)},_mouseStart:function(t){var a=this.options;return this.helper=this._createHelper(t),this.helper.addClass("ui-draggable-dragging"),this._cacheHelperProportions(),e.ui.ddmanager&&(e.ui.ddmanager.current=this),this._cacheMargins(),this.cssPosition=this.helper.css("position"),this.scrollParent=this.helper.scrollParent(),this.offsetParent=this.helper.offsetParent(),this.offsetParentCssPosition=this.offsetParent.css("position"),this.offset=this.positionAbs=this.element.offset(),this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left},this.offset.scroll=!1,e.extend(this.offset,{click:{left:t.pageX-this.offset.left,top:t.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()}),this.originalPosition=this.position=this._generatePosition(t),this.originalPageX=t.pageX,this.originalPageY=t.pageY,a.cursorAt&&this._adjustOffsetFromHelper(a.cursorAt),this._setContainment(),this._trigger("start",t)===!1?(this._clear(),!1):(this._cacheHelperProportions(),e.ui.ddmanager&&!a.dropBehaviour&&e.ui.ddmanager.prepareOffsets(this,t),this._mouseDrag(t,!0),e.ui.ddmanager&&e.ui.ddmanager.dragStart(this,t),!0)},_mouseDrag:function(t,a){if("fixed"===this.offsetParentCssPosition&&(this.offset.parent=this._getParentOffset()),this.position=this._generatePosition(t),this.positionAbs=this._convertPositionTo("absolute"),!a){var i=this._uiHash();if(this._trigger("drag",t,i)===!1)return this._mouseUp({}),!1;this.position=i.position}return this.options.axis&&"y"===this.options.axis||(this.helper[0].style.left=this.position.left+"px"),this.options.axis&&"x"===this.options.axis||(this.helper[0].style.top=this.position.top+"px"),e.ui.ddmanager&&e.ui.ddmanager.drag(this,t),!1},_mouseStop:function(t){var a=this,i=!1;return e.ui.ddmanager&&!this.options.dropBehaviour&&(i=e.ui.ddmanager.drop(this,t)),this.dropped&&(i=this.dropped,this.dropped=!1),"original"!==this.options.helper||e.contains(this.element[0].ownerDocument,this.element[0])?("invalid"===this.options.revert&&!i||"valid"===this.options.revert&&i||this.options.revert===!0||e.isFunction(this.options.revert)&&this.options.revert.call(this.element,i)?e(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){a._trigger("stop",t)!==!1&&a._clear()}):this._trigger("stop",t)!==!1&&this._clear(),!1):!1},_mouseUp:function(t){return e("div.ui-draggable-iframeFix").each(function(){this.parentNode.removeChild(this)}),e.ui.ddmanager&&e.ui.ddmanager.dragStop(this,t),e.ui.mouse.prototype._mouseUp.call(this,t)},cancel:function(){return this.helper.is(".ui-draggable-dragging")?this._mouseUp({}):this._clear(),this},_getHandle:function(t){return this.options.handle?!!e(t.target).closest(this.element.find(this.options.handle)).length:!0},_createHelper:function(t){var a=this.options,i=e.isFunction(a.helper)?e(a.helper.apply(this.element[0],[t])):"clone"===a.helper?this.element.clone().removeAttr("id"):this.element;return i.parents("body").length||i.appendTo("parent"===a.appendTo?this.element[0].parentNode:a.appendTo),i[0]===this.element[0]||/(fixed|absolute)/.test(i.css("position"))||i.css("position","absolute"),i},_adjustOffsetFromHelper:function(t){"string"==typeof t&&(t=t.split(" ")),e.isArray(t)&&(t={left:+t[0],top:+t[1]||0}),"left"in t&&(this.offset.click.left=t.left+this.margins.left),"right"in t&&(this.offset.click.left=this.helperProportions.width-t.right+this.margins.left),"top"in t&&(this.offset.click.top=t.top+this.margins.top),"bottom"in t&&(this.offset.click.top=this.helperProportions.height-t.bottom+this.margins.top)},_getParentOffset:function(){var t=this.offsetParent.offset();return"absolute"===this.cssPosition&&this.scrollParent[0]!==document&&e.contains(this.scrollParent[0],this.offsetParent[0])&&(t.left+=this.scrollParent.scrollLeft(),t.top+=this.scrollParent.scrollTop()),(this.offsetParent[0]===document.body||this.offsetParent[0].tagName&&"html"===this.offsetParent[0].tagName.toLowerCase()&&e.ui.ie)&&(t={top:0,left:0}),{top:t.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:t.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if("relative"===this.cssPosition){var e=this.element.position();return{top:e.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:e.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}return{top:0,left:0}},_cacheMargins:function(){this.margins={left:parseInt(this.element.css("marginLeft"),10)||0,top:parseInt(this.element.css("marginTop"),10)||0,right:parseInt(this.element.css("marginRight"),10)||0,bottom:parseInt(this.element.css("marginBottom"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var t,a,i,r=this.options;return r.containment?"window"===r.containment?(this.containment=[e(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,e(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,e(window).scrollLeft()+e(window).width()-this.helperProportions.width-this.margins.left,e(window).scrollTop()+(e(window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top],undefined):"document"===r.containment?(this.containment=[0,0,e(document).width()-this.helperProportions.width-this.margins.left,(e(document).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top],undefined):r.containment.constructor===Array?(this.containment=r.containment,undefined):("parent"===r.containment&&(r.containment=this.helper[0].parentNode),a=e(r.containment),i=a[0],i&&(t="hidden"!==a.css("overflow"),this.containment=[(parseInt(a.css("borderLeftWidth"),10)||0)+(parseInt(a.css("paddingLeft"),10)||0),(parseInt(a.css("borderTopWidth"),10)||0)+(parseInt(a.css("paddingTop"),10)||0),(t?Math.max(i.scrollWidth,i.offsetWidth):i.offsetWidth)-(parseInt(a.css("borderRightWidth"),10)||0)-(parseInt(a.css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(t?Math.max(i.scrollHeight,i.offsetHeight):i.offsetHeight)-(parseInt(a.css("borderBottomWidth"),10)||0)-(parseInt(a.css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom],this.relative_container=a),undefined):(this.containment=null,undefined)},_convertPositionTo:function(t,a){a||(a=this.position);var i="absolute"===t?1:-1,r="absolute"!==this.cssPosition||this.scrollParent[0]!==document&&e.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent;return this.offset.scroll||(this.offset.scroll={top:r.scrollTop(),left:r.scrollLeft()}),{top:a.top+this.offset.relative.top*i+this.offset.parent.top*i-("fixed"===this.cssPosition?-this.scrollParent.scrollTop():this.offset.scroll.top)*i,left:a.left+this.offset.relative.left*i+this.offset.parent.left*i-("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():this.offset.scroll.left)*i}},_generatePosition:function(t){var a,i,r,s,n=this.options,o="absolute"!==this.cssPosition||this.scrollParent[0]!==document&&e.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,d=t.pageX,u=t.pageY;return this.offset.scroll||(this.offset.scroll={top:o.scrollTop(),left:o.scrollLeft()}),this.originalPosition&&(this.containment&&(this.relative_container?(i=this.relative_container.offset(),a=[this.containment[0]+i.left,this.containment[1]+i.top,this.containment[2]+i.left,this.containment[3]+i.top]):a=this.containment,t.pageX-this.offset.click.left<a[0]&&(d=a[0]+this.offset.click.left),t.pageY-this.offset.click.top<a[1]&&(u=a[1]+this.offset.click.top),t.pageX-this.offset.click.left>a[2]&&(d=a[2]+this.offset.click.left),t.pageY-this.offset.click.top>a[3]&&(u=a[3]+this.offset.click.top)),n.grid&&(r=n.grid[1]?this.originalPageY+Math.round((u-this.originalPageY)/n.grid[1])*n.grid[1]:this.originalPageY,u=a?r-this.offset.click.top>=a[1]||r-this.offset.click.top>a[3]?r:r-this.offset.click.top>=a[1]?r-n.grid[1]:r+n.grid[1]:r,s=n.grid[0]?this.originalPageX+Math.round((d-this.originalPageX)/n.grid[0])*n.grid[0]:this.originalPageX,d=a?s-this.offset.click.left>=a[0]||s-this.offset.click.left>a[2]?s:s-this.offset.click.left>=a[0]?s-n.grid[0]:s+n.grid[0]:s)),{top:u-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+("fixed"===this.cssPosition?-this.scrollParent.scrollTop():this.offset.scroll.top),left:d-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():this.offset.scroll.left)}},_clear:function(){this.helper.removeClass("ui-draggable-dragging"),this.helper[0]===this.element[0]||this.cancelHelperRemoval||this.helper.remove(),this.helper=null,this.cancelHelperRemoval=!1},_trigger:function(t,a,i){return i=i||this._uiHash(),e.ui.plugin.call(this,t,[a,i]),"drag"===t&&(this.positionAbs=this._convertPositionTo("absolute")),e.Widget.prototype._trigger.call(this,t,a,i)},plugins:{},_uiHash:function(){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}}}),e.ui.plugin.add("draggable","connectToSortable",{start:function(t,a){var i=e(this).data("ui-draggable"),r=i.options,s=e.extend({},a,{item:i.element});i.sortables=[],e(r.connectToSortable).each(function(){var a=e.data(this,"ui-sortable");a&&!a.options.disabled&&(i.sortables.push({instance:a,shouldRevert:a.options.revert}),a.refreshPositions(),a._trigger("activate",t,s))})},stop:function(t,a){var i=e(this).data("ui-draggable"),r=e.extend({},a,{item:i.element});e.each(i.sortables,function(){this.instance.isOver?(this.instance.isOver=0,i.cancelHelperRemoval=!0,this.instance.cancelHelperRemoval=!1,this.shouldRevert&&(this.instance.options.revert=this.shouldRevert),this.instance._mouseStop(t),this.instance.options.helper=this.instance.options._helper,"original"===i.options.helper&&this.instance.currentItem.css({top:"auto",left:"auto"})):(this.instance.cancelHelperRemoval=!1,this.instance._trigger("deactivate",t,r))})},drag:function(t,a){var i=e(this).data("ui-draggable"),r=this;e.each(i.sortables,function(){var s=!1,n=this;this.instance.positionAbs=i.positionAbs,this.instance.helperProportions=i.helperProportions,this.instance.offset.click=i.offset.click,this.instance._intersectsWith(this.instance.containerCache)&&(s=!0,e.each(i.sortables,function(){return this.instance.positionAbs=i.positionAbs,this.instance.helperProportions=i.helperProportions,this.instance.offset.click=i.offset.click,this!==n&&this.instance._intersectsWith(this.instance.containerCache)&&e.contains(n.instance.element[0],this.instance.element[0])&&(s=!1),s})),s?(this.instance.isOver||(this.instance.isOver=1,this.instance.currentItem=e(r).clone().removeAttr("id").appendTo(this.instance.element).data("ui-sortable-item",!0),this.instance.options._helper=this.instance.options.helper,this.instance.options.helper=function(){return a.helper[0]},t.target=this.instance.currentItem[0],this.instance._mouseCapture(t,!0),this.instance._mouseStart(t,!0,!0),this.instance.offset.click.top=i.offset.click.top,this.instance.offset.click.left=i.offset.click.left,this.instance.offset.parent.left-=i.offset.parent.left-this.instance.offset.parent.left,this.instance.offset.parent.top-=i.offset.parent.top-this.instance.offset.parent.top,i._trigger("toSortable",t),i.dropped=this.instance.element,i.currentItem=i.element,this.instance.fromOutside=i),this.instance.currentItem&&this.instance._mouseDrag(t)):this.instance.isOver&&(this.instance.isOver=0,this.instance.cancelHelperRemoval=!0,this.instance.options.revert=!1,this.instance._trigger("out",t,this.instance._uiHash(this.instance)),this.instance._mouseStop(t,!0),this.instance.options.helper=this.instance.options._helper,this.instance.currentItem.remove(),this.instance.placeholder&&this.instance.placeholder.remove(),i._trigger("fromSortable",t),i.dropped=!1)})}}),e.ui.plugin.add("draggable","cursor",{start:function(){var t=e("body"),a=e(this).data("ui-draggable").options;t.css("cursor")&&(a._cursor=t.css("cursor")),t.css("cursor",a.cursor)},stop:function(){var t=e(this).data("ui-draggable").options;t._cursor&&e("body").css("cursor",t._cursor)}}),e.ui.plugin.add("draggable","opacity",{start:function(t,a){var i=e(a.helper),r=e(this).data("ui-draggable").options;i.css("opacity")&&(r._opacity=i.css("opacity")),i.css("opacity",r.opacity)},stop:function(t,a){var i=e(this).data("ui-draggable").options;i._opacity&&e(a.helper).css("opacity",i._opacity)}}),e.ui.plugin.add("draggable","scroll",{start:function(){var t=e(this).data("ui-draggable");t.scrollParent[0]!==document&&"HTML"!==t.scrollParent[0].tagName&&(t.overflowOffset=t.scrollParent.offset())},drag:function(t){var a=e(this).data("ui-draggable"),i=a.options,r=!1;a.scrollParent[0]!==document&&"HTML"!==a.scrollParent[0].tagName?(i.axis&&"x"===i.axis||(a.overflowOffset.top+a.scrollParent[0].offsetHeight-t.pageY<i.scrollSensitivity?a.scrollParent[0].scrollTop=r=a.scrollParent[0].scrollTop+i.scrollSpeed:t.pageY-a.overflowOffset.top<i.scrollSensitivity&&(a.scrollParent[0].scrollTop=r=a.scrollParent[0].scrollTop-i.scrollSpeed)),i.axis&&"y"===i.axis||(a.overflowOffset.left+a.scrollParent[0].offsetWidth-t.pageX<i.scrollSensitivity?a.scrollParent[0].scrollLeft=r=a.scrollParent[0].scrollLeft+i.scrollSpeed:t.pageX-a.overflowOffset.left<i.scrollSensitivity&&(a.scrollParent[0].scrollLeft=r=a.scrollParent[0].scrollLeft-i.scrollSpeed))):(i.axis&&"x"===i.axis||(t.pageY-e(document).scrollTop()<i.scrollSensitivity?r=e(document).scrollTop(e(document).scrollTop()-i.scrollSpeed):e(window).height()-(t.pageY-e(document).scrollTop())<i.scrollSensitivity&&(r=e(document).scrollTop(e(document).scrollTop()+i.scrollSpeed))),i.axis&&"y"===i.axis||(t.pageX-e(document).scrollLeft()<i.scrollSensitivity?r=e(document).scrollLeft(e(document).scrollLeft()-i.scrollSpeed):e(window).width()-(t.pageX-e(document).scrollLeft())<i.scrollSensitivity&&(r=e(document).scrollLeft(e(document).scrollLeft()+i.scrollSpeed)))),r!==!1&&e.ui.ddmanager&&!i.dropBehaviour&&e.ui.ddmanager.prepareOffsets(a,t)}}),e.ui.plugin.add("draggable","snap",{start:function(){var t=e(this).data("ui-draggable"),a=t.options;t.snapElements=[],e(a.snap.constructor!==String?a.snap.items||":data(ui-draggable)":a.snap).each(function(){var a=e(this),i=a.offset();this!==t.element[0]&&t.snapElements.push({item:this,width:a.outerWidth(),height:a.outerHeight(),top:i.top,left:i.left})})},drag:function(t,a){var i,r,s,n,o,d,u,l,h,c,m=e(this).data("ui-draggable"),p=m.options,f=p.snapTolerance,g=a.offset.left,y=g+m.helperProportions.width,k=a.offset.top,x=k+m.helperProportions.height;for(h=m.snapElements.length-1;h>=0;h--)o=m.snapElements[h].left,d=o+m.snapElements[h].width,u=m.snapElements[h].top,l=u+m.snapElements[h].height,o-f>y||g>d+f||u-f>x||k>l+f||!e.contains(m.snapElements[h].item.ownerDocument,m.snapElements[h].item)?(m.snapElements[h].snapping&&m.options.snap.release&&m.options.snap.release.call(m.element,t,e.extend(m._uiHash(),{snapItem:m.snapElements[h].item})),m.snapElements[h].snapping=!1):("inner"!==p.snapMode&&(i=f>=Math.abs(u-x),r=f>=Math.abs(l-k),s=f>=Math.abs(o-y),n=f>=Math.abs(d-g),i&&(a.position.top=m._convertPositionTo("relative",{top:u-m.helperProportions.height,left:0}).top-m.margins.top),r&&(a.position.top=m._convertPositionTo("relative",{top:l,left:0}).top-m.margins.top),s&&(a.position.left=m._convertPositionTo("relative",{top:0,left:o-m.helperProportions.width}).left-m.margins.left),n&&(a.position.left=m._convertPositionTo("relative",{top:0,left:d}).left-m.margins.left)),c=i||r||s||n,"outer"!==p.snapMode&&(i=f>=Math.abs(u-k),r=f>=Math.abs(l-x),s=f>=Math.abs(o-g),n=f>=Math.abs(d-y),i&&(a.position.top=m._convertPositionTo("relative",{top:u,left:0}).top-m.margins.top),r&&(a.position.top=m._convertPositionTo("relative",{top:l-m.helperProportions.height,left:0}).top-m.margins.top),s&&(a.position.left=m._convertPositionTo("relative",{top:0,left:o}).left-m.margins.left),n&&(a.position.left=m._convertPositionTo("relative",{top:0,left:d-m.helperProportions.width}).left-m.margins.left)),!m.snapElements[h].snapping&&(i||r||s||n||c)&&m.options.snap.snap&&m.options.snap.snap.call(m.element,t,e.extend(m._uiHash(),{snapItem:m.snapElements[h].item})),m.snapElements[h].snapping=i||r||s||n||c)}}),e.ui.plugin.add("draggable","stack",{start:function(){var t,a=this.data("ui-draggable").options,i=e.makeArray(e(a.stack)).sort(function(t,a){return(parseInt(e(t).css("zIndex"),10)||0)-(parseInt(e(a).css("zIndex"),10)||0)});i.length&&(t=parseInt(e(i[0]).css("zIndex"),10)||0,e(i).each(function(a){e(this).css("zIndex",t+a)}),this.css("zIndex",t+i.length))}}),e.ui.plugin.add("draggable","zIndex",{start:function(t,a){var i=e(a.helper),r=e(this).data("ui-draggable").options;i.css("zIndex")&&(r._zIndex=i.css("zIndex")),i.css("zIndex",r.zIndex)},stop:function(t,a){var i=e(this).data("ui-draggable").options;i._zIndex&&e(a.helper).css("zIndex",i._zIndex)}})})(jQuery);(function(e){function t(e,t,a){return e>t&&t+a>e}e.widget("ui.droppable",{version:"1.10.3",widgetEventPrefix:"drop",options:{accept:"*",activeClass:!1,addClasses:!0,greedy:!1,hoverClass:!1,scope:"default",tolerance:"intersect",activate:null,deactivate:null,drop:null,out:null,over:null},_create:function(){var t=this.options,a=t.accept;this.isover=!1,this.isout=!0,this.accept=e.isFunction(a)?a:function(e){return e.is(a)},this.proportions={width:this.element[0].offsetWidth,height:this.element[0].offsetHeight},e.ui.ddmanager.droppables[t.scope]=e.ui.ddmanager.droppables[t.scope]||[],e.ui.ddmanager.droppables[t.scope].push(this),t.addClasses&&this.element.addClass("ui-droppable")},_destroy:function(){for(var t=0,a=e.ui.ddmanager.droppables[this.options.scope];a.length>t;t++)a[t]===this&&a.splice(t,1);this.element.removeClass("ui-droppable ui-droppable-disabled")},_setOption:function(t,a){"accept"===t&&(this.accept=e.isFunction(a)?a:function(e){return e.is(a)}),e.Widget.prototype._setOption.apply(this,arguments)},_activate:function(t){var a=e.ui.ddmanager.current;this.options.activeClass&&this.element.addClass(this.options.activeClass),a&&this._trigger("activate",t,this.ui(a))},_deactivate:function(t){var a=e.ui.ddmanager.current;this.options.activeClass&&this.element.removeClass(this.options.activeClass),a&&this._trigger("deactivate",t,this.ui(a))},_over:function(t){var a=e.ui.ddmanager.current;a&&(a.currentItem||a.element)[0]!==this.element[0]&&this.accept.call(this.element[0],a.currentItem||a.element)&&(this.options.hoverClass&&this.element.addClass(this.options.hoverClass),this._trigger("over",t,this.ui(a)))},_out:function(t){var a=e.ui.ddmanager.current;a&&(a.currentItem||a.element)[0]!==this.element[0]&&this.accept.call(this.element[0],a.currentItem||a.element)&&(this.options.hoverClass&&this.element.removeClass(this.options.hoverClass),this._trigger("out",t,this.ui(a)))},_drop:function(t,a){var i=a||e.ui.ddmanager.current,r=!1;return i&&(i.currentItem||i.element)[0]!==this.element[0]?(this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function(){var t=e.data(this,"ui-droppable");return t.options.greedy&&!t.options.disabled&&t.options.scope===i.options.scope&&t.accept.call(t.element[0],i.currentItem||i.element)&&e.ui.intersect(i,e.extend(t,{offset:t.element.offset()}),t.options.tolerance)?(r=!0,!1):undefined}),r?!1:this.accept.call(this.element[0],i.currentItem||i.element)?(this.options.activeClass&&this.element.removeClass(this.options.activeClass),this.options.hoverClass&&this.element.removeClass(this.options.hoverClass),this._trigger("drop",t,this.ui(i)),this.element):!1):!1},ui:function(e){return{draggable:e.currentItem||e.element,helper:e.helper,position:e.position,offset:e.positionAbs}}}),e.ui.intersect=function(e,a,i){if(!a.offset)return!1;var r,s,n=(e.positionAbs||e.position.absolute).left,o=n+e.helperProportions.width,d=(e.positionAbs||e.position.absolute).top,u=d+e.helperProportions.height,l=a.offset.left,h=l+a.proportions.width,c=a.offset.top,m=c+a.proportions.height;switch(i){case"fit":return n>=l&&h>=o&&d>=c&&m>=u;case"intersect":return n+e.helperProportions.width/2>l&&h>o-e.helperProportions.width/2&&d+e.helperProportions.height/2>c&&m>u-e.helperProportions.height/2;case"pointer":return r=(e.positionAbs||e.position.absolute).left+(e.clickOffset||e.offset.click).left,s=(e.positionAbs||e.position.absolute).top+(e.clickOffset||e.offset.click).top,t(s,c,a.proportions.height)&&t(r,l,a.proportions.width);case"touch":return(d>=c&&m>=d||u>=c&&m>=u||c>d&&u>m)&&(n>=l&&h>=n||o>=l&&h>=o||l>n&&o>h);default:return!1}},e.ui.ddmanager={current:null,droppables:{"default":[]},prepareOffsets:function(t,a){var i,r,s=e.ui.ddmanager.droppables[t.options.scope]||[],n=a?a.type:null,o=(t.currentItem||t.element).find(":data(ui-droppable)").addBack();e:for(i=0;s.length>i;i++)if(!(s[i].options.disabled||t&&!s[i].accept.call(s[i].element[0],t.currentItem||t.element))){for(r=0;o.length>r;r++)if(o[r]===s[i].element[0]){s[i].proportions.height=0;continue e}s[i].visible="none"!==s[i].element.css("display"),s[i].visible&&("mousedown"===n&&s[i]._activate.call(s[i],a),s[i].offset=s[i].element.offset(),s[i].proportions={width:s[i].element[0].offsetWidth,height:s[i].element[0].offsetHeight})}},drop:function(t,a){var i=!1;return e.each((e.ui.ddmanager.droppables[t.options.scope]||[]).slice(),function(){this.options&&(!this.options.disabled&&this.visible&&e.ui.intersect(t,this,this.options.tolerance)&&(i=this._drop.call(this,a)||i),!this.options.disabled&&this.visible&&this.accept.call(this.element[0],t.currentItem||t.element)&&(this.isout=!0,this.isover=!1,this._deactivate.call(this,a)))}),i},dragStart:function(t,a){t.element.parentsUntil("body").bind("scroll.droppable",function(){t.options.refreshPositions||e.ui.ddmanager.prepareOffsets(t,a)})},drag:function(t,a){t.options.refreshPositions&&e.ui.ddmanager.prepareOffsets(t,a),e.each(e.ui.ddmanager.droppables[t.options.scope]||[],function(){if(!this.options.disabled&&!this.greedyChild&&this.visible){var i,r,s,n=e.ui.intersect(t,this,this.options.tolerance),o=!n&&this.isover?"isout":n&&!this.isover?"isover":null;o&&(this.options.greedy&&(r=this.options.scope,s=this.element.parents(":data(ui-droppable)").filter(function(){return e.data(this,"ui-droppable").options.scope===r}),s.length&&(i=e.data(s[0],"ui-droppable"),i.greedyChild="isover"===o)),i&&"isover"===o&&(i.isover=!1,i.isout=!0,i._out.call(i,a)),this[o]=!0,this["isout"===o?"isover":"isout"]=!1,this["isover"===o?"_over":"_out"].call(this,a),i&&"isout"===o&&(i.isout=!1,i.isover=!0,i._over.call(i,a)))}})},dragStop:function(t,a){t.element.parentsUntil("body").unbind("scroll.droppable"),t.options.refreshPositions||e.ui.ddmanager.prepareOffsets(t,a)}}})(jQuery);(function(e){function t(e){return parseInt(e,10)||0}function i(e){return!isNaN(parseInt(e,10))}e.widget("ui.resizable",e.ui.mouse,{version:"1.10.3",widgetEventPrefix:"resize",options:{alsoResize:!1,animate:!1,animateDuration:"slow",animateEasing:"swing",aspectRatio:!1,autoHide:!1,containment:!1,ghost:!1,grid:!1,handles:"e,s,se",helper:!1,maxHeight:null,maxWidth:null,minHeight:10,minWidth:10,zIndex:90,resize:null,start:null,stop:null},_create:function(){var t,i,a,r,s,n=this,o=this.options;if(this.element.addClass("ui-resizable"),e.extend(this,{_aspectRatio:!!o.aspectRatio,aspectRatio:o.aspectRatio,originalElement:this.element,_proportionallyResizeElements:[],_helper:o.helper||o.ghost||o.animate?o.helper||"ui-resizable-helper":null}),this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i)&&(this.element.wrap(e("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({position:this.element.css("position"),width:this.element.outerWidth(),height:this.element.outerHeight(),top:this.element.css("top"),left:this.element.css("left")})),this.element=this.element.parent().data("ui-resizable",this.element.data("ui-resizable")),this.elementIsWrapper=!0,this.element.css({marginLeft:this.originalElement.css("marginLeft"),marginTop:this.originalElement.css("marginTop"),marginRight:this.originalElement.css("marginRight"),marginBottom:this.originalElement.css("marginBottom")}),this.originalElement.css({marginLeft:0,marginTop:0,marginRight:0,marginBottom:0}),this.originalResizeStyle=this.originalElement.css("resize"),this.originalElement.css("resize","none"),this._proportionallyResizeElements.push(this.originalElement.css({position:"static",zoom:1,display:"block"})),this.originalElement.css({margin:this.originalElement.css("margin")}),this._proportionallyResize()),this.handles=o.handles||(e(".ui-resizable-handle",this.element).length?{n:".ui-resizable-n",e:".ui-resizable-e",s:".ui-resizable-s",w:".ui-resizable-w",se:".ui-resizable-se",sw:".ui-resizable-sw",ne:".ui-resizable-ne",nw:".ui-resizable-nw"}:"e,s,se"),this.handles.constructor===String)for("all"===this.handles&&(this.handles="n,e,s,w,se,sw,ne,nw"),t=this.handles.split(","),this.handles={},i=0;t.length>i;i++)a=e.trim(t[i]),s="ui-resizable-"+a,r=e("<div class='ui-resizable-handle "+s+"'></div>"),r.css({zIndex:o.zIndex}),"se"===a&&r.addClass("ui-icon ui-icon-gripsmall-diagonal-se"),this.handles[a]=".ui-resizable-"+a,this.element.append(r);this._renderAxis=function(t){var i,a,r,s;t=t||this.element;for(i in this.handles)this.handles[i].constructor===String&&(this.handles[i]=e(this.handles[i],this.element).show()),this.elementIsWrapper&&this.originalElement[0].nodeName.match(/textarea|input|select|button/i)&&(a=e(this.handles[i],this.element),s=/sw|ne|nw|se|n|s/.test(i)?a.outerHeight():a.outerWidth(),r=["padding",/ne|nw|n/.test(i)?"Top":/se|sw|s/.test(i)?"Bottom":/^e$/.test(i)?"Right":"Left"].join(""),t.css(r,s),this._proportionallyResize()),e(this.handles[i]).length},this._renderAxis(this.element),this._handles=e(".ui-resizable-handle",this.element).disableSelection(),this._handles.mouseover(function(){n.resizing||(this.className&&(r=this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)),n.axis=r&&r[1]?r[1]:"se")}),o.autoHide&&(this._handles.hide(),e(this.element).addClass("ui-resizable-autohide").mouseenter(function(){o.disabled||(e(this).removeClass("ui-resizable-autohide"),n._handles.show())}).mouseleave(function(){o.disabled||n.resizing||(e(this).addClass("ui-resizable-autohide"),n._handles.hide())})),this._mouseInit()},_destroy:function(){this._mouseDestroy();var t,i=function(t){e(t).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()};return this.elementIsWrapper&&(i(this.element),t=this.element,this.originalElement.css({position:t.css("position"),width:t.outerWidth(),height:t.outerHeight(),top:t.css("top"),left:t.css("left")}).insertAfter(t),t.remove()),this.originalElement.css("resize",this.originalResizeStyle),i(this.originalElement),this},_mouseCapture:function(t){var i,a,r=!1;for(i in this.handles)a=e(this.handles[i])[0],(a===t.target||e.contains(a,t.target))&&(r=!0);return!this.options.disabled&&r},_mouseStart:function(i){var a,r,s,n=this.options,o=this.element.position(),d=this.element;return this.resizing=!0,/absolute/.test(d.css("position"))?d.css({position:"absolute",top:d.css("top"),left:d.css("left")}):d.is(".ui-draggable")&&d.css({position:"absolute",top:o.top,left:o.left}),this._renderProxy(),a=t(this.helper.css("left")),r=t(this.helper.css("top")),n.containment&&(a+=e(n.containment).scrollLeft()||0,r+=e(n.containment).scrollTop()||0),this.offset=this.helper.offset(),this.position={left:a,top:r},this.size=this._helper?{width:d.outerWidth(),height:d.outerHeight()}:{width:d.width(),height:d.height()},this.originalSize=this._helper?{width:d.outerWidth(),height:d.outerHeight()}:{width:d.width(),height:d.height()},this.originalPosition={left:a,top:r},this.sizeDiff={width:d.outerWidth()-d.width(),height:d.outerHeight()-d.height()},this.originalMousePosition={left:i.pageX,top:i.pageY},this.aspectRatio="number"==typeof n.aspectRatio?n.aspectRatio:this.originalSize.width/this.originalSize.height||1,s=e(".ui-resizable-"+this.axis).css("cursor"),e("body").css("cursor","auto"===s?this.axis+"-resize":s),d.addClass("ui-resizable-resizing"),this._propagate("start",i),!0},_mouseDrag:function(t){var i,a=this.helper,r={},s=this.originalMousePosition,n=this.axis,o=this.position.top,d=this.position.left,h=this.size.width,u=this.size.height,l=t.pageX-s.left||0,c=t.pageY-s.top||0,m=this._change[n];return m?(i=m.apply(this,[t,l,c]),this._updateVirtualBoundaries(t.shiftKey),(this._aspectRatio||t.shiftKey)&&(i=this._updateRatio(i,t)),i=this._respectSize(i,t),this._updateCache(i),this._propagate("resize",t),this.position.top!==o&&(r.top=this.position.top+"px"),this.position.left!==d&&(r.left=this.position.left+"px"),this.size.width!==h&&(r.width=this.size.width+"px"),this.size.height!==u&&(r.height=this.size.height+"px"),a.css(r),!this._helper&&this._proportionallyResizeElements.length&&this._proportionallyResize(),e.isEmptyObject(r)||this._trigger("resize",t,this.ui()),!1):!1},_mouseStop:function(t){this.resizing=!1;var i,a,r,s,n,o,d,h=this.options,u=this;return this._helper&&(i=this._proportionallyResizeElements,a=i.length&&/textarea/i.test(i[0].nodeName),r=a&&e.ui.hasScroll(i[0],"left")?0:u.sizeDiff.height,s=a?0:u.sizeDiff.width,n={width:u.helper.width()-s,height:u.helper.height()-r},o=parseInt(u.element.css("left"),10)+(u.position.left-u.originalPosition.left)||null,d=parseInt(u.element.css("top"),10)+(u.position.top-u.originalPosition.top)||null,h.animate||this.element.css(e.extend(n,{top:d,left:o})),u.helper.height(u.size.height),u.helper.width(u.size.width),this._helper&&!h.animate&&this._proportionallyResize()),e("body").css("cursor","auto"),this.element.removeClass("ui-resizable-resizing"),this._propagate("stop",t),this._helper&&this.helper.remove(),!1},_updateVirtualBoundaries:function(e){var t,a,r,s,n,o=this.options;n={minWidth:i(o.minWidth)?o.minWidth:0,maxWidth:i(o.maxWidth)?o.maxWidth:1/0,minHeight:i(o.minHeight)?o.minHeight:0,maxHeight:i(o.maxHeight)?o.maxHeight:1/0},(this._aspectRatio||e)&&(t=n.minHeight*this.aspectRatio,r=n.minWidth/this.aspectRatio,a=n.maxHeight*this.aspectRatio,s=n.maxWidth/this.aspectRatio,t>n.minWidth&&(n.minWidth=t),r>n.minHeight&&(n.minHeight=r),n.maxWidth>a&&(n.maxWidth=a),n.maxHeight>s&&(n.maxHeight=s)),this._vBoundaries=n},_updateCache:function(e){this.offset=this.helper.offset(),i(e.left)&&(this.position.left=e.left),i(e.top)&&(this.position.top=e.top),i(e.height)&&(this.size.height=e.height),i(e.width)&&(this.size.width=e.width)},_updateRatio:function(e){var t=this.position,a=this.size,r=this.axis;return i(e.height)?e.width=e.height*this.aspectRatio:i(e.width)&&(e.height=e.width/this.aspectRatio),"sw"===r&&(e.left=t.left+(a.width-e.width),e.top=null),"nw"===r&&(e.top=t.top+(a.height-e.height),e.left=t.left+(a.width-e.width)),e},_respectSize:function(e){var t=this._vBoundaries,a=this.axis,r=i(e.width)&&t.maxWidth&&t.maxWidth<e.width,s=i(e.height)&&t.maxHeight&&t.maxHeight<e.height,n=i(e.width)&&t.minWidth&&t.minWidth>e.width,o=i(e.height)&&t.minHeight&&t.minHeight>e.height,d=this.originalPosition.left+this.originalSize.width,h=this.position.top+this.size.height,u=/sw|nw|w/.test(a),l=/nw|ne|n/.test(a);return n&&(e.width=t.minWidth),o&&(e.height=t.minHeight),r&&(e.width=t.maxWidth),s&&(e.height=t.maxHeight),n&&u&&(e.left=d-t.minWidth),r&&u&&(e.left=d-t.maxWidth),o&&l&&(e.top=h-t.minHeight),s&&l&&(e.top=h-t.maxHeight),e.width||e.height||e.left||!e.top?e.width||e.height||e.top||!e.left||(e.left=null):e.top=null,e},_proportionallyResize:function(){if(this._proportionallyResizeElements.length){var e,t,i,a,r,s=this.helper||this.element;for(e=0;this._proportionallyResizeElements.length>e;e++){if(r=this._proportionallyResizeElements[e],!this.borderDif)for(this.borderDif=[],i=[r.css("borderTopWidth"),r.css("borderRightWidth"),r.css("borderBottomWidth"),r.css("borderLeftWidth")],a=[r.css("paddingTop"),r.css("paddingRight"),r.css("paddingBottom"),r.css("paddingLeft")],t=0;i.length>t;t++)this.borderDif[t]=(parseInt(i[t],10)||0)+(parseInt(a[t],10)||0);r.css({height:s.height()-this.borderDif[0]-this.borderDif[2]||0,width:s.width()-this.borderDif[1]-this.borderDif[3]||0})}}},_renderProxy:function(){var t=this.element,i=this.options;this.elementOffset=t.offset(),this._helper?(this.helper=this.helper||e("<div style='overflow:hidden;'></div>"),this.helper.addClass(this._helper).css({width:this.element.outerWidth()-1,height:this.element.outerHeight()-1,position:"absolute",left:this.elementOffset.left+"px",top:this.elementOffset.top+"px",zIndex:++i.zIndex}),this.helper.appendTo("body").disableSelection()):this.helper=this.element},_change:{e:function(e,t){return{width:this.originalSize.width+t}},w:function(e,t){var i=this.originalSize,a=this.originalPosition;return{left:a.left+t,width:i.width-t}},n:function(e,t,i){var a=this.originalSize,r=this.originalPosition;return{top:r.top+i,height:a.height-i}},s:function(e,t,i){return{height:this.originalSize.height+i}},se:function(t,i,a){return e.extend(this._change.s.apply(this,arguments),this._change.e.apply(this,[t,i,a]))},sw:function(t,i,a){return e.extend(this._change.s.apply(this,arguments),this._change.w.apply(this,[t,i,a]))},ne:function(t,i,a){return e.extend(this._change.n.apply(this,arguments),this._change.e.apply(this,[t,i,a]))},nw:function(t,i,a){return e.extend(this._change.n.apply(this,arguments),this._change.w.apply(this,[t,i,a]))}},_propagate:function(t,i){e.ui.plugin.call(this,t,[i,this.ui()]),"resize"!==t&&this._trigger(t,i,this.ui())},plugins:{},ui:function(){return{originalElement:this.originalElement,element:this.element,helper:this.helper,position:this.position,size:this.size,originalSize:this.originalSize,originalPosition:this.originalPosition}}}),e.ui.plugin.add("resizable","animate",{stop:function(t){var i=e(this).data("ui-resizable"),a=i.options,r=i._proportionallyResizeElements,s=r.length&&/textarea/i.test(r[0].nodeName),n=s&&e.ui.hasScroll(r[0],"left")?0:i.sizeDiff.height,o=s?0:i.sizeDiff.width,d={width:i.size.width-o,height:i.size.height-n},h=parseInt(i.element.css("left"),10)+(i.position.left-i.originalPosition.left)||null,u=parseInt(i.element.css("top"),10)+(i.position.top-i.originalPosition.top)||null;i.element.animate(e.extend(d,u&&h?{top:u,left:h}:{}),{duration:a.animateDuration,easing:a.animateEasing,step:function(){var a={width:parseInt(i.element.css("width"),10),height:parseInt(i.element.css("height"),10),top:parseInt(i.element.css("top"),10),left:parseInt(i.element.css("left"),10)};r&&r.length&&e(r[0]).css({width:a.width,height:a.height}),i._updateCache(a),i._propagate("resize",t)}})}}),e.ui.plugin.add("resizable","containment",{start:function(){var i,a,r,s,n,o,d,h=e(this).data("ui-resizable"),u=h.options,l=h.element,c=u.containment,m=c instanceof e?c.get(0):/parent/.test(c)?l.parent().get(0):c;m&&(h.containerElement=e(m),/document/.test(c)||c===document?(h.containerOffset={left:0,top:0},h.containerPosition={left:0,top:0},h.parentData={element:e(document),left:0,top:0,width:e(document).width(),height:e(document).height()||document.body.parentNode.scrollHeight}):(i=e(m),a=[],e(["Top","Right","Left","Bottom"]).each(function(e,r){a[e]=t(i.css("padding"+r))}),h.containerOffset=i.offset(),h.containerPosition=i.position(),h.containerSize={height:i.innerHeight()-a[3],width:i.innerWidth()-a[1]},r=h.containerOffset,s=h.containerSize.height,n=h.containerSize.width,o=e.ui.hasScroll(m,"left")?m.scrollWidth:n,d=e.ui.hasScroll(m)?m.scrollHeight:s,h.parentData={element:m,left:r.left,top:r.top,width:o,height:d}))},resize:function(t){var i,a,r,s,n=e(this).data("ui-resizable"),o=n.options,d=n.containerOffset,h=n.position,u=n._aspectRatio||t.shiftKey,l={top:0,left:0},c=n.containerElement;c[0]!==document&&/static/.test(c.css("position"))&&(l=d),h.left<(n._helper?d.left:0)&&(n.size.width=n.size.width+(n._helper?n.position.left-d.left:n.position.left-l.left),u&&(n.size.height=n.size.width/n.aspectRatio),n.position.left=o.helper?d.left:0),h.top<(n._helper?d.top:0)&&(n.size.height=n.size.height+(n._helper?n.position.top-d.top:n.position.top),u&&(n.size.width=n.size.height*n.aspectRatio),n.position.top=n._helper?d.top:0),n.offset.left=n.parentData.left+n.position.left,n.offset.top=n.parentData.top+n.position.top,i=Math.abs((n._helper?n.offset.left-l.left:n.offset.left-l.left)+n.sizeDiff.width),a=Math.abs((n._helper?n.offset.top-l.top:n.offset.top-d.top)+n.sizeDiff.height),r=n.containerElement.get(0)===n.element.parent().get(0),s=/relative|absolute/.test(n.containerElement.css("position")),r&&s&&(i-=n.parentData.left),i+n.size.width>=n.parentData.width&&(n.size.width=n.parentData.width-i,u&&(n.size.height=n.size.width/n.aspectRatio)),a+n.size.height>=n.parentData.height&&(n.size.height=n.parentData.height-a,u&&(n.size.width=n.size.height*n.aspectRatio))},stop:function(){var t=e(this).data("ui-resizable"),i=t.options,a=t.containerOffset,r=t.containerPosition,s=t.containerElement,n=e(t.helper),o=n.offset(),d=n.outerWidth()-t.sizeDiff.width,h=n.outerHeight()-t.sizeDiff.height;t._helper&&!i.animate&&/relative/.test(s.css("position"))&&e(this).css({left:o.left-r.left-a.left,width:d,height:h}),t._helper&&!i.animate&&/static/.test(s.css("position"))&&e(this).css({left:o.left-r.left-a.left,width:d,height:h})}}),e.ui.plugin.add("resizable","alsoResize",{start:function(){var t=e(this).data("ui-resizable"),i=t.options,a=function(t){e(t).each(function(){var t=e(this);t.data("ui-resizable-alsoresize",{width:parseInt(t.width(),10),height:parseInt(t.height(),10),left:parseInt(t.css("left"),10),top:parseInt(t.css("top"),10)})})};"object"!=typeof i.alsoResize||i.alsoResize.parentNode?a(i.alsoResize):i.alsoResize.length?(i.alsoResize=i.alsoResize[0],a(i.alsoResize)):e.each(i.alsoResize,function(e){a(e)})},resize:function(t,i){var a=e(this).data("ui-resizable"),r=a.options,s=a.originalSize,n=a.originalPosition,o={height:a.size.height-s.height||0,width:a.size.width-s.width||0,top:a.position.top-n.top||0,left:a.position.left-n.left||0},d=function(t,a){e(t).each(function(){var t=e(this),r=e(this).data("ui-resizable-alsoresize"),s={},n=a&&a.length?a:t.parents(i.originalElement[0]).length?["width","height"]:["width","height","top","left"];e.each(n,function(e,t){var i=(r[t]||0)+(o[t]||0);i&&i>=0&&(s[t]=i||null)}),t.css(s)})};"object"!=typeof r.alsoResize||r.alsoResize.nodeType?d(r.alsoResize):e.each(r.alsoResize,function(e,t){d(e,t)})},stop:function(){e(this).removeData("resizable-alsoresize")}}),e.ui.plugin.add("resizable","ghost",{start:function(){var t=e(this).data("ui-resizable"),i=t.options,a=t.size;t.ghost=t.originalElement.clone(),t.ghost.css({opacity:.25,display:"block",position:"relative",height:a.height,width:a.width,margin:0,left:0,top:0}).addClass("ui-resizable-ghost").addClass("string"==typeof i.ghost?i.ghost:""),t.ghost.appendTo(t.helper)},resize:function(){var t=e(this).data("ui-resizable");t.ghost&&t.ghost.css({position:"relative",height:t.size.height,width:t.size.width})},stop:function(){var t=e(this).data("ui-resizable");t.ghost&&t.helper&&t.helper.get(0).removeChild(t.ghost.get(0))}}),e.ui.plugin.add("resizable","grid",{resize:function(){var t=e(this).data("ui-resizable"),i=t.options,a=t.size,r=t.originalSize,s=t.originalPosition,n=t.axis,o="number"==typeof i.grid?[i.grid,i.grid]:i.grid,d=o[0]||1,h=o[1]||1,u=Math.round((a.width-r.width)/d)*d,l=Math.round((a.height-r.height)/h)*h,c=r.width+u,m=r.height+l,p=i.maxWidth&&c>i.maxWidth,f=i.maxHeight&&m>i.maxHeight,g=i.minWidth&&i.minWidth>c,y=i.minHeight&&i.minHeight>m;i.grid=o,g&&(c+=d),y&&(m+=h),p&&(c-=d),f&&(m-=h),/^(se|s|e)$/.test(n)?(t.size.width=c,t.size.height=m):/^(ne)$/.test(n)?(t.size.width=c,t.size.height=m,t.position.top=s.top-l):/^(sw)$/.test(n)?(t.size.width=c,t.size.height=m,t.position.left=s.left-u):(t.size.width=c,t.size.height=m,t.position.top=s.top-l,t.position.left=s.left-u)}})})(jQuery);(function(e){e.widget("ui.selectable",e.ui.mouse,{version:"1.10.3",options:{appendTo:"body",autoRefresh:!0,distance:0,filter:"*",tolerance:"touch",selected:null,selecting:null,start:null,stop:null,unselected:null,unselecting:null},_create:function(){var t,i=this;this.element.addClass("ui-selectable"),this.dragged=!1,this.refresh=function(){t=e(i.options.filter,i.element[0]),t.addClass("ui-selectee"),t.each(function(){var t=e(this),i=t.offset();e.data(this,"selectable-item",{element:this,$element:t,left:i.left,top:i.top,right:i.left+t.outerWidth(),bottom:i.top+t.outerHeight(),startselected:!1,selected:t.hasClass("ui-selected"),selecting:t.hasClass("ui-selecting"),unselecting:t.hasClass("ui-unselecting")})})},this.refresh(),this.selectees=t.addClass("ui-selectee"),this._mouseInit(),this.helper=e("<div class='ui-selectable-helper'></div>")},_destroy:function(){this.selectees.removeClass("ui-selectee").removeData("selectable-item"),this.element.removeClass("ui-selectable ui-selectable-disabled"),this._mouseDestroy()},_mouseStart:function(t){var i=this,a=this.options;this.opos=[t.pageX,t.pageY],this.options.disabled||(this.selectees=e(a.filter,this.element[0]),this._trigger("start",t),e(a.appendTo).append(this.helper),this.helper.css({left:t.pageX,top:t.pageY,width:0,height:0}),a.autoRefresh&&this.refresh(),this.selectees.filter(".ui-selected").each(function(){var a=e.data(this,"selectable-item");a.startselected=!0,t.metaKey||t.ctrlKey||(a.$element.removeClass("ui-selected"),a.selected=!1,a.$element.addClass("ui-unselecting"),a.unselecting=!0,i._trigger("unselecting",t,{unselecting:a.element}))}),e(t.target).parents().addBack().each(function(){var a,r=e.data(this,"selectable-item");return r?(a=!t.metaKey&&!t.ctrlKey||!r.$element.hasClass("ui-selected"),r.$element.removeClass(a?"ui-unselecting":"ui-selected").addClass(a?"ui-selecting":"ui-unselecting"),r.unselecting=!a,r.selecting=a,r.selected=a,a?i._trigger("selecting",t,{selecting:r.element}):i._trigger("unselecting",t,{unselecting:r.element}),!1):undefined}))},_mouseDrag:function(t){if(this.dragged=!0,!this.options.disabled){var i,a=this,r=this.options,s=this.opos[0],n=this.opos[1],o=t.pageX,l=t.pageY;return s>o&&(i=o,o=s,s=i),n>l&&(i=l,l=n,n=i),this.helper.css({left:s,top:n,width:o-s,height:l-n}),this.selectees.each(function(){var i=e.data(this,"selectable-item"),d=!1;i&&i.element!==a.element[0]&&("touch"===r.tolerance?d=!(i.left>o||s>i.right||i.top>l||n>i.bottom):"fit"===r.tolerance&&(d=i.left>s&&o>i.right&&i.top>n&&l>i.bottom),d?(i.selected&&(i.$element.removeClass("ui-selected"),i.selected=!1),i.unselecting&&(i.$element.removeClass("ui-unselecting"),i.unselecting=!1),i.selecting||(i.$element.addClass("ui-selecting"),i.selecting=!0,a._trigger("selecting",t,{selecting:i.element}))):(i.selecting&&((t.metaKey||t.ctrlKey)&&i.startselected?(i.$element.removeClass("ui-selecting"),i.selecting=!1,i.$element.addClass("ui-selected"),i.selected=!0):(i.$element.removeClass("ui-selecting"),i.selecting=!1,i.startselected&&(i.$element.addClass("ui-unselecting"),i.unselecting=!0),a._trigger("unselecting",t,{unselecting:i.element}))),i.selected&&(t.metaKey||t.ctrlKey||i.startselected||(i.$element.removeClass("ui-selected"),i.selected=!1,i.$element.addClass("ui-unselecting"),i.unselecting=!0,a._trigger("unselecting",t,{unselecting:i.element})))))}),!1}},_mouseStop:function(t){var i=this;return this.dragged=!1,e(".ui-unselecting",this.element[0]).each(function(){var a=e.data(this,"selectable-item");a.$element.removeClass("ui-unselecting"),a.unselecting=!1,a.startselected=!1,i._trigger("unselected",t,{unselected:a.element})}),e(".ui-selecting",this.element[0]).each(function(){var a=e.data(this,"selectable-item");a.$element.removeClass("ui-selecting").addClass("ui-selected"),a.selecting=!1,a.selected=!0,a.startselected=!0,i._trigger("selected",t,{selected:a.element})}),this._trigger("stop",t),this.helper.remove(),!1}})})(jQuery);(function(e){function t(e,t,i){return e>t&&t+i>e}function i(e){return/left|right/.test(e.css("float"))||/inline|table-cell/.test(e.css("display"))}e.widget("ui.sortable",e.ui.mouse,{version:"1.10.3",widgetEventPrefix:"sort",ready:!1,options:{appendTo:"parent",axis:!1,connectWith:!1,containment:!1,cursor:"auto",cursorAt:!1,dropOnEmpty:!0,forcePlaceholderSize:!1,forceHelperSize:!1,grid:!1,handle:!1,helper:"original",items:"> *",opacity:!1,placeholder:!1,revert:!1,scroll:!0,scrollSensitivity:20,scrollSpeed:20,scope:"default",tolerance:"intersect",zIndex:1e3,activate:null,beforeStop:null,change:null,deactivate:null,out:null,over:null,receive:null,remove:null,sort:null,start:null,stop:null,update:null},_create:function(){var e=this.options;this.containerCache={},this.element.addClass("ui-sortable"),this.refresh(),this.floating=this.items.length?"x"===e.axis||i(this.items[0].item):!1,this.offset=this.element.offset(),this._mouseInit(),this.ready=!0},_destroy:function(){this.element.removeClass("ui-sortable ui-sortable-disabled"),this._mouseDestroy();for(var e=this.items.length-1;e>=0;e--)this.items[e].item.removeData(this.widgetName+"-item");return this},_setOption:function(t,i){"disabled"===t?(this.options[t]=i,this.widget().toggleClass("ui-sortable-disabled",!!i)):e.Widget.prototype._setOption.apply(this,arguments)},_mouseCapture:function(t,i){var a=null,s=!1,r=this;return this.reverting?!1:this.options.disabled||"static"===this.options.type?!1:(this._refreshItems(t),e(t.target).parents().each(function(){return e.data(this,r.widgetName+"-item")===r?(a=e(this),!1):undefined}),e.data(t.target,r.widgetName+"-item")===r&&(a=e(t.target)),a?!this.options.handle||i||(e(this.options.handle,a).find("*").addBack().each(function(){this===t.target&&(s=!0)}),s)?(this.currentItem=a,this._removeCurrentsFromItems(),!0):!1:!1)},_mouseStart:function(t,i,a){var s,r,n=this.options;if(this.currentContainer=this,this.refreshPositions(),this.helper=this._createHelper(t),this._cacheHelperProportions(),this._cacheMargins(),this.scrollParent=this.helper.scrollParent(),this.offset=this.currentItem.offset(),this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left},e.extend(this.offset,{click:{left:t.pageX-this.offset.left,top:t.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()}),this.helper.css("position","absolute"),this.cssPosition=this.helper.css("position"),this.originalPosition=this._generatePosition(t),this.originalPageX=t.pageX,this.originalPageY=t.pageY,n.cursorAt&&this._adjustOffsetFromHelper(n.cursorAt),this.domPosition={prev:this.currentItem.prev()[0],parent:this.currentItem.parent()[0]},this.helper[0]!==this.currentItem[0]&&this.currentItem.hide(),this._createPlaceholder(),n.containment&&this._setContainment(),n.cursor&&"auto"!==n.cursor&&(r=this.document.find("body"),this.storedCursor=r.css("cursor"),r.css("cursor",n.cursor),this.storedStylesheet=e("<style>*{ cursor: "+n.cursor+" !important; }</style>").appendTo(r)),n.opacity&&(this.helper.css("opacity")&&(this._storedOpacity=this.helper.css("opacity")),this.helper.css("opacity",n.opacity)),n.zIndex&&(this.helper.css("zIndex")&&(this._storedZIndex=this.helper.css("zIndex")),this.helper.css("zIndex",n.zIndex)),this.scrollParent[0]!==document&&"HTML"!==this.scrollParent[0].tagName&&(this.overflowOffset=this.scrollParent.offset()),this._trigger("start",t,this._uiHash()),this._preserveHelperProportions||this._cacheHelperProportions(),!a)for(s=this.containers.length-1;s>=0;s--)this.containers[s]._trigger("activate",t,this._uiHash(this));return e.ui.ddmanager&&(e.ui.ddmanager.current=this),e.ui.ddmanager&&!n.dropBehaviour&&e.ui.ddmanager.prepareOffsets(this,t),this.dragging=!0,this.helper.addClass("ui-sortable-helper"),this._mouseDrag(t),!0},_mouseDrag:function(t){var i,a,s,r,n=this.options,o=!1;for(this.position=this._generatePosition(t),this.positionAbs=this._convertPositionTo("absolute"),this.lastPositionAbs||(this.lastPositionAbs=this.positionAbs),this.options.scroll&&(this.scrollParent[0]!==document&&"HTML"!==this.scrollParent[0].tagName?(this.overflowOffset.top+this.scrollParent[0].offsetHeight-t.pageY<n.scrollSensitivity?this.scrollParent[0].scrollTop=o=this.scrollParent[0].scrollTop+n.scrollSpeed:t.pageY-this.overflowOffset.top<n.scrollSensitivity&&(this.scrollParent[0].scrollTop=o=this.scrollParent[0].scrollTop-n.scrollSpeed),this.overflowOffset.left+this.scrollParent[0].offsetWidth-t.pageX<n.scrollSensitivity?this.scrollParent[0].scrollLeft=o=this.scrollParent[0].scrollLeft+n.scrollSpeed:t.pageX-this.overflowOffset.left<n.scrollSensitivity&&(this.scrollParent[0].scrollLeft=o=this.scrollParent[0].scrollLeft-n.scrollSpeed)):(t.pageY-e(document).scrollTop()<n.scrollSensitivity?o=e(document).scrollTop(e(document).scrollTop()-n.scrollSpeed):e(window).height()-(t.pageY-e(document).scrollTop())<n.scrollSensitivity&&(o=e(document).scrollTop(e(document).scrollTop()+n.scrollSpeed)),t.pageX-e(document).scrollLeft()<n.scrollSensitivity?o=e(document).scrollLeft(e(document).scrollLeft()-n.scrollSpeed):e(window).width()-(t.pageX-e(document).scrollLeft())<n.scrollSensitivity&&(o=e(document).scrollLeft(e(document).scrollLeft()+n.scrollSpeed))),o!==!1&&e.ui.ddmanager&&!n.dropBehaviour&&e.ui.ddmanager.prepareOffsets(this,t)),this.positionAbs=this._convertPositionTo("absolute"),this.options.axis&&"y"===this.options.axis||(this.helper[0].style.left=this.position.left+"px"),this.options.axis&&"x"===this.options.axis||(this.helper[0].style.top=this.position.top+"px"),i=this.items.length-1;i>=0;i--)if(a=this.items[i],s=a.item[0],r=this._intersectsWithPointer(a),r&&a.instance===this.currentContainer&&s!==this.currentItem[0]&&this.placeholder[1===r?"next":"prev"]()[0]!==s&&!e.contains(this.placeholder[0],s)&&("semi-dynamic"===this.options.type?!e.contains(this.element[0],s):!0)){if(this.direction=1===r?"down":"up","pointer"!==this.options.tolerance&&!this._intersectsWithSides(a))break;this._rearrange(t,a),this._trigger("change",t,this._uiHash());break}return this._contactContainers(t),e.ui.ddmanager&&e.ui.ddmanager.drag(this,t),this._trigger("sort",t,this._uiHash()),this.lastPositionAbs=this.positionAbs,!1},_mouseStop:function(t,i){if(t){if(e.ui.ddmanager&&!this.options.dropBehaviour&&e.ui.ddmanager.drop(this,t),this.options.revert){var a=this,s=this.placeholder.offset(),r=this.options.axis,n={};r&&"x"!==r||(n.left=s.left-this.offset.parent.left-this.margins.left+(this.offsetParent[0]===document.body?0:this.offsetParent[0].scrollLeft)),r&&"y"!==r||(n.top=s.top-this.offset.parent.top-this.margins.top+(this.offsetParent[0]===document.body?0:this.offsetParent[0].scrollTop)),this.reverting=!0,e(this.helper).animate(n,parseInt(this.options.revert,10)||500,function(){a._clear(t)})}else this._clear(t,i);return!1}},cancel:function(){if(this.dragging){this._mouseUp({target:null}),"original"===this.options.helper?this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper"):this.currentItem.show();for(var t=this.containers.length-1;t>=0;t--)this.containers[t]._trigger("deactivate",null,this._uiHash(this)),this.containers[t].containerCache.over&&(this.containers[t]._trigger("out",null,this._uiHash(this)),this.containers[t].containerCache.over=0)}return this.placeholder&&(this.placeholder[0].parentNode&&this.placeholder[0].parentNode.removeChild(this.placeholder[0]),"original"!==this.options.helper&&this.helper&&this.helper[0].parentNode&&this.helper.remove(),e.extend(this,{helper:null,dragging:!1,reverting:!1,_noFinalSort:null}),this.domPosition.prev?e(this.domPosition.prev).after(this.currentItem):e(this.domPosition.parent).prepend(this.currentItem)),this},serialize:function(t){var i=this._getItemsAsjQuery(t&&t.connected),a=[];return t=t||{},e(i).each(function(){var i=(e(t.item||this).attr(t.attribute||"id")||"").match(t.expression||/(.+)[\-=_](.+)/);i&&a.push((t.key||i[1]+"[]")+"="+(t.key&&t.expression?i[1]:i[2]))}),!a.length&&t.key&&a.push(t.key+"="),a.join("&")},toArray:function(t){var i=this._getItemsAsjQuery(t&&t.connected),a=[];return t=t||{},i.each(function(){a.push(e(t.item||this).attr(t.attribute||"id")||"")}),a},_intersectsWith:function(e){var t=this.positionAbs.left,i=t+this.helperProportions.width,a=this.positionAbs.top,s=a+this.helperProportions.height,r=e.left,n=r+e.width,o=e.top,h=o+e.height,l=this.offset.click.top,u=this.offset.click.left,d="x"===this.options.axis||a+l>o&&h>a+l,c="y"===this.options.axis||t+u>r&&n>t+u,m=d&&c;return"pointer"===this.options.tolerance||this.options.forcePointerForContainers||"pointer"!==this.options.tolerance&&this.helperProportions[this.floating?"width":"height"]>e[this.floating?"width":"height"]?m:t+this.helperProportions.width/2>r&&n>i-this.helperProportions.width/2&&a+this.helperProportions.height/2>o&&h>s-this.helperProportions.height/2},_intersectsWithPointer:function(e){var i="x"===this.options.axis||t(this.positionAbs.top+this.offset.click.top,e.top,e.height),a="y"===this.options.axis||t(this.positionAbs.left+this.offset.click.left,e.left,e.width),s=i&&a,r=this._getDragVerticalDirection(),n=this._getDragHorizontalDirection();return s?this.floating?n&&"right"===n||"down"===r?2:1:r&&("down"===r?2:1):!1},_intersectsWithSides:function(e){var i=t(this.positionAbs.top+this.offset.click.top,e.top+e.height/2,e.height),a=t(this.positionAbs.left+this.offset.click.left,e.left+e.width/2,e.width),s=this._getDragVerticalDirection(),r=this._getDragHorizontalDirection();return this.floating&&r?"right"===r&&a||"left"===r&&!a:s&&("down"===s&&i||"up"===s&&!i)},_getDragVerticalDirection:function(){var e=this.positionAbs.top-this.lastPositionAbs.top;return 0!==e&&(e>0?"down":"up")},_getDragHorizontalDirection:function(){var e=this.positionAbs.left-this.lastPositionAbs.left;return 0!==e&&(e>0?"right":"left")},refresh:function(e){return this._refreshItems(e),this.refreshPositions(),this},_connectWith:function(){var e=this.options;return e.connectWith.constructor===String?[e.connectWith]:e.connectWith},_getItemsAsjQuery:function(t){var i,a,s,r,n=[],o=[],h=this._connectWith();if(h&&t)for(i=h.length-1;i>=0;i--)for(s=e(h[i]),a=s.length-1;a>=0;a--)r=e.data(s[a],this.widgetFullName),r&&r!==this&&!r.options.disabled&&o.push([e.isFunction(r.options.items)?r.options.items.call(r.element):e(r.options.items,r.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),r]);for(o.push([e.isFunction(this.options.items)?this.options.items.call(this.element,null,{options:this.options,item:this.currentItem}):e(this.options.items,this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),this]),i=o.length-1;i>=0;i--)o[i][0].each(function(){n.push(this)});return e(n)},_removeCurrentsFromItems:function(){var t=this.currentItem.find(":data("+this.widgetName+"-item)");this.items=e.grep(this.items,function(e){for(var i=0;t.length>i;i++)if(t[i]===e.item[0])return!1;return!0})},_refreshItems:function(t){this.items=[],this.containers=[this];var i,a,s,r,n,o,h,l,u=this.items,d=[[e.isFunction(this.options.items)?this.options.items.call(this.element[0],t,{item:this.currentItem}):e(this.options.items,this.element),this]],c=this._connectWith();if(c&&this.ready)for(i=c.length-1;i>=0;i--)for(s=e(c[i]),a=s.length-1;a>=0;a--)r=e.data(s[a],this.widgetFullName),r&&r!==this&&!r.options.disabled&&(d.push([e.isFunction(r.options.items)?r.options.items.call(r.element[0],t,{item:this.currentItem}):e(r.options.items,r.element),r]),this.containers.push(r));for(i=d.length-1;i>=0;i--)for(n=d[i][1],o=d[i][0],a=0,l=o.length;l>a;a++)h=e(o[a]),h.data(this.widgetName+"-item",n),u.push({item:h,instance:n,width:0,height:0,left:0,top:0})},refreshPositions:function(t){this.offsetParent&&this.helper&&(this.offset.parent=this._getParentOffset());var i,a,s,r;for(i=this.items.length-1;i>=0;i--)a=this.items[i],a.instance!==this.currentContainer&&this.currentContainer&&a.item[0]!==this.currentItem[0]||(s=this.options.toleranceElement?e(this.options.toleranceElement,a.item):a.item,t||(a.width=s.outerWidth(),a.height=s.outerHeight()),r=s.offset(),a.left=r.left,a.top=r.top);if(this.options.custom&&this.options.custom.refreshContainers)this.options.custom.refreshContainers.call(this);else for(i=this.containers.length-1;i>=0;i--)r=this.containers[i].element.offset(),this.containers[i].containerCache.left=r.left,this.containers[i].containerCache.top=r.top,this.containers[i].containerCache.width=this.containers[i].element.outerWidth(),this.containers[i].containerCache.height=this.containers[i].element.outerHeight();return this},_createPlaceholder:function(t){t=t||this;var i,a=t.options;a.placeholder&&a.placeholder.constructor!==String||(i=a.placeholder,a.placeholder={element:function(){var a=t.currentItem[0].nodeName.toLowerCase(),s=e("<"+a+">",t.document[0]).addClass(i||t.currentItem[0].className+" ui-sortable-placeholder").removeClass("ui-sortable-helper");return"tr"===a?t.currentItem.children().each(function(){e("<td>&#160;</td>",t.document[0]).attr("colspan",e(this).attr("colspan")||1).appendTo(s)}):"img"===a&&s.attr("src",t.currentItem.attr("src")),i||s.css("visibility","hidden"),s},update:function(e,s){(!i||a.forcePlaceholderSize)&&(s.height()||s.height(t.currentItem.innerHeight()-parseInt(t.currentItem.css("paddingTop")||0,10)-parseInt(t.currentItem.css("paddingBottom")||0,10)),s.width()||s.width(t.currentItem.innerWidth()-parseInt(t.currentItem.css("paddingLeft")||0,10)-parseInt(t.currentItem.css("paddingRight")||0,10)))}}),t.placeholder=e(a.placeholder.element.call(t.element,t.currentItem)),t.currentItem.after(t.placeholder),a.placeholder.update(t,t.placeholder)},_contactContainers:function(a){var s,r,n,o,h,l,u,d,c,m,p=null,f=null;for(s=this.containers.length-1;s>=0;s--)if(!e.contains(this.currentItem[0],this.containers[s].element[0]))if(this._intersectsWith(this.containers[s].containerCache)){if(p&&e.contains(this.containers[s].element[0],p.element[0]))continue;p=this.containers[s],f=s}else this.containers[s].containerCache.over&&(this.containers[s]._trigger("out",a,this._uiHash(this)),this.containers[s].containerCache.over=0);if(p)if(1===this.containers.length)this.containers[f].containerCache.over||(this.containers[f]._trigger("over",a,this._uiHash(this)),this.containers[f].containerCache.over=1);else{for(n=1e4,o=null,m=p.floating||i(this.currentItem),h=m?"left":"top",l=m?"width":"height",u=this.positionAbs[h]+this.offset.click[h],r=this.items.length-1;r>=0;r--)e.contains(this.containers[f].element[0],this.items[r].item[0])&&this.items[r].item[0]!==this.currentItem[0]&&(!m||t(this.positionAbs.top+this.offset.click.top,this.items[r].top,this.items[r].height))&&(d=this.items[r].item.offset()[h],c=!1,Math.abs(d-u)>Math.abs(d+this.items[r][l]-u)&&(c=!0,d+=this.items[r][l]),n>Math.abs(d-u)&&(n=Math.abs(d-u),o=this.items[r],this.direction=c?"up":"down"));if(!o&&!this.options.dropOnEmpty)return;if(this.currentContainer===this.containers[f])return;o?this._rearrange(a,o,null,!0):this._rearrange(a,null,this.containers[f].element,!0),this._trigger("change",a,this._uiHash()),this.containers[f]._trigger("change",a,this._uiHash(this)),this.currentContainer=this.containers[f],this.options.placeholder.update(this.currentContainer,this.placeholder),this.containers[f]._trigger("over",a,this._uiHash(this)),this.containers[f].containerCache.over=1}},_createHelper:function(t){var i=this.options,a=e.isFunction(i.helper)?e(i.helper.apply(this.element[0],[t,this.currentItem])):"clone"===i.helper?this.currentItem.clone():this.currentItem;return a.parents("body").length||e("parent"!==i.appendTo?i.appendTo:this.currentItem[0].parentNode)[0].appendChild(a[0]),a[0]===this.currentItem[0]&&(this._storedCSS={width:this.currentItem[0].style.width,height:this.currentItem[0].style.height,position:this.currentItem.css("position"),top:this.currentItem.css("top"),left:this.currentItem.css("left")}),(!a[0].style.width||i.forceHelperSize)&&a.width(this.currentItem.width()),(!a[0].style.height||i.forceHelperSize)&&a.height(this.currentItem.height()),a},_adjustOffsetFromHelper:function(t){"string"==typeof t&&(t=t.split(" ")),e.isArray(t)&&(t={left:+t[0],top:+t[1]||0}),"left"in t&&(this.offset.click.left=t.left+this.margins.left),"right"in t&&(this.offset.click.left=this.helperProportions.width-t.right+this.margins.left),"top"in t&&(this.offset.click.top=t.top+this.margins.top),"bottom"in t&&(this.offset.click.top=this.helperProportions.height-t.bottom+this.margins.top)},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var t=this.offsetParent.offset();return"absolute"===this.cssPosition&&this.scrollParent[0]!==document&&e.contains(this.scrollParent[0],this.offsetParent[0])&&(t.left+=this.scrollParent.scrollLeft(),t.top+=this.scrollParent.scrollTop()),(this.offsetParent[0]===document.body||this.offsetParent[0].tagName&&"html"===this.offsetParent[0].tagName.toLowerCase()&&e.ui.ie)&&(t={top:0,left:0}),{top:t.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:t.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if("relative"===this.cssPosition){var e=this.currentItem.position();return{top:e.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:e.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}return{top:0,left:0}},_cacheMargins:function(){this.margins={left:parseInt(this.currentItem.css("marginLeft"),10)||0,top:parseInt(this.currentItem.css("marginTop"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var t,i,a,s=this.options;"parent"===s.containment&&(s.containment=this.helper[0].parentNode),("document"===s.containment||"window"===s.containment)&&(this.containment=[0-this.offset.relative.left-this.offset.parent.left,0-this.offset.relative.top-this.offset.parent.top,e("document"===s.containment?document:window).width()-this.helperProportions.width-this.margins.left,(e("document"===s.containment?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]),/^(document|window|parent)$/.test(s.containment)||(t=e(s.containment)[0],i=e(s.containment).offset(),a="hidden"!==e(t).css("overflow"),this.containment=[i.left+(parseInt(e(t).css("borderLeftWidth"),10)||0)+(parseInt(e(t).css("paddingLeft"),10)||0)-this.margins.left,i.top+(parseInt(e(t).css("borderTopWidth"),10)||0)+(parseInt(e(t).css("paddingTop"),10)||0)-this.margins.top,i.left+(a?Math.max(t.scrollWidth,t.offsetWidth):t.offsetWidth)-(parseInt(e(t).css("borderLeftWidth"),10)||0)-(parseInt(e(t).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left,i.top+(a?Math.max(t.scrollHeight,t.offsetHeight):t.offsetHeight)-(parseInt(e(t).css("borderTopWidth"),10)||0)-(parseInt(e(t).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top])},_convertPositionTo:function(t,i){i||(i=this.position);var a="absolute"===t?1:-1,s="absolute"!==this.cssPosition||this.scrollParent[0]!==document&&e.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,r=/(html|body)/i.test(s[0].tagName);return{top:i.top+this.offset.relative.top*a+this.offset.parent.top*a-("fixed"===this.cssPosition?-this.scrollParent.scrollTop():r?0:s.scrollTop())*a,left:i.left+this.offset.relative.left*a+this.offset.parent.left*a-("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():r?0:s.scrollLeft())*a}},_generatePosition:function(t){var i,a,s=this.options,r=t.pageX,n=t.pageY,o="absolute"!==this.cssPosition||this.scrollParent[0]!==document&&e.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,h=/(html|body)/i.test(o[0].tagName);return"relative"!==this.cssPosition||this.scrollParent[0]!==document&&this.scrollParent[0]!==this.offsetParent[0]||(this.offset.relative=this._getRelativeOffset()),this.originalPosition&&(this.containment&&(t.pageX-this.offset.click.left<this.containment[0]&&(r=this.containment[0]+this.offset.click.left),t.pageY-this.offset.click.top<this.containment[1]&&(n=this.containment[1]+this.offset.click.top),t.pageX-this.offset.click.left>this.containment[2]&&(r=this.containment[2]+this.offset.click.left),t.pageY-this.offset.click.top>this.containment[3]&&(n=this.containment[3]+this.offset.click.top)),s.grid&&(i=this.originalPageY+Math.round((n-this.originalPageY)/s.grid[1])*s.grid[1],n=this.containment?i-this.offset.click.top>=this.containment[1]&&i-this.offset.click.top<=this.containment[3]?i:i-this.offset.click.top>=this.containment[1]?i-s.grid[1]:i+s.grid[1]:i,a=this.originalPageX+Math.round((r-this.originalPageX)/s.grid[0])*s.grid[0],r=this.containment?a-this.offset.click.left>=this.containment[0]&&a-this.offset.click.left<=this.containment[2]?a:a-this.offset.click.left>=this.containment[0]?a-s.grid[0]:a+s.grid[0]:a)),{top:n-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+("fixed"===this.cssPosition?-this.scrollParent.scrollTop():h?0:o.scrollTop()),left:r-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():h?0:o.scrollLeft())}},_rearrange:function(e,t,i,a){i?i[0].appendChild(this.placeholder[0]):t.item[0].parentNode.insertBefore(this.placeholder[0],"down"===this.direction?t.item[0]:t.item[0].nextSibling),this.counter=this.counter?++this.counter:1;var s=this.counter;this._delay(function(){s===this.counter&&this.refreshPositions(!a)})},_clear:function(e,t){this.reverting=!1;var i,a=[];if(!this._noFinalSort&&this.currentItem.parent().length&&this.placeholder.before(this.currentItem),this._noFinalSort=null,this.helper[0]===this.currentItem[0]){for(i in this._storedCSS)("auto"===this._storedCSS[i]||"static"===this._storedCSS[i])&&(this._storedCSS[i]="");this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")}else this.currentItem.show();for(this.fromOutside&&!t&&a.push(function(e){this._trigger("receive",e,this._uiHash(this.fromOutside))}),!this.fromOutside&&this.domPosition.prev===this.currentItem.prev().not(".ui-sortable-helper")[0]&&this.domPosition.parent===this.currentItem.parent()[0]||t||a.push(function(e){this._trigger("update",e,this._uiHash())}),this!==this.currentContainer&&(t||(a.push(function(e){this._trigger("remove",e,this._uiHash())}),a.push(function(e){return function(t){e._trigger("receive",t,this._uiHash(this))}}.call(this,this.currentContainer)),a.push(function(e){return function(t){e._trigger("update",t,this._uiHash(this))}}.call(this,this.currentContainer)))),i=this.containers.length-1;i>=0;i--)t||a.push(function(e){return function(t){e._trigger("deactivate",t,this._uiHash(this))}}.call(this,this.containers[i])),this.containers[i].containerCache.over&&(a.push(function(e){return function(t){e._trigger("out",t,this._uiHash(this))}}.call(this,this.containers[i])),this.containers[i].containerCache.over=0);if(this.storedCursor&&(this.document.find("body").css("cursor",this.storedCursor),this.storedStylesheet.remove()),this._storedOpacity&&this.helper.css("opacity",this._storedOpacity),this._storedZIndex&&this.helper.css("zIndex","auto"===this._storedZIndex?"":this._storedZIndex),this.dragging=!1,this.cancelHelperRemoval){if(!t){for(this._trigger("beforeStop",e,this._uiHash()),i=0;a.length>i;i++)a[i].call(this,e);this._trigger("stop",e,this._uiHash())}return this.fromOutside=!1,!1}if(t||this._trigger("beforeStop",e,this._uiHash()),this.placeholder[0].parentNode.removeChild(this.placeholder[0]),this.helper[0]!==this.currentItem[0]&&this.helper.remove(),this.helper=null,!t){for(i=0;a.length>i;i++)a[i].call(this,e);this._trigger("stop",e,this._uiHash())}return this.fromOutside=!1,!0},_trigger:function(){e.Widget.prototype._trigger.apply(this,arguments)===!1&&this.cancel()},_uiHash:function(t){var i=t||this;return{helper:i.helper,placeholder:i.placeholder||e([]),position:i.position,originalPosition:i.originalPosition,offset:i.positionAbs,item:i.currentItem,sender:t?t.element:null}}})})(jQuery);(function(e){var t=0,a={},r={};a.height=a.paddingTop=a.paddingBottom=a.borderTopWidth=a.borderBottomWidth="hide",r.height=r.paddingTop=r.paddingBottom=r.borderTopWidth=r.borderBottomWidth="show",e.widget("ui.accordion",{version:"1.10.3",options:{active:0,animate:{},collapsible:!1,event:"click",header:"> li > :first-child,> :not(li):even",heightStyle:"auto",icons:{activeHeader:"ui-icon-triangle-1-s",header:"ui-icon-triangle-1-e"},activate:null,beforeActivate:null},_create:function(){var t=this.options;this.prevShow=this.prevHide=e(),this.element.addClass("ui-accordion ui-widget ui-helper-reset").attr("role","tablist"),t.collapsible||t.active!==!1&&null!=t.active||(t.active=0),this._processPanels(),0>t.active&&(t.active+=this.headers.length),this._refresh()},_getCreateEventData:function(){return{header:this.active,panel:this.active.length?this.active.next():e(),content:this.active.length?this.active.next():e()}},_createIcons:function(){var t=this.options.icons;t&&(e("<span>").addClass("ui-accordion-header-icon ui-icon "+t.header).prependTo(this.headers),this.active.children(".ui-accordion-header-icon").removeClass(t.header).addClass(t.activeHeader),this.headers.addClass("ui-accordion-icons"))},_destroyIcons:function(){this.headers.removeClass("ui-accordion-icons").children(".ui-accordion-header-icon").remove()},_destroy:function(){var e;this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role"),this.headers.removeClass("ui-accordion-header ui-accordion-header-active ui-helper-reset ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-selected").removeAttr("aria-controls").removeAttr("tabIndex").each(function(){/^ui-accordion/.test(this.id)&&this.removeAttribute("id")}),this._destroyIcons(),e=this.headers.next().css("display","").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-labelledby").removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-state-disabled").each(function(){/^ui-accordion/.test(this.id)&&this.removeAttribute("id")}),"content"!==this.options.heightStyle&&e.css("height","")},_setOption:function(e,t){return"active"===e?(this._activate(t),undefined):("event"===e&&(this.options.event&&this._off(this.headers,this.options.event),this._setupEvents(t)),this._super(e,t),"collapsible"!==e||t||this.options.active!==!1||this._activate(0),"icons"===e&&(this._destroyIcons(),t&&this._createIcons()),"disabled"===e&&this.headers.add(this.headers.next()).toggleClass("ui-state-disabled",!!t),undefined)},_keydown:function(t){if(!t.altKey&&!t.ctrlKey){var a=e.ui.keyCode,r=this.headers.length,i=this.headers.index(t.target),n=!1;switch(t.keyCode){case a.RIGHT:case a.DOWN:n=this.headers[(i+1)%r];break;case a.LEFT:case a.UP:n=this.headers[(i-1+r)%r];break;case a.SPACE:case a.ENTER:this._eventHandler(t);break;case a.HOME:n=this.headers[0];break;case a.END:n=this.headers[r-1]}n&&(e(t.target).attr("tabIndex",-1),e(n).attr("tabIndex",0),n.focus(),t.preventDefault())}},_panelKeyDown:function(t){t.keyCode===e.ui.keyCode.UP&&t.ctrlKey&&e(t.currentTarget).prev().focus()},refresh:function(){var t=this.options;this._processPanels(),t.active===!1&&t.collapsible===!0||!this.headers.length?(t.active=!1,this.active=e()):t.active===!1?this._activate(0):this.active.length&&!e.contains(this.element[0],this.active[0])?this.headers.length===this.headers.find(".ui-state-disabled").length?(t.active=!1,this.active=e()):this._activate(Math.max(0,t.active-1)):t.active=this.headers.index(this.active),this._destroyIcons(),this._refresh()},_processPanels:function(){this.headers=this.element.find(this.options.header).addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-all"),this.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").filter(":not(.ui-accordion-content-active)").hide()},_refresh:function(){var a,r=this.options,i=r.heightStyle,n=this.element.parent(),s=this.accordionId="ui-accordion-"+(this.element.attr("id")||++t);this.active=this._findActive(r.active).addClass("ui-accordion-header-active ui-state-active ui-corner-top").removeClass("ui-corner-all"),this.active.next().addClass("ui-accordion-content-active").show(),this.headers.attr("role","tab").each(function(t){var a=e(this),r=a.attr("id"),i=a.next(),n=i.attr("id");r||(r=s+"-header-"+t,a.attr("id",r)),n||(n=s+"-panel-"+t,i.attr("id",n)),a.attr("aria-controls",n),i.attr("aria-labelledby",r)}).next().attr("role","tabpanel"),this.headers.not(this.active).attr({"aria-selected":"false",tabIndex:-1}).next().attr({"aria-expanded":"false","aria-hidden":"true"}).hide(),this.active.length?this.active.attr({"aria-selected":"true",tabIndex:0}).next().attr({"aria-expanded":"true","aria-hidden":"false"}):this.headers.eq(0).attr("tabIndex",0),this._createIcons(),this._setupEvents(r.event),"fill"===i?(a=n.height(),this.element.siblings(":visible").each(function(){var t=e(this),r=t.css("position");"absolute"!==r&&"fixed"!==r&&(a-=t.outerHeight(!0))}),this.headers.each(function(){a-=e(this).outerHeight(!0)}),this.headers.next().each(function(){e(this).height(Math.max(0,a-e(this).innerHeight()+e(this).height()))}).css("overflow","auto")):"auto"===i&&(a=0,this.headers.next().each(function(){a=Math.max(a,e(this).css("height","").height())}).height(a))},_activate:function(t){var a=this._findActive(t)[0];a!==this.active[0]&&(a=a||this.active[0],this._eventHandler({target:a,currentTarget:a,preventDefault:e.noop}))},_findActive:function(t){return"number"==typeof t?this.headers.eq(t):e()},_setupEvents:function(t){var a={keydown:"_keydown"};t&&e.each(t.split(" "),function(e,t){a[t]="_eventHandler"}),this._off(this.headers.add(this.headers.next())),this._on(this.headers,a),this._on(this.headers.next(),{keydown:"_panelKeyDown"}),this._hoverable(this.headers),this._focusable(this.headers)},_eventHandler:function(t){var a=this.options,r=this.active,i=e(t.currentTarget),n=i[0]===r[0],s=n&&a.collapsible,o=s?e():i.next(),d=r.next(),u={oldHeader:r,oldPanel:d,newHeader:s?e():i,newPanel:o};t.preventDefault(),n&&!a.collapsible||this._trigger("beforeActivate",t,u)===!1||(a.active=s?!1:this.headers.index(i),this.active=n?e():i,this._toggle(u),r.removeClass("ui-accordion-header-active ui-state-active"),a.icons&&r.children(".ui-accordion-header-icon").removeClass(a.icons.activeHeader).addClass(a.icons.header),n||(i.removeClass("ui-corner-all").addClass("ui-accordion-header-active ui-state-active ui-corner-top"),a.icons&&i.children(".ui-accordion-header-icon").removeClass(a.icons.header).addClass(a.icons.activeHeader),i.next().addClass("ui-accordion-content-active")))},_toggle:function(t){var a=t.newPanel,r=this.prevShow.length?this.prevShow:t.oldPanel;this.prevShow.add(this.prevHide).stop(!0,!0),this.prevShow=a,this.prevHide=r,this.options.animate?this._animate(a,r,t):(r.hide(),a.show(),this._toggleComplete(t)),r.attr({"aria-expanded":"false","aria-hidden":"true"}),r.prev().attr("aria-selected","false"),a.length&&r.length?r.prev().attr("tabIndex",-1):a.length&&this.headers.filter(function(){return 0===e(this).attr("tabIndex")}).attr("tabIndex",-1),a.attr({"aria-expanded":"true","aria-hidden":"false"}).prev().attr({"aria-selected":"true",tabIndex:0})},_animate:function(e,t,i){var n,s,o,d=this,u=0,m=e.length&&(!t.length||e.index()<t.index()),c=this.options.animate||{},h=m&&c.down||c,l=function(){d._toggleComplete(i)};return"number"==typeof h&&(o=h),"string"==typeof h&&(s=h),s=s||h.easing||c.easing,o=o||h.duration||c.duration,t.length?e.length?(n=e.show().outerHeight(),t.animate(a,{duration:o,easing:s,step:function(e,t){t.now=Math.round(e)}}),e.hide().animate(r,{duration:o,easing:s,complete:l,step:function(e,a){a.now=Math.round(e),"height"!==a.prop?u+=a.now:"content"!==d.options.heightStyle&&(a.now=Math.round(n-t.outerHeight()-u),u=0)}}),undefined):t.animate(a,o,s,l):e.animate(r,o,s,l)},_toggleComplete:function(e){var t=e.oldPanel;t.removeClass("ui-accordion-content-active").prev().removeClass("ui-corner-top").addClass("ui-corner-all"),t.length&&(t.parent()[0].className=t.parent()[0].className),this._trigger("activate",null,e)}})})(jQuery);(function(e){var t=0;e.widget("ui.autocomplete",{version:"1.10.3",defaultElement:"<input>",options:{appendTo:null,autoFocus:!1,delay:300,minLength:1,position:{my:"left top",at:"left bottom",collision:"none"},source:null,change:null,close:null,focus:null,open:null,response:null,search:null,select:null},pending:0,_create:function(){var t,a,r,i=this.element[0].nodeName.toLowerCase(),n="textarea"===i,s="input"===i;this.isMultiLine=n?!0:s?!1:this.element.prop("isContentEditable"),this.valueMethod=this.element[n||s?"val":"text"],this.isNewMenu=!0,this.element.addClass("ui-autocomplete-input").attr("autocomplete","off"),this._on(this.element,{keydown:function(i){if(this.element.prop("readOnly"))return t=!0,r=!0,a=!0,undefined;t=!1,r=!1,a=!1;var n=e.ui.keyCode;switch(i.keyCode){case n.PAGE_UP:t=!0,this._move("previousPage",i);break;case n.PAGE_DOWN:t=!0,this._move("nextPage",i);break;case n.UP:t=!0,this._keyEvent("anterior",i);break;case n.DOWN:t=!0,this._keyEvent("next",i);break;case n.ENTER:case n.NUMPAD_ENTER:this.menu.active&&(t=!0,i.preventDefault(),this.menu.select(i));break;case n.TAB:this.menu.active&&this.menu.select(i);break;case n.ESCAPE:this.menu.element.is(":visible")&&(this._value(this.term),this.close(i),i.preventDefault());break;default:a=!0,this._searchTimeout(i)}},keypress:function(r){if(t)return t=!1,(!this.isMultiLine||this.menu.element.is(":visible"))&&r.preventDefault(),undefined;if(!a){var i=e.ui.keyCode;switch(r.keyCode){case i.PAGE_UP:this._move("previousPage",r);break;case i.PAGE_DOWN:this._move("nextPage",r);break;case i.UP:this._keyEvent("anterior",r);break;case i.DOWN:this._keyEvent("next",r)}}},input:function(e){return r?(r=!1,e.preventDefault(),undefined):(this._searchTimeout(e),undefined)},focus:function(){this.selectedItem=null,this.previous=this._value()},blur:function(e){return this.cancelBlur?(delete this.cancelBlur,undefined):(clearTimeout(this.searching),this.close(e),this._change(e),undefined)}}),this._initSource(),this.menu=e("<ul>").addClass("ui-autocomplete ui-front").appendTo(this._appendTo()).menu({role:null}).hide().data("ui-menu"),this._on(this.menu.element,{mousedown:function(t){t.preventDefault(),this.cancelBlur=!0,this._delay(function(){delete this.cancelBlur});var a=this.menu.element[0];e(t.target).closest(".ui-menu-item").length||this._delay(function(){var t=this;this.document.one("mousedown",function(r){r.target===t.element[0]||r.target===a||e.contains(a,r.target)||t.close()})})},menufocus:function(t,a){if(this.isNewMenu&&(this.isNewMenu=!1,t.originalEvent&&/^mouse/.test(t.originalEvent.type)))return this.menu.blur(),this.document.one("mousemove",function(){e(t.target).trigger(t.originalEvent)}),undefined;var r=a.item.data("ui-autocomplete-item");!1!==this._trigger("focus",t,{item:r})?t.originalEvent&&/^key/.test(t.originalEvent.type)&&this._value(r.value):this.liveRegion.text(r.value)},menuselect:function(e,t){var a=t.item.data("ui-autocomplete-item"),r=this.previous;this.element[0]!==this.document[0].activeElement&&(this.element.focus(),this.previous=r,this._delay(function(){this.previous=r,this.selectedItem=a})),!1!==this._trigger("select",e,{item:a})&&this._value(a.value),this.term=this._value(),this.close(e),this.selectedItem=a}}),this.liveRegion=e("<span>",{role:"status","aria-live":"polite"}).addClass("ui-helper-hidden-accessible").insertBefore(this.element),this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete")}})},_destroy:function(){clearTimeout(this.searching),this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete"),this.menu.element.remove(),this.liveRegion.remove()},_setOption:function(e,t){this._super(e,t),"source"===e&&this._initSource(),"appendTo"===e&&this.menu.element.appendTo(this._appendTo()),"disabled"===e&&t&&this.xhr&&this.xhr.abort()},_appendTo:function(){var t=this.options.appendTo;return t&&(t=t.jquery||t.nodeType?e(t):this.document.find(t).eq(0)),t||(t=this.element.closest(".ui-front")),t.length||(t=this.document[0].body),t},_initSource:function(){var t,a,r=this;e.isArray(this.options.source)?(t=this.options.source,this.source=function(a,r){r(e.ui.autocomplete.filter(t,a.term))}):"string"==typeof this.options.source?(a=this.options.source,this.source=function(t,i){r.xhr&&r.xhr.abort(),r.xhr=e.ajax({url:a,data:t,dataType:"json",success:function(e){i(e)},error:function(){i([])}})}):this.source=this.options.source},_searchTimeout:function(e){clearTimeout(this.searching),this.searching=this._delay(function(){this.term!==this._value()&&(this.selectedItem=null,this.search(null,e))},this.options.delay)},search:function(e,t){return e=null!=e?e:this._value(),this.term=this._value(),e.length<this.options.minLength?this.close(t):this._trigger("search",t)!==!1?this._search(e):undefined},_search:function(e){this.pending++,this.element.addClass("ui-autocomplete-loading"),this.cancelSearch=!1,this.source({term:e},this._response())},_response:function(){var e=this,a=++t;return function(r){a===t&&e.__response(r),e.pending--,e.pending||e.element.removeClass("ui-autocomplete-loading")}},__response:function(e){e&&(e=this._normalize(e)),this._trigger("response",null,{content:e}),!this.options.disabled&&e&&e.length&&!this.cancelSearch?(this._suggest(e),this._trigger("open")):this._close()},close:function(e){this.cancelSearch=!0,this._close(e)},_close:function(e){this.menu.element.is(":visible")&&(this.menu.element.hide(),this.menu.blur(),this.isNewMenu=!0,this._trigger("close",e))},_change:function(e){this.previous!==this._value()&&this._trigger("change",e,{item:this.selectedItem})},_normalize:function(t){return t.length&&t[0].label&&t[0].value?t:e.map(t,function(t){return"string"==typeof t?{label:t,value:t}:e.extend({label:t.label||t.value,value:t.value||t.label},t)})},_suggest:function(t){var a=this.menu.element.empty();this._renderMenu(a,t),this.isNewMenu=!0,this.menu.refresh(),a.show(),this._resizeMenu(),a.position(e.extend({of:this.element},this.options.position)),this.options.autoFocus&&this.menu.next()},_resizeMenu:function(){var e=this.menu.element;e.outerWidth(Math.max(e.width("").outerWidth()+1,this.element.outerWidth()))},_renderMenu:function(t,a){var r=this;e.each(a,function(e,a){r._renderItemData(t,a)})},_renderItemData:function(e,t){return this._renderItem(e,t).data("ui-autocomplete-item",t)},_renderItem:function(t,a){return e("<li>").append(e("<a>").text(a.label)).appendTo(t)},_move:function(e,t){return this.menu.element.is(":visible")?this.menu.isFirstItem()&&/^previous/.test(e)||this.menu.isLastItem()&&/^next/.test(e)?(this._value(this.term),this.menu.blur(),undefined):(this.menu[e](t),undefined):(this.search(null,t),undefined)},widget:function(){return this.menu.element},_value:function(){return this.valueMethod.apply(this.element,arguments)},_keyEvent:function(e,t){(!this.isMultiLine||this.menu.element.is(":visible"))&&(this._move(e,t),t.preventDefault())}}),e.extend(e.ui.autocomplete,{escapeRegex:function(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")},filter:function(t,a){var r=RegExp(e.ui.autocomplete.escapeRegex(a),"i");return e.grep(t,function(e){return r.test(e.label||e.value||e)})}}),e.widget("ui.autocomplete",e.ui.autocomplete,{options:{messages:{noResults:"No search results.",results:function(e){return e+(e>1?" results are":" result is")+" available, use up and down arrow keys to navigate."}}},__response:function(e){var t;this._superApply(arguments),this.options.disabled||this.cancelSearch||(t=e&&e.length?this.options.messages.results(e.length):this.options.messages.noResults,this.liveRegion.text(t))}})})(jQuery);(function(e){var t,a,r,i,n="ui-button ui-widget ui-state-default ui-corner-all",s="ui-state-hover ui-state-active ",o="ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only",d=function(){var t=e(this);setTimeout(function(){t.find(":ui-button").button("refresh")},1)},u=function(t){var a=t.name,r=t.form,i=e([]);return a&&(a=a.replace(/'/g,"\\'"),i=r?e(r).find("[name='"+a+"']"):e("[name='"+a+"']",t.ownerDocument).filter(function(){return!this.form})),i};e.widget("ui.button",{version:"1.10.3",defaultElement:"<button>",options:{disabled:null,text:!0,label:null,icons:{primary:null,secondary:null}},_create:function(){this.element.closest("form").unbind("reset"+this.eventNamespace).bind("reset"+this.eventNamespace,d),"boolean"!=typeof this.options.disabled?this.options.disabled=!!this.element.prop("disabled"):this.element.prop("disabled",this.options.disabled),this._determineButtonType(),this.hasTitle=!!this.buttonElement.attr("title");var s=this,o=this.options,m="checkbox"===this.type||"radio"===this.type,c=m?"":"ui-state-active",h="ui-state-focus";null===o.label&&(o.label="input"===this.type?this.buttonElement.val():this.buttonElement.html()),this._hoverable(this.buttonElement),this.buttonElement.addClass(n).attr("role","button").bind("mouseenter"+this.eventNamespace,function(){o.disabled||this===t&&e(this).addClass("ui-state-active")}).bind("mouseleave"+this.eventNamespace,function(){o.disabled||e(this).removeClass(c)}).bind("click"+this.eventNamespace,function(e){o.disabled&&(e.preventDefault(),e.stopImmediatePropagation())}),this.element.bind("focus"+this.eventNamespace,function(){s.buttonElement.addClass(h)}).bind("blur"+this.eventNamespace,function(){s.buttonElement.removeClass(h)}),m&&(this.element.bind("change"+this.eventNamespace,function(){i||s.refresh()}),this.buttonElement.bind("mousedown"+this.eventNamespace,function(e){o.disabled||(i=!1,a=e.pageX,r=e.pageY)}).bind("mouseup"+this.eventNamespace,function(e){o.disabled||(a!==e.pageX||r!==e.pageY)&&(i=!0)})),"checkbox"===this.type?this.buttonElement.bind("click"+this.eventNamespace,function(){return o.disabled||i?!1:undefined}):"radio"===this.type?this.buttonElement.bind("click"+this.eventNamespace,function(){if(o.disabled||i)return!1;e(this).addClass("ui-state-active"),s.buttonElement.attr("aria-pressed","true");var t=s.element[0];u(t).not(t).map(function(){return e(this).button("widget")[0]}).removeClass("ui-state-active").attr("aria-pressed","false")}):(this.buttonElement.bind("mousedown"+this.eventNamespace,function(){return o.disabled?!1:(e(this).addClass("ui-state-active"),t=this,s.document.one("mouseup",function(){t=null}),undefined)}).bind("mouseup"+this.eventNamespace,function(){return o.disabled?!1:(e(this).removeClass("ui-state-active"),undefined)}).bind("keydown"+this.eventNamespace,function(t){return o.disabled?!1:((t.keyCode===e.ui.keyCode.SPACE||t.keyCode===e.ui.keyCode.ENTER)&&e(this).addClass("ui-state-active"),undefined)}).bind("keyup"+this.eventNamespace+" blur"+this.eventNamespace,function(){e(this).removeClass("ui-state-active")}),this.buttonElement.is("a")&&this.buttonElement.keyup(function(t){t.keyCode===e.ui.keyCode.SPACE&&e(this).click()})),this._setOption("disabled",o.disabled),this._resetButton()},_determineButtonType:function(){var e,t,a;this.type=this.element.is("[type=checkbox]")?"checkbox":this.element.is("[type=radio]")?"radio":this.element.is("input")?"input":"button","checkbox"===this.type||"radio"===this.type?(e=this.element.parents().last(),t="label[for='"+this.element.attr("id")+"']",this.buttonElement=e.find(t),this.buttonElement.length||(e=e.length?e.siblings():this.element.siblings(),this.buttonElement=e.filter(t),this.buttonElement.length||(this.buttonElement=e.find(t))),this.element.addClass("ui-helper-hidden-accessible"),a=this.element.is(":checked"),a&&this.buttonElement.addClass("ui-state-active"),this.buttonElement.prop("aria-pressed",a)):this.buttonElement=this.element},widget:function(){return this.buttonElement},_destroy:function(){this.element.removeClass("ui-helper-hidden-accessible"),this.buttonElement.removeClass(n+" "+s+" "+o).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html()),this.hasTitle||this.buttonElement.removeAttr("title")},_setOption:function(e,t){return this._super(e,t),"disabled"===e?(t?this.element.prop("disabled",!0):this.element.prop("disabled",!1),undefined):(this._resetButton(),undefined)},refresh:function(){var t=this.element.is("input, button")?this.element.is(":disabled"):this.element.hasClass("ui-button-disabled");t!==this.options.disabled&&this._setOption("disabled",t),"radio"===this.type?u(this.element[0]).each(function(){e(this).is(":checked")?e(this).button("widget").addClass("ui-state-active").attr("aria-pressed","true"):e(this).button("widget").removeClass("ui-state-active").attr("aria-pressed","false")}):"checkbox"===this.type&&(this.element.is(":checked")?this.buttonElement.addClass("ui-state-active").attr("aria-pressed","true"):this.buttonElement.removeClass("ui-state-active").attr("aria-pressed","false"))},_resetButton:function(){if("input"===this.type)return this.options.label&&this.element.val(this.options.label),undefined;var t=this.buttonElement.removeClass(o),a=e("<span></span>",this.document[0]).addClass("ui-button-text").html(this.options.label).appendTo(t.empty()).text(),r=this.options.icons,i=r.primary&&r.secondary,n=[];r.primary||r.secondary?(this.options.text&&n.push("ui-button-text-icon"+(i?"s":r.primary?"-primary":"-secondary")),r.primary&&t.prepend("<span class='ui-button-icon-primary ui-icon "+r.primary+"'></span>"),r.secondary&&t.append("<span class='ui-button-icon-secondary ui-icon "+r.secondary+"'></span>"),this.options.text||(n.push(i?"ui-button-icons-only":"ui-button-icon-only"),this.hasTitle||t.attr("title",e.trim(a)))):n.push("ui-button-text-only"),t.addClass(n.join(" "))}}),e.widget("ui.buttonset",{version:"1.10.3",options:{items:"button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(ui-button)"},_create:function(){this.element.addClass("ui-buttonset")},_init:function(){this.refresh()},_setOption:function(e,t){"disabled"===e&&this.buttons.button("option",e,t),this._super(e,t)},refresh:function(){var t="rtl"===this.element.css("direction");this.buttons=this.element.find(this.options.items).filter(":ui-button").button("refresh").end().not(":ui-button").button().end().map(function(){return e(this).button("widget")[0]}).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(t?"ui-corner-right":"ui-corner-left").end().filter(":last").addClass(t?"ui-corner-left":"ui-corner-right").end().end()},_destroy:function(){this.element.removeClass("ui-buttonset"),this.buttons.map(function(){return e(this).button("widget")[0]}).removeClass("ui-corner-left ui-corner-right").end().button("destroy")}})})(jQuery);(function(e,t){function a(){this._curInst=null,this._keyEvent=!1,this._disabledInputs=[],this._datepickerShowing=!1,this._inDialog=!1,this._mainDivId="ui-datepicker-div",this._inlineClass="ui-datepicker-inline",this._appendClass="ui-datepicker-append",this._triggerClass="ui-datepicker-trigger",this._dialogClass="ui-datepicker-dialog",this._disableClass="ui-datepicker-disabled",this._unselectableClass="ui-datepicker-unselectable",this._currentClass="ui-datepicker-current-day",this._dayOverClass="ui-datepicker-days-cell-over",this.regional=[],this.regional[""]={closeText:"Hecho",prevText:"Ant",nextText:"Sig",currentText:"Hoy",monthNames:["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"],monthNamesShort:["Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dic"],dayNames:["Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado"],dayNamesShort:["Dom","Lun","Mar","Mie","Jue","Vie","Sab"],dayNamesMin:["Do","Lu","Ma","Mi","Ju","Vi","Sa"],weekHeader:"Sm",dateFormat:"dd/mm/yy",firstDay:1,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},this._defaults={showOn:"focus",showAnim:"fadeIn",showOptions:{},defaultDate:null,appendText:"",buttonText:"...",buttonImage:"",buttonImageOnly:!1,hideIfNoPrevNext:!1,navigationAsDateFormat:!1,gotoCurrent:!1,changeMonth:!1,changeYear:!1,yearRange:"c-10:c+10",showOtherMonths:!1,selectOtherMonths:!1,showWeek:!1,calculateWeek:this.iso8601Week,shortYearCutoff:"+10",minDate:null,maxDate:null,duration:"fast",beforeShowDay:null,beforeShow:null,onSelect:null,onChangeMonthYear:null,onClose:null,numberOfMonths:1,showCurrentAtPos:0,stepMonths:1,stepBigMonths:12,altField:"",altFormat:"",constrainInput:!0,showButtonPanel:!1,autoSize:!1,disabled:!1},e.extend(this._defaults,this.regional[""]),this.dpDiv=i(e("<div id='"+this._mainDivId+"' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))}function i(t){var a="button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";return t.delegate(a,"mouseout",function(){e(this).removeClass("ui-state-hover"),-1!==this.className.indexOf("ui-datepicker-prev")&&e(this).removeClass("ui-datepicker-prev-hover"),-1!==this.className.indexOf("ui-datepicker-next")&&e(this).removeClass("ui-datepicker-next-hover")}).delegate(a,"mouseover",function(){e.datepicker._isDisabledDatepicker(n.inline?t.parent()[0]:n.input[0])||(e(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"),e(this).addClass("ui-state-hover"),-1!==this.className.indexOf("ui-datepicker-prev")&&e(this).addClass("ui-datepicker-prev-hover"),-1!==this.className.indexOf("ui-datepicker-next")&&e(this).addClass("ui-datepicker-next-hover"))})}function s(t,a){e.extend(t,a);for(var i in a)null==a[i]&&(t[i]=a[i]);return t}e.extend(e.ui,{datepicker:{version:"1.10.3"}});var n,r="datepicker";e.extend(a.prototype,{markerClassName:"hasDatepicker",maxRows:4,_widgetDatepicker:function(){return this.dpDiv},setDefaults:function(e){return s(this._defaults,e||{}),this},_attachDatepicker:function(t,a){var i,s,n;i=t.nodeName.toLowerCase(),s="div"===i||"span"===i,t.id||(this.uuid+=1,t.id="dp"+this.uuid),n=this._newInst(e(t),s),n.settings=e.extend({},a||{}),"input"===i?this._connectDatepicker(t,n):s&&this._inlineDatepicker(t,n)},_newInst:function(t,a){var s=t[0].id.replace(/([^A-Za-z0-9_\-])/g,"\\\\$1");return{id:s,input:t,selectedDay:0,selectedMonth:0,selectedYear:0,drawMonth:0,drawYear:0,inline:a,dpDiv:a?i(e("<div class='"+this._inlineClass+" ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")):this.dpDiv}},_connectDatepicker:function(t,a){var i=e(t);a.append=e([]),a.trigger=e([]),i.hasClass(this.markerClassName)||(this._attachments(i,a),i.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp),this._autoSize(a),e.data(t,r,a),a.settings.disabled&&this._disableDatepicker(t))},_attachments:function(t,a){var i,s,n,r=this._get(a,"appendText"),o=this._get(a,"isRTL");a.append&&a.append.remove(),r&&(a.append=e("<span class='"+this._appendClass+"'>"+r+"</span>"),t[o?"before":"after"](a.append)),t.unbind("focus",this._showDatepicker),a.trigger&&a.trigger.remove(),i=this._get(a,"showOn"),("focus"===i||"both"===i)&&t.focus(this._showDatepicker),("button"===i||"both"===i)&&(s=this._get(a,"buttonText"),n=this._get(a,"buttonImage"),a.trigger=e(this._get(a,"buttonImageOnly")?e("<img/>").addClass(this._triggerClass).attr({src:n,alt:s,title:s}):e("<button type='button'></button>").addClass(this._triggerClass).html(n?e("<img/>").attr({src:n,alt:s,title:s}):s)),t[o?"before":"after"](a.trigger),a.trigger.click(function(){return e.datepicker._datepickerShowing&&e.datepicker._lastInput===t[0]?e.datepicker._hideDatepicker():e.datepicker._datepickerShowing&&e.datepicker._lastInput!==t[0]?(e.datepicker._hideDatepicker(),e.datepicker._showDatepicker(t[0])):e.datepicker._showDatepicker(t[0]),!1}))},_autoSize:function(e){if(this._get(e,"autoSize")&&!e.inline){var t,a,i,s,n=new Date(2009,11,20),r=this._get(e,"dateFormat");r.match(/[DM]/)&&(t=function(e){for(a=0,i=0,s=0;e.length>s;s++)e[s].length>a&&(a=e[s].length,i=s);return i},n.setMonth(t(this._get(e,r.match(/MM/)?"monthNames":"monthNamesShort"))),n.setDate(t(this._get(e,r.match(/DD/)?"dayNames":"dayNamesShort"))+20-n.getDay())),e.input.attr("size",this._formatDate(e,n).length)}},_inlineDatepicker:function(t,a){var i=e(t);i.hasClass(this.markerClassName)||(i.addClass(this.markerClassName).append(a.dpDiv),e.data(t,r,a),this._setDate(a,this._getDefaultDate(a),!0),this._updateDatepicker(a),this._updateAlternate(a),a.settings.disabled&&this._disableDatepicker(t),a.dpDiv.css("display","block"))},_dialogDatepicker:function(t,a,i,n,o){var c,d,l,u,h,p=this._dialogInst;return p||(this.uuid+=1,c="dp"+this.uuid,this._dialogInput=e("<input type='text' id='"+c+"' style='position: absolute; top: -100px; width: 0px;'/>"),this._dialogInput.keydown(this._doKeyDown),e("body").append(this._dialogInput),p=this._dialogInst=this._newInst(this._dialogInput,!1),p.settings={},e.data(this._dialogInput[0],r,p)),s(p.settings,n||{}),a=a&&a.constructor===Date?this._formatDate(p,a):a,this._dialogInput.val(a),this._pos=o?o.length?o:[o.pageX,o.pageY]:null,this._pos||(d=document.documentElement.clientWidth,l=document.documentElement.clientHeight,u=document.documentElement.scrollLeft||document.body.scrollLeft,h=document.documentElement.scrollTop||document.body.scrollTop,this._pos=[d/2-100+u,l/2-150+h]),this._dialogInput.css("left",this._pos[0]+20+"px").css("top",this._pos[1]+"px"),p.settings.onSelect=i,this._inDialog=!0,this.dpDiv.addClass(this._dialogClass),this._showDatepicker(this._dialogInput[0]),e.blockUI&&e.blockUI(this.dpDiv),e.data(this._dialogInput[0],r,p),this},_destroyDatepicker:function(t){var a,i=e(t),s=e.data(t,r);i.hasClass(this.markerClassName)&&(a=t.nodeName.toLowerCase(),e.removeData(t,r),"input"===a?(s.append.remove(),s.trigger.remove(),i.removeClass(this.markerClassName).unbind("focus",this._showDatepicker).unbind("keydown",this._doKeyDown).unbind("keypress",this._doKeyPress).unbind("keyup",this._doKeyUp)):("div"===a||"span"===a)&&i.removeClass(this.markerClassName).empty())},_enableDatepicker:function(t){var a,i,s=e(t),n=e.data(t,r);s.hasClass(this.markerClassName)&&(a=t.nodeName.toLowerCase(),"input"===a?(t.disabled=!1,n.trigger.filter("button").each(function(){this.disabled=!1}).end().filter("img").css({opacity:"1.0",cursor:""})):("div"===a||"span"===a)&&(i=s.children("."+this._inlineClass),i.children().removeClass("ui-state-disabled"),i.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!1)),this._disabledInputs=e.map(this._disabledInputs,function(e){return e===t?null:e}))},_disableDatepicker:function(t){var a,i,s=e(t),n=e.data(t,r);s.hasClass(this.markerClassName)&&(a=t.nodeName.toLowerCase(),"input"===a?(t.disabled=!0,n.trigger.filter("button").each(function(){this.disabled=!0}).end().filter("img").css({opacity:"0.5",cursor:"default"})):("div"===a||"span"===a)&&(i=s.children("."+this._inlineClass),i.children().addClass("ui-state-disabled"),i.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!0)),this._disabledInputs=e.map(this._disabledInputs,function(e){return e===t?null:e}),this._disabledInputs[this._disabledInputs.length]=t)},_isDisabledDatepicker:function(e){if(!e)return!1;for(var t=0;this._disabledInputs.length>t;t++)if(this._disabledInputs[t]===e)return!0;return!1},_getInst:function(t){try{return e.data(t,r)}catch(a){throw"Missing instance data for this datepicker"}},_optionDatepicker:function(a,i,n){var r,o,c,d,l=this._getInst(a);return 2===arguments.length&&"string"==typeof i?"defaults"===i?e.extend({},e.datepicker._defaults):l?"all"===i?e.extend({},l.settings):this._get(l,i):null:(r=i||{},"string"==typeof i&&(r={},r[i]=n),l&&(this._curInst===l&&this._hideDatepicker(),o=this._getDateDatepicker(a,!0),c=this._getMinMaxDate(l,"min"),d=this._getMinMaxDate(l,"max"),s(l.settings,r),null!==c&&r.dateFormat!==t&&r.minDate===t&&(l.settings.minDate=this._formatDate(l,c)),null!==d&&r.dateFormat!==t&&r.maxDate===t&&(l.settings.maxDate=this._formatDate(l,d)),"disabled"in r&&(r.disabled?this._disableDatepicker(a):this._enableDatepicker(a)),this._attachments(e(a),l),this._autoSize(l),this._setDate(l,o),this._updateAlternate(l),this._updateDatepicker(l)),t)},_changeDatepicker:function(e,t,a){this._optionDatepicker(e,t,a)},_refreshDatepicker:function(e){var t=this._getInst(e);t&&this._updateDatepicker(t)},_setDateDatepicker:function(e,t){var a=this._getInst(e);a&&(this._setDate(a,t),this._updateDatepicker(a),this._updateAlternate(a))},_getDateDatepicker:function(e,t){var a=this._getInst(e);return a&&!a.inline&&this._setDateFromField(a,t),a?this._getDate(a):null},_doKeyDown:function(t){var a,i,s,n=e.datepicker._getInst(t.target),r=!0,o=n.dpDiv.is(".ui-datepicker-rtl");if(n._keyEvent=!0,e.datepicker._datepickerShowing)switch(t.keyCode){case 9:e.datepicker._hideDatepicker(),r=!1;break;case 13:return s=e("td."+e.datepicker._dayOverClass+":not(."+e.datepicker._currentClass+")",n.dpDiv),s[0]&&e.datepicker._selectDay(t.target,n.selectedMonth,n.selectedYear,s[0]),a=e.datepicker._get(n,"onSelect"),a?(i=e.datepicker._formatDate(n),a.apply(n.input?n.input[0]:null,[i,n])):e.datepicker._hideDatepicker(),!1;case 27:e.datepicker._hideDatepicker();break;case 33:e.datepicker._adjustDate(t.target,t.ctrlKey?-e.datepicker._get(n,"stepBigMonths"):-e.datepicker._get(n,"stepMonths"),"M");break;case 34:e.datepicker._adjustDate(t.target,t.ctrlKey?+e.datepicker._get(n,"stepBigMonths"):+e.datepicker._get(n,"stepMonths"),"M");break;case 35:(t.ctrlKey||t.metaKey)&&e.datepicker._clearDate(t.target),r=t.ctrlKey||t.metaKey;break;case 36:(t.ctrlKey||t.metaKey)&&e.datepicker._gotoToday(t.target),r=t.ctrlKey||t.metaKey;break;case 37:(t.ctrlKey||t.metaKey)&&e.datepicker._adjustDate(t.target,o?1:-1,"D"),r=t.ctrlKey||t.metaKey,t.originalEvent.altKey&&e.datepicker._adjustDate(t.target,t.ctrlKey?-e.datepicker._get(n,"stepBigMonths"):-e.datepicker._get(n,"stepMonths"),"M");break;case 38:(t.ctrlKey||t.metaKey)&&e.datepicker._adjustDate(t.target,-7,"D"),r=t.ctrlKey||t.metaKey;break;case 39:(t.ctrlKey||t.metaKey)&&e.datepicker._adjustDate(t.target,o?-1:1,"D"),r=t.ctrlKey||t.metaKey,t.originalEvent.altKey&&e.datepicker._adjustDate(t.target,t.ctrlKey?+e.datepicker._get(n,"stepBigMonths"):+e.datepicker._get(n,"stepMonths"),"M");break;case 40:(t.ctrlKey||t.metaKey)&&e.datepicker._adjustDate(t.target,7,"D"),r=t.ctrlKey||t.metaKey;break;default:r=!1}else 36===t.keyCode&&t.ctrlKey?e.datepicker._showDatepicker(this):r=!1;r&&(t.preventDefault(),t.stopPropagation())},_doKeyPress:function(a){var i,s,n=e.datepicker._getInst(a.target);return e.datepicker._get(n,"constrainInput")?(i=e.datepicker._possibleChars(e.datepicker._get(n,"dateFormat")),s=String.fromCharCode(null==a.charCode?a.keyCode:a.charCode),a.ctrlKey||a.metaKey||" ">s||!i||i.indexOf(s)>-1):t},_doKeyUp:function(t){var a,i=e.datepicker._getInst(t.target);if(i.input.val()!==i.lastVal)try{a=e.datepicker.parseDate(e.datepicker._get(i,"dateFormat"),i.input?i.input.val():null,e.datepicker._getFormatConfig(i)),a&&(e.datepicker._setDateFromField(i),e.datepicker._updateAlternate(i),e.datepicker._updateDatepicker(i))}catch(s){}return!0},_showDatepicker:function(t){if(t=t.target||t,"input"!==t.nodeName.toLowerCase()&&(t=e("input",t.parentNode)[0]),!e.datepicker._isDisabledDatepicker(t)&&e.datepicker._lastInput!==t){var a,i,n,r,o,c,d;a=e.datepicker._getInst(t),e.datepicker._curInst&&e.datepicker._curInst!==a&&(e.datepicker._curInst.dpDiv.stop(!0,!0),a&&e.datepicker._datepickerShowing&&e.datepicker._hideDatepicker(e.datepicker._curInst.input[0])),i=e.datepicker._get(a,"beforeShow"),n=i?i.apply(t,[t,a]):{},n!==!1&&(s(a.settings,n),a.lastVal=null,e.datepicker._lastInput=t,e.datepicker._setDateFromField(a),e.datepicker._inDialog&&(t.value=""),e.datepicker._pos||(e.datepicker._pos=e.datepicker._findPos(t),e.datepicker._pos[1]+=t.offsetHeight),r=!1,e(t).parents().each(function(){return r|="fixed"===e(this).css("position"),!r}),o={left:e.datepicker._pos[0],top:e.datepicker._pos[1]},e.datepicker._pos=null,a.dpDiv.empty(),a.dpDiv.css({position:"absolute",display:"block",top:"-1000px"}),e.datepicker._updateDatepicker(a),o=e.datepicker._checkOffset(a,o,r),a.dpDiv.css({position:e.datepicker._inDialog&&e.blockUI?"static":r?"fixed":"absolute",display:"none",left:o.left+"px",top:o.top+"px"}),a.inline||(c=e.datepicker._get(a,"showAnim"),d=e.datepicker._get(a,"duration"),a.dpDiv.zIndex(e(t).zIndex()+1),e.datepicker._datepickerShowing=!0,e.effects&&e.effects.effect[c]?a.dpDiv.show(c,e.datepicker._get(a,"showOptions"),d):a.dpDiv[c||"show"](c?d:null),e.datepicker._shouldFocusInput(a)&&a.input.focus(),e.datepicker._curInst=a))}},_updateDatepicker:function(t){this.maxRows=4,n=t,t.dpDiv.empty().append(this._generateHTML(t)),this._attachHandlers(t),t.dpDiv.find("."+this._dayOverClass+" a").mouseover();var a,i=this._getNumberOfMonths(t),s=i[1],r=17;t.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""),s>1&&t.dpDiv.addClass("ui-datepicker-multi-"+s).css("width",r*s+"em"),t.dpDiv[(1!==i[0]||1!==i[1]?"add":"remove")+"Class"]("ui-datepicker-multi"),t.dpDiv[(this._get(t,"isRTL")?"add":"remove")+"Class"]("ui-datepicker-rtl"),t===e.datepicker._curInst&&e.datepicker._datepickerShowing&&e.datepicker._shouldFocusInput(t)&&t.input.focus(),t.yearshtml&&(a=t.yearshtml,setTimeout(function(){a===t.yearshtml&&t.yearshtml&&t.dpDiv.find("select.ui-datepicker-year:first").replaceWith(t.yearshtml),a=t.yearshtml=null},0))},_shouldFocusInput:function(e){return e.input&&e.input.is(":visible")&&!e.input.is(":disabled")&&!e.input.is(":focus")},_checkOffset:function(t,a,i){var s=t.dpDiv.outerWidth(),n=t.dpDiv.outerHeight(),r=t.input?t.input.outerWidth():0,o=t.input?t.input.outerHeight():0,c=document.documentElement.clientWidth+(i?0:e(document).scrollLeft()),d=document.documentElement.clientHeight+(i?0:e(document).scrollTop());return a.left-=this._get(t,"isRTL")?s-r:0,a.left-=i&&a.left===t.input.offset().left?e(document).scrollLeft():0,a.top-=i&&a.top===t.input.offset().top+o?e(document).scrollTop():0,a.left-=Math.min(a.left,a.left+s>c&&c>s?Math.abs(a.left+s-c):0),a.top-=Math.min(a.top,a.top+n>d&&d>n?Math.abs(n+o):0),a},_findPos:function(t){for(var a,i=this._getInst(t),s=this._get(i,"isRTL");t&&("hidden"===t.type||1!==t.nodeType||e.expr.filters.hidden(t));)t=t[s?"previousSibling":"nextSibling"];return a=e(t).offset(),[a.left,a.top]},_hideDatepicker:function(t){var a,i,s,n,o=this._curInst;!o||t&&o!==e.data(t,r)||this._datepickerShowing&&(a=this._get(o,"showAnim"),i=this._get(o,"duration"),s=function(){e.datepicker._tidyDialog(o)},e.effects&&(e.effects.effect[a]||e.effects[a])?o.dpDiv.hide(a,e.datepicker._get(o,"showOptions"),i,s):o.dpDiv["slideDown"===a?"slideUp":"fadeIn"===a?"fadeOut":"hide"](a?i:null,s),a||s(),this._datepickerShowing=!1,n=this._get(o,"onClose"),n&&n.apply(o.input?o.input[0]:null,[o.input?o.input.val():"",o]),this._lastInput=null,this._inDialog&&(this._dialogInput.css({position:"absolute",left:"0",top:"-100px"}),e.blockUI&&(e.unblockUI(),e("body").append(this.dpDiv))),this._inDialog=!1)},_tidyDialog:function(e){e.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")},_checkExternalClick:function(t){if(e.datepicker._curInst){var a=e(t.target),i=e.datepicker._getInst(a[0]);(a[0].id!==e.datepicker._mainDivId&&0===a.parents("#"+e.datepicker._mainDivId).length&&!a.hasClass(e.datepicker.markerClassName)&&!a.closest("."+e.datepicker._triggerClass).length&&e.datepicker._datepickerShowing&&(!e.datepicker._inDialog||!e.blockUI)||a.hasClass(e.datepicker.markerClassName)&&e.datepicker._curInst!==i)&&e.datepicker._hideDatepicker()}},_adjustDate:function(t,a,i){var s=e(t),n=this._getInst(s[0]);this._isDisabledDatepicker(s[0])||(this._adjustInstDate(n,a+("M"===i?this._get(n,"showCurrentAtPos"):0),i),this._updateDatepicker(n))},_gotoToday:function(t){var a,i=e(t),s=this._getInst(i[0]);this._get(s,"gotoCurrent")&&s.currentDay?(s.selectedDay=s.currentDay,s.drawMonth=s.selectedMonth=s.currentMonth,s.drawYear=s.selectedYear=s.currentYear):(a=new Date,s.selectedDay=a.getDate(),s.drawMonth=s.selectedMonth=a.getMonth(),s.drawYear=s.selectedYear=a.getFullYear()),this._notifyChange(s),this._adjustDate(i)},_selectMonthYear:function(t,a,i){var s=e(t),n=this._getInst(s[0]);n["selected"+("M"===i?"Month":"Year")]=n["draw"+("M"===i?"Month":"Year")]=parseInt(a.options[a.selectedIndex].value,10),this._notifyChange(n),this._adjustDate(s)},_selectDay:function(t,a,i,s){var n,r=e(t);e(s).hasClass(this._unselectableClass)||this._isDisabledDatepicker(r[0])||(n=this._getInst(r[0]),n.selectedDay=n.currentDay=e("a",s).html(),n.selectedMonth=n.currentMonth=a,n.selectedYear=n.currentYear=i,this._selectDate(t,this._formatDate(n,n.currentDay,n.currentMonth,n.currentYear)))},_clearDate:function(t){var a=e(t);this._selectDate(a,"")},_selectDate:function(t,a){var i,s=e(t),n=this._getInst(s[0]);a=null!=a?a:this._formatDate(n),n.input&&n.input.val(a),this._updateAlternate(n),i=this._get(n,"onSelect"),i?i.apply(n.input?n.input[0]:null,[a,n]):n.input&&n.input.trigger("change"),n.inline?this._updateDatepicker(n):(this._hideDatepicker(),this._lastInput=n.input[0],"object"!=typeof n.input[0]&&n.input.focus(),this._lastInput=null)},_updateAlternate:function(t){var a,i,s,n=this._get(t,"altField");n&&(a=this._get(t,"altFormat")||this._get(t,"dateFormat"),i=this._getDate(t),s=this.formatDate(a,i,this._getFormatConfig(t)),e(n).each(function(){e(this).val(s)}))},noWeekends:function(e){var t=e.getDay();return[t>0&&6>t,""]},iso8601Week:function(e){var t,a=new Date(e.getTime());return a.setDate(a.getDate()+4-(a.getDay()||7)),t=a.getTime(),a.setMonth(0),a.setDate(1),Math.floor(Math.round((t-a)/864e5)/7)+1},parseDate:function(a,i,s){if(null==a||null==i)throw"Invalid arguments";if(i="object"==typeof i?""+i:i+"",""===i)return null;var n,r,o,c,d=0,l=(s?s.shortYearCutoff:null)||this._defaults.shortYearCutoff,u="string"!=typeof l?l:(new Date).getFullYear()%100+parseInt(l,10),h=(s?s.dayNamesShort:null)||this._defaults.dayNamesShort,p=(s?s.dayNames:null)||this._defaults.dayNames,g=(s?s.monthNamesShort:null)||this._defaults.monthNamesShort,_=(s?s.monthNames:null)||this._defaults.monthNames,f=-1,m=-1,D=-1,k=-1,y=!1,v=function(e){var t=a.length>n+1&&a.charAt(n+1)===e;return t&&n++,t},M=function(e){var t=v(e),a="@"===e?14:"!"===e?20:"y"===e&&t?4:"o"===e?3:2,s=RegExp("^\\d{1,"+a+"}"),n=i.substring(d).match(s);if(!n)throw"Missing number at position "+d;return d+=n[0].length,parseInt(n[0],10)},b=function(a,s,n){var r=-1,o=e.map(v(a)?n:s,function(e,t){return[[t,e]]}).sort(function(e,t){return-(e[1].length-t[1].length)});if(e.each(o,function(e,a){var s=a[1];return i.substr(d,s.length).toLowerCase()===s.toLowerCase()?(r=a[0],d+=s.length,!1):t}),-1!==r)return r+1;throw"Unknown name at position "+d},w=function(){if(i.charAt(d)!==a.charAt(n))throw"Unexpected literal at position "+d;d++};for(n=0;a.length>n;n++)if(y)"'"!==a.charAt(n)||v("'")?w():y=!1;else switch(a.charAt(n)){case"d":D=M("d");break;case"D":b("D",h,p);break;case"o":k=M("o");break;case"m":m=M("m");break;case"M":m=b("M",g,_);break;case"y":f=M("y");break;case"@":c=new Date(M("@")),f=c.getFullYear(),m=c.getMonth()+1,D=c.getDate();break;case"!":c=new Date((M("!")-this._ticksTo1970)/1e4),f=c.getFullYear(),m=c.getMonth()+1,D=c.getDate();break;case"'":v("'")?w():y=!0;break;default:w()}if(i.length>d&&(o=i.substr(d),!/^\s+/.test(o)))throw"Extra/unparsed characters found in date: "+o;if(-1===f?f=(new Date).getFullYear():100>f&&(f+=(new Date).getFullYear()-(new Date).getFullYear()%100+(u>=f?0:-100)),k>-1)for(m=1,D=k;;){if(r=this._getDaysInMonth(f,m-1),r>=D)break;m++,D-=r}if(c=this._daylightSavingAdjust(new Date(f,m-1,D)),c.getFullYear()!==f||c.getMonth()+1!==m||c.getDate()!==D)throw"Invalid date";return c},ATOM:"yy-mm-dd",COOKIE:"D, dd M yy",ISO_8601:"yy-mm-dd",RFC_822:"D, d M y",RFC_850:"DD, dd-M-y",RFC_1036:"D, d M y",RFC_1123:"D, d M yy",RFC_2822:"D, d M yy",RSS:"D, d M y",TICKS:"!",TIMESTAMP:"@",W3C:"yy-mm-dd",_ticksTo1970:1e7*60*60*24*(718685+Math.floor(492.5)-Math.floor(19.7)+Math.floor(4.925)),formatDate:function(e,t,a){if(!t)return"";var i,s=(a?a.dayNamesShort:null)||this._defaults.dayNamesShort,n=(a?a.dayNames:null)||this._defaults.dayNames,r=(a?a.monthNamesShort:null)||this._defaults.monthNamesShort,o=(a?a.monthNames:null)||this._defaults.monthNames,c=function(t){var a=e.length>i+1&&e.charAt(i+1)===t;return a&&i++,a},d=function(e,t,a){var i=""+t;if(c(e))for(;a>i.length;)i="0"+i;return i},l=function(e,t,a,i){return c(e)?i[t]:a[t]},u="",h=!1;if(t)for(i=0;e.length>i;i++)if(h)"'"!==e.charAt(i)||c("'")?u+=e.charAt(i):h=!1;else switch(e.charAt(i)){case"d":u+=d("d",t.getDate(),2);break;case"D":u+=l("D",t.getDay(),s,n);break;case"o":u+=d("o",Math.round((new Date(t.getFullYear(),t.getMonth(),t.getDate()).getTime()-new Date(t.getFullYear(),0,0).getTime())/864e5),3);break;case"m":u+=d("m",t.getMonth()+1,2);break;case"M":u+=l("M",t.getMonth(),r,o);break;case"y":u+=c("y")?t.getFullYear():(10>t.getYear()%100?"0":"")+t.getYear()%100;break;case"@":u+=t.getTime();break;case"!":u+=1e4*t.getTime()+this._ticksTo1970;break;case"'":c("'")?u+="'":h=!0;break;default:u+=e.charAt(i)}return u},_possibleChars:function(e){var t,a="",i=!1,s=function(a){var i=e.length>t+1&&e.charAt(t+1)===a;return i&&t++,i};for(t=0;e.length>t;t++)if(i)"'"!==e.charAt(t)||s("'")?a+=e.charAt(t):i=!1;else switch(e.charAt(t)){case"d":case"m":case"y":case"@":a+="0123456789";break;case"D":case"M":return null;case"'":s("'")?a+="'":i=!0;break;default:a+=e.charAt(t)}return a},_get:function(e,a){return e.settings[a]!==t?e.settings[a]:this._defaults[a]},_setDateFromField:function(e,t){if(e.input.val()!==e.lastVal){var a=this._get(e,"dateFormat"),i=e.lastVal=e.input?e.input.val():null,s=this._getDefaultDate(e),n=s,r=this._getFormatConfig(e);try{n=this.parseDate(a,i,r)||s}catch(o){i=t?"":i}e.selectedDay=n.getDate(),e.drawMonth=e.selectedMonth=n.getMonth(),e.drawYear=e.selectedYear=n.getFullYear(),e.currentDay=i?n.getDate():0,e.currentMonth=i?n.getMonth():0,e.currentYear=i?n.getFullYear():0,this._adjustInstDate(e)}},_getDefaultDate:function(e){return this._restrictMinMax(e,this._determineDate(e,this._get(e,"defaultDate"),new Date))},_determineDate:function(t,a,i){var s=function(e){var t=new Date;return t.setDate(t.getDate()+e),t},n=function(a){try{return e.datepicker.parseDate(e.datepicker._get(t,"dateFormat"),a,e.datepicker._getFormatConfig(t))}catch(i){}for(var s=(a.toLowerCase().match(/^c/)?e.datepicker._getDate(t):null)||new Date,n=s.getFullYear(),r=s.getMonth(),o=s.getDate(),c=/([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,d=c.exec(a);d;){switch(d[2]||"d"){case"d":case"D":o+=parseInt(d[1],10);break;case"w":case"W":o+=7*parseInt(d[1],10);break;case"m":case"M":r+=parseInt(d[1],10),o=Math.min(o,e.datepicker._getDaysInMonth(n,r));break;case"y":case"Y":n+=parseInt(d[1],10),o=Math.min(o,e.datepicker._getDaysInMonth(n,r))}d=c.exec(a)}return new Date(n,r,o)},r=null==a||""===a?i:"string"==typeof a?n(a):"number"==typeof a?isNaN(a)?i:s(a):new Date(a.getTime());return r=r&&"Invalid Date"==""+r?i:r,r&&(r.setHours(0),r.setMinutes(0),r.setSeconds(0),r.setMilliseconds(0)),this._daylightSavingAdjust(r)},_daylightSavingAdjust:function(e){return e?(e.setHours(e.getHours()>12?e.getHours()+2:0),e):null},_setDate:function(e,t,a){var i=!t,s=e.selectedMonth,n=e.selectedYear,r=this._restrictMinMax(e,this._determineDate(e,t,new Date));e.selectedDay=e.currentDay=r.getDate(),e.drawMonth=e.selectedMonth=e.currentMonth=r.getMonth(),e.drawYear=e.selectedYear=e.currentYear=r.getFullYear(),s===e.selectedMonth&&n===e.selectedYear||a||this._notifyChange(e),this._adjustInstDate(e),e.input&&e.input.val(i?"":this._formatDate(e))},_getDate:function(e){var t=!e.currentYear||e.input&&""===e.input.val()?null:this._daylightSavingAdjust(new Date(e.currentYear,e.currentMonth,e.currentDay));return t},_attachHandlers:function(t){var a=this._get(t,"stepMonths"),i="#"+t.id.replace(/\\\\/g,"\\");t.dpDiv.find("[data-handler]").map(function(){var t={prev:function(){e.datepicker._adjustDate(i,-a,"M")},next:function(){e.datepicker._adjustDate(i,+a,"M")},hide:function(){e.datepicker._hideDatepicker()},today:function(){e.datepicker._gotoToday(i)},selectDay:function(){return e.datepicker._selectDay(i,+this.getAttribute("data-month"),+this.getAttribute("data-year"),this),!1},selectMonth:function(){return e.datepicker._selectMonthYear(i,this,"M"),!1},selectYear:function(){return e.datepicker._selectMonthYear(i,this,"Y"),!1}};e(this).bind(this.getAttribute("data-event"),t[this.getAttribute("data-handler")])})},_generateHTML:function(e){var t,a,i,s,n,r,o,c,d,l,u,h,p,g,_,f,m,D,k,y,v,M,b,w,C,I,x,N,Y,S,A,T,F,j,K,O,E,P,L,R=new Date,W=this._daylightSavingAdjust(new Date(R.getFullYear(),R.getMonth(),R.getDate())),H=this._get(e,"isRTL"),U=this._get(e,"showButtonPanel"),z=this._get(e,"hideIfNoPrevNext"),B=this._get(e,"navigationAsDateFormat"),J=this._getNumberOfMonths(e),q=this._get(e,"showCurrentAtPos"),V=this._get(e,"stepMonths"),G=1!==J[0]||1!==J[1],Q=this._daylightSavingAdjust(e.currentDay?new Date(e.currentYear,e.currentMonth,e.currentDay):new Date(9999,9,9)),$=this._getMinMaxDate(e,"min"),X=this._getMinMaxDate(e,"max"),Z=e.drawMonth-q,et=e.drawYear;if(0>Z&&(Z+=12,et--),X)for(t=this._daylightSavingAdjust(new Date(X.getFullYear(),X.getMonth()-J[0]*J[1]+1,X.getDate())),t=$&&$>t?$:t;this._daylightSavingAdjust(new Date(et,Z,1))>t;)Z--,0>Z&&(Z=11,et--);for(e.drawMonth=Z,e.drawYear=et,a=this._get(e,"prevText"),a=B?this.formatDate(a,this._daylightSavingAdjust(new Date(et,Z-V,1)),this._getFormatConfig(e)):a,i=this._canAdjustMonth(e,-1,et,Z)?"<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='"+a+"'><span class='ui-icon ui-icon-circle-triangle-"+(H?"e":"w")+"'>"+a+"</span></a>":z?"":"<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='"+a+"'><span class='ui-icon ui-icon-circle-triangle-"+(H?"e":"w")+"'>"+a+"</span></a>",s=this._get(e,"nextText"),s=B?this.formatDate(s,this._daylightSavingAdjust(new Date(et,Z+V,1)),this._getFormatConfig(e)):s,n=this._canAdjustMonth(e,1,et,Z)?"<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='"+s+"'><span class='ui-icon ui-icon-circle-triangle-"+(H?"w":"e")+"'>"+s+"</span></a>":z?"":"<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='"+s+"'><span class='ui-icon ui-icon-circle-triangle-"+(H?"w":"e")+"'>"+s+"</span></a>",r=this._get(e,"currentText"),o=this._get(e,"gotoCurrent")&&e.currentDay?Q:W,r=B?this.formatDate(r,o,this._getFormatConfig(e)):r,c=e.inline?"":"<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>"+this._get(e,"closeText")+"</button>",d=U?"<div class='ui-datepicker-buttonpane ui-widget-content'>"+(H?c:"")+(this._isInRange(e,o)?"<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>"+r+"</button>":"")+(H?"":c)+"</div>":"",l=parseInt(this._get(e,"firstDay"),10),l=isNaN(l)?0:l,u=this._get(e,"showWeek"),h=this._get(e,"dayNames"),p=this._get(e,"dayNamesMin"),g=this._get(e,"monthNames"),_=this._get(e,"monthNamesShort"),f=this._get(e,"beforeShowDay"),m=this._get(e,"showOtherMonths"),D=this._get(e,"selectOtherMonths"),k=this._getDefaultDate(e),y="",M=0;J[0]>M;M++){for(b="",this.maxRows=4,w=0;J[1]>w;w++){if(C=this._daylightSavingAdjust(new Date(et,Z,e.selectedDay)),I=" ui-corner-all",x="",G){if(x+="<div class='ui-datepicker-group",J[1]>1)switch(w){case 0:x+=" ui-datepicker-group-first",I=" ui-corner-"+(H?"right":"left");break;case J[1]-1:x+=" ui-datepicker-group-last",I=" ui-corner-"+(H?"left":"right");break;default:x+=" ui-datepicker-group-middle",I=""}x+="'>"}for(x+="<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix"+I+"'>"+(/all|left/.test(I)&&0===M?H?n:i:"")+(/all|right/.test(I)&&0===M?H?i:n:"")+this._generateMonthYearHeader(e,Z,et,$,X,M>0||w>0,g,_)+"</div><table class='ui-datepicker-calendar'><thead>"+"<tr>",N=u?"<th class='ui-datepicker-week-col'>"+this._get(e,"weekHeader")+"</th>":"",v=0;7>v;v++)Y=(v+l)%7,N+="<th"+((v+l+6)%7>=5?" class='ui-datepicker-week-end'":"")+">"+"<span title='"+h[Y]+"'>"+p[Y]+"</span></th>";for(x+=N+"</tr></thead><tbody>",S=this._getDaysInMonth(et,Z),et===e.selectedYear&&Z===e.selectedMonth&&(e.selectedDay=Math.min(e.selectedDay,S)),A=(this._getFirstDayOfMonth(et,Z)-l+7)%7,T=Math.ceil((A+S)/7),F=G?this.maxRows>T?this.maxRows:T:T,this.maxRows=F,j=this._daylightSavingAdjust(new Date(et,Z,1-A)),K=0;F>K;K++){for(x+="<tr>",O=u?"<td class='ui-datepicker-week-col'>"+this._get(e,"calculateWeek")(j)+"</td>":"",v=0;7>v;v++)E=f?f.apply(e.input?e.input[0]:null,[j]):[!0,""],P=j.getMonth()!==Z,L=P&&!D||!E[0]||$&&$>j||X&&j>X,O+="<td class='"+((v+l+6)%7>=5?" ui-datepicker-week-end":"")+(P?" ui-datepicker-other-month":"")+(j.getTime()===C.getTime()&&Z===e.selectedMonth&&e._keyEvent||k.getTime()===j.getTime()&&k.getTime()===C.getTime()?" "+this._dayOverClass:"")+(L?" "+this._unselectableClass+" ui-state-disabled":"")+(P&&!m?"":" "+E[1]+(j.getTime()===Q.getTime()?" "+this._currentClass:"")+(j.getTime()===W.getTime()?" ui-datepicker-today":""))+"'"+(P&&!m||!E[2]?"":" title='"+E[2].replace(/'/g,"&#39;")+"'")+(L?"":" data-handler='selectDay' data-event='click' data-month='"+j.getMonth()+"' data-year='"+j.getFullYear()+"'")+">"+(P&&!m?"&#xa0;":L?"<span class='ui-state-default'>"+j.getDate()+"</span>":"<a class='ui-state-default"+(j.getTime()===W.getTime()?" ui-state-highlight":"")+(j.getTime()===Q.getTime()?" ui-state-active":"")+(P?" ui-priority-secondary":"")+"' href='#'>"+j.getDate()+"</a>")+"</td>",j.setDate(j.getDate()+1),j=this._daylightSavingAdjust(j);x+=O+"</tr>"}Z++,Z>11&&(Z=0,et++),x+="</tbody></table>"+(G?"</div>"+(J[0]>0&&w===J[1]-1?"<div class='ui-datepicker-row-break'></div>":""):""),b+=x}y+=b}return y+=d,e._keyEvent=!1,y},_generateMonthYearHeader:function(e,t,a,i,s,n,r,o){var c,d,l,u,h,p,g,_,f=this._get(e,"changeMonth"),m=this._get(e,"changeYear"),D=this._get(e,"showMonthAfterYear"),k="<div class='ui-datepicker-title'>",y="";if(n||!f)y+="<span class='ui-datepicker-month'>"+r[t]+"</span>";else{for(c=i&&i.getFullYear()===a,d=s&&s.getFullYear()===a,y+="<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>",l=0;12>l;l++)(!c||l>=i.getMonth())&&(!d||s.getMonth()>=l)&&(y+="<option value='"+l+"'"+(l===t?" selected='selected'":"")+">"+o[l]+"</option>");y+="</select>"}if(D||(k+=y+(!n&&f&&m?"":"&#xa0;")),!e.yearshtml)if(e.yearshtml="",n||!m)k+="<span class='ui-datepicker-year'>"+a+"</span>";else{for(u=this._get(e,"yearRange").split(":"),h=(new Date).getFullYear(),p=function(e){var t=e.match(/c[+\-].*/)?a+parseInt(e.substring(1),10):e.match(/[+\-].*/)?h+parseInt(e,10):parseInt(e,10);
return isNaN(t)?h:t},g=p(u[0]),_=Math.max(g,p(u[1]||"")),g=i?Math.max(g,i.getFullYear()):g,_=s?Math.min(_,s.getFullYear()):_,e.yearshtml+="<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>";_>=g;g++)e.yearshtml+="<option value='"+g+"'"+(g===a?" selected='selected'":"")+">"+g+"</option>";e.yearshtml+="</select>",k+=e.yearshtml,e.yearshtml=null}return k+=this._get(e,"yearSuffix"),D&&(k+=(!n&&f&&m?"":"&#xa0;")+y),k+="</div>"},_adjustInstDate:function(e,t,a){var i=e.drawYear+("Y"===a?t:0),s=e.drawMonth+("M"===a?t:0),n=Math.min(e.selectedDay,this._getDaysInMonth(i,s))+("D"===a?t:0),r=this._restrictMinMax(e,this._daylightSavingAdjust(new Date(i,s,n)));e.selectedDay=r.getDate(),e.drawMonth=e.selectedMonth=r.getMonth(),e.drawYear=e.selectedYear=r.getFullYear(),("M"===a||"Y"===a)&&this._notifyChange(e)},_restrictMinMax:function(e,t){var a=this._getMinMaxDate(e,"min"),i=this._getMinMaxDate(e,"max"),s=a&&a>t?a:t;return i&&s>i?i:s},_notifyChange:function(e){var t=this._get(e,"onChangeMonthYear");t&&t.apply(e.input?e.input[0]:null,[e.selectedYear,e.selectedMonth+1,e])},_getNumberOfMonths:function(e){var t=this._get(e,"numberOfMonths");return null==t?[1,1]:"number"==typeof t?[1,t]:t},_getMinMaxDate:function(e,t){return this._determineDate(e,this._get(e,t+"Date"),null)},_getDaysInMonth:function(e,t){return 32-this._daylightSavingAdjust(new Date(e,t,32)).getDate()},_getFirstDayOfMonth:function(e,t){return new Date(e,t,1).getDay()},_canAdjustMonth:function(e,t,a,i){var s=this._getNumberOfMonths(e),n=this._daylightSavingAdjust(new Date(a,i+(0>t?t:s[0]*s[1]),1));return 0>t&&n.setDate(this._getDaysInMonth(n.getFullYear(),n.getMonth())),this._isInRange(e,n)},_isInRange:function(e,t){var a,i,s=this._getMinMaxDate(e,"min"),n=this._getMinMaxDate(e,"max"),r=null,o=null,c=this._get(e,"yearRange");return c&&(a=c.split(":"),i=(new Date).getFullYear(),r=parseInt(a[0],10),o=parseInt(a[1],10),a[0].match(/[+\-].*/)&&(r+=i),a[1].match(/[+\-].*/)&&(o+=i)),(!s||t.getTime()>=s.getTime())&&(!n||t.getTime()<=n.getTime())&&(!r||t.getFullYear()>=r)&&(!o||o>=t.getFullYear())},_getFormatConfig:function(e){var t=this._get(e,"shortYearCutoff");return t="string"!=typeof t?t:(new Date).getFullYear()%100+parseInt(t,10),{shortYearCutoff:t,dayNamesShort:this._get(e,"dayNamesShort"),dayNames:this._get(e,"dayNames"),monthNamesShort:this._get(e,"monthNamesShort"),monthNames:this._get(e,"monthNames")}},_formatDate:function(e,t,a,i){t||(e.currentDay=e.selectedDay,e.currentMonth=e.selectedMonth,e.currentYear=e.selectedYear);var s=t?"object"==typeof t?t:this._daylightSavingAdjust(new Date(i,a,t)):this._daylightSavingAdjust(new Date(e.currentYear,e.currentMonth,e.currentDay));return this.formatDate(this._get(e,"dateFormat"),s,this._getFormatConfig(e))}}),e.fn.datepicker=function(t){if(!this.length)return this;e.datepicker.initialized||(e(document).mousedown(e.datepicker._checkExternalClick),e.datepicker.initialized=!0),0===e("#"+e.datepicker._mainDivId).length&&e("body").append(e.datepicker.dpDiv);var a=Array.prototype.slice.call(arguments,1);return"string"!=typeof t||"isDisabled"!==t&&"getDate"!==t&&"widget"!==t?"option"===t&&2===arguments.length&&"string"==typeof arguments[1]?e.datepicker["_"+t+"Datepicker"].apply(e.datepicker,[this[0]].concat(a)):this.each(function(){"string"==typeof t?e.datepicker["_"+t+"Datepicker"].apply(e.datepicker,[this].concat(a)):e.datepicker._attachDatepicker(this,t)}):e.datepicker["_"+t+"Datepicker"].apply(e.datepicker,[this[0]].concat(a))},e.datepicker=new a,e.datepicker.initialized=!1,e.datepicker.uuid=(new Date).getTime(),e.datepicker.version="1.10.3"})(jQuery);(function(e){var t={buttons:!0,height:!0,maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0,width:!0},a={maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0};e.widget("ui.dialog",{version:"1.10.3",options:{appendTo:"body",autoOpen:!0,buttons:[],closeOnEscape:!0,closeText:"",dialogClass:"",draggable:!0,hide:null,height:"auto",maxHeight:null,maxWidth:null,minHeight:150,minWidth:150,modal:!1,position:{my:"center",at:"center",of:window,collision:"fit",using:function(t){var a=e(this).css(t).offset().top;0>a&&e(this).css("top",t.top-a)}},resizable:!0,show:null,title:null,width:300,beforeClose:null,close:null,drag:null,dragStart:null,dragStop:null,focus:null,open:null,resize:null,resizeStart:null,resizeStop:null},_create:function(){this.originalCss={display:this.element[0].style.display,width:this.element[0].style.width,minHeight:this.element[0].style.minHeight,maxHeight:this.element[0].style.maxHeight,height:this.element[0].style.height},this.originalPosition={parent:this.element.parent(),index:this.element.parent().children().index(this.element)},this.originalTitle=this.element.attr("title"),this.options.title=this.options.title||this.originalTitle,this._createWrapper(),this.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(this.uiDialog),this._createTitlebar(),this._createButtonPane(),this.options.draggable&&e.fn.draggable&&this._makeDraggable(),this.options.resizable&&e.fn.resizable&&this._makeResizable(),this._isOpen=!1},_init:function(){this.options.autoOpen&&this.open()},_appendTo:function(){var t=this.options.appendTo;return t&&(t.jquery||t.nodeType)?e(t):this.document.find(t||"body").eq(0)},_destroy:function(){var e,t=this.originalPosition;this._destroyOverlay(),this.element.removeUniqueId().removeClass("ui-dialog-content ui-widget-content").css(this.originalCss).detach(),this.uiDialog.stop(!0,!0).remove(),this.originalTitle&&this.element.attr("title",this.originalTitle),e=t.parent.children().eq(t.index),e.length&&e[0]!==this.element[0]?e.before(this.element):t.parent.append(this.element)},widget:function(){return this.uiDialog},disable:e.noop,enable:e.noop,close:function(t){var a=this;this._isOpen&&this._trigger("beforeClose",t)!==!1&&(this._isOpen=!1,this._destroyOverlay(),this.opener.filter(":focusable").focus().length||e(this.document[0].activeElement).blur(),this._hide(this.uiDialog,this.options.hide,function(){a._trigger("close",t)}))},isOpen:function(){return this._isOpen},moveToTop:function(){this._moveToTop()},_moveToTop:function(e,t){var a=!!this.uiDialog.nextAll(":visible").insertBefore(this.uiDialog).length;return a&&!t&&this._trigger("focus",e),a},open:function(){var t=this;return this._isOpen?(this._moveToTop()&&this._focusTabbable(),undefined):(this._isOpen=!0,this.opener=e(this.document[0].activeElement),this._size(),this._position(),this._createOverlay(),this._moveToTop(null,!0),this._show(this.uiDialog,this.options.show,function(){t._focusTabbable(),t._trigger("focus")}),this._trigger("open"),undefined)},_focusTabbable:function(){var e=this.element.find("[autofocus]");e.length||(e=this.element.find(":tabbable")),e.length||(e=this.uiDialogButtonPane.find(":tabbable")),e.length||(e=this.uiDialogTitlebarClose.filter(":tabbable")),e.length||(e=this.uiDialog),e.eq(0).focus()},_keepFocus:function(t){function a(){var t=this.document[0].activeElement,a=this.uiDialog[0]===t||e.contains(this.uiDialog[0],t);a||this._focusTabbable()}t.preventDefault(),a.call(this),this._delay(a)},_createWrapper:function(){this.uiDialog=e("<div>").addClass("ui-dialog ui-widget ui-widget-content ui-corner-all ui-front "+this.options.dialogClass).hide().attr({tabIndex:-1,role:"dialog"}).appendTo(this._appendTo()),this._on(this.uiDialog,{keydown:function(t){if(this.options.closeOnEscape&&!t.isDefaultPrevented()&&t.keyCode&&t.keyCode===e.ui.keyCode.ESCAPE)return t.preventDefault(),this.close(t),undefined;if(t.keyCode===e.ui.keyCode.TAB){var a=this.uiDialog.find(":tabbable"),r=a.filter(":first"),i=a.filter(":last");t.target!==i[0]&&t.target!==this.uiDialog[0]||t.shiftKey?t.target!==r[0]&&t.target!==this.uiDialog[0]||!t.shiftKey||(i.focus(1),t.preventDefault()):(r.focus(1),t.preventDefault())}},mousedown:function(e){this._moveToTop(e)&&this._focusTabbable()}}),this.element.find("[aria-describedby]").length||this.uiDialog.attr({"aria-describedby":this.element.uniqueId().attr("id")})},_createTitlebar:function(){var t;this.uiDialogTitlebar=e("<div>").addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(this.uiDialog),this._on(this.uiDialogTitlebar,{mousedown:function(t){e(t.target).closest(".ui-dialog-titlebar-close")||this.uiDialog.focus()}}),this.uiDialogTitlebarClose=e("<button></button>").button({label:this.options.closeText,icons:{primary:"ui-icon-closethick"},text:!1}).addClass("ui-dialog-titlebar-close").appendTo(this.uiDialogTitlebar),this._on(this.uiDialogTitlebarClose,{click:function(e){e.preventDefault(),this.close(e)}}),t=e("<span>").uniqueId().addClass("ui-dialog-title").prependTo(this.uiDialogTitlebar),this._title(t),this.uiDialog.attr({"aria-labelledby":t.attr("id")})},_title:function(e){this.options.title||e.html("&#160;"),e.text(this.options.title)},_createButtonPane:function(){this.uiDialogButtonPane=e("<div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"),this.uiButtonSet=e("<div>").addClass("ui-dialog-buttonset").appendTo(this.uiDialogButtonPane),this._createButtons()},_createButtons:function(){var t=this,a=this.options.buttons;return this.uiDialogButtonPane.remove(),this.uiButtonSet.empty(),e.isEmptyObject(a)||e.isArray(a)&&!a.length?(this.uiDialog.removeClass("ui-dialog-buttons"),undefined):(e.each(a,function(a,r){var i,n;r=e.isFunction(r)?{click:r,text:a}:r,r=e.extend({type:"button"},r),i=r.click,r.click=function(){i.apply(t.element[0],arguments)},n={icons:r.icons,text:r.showText},delete r.icons,delete r.showText,e("<button></button>",r).button(n).appendTo(t.uiButtonSet)}),this.uiDialog.addClass("ui-dialog-buttons"),this.uiDialogButtonPane.appendTo(this.uiDialog),undefined)},_makeDraggable:function(){function t(e){return{position:e.position,offset:e.offset}}var a=this,r=this.options;this.uiDialog.draggable({cancel:".ui-dialog-content, .ui-dialog-titlebar-close",handle:".ui-dialog-titlebar",containment:"document",start:function(r,i){e(this).addClass("ui-dialog-dragging"),a._blockFrames(),a._trigger("dragStart",r,t(i))},drag:function(e,r){a._trigger("drag",e,t(r))},stop:function(i,n){r.position=[n.position.left-a.document.scrollLeft(),n.position.top-a.document.scrollTop()],e(this).removeClass("ui-dialog-dragging"),a._unblockFrames(),a._trigger("dragStop",i,t(n))}})},_makeResizable:function(){function t(e){return{originalPosition:e.originalPosition,originalSize:e.originalSize,position:e.position,size:e.size}}var a=this,r=this.options,i=r.resizable,n=this.uiDialog.css("position"),s="string"==typeof i?i:"n,e,s,w,se,sw,ne,nw";this.uiDialog.resizable({cancel:".ui-dialog-content",containment:"document",alsoResize:this.element,maxWidth:r.maxWidth,maxHeight:r.maxHeight,minWidth:r.minWidth,minHeight:this._minHeight(),handles:s,start:function(r,i){e(this).addClass("ui-dialog-resizing"),a._blockFrames(),a._trigger("resizeStart",r,t(i))},resize:function(e,r){a._trigger("resize",e,t(r))},stop:function(i,n){r.height=e(this).height(),r.width=e(this).width(),e(this).removeClass("ui-dialog-resizing"),a._unblockFrames(),a._trigger("resizeStop",i,t(n))}}).css("position",n)},_minHeight:function(){var e=this.options;return"auto"===e.height?e.minHeight:Math.min(e.minHeight,e.height)},_position:function(){var e=this.uiDialog.is(":visible");e||this.uiDialog.show(),this.uiDialog.position(this.options.position),e||this.uiDialog.hide()},_setOptions:function(r){var i=this,n=!1,s={};e.each(r,function(e,r){i._setOption(e,r),e in t&&(n=!0),e in a&&(s[e]=r)}),n&&(this._size(),this._position()),this.uiDialog.is(":data(ui-resizable)")&&this.uiDialog.resizable("option",s)},_setOption:function(e,t){var a,r,i=this.uiDialog;"dialogClass"===e&&i.removeClass(this.options.dialogClass).addClass(t),"disabled"!==e&&(this._super(e,t),"appendTo"===e&&this.uiDialog.appendTo(this._appendTo()),"buttons"===e&&this._createButtons(),"closeText"===e&&this.uiDialogTitlebarClose.button({label:""+t}),"draggable"===e&&(a=i.is(":data(ui-draggable)"),a&&!t&&i.draggable("destroy"),!a&&t&&this._makeDraggable()),"position"===e&&this._position(),"resizable"===e&&(r=i.is(":data(ui-resizable)"),r&&!t&&i.resizable("destroy"),r&&"string"==typeof t&&i.resizable("option","handles",t),r||t===!1||this._makeResizable()),"title"===e&&this._title(this.uiDialogTitlebar.find(".ui-dialog-title")))},_size:function(){var e,t,a,r=this.options;this.element.show().css({width:"auto",minHeight:0,maxHeight:"none",height:0}),r.minWidth>r.width&&(r.width=r.minWidth),e=this.uiDialog.css({height:"auto",width:r.width}).outerHeight(),t=Math.max(0,r.minHeight-e),a="number"==typeof r.maxHeight?Math.max(0,r.maxHeight-e):"none","auto"===r.height?this.element.css({minHeight:t,maxHeight:a,height:"auto"}):this.element.height(Math.max(0,r.height-e)),this.uiDialog.is(":data(ui-resizable)")&&this.uiDialog.resizable("option","minHeight",this._minHeight())},_blockFrames:function(){this.iframeBlocks=this.document.find("iframe").map(function(){var t=e(this);return e("<div>").css({position:"absolute",width:t.outerWidth(),height:t.outerHeight()}).appendTo(t.parent()).offset(t.offset())[0]})},_unblockFrames:function(){this.iframeBlocks&&(this.iframeBlocks.remove(),delete this.iframeBlocks)},_allowInteraction:function(t){return e(t.target).closest(".ui-dialog").length?!0:!!e(t.target).closest(".ui-datepicker").length},_createOverlay:function(){if(this.options.modal){var t=this,a=this.widgetFullName;e.ui.dialog.overlayInstances||this._delay(function(){e.ui.dialog.overlayInstances&&this.document.bind("focusin.dialog",function(r){t._allowInteraction(r)||(r.preventDefault(),e(".ui-dialog:visible:last .ui-dialog-content").data(a)._focusTabbable())})}),this.overlay=e("<div>").addClass("ui-widget-overlay ui-front").appendTo(this._appendTo()),this._on(this.overlay,{mousedown:"_keepFocus"}),e.ui.dialog.overlayInstances++}},_destroyOverlay:function(){this.options.modal&&this.overlay&&(e.ui.dialog.overlayInstances--,e.ui.dialog.overlayInstances||this.document.unbind("focusin.dialog"),this.overlay.remove(),this.overlay=null)}}),e.ui.dialog.overlayInstances=0,e.uiBackCompat!==!1&&e.widget("ui.dialog",e.ui.dialog,{_position:function(){var t,a=this.options.position,r=[],i=[0,0];a?(("string"==typeof a||"object"==typeof a&&"0"in a)&&(r=a.split?a.split(" "):[a[0],a[1]],1===r.length&&(r[1]=r[0]),e.each(["left","top"],function(e,t){+r[e]===r[e]&&(i[e]=r[e],r[e]=t)}),a={my:r[0]+(0>i[0]?i[0]:"+"+i[0])+" "+r[1]+(0>i[1]?i[1]:"+"+i[1]),at:r.join(" ")}),a=e.extend({},e.ui.dialog.prototype.options.position,a)):a=e.ui.dialog.prototype.options.position,t=this.uiDialog.is(":visible"),t||this.uiDialog.show(),this.uiDialog.position(a),t||this.uiDialog.hide()}})})(jQuery);(function(e){e.widget("ui.menu",{version:"1.10.3",defaultElement:"<ul>",delay:300,options:{icons:{submenu:"ui-icon-carat-1-e"},menus:"ul",position:{my:"left top",at:"right top"},role:"menu",blur:null,focus:null,select:null},_create:function(){this.activeMenu=this.element,this.mouseHandled=!1,this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content ui-corner-all").toggleClass("ui-menu-icons",!!this.element.find(".ui-icon").length).attr({role:this.options.role,tabIndex:0}).bind("click"+this.eventNamespace,e.proxy(function(e){this.options.disabled&&e.preventDefault()},this)),this.options.disabled&&this.element.addClass("ui-state-disabled").attr("aria-disabled","true"),this._on({"mousedown .ui-menu-item > a":function(e){e.preventDefault()},"click .ui-state-disabled > a":function(e){e.preventDefault()},"click .ui-menu-item:has(a)":function(t){var a=e(t.target).closest(".ui-menu-item");!this.mouseHandled&&a.not(".ui-state-disabled").length&&(this.mouseHandled=!0,this.select(t),a.has(".ui-menu").length?this.expand(t):this.element.is(":focus")||(this.element.trigger("focus",[!0]),this.active&&1===this.active.parents(".ui-menu").length&&clearTimeout(this.timer)))},"mouseenter .ui-menu-item":function(t){var a=e(t.currentTarget);a.siblings().children(".ui-state-active").removeClass("ui-state-active"),this.focus(t,a)},mouseleave:"collapseAll","mouseleave .ui-menu":"collapseAll",focus:function(e,t){var a=this.active||this.element.children(".ui-menu-item").eq(0);t||this.focus(e,a)},blur:function(t){this._delay(function(){e.contains(this.element[0],this.document[0].activeElement)||this.collapseAll(t)})},keydown:"_keydown"}),this.refresh(),this._on(this.document,{click:function(t){e(t.target).closest(".ui-menu").length||this.collapseAll(t),this.mouseHandled=!1}})},_destroy:function(){this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeClass("ui-menu ui-widget ui-widget-content ui-corner-all ui-menu-icons").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show(),this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").children("a").removeUniqueId().removeClass("ui-corner-all ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function(){var t=e(this);t.data("ui-menu-submenu-carat")&&t.remove()}),this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")},_keydown:function(t){function a(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}var i,r,s,n,o,d=!0;switch(t.keyCode){case e.ui.keyCode.PAGE_UP:this.previousPage(t);break;case e.ui.keyCode.PAGE_DOWN:this.nextPage(t);break;case e.ui.keyCode.HOME:this._move("first","first",t);break;case e.ui.keyCode.END:this._move("last","last",t);break;case e.ui.keyCode.UP:this.previous(t);break;case e.ui.keyCode.DOWN:this.next(t);break;case e.ui.keyCode.LEFT:this.collapse(t);break;case e.ui.keyCode.RIGHT:this.active&&!this.active.is(".ui-state-disabled")&&this.expand(t);break;case e.ui.keyCode.ENTER:case e.ui.keyCode.SPACE:this._activate(t);break;case e.ui.keyCode.ESCAPE:this.collapse(t);break;default:d=!1,r=this.previousFilter||"",s=String.fromCharCode(t.keyCode),n=!1,clearTimeout(this.filterTimer),s===r?n=!0:s=r+s,o=RegExp("^"+a(s),"i"),i=this.activeMenu.children(".ui-menu-item").filter(function(){return o.test(e(this).children("a").text())}),i=n&&-1!==i.index(this.active.next())?this.active.nextAll(".ui-menu-item"):i,i.length||(s=String.fromCharCode(t.keyCode),o=RegExp("^"+a(s),"i"),i=this.activeMenu.children(".ui-menu-item").filter(function(){return o.test(e(this).children("a").text())})),i.length?(this.focus(t,i),i.length>1?(this.previousFilter=s,this.filterTimer=this._delay(function(){delete this.previousFilter},1e3)):delete this.previousFilter):delete this.previousFilter}d&&t.preventDefault()},_activate:function(e){this.active.is(".ui-state-disabled")||(this.active.children("a[aria-haspopup='true']").length?this.expand(e):this.select(e))},refresh:function(){var t,a=this.options.icons.submenu,i=this.element.find(this.options.menus);i.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-corner-all").hide().attr({role:this.options.role,"aria-hidden":"true","aria-expanded":"false"}).each(function(){var t=e(this),i=t.prev("a"),r=e("<span>").addClass("ui-menu-icon ui-icon "+a).data("ui-menu-submenu-carat",!0);i.attr("aria-haspopup","true").prepend(r),t.attr("aria-labelledby",i.attr("id"))}),t=i.add(this.element),t.children(":not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role","presentation").children("a").uniqueId().addClass("ui-corner-all").attr({tabIndex:-1,role:this._itemRole()}),t.children(":not(.ui-menu-item)").each(function(){var t=e(this);/[^\-\u2014\u2013\s]/.test(t.text())||t.addClass("ui-widget-content ui-menu-divider")}),t.children(".ui-state-disabled").attr("aria-disabled","true"),this.active&&!e.contains(this.element[0],this.active[0])&&this.blur()},_itemRole:function(){return{menu:"menuitem",listbox:"option"}[this.options.role]},_setOption:function(e,t){"icons"===e&&this.element.find(".ui-menu-icon").removeClass(this.options.icons.submenu).addClass(t.submenu),this._super(e,t)},focus:function(e,t){var a,i;this.blur(e,e&&"focus"===e.type),this._scrollIntoView(t),this.active=t.first(),i=this.active.children("a").addClass("ui-state-focus"),this.options.role&&this.element.attr("aria-activedescendant",i.attr("id")),this.active.parent().closest(".ui-menu-item").children("a:first").addClass("ui-state-active"),e&&"keydown"===e.type?this._close():this.timer=this._delay(function(){this._close()},this.delay),a=t.children(".ui-menu"),a.length&&/^mouse/.test(e.type)&&this._startOpening(a),this.activeMenu=t.parent(),this._trigger("focus",e,{item:t})},_scrollIntoView:function(t){var a,i,r,s,n,o;this._hasScroll()&&(a=parseFloat(e.css(this.activeMenu[0],"borderTopWidth"))||0,i=parseFloat(e.css(this.activeMenu[0],"paddingTop"))||0,r=t.offset().top-this.activeMenu.offset().top-a-i,s=this.activeMenu.scrollTop(),n=this.activeMenu.height(),o=t.height(),0>r?this.activeMenu.scrollTop(s+r):r+o>n&&this.activeMenu.scrollTop(s+r-n+o))},blur:function(e,t){t||clearTimeout(this.timer),this.active&&(this.active.children("a").removeClass("ui-state-focus"),this.active=null,this._trigger("blur",e,{item:this.active}))},_startOpening:function(e){clearTimeout(this.timer),"true"===e.attr("aria-hidden")&&(this.timer=this._delay(function(){this._close(),this._open(e)},this.delay))},_open:function(t){var a=e.extend({of:this.active},this.options.position);clearTimeout(this.timer),this.element.find(".ui-menu").not(t.parents(".ui-menu")).hide().attr("aria-hidden","true"),t.show().removeAttr("aria-hidden").attr("aria-expanded","true").position(a)},collapseAll:function(t,a){clearTimeout(this.timer),this.timer=this._delay(function(){var i=a?this.element:e(t&&t.target).closest(this.element.find(".ui-menu"));i.length||(i=this.element),this._close(i),this.blur(t),this.activeMenu=i},this.delay)},_close:function(e){e||(e=this.active?this.active.parent():this.element),e.find(".ui-menu").hide().attr("aria-hidden","true").attr("aria-expanded","false").end().find("a.ui-state-active").removeClass("ui-state-active")},collapse:function(e){var t=this.active&&this.active.parent().closest(".ui-menu-item",this.element);t&&t.length&&(this._close(),this.focus(e,t))},expand:function(e){var t=this.active&&this.active.children(".ui-menu ").children(".ui-menu-item").first();t&&t.length&&(this._open(t.parent()),this._delay(function(){this.focus(e,t)}))},next:function(e){this._move("next","first",e)},previous:function(e){this._move("prev","last",e)},isFirstItem:function(){return this.active&&!this.active.prevAll(".ui-menu-item").length},isLastItem:function(){return this.active&&!this.active.nextAll(".ui-menu-item").length},_move:function(e,t,a){var i;this.active&&(i="first"===e||"last"===e?this.active["first"===e?"prevAll":"nextAll"](".ui-menu-item").eq(-1):this.active[e+"All"](".ui-menu-item").eq(0)),i&&i.length&&this.active||(i=this.activeMenu.children(".ui-menu-item")[t]()),this.focus(a,i)},nextPage:function(t){var a,i,r;return this.active?(this.isLastItem()||(this._hasScroll()?(i=this.active.offset().top,r=this.element.height(),this.active.nextAll(".ui-menu-item").each(function(){return a=e(this),0>a.offset().top-i-r}),this.focus(t,a)):this.focus(t,this.activeMenu.children(".ui-menu-item")[this.active?"last":"first"]())),undefined):(this.next(t),undefined)},previousPage:function(t){var a,i,r;return this.active?(this.isFirstItem()||(this._hasScroll()?(i=this.active.offset().top,r=this.element.height(),this.active.prevAll(".ui-menu-item").each(function(){return a=e(this),a.offset().top-i+r>0}),this.focus(t,a)):this.focus(t,this.activeMenu.children(".ui-menu-item").first())),undefined):(this.next(t),undefined)},_hasScroll:function(){return this.element.outerHeight()<this.element.prop("scrollHeight")},select:function(t){this.active=this.active||e(t.target).closest(".ui-menu-item");var a={item:this.active};this.active.has(".ui-menu").length||this.collapseAll(t,!0),this._trigger("select",t,a)}})})(jQuery);(function(e,t){e.widget("ui.progressbar",{version:"1.10.3",options:{max:100,value:0,change:null,complete:null},min:0,_create:function(){this.oldValue=this.options.value=this._constrainedValue(),this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({role:"progressbar","aria-valuemin":this.min}),this.valueDiv=e("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element),this._refreshValue()},_destroy:function(){this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"),this.valueDiv.remove()},value:function(e){return e===t?this.options.value:(this.options.value=this._constrainedValue(e),this._refreshValue(),t)},_constrainedValue:function(e){return e===t&&(e=this.options.value),this.indeterminate=e===!1,"number"!=typeof e&&(e=0),this.indeterminate?!1:Math.min(this.options.max,Math.max(this.min,e))},_setOptions:function(e){var t=e.value;delete e.value,this._super(e),this.options.value=this._constrainedValue(t),this._refreshValue()},_setOption:function(e,t){"max"===e&&(t=Math.max(this.min,t)),this._super(e,t)},_percentage:function(){return this.indeterminate?100:100*(this.options.value-this.min)/(this.options.max-this.min)},_refreshValue:function(){var t=this.options.value,a=this._percentage();this.valueDiv.toggle(this.indeterminate||t>this.min).toggleClass("ui-corner-right",t===this.options.max).width(a.toFixed(0)+"%"),this.element.toggleClass("ui-progressbar-indeterminate",this.indeterminate),this.indeterminate?(this.element.removeAttr("aria-valuenow"),this.overlayDiv||(this.overlayDiv=e("<div class='ui-progressbar-overlay'></div>").appendTo(this.valueDiv))):(this.element.attr({"aria-valuemax":this.options.max,"aria-valuenow":t}),this.overlayDiv&&(this.overlayDiv.remove(),this.overlayDiv=null)),this.oldValue!==t&&(this.oldValue=t,this._trigger("change")),t===this.options.max&&this._trigger("complete")}})})(jQuery);(function(e){var t=5;e.widget("ui.slider",e.ui.mouse,{version:"1.10.3",widgetEventPrefix:"slide",options:{animate:!1,distance:0,max:100,min:0,orientation:"horizontal",range:!1,step:1,value:0,values:null,change:null,slide:null,start:null,stop:null},_create:function(){this._keySliding=!1,this._mouseSliding=!1,this._animateOff=!0,this._handleIndex=null,this._detectOrientation(),this._mouseInit(),this.element.addClass("ui-slider ui-slider-"+this.orientation+" ui-widget"+" ui-widget-content"+" ui-corner-all"),this._refresh(),this._setOption("disabled",this.options.disabled),this._animateOff=!1},_refresh:function(){this._createRange(),this._createHandles(),this._setupEvents(),this._refreshValue()},_createHandles:function(){var t,i,a=this.options,s=this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),r="<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>",n=[];for(i=a.values&&a.values.length||1,s.length>i&&(s.slice(i).remove(),s=s.slice(0,i)),t=s.length;i>t;t++)n.push(r);this.handles=s.add(e(n.join("")).appendTo(this.element)),this.handle=this.handles.eq(0),this.handles.each(function(t){e(this).data("ui-slider-handle-index",t)})},_createRange:function(){var t=this.options,i="";t.range?(t.range===!0&&(t.values?t.values.length&&2!==t.values.length?t.values=[t.values[0],t.values[0]]:e.isArray(t.values)&&(t.values=t.values.slice(0)):t.values=[this._valueMin(),this._valueMin()]),this.range&&this.range.length?this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({left:"",bottom:""}):(this.range=e("<div></div>").appendTo(this.element),i="ui-slider-range ui-widget-header ui-corner-all"),this.range.addClass(i+("min"===t.range||"max"===t.range?" ui-slider-range-"+t.range:""))):this.range=e([])},_setupEvents:function(){var e=this.handles.add(this.range).filter("a");this._off(e),this._on(e,this._handleEvents),this._hoverable(e),this._focusable(e)},_destroy:function(){this.handles.remove(),this.range.remove(),this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all"),this._mouseDestroy()},_mouseCapture:function(t){var i,a,s,r,n,o,l,h,u=this,d=this.options;return d.disabled?!1:(this.elementSize={width:this.element.outerWidth(),height:this.element.outerHeight()},this.elementOffset=this.element.offset(),i={x:t.pageX,y:t.pageY},a=this._normValueFromMouse(i),s=this._valueMax()-this._valueMin()+1,this.handles.each(function(t){var i=Math.abs(a-u.values(t));(s>i||s===i&&(t===u._lastChangedValue||u.values(t)===d.min))&&(s=i,r=e(this),n=t)}),o=this._start(t,n),o===!1?!1:(this._mouseSliding=!0,this._handleIndex=n,r.addClass("ui-state-active").focus(),l=r.offset(),h=!e(t.target).parents().addBack().is(".ui-slider-handle"),this._clickOffset=h?{left:0,top:0}:{left:t.pageX-l.left-r.width()/2,top:t.pageY-l.top-r.height()/2-(parseInt(r.css("borderTopWidth"),10)||0)-(parseInt(r.css("borderBottomWidth"),10)||0)+(parseInt(r.css("marginTop"),10)||0)},this.handles.hasClass("ui-state-hover")||this._slide(t,n,a),this._animateOff=!0,!0))},_mouseStart:function(){return!0},_mouseDrag:function(e){var t={x:e.pageX,y:e.pageY},i=this._normValueFromMouse(t);return this._slide(e,this._handleIndex,i),!1},_mouseStop:function(e){return this.handles.removeClass("ui-state-active"),this._mouseSliding=!1,this._stop(e,this._handleIndex),this._change(e,this._handleIndex),this._handleIndex=null,this._clickOffset=null,this._animateOff=!1,!1},_detectOrientation:function(){this.orientation="vertical"===this.options.orientation?"vertical":"horizontal"},_normValueFromMouse:function(e){var t,i,a,s,r;return"horizontal"===this.orientation?(t=this.elementSize.width,i=e.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0)):(t=this.elementSize.height,i=e.y-this.elementOffset.top-(this._clickOffset?this._clickOffset.top:0)),a=i/t,a>1&&(a=1),0>a&&(a=0),"vertical"===this.orientation&&(a=1-a),s=this._valueMax()-this._valueMin(),r=this._valueMin()+a*s,this._trimAlignValue(r)},_start:function(e,t){var i={handle:this.handles[t],value:this.value()};return this.options.values&&this.options.values.length&&(i.value=this.values(t),i.values=this.values()),this._trigger("start",e,i)},_slide:function(e,t,i){var a,s,r;this.options.values&&this.options.values.length?(a=this.values(t?0:1),2===this.options.values.length&&this.options.range===!0&&(0===t&&i>a||1===t&&a>i)&&(i=a),i!==this.values(t)&&(s=this.values(),s[t]=i,r=this._trigger("slide",e,{handle:this.handles[t],value:i,values:s}),a=this.values(t?0:1),r!==!1&&this.values(t,i,!0))):i!==this.value()&&(r=this._trigger("slide",e,{handle:this.handles[t],value:i}),r!==!1&&this.value(i))},_stop:function(e,t){var i={handle:this.handles[t],value:this.value()};this.options.values&&this.options.values.length&&(i.value=this.values(t),i.values=this.values()),this._trigger("stop",e,i)},_change:function(e,t){if(!this._keySliding&&!this._mouseSliding){var i={handle:this.handles[t],value:this.value()};this.options.values&&this.options.values.length&&(i.value=this.values(t),i.values=this.values()),this._lastChangedValue=t,this._trigger("change",e,i)}},value:function(e){return arguments.length?(this.options.value=this._trimAlignValue(e),this._refreshValue(),this._change(null,0),undefined):this._value()},values:function(t,i){var a,s,r;if(arguments.length>1)return this.options.values[t]=this._trimAlignValue(i),this._refreshValue(),this._change(null,t),undefined;if(!arguments.length)return this._values();if(!e.isArray(arguments[0]))return this.options.values&&this.options.values.length?this._values(t):this.value();for(a=this.options.values,s=arguments[0],r=0;a.length>r;r+=1)a[r]=this._trimAlignValue(s[r]),this._change(null,r);this._refreshValue()},_setOption:function(t,i){var a,s=0;switch("range"===t&&this.options.range===!0&&("min"===i?(this.options.value=this._values(0),this.options.values=null):"max"===i&&(this.options.value=this._values(this.options.values.length-1),this.options.values=null)),e.isArray(this.options.values)&&(s=this.options.values.length),e.Widget.prototype._setOption.apply(this,arguments),t){case"orientation":this._detectOrientation(),this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-"+this.orientation),this._refreshValue();break;case"value":this._animateOff=!0,this._refreshValue(),this._change(null,0),this._animateOff=!1;break;case"values":for(this._animateOff=!0,this._refreshValue(),a=0;s>a;a+=1)this._change(null,a);this._animateOff=!1;break;case"min":case"max":this._animateOff=!0,this._refreshValue(),this._animateOff=!1;break;case"range":this._animateOff=!0,this._refresh(),this._animateOff=!1}},_value:function(){var e=this.options.value;return e=this._trimAlignValue(e)},_values:function(e){var t,i,a;if(arguments.length)return t=this.options.values[e],t=this._trimAlignValue(t);if(this.options.values&&this.options.values.length){for(i=this.options.values.slice(),a=0;i.length>a;a+=1)i[a]=this._trimAlignValue(i[a]);return i}return[]},_trimAlignValue:function(e){if(this._valueMin()>=e)return this._valueMin();if(e>=this._valueMax())return this._valueMax();var t=this.options.step>0?this.options.step:1,i=(e-this._valueMin())%t,a=e-i;return 2*Math.abs(i)>=t&&(a+=i>0?t:-t),parseFloat(a.toFixed(5))},_valueMin:function(){return this.options.min},_valueMax:function(){return this.options.max},_refreshValue:function(){var t,i,a,s,r,n=this.options.range,o=this.options,l=this,h=this._animateOff?!1:o.animate,u={};this.options.values&&this.options.values.length?this.handles.each(function(a){i=100*((l.values(a)-l._valueMin())/(l._valueMax()-l._valueMin())),u["horizontal"===l.orientation?"left":"bottom"]=i+"%",e(this).stop(1,1)[h?"animate":"css"](u,o.animate),l.options.range===!0&&("horizontal"===l.orientation?(0===a&&l.range.stop(1,1)[h?"animate":"css"]({left:i+"%"},o.animate),1===a&&l.range[h?"animate":"css"]({width:i-t+"%"},{queue:!1,duration:o.animate})):(0===a&&l.range.stop(1,1)[h?"animate":"css"]({bottom:i+"%"},o.animate),1===a&&l.range[h?"animate":"css"]({height:i-t+"%"},{queue:!1,duration:o.animate}))),t=i}):(a=this.value(),s=this._valueMin(),r=this._valueMax(),i=r!==s?100*((a-s)/(r-s)):0,u["horizontal"===this.orientation?"left":"bottom"]=i+"%",this.handle.stop(1,1)[h?"animate":"css"](u,o.animate),"min"===n&&"horizontal"===this.orientation&&this.range.stop(1,1)[h?"animate":"css"]({width:i+"%"},o.animate),"max"===n&&"horizontal"===this.orientation&&this.range[h?"animate":"css"]({width:100-i+"%"},{queue:!1,duration:o.animate}),"min"===n&&"vertical"===this.orientation&&this.range.stop(1,1)[h?"animate":"css"]({height:i+"%"},o.animate),"max"===n&&"vertical"===this.orientation&&this.range[h?"animate":"css"]({height:100-i+"%"},{queue:!1,duration:o.animate}))},_handleEvents:{keydown:function(i){var a,s,r,n,o=e(i.target).data("ui-slider-handle-index");switch(i.keyCode){case e.ui.keyCode.HOME:case e.ui.keyCode.END:case e.ui.keyCode.PAGE_UP:case e.ui.keyCode.PAGE_DOWN:case e.ui.keyCode.UP:case e.ui.keyCode.RIGHT:case e.ui.keyCode.DOWN:case e.ui.keyCode.LEFT:if(i.preventDefault(),!this._keySliding&&(this._keySliding=!0,e(i.target).addClass("ui-state-active"),a=this._start(i,o),a===!1))return}switch(n=this.options.step,s=r=this.options.values&&this.options.values.length?this.values(o):this.value(),i.keyCode){case e.ui.keyCode.HOME:r=this._valueMin();break;case e.ui.keyCode.END:r=this._valueMax();break;case e.ui.keyCode.PAGE_UP:r=this._trimAlignValue(s+(this._valueMax()-this._valueMin())/t);break;case e.ui.keyCode.PAGE_DOWN:r=this._trimAlignValue(s-(this._valueMax()-this._valueMin())/t);break;case e.ui.keyCode.UP:case e.ui.keyCode.RIGHT:if(s===this._valueMax())return;r=this._trimAlignValue(s+n);break;case e.ui.keyCode.DOWN:case e.ui.keyCode.LEFT:if(s===this._valueMin())return;r=this._trimAlignValue(s-n)}this._slide(i,o,r)},click:function(e){e.preventDefault()},keyup:function(t){var i=e(t.target).data("ui-slider-handle-index");this._keySliding&&(this._keySliding=!1,this._stop(t,i),this._change(t,i),e(t.target).removeClass("ui-state-active"))}}})})(jQuery);(function(e){function t(e){return function(){var t=this.element.val();e.apply(this,arguments),this._refresh(),t!==this.element.val()&&this._trigger("change")}}e.widget("ui.spinner",{version:"1.10.3",defaultElement:"<input>",widgetEventPrefix:"spin",options:{culture:null,icons:{down:"ui-icon-triangle-1-s",up:"ui-icon-triangle-1-n"},incremental:!0,max:null,min:null,numberFormat:null,page:10,step:1,change:null,spin:null,start:null,stop:null},_create:function(){this._setOption("max",this.options.max),this._setOption("min",this.options.min),this._setOption("step",this.options.step),this._value(this.element.val(),!0),this._draw(),this._on(this._events),this._refresh(),this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete")}})},_getCreateOptions:function(){var t={},i=this.element;return e.each(["min","max","step"],function(e,a){var s=i.attr(a);void 0!==s&&s.length&&(t[a]=s)}),t},_events:{keydown:function(e){this._start(e)&&this._keydown(e)&&e.preventDefault()},keyup:"_stop",focus:function(){this.previous=this.element.val()},blur:function(e){return this.cancelBlur?(delete this.cancelBlur,void 0):(this._stop(),this._refresh(),this.previous!==this.element.val()&&this._trigger("change",e),void 0)},mousewheel:function(e,t){if(t){if(!this.spinning&&!this._start(e))return!1;this._spin((t>0?1:-1)*this.options.step,e),clearTimeout(this.mousewheelTimer),this.mousewheelTimer=this._delay(function(){this.spinning&&this._stop(e)},100),e.preventDefault()}},"mousedown .ui-spinner-button":function(t){function i(){var e=this.element[0]===this.document[0].activeElement;e||(this.element.focus(),this.previous=a,this._delay(function(){this.previous=a}))}var a;a=this.element[0]===this.document[0].activeElement?this.previous:this.element.val(),t.preventDefault(),i.call(this),this.cancelBlur=!0,this._delay(function(){delete this.cancelBlur,i.call(this)}),this._start(t)!==!1&&this._repeat(null,e(t.currentTarget).hasClass("ui-spinner-up")?1:-1,t)},"mouseup .ui-spinner-button":"_stop","mouseenter .ui-spinner-button":function(t){return e(t.currentTarget).hasClass("ui-state-active")?this._start(t)===!1?!1:(this._repeat(null,e(t.currentTarget).hasClass("ui-spinner-up")?1:-1,t),void 0):void 0},"mouseleave .ui-spinner-button":"_stop"},_draw:function(){var e=this.uiSpinner=this.element.addClass("ui-spinner-input").attr("autocomplete","off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml());this.element.attr("role","spinbutton"),this.buttons=e.find(".ui-spinner-button").attr("tabIndex",-1).button().removeClass("ui-corner-all"),this.buttons.height()>Math.ceil(.5*e.height())&&e.height()>0&&e.height(e.height()),this.options.disabled&&this.disable()},_keydown:function(t){var i=this.options,a=e.ui.keyCode;switch(t.keyCode){case a.UP:return this._repeat(null,1,t),!0;case a.DOWN:return this._repeat(null,-1,t),!0;case a.PAGE_UP:return this._repeat(null,i.page,t),!0;case a.PAGE_DOWN:return this._repeat(null,-i.page,t),!0}return!1},_uiSpinnerHtml:function(){return"<span class='ui-spinner ui-widget ui-widget-content ui-corner-all'></span>"},_buttonHtml:function(){return"<a class='ui-spinner-button ui-spinner-up ui-corner-tr'><span class='ui-icon "+this.options.icons.up+"'>&#9650;</span>"+"</a>"+"<a class='ui-spinner-button ui-spinner-down ui-corner-br'>"+"<span class='ui-icon "+this.options.icons.down+"'>&#9660;</span>"+"</a>"},_start:function(e){return this.spinning||this._trigger("start",e)!==!1?(this.counter||(this.counter=1),this.spinning=!0,!0):!1},_repeat:function(e,t,i){e=e||500,clearTimeout(this.timer),this.timer=this._delay(function(){this._repeat(40,t,i)},e),this._spin(t*this.options.step,i)},_spin:function(e,t){var i=this.value()||0;this.counter||(this.counter=1),i=this._adjustValue(i+e*this._increment(this.counter)),this.spinning&&this._trigger("spin",t,{value:i})===!1||(this._value(i),this.counter++)},_increment:function(t){var i=this.options.incremental;return i?e.isFunction(i)?i(t):Math.floor(t*t*t/5e4-t*t/500+17*t/200+1):1},_precision:function(){var e=this._precisionOf(this.options.step);return null!==this.options.min&&(e=Math.max(e,this._precisionOf(this.options.min))),e},_precisionOf:function(e){var t=""+e,i=t.indexOf(".");return-1===i?0:t.length-i-1},_adjustValue:function(e){var t,i,a=this.options;return t=null!==a.min?a.min:0,i=e-t,i=Math.round(i/a.step)*a.step,e=t+i,e=parseFloat(e.toFixed(this._precision())),null!==a.max&&e>a.max?a.max:null!==a.min&&a.min>e?a.min:e},_stop:function(e){this.spinning&&(clearTimeout(this.timer),clearTimeout(this.mousewheelTimer),this.counter=0,this.spinning=!1,this._trigger("stop",e))},_setOption:function(e,t){if("culture"===e||"numberFormat"===e){var i=this._parse(this.element.val());return this.options[e]=t,this.element.val(this._format(i)),void 0}("max"===e||"min"===e||"step"===e)&&"string"==typeof t&&(t=this._parse(t)),"icons"===e&&(this.buttons.first().find(".ui-icon").removeClass(this.options.icons.up).addClass(t.up),this.buttons.last().find(".ui-icon").removeClass(this.options.icons.down).addClass(t.down)),this._super(e,t),"disabled"===e&&(t?(this.element.prop("disabled",!0),this.buttons.button("disable")):(this.element.prop("disabled",!1),this.buttons.button("enable")))},_setOptions:t(function(e){this._super(e),this._value(this.element.val())}),_parse:function(e){return"string"==typeof e&&""!==e&&(e=window.Globalize&&this.options.numberFormat?Globalize.parseFloat(e,10,this.options.culture):+e),""===e||isNaN(e)?null:e},_format:function(e){return""===e?"":window.Globalize&&this.options.numberFormat?Globalize.format(e,this.options.numberFormat,this.options.culture):e},_refresh:function(){this.element.attr({"aria-valuemin":this.options.min,"aria-valuemax":this.options.max,"aria-valuenow":this._parse(this.element.val())})},_value:function(e,t){var i;""!==e&&(i=this._parse(e),null!==i&&(t||(i=this._adjustValue(i)),e=this._format(i))),this.element.val(e),this._refresh()},_destroy:function(){this.element.removeClass("ui-spinner-input").prop("disabled",!1).removeAttr("autocomplete").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"),this.uiSpinner.replaceWith(this.element)},stepUp:t(function(e){this._stepUp(e)}),_stepUp:function(e){this._start()&&(this._spin((e||1)*this.options.step),this._stop())},stepDown:t(function(e){this._stepDown(e)}),_stepDown:function(e){this._start()&&(this._spin((e||1)*-this.options.step),this._stop())},pageUp:t(function(e){this._stepUp((e||1)*this.options.page)}),pageDown:t(function(e){this._stepDown((e||1)*this.options.page)}),value:function(e){return arguments.length?(t(this._value).call(this,e),void 0):this._parse(this.element.val())},widget:function(){return this.uiSpinner}})})(jQuery);(function(e,t){function i(){return++s}function a(e){return e.hash.length>1&&decodeURIComponent(e.href.replace(r,""))===decodeURIComponent(location.href.replace(r,""))}var s=0,r=/#.*$/;e.widget("ui.tabs",{version:"1.10.3",delay:300,options:{active:null,collapsible:!1,event:"click",heightStyle:"content",hide:null,show:null,activate:null,beforeActivate:null,beforeLoad:null,load:null},_create:function(){var t=this,i=this.options;this.running=!1,this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all").toggleClass("ui-tabs-collapsible",i.collapsible).delegate(".ui-tabs-nav > li","mousedown"+this.eventNamespace,function(t){e(this).is(".ui-state-disabled")&&t.preventDefault()}).delegate(".ui-tabs-anchor","focus"+this.eventNamespace,function(){e(this).closest("li").is(".ui-state-disabled")&&this.blur()}),this._processTabs(),i.active=this._initialActive(),e.isArray(i.disabled)&&(i.disabled=e.unique(i.disabled.concat(e.map(this.tabs.filter(".ui-state-disabled"),function(e){return t.tabs.index(e)}))).sort()),this.active=this.options.active!==!1&&this.anchors.length?this._findActive(i.active):e(),this._refresh(),this.active.length&&this.load(i.active)},_initialActive:function(){var i=this.options.active,a=this.options.collapsible,s=location.hash.substring(1);return null===i&&(s&&this.tabs.each(function(a,r){return e(r).attr("aria-controls")===s?(i=a,!1):t}),null===i&&(i=this.tabs.index(this.tabs.filter(".ui-tabs-active"))),(null===i||-1===i)&&(i=this.tabs.length?0:!1)),i!==!1&&(i=this.tabs.index(this.tabs.eq(i)),-1===i&&(i=a?!1:0)),!a&&i===!1&&this.anchors.length&&(i=0),i},_getCreateEventData:function(){return{tab:this.active,panel:this.active.length?this._getPanelForTab(this.active):e()}},_tabKeydown:function(i){var a=e(this.document[0].activeElement).closest("li"),s=this.tabs.index(a),r=!0;if(!this._handlePageNav(i)){switch(i.keyCode){case e.ui.keyCode.RIGHT:case e.ui.keyCode.DOWN:s++;break;case e.ui.keyCode.UP:case e.ui.keyCode.LEFT:r=!1,s--;break;case e.ui.keyCode.END:s=this.anchors.length-1;break;case e.ui.keyCode.HOME:s=0;break;case e.ui.keyCode.SPACE:return i.preventDefault(),clearTimeout(this.activating),this._activate(s),t;case e.ui.keyCode.ENTER:return i.preventDefault(),clearTimeout(this.activating),this._activate(s===this.options.active?!1:s),t;default:return}i.preventDefault(),clearTimeout(this.activating),s=this._focusNextTab(s,r),i.ctrlKey||(a.attr("aria-selected","false"),this.tabs.eq(s).attr("aria-selected","true"),this.activating=this._delay(function(){this.option("active",s)},this.delay))}},_panelKeydown:function(t){this._handlePageNav(t)||t.ctrlKey&&t.keyCode===e.ui.keyCode.UP&&(t.preventDefault(),this.active.focus())},_handlePageNav:function(i){return i.altKey&&i.keyCode===e.ui.keyCode.PAGE_UP?(this._activate(this._focusNextTab(this.options.active-1,!1)),!0):i.altKey&&i.keyCode===e.ui.keyCode.PAGE_DOWN?(this._activate(this._focusNextTab(this.options.active+1,!0)),!0):t},_findNextTab:function(t,i){function a(){return t>s&&(t=0),0>t&&(t=s),t}for(var s=this.tabs.length-1;-1!==e.inArray(a(),this.options.disabled);)t=i?t+1:t-1;return t},_focusNextTab:function(e,t){return e=this._findNextTab(e,t),this.tabs.eq(e).focus(),e},_setOption:function(e,i){return"active"===e?(this._activate(i),t):"disabled"===e?(this._setupDisabled(i),t):(this._super(e,i),"collapsible"===e&&(this.element.toggleClass("ui-tabs-collapsible",i),i||this.options.active!==!1||this._activate(0)),"event"===e&&this._setupEvents(i),"heightStyle"===e&&this._setupHeightStyle(i),t)},_tabId:function(e){return e.attr("aria-controls")||"ui-tabs-"+i()},_sanitizeSelector:function(e){return e?e.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g,"\\$&"):""},refresh:function(){var t=this.options,i=this.tablist.children(":has(a[href])");t.disabled=e.map(i.filter(".ui-state-disabled"),function(e){return i.index(e)}),this._processTabs(),t.active!==!1&&this.anchors.length?this.active.length&&!e.contains(this.tablist[0],this.active[0])?this.tabs.length===t.disabled.length?(t.active=!1,this.active=e()):this._activate(this._findNextTab(Math.max(0,t.active-1),!1)):t.active=this.tabs.index(this.active):(t.active=!1,this.active=e()),this._refresh()},_refresh:function(){this._setupDisabled(this.options.disabled),this._setupEvents(this.options.event),this._setupHeightStyle(this.options.heightStyle),this.tabs.not(this.active).attr({"aria-selected":"false",tabIndex:-1}),this.panels.not(this._getPanelForTab(this.active)).hide().attr({"aria-expanded":"false","aria-hidden":"true"}),this.active.length?(this.active.addClass("ui-tabs-active ui-state-active").attr({"aria-selected":"true",tabIndex:0}),this._getPanelForTab(this.active).show().attr({"aria-expanded":"true","aria-hidden":"false"})):this.tabs.eq(0).attr("tabIndex",0)},_processTabs:function(){var t=this;this.tablist=this._getList().addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").attr("role","tablist"),this.tabs=this.tablist.find("> li:has(a[href])").addClass("ui-state-default ui-corner-top").attr({role:"tab",tabIndex:-1}),this.anchors=this.tabs.map(function(){return e("a",this)[0]}).addClass("ui-tabs-anchor").attr({role:"presentation",tabIndex:-1}),this.panels=e(),this.anchors.each(function(i,s){var r,n,o,h=e(s).uniqueId().attr("id"),l=e(s).closest("li"),u=l.attr("aria-controls");a(s)?(r=s.hash,n=t.element.find(t._sanitizeSelector(r))):(o=t._tabId(l),r="#"+o,n=t.element.find(r),n.length||(n=t._createPanel(o),n.insertAfter(t.panels[i-1]||t.tablist)),n.attr("aria-live","polite")),n.length&&(t.panels=t.panels.add(n)),u&&l.data("ui-tabs-aria-controls",u),l.attr({"aria-controls":r.substring(1),"aria-labelledby":h}),n.attr("aria-labelledby",h)}),this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").attr("role","tabpanel")},_getList:function(){return this.element.find("ol,ul").eq(0)},_createPanel:function(t){return e("<div>").attr("id",t).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy",!0)},_setupDisabled:function(t){e.isArray(t)&&(t.length?t.length===this.anchors.length&&(t=!0):t=!1);for(var i,a=0;i=this.tabs[a];a++)t===!0||-1!==e.inArray(a,t)?e(i).addClass("ui-state-disabled").attr("aria-disabled","true"):e(i).removeClass("ui-state-disabled").removeAttr("aria-disabled");this.options.disabled=t},_setupEvents:function(t){var i={click:function(e){e.preventDefault()}};t&&e.each(t.split(" "),function(e,t){i[t]="_eventHandler"}),this._off(this.anchors.add(this.tabs).add(this.panels)),this._on(this.anchors,i),this._on(this.tabs,{keydown:"_tabKeydown"}),this._on(this.panels,{keydown:"_panelKeydown"}),this._focusable(this.tabs),this._hoverable(this.tabs)},_setupHeightStyle:function(t){var i,a=this.element.parent();"fill"===t?(i=a.height(),i-=this.element.outerHeight()-this.element.height(),this.element.siblings(":visible").each(function(){var t=e(this),a=t.css("position");"absolute"!==a&&"fixed"!==a&&(i-=t.outerHeight(!0))}),this.element.children().not(this.panels).each(function(){i-=e(this).outerHeight(!0)}),this.panels.each(function(){e(this).height(Math.max(0,i-e(this).innerHeight()+e(this).height()))}).css("overflow","auto")):"auto"===t&&(i=0,this.panels.each(function(){i=Math.max(i,e(this).height("").height())}).height(i))},_eventHandler:function(t){var i=this.options,a=this.active,s=e(t.currentTarget),r=s.closest("li"),n=r[0]===a[0],o=n&&i.collapsible,h=o?e():this._getPanelForTab(r),l=a.length?this._getPanelForTab(a):e(),u={oldTab:a,oldPanel:l,newTab:o?e():r,newPanel:h};t.preventDefault(),r.hasClass("ui-state-disabled")||r.hasClass("ui-tabs-loading")||this.running||n&&!i.collapsible||this._trigger("beforeActivate",t,u)===!1||(i.active=o?!1:this.tabs.index(r),this.active=n?e():r,this.xhr&&this.xhr.abort(),l.length||h.length||e.error("jQuery UI Tabs: Mismatching fragment identifier."),h.length&&this.load(this.tabs.index(r),t),this._toggle(t,u))},_toggle:function(t,i){function a(){r.running=!1,r._trigger("activate",t,i)}function s(){i.newTab.closest("li").addClass("ui-tabs-active ui-state-active"),n.length&&r.options.show?r._show(n,r.options.show,a):(n.show(),a())}var r=this,n=i.newPanel,o=i.oldPanel;this.running=!0,o.length&&this.options.hide?this._hide(o,this.options.hide,function(){i.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"),s()}):(i.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"),o.hide(),s()),o.attr({"aria-expanded":"false","aria-hidden":"true"}),i.oldTab.attr("aria-selected","false"),n.length&&o.length?i.oldTab.attr("tabIndex",-1):n.length&&this.tabs.filter(function(){return 0===e(this).attr("tabIndex")}).attr("tabIndex",-1),n.attr({"aria-expanded":"true","aria-hidden":"false"}),i.newTab.attr({"aria-selected":"true",tabIndex:0})},_activate:function(t){var i,a=this._findActive(t);a[0]!==this.active[0]&&(a.length||(a=this.active),i=a.find(".ui-tabs-anchor")[0],this._eventHandler({target:i,currentTarget:i,preventDefault:e.noop}))},_findActive:function(t){return t===!1?e():this.tabs.eq(t)},_getIndex:function(e){return"string"==typeof e&&(e=this.anchors.index(this.anchors.filter("[href$='"+e+"']"))),e},_destroy:function(){this.xhr&&this.xhr.abort(),this.element.removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible"),this.tablist.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").removeAttr("role"),this.anchors.removeClass("ui-tabs-anchor").removeAttr("role").removeAttr("tabIndex").removeUniqueId(),this.tabs.add(this.panels).each(function(){e.data(this,"ui-tabs-destroy")?e(this).remove():e(this).removeClass("ui-state-default ui-state-active ui-state-disabled ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel").removeAttr("tabIndex").removeAttr("aria-live").removeAttr("aria-busy").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-expanded").removeAttr("role")}),this.tabs.each(function(){var t=e(this),i=t.data("ui-tabs-aria-controls");i?t.attr("aria-controls",i).removeData("ui-tabs-aria-controls"):t.removeAttr("aria-controls")}),this.panels.show(),"content"!==this.options.heightStyle&&this.panels.css("height","")},enable:function(i){var a=this.options.disabled;a!==!1&&(i===t?a=!1:(i=this._getIndex(i),a=e.isArray(a)?e.map(a,function(e){return e!==i?e:null}):e.map(this.tabs,function(e,t){return t!==i?t:null})),this._setupDisabled(a))},disable:function(i){var a=this.options.disabled;if(a!==!0){if(i===t)a=!0;else{if(i=this._getIndex(i),-1!==e.inArray(i,a))return;a=e.isArray(a)?e.merge([i],a).sort():[i]}this._setupDisabled(a)}},load:function(t,i){t=this._getIndex(t);var s=this,r=this.tabs.eq(t),n=r.find(".ui-tabs-anchor"),o=this._getPanelForTab(r),h={tab:r,panel:o};a(n[0])||(this.xhr=e.ajax(this._ajaxSettings(n,i,h)),this.xhr&&"canceled"!==this.xhr.statusText&&(r.addClass("ui-tabs-loading"),o.attr("aria-busy","true"),this.xhr.success(function(e){setTimeout(function(){o.html(e),s._trigger("load",i,h)},1)}).complete(function(e,t){setTimeout(function(){"abort"===t&&s.panels.stop(!1,!0),r.removeClass("ui-tabs-loading"),o.removeAttr("aria-busy"),e===s.xhr&&delete s.xhr},1)})))},_ajaxSettings:function(t,i,a){var s=this;return{url:t.attr("href"),beforeSend:function(t,r){return s._trigger("beforeLoad",i,e.extend({jqXHR:t,ajaxSettings:r},a))}}},_getPanelForTab:function(t){var i=e(t).attr("aria-controls");return this.element.find(this._sanitizeSelector("#"+i))}})})(jQuery);(function(e){function t(t,i){var a=(t.attr("aria-describedby")||"").split(/\s+/);a.push(i),t.data("ui-tooltip-id",i).attr("aria-describedby",e.trim(a.join(" ")))}function i(t){var i=t.data("ui-tooltip-id"),a=(t.attr("aria-describedby")||"").split(/\s+/),s=e.inArray(i,a);-1!==s&&a.splice(s,1),t.removeData("ui-tooltip-id"),a=e.trim(a.join(" ")),a?t.attr("aria-describedby",a):t.removeAttr("aria-describedby")}var a=0;e.widget("ui.tooltip",{version:"1.10.3",options:{content:function(){var t=e(this).attr("title")||"";return e("<a>").text(t).html()},hide:!0,items:"[title]:not([disabled])",position:{my:"left top+15",at:"left bottom",collision:"flipfit flip"},show:!0,tooltipClass:null,track:!1,close:null,open:null},_create:function(){this._on({mouseover:"open",focusin:"open"}),this.tooltips={},this.parents={},this.options.disabled&&this._disable()},_setOption:function(t,i){var a=this;return"disabled"===t?(this[i?"_disable":"_enable"](),this.options[t]=i,void 0):(this._super(t,i),"content"===t&&e.each(this.tooltips,function(e,t){a._updateContent(t)}),void 0)},_disable:function(){var t=this;e.each(this.tooltips,function(i,a){var s=e.Event("blur");s.target=s.currentTarget=a[0],t.close(s,!0)}),this.element.find(this.options.items).addBack().each(function(){var t=e(this);t.is("[title]")&&t.data("ui-tooltip-title",t.attr("title")).attr("title","")})},_enable:function(){this.element.find(this.options.items).addBack().each(function(){var t=e(this);t.data("ui-tooltip-title")&&t.attr("title",t.data("ui-tooltip-title"))})},open:function(t){var i=this,a=e(t?t.target:this.element).closest(this.options.items);a.length&&!a.data("ui-tooltip-id")&&(a.attr("title")&&a.data("ui-tooltip-title",a.attr("title")),a.data("ui-tooltip-open",!0),t&&"mouseover"===t.type&&a.parents().each(function(){var t,a=e(this);a.data("ui-tooltip-open")&&(t=e.Event("blur"),t.target=t.currentTarget=this,i.close(t,!0)),a.attr("title")&&(a.uniqueId(),i.parents[this.id]={element:this,title:a.attr("title")},a.attr("title",""))}),this._updateContent(a,t))},_updateContent:function(e,t){var i,a=this.options.content,s=this,r=t?t.type:null;return"string"==typeof a?this._open(t,e,a):(i=a.call(e[0],function(i){e.data("ui-tooltip-open")&&s._delay(function(){t&&(t.type=r),this._open(t,e,i)})}),i&&this._open(t,e,i),void 0)},_open:function(i,a,s){function r(e){l.of=e,n.is(":hidden")||n.position(l)}var n,o,h,l=e.extend({},this.options.position);if(s){if(n=this._find(a),n.length)return n.find(".ui-tooltip-content").html(s),void 0;a.is("[title]")&&(i&&"mouseover"===i.type?a.attr("title",""):a.removeAttr("title")),n=this._tooltip(a),t(a,n.attr("id")),n.find(".ui-tooltip-content").html(s),this.options.track&&i&&/^mouse/.test(i.type)?(this._on(this.document,{mousemove:r}),r(i)):n.position(e.extend({of:a},this.options.position)),n.hide(),this._show(n,this.options.show),this.options.show&&this.options.show.delay&&(h=this.delayedShow=setInterval(function(){n.is(":visible")&&(r(l.of),clearInterval(h))},e.fx.interval)),this._trigger("open",i,{tooltip:n}),o={keyup:function(t){if(t.keyCode===e.ui.keyCode.ESCAPE){var i=e.Event(t);i.currentTarget=a[0],this.close(i,!0)}},remove:function(){this._removeTooltip(n)}},i&&"mouseover"!==i.type||(o.mouseleave="close"),i&&"focusin"!==i.type||(o.focusout="close"),this._on(!0,a,o)}},close:function(t){var a=this,s=e(t?t.currentTarget:this.element),r=this._find(s);this.closing||(clearInterval(this.delayedShow),s.data("ui-tooltip-title")&&s.attr("title",s.data("ui-tooltip-title")),i(s),r.stop(!0),this._hide(r,this.options.hide,function(){a._removeTooltip(e(this))}),s.removeData("ui-tooltip-open"),this._off(s,"mouseleave focusout keyup"),s[0]!==this.element[0]&&this._off(s,"remove"),this._off(this.document,"mousemove"),t&&"mouseleave"===t.type&&e.each(this.parents,function(t,i){e(i.element).attr("title",i.title),delete a.parents[t]}),this.closing=!0,this._trigger("close",t,{tooltip:r}),this.closing=!1)},_tooltip:function(t){var i="ui-tooltip-"+a++,s=e("<div>").attr({id:i,role:"tooltip"}).addClass("ui-tooltip ui-widget ui-corner-all ui-widget-content "+(this.options.tooltipClass||""));return e("<div>").addClass("ui-tooltip-content").appendTo(s),s.appendTo(this.document[0].body),this.tooltips[i]=t,s},_find:function(t){var i=t.data("ui-tooltip-id");return i?e("#"+i):e()},_removeTooltip:function(e){e.remove(),delete this.tooltips[e.attr("id")]},_destroy:function(){var t=this;e.each(this.tooltips,function(i,a){var s=e.Event("blur");s.target=s.currentTarget=a[0],t.close(s,!0),e("#"+i).remove(),a.data("ui-tooltip-title")&&(a.attr("title",a.data("ui-tooltip-title")),a.removeData("ui-tooltip-title"))})}})})(jQuery);(function(e,t){var a="ui-effects-";e.effects={effect:{}},function(e,t){function a(e,t,a){var i=h[t.type]||{};return null==e?a||!t.def?null:t.def:(e=i.floor?~~e:parseFloat(e),isNaN(e)?t.def:i.mod?(e+i.mod)%i.mod:0>e?0:e>i.max?i.max:e)}function i(a){var i=u(),r=i._rgba=[];return a=a.toLowerCase(),p(d,function(e,n){var s,o=n.re.exec(a),d=o&&n.parse(o),u=n.space||"rgba";return d?(s=i[u](d),i[l[u].cache]=s[l[u].cache],r=i._rgba=s._rgba,!1):t}),r.length?("0,0,0,0"===r.join()&&e.extend(r,n.transparent),i):n[a]}function r(e,t,a){return a=(a+1)%1,1>6*a?e+6*(t-e)*a:1>2*a?t:2>3*a?e+6*(t-e)*(2/3-a):e}var n,s="backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",o=/^([\-+])=\s*(\d+\.?\d*)/,d=[{re:/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(e){return[e[1],e[2],e[3],e[4]]}},{re:/rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(e){return[2.55*e[1],2.55*e[2],2.55*e[3],e[4]]}},{re:/#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,parse:function(e){return[parseInt(e[1],16),parseInt(e[2],16),parseInt(e[3],16)]}},{re:/#([a-f0-9])([a-f0-9])([a-f0-9])/,parse:function(e){return[parseInt(e[1]+e[1],16),parseInt(e[2]+e[2],16),parseInt(e[3]+e[3],16)]}},{re:/hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,space:"hsla",parse:function(e){return[e[1],e[2]/100,e[3]/100,e[4]]}}],u=e.Color=function(t,a,i,r){return new e.Color.fn.parse(t,a,i,r)},l={rgba:{props:{red:{idx:0,type:"byte"},green:{idx:1,type:"byte"},blue:{idx:2,type:"byte"}}},hsla:{props:{hue:{idx:0,type:"degrees"},saturation:{idx:1,type:"percent"},lightness:{idx:2,type:"percent"}}}},h={"byte":{floor:!0,max:255},percent:{max:1},degrees:{mod:360,floor:!0}},c=u.support={},m=e("<p>")[0],p=e.each;m.style.cssText="background-color:rgba(1,1,1,.5)",c.rgba=m.style.backgroundColor.indexOf("rgba")>-1,p(l,function(e,t){t.cache="_"+e,t.props.alpha={idx:3,type:"percent",def:1}}),u.fn=e.extend(u.prototype,{parse:function(r,s,o,d){if(r===t)return this._rgba=[null,null,null,null],this;(r.jquery||r.nodeType)&&(r=e(r).css(s),s=t);var h=this,c=e.type(r),m=this._rgba=[];return s!==t&&(r=[r,s,o,d],c="array"),"string"===c?this.parse(i(r)||n._default):"array"===c?(p(l.rgba.props,function(e,t){m[t.idx]=a(r[t.idx],t)}),this):"object"===c?(r instanceof u?p(l,function(e,t){r[t.cache]&&(h[t.cache]=r[t.cache].slice())}):p(l,function(t,i){var n=i.cache;p(i.props,function(e,t){if(!h[n]&&i.to){if("alpha"===e||null==r[e])return;h[n]=i.to(h._rgba)}h[n][t.idx]=a(r[e],t,!0)}),h[n]&&0>e.inArray(null,h[n].slice(0,3))&&(h[n][3]=1,i.from&&(h._rgba=i.from(h[n])))}),this):t},is:function(e){var a=u(e),i=!0,r=this;return p(l,function(e,n){var s,o=a[n.cache];return o&&(s=r[n.cache]||n.to&&n.to(r._rgba)||[],p(n.props,function(e,a){return null!=o[a.idx]?i=o[a.idx]===s[a.idx]:t})),i}),i},_space:function(){var e=[],t=this;return p(l,function(a,i){t[i.cache]&&e.push(a)}),e.pop()},transition:function(e,t){var i=u(e),r=i._space(),n=l[r],s=0===this.alpha()?u("transparent"):this,o=s[n.cache]||n.to(s._rgba),d=o.slice();return i=i[n.cache],p(n.props,function(e,r){var n=r.idx,s=o[n],u=i[n],l=h[r.type]||{};null!==u&&(null===s?d[n]=u:(l.mod&&(u-s>l.mod/2?s+=l.mod:s-u>l.mod/2&&(s-=l.mod)),d[n]=a((u-s)*t+s,r)))}),this[r](d)},blend:function(t){if(1===this._rgba[3])return this;var a=this._rgba.slice(),i=a.pop(),r=u(t)._rgba;return u(e.map(a,function(e,t){return(1-i)*r[t]+i*e}))},toRgbaString:function(){var t="rgba(",a=e.map(this._rgba,function(e,t){return null==e?t>2?1:0:e});return 1===a[3]&&(a.pop(),t="rgb("),t+a.join()+")"},toHslaString:function(){var t="hsla(",a=e.map(this.hsla(),function(e,t){return null==e&&(e=t>2?1:0),t&&3>t&&(e=Math.round(100*e)+"%"),e});return 1===a[3]&&(a.pop(),t="hsl("),t+a.join()+")"},toHexString:function(t){var a=this._rgba.slice(),i=a.pop();return t&&a.push(~~(255*i)),"#"+e.map(a,function(e){return e=(e||0).toString(16),1===e.length?"0"+e:e}).join("")},toString:function(){return 0===this._rgba[3]?"transparent":this.toRgbaString()}}),u.fn.parse.prototype=u.fn,l.hsla.to=function(e){if(null==e[0]||null==e[1]||null==e[2])return[null,null,null,e[3]];var t,a,i=e[0]/255,r=e[1]/255,n=e[2]/255,s=e[3],o=Math.max(i,r,n),d=Math.min(i,r,n),u=o-d,l=o+d,h=.5*l;return t=d===o?0:i===o?60*(r-n)/u+360:r===o?60*(n-i)/u+120:60*(i-r)/u+240,a=0===u?0:.5>=h?u/l:u/(2-l),[Math.round(t)%360,a,h,null==s?1:s]},l.hsla.from=function(e){if(null==e[0]||null==e[1]||null==e[2])return[null,null,null,e[3]];var t=e[0]/360,a=e[1],i=e[2],n=e[3],s=.5>=i?i*(1+a):i+a-i*a,o=2*i-s;return[Math.round(255*r(o,s,t+1/3)),Math.round(255*r(o,s,t)),Math.round(255*r(o,s,t-1/3)),n]},p(l,function(i,r){var n=r.props,s=r.cache,d=r.to,l=r.from;u.fn[i]=function(i){if(d&&!this[s]&&(this[s]=d(this._rgba)),i===t)return this[s].slice();var r,o=e.type(i),h="array"===o||"object"===o?i:arguments,c=this[s].slice();return p(n,function(e,t){var i=h["object"===o?e:t.idx];null==i&&(i=c[t.idx]),c[t.idx]=a(i,t)}),l?(r=u(l(c)),r[s]=c,r):u(c)},p(n,function(t,a){u.fn[t]||(u.fn[t]=function(r){var n,s=e.type(r),d="alpha"===t?this._hsla?"hsla":"rgba":i,u=this[d](),l=u[a.idx];return"undefined"===s?l:("function"===s&&(r=r.call(this,l),s=e.type(r)),null==r&&a.empty?this:("string"===s&&(n=o.exec(r),n&&(r=l+parseFloat(n[2])*("+"===n[1]?1:-1))),u[a.idx]=r,this[d](u)))})})}),u.hook=function(t){var a=t.split(" ");p(a,function(t,a){e.cssHooks[a]={set:function(t,r){var n,s,o="";if("transparent"!==r&&("string"!==e.type(r)||(n=i(r)))){if(r=u(n||r),!c.rgba&&1!==r._rgba[3]){for(s="backgroundColor"===a?t.parentNode:t;(""===o||"transparent"===o)&&s&&s.style;)try{o=e.css(s,"backgroundColor"),s=s.parentNode}catch(d){}r=r.blend(o&&"transparent"!==o?o:"_default")}r=r.toRgbaString()}try{t.style[a]=r}catch(d){}}},e.fx.step[a]=function(t){t.colorInit||(t.start=u(t.elem,a),t.end=u(t.end),t.colorInit=!0),e.cssHooks[a].set(t.elem,t.start.transition(t.end,t.pos))}})},u.hook(s),e.cssHooks.borderColor={expand:function(e){var t={};return p(["Top","Right","Bottom","Left"],function(a,i){t["border"+i+"Color"]=e}),t}},n=e.Color.names={aqua:"#00ffff",black:"#000000",blue:"#0000ff",fuchsia:"#ff00ff",gray:"#808080",green:"#008000",lime:"#00ff00",maroon:"#800000",navy:"#000080",olive:"#808000",purple:"#800080",red:"#ff0000",silver:"#c0c0c0",teal:"#008080",white:"#ffffff",yellow:"#ffff00",transparent:[null,null,null,0],_default:"#ffffff"}}(jQuery),function(){function a(t){var a,i,r=t.ownerDocument.defaultView?t.ownerDocument.defaultView.getComputedStyle(t,null):t.currentStyle,n={};if(r&&r.length&&r[0]&&r[r[0]])for(i=r.length;i--;)a=r[i],"string"==typeof r[a]&&(n[e.camelCase(a)]=r[a]);else for(a in r)"string"==typeof r[a]&&(n[a]=r[a]);return n}function i(t,a){var i,r,s={};for(i in a)r=a[i],t[i]!==r&&(n[i]||(e.fx.step[i]||!isNaN(parseFloat(r)))&&(s[i]=r));return s}var r=["add","remove","toggle"],n={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1};e.each(["borderLeftStyle","borderRightStyle","borderBottomStyle","borderTopStyle"],function(t,a){e.fx.step[a]=function(e){("none"!==e.end&&!e.setAttr||1===e.pos&&!e.setAttr)&&(jQuery.style(e.elem,a,e.end),e.setAttr=!0)}}),e.fn.addBack||(e.fn.addBack=function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}),e.effects.animateClass=function(t,n,s,o){var d=e.speed(n,s,o);return this.queue(function(){var n,s=e(this),o=s.attr("class")||"",u=d.children?s.find("*").addBack():s;u=u.map(function(){var t=e(this);return{el:t,start:a(this)}}),n=function(){e.each(r,function(e,a){t[a]&&s[a+"Class"](t[a])})},n(),u=u.map(function(){return this.end=a(this.el[0]),this.diff=i(this.start,this.end),this}),s.attr("class",o),u=u.map(function(){var t=this,a=e.Deferred(),i=e.extend({},d,{queue:!1,complete:function(){a.resolve(t)}});return this.el.animate(this.diff,i),a.promise()}),e.when.apply(e,u.get()).done(function(){n(),e.each(arguments,function(){var t=this.el;e.each(this.diff,function(e){t.css(e,"")})}),d.complete.call(s[0])})})},e.fn.extend({addClass:function(t){return function(a,i,r,n){return i?e.effects.animateClass.call(this,{add:a},i,r,n):t.apply(this,arguments)}}(e.fn.addClass),removeClass:function(t){return function(a,i,r,n){return arguments.length>1?e.effects.animateClass.call(this,{remove:a},i,r,n):t.apply(this,arguments)}}(e.fn.removeClass),toggleClass:function(a){return function(i,r,n,s,o){return"boolean"==typeof r||r===t?n?e.effects.animateClass.call(this,r?{add:i}:{remove:i},n,s,o):a.apply(this,arguments):e.effects.animateClass.call(this,{toggle:i},r,n,s)}}(e.fn.toggleClass),switchClass:function(t,a,i,r,n){return e.effects.animateClass.call(this,{add:a,remove:t},i,r,n)}})}(),function(){function i(t,a,i,r){return e.isPlainObject(t)&&(a=t,t=t.effect),t={effect:t},null==a&&(a={}),e.isFunction(a)&&(r=a,i=null,a={}),("number"==typeof a||e.fx.speeds[a])&&(r=i,i=a,a={}),e.isFunction(i)&&(r=i,i=null),a&&e.extend(t,a),i=i||a.duration,t.duration=e.fx.off?0:"number"==typeof i?i:i in e.fx.speeds?e.fx.speeds[i]:e.fx.speeds._default,t.complete=r||a.complete,t}function r(t){return!t||"number"==typeof t||e.fx.speeds[t]?!0:"string"!=typeof t||e.effects.effect[t]?e.isFunction(t)?!0:"object"!=typeof t||t.effect?!1:!0:!0}e.extend(e.effects,{version:"1.10.3",save:function(e,t){for(var i=0;t.length>i;i++)null!==t[i]&&e.data(a+t[i],e[0].style[t[i]])},restore:function(e,i){var r,n;for(n=0;i.length>n;n++)null!==i[n]&&(r=e.data(a+i[n]),r===t&&(r=""),e.css(i[n],r))},setMode:function(e,t){return"toggle"===t&&(t=e.is(":hidden")?"show":"hide"),t},getBaseline:function(e,t){var a,i;switch(e[0]){case"top":a=0;break;case"middle":a=.5;break;case"bottom":a=1;break;default:a=e[0]/t.height}switch(e[1]){case"left":i=0;break;case"center":i=.5;break;case"right":i=1;break;default:i=e[1]/t.width}return{x:i,y:a}},createWrapper:function(t){if(t.parent().is(".ui-effects-wrapper"))return t.parent();var a={width:t.outerWidth(!0),height:t.outerHeight(!0),"float":t.css("float")},i=e("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0}),r={width:t.width(),height:t.height()},n=document.activeElement;try{n.id}catch(s){n=document.body}return t.wrap(i),(t[0]===n||e.contains(t[0],n))&&e(n).focus(),i=t.parent(),"static"===t.css("position")?(i.css({position:"relative"}),t.css({position:"relative"})):(e.extend(a,{position:t.css("position"),zIndex:t.css("z-index")}),e.each(["top","left","bottom","right"],function(e,i){a[i]=t.css(i),isNaN(parseInt(a[i],10))&&(a[i]="auto")}),t.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"})),t.css(r),i.css(a).show()},removeWrapper:function(t){var a=document.activeElement;return t.parent().is(".ui-effects-wrapper")&&(t.parent().replaceWith(t),(t[0]===a||e.contains(t[0],a))&&e(a).focus()),t},setTransition:function(t,a,i,r){return r=r||{},e.each(a,function(e,a){var n=t.cssUnit(a);n[0]>0&&(r[a]=n[0]*i+n[1])}),r}}),e.fn.extend({effect:function(){function t(t){function i(){e.isFunction(n)&&n.call(r[0]),e.isFunction(t)&&t()}var r=e(this),n=a.complete,o=a.mode;(r.is(":hidden")?"hide"===o:"show"===o)?(r[o](),i()):s.call(r[0],a,i)}var a=i.apply(this,arguments),r=a.mode,n=a.queue,s=e.effects.effect[a.effect];return e.fx.off||!s?r?this[r](a.duration,a.complete):this.each(function(){a.complete&&a.complete.call(this)}):n===!1?this.each(t):this.queue(n||"fx",t)},show:function(e){return function(t){if(r(t))return e.apply(this,arguments);var a=i.apply(this,arguments);return a.mode="show",this.effect.call(this,a)}}(e.fn.show),hide:function(e){return function(t){if(r(t))return e.apply(this,arguments);var a=i.apply(this,arguments);return a.mode="hide",this.effect.call(this,a)}}(e.fn.hide),toggle:function(e){return function(t){if(r(t)||"boolean"==typeof t)return e.apply(this,arguments);var a=i.apply(this,arguments);return a.mode="toggle",this.effect.call(this,a)}}(e.fn.toggle),cssUnit:function(t){var a=this.css(t),i=[];return e.each(["em","px","%","pt"],function(e,t){a.indexOf(t)>0&&(i=[parseFloat(a),t])}),i}})}(),function(){var t={};e.each(["Quad","Cubic","Quart","Quint","Expo"],function(e,a){t[a]=function(t){return Math.pow(t,e+2)}}),e.extend(t,{Sine:function(e){return 1-Math.cos(e*Math.PI/2)},Circ:function(e){return 1-Math.sqrt(1-e*e)},Elastic:function(e){return 0===e||1===e?e:-Math.pow(2,8*(e-1))*Math.sin((80*(e-1)-7.5)*Math.PI/15)},Back:function(e){return e*e*(3*e-2)},Bounce:function(e){for(var t,a=4;((t=Math.pow(2,--a))-1)/11>e;);return 1/Math.pow(4,3-a)-7.5625*Math.pow((3*t-2)/22-e,2)}}),e.each(t,function(t,a){e.easing["easeIn"+t]=a,e.easing["easeOut"+t]=function(e){return 1-a(1-e)},e.easing["easeInOut"+t]=function(e){return.5>e?a(2*e)/2:1-a(-2*e+2)/2}})}()})(jQuery);(function(e){var t=/up|down|vertical/,a=/up|left|vertical|horizontal/;e.effects.effect.blind=function(i,r){var s,n,o,d=e(this),u=["position","top","bottom","left","right","height","width"],l=e.effects.setMode(d,i.mode||"hide"),h=i.direction||"up",c=t.test(h),m=c?"height":"width",p=c?"top":"left",f=a.test(h),g={},y="show"===l;d.parent().is(".ui-effects-wrapper")?e.effects.save(d.parent(),u):e.effects.save(d,u),d.show(),s=e.effects.createWrapper(d).css({overflow:"hidden"}),n=s[m](),o=parseFloat(s.css(p))||0,g[m]=y?n:0,f||(d.css(c?"bottom":"right",0).css(c?"top":"left","auto").css({position:"absolute"}),g[p]=y?o:n+o),y&&(s.css(m,0),f||s.css(p,o+n)),s.animate(g,{duration:i.duration,easing:i.easing,queue:!1,complete:function(){"hide"===l&&d.hide(),e.effects.restore(d,u),e.effects.removeWrapper(d),r()}})}})(jQuery);(function(e){e.effects.effect.bounce=function(t,a){var i,r,s,n=e(this),o=["position","top","bottom","left","right","height","width"],d=e.effects.setMode(n,t.mode||"effect"),u="hide"===d,l="show"===d,h=t.direction||"up",c=t.distance,m=t.times||5,p=2*m+(l||u?1:0),f=t.duration/p,g=t.easing,y="up"===h||"down"===h?"top":"left",k="up"===h||"left"===h,x=n.queue(),v=x.length;for((l||u)&&o.push("opacity"),e.effects.save(n,o),n.show(),e.effects.createWrapper(n),c||(c=n["top"===y?"outerHeight":"outerWidth"]()/3),l&&(s={opacity:1},s[y]=0,n.css("opacity",0).css(y,k?2*-c:2*c).animate(s,f,g)),u&&(c/=Math.pow(2,m-1)),s={},s[y]=0,i=0;m>i;i++)r={},r[y]=(k?"-=":"+=")+c,n.animate(r,f,g).animate(s,f,g),c=u?2*c:c/2;u&&(r={opacity:0},r[y]=(k?"-=":"+=")+c,n.animate(r,f,g)),n.queue(function(){u&&n.hide(),e.effects.restore(n,o),e.effects.removeWrapper(n),a()}),v>1&&x.splice.apply(x,[1,0].concat(x.splice(v,p+1))),n.dequeue()}})(jQuery);(function(e){e.effects.effect.clip=function(t,a){var i,r,s,n=e(this),o=["position","top","bottom","left","right","height","width"],d=e.effects.setMode(n,t.mode||"hide"),u="show"===d,l=t.direction||"vertical",h="vertical"===l,c=h?"height":"width",m=h?"top":"left",p={};e.effects.save(n,o),n.show(),i=e.effects.createWrapper(n).css({overflow:"hidden"}),r="IMG"===n[0].tagName?i:n,s=r[c](),u&&(r.css(c,0),r.css(m,s/2)),p[c]=u?s:0,p[m]=u?0:s/2,r.animate(p,{queue:!1,duration:t.duration,easing:t.easing,complete:function(){u||n.hide(),e.effects.restore(n,o),e.effects.removeWrapper(n),a()}})}})(jQuery);(function(e){e.effects.effect.drop=function(t,a){var i,r=e(this),s=["position","top","bottom","left","right","opacity","height","width"],n=e.effects.setMode(r,t.mode||"hide"),o="show"===n,d=t.direction||"left",u="up"===d||"down"===d?"top":"left",l="up"===d||"left"===d?"pos":"neg",h={opacity:o?1:0};e.effects.save(r,s),r.show(),e.effects.createWrapper(r),i=t.distance||r["top"===u?"outerHeight":"outerWidth"](!0)/2,o&&r.css("opacity",0).css(u,"pos"===l?-i:i),h[u]=(o?"pos"===l?"+=":"-=":"pos"===l?"-=":"+=")+i,r.animate(h,{queue:!1,duration:t.duration,easing:t.easing,complete:function(){"hide"===n&&r.hide(),e.effects.restore(r,s),e.effects.removeWrapper(r),a()}})}})(jQuery);(function(e){e.effects.effect.explode=function(t,a){function i(){x.push(this),x.length===h*c&&r()}function r(){m.css({visibility:"visible"}),e(x).remove(),f||m.hide(),a()}var s,n,o,d,u,l,h=t.pieces?Math.round(Math.sqrt(t.pieces)):3,c=h,m=e(this),p=e.effects.setMode(m,t.mode||"hide"),f="show"===p,g=m.show().css("visibility","hidden").offset(),y=Math.ceil(m.outerWidth()/c),k=Math.ceil(m.outerHeight()/h),x=[];for(s=0;h>s;s++)for(d=g.top+s*k,l=s-(h-1)/2,n=0;c>n;n++)o=g.left+n*y,u=n-(c-1)/2,m.clone().appendTo("body").wrap("<div></div>").css({position:"absolute",visibility:"visible",left:-n*y,top:-s*k}).parent().addClass("ui-effects-explode").css({position:"absolute",overflow:"hidden",width:y,height:k,left:o+(f?u*y:0),top:d+(f?l*k:0),opacity:f?0:1}).animate({left:o+(f?0:u*y),top:d+(f?0:l*k),opacity:f?1:0},t.duration||500,t.easing,i)}})(jQuery);(function(e){e.effects.effect.fade=function(t,a){var i=e(this),r=e.effects.setMode(i,t.mode||"toggle");i.animate({opacity:r},{queue:!1,duration:t.duration,easing:t.easing,complete:a})}})(jQuery);(function(e){e.effects.effect.fold=function(t,a){var i,r,s=e(this),n=["position","top","bottom","left","right","height","width"],o=e.effects.setMode(s,t.mode||"hide"),d="show"===o,u="hide"===o,l=t.size||15,h=/([0-9]+)%/.exec(l),c=!!t.horizFirst,m=d!==c,p=m?["width","height"]:["height","width"],f=t.duration/2,g={},y={};e.effects.save(s,n),s.show(),i=e.effects.createWrapper(s).css({overflow:"hidden"}),r=m?[i.width(),i.height()]:[i.height(),i.width()],h&&(l=parseInt(h[1],10)/100*r[u?0:1]),d&&i.css(c?{height:0,width:l}:{height:l,width:0}),g[p[0]]=d?r[0]:l,y[p[1]]=d?r[1]:0,i.animate(g,f,t.easing).animate(y,f,t.easing,function(){u&&s.hide(),e.effects.restore(s,n),e.effects.removeWrapper(s),a()})}})(jQuery);(function(e){e.effects.effect.highlight=function(t,a){var i=e(this),r=["backgroundImage","backgroundColor","opacity"],s=e.effects.setMode(i,t.mode||"show"),n={backgroundColor:i.css("backgroundColor")};"hide"===s&&(n.opacity=0),e.effects.save(i,r),i.show().css({backgroundImage:"none",backgroundColor:t.color||"#ffff99"}).animate(n,{queue:!1,duration:t.duration,easing:t.easing,complete:function(){"hide"===s&&i.hide(),e.effects.restore(i,r),a()}})}})(jQuery);(function(e){e.effects.effect.pulsate=function(t,a){var i,r=e(this),s=e.effects.setMode(r,t.mode||"show"),n="show"===s,o="hide"===s,d=n||"hide"===s,u=2*(t.times||5)+(d?1:0),l=t.duration/u,h=0,c=r.queue(),m=c.length;for((n||!r.is(":visible"))&&(r.css("opacity",0).show(),h=1),i=1;u>i;i++)r.animate({opacity:h},l,t.easing),h=1-h;r.animate({opacity:h},l,t.easing),r.queue(function(){o&&r.hide(),a()}),m>1&&c.splice.apply(c,[1,0].concat(c.splice(m,u+1))),r.dequeue()}})(jQuery);(function(e){e.effects.effect.puff=function(t,a){var i=e(this),r=e.effects.setMode(i,t.mode||"hide"),s="hide"===r,n=parseInt(t.percent,10)||150,o=n/100,d={height:i.height(),width:i.width(),outerHeight:i.outerHeight(),outerWidth:i.outerWidth()};e.extend(t,{effect:"scale",queue:!1,fade:!0,mode:r,complete:a,percent:s?n:100,from:s?d:{height:d.height*o,width:d.width*o,outerHeight:d.outerHeight*o,outerWidth:d.outerWidth*o}}),i.effect(t)},e.effects.effect.scale=function(t,a){var i=e(this),r=e.extend(!0,{},t),s=e.effects.setMode(i,t.mode||"effect"),n=parseInt(t.percent,10)||(0===parseInt(t.percent,10)?0:"hide"===s?0:100),o=t.direction||"both",d=t.origin,u={height:i.height(),width:i.width(),outerHeight:i.outerHeight(),outerWidth:i.outerWidth()},l={y:"horizontal"!==o?n/100:1,x:"vertical"!==o?n/100:1};r.effect="size",r.queue=!1,r.complete=a,"effect"!==s&&(r.origin=d||["middle","center"],r.restore=!0),r.from=t.from||("show"===s?{height:0,width:0,outerHeight:0,outerWidth:0}:u),r.to={height:u.height*l.y,width:u.width*l.x,outerHeight:u.outerHeight*l.y,outerWidth:u.outerWidth*l.x},r.fade&&("show"===s&&(r.from.opacity=0,r.to.opacity=1),"hide"===s&&(r.from.opacity=1,r.to.opacity=0)),i.effect(r)},e.effects.effect.size=function(t,a){var i,r,s,n=e(this),o=["position","top","bottom","left","right","width","height","overflow","opacity"],d=["position","top","bottom","left","right","overflow","opacity"],u=["width","height","overflow"],l=["fontSize"],h=["borderTopWidth","borderBottomWidth","paddingTop","paddingBottom"],c=["borderLeftWidth","borderRightWidth","paddingLeft","paddingRight"],m=e.effects.setMode(n,t.mode||"effect"),p=t.restore||"effect"!==m,f=t.scale||"both",g=t.origin||["middle","center"],y=n.css("position"),x=p?o:d,k={height:0,width:0,outerHeight:0,outerWidth:0};"show"===m&&n.show(),i={height:n.height(),width:n.width(),outerHeight:n.outerHeight(),outerWidth:n.outerWidth()},"toggle"===t.mode&&"show"===m?(n.from=t.to||k,n.to=t.from||i):(n.from=t.from||("show"===m?k:i),n.to=t.to||("hide"===m?k:i)),s={from:{y:n.from.height/i.height,x:n.from.width/i.width},to:{y:n.to.height/i.height,x:n.to.width/i.width}},("box"===f||"both"===f)&&(s.from.y!==s.to.y&&(x=x.concat(h),n.from=e.effects.setTransition(n,h,s.from.y,n.from),n.to=e.effects.setTransition(n,h,s.to.y,n.to)),s.from.x!==s.to.x&&(x=x.concat(c),n.from=e.effects.setTransition(n,c,s.from.x,n.from),n.to=e.effects.setTransition(n,c,s.to.x,n.to))),("content"===f||"both"===f)&&s.from.y!==s.to.y&&(x=x.concat(l).concat(u),n.from=e.effects.setTransition(n,l,s.from.y,n.from),n.to=e.effects.setTransition(n,l,s.to.y,n.to)),e.effects.save(n,x),n.show(),e.effects.createWrapper(n),n.css("overflow","hidden").css(n.from),g&&(r=e.effects.getBaseline(g,i),n.from.top=(i.outerHeight-n.outerHeight())*r.y,n.from.left=(i.outerWidth-n.outerWidth())*r.x,n.to.top=(i.outerHeight-n.to.outerHeight)*r.y,n.to.left=(i.outerWidth-n.to.outerWidth)*r.x),n.css(n.from),("content"===f||"both"===f)&&(h=h.concat(["marginTop","marginBottom"]).concat(l),c=c.concat(["marginLeft","marginRight"]),u=o.concat(h).concat(c),n.find("*[width]").each(function(){var a=e(this),i={height:a.height(),width:a.width(),outerHeight:a.outerHeight(),outerWidth:a.outerWidth()};p&&e.effects.save(a,u),a.from={height:i.height*s.from.y,width:i.width*s.from.x,outerHeight:i.outerHeight*s.from.y,outerWidth:i.outerWidth*s.from.x},a.to={height:i.height*s.to.y,width:i.width*s.to.x,outerHeight:i.height*s.to.y,outerWidth:i.width*s.to.x},s.from.y!==s.to.y&&(a.from=e.effects.setTransition(a,h,s.from.y,a.from),a.to=e.effects.setTransition(a,h,s.to.y,a.to)),s.from.x!==s.to.x&&(a.from=e.effects.setTransition(a,c,s.from.x,a.from),a.to=e.effects.setTransition(a,c,s.to.x,a.to)),a.css(a.from),a.animate(a.to,t.duration,t.easing,function(){p&&e.effects.restore(a,u)})})),n.animate(n.to,{queue:!1,duration:t.duration,easing:t.easing,complete:function(){0===n.to.opacity&&n.css("opacity",n.from.opacity),"hide"===m&&n.hide(),e.effects.restore(n,x),p||("static"===y?n.css({position:"relative",top:n.to.top,left:n.to.left}):e.each(["top","left"],function(e,t){n.css(t,function(t,a){var i=parseInt(a,10),r=e?n.to.left:n.to.top;return"auto"===a?r+"px":i+r+"px"})})),e.effects.removeWrapper(n),a()}})}})(jQuery);(function(e){e.effects.effect.shake=function(t,a){var i,r=e(this),s=["position","top","bottom","left","right","height","width"],n=e.effects.setMode(r,t.mode||"effect"),o=t.direction||"left",d=t.distance||20,u=t.times||3,l=2*u+1,h=Math.round(t.duration/l),c="up"===o||"down"===o?"top":"left",m="up"===o||"left"===o,p={},f={},g={},y=r.queue(),x=y.length;for(e.effects.save(r,s),r.show(),e.effects.createWrapper(r),p[c]=(m?"-=":"+=")+d,f[c]=(m?"+=":"-=")+2*d,g[c]=(m?"-=":"+=")+2*d,r.animate(p,h,t.easing),i=1;u>i;i++)r.animate(f,h,t.easing).animate(g,h,t.easing);r.animate(f,h,t.easing).animate(p,h/2,t.easing).queue(function(){"hide"===n&&r.hide(),e.effects.restore(r,s),e.effects.removeWrapper(r),a()}),x>1&&y.splice.apply(y,[1,0].concat(y.splice(x,l+1))),r.dequeue()}})(jQuery);(function(e){e.effects.effect.slide=function(t,a){var i,r=e(this),s=["position","top","bottom","left","right","width","height"],n=e.effects.setMode(r,t.mode||"show"),o="show"===n,d=t.direction||"left",u="up"===d||"down"===d?"top":"left",l="up"===d||"left"===d,h={};e.effects.save(r,s),r.show(),i=t.distance||r["top"===u?"outerHeight":"outerWidth"](!0),e.effects.createWrapper(r).css({overflow:"hidden"}),o&&r.css(u,l?isNaN(i)?"-"+i:-i:i),h[u]=(o?l?"+=":"-=":l?"-=":"+=")+i,r.animate(h,{queue:!1,duration:t.duration,easing:t.easing,complete:function(){"hide"===n&&r.hide(),e.effects.restore(r,s),e.effects.removeWrapper(r),a()}})}})(jQuery);(function(e){e.effects.effect.transfer=function(t,a){var i=e(this),r=e(t.to),s="fixed"===r.css("position"),n=e("body"),o=s?n.scrollTop():0,d=s?n.scrollLeft():0,u=r.offset(),l={top:u.top-o,left:u.left-d,height:r.innerHeight(),width:r.innerWidth()},h=i.offset(),c=e("<div class='ui-effects-transfer'></div>").appendTo(document.body).addClass(t.className).css({top:h.top-o,left:h.left-d,height:i.innerHeight(),width:i.innerWidth(),position:s?"fixed":"absolute"}).animate(l,t.duration,t.easing,function(){c.remove(),a()})}})(jQuery);
// END jQuer.ui Autocompletar/Calendar/Toltiptext


// FANCYBOX
/*! fancyBox v2.1.5 fancyapps.com | fancyapps.com/fancybox/#license */
(function(r,G,f,v){var J=f("html"),n=f(r),p=f(G),b=f.fancybox=function(){b.open.apply(this,arguments)},I=navigator.userAgent.match(/msie/i),B=null,s=G.createTouch!==v,t=function(a){return a&&a.hasOwnProperty&&a instanceof f},q=function(a){return a&&"string"===f.type(a)},E=function(a){return q(a)&&0<a.indexOf("%")},l=function(a,d){var e=parseInt(a,10)||0;d&&E(a)&&(e*=b.getViewport()[d]/100);return Math.ceil(e)},w=function(a,b){return l(a,b)+"px"};f.extend(b,{version:"2.1.5",defaults:{padding:15,margin:20,
width:800,height:600,minWidth:100,minHeight:100,maxWidth:9999,maxHeight:9999,pixelRatio:1,autoSize:!0,autoHeight:!1,autoWidth:!1,autoResize:!0,autoCenter:!s,fitToView:!0,aspectRatio:!1,topRatio:0.5,leftRatio:0.5,scrolling:"auto",wrapCSS:"",arrows:!0,closeBtn:!0,closeClick:!1,nextClick:!1,mouseWheel:!0,autoPlay:!1,playSpeed:3E3,preload:3,modal:!1,loop:!0,ajax:{dataType:"html",headers:{"X-fancyBox":!0}},iframe:{scrolling:"auto",preload:!0},swf:{wmode:"transparent",allowfullscreen:"true",allowscriptaccess:"always"},
keys:{next:{13:"left",34:"up",39:"left",40:"up"},prev:{8:"right",33:"down",37:"right",38:"down"},close:[27],play:[32],toggle:[70]},direction:{next:"left",prev:"right"},scrollOutside:!0,index:0,type:null,href:null,content:null,title:null,tpl:{wrap:'<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',image:'<img class="fancybox-image" src="{href}" alt="" />',iframe:'<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen'+
(I?' allowtransparency="true"':"")+"></iframe>",error:'<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',closeBtn:'<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',next:'<a title="Siguiente" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',prev:'<a title="Anterior" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'},openEffect:"fade",openSpeed:250,openEasing:"swing",openOpacity:!0,
openMethod:"zoomIn",closeEffect:"fade",closeSpeed:250,closeEasing:"swing",closeOpacity:!0,closeMethod:"zoomOut",nextEffect:"elastic",nextSpeed:250,nextEasing:"swing",nextMethod:"changeIn",prevEffect:"elastic",prevSpeed:250,prevEasing:"swing",prevMethod:"changeOut",helpers:{overlay:!0,title:!0},onCancel:f.noop,beforeLoad:f.noop,afterLoad:f.noop,beforeShow:f.noop,afterShow:f.noop,beforeChange:f.noop,beforeClose:f.noop,afterClose:f.noop},group:{},opts:{},previous:null,coming:null,current:null,isActive:!1,
isOpen:!1,isOpened:!1,wrap:null,skin:null,outer:null,inner:null,player:{timer:null,isActive:!1},ajaxLoad:null,imgPreload:null,transitions:{},helpers:{},open:function(a,d){if(a&&(f.isPlainObject(d)||(d={}),!1!==b.close(!0)))return f.isArray(a)||(a=t(a)?f(a).get():[a]),f.each(a,function(e,c){var k={},g,h,j,m,l;"object"===f.type(c)&&(c.nodeType&&(c=f(c)),t(c)?(k={href:c.data("fancybox-href")||c.attr("href"),title:c.data("fancybox-title")||c.attr("title"),isDom:!0,element:c},f.metadata&&f.extend(!0,k,
c.metadata())):k=c);g=d.href||k.href||(q(c)?c:null);h=d.title!==v?d.title:k.title||"";m=(j=d.content||k.content)?"html":d.type||k.type;!m&&k.isDom&&(m=c.data("fancybox-type"),m||(m=(m=c.prop("class").match(/fancybox\.(\w+)/))?m[1]:null));q(g)&&(m||(b.isImage(g)?m="image":b.isSWF(g)?m="swf":"#"===g.charAt(0)?m="inline":q(c)&&(m="html",j=c)),"ajax"===m&&(l=g.split(/\s+/,2),g=l.shift(),l=l.shift()));j||("inline"===m?g?j=f(q(g)?g.replace(/.*(?=#[^\s]+$)/,""):g):k.isDom&&(j=c):"html"===m?j=g:!m&&(!g&&
k.isDom)&&(m="inline",j=c));f.extend(k,{href:g,type:m,content:j,title:h,selector:l});a[e]=k}),b.opts=f.extend(!0,{},b.defaults,d),d.keys!==v&&(b.opts.keys=d.keys?f.extend({},b.defaults.keys,d.keys):!1),b.group=a,b._start(b.opts.index)},cancel:function(){var a=b.coming;a&&!1!==b.trigger("onCancel")&&(b.hideLoading(),b.ajaxLoad&&b.ajaxLoad.abort(),b.ajaxLoad=null,b.imgPreload&&(b.imgPreload.onload=b.imgPreload.onerror=null),a.wrap&&a.wrap.stop(!0,!0).trigger("onReset").remove(),b.coming=null,b.current||
b._afterZoomOut(a))},close:function(a){b.cancel();!1!==b.trigger("beforeClose")&&(b.unbindEvents(),b.isActive&&(!b.isOpen||!0===a?(f(".fancybox-wrap").stop(!0).trigger("onReset").remove(),b._afterZoomOut()):(b.isOpen=b.isOpened=!1,b.isClosing=!0,f(".fancybox-item, .fancybox-nav").remove(),b.wrap.stop(!0,!0).removeClass("fancybox-opened"),b.transitions[b.current.closeMethod]())))},play:function(a){var d=function(){clearTimeout(b.player.timer)},e=function(){d();b.current&&b.player.isActive&&(b.player.timer=
setTimeout(b.next,b.current.playSpeed))},c=function(){d();p.unbind(".player");b.player.isActive=!1;b.trigger("onPlayEnd")};if(!0===a||!b.player.isActive&&!1!==a){if(b.current&&(b.current.loop||b.current.index<b.group.length-1))b.player.isActive=!0,p.bind({"onCancel.player beforeClose.player":c,"onUpdate.player":e,"beforeLoad.player":d}),e(),b.trigger("onPlayStart")}else c()},next:function(a){var d=b.current;d&&(q(a)||(a=d.direction.next),b.jumpto(d.index+1,a,"next"))},prev:function(a){var d=b.current;
d&&(q(a)||(a=d.direction.prev),b.jumpto(d.index-1,a,"prev"))},jumpto:function(a,d,e){var c=b.current;c&&(a=l(a),b.direction=d||c.direction[a>=c.index?"next":"prev"],b.router=e||"jumpto",c.loop&&(0>a&&(a=c.group.length+a%c.group.length),a%=c.group.length),c.group[a]!==v&&(b.cancel(),b._start(a)))},reposition:function(a,d){var e=b.current,c=e?e.wrap:null,k;c&&(k=b._getPosition(d),a&&"scroll"===a.type?(delete k.position,c.stop(!0,!0).animate(k,200)):(c.css(k),e.pos=f.extend({},e.dim,k)))},update:function(a){var d=
a&&a.type,e=!d||"orientationchange"===d;e&&(clearTimeout(B),B=null);b.isOpen&&!B&&(B=setTimeout(function(){var c=b.current;c&&!b.isClosing&&(b.wrap.removeClass("fancybox-tmp"),(e||"load"===d||"resize"===d&&c.autoResize)&&b._setDimension(),"scroll"===d&&c.canShrink||b.reposition(a),b.trigger("onUpdate"),B=null)},e&&!s?0:300))},toggle:function(a){b.isOpen&&(b.current.fitToView="boolean"===f.type(a)?a:!b.current.fitToView,s&&(b.wrap.removeAttr("style").addClass("fancybox-tmp"),b.trigger("onUpdate")),
b.update())},hideLoading:function(){p.unbind(".loading");f("#fancybox-loading").remove()},showLoading:function(){var a,d;b.hideLoading();a=f('<div id="fancybox-loading"><div></div></div>').click(b.cancel).appendTo("body");p.bind("keydown.loading",function(a){if(27===(a.which||a.keyCode))a.preventDefault(),b.cancel()});b.defaults.fixed||(d=b.getViewport(),a.css({position:"absolute",top:0.5*d.h+d.y,left:0.5*d.w+d.x}))},getViewport:function(){var a=b.current&&b.current.locked||!1,d={x:n.scrollLeft(),
y:n.scrollTop()};a?(d.w=a[0].clientWidth,d.h=a[0].clientHeight):(d.w=s&&r.innerWidth?r.innerWidth:n.width(),d.h=s&&r.innerHeight?r.innerHeight:n.height());return d},unbindEvents:function(){b.wrap&&t(b.wrap)&&b.wrap.unbind(".fb");p.unbind(".fb");n.unbind(".fb")},bindEvents:function(){var a=b.current,d;a&&(n.bind("orientationchange.fb"+(s?"":" resize.fb")+(a.autoCenter&&!a.locked?" scroll.fb":""),b.update),(d=a.keys)&&p.bind("keydown.fb",function(e){var c=e.which||e.keyCode,k=e.target||e.srcElement;
if(27===c&&b.coming)return!1;!e.ctrlKey&&(!e.altKey&&!e.shiftKey&&!e.metaKey&&(!k||!k.type&&!f(k).is("[contenteditable]")))&&f.each(d,function(d,k){if(1<a.group.length&&k[c]!==v)return b[d](k[c]),e.preventDefault(),!1;if(-1<f.inArray(c,k))return b[d](),e.preventDefault(),!1})}),f.fn.mousewheel&&a.mouseWheel&&b.wrap.bind("mousewheel.fb",function(d,c,k,g){for(var h=f(d.target||null),j=!1;h.length&&!j&&!h.is(".fancybox-skin")&&!h.is(".fancybox-wrap");)j=h[0]&&!(h[0].style.overflow&&"hidden"===h[0].style.overflow)&&
(h[0].clientWidth&&h[0].scrollWidth>h[0].clientWidth||h[0].clientHeight&&h[0].scrollHeight>h[0].clientHeight),h=f(h).parent();if(0!==c&&!j&&1<b.group.length&&!a.canShrink){if(0<g||0<k)b.prev(0<g?"down":"left");else if(0>g||0>k)b.next(0>g?"up":"right");d.preventDefault()}}))},trigger:function(a,d){var e,c=d||b.coming||b.current;if(c){f.isFunction(c[a])&&(e=c[a].apply(c,Array.prototype.slice.call(arguments,1)));if(!1===e)return!1;c.helpers&&f.each(c.helpers,function(d,e){if(e&&b.helpers[d]&&f.isFunction(b.helpers[d][a]))b.helpers[d][a](f.extend(!0,
{},b.helpers[d].defaults,e),c)});p.trigger(a)}},isImage:function(a){return q(a)&&a.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i)},isSWF:function(a){return q(a)&&a.match(/\.(swf)((\?|#).*)?$/i)},_start:function(a){var d={},e,c;a=l(a);e=b.group[a]||null;if(!e)return!1;d=f.extend(!0,{},b.opts,e);e=d.margin;c=d.padding;"number"===f.type(e)&&(d.margin=[e,e,e,e]);"number"===f.type(c)&&(d.padding=[c,c,c,c]);d.modal&&f.extend(!0,d,{closeBtn:!1,closeClick:!1,nextClick:!1,arrows:!1,
mouseWheel:!1,keys:null,helpers:{overlay:{closeClick:!1}}});d.autoSize&&(d.autoWidth=d.autoHeight=!0);"auto"===d.width&&(d.autoWidth=!0);"auto"===d.height&&(d.autoHeight=!0);d.group=b.group;d.index=a;b.coming=d;if(!1===b.trigger("beforeLoad"))b.coming=null;else{c=d.type;e=d.href;if(!c)return b.coming=null,b.current&&b.router&&"jumpto"!==b.router?(b.current.index=a,b[b.router](b.direction)):!1;b.isActive=!0;if("image"===c||"swf"===c)d.autoHeight=d.autoWidth=!1,d.scrolling="visible";"image"===c&&(d.aspectRatio=
!0);"iframe"===c&&s&&(d.scrolling="scroll");d.wrap=f(d.tpl.wrap).addClass("fancybox-"+(s?"mobile":"desktop")+" fancybox-type-"+c+" fancybox-tmp "+d.wrapCSS).appendTo(d.parent||"body");f.extend(d,{skin:f(".fancybox-skin",d.wrap),outer:f(".fancybox-outer",d.wrap),inner:f(".fancybox-inner",d.wrap)});f.each(["Top","Right","Bottom","Left"],function(a,b){d.skin.css("padding"+b,w(d.padding[a]))});b.trigger("onReady");if("inline"===c||"html"===c){if(!d.content||!d.content.length)return b._error("content")}else if(!e)return b._error("href");
"image"===c?b._loadImage():"ajax"===c?b._loadAjax():"iframe"===c?b._loadIframe():b._afterLoad()}},_error:function(a){f.extend(b.coming,{type:"html",autoWidth:!0,autoHeight:!0,minWidth:0,minHeight:0,scrolling:"no",hasError:a,content:b.coming.tpl.error});b._afterLoad()},_loadImage:function(){var a=b.imgPreload=new Image;a.onload=function(){this.onload=this.onerror=null;b.coming.width=this.width/b.opts.pixelRatio;b.coming.height=this.height/b.opts.pixelRatio;b._afterLoad()};a.onerror=function(){this.onload=
this.onerror=null;b._error("image")};a.src=b.coming.href;!0!==a.complete&&b.showLoading()},_loadAjax:function(){var a=b.coming;b.showLoading();b.ajaxLoad=f.ajax(f.extend({},a.ajax,{url:a.href,error:function(a,e){b.coming&&"abort"!==e?b._error("ajax",a):b.hideLoading()},success:function(d,e){"success"===e&&(a.content=d,b._afterLoad())}}))},_loadIframe:function(){var a=b.coming,d=f(a.tpl.iframe.replace(/\{rnd\}/g,(new Date).getTime())).attr("scrolling",s?"auto":a.iframe.scrolling).attr("src",a.href);
f(a.wrap).bind("onReset",function(){try{f(this).find("iframe").hide().attr("src","//about:blank").end().empty()}catch(a){}});a.iframe.preload&&(b.showLoading(),d.one("load",function(){f(this).data("ready",1);s||f(this).bind("load.fb",b.update);f(this).parents(".fancybox-wrap").width("100%").removeClass("fancybox-tmp").show();b._afterLoad()}));a.content=d.appendTo(a.inner);a.iframe.preload||b._afterLoad()},_preloadImages:function(){var a=b.group,d=b.current,e=a.length,c=d.preload?Math.min(d.preload,
e-1):0,f,g;for(g=1;g<=c;g+=1)f=a[(d.index+g)%e],"image"===f.type&&f.href&&((new Image).src=f.href)},_afterLoad:function(){var a=b.coming,d=b.current,e,c,k,g,h;b.hideLoading();if(a&&!1!==b.isActive)if(!1===b.trigger("afterLoad",a,d))a.wrap.stop(!0).trigger("onReset").remove(),b.coming=null;else{d&&(b.trigger("beforeChange",d),d.wrap.stop(!0).removeClass("fancybox-opened").find(".fancybox-item, .fancybox-nav").remove());b.unbindEvents();e=a.content;c=a.type;k=a.scrolling;f.extend(b,{wrap:a.wrap,skin:a.skin,
outer:a.outer,inner:a.inner,current:a,previous:d});g=a.href;switch(c){case "inline":case "ajax":case "html":a.selector?e=f("<div>").html(e).find(a.selector):t(e)&&(e.data("fancybox-placeholder")||e.data("fancybox-placeholder",f('<div class="fancybox-placeholder"></div>').insertAfter(e).hide()),e=e.show().detach(),a.wrap.bind("onReset",function(){f(this).find(e).length&&e.hide().replaceAll(e.data("fancybox-placeholder")).data("fancybox-placeholder",!1)}));break;case "image":e=a.tpl.image.replace("{href}",
g);break;case "swf":e='<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="'+g+'"></param>',h="",f.each(a.swf,function(a,b){e+='<param name="'+a+'" value="'+b+'"></param>';h+=" "+a+'="'+b+'"'}),e+='<embed src="'+g+'" type="application/x-shockwave-flash" width="100%" height="100%"'+h+"></embed></object>"}(!t(e)||!e.parent().is(a.inner))&&a.inner.append(e);b.trigger("beforeShow");a.inner.css("overflow","yes"===k?"scroll":
"no"===k?"hidden":k);b._setDimension();b.reposition();b.isOpen=!1;b.coming=null;b.bindEvents();if(b.isOpened){if(d.prevMethod)b.transitions[d.prevMethod]()}else f(".fancybox-wrap").not(a.wrap).stop(!0).trigger("onReset").remove();b.transitions[b.isOpened?a.nextMethod:a.openMethod]();b._preloadImages()}},_setDimension:function(){var a=b.getViewport(),d=0,e=!1,c=!1,e=b.wrap,k=b.skin,g=b.inner,h=b.current,c=h.width,j=h.height,m=h.minWidth,u=h.minHeight,n=h.maxWidth,p=h.maxHeight,s=h.scrolling,q=h.scrollOutside?
h.scrollbarWidth:0,x=h.margin,y=l(x[1]+x[3]),r=l(x[0]+x[2]),v,z,t,C,A,F,B,D,H;e.add(k).add(g).width("auto").height("auto").removeClass("fancybox-tmp");x=l(k.outerWidth(!0)-k.width());v=l(k.outerHeight(!0)-k.height());z=y+x;t=r+v;C=E(c)?(a.w-z)*l(c)/100:c;A=E(j)?(a.h-t)*l(j)/100:j;if("iframe"===h.type){if(H=h.content,h.autoHeight&&1===H.data("ready"))try{H[0].contentWindow.document.location&&(g.width(C).height(9999),F=H.contents().find("body"),q&&F.css("overflow-x","hidden"),A=F.outerHeight(!0))}catch(G){}}else if(h.autoWidth||
h.autoHeight)g.addClass("fancybox-tmp"),h.autoWidth||g.width(C),h.autoHeight||g.height(A),h.autoWidth&&(C=g.width()),h.autoHeight&&(A=g.height()),g.removeClass("fancybox-tmp");c=l(C);j=l(A);D=C/A;m=l(E(m)?l(m,"w")-z:m);n=l(E(n)?l(n,"w")-z:n);u=l(E(u)?l(u,"h")-t:u);p=l(E(p)?l(p,"h")-t:p);F=n;B=p;h.fitToView&&(n=Math.min(a.w-z,n),p=Math.min(a.h-t,p));z=a.w-y;r=a.h-r;h.aspectRatio?(c>n&&(c=n,j=l(c/D)),j>p&&(j=p,c=l(j*D)),c<m&&(c=m,j=l(c/D)),j<u&&(j=u,c=l(j*D))):(c=Math.max(m,Math.min(c,n)),h.autoHeight&&
"iframe"!==h.type&&(g.width(c),j=g.height()),j=Math.max(u,Math.min(j,p)));if(h.fitToView)if(g.width(c).height(j),e.width(c+x),a=e.width(),y=e.height(),h.aspectRatio)for(;(a>z||y>r)&&(c>m&&j>u)&&!(19<d++);)j=Math.max(u,Math.min(p,j-10)),c=l(j*D),c<m&&(c=m,j=l(c/D)),c>n&&(c=n,j=l(c/D)),g.width(c).height(j),e.width(c+x),a=e.width(),y=e.height();else c=Math.max(m,Math.min(c,c-(a-z))),j=Math.max(u,Math.min(j,j-(y-r)));q&&("auto"===s&&j<A&&c+x+q<z)&&(c+=q);g.width(c).height(j);e.width(c+x);a=e.width();
y=e.height();e=(a>z||y>r)&&c>m&&j>u;c=h.aspectRatio?c<F&&j<B&&c<C&&j<A:(c<F||j<B)&&(c<C||j<A);f.extend(h,{dim:{width:w(a),height:w(y)},origWidth:C,origHeight:A,canShrink:e,canExpand:c,wPadding:x,hPadding:v,wrapSpace:y-k.outerHeight(!0),skinSpace:k.height()-j});!H&&(h.autoHeight&&j>u&&j<p&&!c)&&g.height("auto")},_getPosition:function(a){var d=b.current,e=b.getViewport(),c=d.margin,f=b.wrap.width()+c[1]+c[3],g=b.wrap.height()+c[0]+c[2],c={position:"absolute",top:c[0],left:c[3]};d.autoCenter&&d.fixed&&
!a&&g<=e.h&&f<=e.w?c.position="fixed":d.locked||(c.top+=e.y,c.left+=e.x);c.top=w(Math.max(c.top,c.top+(e.h-g)*d.topRatio));c.left=w(Math.max(c.left,c.left+(e.w-f)*d.leftRatio));return c},_afterZoomIn:function(){var a=b.current;a&&(b.isOpen=b.isOpened=!0,b.wrap.css("overflow","visible").addClass("fancybox-opened"),b.update(),(a.closeClick||a.nextClick&&1<b.group.length)&&b.inner.css("cursor","pointer").bind("click.fb",function(d){!f(d.target).is("a")&&!f(d.target).parent().is("a")&&(d.preventDefault(),
b[a.closeClick?"close":"next"]())}),a.closeBtn&&f(a.tpl.closeBtn).appendTo(b.skin).bind("click.fb",function(a){a.preventDefault();b.close()}),a.arrows&&1<b.group.length&&((a.loop||0<a.index)&&f(a.tpl.prev).appendTo(b.outer).bind("click.fb",b.prev),(a.loop||a.index<b.group.length-1)&&f(a.tpl.next).appendTo(b.outer).bind("click.fb",b.next)),b.trigger("afterShow"),!a.loop&&a.index===a.group.length-1?b.play(!1):b.opts.autoPlay&&!b.player.isActive&&(b.opts.autoPlay=!1,b.play()))},_afterZoomOut:function(a){a=
a||b.current;f(".fancybox-wrap").trigger("onReset").remove();f.extend(b,{group:{},opts:{},router:!1,current:null,isActive:!1,isOpened:!1,isOpen:!1,isClosing:!1,wrap:null,skin:null,outer:null,inner:null});b.trigger("afterClose",a)}});b.transitions={getOrigPosition:function(){var a=b.current,d=a.element,e=a.orig,c={},f=50,g=50,h=a.hPadding,j=a.wPadding,m=b.getViewport();!e&&(a.isDom&&d.is(":visible"))&&(e=d.find("img:first"),e.length||(e=d));t(e)?(c=e.offset(),e.is("img")&&(f=e.outerWidth(),g=e.outerHeight())):
(c.top=m.y+(m.h-g)*a.topRatio,c.left=m.x+(m.w-f)*a.leftRatio);if("fixed"===b.wrap.css("position")||a.locked)c.top-=m.y,c.left-=m.x;return c={top:w(c.top-h*a.topRatio),left:w(c.left-j*a.leftRatio),width:w(f+j),height:w(g+h)}},step:function(a,d){var e,c,f=d.prop;c=b.current;var g=c.wrapSpace,h=c.skinSpace;if("width"===f||"height"===f)e=d.end===d.start?1:(a-d.start)/(d.end-d.start),b.isClosing&&(e=1-e),c="width"===f?c.wPadding:c.hPadding,c=a-c,b.skin[f](l("width"===f?c:c-g*e)),b.inner[f](l("width"===
f?c:c-g*e-h*e))},zoomIn:function(){var a=b.current,d=a.pos,e=a.openEffect,c="elastic"===e,k=f.extend({opacity:1},d);delete k.position;c?(d=this.getOrigPosition(),a.openOpacity&&(d.opacity=0.1)):"fade"===e&&(d.opacity=0.1);b.wrap.css(d).animate(k,{duration:"none"===e?0:a.openSpeed,easing:a.openEasing,step:c?this.step:null,complete:b._afterZoomIn})},zoomOut:function(){var a=b.current,d=a.closeEffect,e="elastic"===d,c={opacity:0.1};e&&(c=this.getOrigPosition(),a.closeOpacity&&(c.opacity=0.1));b.wrap.animate(c,
{duration:"none"===d?0:a.closeSpeed,easing:a.closeEasing,step:e?this.step:null,complete:b._afterZoomOut})},changeIn:function(){var a=b.current,d=a.nextEffect,e=a.pos,c={opacity:1},f=b.direction,g;e.opacity=0.1;"elastic"===d&&(g="down"===f||"up"===f?"top":"left","down"===f||"right"===f?(e[g]=w(l(e[g])-200),c[g]="+=200px"):(e[g]=w(l(e[g])+200),c[g]="-=200px"));"none"===d?b._afterZoomIn():b.wrap.css(e).animate(c,{duration:a.nextSpeed,easing:a.nextEasing,complete:b._afterZoomIn})},changeOut:function(){var a=
b.previous,d=a.prevEffect,e={opacity:0.1},c=b.direction;"elastic"===d&&(e["down"===c||"up"===c?"top":"left"]=("up"===c||"left"===c?"-":"+")+"=200px");a.wrap.animate(e,{duration:"none"===d?0:a.prevSpeed,easing:a.prevEasing,complete:function(){f(this).trigger("onReset").remove()}})}};b.helpers.overlay={defaults:{closeClick:!0,speedOut:200,showEarly:!0,css:{},locked:!s,fixed:!0},overlay:null,fixed:!1,el:f("html"),create:function(a){a=f.extend({},this.defaults,a);this.overlay&&this.close();this.overlay=
f('<div class="fancybox-overlay"></div>').appendTo(b.coming?b.coming.parent:a.parent);this.fixed=!1;a.fixed&&b.defaults.fixed&&(this.overlay.addClass("fancybox-overlay-fixed"),this.fixed=!0)},open:function(a){var d=this;a=f.extend({},this.defaults,a);this.overlay?this.overlay.unbind(".overlay").width("auto").height("auto"):this.create(a);this.fixed||(n.bind("resize.overlay",f.proxy(this.update,this)),this.update());a.closeClick&&this.overlay.bind("click.overlay",function(a){if(f(a.target).hasClass("fancybox-overlay"))return b.isActive?
b.close():d.close(),!1});this.overlay.css(a.css).show()},close:function(){var a,b;n.unbind("resize.overlay");this.el.hasClass("fancybox-lock")&&(f(".fancybox-margin").removeClass("fancybox-margin"),a=n.scrollTop(),b=n.scrollLeft(),this.el.removeClass("fancybox-lock"),n.scrollTop(a).scrollLeft(b));f(".fancybox-overlay").remove().hide();f.extend(this,{overlay:null,fixed:!1})},update:function(){var a="100%",b;this.overlay.width(a).height("100%");I?(b=Math.max(G.documentElement.offsetWidth,G.body.offsetWidth),
p.width()>b&&(a=p.width())):p.width()>n.width()&&(a=p.width());this.overlay.width(a).height(p.height())},onReady:function(a,b){var e=this.overlay;f(".fancybox-overlay").stop(!0,!0);e||this.create(a);a.locked&&(this.fixed&&b.fixed)&&(e||(this.margin=p.height()>n.height()?f("html").css("margin-right").replace("px",""):!1),b.locked=this.overlay.append(b.wrap),b.fixed=!1);!0===a.showEarly&&this.beforeShow.apply(this,arguments)},beforeShow:function(a,b){var e,c;b.locked&&(!1!==this.margin&&(f("*").filter(function(){return"fixed"===
f(this).css("position")&&!f(this).hasClass("fancybox-overlay")&&!f(this).hasClass("fancybox-wrap")}).addClass("fancybox-margin"),this.el.addClass("fancybox-margin")),e=n.scrollTop(),c=n.scrollLeft(),this.el.addClass("fancybox-lock"),n.scrollTop(e).scrollLeft(c));this.open(a)},onUpdate:function(){this.fixed||this.update()},afterClose:function(a){this.overlay&&!b.coming&&this.overlay.fadeOut(a.speedOut,f.proxy(this.close,this))}};b.helpers.title={defaults:{type:"float",position:"bottom"},beforeShow:function(a){var d=
b.current,e=d.title,c=a.type;f.isFunction(e)&&(e=e.call(d.element,d));if(q(e)&&""!==f.trim(e)){d=f('<div class="fancybox-title fancybox-title-'+c+'-wrap">'+e+"</div>");switch(c){case "inside":c=b.skin;break;case "outside":c=b.wrap;break;case "over":c=b.inner;break;default:c=b.skin,d.appendTo("body"),I&&d.width(d.width()),d.wrapInner('<span class="child"></span>'),b.current.margin[2]+=Math.abs(l(d.css("margin-bottom")))}d["top"===a.position?"prependTo":"appendTo"](c)}}};f.fn.fancybox=function(a){var d,
e=f(this),c=this.selector||"",k=function(g){var h=f(this).blur(),j=d,k,l;!g.ctrlKey&&(!g.altKey&&!g.shiftKey&&!g.metaKey)&&!h.is(".fancybox-wrap")&&(k=a.groupAttr||"data-fancybox-group",l=h.attr(k),l||(k="rel",l=h.get(0)[k]),l&&(""!==l&&"nofollow"!==l)&&(h=c.length?f(c):e,h=h.filter("["+k+'="'+l+'"]'),j=h.index(this)),a.index=j,!1!==b.open(h,a)&&g.preventDefault())};a=a||{};d=a.index||0;!c||!1===a.live?e.unbind("click.fb-start").bind("click.fb-start",k):p.undelegate(c,"click.fb-start").delegate(c+
":not('.fancybox-item, .fancybox-nav')","click.fb-start",k);this.filter("[data-fancybox-start=1]").trigger("click");return this};p.ready(function(){var a,d;f.scrollbarWidth===v&&(f.scrollbarWidth=function(){var a=f('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body"),b=a.children(),b=b.innerWidth()-b.height(99).innerWidth();a.remove();return b});if(f.support.fixedPosition===v){a=f.support;d=f('<div style="position:fixed;top:20px;"></div>').appendTo("body");var e=20===
d[0].offsetTop||15===d[0].offsetTop;d.remove();a.fixedPosition=e}f.extend(b.defaults,{scrollbarWidth:f.scrollbarWidth(),fixed:f.support.fixedPosition,parent:f("body")});a=f(r).width();J.addClass("fancybox-lock-test");d=f(r).width();J.removeClass("fancybox-lock-test");f("<style type='text/css'>.fancybox-margin{margin-right:"+(d-a)+"px;}</style>").appendTo("head")})})(window,document,jQuery);
// END FANCYBOX

// FANCYBOX LIBRERIA PARA MOUSESCROLL
// * Version: 3.0.6 
(function(d){function e(a){var b=a||window.event,c=[].slice.call(arguments,1),f=0,e=0,g=0,a=d.event.fix(b);a.type="mousewheel";b.wheelDelta&&(f=b.wheelDelta/120);b.detail&&(f=-b.detail/3);g=f;b.axis!==void 0&&b.axis===b.HORIZONTAL_AXIS&&(g=0,e=-1*f);b.wheelDeltaY!==void 0&&(g=b.wheelDeltaY/120);b.wheelDeltaX!==void 0&&(e=-1*b.wheelDeltaX/120);c.unshift(a,f,e,g);return(d.event.dispatch||d.event.handle).apply(this,c)}var c=["DOMMouseScroll","mousewheel"];if(d.event.fixHooks)for(var h=c.length;h;)d.event.fixHooks[c[--h]]=
d.event.mouseHooks;d.event.special.mousewheel={setup:function(){if(this.addEventListener)for(var a=c.length;a;)this.addEventListener(c[--a],e,false);else this.onmousewheel=e},teardown:function(){if(this.removeEventListener)for(var a=c.length;a;)this.removeEventListener(c[--a],e,false);else this.onmousewheel=null}};d.fn.extend({mousewheel:function(a){return a?this.bind("mousewheel",a):this.trigger("mousewheel")},unmousewheel:function(a){return this.unbind("mousewheel",a)}})})(jQuery);
// END FANCYBOX LIBRERIA PARA MOUSESCROLL

// FANCYBOX 
$(document).ready(function() {

    $('.fancybox').fancybox({
        openEffect  : 'elastic',   
        
        helpers : {
            title : {
                type : 'inside'

            },
            overlay : {
                speedIn : 500,
                opacity : 0.75
            }            
        }

    });
});
$(".recomendarOLD").fancybox({
		width	: 900,
		height	: 500,
		fitToView	: false,
		autoSize	: false,
		closeClick	: true,
		openEffect	: 'elastic',
		closeEffect	: 'elastic'
	});
	$(".fancygeneral").fancybox({
		maxWidth	: 800,
		maxHeight	: 500,
		fitToView	: false,
		autoSize	: false,
		closeClick	: false,
		openEffect	: 'elastic',
		closeEffect	: 'elastic'
	});
// END FANCYBOX

// ORGANIC TABS (PRODUCTO)
(function($) {

    $.organicTabs = function(el, options) {
    
        var base = this;
        base.$el = $(el);
        base.$nav = base.$el.find(".nav");
                
        base.init = function() {
        
            base.options = $.extend({},$.organicTabs.defaultOptions, options);
            
            // Accessible hiding fix
            $(".hide").css({
                "position": "relative",
                "top": 0,
                "left": 0,
                "display": "none"
            }); 
            
            base.$nav.delegate("li > a", "click", function() {
            
                // Figure out current list via CSS class
                var curList = base.$el.find("a.current").attr("href").substring(1),
                
                // List moving to
                    $newList = $(this),
                    
                // Figure out ID of new list
                    listID = $newList.attr("href").substring(1),
                
                // Set outer wrapper height to (static) height of current inner list
                    $allListWrap = base.$el.find(".list-wrap"),
                    curListHeight = $allListWrap.height();
                $allListWrap.height(curListHeight);
                                        
                if ((listID != curList) && ( base.$el.find(":animated").length == 0)) {
                                            
                    // Fade out current list
                    base.$el.find("#"+curList).fadeOut(base.options.speed, function() {
                        
                        // Fade in new list on callback
                        base.$el.find("#"+listID).fadeIn(base.options.speed);
                        
                        // Adjust outer wrapper to fit new list snuggly
                        var newHeight = base.$el.find("#"+listID).height();
                        $allListWrap.animate({
                            height: newHeight
                        });
                        
                        // Remove highlighting - Add to just-clicked tab
                        base.$el.find(".nav li a").removeClass("current");
                        $newList.addClass("current");
                            
                    });
                    
                }   
                
                // Don't behave like a regular link
                // Stop propegation and bubbling
                return false;
            });
            
        };
        base.init();
    };
    
    $.organicTabs.defaultOptions = {
        "speed": 300
    };
    
    $.fn.organicTabs = function(options) {
        return this.each(function() {
            (new $.organicTabs(this, options));
        });
    };
    
})(jQuery);
// END ORGANIC TABS (PRODUCTO)

// PREFIXFREE //
// StyleFix 1.0.2 + PrefixFree 1.0.6 / Lea Verou / MIT license
(function(){function h(a,b){return[].slice.call((b||document).querySelectorAll(a))}if(window.addEventListener){var e=window.StyleFix={link:function(a){try{if("stylesheet"!==a.rel||a.hasAttribute("data-noprefix"))return}catch(b){return}var c=a.href||a.getAttribute("data-href"),f=c.replace(/[^\/]+$/,""),i=a.parentNode,d=new XMLHttpRequest,g;d.onreadystatechange=function(){4===d.readyState&&g()};g=function(){var b=d.responseText;if(b&&a.parentNode&&(!d.status||400>d.status||600<d.status)){b=e.fix(b,
!0,a);f&&(b=b.replace(/url\(\s*?((?:"|')?)(.+?)\1\s*?\)/gi,function(b,a,c){return!/^([a-z]{3,10}:|\/|#)/i.test(c)?'url("'+f+c+'")':b}),b=b.replace(RegExp("\\b(behavior:\\s*?url\\('?\"?)"+f,"gi"),"$1"));var c=document.createElement("style");c.textContent=b;c.media=a.media;c.disabled=a.disabled;c.setAttribute("data-href",a.getAttribute("href"));i.insertBefore(c,a);i.removeChild(a)}};try{d.open("GET",c),d.send(null)}catch(k){"undefined"!=typeof XDomainRequest&&(d=new XDomainRequest,d.onerror=d.onprogress=
function(){},d.onload=g,d.open("GET",c),d.send(null))}a.setAttribute("data-inprogress","")},styleElement:function(a){var b=a.disabled;a.textContent=e.fix(a.textContent,!0,a);a.disabled=b},styleAttribute:function(a){var b=a.getAttribute("style"),b=e.fix(b,!1,a);a.setAttribute("style",b)},process:function(){h('link[rel="stylesheet"]:not([data-inprogress])').forEach(StyleFix.link);h("style").forEach(StyleFix.styleElement);h("[style]").forEach(StyleFix.styleAttribute)},register:function(a,b){(e.fixers=
e.fixers||[]).splice(void 0===b?e.fixers.length:b,0,a)},fix:function(a,b){for(var c=0;c<e.fixers.length;c++)a=e.fixers[c](a,b)||a;return a},camelCase:function(a){return a.replace(/-([a-z])/g,function(b,a){return a.toUpperCase()}).replace("-","")},deCamelCase:function(a){return a.replace(/[A-Z]/g,function(a){return"-"+a.toLowerCase()})}};(function(){setTimeout(function(){h('link[rel="stylesheet"]').forEach(StyleFix.link)},10);document.addEventListener("DOMContentLoaded",StyleFix.process,!1)})()}})();
(function(h){function e(b,c,f,i,d){b=a[b];b.length&&(b=RegExp(c+"("+b.join("|")+")"+f,"gi"),d=d.replace(b,i));return d}if(window.StyleFix&&window.getComputedStyle){var a=window.PrefixFree={prefixCSS:function(b,c){var f=a.prefix,b=e("functions","(\\s|:|,)","\\s*\\(","$1"+f+"$2(",b),b=e("keywords","(\\s|:)","(\\s|;|\\}|$)","$1"+f+"$2$3",b),b=e("properties","(^|\\{|\\s|;)","\\s*:","$1"+f+"$2:",b);if(a.properties.length)var i=RegExp("\\b("+a.properties.join("|")+")(?!:)","gi"),b=e("valueProperties","\\b",
":(.+?);",function(a){return a.replace(i,f+"$1")},b);c&&(b=e("selectors","","\\b",a.prefixSelector,b),b=e("atrules","@","\\b","@"+f+"$1",b));return b=b.replace(RegExp("-"+f,"g"),"-")},property:function(b){return(a.properties.indexOf(b)?a.prefix:"")+b},value:function(b){b=e("functions","(^|\\s|,)","\\s*\\(","$1"+a.prefix+"$2(",b);return b=e("keywords","(^|\\s)","(\\s|$)","$1"+a.prefix+"$2$3",b)},prefixSelector:function(b){return b.replace(/^:{1,2}/,function(b){return b+a.prefix})},prefixProperty:function(b,
c){var f=a.prefix+b;return c?StyleFix.camelCase(f):f}};(function(){var b={},c=[],f=getComputedStyle(document.documentElement,null),i=document.createElement("div").style,d=function(a){if("-"===a.charAt(0)){c.push(a);var a=a.split("-"),d=a[1];for(b[d]=++b[d]||1;3<a.length;)a.pop(),d=a.join("-"),StyleFix.camelCase(d)in i&&-1===c.indexOf(d)&&c.push(d)}};if(0<f.length)for(var g=0;g<f.length;g++)d(f[g]);else for(var e in f)d(StyleFix.deCamelCase(e));var g=0,j,h;for(h in b)f=b[h],g<f&&(j=h,g=f);a.prefix=
"-"+j+"-";a.Prefix=StyleFix.camelCase(a.prefix);a.properties=[];for(g=0;g<c.length;g++)e=c[g],0===e.indexOf(a.prefix)&&(j=e.slice(a.prefix.length),StyleFix.camelCase(j)in i||a.properties.push(j));"Ms"==a.Prefix&&!("transform"in i)&&!("MsTransform"in i)&&"msTransform"in i&&a.properties.push("transform","transform-origin");a.properties.sort()})();(function(){function b(a,b){e[b]="";e[b]=a;return!!e[b]}var c={"linear-gradient":{property:"backgroundImage",params:"red, teal"},calc:{property:"width",params:"1px + 5%"},
element:{property:"backgroundImage",params:"#foo"},"cross-fade":{property:"backgroundImage",params:"url(a.png), url(b.png), 50%"}};c["repeating-linear-gradient"]=c["repeating-radial-gradient"]=c["radial-gradient"]=c["linear-gradient"];var f={initial:"color","zoom-in":"cursor","zoom-out":"cursor",box:"display",flexbox:"display","inline-flexbox":"display"};a.functions=[];a.keywords=[];var e=document.createElement("div").style,d;for(d in c){var g=c[d],h=g.property,g=d+"("+g.params+")";!b(g,h)&&b(a.prefix+
g,h)&&a.functions.push(d)}for(var j in f)h=f[j],!b(j,h)&&b(a.prefix+j,h)&&a.keywords.push(j)})();(function(){function b(a){e.textContent=a+"{}";return!!e.sheet.cssRules.length}var c={":read-only":null,":read-write":null,":any-link":null,"::selection":null},f={keyframes:"name",viewport:null,document:'regexp(".")'};a.selectors=[];a.atrules=[];var e=h.appendChild(document.createElement("style")),d;for(d in c){var g=d+(c[d]?"("+c[d]+")":"");!b(g)&&b(a.prefixSelector(g))&&a.selectors.push(d)}for(var k in f)g=
k+" "+(f[k]||""),!b("@"+g)&&b("@"+a.prefix+g)&&a.atrules.push(k);h.removeChild(e)})();a.valueProperties=["transition","transition-property"];h.className+=" "+a.prefix;StyleFix.register(a.prefixCSS)}})(document.documentElement);

// END PREFIXFREE //

$(document).ready(function() {
	
	// EXTENDER/RECOGER PANEL DE LOGIN
	$("#open").click(function(){
		$("div#panel").slideDown("slow");
	
	});	
		
	$("#close").click(function(){
		$("div#panel").slideUp("slow");	
	});		
	// FIN EXTENDER/RECOGER PANEL DE LOGIN
	
	// SUBIR SCROLL
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
    }); 

    $('.scrollup').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });

    $('#scrollcomentarios').click(function(){
        $("html, body").animate({ scrollTop: $("#apartadoComentarios").offset().top }, 600);
        return false;
    });
	// END SUBIR SCROLL
});

// INICIO MODERNIZR
/* Modernizr 2.6.2 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-csstransforms-csstransitions-touch-shiv-cssclasses-prefixed-teststyles-testprop-testallprops-prefixes-domprefixes-load
 */
;window.Modernizr=function(a,b,c){function z(a){j.cssText=a}function A(a,b){return z(m.join(a+";")+(b||""))}function B(a,b){return typeof a===b}function C(a,b){return!!~(""+a).indexOf(b)}function D(a,b){for(var d in a){var e=a[d];if(!C(e,"-")&&j[e]!==c)return b=="pfx"?e:!0}return!1}function E(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:B(f,"function")?f.bind(d||b):f}return!1}function F(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+o.join(d+" ")+d).split(" ");return B(b,"string")||B(b,"undefined")?D(e,b):(e=(a+" "+p.join(d+" ")+d).split(" "),E(e,b,c))}var d="2.6.2",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k,l={}.toString,m=" -webkit- -moz- -o- -ms- ".split(" "),n="Webkit Moz O ms",o=n.split(" "),p=n.toLowerCase().split(" "),q={},r={},s={},t=[],u=t.slice,v,w=function(a,c,d,e){var f,i,j,k,l=b.createElement("div"),m=b.body,n=m||b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:h+(d+1),l.appendChild(j);return f=["&#173;",'<style id="s',h,'">',a,"</style>"].join(""),l.id=h,(m?l:n).innerHTML+=f,n.appendChild(l),m||(n.style.background="",n.style.overflow="hidden",k=g.style.overflow,g.style.overflow="hidden",g.appendChild(n)),i=c(l,a),m?l.parentNode.removeChild(l):(n.parentNode.removeChild(n),g.style.overflow=k),!!i},x={}.hasOwnProperty,y;!B(x,"undefined")&&!B(x.call,"undefined")?y=function(a,b){return x.call(a,b)}:y=function(a,b){return b in a&&B(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=u.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(u.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(u.call(arguments)))};return e}),q.touch=function(){var c;return"ontouchstart"in a||a.DocumentTouch&&b instanceof DocumentTouch?c=!0:w(["@media (",m.join("touch-enabled),("),h,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(a){c=a.offsetTop===9}),c},q.csstransforms=function(){return!!F("transform")},q.csstransitions=function(){return F("transition")};for(var G in q)y(q,G)&&(v=G.toLowerCase(),e[v]=q[G](),t.push((e[v]?"":"no-")+v));return e.addTest=function(a,b){if(typeof a=="object")for(var d in a)y(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b}return e},z(""),i=k=null,function(a,b){function k(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function l(){var a=r.elements;return typeof a=="string"?a.split(" "):a}function m(a){var b=i[a[g]];return b||(b={},h++,a[g]=h,i[h]=b),b}function n(a,c,f){c||(c=b);if(j)return c.createElement(a);f||(f=m(c));var g;return f.cache[a]?g=f.cache[a].cloneNode():e.test(a)?g=(f.cache[a]=f.createElem(a)).cloneNode():g=f.createElem(a),g.canHaveChildren&&!d.test(a)?f.frag.appendChild(g):g}function o(a,c){a||(a=b);if(j)return a.createDocumentFragment();c=c||m(a);var d=c.frag.cloneNode(),e=0,f=l(),g=f.length;for(;e<g;e++)d.createElement(f[e]);return d}function p(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return r.shivMethods?n(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+l().join().replace(/\w+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(r,b.frag)}function q(a){a||(a=b);var c=m(a);return r.shivCSS&&!f&&!c.hasCSS&&(c.hasCSS=!!k(a,"article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")),j||p(a,c),a}var c=a.html5||{},d=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,e=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,f,g="_html5shiv",h=0,i={},j;(function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",f="hidden"in a,j=a.childNodes.length==1||function(){b.createElement("a");var a=b.createDocumentFragment();return typeof a.cloneNode=="undefined"||typeof a.createDocumentFragment=="undefined"||typeof a.createElement=="undefined"}()}catch(c){f=!0,j=!0}})();var r={elements:c.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:c.shivCSS!==!1,supportsUnknownElements:j,shivMethods:c.shivMethods!==!1,type:"default",shivDocument:q,createElement:n,createDocumentFragment:o};a.html5=r,q(b)}(this,b),e._version=d,e._prefixes=m,e._domPrefixes=p,e._cssomPrefixes=o,e.testProp=function(a){return D([a])},e.testAllProps=F,e.testStyles=w,e.prefixed=function(a,b,c){return b?F(a,b,c):F(a,"pfx")},g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+t.join(" "):""),e}(this,this.document),function(a,b,c){function d(a){return"[object Function]"==o.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=p.shift();q=1,a?a.t?m(function(){("c"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),"img"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i("c"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&"[object Opera]"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return"[object Array]"==o.call(a)},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(w(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};
// END MODERNIZR

// ELASTISLIDE JQUERY PRODUCTOS //
/**
 * jquery.elastislide.js v1.1.0
 * http://www.codrops.com
 */

;( function( $, window, undefined ) {
	
	'use strict';

	/*
	* debouncedresize: special jQuery event that happens once after a window resize
	*
	* latest version and complete README available on Github:
	* https://github.com/louisremi/jquery-smartresize/blob/master/jquery.debouncedresize.js
	*
	* Copyright 2011 @louis_remi
	* Licensed under the MIT license.
	*/
	var $event = $.event,
	$special,
	resizeTimeout;

	$special = $event.special.debouncedresize = {
		setup: function() {
			$( this ).on( "resize", $special.handler );
		},
		teardown: function() {
			$( this ).off( "resize", $special.handler );
		},
		handler: function( event, execAsap ) {
			// Save the context
			var context = this,
				args = arguments,
				dispatch = function() {
					// set correct event type
					event.type = "debouncedresize";
					$event.dispatch.apply( context, args );
				};

			if ( resizeTimeout ) {
				clearTimeout( resizeTimeout );
			}

			execAsap ?
				dispatch() :
				resizeTimeout = setTimeout( dispatch, $special.threshold );
		},
		threshold: 150
	};

	// ======================= imagesLoaded Plugin ===============================
	// https://github.com/desandro/imagesloaded

	// $('#my-container').imagesLoaded(myFunction)
	// execute a callback when all images have loaded.
	// needed because .load() doesn't work on cached images

	// callback function gets image collection as argument
	//  this is the container

	// original: mit license. paul irish. 2010.
	// contributors: Oren Solomianik, David DeSandro, Yiannis Chatzikonstantinou

	// blank image data-uri bypasses webkit log warning (thx doug jones)
	var BLANK = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==';

	$.fn.imagesLoaded = function( callback ) {
		var $this = this,
			deferred = $.isFunction($.Deferred) ? $.Deferred() : 0,
			hasNotify = $.isFunction(deferred.notify),
			$images = $this.find('img').add( $this.filter('img') ),
			loaded = [],
			proper = [],
			broken = [];

		// Register deferred callbacks
		if ($.isPlainObject(callback)) {
			$.each(callback, function (key, value) {
				if (key === 'callback') {
					callback = value;
				} else if (deferred) {
					deferred[key](value);
				}
			});
		}

		function doneLoading() {
			var $proper = $(proper),
				$broken = $(broken);

			if ( deferred ) {
				if ( broken.length ) {
					deferred.reject( $images, $proper, $broken );
				} else {
					deferred.resolve( $images );
				}
			}

			if ( $.isFunction( callback ) ) {
				callback.call( $this, $images, $proper, $broken );
			}
		}

		function imgLoaded( img, isBroken ) {
			// don't proceed if BLANK image, or image is already loaded
			if ( img.src === BLANK || $.inArray( img, loaded ) !== -1 ) {
				return;
			}

			// store element in loaded images array
			loaded.push( img );

			// keep track of broken and properly loaded images
			if ( isBroken ) {
				broken.push( img );
			} else {
				proper.push( img );
			}

			// cache image and its state for future calls
			$.data( img, 'imagesLoaded', { isBroken: isBroken, src: img.src } );

			// trigger deferred progress method if present
			if ( hasNotify ) {
				deferred.notifyWith( $(img), [ isBroken, $images, $(proper), $(broken) ] );
			}

			// call doneLoading and clean listeners if all images are loaded
			if ( $images.length === loaded.length ){
				setTimeout( doneLoading );
				$images.unbind( '.imagesLoaded' );
			}
		}

		// if no images, trigger immediately
		if ( !$images.length ) {
			doneLoading();
		} else {
			$images.bind( 'load.imagesLoaded error.imagesLoaded', function( event ){
				// trigger imgLoaded
				imgLoaded( event.target, event.type === 'error' );
			}).each( function( i, el ) {
				var src = el.src;

				// find out if this image has been already checked for status
				// if it was, and src has not changed, call imgLoaded on it
				var cached = $.data( el, 'imagesLoaded' );
				if ( cached && cached.src === src ) {
					imgLoaded( el, cached.isBroken );
					return;
				}

				// if complete is true and browser supports natural sizes, try
				// to check for image status manually
				if ( el.complete && el.naturalWidth !== undefined ) {
					imgLoaded( el, el.naturalWidth === 0 || el.naturalHeight === 0 );
					return;
				}

				// cached images don't fire load sometimes, so we reset src, but only when
				// dealing with IE, or image is complete (loaded) and failed manual check
				// webkit hack from http://groups.google.com/group/jquery-dev/browse_thread/thread/eee6ab7b2da50e1f
				if ( el.readyState || el.complete ) {
					el.src = BLANK;
					el.src = src;
				}
			});
		}

		return deferred ? deferred.promise( $this ) : $this;
	};

	// global
	var $window = $( window ),
		Modernizr = window.Modernizr;

	$.Elastislide = function( options, element ) {
		
		this.$el = $( element );
		this._init( options );
		
	};

	$.Elastislide.defaults = {
		// orientation 'horizontal' || 'vertical'
		orientation : 'horizontal',
		// sliding speed
		speed : 500,
		// sliding easing
		easing : 'ease-in-out',
		// the minimum number of items to show. 
		// when we resize the window, this will make sure minItems are always shown 
		// (unless of course minItems is higher than the total number of elements)
		minItems : 3,
		// index of the current item (left most item of the carousel)
		start : 0,
		// click item callback
		onClick : function( el, position, evt ) { return false; },
		onReady : function() { return false; },
		onBeforeSlide : function() { return false; },
		onAfterSlide : function() { return false; }
	};

	$.Elastislide.prototype = {

		_init : function( options ) {
			
			// options
			this.options = $.extend( true, {}, $.Elastislide.defaults, options );

			// https://github.com/twitter/bootstrap/issues/2870
			var self = this,
				transEndEventNames = {
					'WebkitTransition' : 'webkitTransitionEnd',
					'MozTransition' : 'transitionend',
					'OTransition' : 'oTransitionEnd',
					'msTransition' : 'MSTransitionEnd',
					'transition' : 'transitionend'
				};
			
			this.transEndEventName = transEndEventNames[ Modernizr.prefixed( 'transition' ) ];
			
			// suport for css transforms and css transitions
			this.support = Modernizr.csstransitions && Modernizr.csstransforms;

			// current item's index
			this.current = this.options.start;

			// control if it's sliding
			this.isSliding = false;

			this.$items = this.$el.children( 'li' );
			// total number of items
			this.itemsCount = this.$items.length;
			if( this.itemsCount === 0 ) {

				return false;

			}
			this._validate();
			// remove white space
			this.$items.detach();
			this.$el.empty();
			this.$el.append( this.$items );

			// main wrapper
			this.$el.wrap( '<div class="elastislide-wrapper elastislide-loading elastislide-' + this.options.orientation + '"></div>' );

			// check if we applied a transition to the <ul>
			this.hasTransition = false;
			
			// add transition for the <ul>
			this.hasTransitionTimeout = setTimeout( function() {
				
				self._addTransition();

			}, 100 );

			// preload the images
			
			this.$el.imagesLoaded( function() {

				self.$el.show();

				self._layout();
				self._configure();
				
				if( self.hasTransition ) {

					// slide to current's position
					self._removeTransition();
					self._slideToItem( self.current );

					self.$el.on( self.transEndEventName, function() {

						self.$el.off( self.transEndEventName );
						self._setWrapperSize();
						// add transition for the <ul>
						self._addTransition();
						self._initEvents();

					} );

				}
				else {

					clearTimeout( self.hasTransitionTimeout );
					self._setWrapperSize();
					self._initEvents();
					// slide to current's position
					self._slideToItem( self.current );
					setTimeout( function() { self._addTransition(); }, 25 );

				}

				self.options.onReady();

			} );

		},
		_validate : function() {

			if( this.options.speed < 0 ) {

				this.options.speed = 500;

			}
			if( this.options.minItems < 1 || this.options.minItems > this.itemsCount ) {

				this.options.minItems = 1;

			}
			if( this.options.start < 0 || this.options.start > this.itemsCount - 1 ) {

				this.options.start = 0;

			}
			if( this.options.orientation != 'horizontal' && this.options.orientation != 'vertical' ) {

				this.options.orientation = 'horizontal';

			}
				
		},
		_layout : function() {

			this.$el.wrap( '<div class="elastislide-carousel"></div>' );

			this.$carousel = this.$el.parent();
			this.$wrapper = this.$carousel.parent().removeClass( 'elastislide-loading' );

			// save original image sizes
			var $img = this.$items.find( 'img:first' );
			this.imgSize = { width : $img.outerWidth( true ), height : $img.outerHeight( true ) };

			this._setItemsSize();
			this.options.orientation === 'horizontal' ? this.$el.css( 'max-height', this.imgSize.height ) : this.$el.css( 'height', this.options.minItems * this.imgSize.height );

			// add the controls
			this._addControls();

		},
		_addTransition : function() {

			if( this.support ) {

				this.$el.css( 'transition', 'all ' + this.options.speed + 'ms ' + this.options.easing );
				
			}
			this.hasTransition = true;

		},
		_removeTransition : function() {

			if( this.support ) {

				this.$el.css( 'transition', 'all 0s' );

			}
			this.hasTransition = false;
			
		},
		_addControls : function() {

			var self = this;

			// add navigation elements
			this.$navigation = $( '<nav><span class="elastislide-prev">Previous</span><span class="elastislide-next">Next</span></nav>' )
				.appendTo( this.$wrapper );


			this.$navPrev = this.$navigation.find( 'span.elastislide-prev' ).on( 'mousedown.elastislide', function( event ) {

				self._slide( 'prev' );
				return false;

			} );

			this.$navNext = this.$navigation.find( 'span.elastislide-next' ).on( 'mousedown.elastislide', function( event ) {

				self._slide( 'next' );
				return false;

			} );

		},
		_setItemsSize : function() {

			// width for the items (%)
			var w = this.options.orientation === 'horizontal' ? ( Math.floor( this.$carousel.width() / this.options.minItems ) * 100 ) / this.$carousel.width() : 100;
			
			this.$items.css( {
				'width' : w + '%',
				'max-width' : this.imgSize.width,
				'max-height' : this.imgSize.height
			} );

			if( this.options.orientation === 'vertical' ) {
			
				this.$wrapper.css( 'max-width', this.imgSize.width + parseInt( this.$wrapper.css( 'padding-left' ) ) + parseInt( this.$wrapper.css( 'padding-right' ) ) );
			
			}

		},
		_setWrapperSize : function() {

			if( this.options.orientation === 'vertical' ) {

				this.$wrapper.css( {
					'height' : this.options.minItems * this.imgSize.height + parseInt( this.$wrapper.css( 'padding-top' ) ) + parseInt( this.$wrapper.css( 'padding-bottom' ) )
				} );

			}

		},
		_configure : function() {

			// check how many items fit in the carousel (visible area -> this.$carousel.width() )
			this.fitCount = this.options.orientation === 'horizontal' ? 
								this.$carousel.width() < this.options.minItems * this.imgSize.width ? this.options.minItems : Math.floor( this.$carousel.width() / this.imgSize.width ) :
								this.$carousel.height() < this.options.minItems * this.imgSize.height ? this.options.minItems : Math.floor( this.$carousel.height() / this.imgSize.height );

		},
		_initEvents : function() {

			var self = this;

			$window.on( 'debouncedresize.elastislide', function() {

				self._setItemsSize();
				self._configure();
				self._slideToItem( self.current );

			} );

			this.$el.on( this.transEndEventName, function() {

				self._onEndTransition();

			} );

			if( this.options.orientation === 'horizontal' ) {

				this.$el.on( {
					swipeleft : function() {

						self._slide( 'next' );
					
					},
					swiperight : function() {

						self._slide( 'prev' );
					
					}
				} );

			}
			else {

				this.$el.on( {
					swipeup : function() {

						self._slide( 'next' );
					
					},
					swipedown : function() {

						self._slide( 'prev' );
					
					}
				} );

			}

			// item click event
			this.$el.on( 'click.elastislide', 'li', function( event ) {

				var $item = $( this );

				self.options.onClick( $item, $item.index(), event );
				
			});

		},
		_destroy : function( callback ) {
			
			this.$el.off( this.transEndEventName ).off( 'swipeleft swiperight swipeup swipedown .elastislide' );
			$window.off( '.elastislide' );
			
			this.$el.css( {
				'max-height' : 'none',
				'transition' : 'none'
			} ).unwrap( this.$carousel ).unwrap( this.$wrapper );

			this.$items.css( {
				'width' : 'auto',
				'max-width' : 'none',
				'max-height' : 'none'
			} );

			this.$navigation.remove();
			this.$wrapper.remove();

			if( callback ) {

				callback.call();

			}

		},
		_toggleControls : function( dir, display ) {

			if( display ) {

				( dir === 'next' ) ? this.$navNext.show() : this.$navPrev.show();

			}
			else {

				( dir === 'next' ) ? this.$navNext.hide() : this.$navPrev.hide();

			}
			
		},
		_slide : function( dir, tvalue ) {

			if( this.isSliding ) {

				return false;

			}
			
			this.options.onBeforeSlide();

			this.isSliding = true;

			var self = this,
				translation = this.translation || 0,
				// width/height of an item ( <li> )
				itemSpace = this.options.orientation === 'horizontal' ? this.$items.outerWidth( true ) : this.$items.outerHeight( true ),
				// total width/height of the <ul>
				totalSpace = this.itemsCount * itemSpace,
				// visible width/height
				visibleSpace = this.options.orientation === 'horizontal' ? this.$carousel.width() : this.$carousel.height();
			
			if( tvalue === undefined ) {
				
				var amount = this.fitCount * itemSpace;

				if( amount < 0 ) {

					return false;

				}

				if( dir === 'next' && totalSpace - ( Math.abs( translation ) + amount ) < visibleSpace ) {

					amount = totalSpace - ( Math.abs( translation ) + visibleSpace );

					// show / hide navigation buttons
					this._toggleControls( 'next', false );
					this._toggleControls( 'prev', true );

				}
				else if( dir === 'prev' && Math.abs( translation ) - amount < 0 ) {

					amount = Math.abs( translation );

					// show / hide navigation buttons
					this._toggleControls( 'next', true );
					this._toggleControls( 'prev', false );

				}
				else {
					
					// future translation value
					var ftv = dir === 'next' ? Math.abs( translation ) + Math.abs( amount ) : Math.abs( translation ) - Math.abs( amount );
					
					// show / hide navigation buttons
					ftv > 0 ? this._toggleControls( 'prev', true ) : this._toggleControls( 'prev', false );
					ftv < totalSpace - visibleSpace ? this._toggleControls( 'next', true ) : this._toggleControls( 'next', false );
						
				}
				
				tvalue = dir === 'next' ? translation - amount : translation + amount;

			}
			else {

				var amount = Math.abs( tvalue );

				if( Math.max( totalSpace, visibleSpace ) - amount < visibleSpace ) {

					tvalue	= - ( Math.max( totalSpace, visibleSpace ) - visibleSpace );
				
				}

				// show / hide navigation buttons
				amount > 0 ? this._toggleControls( 'prev', true ) : this._toggleControls( 'prev', false );
				Math.max( totalSpace, visibleSpace ) - visibleSpace > amount ? this._toggleControls( 'next', true ) : this._toggleControls( 'next', false );

			}
			
			this.translation = tvalue;

			if( translation === tvalue ) {
				
				this._onEndTransition();
				return false;

			}

			if( this.support ) {
				
				this.options.orientation === 'horizontal' ? this.$el.css( 'transform', 'translateX(' + tvalue + 'px)' ) : this.$el.css( 'transform', 'translateY(' + tvalue + 'px)' );

			}
			else {

				$.fn.applyStyle = this.hasTransition ? $.fn.animate : $.fn.css;
				var styleCSS = this.options.orientation === 'horizontal' ? { left : tvalue } : { top : tvalue };
				
				this.$el.stop().applyStyle( styleCSS, $.extend( true, [], { duration : this.options.speed, complete : function() {

					self._onEndTransition();
					
				} } ) );

			}
			
			if( !this.hasTransition ) {

				this._onEndTransition();

			}

		},
		_onEndTransition : function() {

			this.isSliding = false;
			this.options.onAfterSlide();

		},
		_slideTo : function( pos ) {

			var pos = pos || this.current,
				translation = Math.abs( this.translation ) || 0,
				itemSpace = this.options.orientation === 'horizontal' ? this.$items.outerWidth( true ) : this.$items.outerHeight( true ),
				posR = translation + this.$carousel.width(),
				ftv = Math.abs( pos * itemSpace );

			if( ftv + itemSpace > posR || ftv < translation ) {

				this._slideToItem( pos );
			
			}

		},
		_slideToItem : function( pos ) {

			// how much to slide?
			var amount	= this.options.orientation === 'horizontal' ? pos * this.$items.outerWidth( true ) : pos * this.$items.outerHeight( true );
			this._slide( '', -amount );
			
		},
		// public method: adds new items to the carousel
		/*
		
		how to use:
		var carouselEl = $( '#carousel' ),
			carousel = carouselEl.elastislide();
		...
		
		// append or prepend new items:
		carouselEl.prepend('<li><a href="#"><img src="images/large/2.jpg" alt="image02" /></a></li>');

		// call the add method:
		es.add();
		
		*/
		add : function( callback ) {
			
			var self = this,
				oldcurrent = this.current,
				$currentItem = this.$items.eq( this.current );
			
			// adds new items to the carousel
			this.$items = this.$el.children( 'li' );
			this.itemsCount = this.$items.length;
			this.current = $currentItem.index();
			this._setItemsSize();
			this._configure();
			this._removeTransition();
			oldcurrent < this.current ? this._slideToItem( this.current ) : this._slide( 'next', this.translation );
			setTimeout( function() { self._addTransition(); }, 25 );
			
			if ( callback ) {

				callback.call();

			}
			
		},
		// public method: sets a new element as the current. slides to that position
		setCurrent : function( idx, callback ) {
			
			this.current = idx;

			this._slideTo();
			
			if ( callback ) {

				callback.call();

			}
			
		},
		// public method: slides to the next set of items
		next : function() {

			self._slide( 'next' );

		},
		// public method: slides to the previous set of items
		previous : function() {

			self._slide( 'prev' );

		},
		// public method: slides to the first item
		slideStart : function() {

			this._slideTo( 0 );

		},
		// public method: slides to the last item
		slideEnd : function() {

			this._slideTo( this.itemsCount - 1 );

		},
		// public method: destroys the elastislide instance
		destroy : function( callback ) {

			this._destroy( callback );
		
		}

	};
	
	var logError = function( message ) {

		if ( window.console ) {

			window.console.error( message );
		
		}

	};
	
	$.fn.elastislide = function( options ) {

		var self = $.data( this, 'elastislide' );
		
		if ( typeof options === 'string' ) {
			
			var args = Array.prototype.slice.call( arguments, 1 );
			
			this.each(function() {
			
				if ( !self ) {

					logError( "cannot call methods on elastislide prior to initialization; " +
					"attempted to call method '" + options + "'" );
					return;
				
				}
				
				if ( !$.isFunction( self[options] ) || options.charAt(0) === "_" ) {

					logError( "no such method '" + options + "' for elastislide self" );
					return;
				
				}
				
				self[ options ].apply( self, args );
			
			});
		
		} 
		else {
		
			this.each(function() {
				
				if ( self ) {

					self._init();
				
				}
				else {

					self = $.data( this, 'elastislide', new $.Elastislide( options, this ) );
				
				}

			});
		
		}
		
		return self;
		
	};
	
} )( jQuery, window );
// END CARROUSEL JQUERY PRODUCTOS //

// COLLAPSIBLE PANEL 
// SpryCollapsiblePanel.js - version 0.8 - Spry Pre-Release 1.6.1
//
// Copyright (c) 2006. Adobe Systems Incorporated.
// All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are met:
//
//   * Redistributions of source code must retain the above copyright notice,
//     this list of conditions and the following disclaimer.
//   * Redistributions in binary form must reproduce the above copyright notice,
//     this list of conditions and the following disclaimer in the documentation
//     and/or other materials provided with the distribution.
//   * Neither the name of Adobe Systems Incorporated nor the names of its
//     contributors may be used to endorse or promote products derived from this
//     software without specific prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
// AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
// IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
// ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE
// LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
// CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
// SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
// INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
// CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
// ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
// POSSIBILITY OF SUCH DAMAGE.

(function() { // BeginSpryComponent

if (typeof Spry == "undefined") window.Spry = {}; if (!Spry.Widget) Spry.Widget = {};

Spry.Widget.CollapsiblePanel = function(element, opts)
{
	this.element = this.getElement(element);
	this.focusElement = null;
	this.hoverClass = "CollapsiblePanelTabHover";
	this.openClass = "CollapsiblePanelOpen";
	this.closedClass = "CollapsiblePanelClosed";
	this.focusedClass = "CollapsiblePanelFocused";
	this.enableAnimation = true;
	this.enableKeyboardNavigation = true;
	this.animator = null;
	this.hasFocus = false;
	this.contentIsOpen = true;

	this.openPanelKeyCode = Spry.Widget.CollapsiblePanel.KEY_DOWN;
	this.closePanelKeyCode = Spry.Widget.CollapsiblePanel.KEY_UP;

	Spry.Widget.CollapsiblePanel.setOptions(this, opts);

	this.attachBehaviors();
};

Spry.Widget.CollapsiblePanel.prototype.getElement = function(ele)
{
	if (ele && typeof ele == "string")
		return document.getElementById(ele);
	return ele;
};

Spry.Widget.CollapsiblePanel.prototype.addClassName = function(ele, className)
{
	if (!ele || !className || (ele.className && ele.className.search(new RegExp("\\b" + className + "\\b")) != -1))
		return;
	ele.className += (ele.className ? " " : "") + className;
};

Spry.Widget.CollapsiblePanel.prototype.removeClassName = function(ele, className)
{
	if (!ele || !className || (ele.className && ele.className.search(new RegExp("\\b" + className + "\\b")) == -1))
		return;
	ele.className = ele.className.replace(new RegExp("\\s*\\b" + className + "\\b", "g"), "");
};

Spry.Widget.CollapsiblePanel.prototype.hasClassName = function(ele, className)
{
	if (!ele || !className || !ele.className || ele.className.search(new RegExp("\\b" + className + "\\b")) == -1)
		return false;
	return true;
};

Spry.Widget.CollapsiblePanel.prototype.setDisplay = function(ele, display)
{
	if( ele )
		ele.style.display = display;
};

Spry.Widget.CollapsiblePanel.setOptions = function(obj, optionsObj, ignoreUndefinedProps)
{
	if (!optionsObj)
		return;
	for (var optionName in optionsObj)
	{
		if (ignoreUndefinedProps && optionsObj[optionName] == undefined)
			continue;
		obj[optionName] = optionsObj[optionName];
	}
};

Spry.Widget.CollapsiblePanel.prototype.onTabMouseOver = function(e)
{
	this.addClassName(this.getTab(), this.hoverClass);
	return false;
};

Spry.Widget.CollapsiblePanel.prototype.onTabMouseOut = function(e)
{
	this.removeClassName(this.getTab(), this.hoverClass);
	return false;
};

Spry.Widget.CollapsiblePanel.prototype.open = function()
{
	this.contentIsOpen = true;
	if (this.enableAnimation)
	{
		if (this.animator)
			this.animator.stop();
		this.animator = new Spry.Widget.CollapsiblePanel.PanelAnimator(this, true, { duration: this.duration, fps: this.fps, transition: this.transition });
		this.animator.start();
	}
	else
		this.setDisplay(this.getContent(), "block");

	this.removeClassName(this.element, this.closedClass);
	this.addClassName(this.element, this.openClass);
};

Spry.Widget.CollapsiblePanel.prototype.close = function()
{
	this.contentIsOpen = false;
	if (this.enableAnimation)
	{
		if (this.animator)
			this.animator.stop();
		this.animator = new Spry.Widget.CollapsiblePanel.PanelAnimator(this, false, { duration: this.duration, fps: this.fps, transition: this.transition });
		this.animator.start();
	}
	else
		this.setDisplay(this.getContent(), "none");

	this.removeClassName(this.element, this.openClass);
	this.addClassName(this.element, this.closedClass);
};

Spry.Widget.CollapsiblePanel.prototype.onTabClick = function(e)
{
	if (this.isOpen())
		this.close();
	else
		this.open();

	this.focus();

	return this.stopPropagation(e);
};

Spry.Widget.CollapsiblePanel.prototype.onFocus = function(e)
{
	this.hasFocus = true;
	this.addClassName(this.element, this.focusedClass);
	return false;
};

Spry.Widget.CollapsiblePanel.prototype.onBlur = function(e)
{
	this.hasFocus = false;
	this.removeClassName(this.element, this.focusedClass);
	return false;
};

Spry.Widget.CollapsiblePanel.KEY_UP = 38;
Spry.Widget.CollapsiblePanel.KEY_DOWN = 40;

Spry.Widget.CollapsiblePanel.prototype.onKeyDown = function(e)
{
	var key = e.keyCode;
	if (!this.hasFocus || (key != this.openPanelKeyCode && key != this.closePanelKeyCode))
		return true;

	if (this.isOpen() && key == this.closePanelKeyCode)
		this.close();
	else if ( key == this.openPanelKeyCode)
		this.open();
	
	return this.stopPropagation(e);
};

Spry.Widget.CollapsiblePanel.prototype.stopPropagation = function(e)
{
	if (e.preventDefault) e.preventDefault();
	else e.returnValue = false;
	if (e.stopPropagation) e.stopPropagation();
	else e.cancelBubble = true;
	return false;
};

Spry.Widget.CollapsiblePanel.prototype.attachPanelHandlers = function()
{
	var tab = this.getTab();
	if (!tab)
		return;

	var self = this;
	Spry.Widget.CollapsiblePanel.addEventListener(tab, "click", function(e) { return self.onTabClick(e); }, false);
	Spry.Widget.CollapsiblePanel.addEventListener(tab, "mouseover", function(e) { return self.onTabMouseOver(e); }, false);
	Spry.Widget.CollapsiblePanel.addEventListener(tab, "mouseout", function(e) { return self.onTabMouseOut(e); }, false);

	if (this.enableKeyboardNavigation)
	{
		// XXX: IE doesn't allow the setting of tabindex dynamically. This means we can't
		// rely on adding the tabindex attribute if it is missing to enable keyboard navigation
		// by default.

		// Find the first element within the tab container that has a tabindex or the first
		// anchor tag.
		
		var tabIndexEle = null;
		var tabAnchorEle = null;

		this.preorderTraversal(tab, function(node) {
			if (node.nodeType == 1 /* NODE.ELEMENT_NODE */)
			{
				var tabIndexAttr = tab.attributes.getNamedItem("tabindex");
				if (tabIndexAttr)
				{
					tabIndexEle = node;
					return true;
				}
				if (!tabAnchorEle && node.nodeName.toLowerCase() == "a")
					tabAnchorEle = node;
			}
			return false;
		});

		if (tabIndexEle)
			this.focusElement = tabIndexEle;
		else if (tabAnchorEle)
			this.focusElement = tabAnchorEle;

		if (this.focusElement)
		{
			Spry.Widget.CollapsiblePanel.addEventListener(this.focusElement, "focus", function(e) { return self.onFocus(e); }, false);
			Spry.Widget.CollapsiblePanel.addEventListener(this.focusElement, "blur", function(e) { return self.onBlur(e); }, false);
			Spry.Widget.CollapsiblePanel.addEventListener(this.focusElement, "keydown", function(e) { return self.onKeyDown(e); }, false);
		}
	}
};

Spry.Widget.CollapsiblePanel.addEventListener = function(element, eventType, handler, capture)
{
	try
	{
		if (element.addEventListener)
			element.addEventListener(eventType, handler, capture);
		else if (element.attachEvent)
			element.attachEvent("on" + eventType, handler);
	}
	catch (e) {}
};

Spry.Widget.CollapsiblePanel.prototype.preorderTraversal = function(root, func)
{
	var stopTraversal = false;
	if (root)
	{
		stopTraversal = func(root);
		if (root.hasChildNodes())
		{
			var child = root.firstChild;
			while (!stopTraversal && child)
			{
				stopTraversal = this.preorderTraversal(child, func);
				try { child = child.nextSibling; } catch (e) { child = null; }
			}
		}
	}
	return stopTraversal;
};

Spry.Widget.CollapsiblePanel.prototype.attachBehaviors = function()
{
	var panel = this.element;
	var tab = this.getTab();
	var content = this.getContent();

	if (this.contentIsOpen || this.hasClassName(panel, this.openClass))
	{
		this.addClassName(panel, this.openClass);
		this.removeClassName(panel, this.closedClass);
		this.setDisplay(content, "block");
		this.contentIsOpen = true;
	}
	else
	{
		this.removeClassName(panel, this.openClass);
		this.addClassName(panel, this.closedClass);
		this.setDisplay(content, "none");
		this.contentIsOpen = false;
	}

	this.attachPanelHandlers();
};

Spry.Widget.CollapsiblePanel.prototype.getTab = function()
{
	return this.getElementChildren(this.element)[0];
};

Spry.Widget.CollapsiblePanel.prototype.getContent = function()
{
	return this.getElementChildren(this.element)[1];
};

Spry.Widget.CollapsiblePanel.prototype.isOpen = function()
{
	return this.contentIsOpen;
};

Spry.Widget.CollapsiblePanel.prototype.getElementChildren = function(element)
{
	var children = [];
	var child = element.firstChild;
	while (child)
	{
		if (child.nodeType == 1 /* Node.ELEMENT_NODE */)
			children.push(child);
		child = child.nextSibling;
	}
	return children;
};

Spry.Widget.CollapsiblePanel.prototype.focus = function()
{
	if (this.focusElement && this.focusElement.focus)
		this.focusElement.focus();
};

/////////////////////////////////////////////////////

Spry.Widget.CollapsiblePanel.PanelAnimator = function(panel, doOpen, opts)
{
	this.timer = null;
	this.interval = 0;

	this.fps = 60;
	this.duration = 500;
	this.startTime = 0;

	this.transition = Spry.Widget.CollapsiblePanel.PanelAnimator.defaultTransition;

	this.onComplete = null;

	this.panel = panel;
	this.content = panel.getContent();
	this.doOpen = doOpen;

	Spry.Widget.CollapsiblePanel.setOptions(this, opts, true);

	this.interval = Math.floor(1000 / this.fps);

	var c = this.content;

	var curHeight = c.offsetHeight ? c.offsetHeight : 0;
	this.fromHeight = (doOpen && c.style.display == "none") ? 0 : curHeight;

	if (!doOpen)
		this.toHeight = 0;
	else
	{
		if (c.style.display == "none")
		{
			// The content area is not displayed so in order to calculate the extent
			// of the content inside it, we have to set its display to block.

			c.style.visibility = "hidden";
			c.style.display = "block";
		}

		// Clear the height property so we can calculate
		// the full height of the content we are going to show.

		c.style.height = "";
		this.toHeight = c.offsetHeight;
	}

	this.distance = this.toHeight - this.fromHeight;
	this.overflow = c.style.overflow;

	c.style.height = this.fromHeight + "px";
	c.style.visibility = "visible";
	c.style.overflow = "hidden";
	c.style.display = "block";
};

Spry.Widget.CollapsiblePanel.PanelAnimator.defaultTransition = function(time, begin, finish, duration) { time /= duration; return begin + ((2 - time) * time * finish); };

Spry.Widget.CollapsiblePanel.PanelAnimator.prototype.start = function()
{
	var self = this;
	this.startTime = (new Date).getTime();
	this.timer = setTimeout(function() { self.stepAnimation(); }, this.interval);
};

Spry.Widget.CollapsiblePanel.PanelAnimator.prototype.stop = function()
{
	if (this.timer)
	{
		clearTimeout(this.timer);

		// If we're killing the timer, restore the overflow property.

		this.content.style.overflow = this.overflow;
	}

	this.timer = null;
};

Spry.Widget.CollapsiblePanel.PanelAnimator.prototype.stepAnimation = function()
{
	var curTime = (new Date).getTime();
	var elapsedTime = curTime - this.startTime;

	if (elapsedTime >= this.duration)
	{
		if (!this.doOpen)
			this.content.style.display = "none";
		this.content.style.overflow = this.overflow;
		this.content.style.height = this.toHeight + "px";
		if (this.onComplete)
			this.onComplete();
		return;
	}

	var ht = this.transition(elapsedTime, this.fromHeight, this.distance, this.duration);

	this.content.style.height = ((ht < 0) ? 0 : ht) + "px";

	var self = this;
	this.timer = setTimeout(function() { self.stepAnimation(); }, this.interval);
};

Spry.Widget.CollapsiblePanelGroup = function(element, opts)
{
	this.element = this.getElement(element);
	this.opts = opts;

	this.attachBehaviors();
};

Spry.Widget.CollapsiblePanelGroup.prototype.setOptions = Spry.Widget.CollapsiblePanel.prototype.setOptions;
Spry.Widget.CollapsiblePanelGroup.prototype.getElement = Spry.Widget.CollapsiblePanel.prototype.getElement;
Spry.Widget.CollapsiblePanelGroup.prototype.getElementChildren = Spry.Widget.CollapsiblePanel.prototype.getElementChildren;

Spry.Widget.CollapsiblePanelGroup.prototype.setElementWidget = function(element, widget)
{
	if (!element || !widget)
		return;
	if (!element.spry)
		element.spry = new Object;
	element.spry.collapsiblePanel = widget;
};

Spry.Widget.CollapsiblePanelGroup.prototype.getElementWidget = function(element)
{
	return (element && element.spry && element.spry.collapsiblePanel) ? element.spry.collapsiblePanel : null;
};

Spry.Widget.CollapsiblePanelGroup.prototype.getPanels = function()
{
	if (!this.element)
		return [];
	return this.getElementChildren(this.element);
};

Spry.Widget.CollapsiblePanelGroup.prototype.getPanel = function(panelIndex)
{
	return this.getPanels()[panelIndex];
};

Spry.Widget.CollapsiblePanelGroup.prototype.attachBehaviors = function()
{
	if (!this.element)
		return;

	var cpanels = this.getPanels();
	var numCPanels = cpanels.length;
	for (var i = 0; i < numCPanels; i++)
	{
		var cpanel = cpanels[i];
		this.setElementWidget(cpanel, new Spry.Widget.CollapsiblePanel(cpanel, this.opts));
	}
};

Spry.Widget.CollapsiblePanelGroup.prototype.openPanel = function(panelIndex)
{
	var w = this.getElementWidget(this.getPanel(panelIndex));
	if (w && !w.isOpen())
		w.open();
};

Spry.Widget.CollapsiblePanelGroup.prototype.closePanel = function(panelIndex)
{
	var w = this.getElementWidget(this.getPanel(panelIndex));
	if (w && w.isOpen())
		w.close();
};

Spry.Widget.CollapsiblePanelGroup.prototype.openAllPanels = function()
{
	var cpanels = this.getPanels();
	var numCPanels = cpanels.length;
	for (var i = 0; i < numCPanels; i++)
	{
		var w = this.getElementWidget(cpanels[i]);
		if (w && !w.isOpen())
			w.open();
	}
};

Spry.Widget.CollapsiblePanelGroup.prototype.closeAllPanels = function()
{
	var cpanels = this.getPanels();
	var numCPanels = cpanels.length;
	for (var i = 0; i < numCPanels; i++)
	{
		var w = this.getElementWidget(cpanels[i]);
		if (w && w.isOpen())
			w.close();
	}
};

})(); // EndSpryComponent

// END COLLAPSIBLE PANEL 


// jquery.royalslider v9.4.92
(function(l){function t(b,f){var c,g,a=this,e=navigator.userAgent.toLowerCase();a.uid=l.rsModules.uid++;a.ns=".rs"+a.uid;var d=document.createElement("div").style,j=["webkit","Moz","ms","O"],h="",k=0;for(c=0;c<j.length;c++)g=j[c],!h&&g+"Transform"in d&&(h=g),g=g.toLowerCase(),window.requestAnimationFrame||(window.requestAnimationFrame=window[g+"RequestAnimationFrame"],window.cancelAnimationFrame=window[g+"CancelAnimationFrame"]||window[g+"CancelRequestAnimationFrame"]);window.requestAnimationFrame||
(window.requestAnimationFrame=function(a){var b=(new Date).getTime(),c=Math.max(0,16-(b-k)),d=window.setTimeout(function(){a(b+c)},c);k=b+c;return d});window.cancelAnimationFrame||(window.cancelAnimationFrame=function(a){clearTimeout(a)});a.isIPAD=e.match(/(ipad)/);j=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||0>e.indexOf("compatible")&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];c=j[1]||"";g=j[2]||"0";
j={};c&&(j[c]=!0,j.version=g);j.chrome&&(j.webkit=!0);a._a=j;a.isAndroid=-1<e.indexOf("android");a.slider=l(b);a.ev=l(a);a._b=l(document);a.st=l.extend({},l.fn.royalSlider.defaults,f);a._c=a.st.transitionSpeed;a._d=0;if(a.st.allowCSS3&&(!j.webkit||a.st.allowCSS3OnWebkit))e=h+(h?"T":"t"),a._e=e+"ransform"in d&&e+"ransition"in d,a._e&&(a._f=h+(h?"P":"p")+"erspective"in d);h=h.toLowerCase();a._g="-"+h+"-";a._h="vertical"===a.st.slidesOrientation?!1:!0;a._i=a._h?"left":"top";a._j=a._h?"width":"height";
a._k=-1;a._l="fade"===a.st.transitionType?!1:!0;a._l||(a.st.sliderDrag=!1,a._m=10);a._n="z-index:0; display:none; opacity:0;";a._o=0;a._p=0;a._q=0;l.each(l.rsModules,function(b,c){"uid"!==b&&c.call(a)});a.slides=[];a._r=0;(a.st.slides?l(a.st.slides):a.slider.children().detach()).each(function(){a._s(this,!0)});a.st.randomizeSlides&&a.slides.sort(function(){return 0.5-Math.random()});a.numSlides=a.slides.length;a._t();a.st.startSlideId?a.st.startSlideId>a.numSlides-1&&(a.st.startSlideId=a.numSlides-
1):a.st.startSlideId=0;a._o=a.staticSlideId=a.currSlideId=a._u=a.st.startSlideId;a.currSlide=a.slides[a.currSlideId];a._v=0;a.msTouch=!1;a.slider.addClass((a._h?"rsHor":"rsVer")+(a._l?"":" rsFade"));d='<div class="rsOverflow"><div class="rsContainer">';a.slidesSpacing=a.st.slidesSpacing;a._w=(a._h?a.slider.width():a.slider.height())+a.st.slidesSpacing;a._x=Boolean(0<a._y);1>=a.numSlides&&(a._z=!1);a._a1=a._z&&a._l?2===a.numSlides?1:2:0;a._b1=6>a.numSlides?a.numSlides:6;a._c1=0;a._d1=0;a.slidesJQ=
[];for(c=0;c<a.numSlides;c++)a.slidesJQ.push(l('<div style="'+(a._l?"":c!==a.currSlideId?a._n:"z-index:0;")+'" class="rsSlide "></div>'));a._e1=d=l(d+"</div></div>");h=a.ns;a.msEnabled=window.navigator.msPointerEnabled;a.msEnabled?(a.msTouch=Boolean(1<window.navigator.msMaxTouchPoints),a.hasTouch=!1,a._n1=0.2,a._j1="MSPointerDown"+h,a._k1="MSPointerMove"+h,a._l1="MSPointerUp"+h,a._m1="MSPointerCancel"+h):(a._j1="mousedown"+h,a._k1="mousemove"+h,a._l1="mouseup"+h,a._m1="mouseup"+h,"ontouchstart"in
window||"createTouch"in document?(a.hasTouch=!0,a._j1+=" touchstart"+h,a._k1+=" touchmove"+h,a._l1+=" touchend"+h,a._m1+=" touchcancel"+h,a._n1=0.5,a.st.sliderTouch&&(a._f1=!0)):(a.hasTouch=!1,a._n1=0.2));a.st.sliderDrag&&(a._f1=!0,j.msie||j.opera?a._g1=a._h1="move":j.mozilla?(a._g1="-moz-grab",a._h1="-moz-grabbing"):j.webkit&&-1!=navigator.platform.indexOf("Mac")&&(a._g1="-webkit-grab",a._h1="-webkit-grabbing"),a._i1());a.slider.html(d);a._o1=a.st.controlsInside?a._e1:a.slider;a._p1=a._e1.children(".rsContainer");
a.msEnabled&&a._p1.css("-ms-touch-action",a._h?"pan-y":"pan-x");a._q1=l('<div class="rsPreloader"></div>');d=a._p1.children(".rsSlide");a._r1=a.slidesJQ[a.currSlideId];a._s1=0;a._e?(a._t1="transition-property",a._u1="transition-duration",a._v1="transition-timing-function",a._w1=a._x1=a._g+"transform",a._f?(j.webkit&&!j.chrome&&a.slider.addClass("rsWebkit3d"),/iphone|ipad|ipod/gi.test(navigator.appVersion),a._y1="translate3d(",a._z1="px, ",a._a2="px, 0px)"):(a._y1="translate(",a._z1="px, ",a._a2="px)"),
a._l?a._p1[a._g+a._t1]=a._g+"transform":(h={},h[a._g+a._t1]="opacity",h[a._g+a._u1]=a.st.transitionSpeed+"ms",h[a._g+a._v1]=a.st.css3easeInOut,d.css(h))):(a._x1="left",a._w1="top");var n;l(window).on("resize"+a.ns,function(){n&&clearTimeout(n);n=setTimeout(function(){a.updateSliderSize()},50)});a.ev.trigger("rsAfterPropsSetup");a.updateSliderSize();a.st.keyboardNavEnabled&&a._b2();if(a.st.arrowsNavHideOnTouch&&(a.hasTouch||a.msTouch))a.st.arrowsNav=!1;a.st.arrowsNav&&(d=a._o1,l('<div class="rsArrow rsArrowLeft"><div class="rsArrowIcn"></div></div><div class="rsArrow rsArrowRight"><div class="rsArrowIcn"></div></div>').appendTo(d),
a._c2=d.children(".rsArrowLeft").click(function(b){b.preventDefault();a.prev()}),a._d2=d.children(".rsArrowRight").click(function(b){b.preventDefault();a.next()}),a.st.arrowsNavAutoHide&&!a.hasTouch&&(a._c2.addClass("rsHidden"),a._d2.addClass("rsHidden"),d.one("mousemove.arrowshover",function(){a._c2.removeClass("rsHidden");a._d2.removeClass("rsHidden")}),d.hover(function(){a._e2||(a._c2.removeClass("rsHidden"),a._d2.removeClass("rsHidden"))},function(){a._e2||(a._c2.addClass("rsHidden"),a._d2.addClass("rsHidden"))})),
a.ev.on("rsOnUpdateNav",function(){a._f2()}),a._f2());if(a._f1)a._p1.on(a._j1,function(b){a._g2(b)});else a.dragSuccess=!1;var m=["rsPlayBtnIcon","rsPlayBtn","rsCloseVideoBtn","rsCloseVideoIcn"];a._p1.click(function(b){if(!a.dragSuccess){var c=l(b.target).attr("class");if(-1!==l.inArray(c,m)&&a.toggleVideo())return!1;if(a.st.navigateByClick&&!a._h2){if(l(b.target).closest(".rsNoDrag",a._r1).length)return!0;a._i2(b)}a.ev.trigger("rsSlideClick")}}).on("click.rs","a",function(){if(a.dragSuccess)return!1;
a._h2=!0;setTimeout(function(){a._h2=!1},3)});a.ev.trigger("rsAfterInit")}l.rsModules||(l.rsModules={uid:0});t.prototype={constructor:t,_i2:function(b){b=b[this._h?"pageX":"pageY"]-this._j2;b>=this._q?this.next():0>b&&this.prev()},_t:function(){var b;b=this.st.numImagesToPreload;if(this._z=this.st.loop)2===this.numSlides?(this._z=!1,this.st.loopRewind=!0):2>this.numSlides&&(this.st.loopRewind=this._z=!1);this._z&&0<b&&(4>=this.numSlides?b=1:this.st.numImagesToPreload>(this.numSlides-1)/2&&(b=Math.floor((this.numSlides-
1)/2)));this._y=b},_s:function(b,f){function c(a,b){b?e.images.push(a.attr(b)):e.images.push(a.text());if(j){j=!1;e.caption="src"===b?a.attr("alt"):a.contents();e.image=e.images[0];e.videoURL=a.attr("data-rsVideo");var c=a.attr("data-rsw"),d=a.attr("data-rsh");"undefined"!==typeof c&&!1!==c&&"undefined"!==typeof d&&!1!==d?(e.iW=parseInt(c,10),e.iH=parseInt(d,10)):g.st.imgWidth&&g.st.imgHeight&&(e.iW=g.st.imgWidth,e.iH=g.st.imgHeight)}}var g=this,a,e={},d,j=!0;b=l(b);g._k2=b;g.ev.trigger("rsBeforeParseNode",
[b,e]);if(!e.stopParsing)return b=g._k2,e.id=g._r,e.contentAdded=!1,g._r++,e.images=[],e.isBig=!1,e.hasCover||(b.hasClass("rsImg")?(d=b,a=!0):(d=b.find(".rsImg"),d.length&&(a=!0)),a?(e.bigImage=d.eq(0).attr("data-rsBigImg"),d.each(function(){var a=l(this);a.is("a")?c(a,"href"):a.is("img")?c(a,"src"):c(a)})):b.is("img")&&(b.addClass("rsImg rsMainSlideImage"),c(b,"src"))),d=b.find(".rsCaption"),d.length&&(e.caption=d.remove()),e.content=b,g.ev.trigger("rsAfterParseNode",[b,e]),f&&g.slides.push(e),0===
e.images.length&&(e.isLoaded=!0,e.isRendered=!1,e.isLoading=!1,e.images=null),e},_b2:function(){var b=this,f,c,g=function(a){37===a?b.prev():39===a&&b.next()};b._b.on("keydown"+b.ns,function(a){if(!b._l2&&(c=a.keyCode,(37===c||39===c)&&!f))g(c),f=setInterval(function(){g(c)},700)}).on("keyup"+b.ns,function(){f&&(clearInterval(f),f=null)})},goTo:function(b,f){b!==this.currSlideId&&this._m2(b,this.st.transitionSpeed,!0,!f)},destroy:function(b){this.ev.trigger("rsBeforeDestroy");this._b.off("keydown"+
this.ns+" keyup"+this.ns+" "+this._k1+" "+this._l1);this._p1.off(this._j1+" click");this.slider.data("royalSlider",null);l.removeData(this.slider,"royalSlider");l(window).off("resize"+this.ns);b&&this.slider.remove();this.ev=this.slider=this.slides=null},_n2:function(b,f){function c(c,e,f){c.isAdded?(g(e,c),a(e,c)):(f||(f=d.slidesJQ[e]),c.holder?f=c.holder:(f=d.slidesJQ[e]=l(f),c.holder=f),c.appendOnLoaded=!1,a(e,c,f),g(e,c),d._p2(c,f,b),c.isAdded=!0)}function g(a,c){c.contentAdded||(d.setItemHtml(c,
b),b||(c.contentAdded=!0))}function a(a,b,c){d._l&&(c||(c=d.slidesJQ[a]),c.css(d._i,(a+d._d1+p)*d._w))}function e(a){if(k){if(a>n-1)return e(a-n);if(0>a)return e(n+a)}return a}var d=this,j,h,k=d._z,n=d.numSlides;if(!isNaN(f))return e(f);var m=d.currSlideId,p,q=b?Math.abs(d._o2-d.currSlideId)>=d.numSlides-1?0:1:d._y,r=Math.min(2,q),u=!1,t=!1,s;for(h=m;h<m+1+r;h++)if(s=e(h),(j=d.slides[s])&&(!j.isAdded||!j.positionSet)){u=!0;break}for(h=m-1;h>m-1-r;h--)if(s=e(h),(j=d.slides[s])&&(!j.isAdded||!j.positionSet)){t=
!0;break}if(u)for(h=m;h<m+q+1;h++)s=e(h),p=Math.floor((d._u-(m-h))/d.numSlides)*d.numSlides,(j=d.slides[s])&&c(j,s);if(t)for(h=m-1;h>m-1-q;h--)s=e(h),p=Math.floor((d._u-(m-h))/n)*n,(j=d.slides[s])&&c(j,s);if(!b){r=e(m-q);m=e(m+q);q=r>m?0:r;for(h=0;h<n;h++)if(!(r>m&&h>r-1)&&(h<q||h>m))if((j=d.slides[h])&&j.holder)j.holder.detach(),j.isAdded=!1}},setItemHtml:function(b,f){var c=this,g=function(){if(b.images){if(!b.isLoading){var e,f;b.content.hasClass("rsImg")?(e=b.content,f=!0):e=b.content.find(".rsImg:not(img)");
e&&!e.is("img")&&e.each(function(){var a=l(this),c='<img class="rsImg" src="'+(a.is("a")?a.attr("href"):a.text())+'" />';f?b.content=l(c):a.replaceWith(c)});e=f?b.content:b.content.find("img.rsImg");h();e.eq(0).addClass("rsMainSlideImage");b.iW&&b.iH&&(b.isLoaded||c._q2(b),d());b.isLoading=!0;if(b.isBig)l("<img />").on("load.rs error.rs",function(){l(this).off("load.rs error.rs");a([this],!0)}).attr("src",b.image);else{b.loaded=[];b.numStartedLoad=0;e=function(){l(this).off("load.rs error.rs");b.loaded.push(this);
b.loaded.length===b.numStartedLoad&&a(b.loaded,!1)};for(var g=0;g<b.images.length;g++){var j=l("<img />");b.numStartedLoad++;j.on("load.rs error.rs",e).attr("src",b.images[g])}}}}else b.isRendered=!0,b.isLoaded=!0,b.isLoading=!1,d(!0)},a=function(a,c){if(a.length){var d=a[0];if(c!==b.isBig)(d=b.holder.children())&&1<d.length&&k();else if(b.iW&&b.iH)e();else if(b.iW=d.width,b.iH=d.height,b.iW&&b.iH)e();else{var f=new Image;f.onload=function(){f.width?(b.iW=f.width,b.iH=f.height,e()):setTimeout(function(){f.width&&
(b.iW=f.width,b.iH=f.height);e()},1E3)};f.src=d.src}}else e()},e=function(){b.isLoaded=!0;b.isLoading=!1;d();k();j()},d=function(){if(!b.isAppended&&c.ev){var a=c.st.visibleNearby,d=b.id-c._o;if(!f&&!b.appendOnLoaded&&c.st.fadeinLoadedSlide&&(0===d||(a||c._r2||c._l2)&&(-1===d||1===d)))a={visibility:"visible",opacity:0},a[c._g+"transition"]="opacity 400ms ease-in-out",b.content.css(a),setTimeout(function(){b.content.css("opacity",1)},16);b.holder.find(".rsPreloader").length?b.holder.append(b.content):
b.holder.html(b.content);b.isAppended=!0;b.isLoaded&&(c._q2(b),j());b.sizeReady||(b.sizeReady=!0,setTimeout(function(){c.ev.trigger("rsMaybeSizeReady",b)},100))}},j=function(){!b.loadedTriggered&&c.ev&&(b.isLoaded=b.loadedTriggered=!0,b.holder.trigger("rsAfterContentSet"),c.ev.trigger("rsAfterContentSet",b))},h=function(){c.st.usePreloader&&b.holder.html(c._q1.clone())},k=function(){if(c.st.usePreloader){var a=b.holder.find(".rsPreloader");a.length&&a.remove()}};b.isLoaded?d():f?!c._l&&b.images&&
b.iW&&b.iH?g():(b.holder.isWaiting=!0,h(),b.holder.slideId=-99):g()},_p2:function(b){this._p1.append(b.holder);b.appendOnLoaded=!1},_g2:function(b,f){var c=this,g,a="touchstart"===b.type;c._s2=a;c.ev.trigger("rsDragStart");if(l(b.target).closest(".rsNoDrag",c._r1).length)return c.dragSuccess=!1,!0;!f&&c._r2&&(c._t2=!0,c._u2());c.dragSuccess=!1;if(c._l2)a&&(c._v2=!0);else{a&&(c._v2=!1);c._w2();if(a){var e=b.originalEvent.touches;if(e&&0<e.length)g=e[0],1<e.length&&(c._v2=!0);else return}else b.preventDefault(),
g=b,c.msEnabled&&(g=g.originalEvent);c._l2=!0;c._b.on(c._k1,function(a){c._x2(a,f)}).on(c._l1,function(a){c._y2(a,f)});c._z2="";c._a3=!1;c._b3=g.pageX;c._c3=g.pageY;c._d3=c._v=(!f?c._h:c._e3)?g.pageX:g.pageY;c._f3=0;c._g3=0;c._h3=!f?c._p:c._i3;c._j3=(new Date).getTime();if(a)c._e1.on(c._m1,function(a){c._y2(a,f)})}},_k3:function(b,f){if(this._l3){var c=this._m3,g=b.pageX-this._b3,a=b.pageY-this._c3,e=this._h3+g,d=this._h3+a,j=!f?this._h:this._e3,e=j?e:d,d=this._z2;this._a3=!0;this._b3=b.pageX;this._c3=
b.pageY;"x"===d&&0!==g?this._f3=0<g?1:-1:"y"===d&&0!==a&&(this._g3=0<a?1:-1);d=j?this._b3:this._c3;g=j?g:a;f?e>this._n3?e=this._h3+g*this._n1:e<this._o3&&(e=this._h3+g*this._n1):this._z||(0>=this.currSlideId&&0<d-this._d3&&(e=this._h3+g*this._n1),this.currSlideId>=this.numSlides-1&&0>d-this._d3&&(e=this._h3+g*this._n1));this._h3=e;200<c-this._j3&&(this._j3=c,this._v=d);f?this._q3(this._h3):this._l&&this._p3(this._h3)}},_x2:function(b,f){var c=this,g,a="touchmove"===b.type;if(!c._s2||a){if(a){if(c._r3)return;
var e=b.originalEvent.touches;if(e){if(1<e.length)return;g=e[0]}else return}else g=b,c.msEnabled&&(g=g.originalEvent);c._a3||(c._e&&(!f?c._p1:c._s3).css(c._g+c._u1,"0s"),function j(){c._l2&&(c._t3=requestAnimationFrame(j),c._u3&&c._k3(c._u3,f))}());if(c._l3)b.preventDefault(),c._m3=(new Date).getTime(),c._u3=g;else if(e=!f?c._h:c._e3,g=Math.abs(g.pageX-c._b3)-Math.abs(g.pageY-c._c3)-(e?-7:7),7<g){if(e)b.preventDefault(),c._z2="x";else if(a){c._v3();return}c._l3=!0}else if(-7>g){if(e){if(a){c._v3();
return}}else b.preventDefault(),c._z2="y";c._l3=!0}}},_v3:function(){this._r3=!0;this._a3=this._l2=!1;this._y2()},_y2:function(b,f){function c(a){return 100>a?100:500<a?500:a}function g(b,d){if(a._l||f)j=(-a._u-a._d1)*a._w,h=Math.abs(a._p-j),a._c=h/d,b&&(a._c+=250),a._c=c(a._c),a._x3(j,!1)}var a=this,e,d,j,h;d="touchend"===b.type||"touchcancel"===b.type;if(!a._s2||d)if(a._s2=!1,a.ev.trigger("rsDragRelease"),a._u3=null,a._l2=!1,a._r3=!1,a._l3=!1,a._m3=0,cancelAnimationFrame(a._t3),a._a3&&(f?a._q3(a._h3):
a._l&&a._p3(a._h3)),a._b.off(a._k1).off(a._l1),d&&a._e1.off(a._m1),a._i1(),!a._a3&&!a._v2&&f&&a._w3){var k=l(b.target).closest(".rsNavItem");k.length&&a.goTo(k.index())}else{e=!f?a._h:a._e3;if(!a._a3||"y"===a._z2&&e||"x"===a._z2&&!e)if(!f&&a._t2){a._t2=!1;if(a.st.navigateByClick){a._i2(a.msEnabled?b.originalEvent:b);a.dragSuccess=!0;return}a.dragSuccess=!0}else{a._t2=!1;a.dragSuccess=!1;return}else a.dragSuccess=!0;a._t2=!1;a._z2="";var n=a.st.minSlideOffset;d=d?b.originalEvent.changedTouches[0]:
a.msEnabled?b.originalEvent:b;var m=e?d.pageX:d.pageY,p=a._d3;d=a._v;var q=a.currSlideId,r=a.numSlides,u=e?a._f3:a._g3,t=a._z;Math.abs(m-p);e=m-d;d=(new Date).getTime()-a._j3;d=Math.abs(e)/d;if(0===u||1>=r)g(!0,d);else{if(!t&&!f)if(0>=q){if(0<u){g(!0,d);return}}else if(q>=r-1&&0>u){g(!0,d);return}if(f){j=a._i3;if(j>a._n3)j=a._n3;else if(j<a._o3)j=a._o3;else{n=d*d/0.006;k=-a._i3;m=a._y3-a._z3+a._i3;0<e&&n>k?(k+=a._z3/(15/(0.003*(n/d))),d=d*k/n,n=k):0>e&&n>m&&(m+=a._z3/(15/(0.003*(n/d))),d=d*m/n,n=
m);k=Math.max(Math.round(d/0.003),50);j+=n*(0>e?-1:1);if(j>a._n3){a._a4(j,k,!0,a._n3,200);return}if(j<a._o3){a._a4(j,k,!0,a._o3,200);return}}a._a4(j,k,!0)}else p+n<m?0>u?g(!1,d):a._m2("prev",c(Math.abs(a._p-(-a._u-a._d1+1)*a._w)/d),!1,!0,!0):p-n>m?0<u?g(!1,d):a._m2("next",c(Math.abs(a._p-(-a._u-a._d1-1)*a._w)/d),!1,!0,!0):g(!1,d)}}},_p3:function(b){b=this._p=b;this._e?this._p1.css(this._x1,this._y1+(this._h?b+this._z1+0:0+this._z1+b)+this._a2):this._p1.css(this._h?this._x1:this._w1,b)},updateSliderSize:function(b){var f,
c;if(this.st.autoScaleSlider){var g=this.st.autoScaleSliderWidth,a=this.st.autoScaleSliderHeight;this.st.autoScaleHeight?(f=this.slider.width(),f!=this.width&&(this.slider.css("height",f*(a/g)),f=this.slider.width()),c=this.slider.height()):(c=this.slider.height(),c!=this.height&&(this.slider.css("width",c*(g/a)),c=this.slider.height()),f=this.slider.width())}else f=this.slider.width(),c=this.slider.height();if(b||f!=this.width||c!=this.height){this.width=f;this.height=c;this._b4=f;this._c4=c;this.ev.trigger("rsBeforeSizeSet");
this.ev.trigger("rsAfterSizePropSet");this._e1.css({width:this._b4,height:this._c4});this._w=(this._h?this._b4:this._c4)+this.st.slidesSpacing;this._d4=this.st.imageScalePadding;for(f=0;f<this.slides.length;f++)b=this.slides[f],b.positionSet=!1,b&&(b.images&&b.isLoaded)&&(b.isRendered=!1,this._q2(b));if(this._e4)for(f=0;f<this._e4.length;f++)b=this._e4[f],b.holder.css(this._i,(b.id+this._d1)*this._w);this._n2();this._l&&(this._e&&this._p1.css(this._g+"transition-duration","0s"),this._p3((-this._u-
this._d1)*this._w));this.ev.trigger("rsOnUpdateNav")}this._j2=this._e1.offset();this._j2=this._j2[this._i]},appendSlide:function(b,f){var c=this._s(b);if(isNaN(f)||f>this.numSlides)f=this.numSlides;this.slides.splice(f,0,c);this.slidesJQ.splice(f,0,'<div style="'+(this._l?"position:absolute;":this._n)+'" class="rsSlide"></div>');f<this.currSlideId&&this.currSlideId++;this.ev.trigger("rsOnAppendSlide",[c,f]);this._f4(f);f===this.currSlideId&&this.ev.trigger("rsAfterSlideChange")},removeSlide:function(b){var f=
this.slides[b];f&&(f.holder&&f.holder.remove(),b<this.currSlideId&&this.currSlideId--,this.slides.splice(b,1),this.slidesJQ.splice(b,1),this.ev.trigger("rsOnRemoveSlide",[b]),this._f4(b),b===this.currSlideId&&this.ev.trigger("rsAfterSlideChange"))},_f4:function(){var b=this,f=b.numSlides,f=0>=b._u?0:Math.floor(b._u/f);b.numSlides=b.slides.length;0===b.numSlides?(b.currSlideId=b._d1=b._u=0,b.currSlide=b._g4=null):b._u=f*b.numSlides+b.currSlideId;for(f=0;f<b.numSlides;f++)b.slides[f].id=f;b.currSlide=
b.slides[b.currSlideId];b._r1=b.slidesJQ[b.currSlideId];b.currSlideId>=b.numSlides?b.goTo(b.numSlides-1):0>b.currSlideId&&b.goTo(0);b._t();b._l&&b._z&&b._p1.css(b._g+b._u1,"0ms");b._h4&&clearTimeout(b._h4);b._h4=setTimeout(function(){b._l&&b._p3((-b._u-b._d1)*b._w);b._n2();b._l||b._r1.css({display:"block",opacity:1})},14);b.ev.trigger("rsOnUpdateNav")},_i1:function(){this._f1&&this._l&&(this._g1?this._e1.css("cursor",this._g1):(this._e1.removeClass("grabbing-cursor"),this._e1.addClass("grab-cursor")))},
_w2:function(){this._f1&&this._l&&(this._h1?this._e1.css("cursor",this._h1):(this._e1.removeClass("grab-cursor"),this._e1.addClass("grabbing-cursor")))},next:function(b){this._m2("next",this.st.transitionSpeed,!0,!b)},prev:function(b){this._m2("prev",this.st.transitionSpeed,!0,!b)},_m2:function(b,f,c,g,a){var e=this,d,j,h;e.ev.trigger("rsBeforeMove",[b,g]);h="next"===b?e.currSlideId+1:"prev"===b?e.currSlideId-1:b=parseInt(b,10);if(!e._z){if(0>h){e._i4("left",!g);return}if(h>=e.numSlides){e._i4("right",
!g);return}}e._r2&&(e._u2(!0),c=!1);j=h-e.currSlideId;h=e._o2=e.currSlideId;var k=e.currSlideId+j;g=e._u;var l;e._z?(k=e._n2(!1,k),g+=j):g=k;e._o=k;e._g4=e.slidesJQ[e.currSlideId];e._u=g;e.currSlideId=e._o;e.currSlide=e.slides[e.currSlideId];e._r1=e.slidesJQ[e.currSlideId];var k=e.st.slidesDiff,m=Boolean(0<j);j=Math.abs(j);var p=Math.floor(h/e._y),q=Math.floor((h+(m?k:-k))/e._y),p=(m?Math.max(p,q):Math.min(p,q))*e._y+(m?e._y-1:0);p>e.numSlides-1?p=e.numSlides-1:0>p&&(p=0);h=m?p-h:h-p;h>e._y&&(h=e._y);
if(j>h+k){e._d1+=(j-(h+k))*(m?-1:1);f*=1.4;for(h=0;h<e.numSlides;h++)e.slides[h].positionSet=!1}e._c=f;e._n2(!0);a||(l=!0);d=(-g-e._d1)*e._w;l?setTimeout(function(){e._j4=!1;e._x3(d,b,!1,c);e.ev.trigger("rsOnUpdateNav")},0):(e._x3(d,b,!1,c),e.ev.trigger("rsOnUpdateNav"))},_f2:function(){this.st.arrowsNav&&(1>=this.numSlides?(this._c2.css("display","none"),this._d2.css("display","none")):(this._c2.css("display","block"),this._d2.css("display","block"),!this._z&&!this.st.loopRewind&&(0===this.currSlideId?
this._c2.addClass("rsArrowDisabled"):this._c2.removeClass("rsArrowDisabled"),this.currSlideId===this.numSlides-1?this._d2.addClass("rsArrowDisabled"):this._d2.removeClass("rsArrowDisabled"))))},_x3:function(b,f,c,g,a){function e(){var a;if(j&&(a=j.data("rsTimeout")))j!==h&&j.css({opacity:0,display:"none",zIndex:0}),clearTimeout(a),j.data("rsTimeout","");if(a=h.data("rsTimeout"))clearTimeout(a),h.data("rsTimeout","")}var d=this,j,h,k={};isNaN(d._c)&&(d._c=400);d._p=d._h3=b;d.ev.trigger("rsBeforeAnimStart");
d._e?d._l?(d._c=parseInt(d._c,10),c=d._g+d._v1,k[d._g+d._u1]=d._c+"ms",k[c]=g?l.rsCSS3Easing[d.st.easeInOut]:l.rsCSS3Easing[d.st.easeOut],d._p1.css(k),g||!d.hasTouch?setTimeout(function(){d._p3(b)},5):d._p3(b)):(d._c=d.st.transitionSpeed,j=d._g4,h=d._r1,h.data("rsTimeout")&&h.css("opacity",0),e(),j&&j.data("rsTimeout",setTimeout(function(){k[d._g+d._u1]="0ms";k.zIndex=0;k.display="none";j.data("rsTimeout","");j.css(k);setTimeout(function(){j.css("opacity",0)},16)},d._c+60)),k.display="block",k.zIndex=
d._m,k.opacity=0,k[d._g+d._u1]="0ms",k[d._g+d._v1]=l.rsCSS3Easing[d.st.easeInOut],h.css(k),h.data("rsTimeout",setTimeout(function(){h.css(d._g+d._u1,d._c+"ms");h.data("rsTimeout",setTimeout(function(){h.css("opacity",1);h.data("rsTimeout","")},20))},20))):d._l?(k[d._h?d._x1:d._w1]=b+"px",d._p1.animate(k,d._c,g?d.st.easeInOut:d.st.easeOut)):(j=d._g4,h=d._r1,h.stop(!0,!0).css({opacity:0,display:"block",zIndex:d._m}),d._c=d.st.transitionSpeed,h.animate({opacity:1},d._c,d.st.easeInOut),e(),j&&j.data("rsTimeout",
setTimeout(function(){j.stop(!0,!0).css({opacity:0,display:"none",zIndex:0})},d._c+60)));d._r2=!0;d.loadingTimeout&&clearTimeout(d.loadingTimeout);d.loadingTimeout=a?setTimeout(function(){d.loadingTimeout=null;a.call()},d._c+60):setTimeout(function(){d.loadingTimeout=null;d._k4(f)},d._c+60)},_u2:function(b){this._r2=!1;clearTimeout(this.loadingTimeout);if(this._l)if(this._e){if(!b){b=this._p;var f=this._h3=this._l4();this._p1.css(this._g+this._u1,"0ms");b!==f&&this._p3(f)}}else this._p1.stop(!0),
this._p=parseInt(this._p1.css(this._x1),10);else 20<this._m?this._m=10:this._m++},_l4:function(){var b=window.getComputedStyle(this._p1.get(0),null).getPropertyValue(this._g+"transform").replace(/^matrix\(/i,"").split(/, |\)$/g),f=0===b[0].indexOf("matrix3d");return parseInt(b[this._h?f?12:4:f?13:5],10)},_m4:function(b,f){return this._e?this._y1+(f?b+this._z1+0:0+this._z1+b)+this._a2:b},_k4:function(){this._l||(this._r1.css("z-index",0),this._m=10);this._r2=!1;this.staticSlideId=this.currSlideId;
this._n2();this._n4=!1;this.ev.trigger("rsAfterSlideChange")},_i4:function(b,f){var c=this,g=(-c._u-c._d1)*c._w;if(!(0===c.numSlides||c._r2))if(c.st.loopRewind)c.goTo("left"===b?c.numSlides-1:0,f);else if(c._l){c._c=200;var a=function(){c._r2=!1};c._x3(g+("left"===b?30:-30),"",!1,!0,function(){c._r2=!1;c._x3(g,"",!1,!0,a)})}},_q2:function(b){if(!b.isRendered){var f=b.content,c="rsMainSlideImage",g,a=this.st.imageAlignCenter,e=this.st.imageScaleMode,d;b.videoURL&&(c="rsVideoContainer","fill"!==e?g=
!0:(d=f,d.hasClass(c)||(d=d.find("."+c)),d.css({width:"100%",height:"100%"}),c="rsMainSlideImage"));f.hasClass(c)||(f=f.find("."+c));if(f){var j=b.iW,c=b.iH;b.isRendered=!0;if("none"!==e||a){b="fill"!==e?this._d4:0;d=this._b4-2*b;var h=this._c4-2*b,k,l,m={};if("fit-if-smaller"===e&&(j>d||c>h))e="fit";if("fill"===e||"fit"===e)k=d/j,l=h/c,k="fill"==e?k>l?k:l:"fit"==e?k<l?k:l:1,j=Math.ceil(j*k,10),c=Math.ceil(c*k,10);"none"!==e&&(m.width=j,m.height=c,g&&f.find(".rsImg").css({width:"100%",height:"100%"}));
a&&(m.marginLeft=Math.floor((d-j)/2)+b,m.marginTop=Math.floor((h-c)/2)+b);f.css(m)}}}}};l.rsProto=t.prototype;l.fn.royalSlider=function(b){var f=arguments;return this.each(function(){var c=l(this);if("object"===typeof b||!b)c.data("royalSlider")||c.data("royalSlider",new t(c,b));else if((c=c.data("royalSlider"))&&c[b])return c[b].apply(c,Array.prototype.slice.call(f,1))})};l.fn.royalSlider.defaults={slidesSpacing:8,startSlideId:0,loop:!1,loopRewind:!1,numImagesToPreload:4,fadeinLoadedSlide:!0,slidesOrientation:"horizontal",
transitionType:"move",transitionSpeed:600,controlNavigation:"bullets",controlsInside:!0,arrowsNav:!0,arrowsNavAutoHide:!0,navigateByClick:!0,randomizeSlides:!1,sliderDrag:!0,sliderTouch:!0,keyboardNavEnabled:!1,fadeInAfterLoaded:!0,allowCSS3:!0,allowCSS3OnWebkit:!0,addActiveClass:!1,autoHeight:!1,easeOut:"easeOutSine",easeInOut:"easeInOutSine",minSlideOffset:10,imageScaleMode:"fit-if-smaller",imageAlignCenter:!0,imageScalePadding:4,usePreloader:!0,autoScaleSlider:!1,autoScaleSliderWidth:800,autoScaleSliderHeight:400,
autoScaleHeight:!0,arrowsNavHideOnTouch:!1,globalCaption:!1,slidesDiff:2};l.rsCSS3Easing={easeOutSine:"cubic-bezier(0.390, 0.575, 0.565, 1.000)",easeInOutSine:"cubic-bezier(0.445, 0.050, 0.550, 0.950)"};l.extend(jQuery.easing,{easeInOutSine:function(b,f,c,g,a){return-g/2*(Math.cos(Math.PI*f/a)-1)+c},easeOutSine:function(b,f,c,g,a){return g*Math.sin(f/a*(Math.PI/2))+c},easeOutCubic:function(b,f,c,g,a){return g*((f=f/a-1)*f*f+1)+c}})})(jQuery,window);
// jquery.rs.active-class v1.0.1
(function(c){c.rsProto._o4=function(){var b,a=this;if(a.st.addActiveClass)a.ev.on("rsOnUpdateNav",function(){b&&clearTimeout(b);b=setTimeout(function(){a._g4&&a._g4.removeClass("rsActiveSlide");a._r1&&a._r1.addClass("rsActiveSlide");b=null},50)})};c.rsModules.activeClass=c.rsProto._o4})(jQuery);
// jquery.rs.animated-blocks v1.0.7
(function(j){j.extend(j.rsProto,{_p4:function(){function l(){var g=a.currSlide;if(a.currSlide&&a.currSlide.isLoaded&&a._t4!==g){if(0<a._s4.length){for(b=0;b<a._s4.length;b++)clearTimeout(a._s4[b]);a._s4=[]}if(0<a._r4.length){var f;for(b=0;b<a._r4.length;b++)if(f=a._r4[b])a._e?(f.block.css(a._g+a._u1,"0s"),f.block.css(f.css)):f.block.stop(!0).css(f.css),a._t4=null,g.animBlocksDisplayed=!1;a._r4=[]}g.animBlocks&&(g.animBlocksDisplayed=!0,a._t4=g,a._u4(g.animBlocks))}}var a=this,b;a._q4={fadeEffect:!0,
moveEffect:"top",moveOffset:20,speed:400,easing:"easeOutSine",delay:200};a.st.block=j.extend({},a._q4,a.st.block);a._r4=[];a._s4=[];a.ev.on("rsAfterInit",function(){l()});a.ev.on("rsBeforeParseNode",function(a,b,d){b=j(b);d.animBlocks=b.find(".rsABlock").css("display","none");d.animBlocks.length||(d.animBlocks=b.hasClass("rsABlock")?b.css("display","none"):!1)});a.ev.on("rsAfterContentSet",function(b,f){f.id===a.slides[a.currSlideId].id&&setTimeout(function(){l()},a.st.fadeinLoadedSlide?300:0)});
a.ev.on("rsAfterSlideChange",function(){l()})},_v4:function(j,a){setTimeout(function(){j.css(a)},6)},_u4:function(l){var a=this,b,g,f,d,h,e,m;a._s4=[];l.each(function(l){b=j(this);g={};f={};d=null;var c=b.attr("data-move-offset"),c=c?parseInt(c,10):a.st.block.moveOffset;if(0<c&&((e=b.data("move-effect"))?(e=e.toLowerCase(),"none"===e?e=!1:"left"!==e&&("top"!==e&&"bottom"!==e&&"right"!==e)&&(e=a.st.block.moveEffect,"none"===e&&(e=!1))):e=a.st.block.moveEffect,e&&"none"!==e)){var n;n="right"===e||"left"===
e?!0:!1;var k;m=!1;a._e?(k=0,h=a._x1):(n?isNaN(parseInt(b.css("right"),10))?h="left":(h="right",m=!0):isNaN(parseInt(b.css("bottom"),10))?h="top":(h="bottom",m=!0),h="margin-"+h,m&&(c=-c),a._e?k=parseInt(b.css(h),10):(k=b.data("rs-start-move-prop"),void 0===k&&(k=parseInt(b.css(h),10),b.data("rs-start-move-prop",k))));f[h]=a._m4("top"===e||"left"===e?k-c:k+c,n);g[h]=a._m4(k,n)}if(c=b.attr("data-fade-effect")){if("none"===c.toLowerCase()||"false"===c.toLowerCase())c=!1}else c=a.st.block.fadeEffect;
c&&(f.opacity=0,g.opacity=1);if(c||e)d={},d.hasFade=Boolean(c),Boolean(e)&&(d.moveProp=h,d.hasMove=!0),d.speed=b.data("speed"),isNaN(d.speed)&&(d.speed=a.st.block.speed),d.easing=b.data("easing"),d.easing||(d.easing=a.st.block.easing),d.css3Easing=j.rsCSS3Easing[d.easing],d.delay=b.data("delay"),isNaN(d.delay)&&(d.delay=a.st.block.delay*l);c={};a._e&&(c[a._g+a._u1]="0ms");c.moveProp=g.moveProp;c.opacity=g.opacity;c.display="none";a._r4.push({block:b,css:c});a._v4(b,f);a._s4.push(setTimeout(function(b,
d,c,e){return function(){b.css("display","block");if(c){var g={};if(a._e){var f="";c.hasMove&&(f+=c.moveProp);c.hasFade&&(c.hasMove&&(f+=", "),f+="opacity");g[a._g+a._t1]=f;g[a._g+a._u1]=c.speed+"ms";g[a._g+a._v1]=c.css3Easing;b.css(g);setTimeout(function(){b.css(d)},24)}else setTimeout(function(){b.animate(d,c.speed,c.easing)},16)}delete a._s4[e]}}(b,g,d,l),6>=d.delay?12:d.delay))})}});j.rsModules.animatedBlocks=j.rsProto._p4})(jQuery);
// jquery.rs.auto-height v1.0.2
(function(b){b.extend(b.rsProto,{_w4:function(){var a=this;if(a.st.autoHeight){var b,d,e,c=function(c){e=a.slides[a.currSlideId];if(b=e.holder)if((d=b.height())&&void 0!==d)a._c4=d,a._e||!c?a._e1.css("height",d):a._e1.stop(!0,!0).animate({height:d},a.st.transitionSpeed)};a.ev.on("rsMaybeSizeReady.rsAutoHeight",function(a,b){e===b&&c()});a.ev.on("rsAfterContentSet.rsAutoHeight",function(a,b){e===b&&c()});a.slider.addClass("rsAutoHeight");a.ev.one("rsAfterInit",function(){setTimeout(function(){c(!1);
setTimeout(function(){a.slider.append('<div style="clear:both; float: none;"></div>');a._e&&a._e1.css(a._g+"transition","height "+a.st.transitionSpeed+"ms ease-in-out")},16)},16)});a.ev.on("rsBeforeAnimStart",function(){c(!0)});a.ev.on("rsBeforeSizeSet",function(){setTimeout(function(){c(!1)},16)})}}});b.rsModules.autoHeight=b.rsProto._w4})(jQuery);
// jquery.rs.autoplay v1.0.5
(function(b){b.extend(b.rsProto,{_x4:function(){var a=this,d;a._y4={enabled:!1,stopAtAction:!0,pauseOnHover:!0,delay:2E3};!a.st.autoPlay&&a.st.autoplay&&(a.st.autoPlay=a.st.autoplay);a.st.autoPlay=b.extend({},a._y4,a.st.autoPlay);a.st.autoPlay.enabled&&(a.ev.on("rsBeforeParseNode",function(a,c,f){c=b(c);if(d=c.attr("data-rsDelay"))f.customDelay=parseInt(d,10)}),a.ev.one("rsAfterInit",function(){a._z4()}),a.ev.on("rsBeforeDestroy",function(){a.stopAutoPlay();a.slider.off("mouseenter mouseleave");b(window).off("blur"+
a.ns+" focus"+a.ns)}))},_z4:function(){var a=this;a.startAutoPlay();a.ev.on("rsAfterContentSet",function(b,e){!a._l2&&(!a._r2&&a._a5&&e===a.currSlide)&&a._b5()});a.ev.on("rsDragRelease",function(){a._a5&&a._c5&&(a._c5=!1,a._b5())});a.ev.on("rsAfterSlideChange",function(){a._a5&&a._c5&&(a._c5=!1,a.currSlide.isLoaded&&a._b5())});a.ev.on("rsDragStart",function(){a._a5&&(a.st.autoPlay.stopAtAction?a.stopAutoPlay():(a._c5=!0,a._d5()))});a.ev.on("rsBeforeMove",function(b,e,c){a._a5&&(c&&a.st.autoPlay.stopAtAction?
a.stopAutoPlay():(a._c5=!0,a._d5()))});a._e5=!1;a.ev.on("rsVideoStop",function(){a._a5&&(a._e5=!1,a._b5())});a.ev.on("rsVideoPlay",function(){a._a5&&(a._c5=!1,a._d5(),a._e5=!0)});b(window).on("blur"+a.ns,function(){a._a5&&(a._c5=!0,a._d5())}).on("focus"+a.ns,function(){a._a5&&a._c5&&(a._c5=!1,a._b5())});a.st.autoPlay.pauseOnHover&&(a._f5=!1,a.slider.hover(function(){a._a5&&(a._c5=!1,a._d5(),a._f5=!0)},function(){a._a5&&(a._f5=!1,a._b5())}))},toggleAutoPlay:function(){this._a5?this.stopAutoPlay():
this.startAutoPlay()},startAutoPlay:function(){this._a5=!0;this.currSlide.isLoaded&&this._b5()},stopAutoPlay:function(){this._e5=this._f5=this._c5=this._a5=!1;this._d5()},_b5:function(){var a=this;!a._f5&&!a._e5&&(a._g5=!0,a._h5&&clearTimeout(a._h5),a._h5=setTimeout(function(){var b;!a._z&&!a.st.loopRewind&&(b=!0,a.st.loopRewind=!0);a.next(!0);b&&(a.st.loopRewind=!1)},!a.currSlide.customDelay?a.st.autoPlay.delay:a.currSlide.customDelay))},_d5:function(){!this._f5&&!this._e5&&(this._g5=!1,this._h5&&
(clearTimeout(this._h5),this._h5=null))}});b.rsModules.autoplay=b.rsProto._x4})(jQuery);
// jquery.rs.bullets v1.0.1
(function(c){c.extend(c.rsProto,{_i5:function(){var a=this;"bullets"===a.st.controlNavigation&&(a.ev.one("rsAfterPropsSetup",function(){a._j5=!0;a.slider.addClass("rsWithBullets");for(var b='<div class="rsNav rsBullets">',e=0;e<a.numSlides;e++)b+='<div class="rsNavItem rsBullet"><span></span></div>';a._k5=b=c(b+"</div>");a._l5=b.appendTo(a.slider).children();a._k5.on("click.rs",".rsNavItem",function(){a._m5||a.goTo(c(this).index())})}),a.ev.on("rsOnAppendSlide",function(b,c,d){d>=a.numSlides?a._k5.append('<div class="rsNavItem rsBullet"><span></span></div>'):
a._l5.eq(d).before('<div class="rsNavItem rsBullet"><span></span></div>');a._l5=a._k5.children()}),a.ev.on("rsOnRemoveSlide",function(b,c){var d=a._l5.eq(c);d&&d.length&&(d.remove(),a._l5=a._k5.children())}),a.ev.on("rsOnUpdateNav",function(){var b=a.currSlideId;a._n5&&a._n5.removeClass("rsNavSelected");b=a._l5.eq(b);b.addClass("rsNavSelected");a._n5=b}))}});c.rsModules.bullets=c.rsProto._i5})(jQuery);
// jquery.rs.deeplinking v1.0.6 + jQuery hashchange plugin v1.3 Copyright (c) 2010 Ben Alman
(function(b){b.extend(b.rsProto,{_o5:function(){var a=this,g,c,e;a._p5={enabled:!1,change:!1,prefix:""};a.st.deeplinking=b.extend({},a._p5,a.st.deeplinking);if(a.st.deeplinking.enabled){var h=a.st.deeplinking.change,d="#"+a.st.deeplinking.prefix,f=function(){var a=window.location.hash;return a&&(a=parseInt(a.substring(d.length),10),0<=a)?a-1:-1},j=f();-1!==j&&(a.st.startSlideId=j);h&&(b(window).on("hashchange"+a.ns,function(){if(!g){var b=f();0>b||(b>a.numSlides-1&&(b=a.numSlides-1),a.goTo(b))}}),
a.ev.on("rsBeforeAnimStart",function(){c&&clearTimeout(c);e&&clearTimeout(e)}),a.ev.on("rsAfterSlideChange",function(){c&&clearTimeout(c);e&&clearTimeout(e);e=setTimeout(function(){g=!0;window.location.replace((""+window.location).split("#")[0]+d+(a.currSlideId+1));c=setTimeout(function(){g=!1;c=null},60)},400)}));a.ev.on("rsBeforeDestroy",function(){c=e=null;h&&b(window).off("hashchange"+a.ns)})}}});b.rsModules.deeplinking=b.rsProto._o5})(jQuery);
(function(b,a,g){function c(a){a=a||location.href;return"#"+a.replace(/^[^#]*#?(.*)$/,"$1")}"$:nomunge";var e=document,h,d=b.event.special,f=e.documentMode,j="onhashchange"in a&&(f===g||7<f);b.fn.hashchange=function(a){return a?this.bind("hashchange",a):this.trigger("hashchange")};b.fn.hashchange.delay=50;d.hashchange=b.extend(d.hashchange,{setup:function(){if(j)return!1;b(h.start)},teardown:function(){if(j)return!1;b(h.stop)}});var p=function(){var e=c(),d=r(n);e!==n?(q(n=e,d),b(a).trigger("hashchange")):
d!==n&&(location.href=location.href.replace(/#.*/,"")+d);l=setTimeout(p,b.fn.hashchange.delay)},d={},l,n=c(),q=f=function(a){return a},r=f;d.start=function(){l||p()};d.stop=function(){l&&clearTimeout(l);l=g};if(a.attachEvent&&!a.addEventListener&&!j){var k,m;d.start=function(){k||(m=(m=b.fn.hashchange.src)&&m+c(),k=b('<iframe tabindex="-1" title="empty"/>').hide().one("load",function(){m||q(c());p()}).attr("src",m||"javascript:0").insertAfter("body")[0].contentWindow,e.onpropertychange=function(){try{"title"===
event.propertyName&&(k.document.title=e.title)}catch(a){}})};d.stop=f;r=function(){return c(k.location.href)};q=function(a,d){var c=k.document,f=b.fn.hashchange.domain;a!==d&&(c.title=e.title,c.open(),f&&c.write('<script>document.domain="'+f+'"\x3c/script>'),c.close(),k.location.hash=a)}}h=d})(jQuery,this);
// jquery.rs.fullscreen v1.0.5
(function(c){c.extend(c.rsProto,{_q5:function(){var a=this;a._r5={enabled:!1,keyboardNav:!0,buttonFS:!0,nativeFS:!1,doubleTap:!0};a.st.fullscreen=c.extend({},a._r5,a.st.fullscreen);if(a.st.fullscreen.enabled)a.ev.one("rsBeforeSizeSet",function(){a._s5()})},_s5:function(){var a=this;a._t5=!a.st.keyboardNavEnabled&&a.st.fullscreen.keyboardNav;if(a.st.fullscreen.nativeFS){a._u5={supportsFullScreen:!1,isFullScreen:function(){return!1},requestFullScreen:function(){},cancelFullScreen:function(){},fullScreenEventName:"",
prefix:""};var b=["webkit","moz","o","ms","khtml"];if(!a.isAndroid)if("undefined"!=typeof document.cancelFullScreen)a._u5.supportsFullScreen=!0;else for(var d=0;d<b.length;d++)if(a._u5.prefix=b[d],"undefined"!=typeof document[a._u5.prefix+"CancelFullScreen"]){a._u5.supportsFullScreen=!0;break}a._u5.supportsFullScreen?(a.nativeFS=!0,a._u5.fullScreenEventName=a._u5.prefix+"fullscreenchange"+a.ns,a._u5.isFullScreen=function(){switch(this.prefix){case "":return document.fullScreen;case "webkit":return document.webkitIsFullScreen;
default:return document[this.prefix+"FullScreen"]}},a._u5.requestFullScreen=function(a){return""===this.prefix?a.requestFullScreen():a[this.prefix+"RequestFullScreen"]()},a._u5.cancelFullScreen=function(){return""===this.prefix?document.cancelFullScreen():document[this.prefix+"CancelFullScreen"]()}):a._u5=!1}a.st.fullscreen.buttonFS&&(a._v5=c('<div class="rsFullscreenBtn"><div class="rsFullscreenIcn"></div></div>').appendTo(a._o1).on("click.rs",function(){a.isFullscreen?a.exitFullscreen():a.enterFullscreen()}))},
enterFullscreen:function(a){var b=this;if(b._u5)if(a)b._u5.requestFullScreen(c("html")[0]);else{b._b.on(b._u5.fullScreenEventName,function(){b._u5.isFullScreen()?b.enterFullscreen(!0):b.exitFullscreen(!0)});b._u5.requestFullScreen(c("html")[0]);return}if(!b._w5){b._w5=!0;b._b.on("keyup"+b.ns+"fullscreen",function(a){27===a.keyCode&&b.exitFullscreen()});b._t5&&b._b2();a=c(window);b._x5=a.scrollTop();b._y5=a.scrollLeft();b._z5=c("html").attr("style");b._a6=c("body").attr("style");b._b6=b.slider.attr("style");
c("body, html").css({overflow:"hidden",height:"100%",width:"100%",margin:"0",padding:"0"});b.slider.addClass("rsFullscreen");var d;for(d=0;d<b.numSlides;d++)a=b.slides[d],a.isRendered=!1,a.bigImage&&(a.isBig=!0,a.isMedLoaded=a.isLoaded,a.isMedLoading=a.isLoading,a.medImage=a.image,a.medIW=a.iW,a.medIH=a.iH,a.slideId=-99,a.bigImage!==a.medImage&&(a.sizeType="big"),a.isLoaded=a.isBigLoaded,a.isLoading=!1,a.image=a.bigImage,a.images[0]=a.bigImage,a.iW=a.bigIW,a.iH=a.bigIH,a.isAppended=a.contentAdded=
!1,b._c6(a));b.isFullscreen=!0;b._w5=!1;b.updateSliderSize();b.ev.trigger("rsEnterFullscreen")}},exitFullscreen:function(a){var b=this;if(b._u5){if(!a){b._u5.cancelFullScreen(c("html")[0]);return}b._b.off(b._u5.fullScreenEventName)}if(!b._w5){b._w5=!0;b._b.off("keyup"+b.ns+"fullscreen");b._t5&&b._b.off("keydown"+b.ns);c("html").attr("style",b._z5||"");c("body").attr("style",b._a6||"");var d;for(d=0;d<b.numSlides;d++)a=b.slides[d],a.isRendered=!1,a.bigImage&&(a.isBig=!1,a.slideId=-99,a.isBigLoaded=
a.isLoaded,a.isBigLoading=a.isLoading,a.bigImage=a.image,a.bigIW=a.iW,a.bigIH=a.iH,a.isLoaded=a.isMedLoaded,a.isLoading=!1,a.image=a.medImage,a.images[0]=a.medImage,a.iW=a.medIW,a.iH=a.medIH,a.isAppended=a.contentAdded=!1,b._c6(a,!0),a.bigImage!==a.medImage&&(a.sizeType="med"));b.isFullscreen=!1;a=c(window);a.scrollTop(b._x5);a.scrollLeft(b._y5);b._w5=!1;b.slider.removeClass("rsFullscreen");b.updateSliderSize();setTimeout(function(){b.updateSliderSize()},1);b.ev.trigger("rsExitFullscreen")}},_c6:function(a){var b=
!a.isLoaded&&!a.isLoading?'<a class="rsImg rsMainSlideImage" href="'+a.image+'"></a>':'<img class="rsImg rsMainSlideImage" src="'+a.image+'"/>';a.content.hasClass("rsImg")?a.content=c(b):a.content.find(".rsImg").eq(0).replaceWith(b);!a.isLoaded&&(!a.isLoading&&a.holder)&&a.holder.html(a.content)}});c.rsModules.fullscreen=c.rsProto._q5})(jQuery);
// jquery.rs.global-caption v1.0
(function(b){b.extend(b.rsProto,{_d6:function(){var a=this;a.st.globalCaption&&(a.ev.on("rsAfterInit",function(){a.globalCaption=b('<div class="rsGCaption"></div>').appendTo(!a.st.globalCaptionInside?a.slider:a._e1);a.globalCaption.html(a.currSlide.caption)}),a.ev.on("rsBeforeAnimStart",function(){a.globalCaption.html(a.currSlide.caption)}))}});b.rsModules.globalCaption=b.rsProto._d6})(jQuery);
// jquery.rs.nav-auto-hide v1.0
(function(b){b.extend(b.rsProto,{_e6:function(){var a=this;if(a.st.navAutoHide&&!a.hasTouch)a.ev.one("rsAfterInit",function(){if(a._k5){a._k5.addClass("rsHidden");var b=a.slider;b.one("mousemove.controlnav",function(){a._k5.removeClass("rsHidden")});b.hover(function(){a._k5.removeClass("rsHidden")},function(){a._k5.addClass("rsHidden")})}})}});b.rsModules.autoHideNav=b.rsProto._e6})(jQuery);
// jquery.rs.tabs v1.0.2
(function(e){e.extend(e.rsProto,{_f6:function(){var a=this;"tabs"===a.st.controlNavigation&&(a.ev.on("rsBeforeParseNode",function(a,d,b){d=e(d);b.thumbnail=d.find(".rsTmb").remove();b.thumbnail.length?b.thumbnail=e(document.createElement("div")).append(b.thumbnail).html():(b.thumbnail=d.attr("data-rsTmb"),b.thumbnail||(b.thumbnail=d.find(".rsImg").attr("data-rsTmb")),b.thumbnail=b.thumbnail?'<img src="'+b.thumbnail+'"/>':"")}),a.ev.one("rsAfterPropsSetup",function(){a._g6()}),a.ev.on("rsOnAppendSlide",
function(c,d,b){b>=a.numSlides?a._k5.append('<div class="rsNavItem rsTab">'+d.thumbnail+"</div>"):a._l5.eq(b).before('<div class="rsNavItem rsTab">'+item.thumbnail+"</div>");a._l5=a._k5.children()}),a.ev.on("rsOnRemoveSlide",function(c,d){var b=a._l5.eq(d);b&&(b.remove(),a._l5=a._k5.children())}),a.ev.on("rsOnUpdateNav",function(){var c=a.currSlideId;a._n5&&a._n5.removeClass("rsNavSelected");c=a._l5.eq(c);c.addClass("rsNavSelected");a._n5=c}))},_g6:function(){var a=this,c;a._j5=!0;c='<div class="rsNav rsTabs">';
for(var d=0;d<a.numSlides;d++)c+='<div class="rsNavItem rsTab">'+a.slides[d].thumbnail+"</div>";c=e(c+"</div>");a._k5=c;a._l5=c.children(".rsNavItem");a.slider.append(c);a._k5.click(function(b){b=e(b.target).closest(".rsNavItem");b.length&&a.goTo(b.index())})}});e.rsModules.tabs=e.rsProto._f6})(jQuery);
// jquery.rs.thumbnails v1.0.5
(function(f){f.extend(f.rsProto,{_h6:function(){var a=this;"thumbnails"===a.st.controlNavigation&&(a._i6={drag:!0,touch:!0,orientation:"horizontal",navigation:!0,arrows:!0,arrowLeft:null,arrowRight:null,spacing:4,arrowsAutoHide:!1,appendSpan:!1,transitionSpeed:600,autoCenter:!0,fitInViewport:!0,firstMargin:!0,paddingTop:0,paddingBottom:0},a.st.thumbs=f.extend({},a._i6,a.st.thumbs),a._j6=!0,!1===a.st.thumbs.firstMargin?a.st.thumbs.firstMargin=0:!0===a.st.thumbs.firstMargin&&(a.st.thumbs.firstMargin=
a.st.thumbs.spacing),a.ev.on("rsBeforeParseNode",function(a,c,b){c=f(c);b.thumbnail=c.find(".rsTmb").remove();b.thumbnail.length?b.thumbnail=f(document.createElement("div")).append(b.thumbnail).html():(b.thumbnail=c.attr("data-rsTmb"),b.thumbnail||(b.thumbnail=c.find(".rsImg").attr("data-rsTmb")),b.thumbnail=b.thumbnail?'<img src="'+b.thumbnail+'"/>':"")}),a.ev.one("rsAfterPropsSetup",function(){a._k6()}),a._n5=null,a.ev.on("rsOnUpdateNav",function(){var e=f(a._l5[a.currSlideId]);e!==a._n5&&(a._n5&&
(a._n5.removeClass("rsNavSelected"),a._n5=null),a._l6&&a._m6(a.currSlideId),a._n5=e.addClass("rsNavSelected"))}),a.ev.on("rsOnAppendSlide",function(e,c,b){e="<div"+a._n6+' class="rsNavItem rsThumb">'+a._o6+c.thumbnail+"</div>";b>=a.numSlides?a._s3.append(e):a._l5.eq(b).before(e);a._l5=a._s3.children();a.updateThumbsSize()}),a.ev.on("rsOnRemoveSlide",function(e,c){var b=a._l5.eq(c);b&&(b.remove(),a._l5=a._s3.children(),a.updateThumbsSize())}))},_k6:function(){var a=this,e="rsThumbs",c=a.st.thumbs,
b="",g,d,h=c.spacing;a._j5=!0;a._e3="vertical"===c.orientation?!1:!0;a._n6=g=h?' style="margin-'+(a._e3?"right":"bottom")+":"+h+'px;"':"";a._i3=0;a._p6=!1;a._m5=!1;a._l6=!1;a._q6=c.arrows&&c.navigation;d=a._e3?"Hor":"Ver";a.slider.addClass("rsWithThumbs rsWithThumbs"+d);b+='<div class="rsNav rsThumbs rsThumbs'+d+'"><div class="'+e+'Container">';a._o6=c.appendSpan?'<span class="thumbIco"></span>':"";for(var j=0;j<a.numSlides;j++)d=a.slides[j],b+="<div"+g+' class="rsNavItem rsThumb">'+d.thumbnail+a._o6+
"</div>";b=f(b+"</div></div>");g={};c.paddingTop&&(g[a._e3?"paddingTop":"paddingLeft"]=c.paddingTop);c.paddingBottom&&(g[a._e3?"paddingBottom":"paddingRight"]=c.paddingBottom);b.css(g);a._s3=f(b).find("."+e+"Container");a._q6&&(e+="Arrow",c.arrowLeft?a._r6=c.arrowLeft:(a._r6=f('<div class="'+e+" "+e+'Left"><div class="'+e+'Icn"></div></div>'),b.append(a._r6)),c.arrowRight?a._s6=c.arrowRight:(a._s6=f('<div class="'+e+" "+e+'Right"><div class="'+e+'Icn"></div></div>'),b.append(a._s6)),a._r6.click(function(){var b=
(Math.floor(a._i3/a._t6)+a._u6)*a._t6;a._a4(b>a._n3?a._n3:b)}),a._s6.click(function(){var b=(Math.floor(a._i3/a._t6)-a._u6)*a._t6;a._a4(b<a._o3?a._o3:b)}),c.arrowsAutoHide&&!a.hasTouch&&(a._r6.css("opacity",0),a._s6.css("opacity",0),b.one("mousemove.rsarrowshover",function(){a._l6&&(a._r6.css("opacity",1),a._s6.css("opacity",1))}),b.hover(function(){a._l6&&(a._r6.css("opacity",1),a._s6.css("opacity",1))},function(){a._l6&&(a._r6.css("opacity",0),a._s6.css("opacity",0))})));a._k5=b;a._l5=a._s3.children();
a.msEnabled&&a.st.thumbs.navigation&&a._s3.css("-ms-touch-action",a._e3?"pan-y":"pan-x");a.slider.append(b);a._w3=!0;a._v6=h;c.navigation&&a._e&&a._s3.css(a._g+"transition-property",a._g+"transform");a._k5.on("click.rs",".rsNavItem",function(){a._m5||a.goTo(f(this).index())});a.ev.off("rsBeforeSizeSet.thumbs").on("rsBeforeSizeSet.thumbs",function(){a._w6=a._e3?a._c4:a._b4;a.updateThumbsSize(!0)})},updateThumbsSize:function(){var a=this,e=a._l5.first(),c={},b=a._l5.length;a._t6=(a._e3?e.outerWidth():
e.outerHeight())+a._v6;a._y3=b*a._t6-a._v6;c[a._e3?"width":"height"]=a._y3+a._v6;a._z3=a._e3?a._k5.width():a._k5.height();a._o3=-(a._y3-a._z3)-a.st.thumbs.firstMargin;a._n3=a.st.thumbs.firstMargin;a._u6=Math.floor(a._z3/a._t6);if(a._y3<a._z3)a.st.thumbs.autoCenter&&a._q3((a._z3-a._y3)/2),a.st.thumbs.arrows&&a._r6&&(a._r6.addClass("rsThumbsArrowDisabled"),a._s6.addClass("rsThumbsArrowDisabled")),a._l6=!1,a._m5=!1,a._k5.off(a._j1);else if(a.st.thumbs.navigation&&!a._l6&&(a._l6=!0,!a.hasTouch&&a.st.thumbs.drag||
a.hasTouch&&a.st.thumbs.touch))a._m5=!0,a._k5.on(a._j1,function(b){a._g2(b,!0)});a._e&&(c[a._g+"transition-duration"]="0ms");a._s3.css(c);if(a._w3&&(a.isFullscreen||a.st.thumbs.fitInViewport))a._e3?a._c4=a._w6-a._k5.outerHeight():a._b4=a._w6-a._k5.outerWidth()},setThumbsOrientation:function(a,e){this._w3&&(this.st.thumbs.orientation=a,this._k5.remove(),this.slider.removeClass("rsWithThumbsHor rsWithThumbsVer"),this._k6(),this._k5.off(this._j1),e||this.updateSliderSize(!0))},_q3:function(a){this._i3=
a;this._e?this._s3.css(this._x1,this._y1+(this._e3?a+this._z1+0:0+this._z1+a)+this._a2):this._s3.css(this._e3?this._x1:this._w1,a)},_a4:function(a,e,c,b,g){var d=this;if(d._l6){e||(e=d.st.thumbs.transitionSpeed);d._i3=a;d._x6&&clearTimeout(d._x6);d._p6&&(d._e||d._s3.stop(),c=!0);var h={};d._p6=!0;d._e?(h[d._g+"transition-duration"]=e+"ms",h[d._g+"transition-timing-function"]=c?f.rsCSS3Easing[d.st.easeOut]:f.rsCSS3Easing[d.st.easeInOut],d._s3.css(h),d._q3(a)):(h[d._e3?d._x1:d._w1]=a+"px",d._s3.animate(h,
e,c?"easeOutCubic":d.st.easeInOut));b&&(d._i3=b);d._y6();d._x6=setTimeout(function(){d._p6=!1;g&&(d._a4(b,g,!0),g=null)},e)}},_y6:function(){this._q6&&(this._i3===this._n3?this._r6.addClass("rsThumbsArrowDisabled"):this._r6.removeClass("rsThumbsArrowDisabled"),this._i3===this._o3?this._s6.addClass("rsThumbsArrowDisabled"):this._s6.removeClass("rsThumbsArrowDisabled"))},_m6:function(a,e){var c=0,b,f=a*this._t6+2*this._t6-this._v6+this._n3,d=Math.floor(this._i3/this._t6);this._l6&&(this._j6&&(e=!0,
this._j6=!1),f+this._i3>this._z3?(a===this.numSlides-1&&(c=1),d=-a+this._u6-2+c,b=d*this._t6+this._z3%this._t6+this._v6-this._n3):0!==a?(a-1)*this._t6<=-this._i3+this._n3&&a-1<=this.numSlides-this._u6&&(b=(-a+1)*this._t6+this._n3):b=this._n3,b!==this._i3&&(c=void 0===b?this._i3:b,c>this._n3?this._q3(this._n3):c<this._o3?this._q3(this._o3):void 0!==b&&(e?this._q3(b):this._a4(b))),this._y6())}});f.rsModules.thumbnails=f.rsProto._h6})(jQuery);
// jquery.rs.video v1.1.1
(function(f){f.extend(f.rsProto,{_z6:function(){var a=this;a._a7={autoHideArrows:!0,autoHideControlNav:!1,autoHideBlocks:!1,autoHideCaption:!1,disableCSS3inFF:!0,youTubeCode:'<iframe src="http://www.youtube.com/embed/%id%?rel=1&autoplay=1&showinfo=0&autoplay=1&wmode=transparent" frameborder="no"></iframe>',vimeoCode:'<iframe src="http://player.vimeo.com/video/%id%?byline=0&amp;portrait=0&amp;autoplay=1" frameborder="no" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>'};a.st.video=
f.extend({},a._a7,a.st.video);a.ev.on("rsBeforeSizeSet",function(){a._b7&&setTimeout(function(){var b=a._r1,b=b.hasClass("rsVideoContainer")?b:b.find(".rsVideoContainer");a._c7&&a._c7.css({width:b.width(),height:b.height()})},32)});var c=a._a.mozilla;a.ev.on("rsAfterParseNode",function(b,e,d){b=f(e);if(d.videoURL){a.st.video.disableCSS3inFF&&c&&(a._e=a._f=!1);e=f('<div class="rsVideoContainer"></div>');var g=f('<div class="rsBtnCenterer"><div class="rsPlayBtn"><div class="rsPlayBtnIcon"></div></div></div>');
b.hasClass("rsImg")?d.content=e.append(b).append(g):d.content.find(".rsImg").wrap(e).after(g)}});a.ev.on("rsAfterSlideChange",function(){a.stopVideo()})},toggleVideo:function(){return this._b7?this.stopVideo():this.playVideo()},playVideo:function(){var a=this;if(!a._b7){var c=a.currSlide;if(!c.videoURL)return!1;var b=a._d7=c.content,c=c.videoURL,e,d;c.match(/youtu\.be/i)||c.match(/youtube\.com/i)?(d=/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/,(d=c.match(d))&&11==
d[7].length&&(e=d[7]),void 0!==e&&(a._c7=a.st.video.youTubeCode.replace("%id%",e))):c.match(/vimeo\.com/i)&&(d=/(www\.)?vimeo.com\/(\d+)($|\/)/,(d=c.match(d))&&(e=d[2]),void 0!==e&&(a._c7=a.st.video.vimeoCode.replace("%id%",e)));a.videoObj=f(a._c7);a.ev.trigger("rsOnCreateVideoElement",[c]);a.videoObj.length&&(a._c7=f('<div class="rsVideoFrameHolder"><div class="rsPreloader"></div><div class="rsCloseVideoBtn"><div class="rsCloseVideoIcn"></div></div></div>'),a._c7.find(".rsPreloader").after(a.videoObj),
b=b.hasClass("rsVideoContainer")?b:b.find(".rsVideoContainer"),a._c7.css({width:b.width(),height:b.height()}).find(".rsCloseVideoBtn").off("click.rsv").on("click.rsv",function(b){a.stopVideo();b.preventDefault();b.stopPropagation();return!1}),b.append(a._c7),a.isIPAD&&b.addClass("rsIOSVideo"),a._e7(!1),setTimeout(function(){a._c7.addClass("rsVideoActive")},10),a.ev.trigger("rsVideoPlay"),a._b7=!0);return!0}return!1},stopVideo:function(){var a=this;return a._b7?(a.isIPAD&&a.slider.find(".rsCloseVideoBtn").remove(),
a._e7(!0),setTimeout(function(){a.ev.trigger("rsOnDestroyVideoElement",[a.videoObj]);var c=a._c7.find("iframe");if(c.length)try{c.attr("src","")}catch(b){}a._c7.remove();a._c7=null},16),a.ev.trigger("rsVideoStop"),a._b7=!1,!0):!1},_e7:function(a){var c=[],b=this.st.video;b.autoHideArrows&&(this._c2&&(c.push(this._c2,this._d2),this._e2=!a),this._v5&&c.push(this._v5));b.autoHideControlNav&&this._k5&&c.push(this._k5);b.autoHideBlocks&&this.currSlide.animBlocks&&c.push(this.currSlide.animBlocks);b.autoHideCaption&&
this.globalCaption&&c.push(this.globalCaption);if(c.length)for(b=0;b<c.length;b++)a?c[b].removeClass("rsHidden"):c[b].addClass("rsHidden")}});f.rsModules.video=f.rsProto._z6})(jQuery);
// jquery.rs.visible-nearby v1.0.2
(function(d){d.rsProto._f7=function(){var a=this;a.st.visibleNearby&&a.st.visibleNearby.enabled&&(a._g7={enabled:!0,centerArea:0.6,center:!0,breakpoint:0,breakpointCenterArea:0.8,hiddenOverflow:!0,navigateByCenterClick:!1},a.st.visibleNearby=d.extend({},a._g7,a.st.visibleNearby),a.ev.one("rsAfterPropsSetup",function(){a._h7=a._e1.css("overflow","visible").wrap('<div class="rsVisibleNearbyWrap"></div>').parent();a.st.visibleNearby.hiddenOverflow||a._h7.css("overflow","visible");a._o1=a.st.controlsInside?
a._h7:a.slider}),a.ev.on("rsAfterSizePropSet",function(){var b,c=a.st.visibleNearby;b=c.breakpoint&&a.width<c.breakpoint?c.breakpointCenterArea:c.centerArea;a._h?(a._b4*=b,a._h7.css({height:a._c4,width:a._b4/b}),a._d=a._b4*(1-b)/2/b):(a._c4*=b,a._h7.css({height:a._c4/b,width:a._b4}),a._d=a._c4*(1-b)/2/b);c.navigateByCenterClick||(a._q=a._h?a._b4:a._c4);c.center&&a._e1.css("margin-"+(a._h?"left":"top"),a._d)}))};d.rsModules.visibleNearby=d.rsProto._f7})(jQuery);

// ALERT (jQuery Confirm Replacement)
// http://demo.tutorialzine.com/2010/12/better-confirm-box-jquery-css3/
(function($){
	
	$.confirm = function(params){
		
		if($('#confirmOverlay').length){
			// A confirm is already shown on the page:
			return false;
		}
		
		var buttonHTML = '';
		$.each(params.buttons,function(name,obj){
			
			// Generating the markup for the buttons:
			
			buttonHTML += '<a href="#" class="button '+obj['class']+'">'+name+'<span></span></a>';
			
			if(!obj.action){
				obj.action = function(){};
			}
		});
		
		var markup = [
			'<div id="confirmOverlay">',
			'<div id="confirmBox">',
			'<h1>',params.title,'</h1>',
			'<p>',params.message,'</p>',
			'<div id="confirmButtons">',
			buttonHTML,
			'</div></div></div>'
		].join('');
		
		$(markup).hide().appendTo('body').fadeIn();
		
		var buttons = $('#confirmBox .button'),
			i = 0;

		$.each(params.buttons,function(name,obj){
			buttons.eq(i++).click(function(){
				
				// Calling the action attribute when a
				// click occurs, and hiding the confirm.
				
				obj.action();
				$.confirm.hide();
				return false;
			});
		});
	}

	$.confirm.hide = function(){
		$('#confirmOverlay').fadeOut(function(){
			$(this).remove();
		});
	}
	
})(jQuery);

function cwAviso(titulo, texto){

        //e.preventDefault();
        $.confirm({
            'title'     : titulo,
            'message'   : texto,
            'buttons'   : {
                'Cerrar'    : {
                    'class' : 'blue',
                    'action': function(){}  // Nothing to do in this case. You can as well omit the action property.
                }
            }
        });
 
}

function cwAddCarrito(titulo, texto){

        //e.preventDefault();        
        $.confirm({
            'title'     : titulo,
            'message'   : texto,
            'buttons'   : {
                'Seguir comprando'    : {
                    'class' : 'blue',
                    'action': function(){}  // Nothing to do in this case. You can as well omit the action property.
                },
                'Tramitar pedido'    : {
                    'class' : 'blue',
                    'action': function(){location.href='carrito';}  // Nothing to do in this case. You can as well omit the action property.
                }
            }
        });
 
}
// END ALERT

// COOKIE GESTION
/* jQuery Cookie Plugin
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2011, Klaus Hartl
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.opensource.org/licenses/GPL-2.0
 */ (function ($) {
    $.cookie = function (key, value, options) {

        // key and at least value given, set cookie...
        if (arguments.length > 1 && (!/Object/.test(Object.prototype.toString.call(value)) || value === null || value === undefined)) {
            options = $.extend({}, options);

            if (value === null || value === undefined) {
                options.expires = -1;
            }

            if (typeof options.expires === 'number') {
                var days = options.expires,
                    t = options.expires = new Date();
                t.setDate(t.getDate() + days);
            }

            value = String(value);

            return (document.cookie = [
            encodeURIComponent(key), '=', options.raw ? value : encodeURIComponent(value), options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
            options.path ? '; path=' + options.path : '', options.domain ? '; domain=' + options.domain : '', options.secure ? '; secure' : ''].join(''));
        }

        // key and possibly options given, get cookie...
        options = value || {};
        var decode = options.raw ?
        function (s) {
            return s;
        } : decodeURIComponent;

        var pairs = document.cookie.split('; ');
        for (var i = 0, pair; pair = pairs[i] && pairs[i].split('='); i++) {
            if (decode(pair[0]) === key) return decode(pair[1] || ''); // IE saves cookies with empty string as "c; ", e.g. without "=" as opposed to EOMB, thus pair[1] may be undefined
        }
        return null;
    };
})(jQuery);

$(function() {  
  
    $("#cookies").hide();
    var $document = $(document);
    var $ejecutado = false;
    
    //$.cookie("aceptaCookie", "");
    if ($.cookie("aceptaCookie") != "accepted"){
       $("#cookies").attr('visibility', 'visible')
       $("#cookies").show();
    
    }else{      
        $("#cookies").hide();  
        $ejecutado = true;
        cargarAnalytics();
    }

    $( "#btn-acepta-cookies" ).click(function() {
        $.cookie("aceptaCookie", "accepted");
        $ejecutado = true;
        $("#cookies").hide(1500);
        cargarAnalytics();
    });

  });

// END COOKIE GESTION
