(()=>{"use strict";var t={points:{0:[25,10],1:[20,80],2:[66,9],3:[72,88],4:[37,60],5:[85,8],6:[88,60],7:[46,26],8:[8,41],9:[61,62]},lines:[[0,1,2,3,4,5,6,7,8,9,2,7,0],[2,5,9,7,1],[3,9,4,7]],polygons:[[0,1,7],[4,7,9],[2,5,6]],options:{vertices:{strokeColor:"#87998C",fillColor:"#A63A29",altFillColor:"#F5EFD5",lineWidth:5,radius:10},shapes:{strokeColor:"#87998C",fillColor:"#102A3B",lineWidth:8},scaleDown:{maxWidth:415,factor:2},stretch:!0}};function i(t,i){(null==i||i>t.length)&&(i=t.length);for(var e=0,n=new Array(i);e<i;e++)n[e]=t[e];return n}function e(t,i){for(var e=0;e<i.length;e++){var n=i[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var n=function(){function t(i,e,n,o,s){!function(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}(this,t),this.initialX=this.x=this.cx=i,this.initialY=this.y=this.cy=e,this.id=n,this.canvas=o,this.mouse=s,this.wander=!0,this.rad=2*Math.PI/45*(Math.floor(45*Math.random())+1)}var n,o;return n=t,(o=[{key:"update",value:function(t){var i=this._distanceTo(this.mouse.x,this.mouse.y);this.mouse.x&&i<100&&!this.mouse.ignore?this.moveToMouse(t,i):this.wander?this._wander(t):this._returnToCenter(t)}},{key:"moveToMouse",value:function(i,e){var n,o,s=e||this._distanceTo(this.mouse.x,this.mouse.y);if(this.wander=!1,s<1)n=0,o=0;else{var r=9/s;n=-r*(this.x-this.mouse.x),o=-r*(this.y-this.mouse.y)}var a=t.speed*Math.min(i,33);this.x=this.x+n*a,this.y=this.y+o*a}},{key:"jumpToMouse",value:function(){this.x=this.mouse.x,this.y=this.mouse.y,this.wander=!1}},{key:"stretchToCanvas",value:function(t,i){var e=this.canvas.el.width,n=this.canvas.el.height;this.cx=this.cx/t*e,this.x=this.cx,this.cy=this.cy/i*n,this.y=this.cy}},{key:"scaleToArtboard",value:function(){var t=this.canvas.el.width,i=this.canvas.el.height,e=Math.min(t,i),n=this.initialX/100*e;t>i&&(n+=(t-i)/2);var o=this.initialY/100*e;i>t&&(o+=(i-t)/2),this.x=this.cx=n,this.y=this.cy=o}},{key:"twoClosestPoints",value:function(t){if(t.length<=2)return function(t){if(Array.isArray(t))return i(t)}(e=t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(e)||function(t,e){if(t){if("string"==typeof t)return i(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(t,e):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}();var e,n,o,s=t[0],r=this._distanceTo(s.x,s.y),a=t[1],h=this._distanceTo(a.x,a.y);if(r>h){var l=[a,s];s=l[0],a=l[1];var c=[h,r];r=c[0],h=c[1]}for(var u=2;u<t.length;u++)n=t[u],(o=this._distanceTo(n.x,n.y))<r?(a=s,h=r,s=n,r=o):o<h&&(a=n,h=o);return[s,a]}},{key:"_wander",value:function(i){var e=this._distanceTo(this.cx,this.cy)<t.range&&Math.random()>.5?t.turnRadius:-t.turnRadius;this.rad=this.rad+e;var n=Math.cos(this.rad),o=Math.sin(this.rad),s=t.speed*Math.min(i,33);this.x=this.x+n*s,this.y=this.y+o*s}},{key:"_returnToCenter",value:function(i){var e=this._distanceTo(this.cx,this.cy),n=18/e,o=t.speed*Math.min(i,33),s=-n*(this.x-this.cx),r=-n*(this.y-this.cy);this.x=this.x+s*o,this.y=this.y+r*o,e<.25*t.range&&(this.wander=!0,this.rad=2*Math.PI/45*(Math.floor(45*Math.random())+1))}},{key:"_distanceTo",value:function(t,i){var e=Math.pow(this.x-t,2),n=Math.pow(this.y-i,2);return Math.sqrt(e+n)}}])&&e(n.prototype,o),t}();n.speed=.01,n.range=50,n.turnRadius=2*Math.PI/45;const o=n;function s(t,i){for(var e=0;e<i.length;e++){var n=i[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var r=function(){function t(i){!function(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}(this,t),this.point=i}var i,e;return i=t,(e=[{key:"draw",value:function(i){i.beginPath(),i.arc(this.point.x,this.point.y,t.options.radius,0,2*Math.PI,!1),i.closePath(),this.point.wander?i.fillStyle=t.options.fillColor:i.fillStyle=t.options.altFillColor,i.fill(),i.stroke()}},{key:"label",value:function(t){t.beginPath(),t.font="12px Arial",t.fillStyle="black",t.fillText(this.point.id,this.point.x-3,this.point.y+13)}}])&&s(i.prototype,e),t}();r.options={fillColor:"white",altFillColor:"black",strokeColor:"black",radius:4};const a=r;function h(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}function l(t,i){for(var e=0;e<i.length;e++){var n=i[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var c=function(){function t(i,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];h(this,t),i[0]instanceof o?this.points=i:this.points=i.map((function(t){return e[t]})),this.polygon=n}var i,e;return i=t,(e=[{key:"draw",value:function(t){t.beginPath(),t.moveTo(this.points[0].x,this.points[0].y);for(var i=1;i<this.points.length;i++)t.lineTo(this.points[i].x,this.points[i].y);this.polygon?(t.closePath(),t.fill()):t.stroke()}},{key:"removePoint",value:function(t){this.points=this.points.filter((function(i){return i!==t}))}}])&&l(i.prototype,e),t}();c.options={strokeColor:"black",fillColor:"white",lineWidth:2};const u=c;function d(t,i){for(var e=0;e<i.length;e++){var n=i[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}const f=function(){function t(){!function(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}(this,t),this.x,this.y,this.mode="default",this.clicked=!1,this.ignore=!1}var i,e;return i=t,(e=[{key:"resetPos",value:function(){this.x=null,this.y=null,this.clicked=!1}},{key:"updatePos",value:function(t,i){this.x=t,this.y=i}},{key:"click",value:function(t,i){this.x=t,this.y=i,this.clicked=!0}},{key:"setToIgnore",value:function(){var t=this,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1e3;this.ignore=!0,this.ignoreTimeout&&clearTimeout(this.ignoreTimeout),this.ignoreTimeout=setTimeout((function(){return t.ignore=!1}),i)}},{key:"near",value:function(t){var i=Math.pow(this.x-t.x,2),e=Math.pow(this.y-t.y,2);return Math.sqrt(i+e)<100}}])&&d(i.prototype,e),t}();function v(t,i){(null==i||i>t.length)&&(i=t.length);for(var e=0,n=new Array(i);e<i;e++)n[e]=t[e];return n}function p(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}function y(t,i){for(var e=0;e<i.length;e++){var n=i[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var m={points:{},lines:[],polygons:[]};const g=function(){function t(i){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:m;p(this,t),this.canvas={},this.mouse=new f,this.modified=!1,this._initCanvas(i),this._initShapes(e),this._installListeners(),window.requestAnimationFrame(this._drawArt.bind(this))}var i,e;return i=t,(e=[{key:"changeMouseMode",value:function(t){this.mouse.mode=t}},{key:"toggleLines",value:function(){this.lines=[],this.noLines=!this.noLines}},{key:"destroyShapes",value:function(){this.polygons=[]}},{key:"resetArtboard",value:function(t){this._initShapes(t),this.modified=!1,this.noLines=!1}},{key:"_removePoint",value:function(t){this.points=this.points.filter((function(i){return i!==t})),this.vertices=this.vertices.filter((function(i){return i.point!==t})),this.lines.forEach((function(i){return i.removePoint(t)})),this.lines=this.lines.filter((function(t){return t.points.length>1})),this.polygons.forEach((function(i){return i.removePoint(t)})),this.polygons=this.polygons.filter((function(t){return t.points.length>2}))}},{key:"_addNewPoint",value:function(t,i){var e=this;this.modified=!0;var n=this.points.length>=1?this.points[this.points.length-1].id+1:0,s=new o(t,i,n,this.canvas,this.mouse);if(this.noLines)return this.points.push(s),void this.vertices.push(new a(s));var r=s.twoClosestPoints(this.points);this.points.push(s),this.vertices.push(new a(s)),r.forEach((function(t){e.lines.push(new u([t,s],e.points))}))}},{key:"_teleportPoints",value:function(){this.mouse.setToIgnore(),this.points.forEach((function(t){return t.jumpToMouse()}))}},{key:"_initCanvas",value:function(t){this.canvas.el=document.getElementById(t),this.canvas.el.width=window.innerWidth,this.canvas.el.height=window.innerHeight,this.canvas.ctx=this.canvas.el.getContext("2d")}},{key:"_initShapes",value:function(t){var i,e,n=this,s=t.points,r=t.lines,h=t.polygons,l=t.options;for(var c in l&&this._setShapeOptions(l),this.vertices=[],this.points=[],s){var d=(i=s[c],e=3,function(t){if(Array.isArray(t))return t}(i)||function(t,i){var e=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=e){var n,o,s=[],r=!0,a=!1;try{for(e=e.call(t);!(r=(n=e.next()).done)&&(s.push(n.value),!i||s.length!==i);r=!0);}catch(t){a=!0,o=t}finally{try{r||null==e.return||e.return()}finally{if(a)throw o}}return s}}(i,e)||function(t,i){if(t){if("string"==typeof t)return v(t,i);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?v(t,i):void 0}}(i,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),f=d[0],p=d[1],y=d[2],m=new o(f,p,Number(c),this.canvas,this.mouse);this.stretch?m.stretchToCanvas(100,100):m.scaleToArtboard(),this.points.push(m),y||this.vertices.push(new a(m))}this.lines=[],r.forEach((function(t){for(var i=0;i<t.length-1;i++)n.lines.push(new u([t[i],t[i+1]],n.points))})),this.polygons=h.map((function(t){return new u(t,n.points,!0)}))}},{key:"_setShapeOptions",value:function(t){var i=t.scaleDown,e=t.vertices,n=t.shapes,o=t.stretch;if(t.lineCap,this.stretch=o,a.options=Object.assign({},a.options,e),u.options=Object.assign({},u.options,n),i&&window.innerWidth<i.maxWidth){var s=i.factor;e&&(a.options.lineWidth=e.lineWidth/s,a.options.radius=e.radius/s),n&&(u.options.lineWidth=n.lineWidth/s)}}},{key:"_drawArt",value:function(t){var i=this,e=this.canvas.ctx;e.clearRect(0,0,this.canvas.el.width,this.canvas.el.height),e.lineWidth=u.options.lineWidth,e.strokeStyle=u.options.strokeColor,e.fillStyle=u.options.fillColor,u.options.lineCap&&(e.lineCap=u.options.lineCap),this.polygons.forEach((function(t){return t.draw(e)})),this.lines.forEach((function(t){return t.draw(e)})),e.lineWidth=a.options.lineWidth,e.strokeStyle=a.options.strokeColor,this.vertices.forEach((function(t){return t.draw(e)})),this.animStart||(this.animStart=t);var n=Math.floor(t-this.animStart);this.animStart=t,"coalesce"===this.mouse.mode&&!0===this.mouse.clicked?this.points.forEach((function(t){return t.moveToMouse(n)})):this.points.forEach((function(t){i.mouse.clicked&&"destroy"===i.mouse.mode&&i.mouse.near(t)?i._removePoint(t):t.update(n)})),window.requestAnimationFrame(this._drawArt.bind(this))}},{key:"_resizeCanvas",value:function(t,i){var e=this.canvas.el.width,n=this.canvas.el.height;this.canvas.el.height=i,this.canvas.el.width=t,this.modified||this.stretch?this.points.forEach((function(t){return t.stretchToCanvas(e,n)})):this.points.forEach((function(t){return t.scaleToArtboard()}))}},{key:"_installListeners",value:function(){window.addEventListener("resize",function(){this._resizeCanvas(window.innerWidth,window.innerHeight)}.bind(this)),document.addEventListener("pointerdown",function(t){"button"===t.target.localName||"input"===t.target.localName||"label"===t.target.localName||"a"===t.target.localName||t.target.dataset.ignoreClick||(this.mouse.click(t.clientX,t.clientY),"radiate"===this.mouse.mode?this._teleportPoints():"create"===this.mouse.mode&&(this._addNewPoint(t.clientX,t.clientY),this.mouse.setToIgnore(500)))}.bind(this)),document.addEventListener("pointerup",function(){this.mouse.resetPos(),"coalesce"===this.mouse.mode&&this.mouse.setToIgnore()}.bind(this)),document.addEventListener("pointermove",function(t){this.mouse.updatePos(t.clientX,t.clientY)}.bind(this)),document.addEventListener("pointercancel",function(){this.mouse.resetPos()}.bind(this))}}])&&y(i.prototype,e),t}();$((function(){({constellation:new g("background-canvas",t),$viewCtrPanelButton:$("#view-ctr-panel"),$bkgdButtons:$("#bkgd-buttons"),$modeButtons:$("#bkgd-modes button"),hideLinesOption:document.getElementById("hide-lines"),$destroyShapesButton:$("#destroy-shapes"),_hideControls:function(){this.$viewCtrPanelButton.removeClass("active").html("&xdtri;"),this.$bkgdButtons.removeClass("show")},_toggleCtrPanel:function(t){var i=$(t.currentTarget);i.toggleClass("active"),i.is(".active")?i.html("&xutri;"):i.html("&xdtri;"),this.$bkgdButtons.toggleClass("show")},_changeMode:function(i){var e=$(i.currentTarget);this.constellation.changeMouseMode(e.data("bkgdMode")),this.$modeButtons.removeClass("active"),e.addClass("active"),"default"===e.data("bkgdMode")&&(this.constellation.resetArtboard(t),this.hideLinesOption.checked=!1),this._hideControls()},init:function(){var t=this;this.$viewCtrPanelButton.on("click",this._toggleCtrPanel.bind(this)),$("#bkgd-modes").on("click","button",this._changeMode.bind(this)),this.hideLinesOption.addEventListener("click",(function(){t.constellation.toggleLines()})),this.$destroyShapesButton.on("click",(function(){t.constellation.destroyShapes(),t._hideControls()}))}}).init()}))})();