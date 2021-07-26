(()=>{"use strict";function t(t,i){(null==i||i>t.length)&&(i=t.length);for(var e=0,n=new Array(i);e<i;e++)n[e]=t[e];return n}function i(t,i){for(var e=0;e<i.length;e++){var n=i[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var e=function(){function e(t,i,n,o,s){!function(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}(this,e),this.initialX=this.x=this.cx=t,this.initialY=this.y=this.cy=i,this.id=n,this.canvas=o,this.mouse=s,this.wander=!0,this.rad=2*Math.PI/45*(Math.floor(45*Math.random())+1)}var n,o;return n=e,(o=[{key:"update",value:function(t){var i=this._distanceTo(this.mouse.x,this.mouse.y);this.mouse.x&&i<100&&!this.mouse.ignore?this.moveToMouse(t,i):this.wander?this._wander(t):this._returnToCenter(t)}},{key:"moveToMouse",value:function(t,i){var n,o,s=i||this._distanceTo(this.mouse.x,this.mouse.y);if(this.wander=!1,s<1)n=0,o=0;else{var r=9/s;n=-r*(this.x-this.mouse.x),o=-r*(this.y-this.mouse.y)}var a=e.speed*Math.min(t,33);this.x=this.x+n*a,this.y=this.y+o*a}},{key:"jumpToMouse",value:function(){this.x=this.mouse.x,this.y=this.mouse.y,this.wander=!1}},{key:"stretchToCanvas",value:function(t,i){var e=this.canvas.el.width,n=this.canvas.el.height;this.cx=this.cx/t*e,this.x=this.cx,this.cy=this.cy/i*n,this.y=this.cy}},{key:"scaleToArtboard",value:function(){var t=this.canvas.el.width,i=this.canvas.el.height,e=Math.min(t,i),n=this.initialX/100*e;t>i&&(n+=(t-i)/2);var o=this.initialY/100*e;i>t&&(o+=(i-t)/2),this.x=this.cx=n,this.y=this.cy=o}},{key:"twoClosestPoints",value:function(i){if(i.length<=2)return function(i){if(Array.isArray(i))return t(i)}(e=i)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(e)||function(i,e){if(i){if("string"==typeof i)return t(i,e);var n=Object.prototype.toString.call(i).slice(8,-1);return"Object"===n&&i.constructor&&(n=i.constructor.name),"Map"===n||"Set"===n?Array.from(i):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?t(i,e):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}();var e,n,o,s=i[0],r=this._distanceTo(s.x,s.y),a=i[1],h=this._distanceTo(a.x,a.y);if(r>h){var l=[a,s];s=l[0],a=l[1];var u=[h,r];r=u[0],h=u[1]}for(var c=2;c<i.length;c++)n=i[c],(o=this._distanceTo(n.x,n.y))<r?(a=s,h=r,s=n,r=o):o<h&&(a=n,h=o);return[s,a]}},{key:"_wander",value:function(t){var i=this._distanceTo(this.cx,this.cy)<e.range&&Math.random()>.5?e.turnRadius:-e.turnRadius;this.rad=this.rad+i;var n=Math.cos(this.rad),o=Math.sin(this.rad),s=e.speed*Math.min(t,33);this.x=this.x+n*s,this.y=this.y+o*s}},{key:"_returnToCenter",value:function(t){var i=this._distanceTo(this.cx,this.cy),n=18/i,o=e.speed*Math.min(t,33),s=-n*(this.x-this.cx),r=-n*(this.y-this.cy);this.x=this.x+s*o,this.y=this.y+r*o,i<.25*e.range&&(this.wander=!0,this.rad=2*Math.PI/45*(Math.floor(45*Math.random())+1))}},{key:"_distanceTo",value:function(t,i){var e=Math.pow(this.x-t,2),n=Math.pow(this.y-i,2);return Math.sqrt(e+n)}}])&&i(n.prototype,o),e}();e.speed=.01,e.range=50,e.turnRadius=2*Math.PI/45;const n=e;function o(t,i){for(var e=0;e<i.length;e++){var n=i[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var s=function(){function t(i){!function(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}(this,t),this.point=i}var i,e;return i=t,(e=[{key:"draw",value:function(i){i.beginPath(),i.arc(this.point.x,this.point.y,t.options.radius,0,2*Math.PI,!1),i.closePath(),this.point.wander?i.fillStyle=t.options.fillColor:i.fillStyle=t.options.altFillColor,i.fill(),i.stroke()}},{key:"label",value:function(t){t.beginPath(),t.font="12px Arial",t.fillStyle="black",t.fillText(this.point.id,this.point.x-3,this.point.y+13)}}])&&o(i.prototype,e),t}();s.options={fillColor:"white",altFillColor:"black",strokeColor:"black",radius:4};const r=s;function a(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}function h(t,i){for(var e=0;e<i.length;e++){var n=i[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var l=function(){function t(i,e){var o=arguments.length>2&&void 0!==arguments[2]&&arguments[2];a(this,t),i[0]instanceof n?this.points=i:this.points=i.map((function(t){return e[t]})),this.polygon=o}var i,e;return i=t,(e=[{key:"draw",value:function(t){t.beginPath(),t.moveTo(this.points[0].x,this.points[0].y);for(var i=1;i<this.points.length;i++)t.lineTo(this.points[i].x,this.points[i].y);this.polygon?(t.closePath(),t.fill()):t.stroke()}},{key:"removePoint",value:function(t){this.points=this.points.filter((function(i){return i!==t}))}}])&&h(i.prototype,e),t}();l.options={strokeColor:"black",fillColor:"white",lineWidth:2};const u=l;function c(t,i){for(var e=0;e<i.length;e++){var n=i[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}const f=function(){function t(){!function(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}(this,t),this.x,this.y,this.mode="default",this.clicked=!1,this.ignore=!1}var i,e;return i=t,(e=[{key:"resetPos",value:function(){this.x=null,this.y=null,this.clicked=!1}},{key:"updatePos",value:function(t,i){this.x=t,this.y=i}},{key:"click",value:function(t,i){this.x=t,this.y=i,this.clicked=!0}},{key:"setToIgnore",value:function(){var t=this,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1e3;this.ignore=!0,this.ignoreTimeout&&clearTimeout(this.ignoreTimeout),this.ignoreTimeout=setTimeout((function(){return t.ignore=!1}),i)}},{key:"near",value:function(t){var i=Math.pow(this.x-t.x,2),e=Math.pow(this.y-t.y,2);return Math.sqrt(i+e)<100}}])&&c(i.prototype,e),t}();function d(t,i){(null==i||i>t.length)&&(i=t.length);for(var e=0,n=new Array(i);e<i;e++)n[e]=t[e];return n}function v(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}function p(t,i){for(var e=0;e<i.length;e++){var n=i[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var y={points:{},lines:[],polygons:[]};const m=function(){function t(i){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:y;v(this,t),this.canvas={},this.mouse=new f,this.modified=!1,this._initCanvas(i),this._initShapes(e),this._installListeners(),window.requestAnimationFrame(this._drawArt.bind(this))}var i,e;return i=t,(e=[{key:"changeMouseMode",value:function(t){this.mouse.mode=t}},{key:"toggleLines",value:function(){this.lines=[],this.noLines=!this.noLines}},{key:"destroyShapes",value:function(){this.polygons=[]}},{key:"resetArtboard",value:function(t){this._initShapes(t),this.modified=!1,this.noLines=!1}},{key:"_removePoint",value:function(t){this.points=this.points.filter((function(i){return i!==t})),this.vertices=this.vertices.filter((function(i){return i.point!==t})),this.lines.forEach((function(i){return i.removePoint(t)})),this.lines=this.lines.filter((function(t){return t.points.length>1})),this.polygons.forEach((function(i){return i.removePoint(t)})),this.polygons=this.polygons.filter((function(t){return t.points.length>2}))}},{key:"_addNewPoint",value:function(t,i){var e=this;this.modified=!0;var o=this.points.length>=1?this.points[this.points.length-1].id+1:0,s=new n(t,i,o,this.canvas,this.mouse);if(this.noLines)return this.points.push(s),void this.vertices.push(new r(s));var a=s.twoClosestPoints(this.points);this.points.push(s),this.vertices.push(new r(s)),a.forEach((function(t){e.lines.push(new u([t,s],e.points))}))}},{key:"_teleportPoints",value:function(){this.mouse.setToIgnore(),this.points.forEach((function(t){return t.jumpToMouse()}))}},{key:"_initCanvas",value:function(t){this.canvas.el=document.getElementById(t),this.canvas.el.width=window.innerWidth,this.canvas.el.height=window.innerHeight,this.canvas.ctx=this.canvas.el.getContext("2d")}},{key:"_initShapes",value:function(t){var i,e,o=this,s=t.points,a=t.lines,h=t.polygons,l=t.options;for(var c in l&&this._setShapeOptions(l),this.vertices=[],this.points=[],s){var f=(i=s[c],e=3,function(t){if(Array.isArray(t))return t}(i)||function(t,i){var e=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=e){var n,o,s=[],r=!0,a=!1;try{for(e=e.call(t);!(r=(n=e.next()).done)&&(s.push(n.value),!i||s.length!==i);r=!0);}catch(t){a=!0,o=t}finally{try{r||null==e.return||e.return()}finally{if(a)throw o}}return s}}(i,e)||function(t,i){if(t){if("string"==typeof t)return d(t,i);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?d(t,i):void 0}}(i,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),v=f[0],p=f[1],y=f[2],m=new n(v,p,Number(c),this.canvas,this.mouse);this.stretch?m.stretchToCanvas(100,100):m.scaleToArtboard(),this.points.push(m),y||this.vertices.push(new r(m))}this.lines=[],a.forEach((function(t){for(var i=0;i<t.length-1;i++)o.lines.push(new u([t[i],t[i+1]],o.points))})),this.polygons=h.map((function(t){return new u(t,o.points,!0)}))}},{key:"_setShapeOptions",value:function(t){var i=t.scaleDown,e=t.vertices,n=t.shapes,o=t.stretch;if(t.lineCap,this.stretch=o,r.options=Object.assign({},r.options,e),u.options=Object.assign({},u.options,n),i&&window.innerWidth<i.maxWidth){var s=i.factor;e&&(r.options.lineWidth=e.lineWidth/s,r.options.radius=e.radius/s),n&&(u.options.lineWidth=n.lineWidth/s)}}},{key:"_drawArt",value:function(t){var i=this,e=this.canvas.ctx;e.clearRect(0,0,this.canvas.el.width,this.canvas.el.height),e.lineWidth=u.options.lineWidth,e.strokeStyle=u.options.strokeColor,e.fillStyle=u.options.fillColor,u.options.lineCap&&(e.lineCap=u.options.lineCap),this.polygons.forEach((function(t){return t.draw(e)})),this.lines.forEach((function(t){return t.draw(e)})),e.lineWidth=r.options.lineWidth,e.strokeStyle=r.options.strokeColor,this.vertices.forEach((function(t){return t.draw(e)})),this.animStart||(this.animStart=t);var n=Math.floor(t-this.animStart);this.animStart=t,"coalesce"===this.mouse.mode&&!0===this.mouse.clicked?this.points.forEach((function(t){return t.moveToMouse(n)})):this.points.forEach((function(t){i.mouse.clicked&&"destroy"===i.mouse.mode&&i.mouse.near(t)?i._removePoint(t):t.update(n)})),window.requestAnimationFrame(this._drawArt.bind(this))}},{key:"_resizeCanvas",value:function(t,i){var e=this.canvas.el.width,n=this.canvas.el.height;this.canvas.el.height=i,this.canvas.el.width=t,this.modified||this.stretch?this.points.forEach((function(t){return t.stretchToCanvas(e,n)})):this.points.forEach((function(t){return t.scaleToArtboard()}))}},{key:"_installListeners",value:function(){window.addEventListener("resize",function(){this._resizeCanvas(window.innerWidth,window.innerHeight)}.bind(this)),document.addEventListener("pointerdown",function(t){"button"===t.target.localName||"input"===t.target.localName||"label"===t.target.localName||"a"===t.target.localName||t.target.dataset.ignoreClick||(this.mouse.click(t.clientX,t.clientY),"radiate"===this.mouse.mode?this._teleportPoints():"create"===this.mouse.mode&&(this._addNewPoint(t.clientX,t.clientY),this.mouse.setToIgnore(500)))}.bind(this)),document.addEventListener("pointerup",function(){this.mouse.resetPos(),"coalesce"===this.mouse.mode&&this.mouse.setToIgnore()}.bind(this)),document.addEventListener("pointermove",function(t){this.mouse.updatePos(t.clientX,t.clientY)}.bind(this)),document.addEventListener("pointercancel",function(){this.mouse.resetPos()}.bind(this))}}])&&p(i.prototype,e),t}();var w={points:{0:[14,66],1:[14,57],2:[27,20],3:[33,20],4:[33,20],5:[33,57],6:[36,57],7:[36,57],8:[36,66],9:[33,66],10:[33,66],11:[32,78],12:[27,78],13:[27,78],14:[27,67],15:[26,67],16:[27,57],17:[19,57],18:[27,37],19:[50,29],20:[52,30],21:[48,30],22:[50,70],23:[52,69],24:[47,68],25:[46,48],26:[54,49],27:[50,20],28:[55,21],29:[58,28],30:[60,48],31:[58,72],32:[55,77],33:[50,79],34:[45,77],35:[42,72],36:[39,49],37:[43,25],38:[46,21],39:[63,57],40:[77,20],41:[82,20],42:[82,57],43:[86,57],44:[86,67],45:[82,67],46:[82,78],47:[76,78],48:[76,67],49:[63,66],50:[69,57],51:[76,38],52:[76,57],53:[15,56],54:[18,57],55:[16,56],56:[19,55],57:[19,52],58:[20,46],59:[19,46],60:[17,52],61:[18,50],62:[19,45],63:[20,42],64:[21,36],65:[22,37],66:[21,42],67:[24,39],68:[25,37],69:[25,35],70:[23,44],71:[20,51],72:[21,46],73:[21,35],74:[24,30],75:[28,24],76:[29,23],77:[30,22],78:[30,23],79:[26,29],80:[26,33],81:[23,37],82:[27,25],83:[27,24],84:[29,21],85:[32,21],86:[32,24],87:[28,29],88:[28,28],89:[28,39],90:[28,45],91:[27,41],92:[27,49],93:[27,51],94:[27,54],95:[27,57],96:[27,62],97:[27,66],98:[28,73],99:[27,76],100:[27,78],101:[29,78],102:[30,78],103:[31,79],104:[32,78],105:[32,75],106:[31,69],107:[31,63],108:[32,57],109:[32,53],110:[32,51],111:[32,42],112:[32,37],113:[32,34],114:[32,25],115:[31,25],116:[29,30],117:[27,34],118:[31,33],119:[31,33],120:[31,41],121:[31,43],122:[30,43],123:[30,49],124:[31,50],125:[29,51],126:[29,50],127:[31,43],128:[32,50],129:[31,60],130:[29,53],131:[28,57],132:[33,56],133:[30,55],134:[28,59],135:[29,59],136:[29,63],137:[31,62],138:[30,67],139:[30,67],140:[29,67],141:[28,69],142:[28,73],143:[29,75],144:[30,76],145:[30,69],146:[30,73],147:[31,76],148:[28,76],149:[30,73],150:[15,59],151:[14,60],152:[14,63],153:[14,64],154:[15,65],155:[16,61],156:[21,60],157:[21,60],158:[23,60],159:[28,59],160:[33,59],161:[35,59],162:[36,58],163:[33,58],164:[24,59],165:[18,60],166:[26,59],167:[26,63],168:[25,65],169:[22,66],170:[19,66],171:[19,66],172:[16,66],173:[17,63],174:[21,63],175:[23,63],176:[22,62],177:[18,64],178:[24,65],179:[24,64],180:[25,60],181:[18,61],182:[20,64],183:[21,66],184:[33,66],185:[35,66],186:[35,66],187:[36,66],188:[36,59],189:[35,61],190:[32,62],191:[34,62],192:[34,63],193:[36,63],194:[36,61],195:[36,64],196:[29,65],197:[32,65],198:[29,40],199:[30,36],200:[29,32],201:[31,36],202:[29,33],203:[26,31],204:[29,26],205:[30,25],206:[31,29],207:[32,28],208:[32,31],209:[32,32],210:[32,28],211:[32,24],212:[30,20],213:[32,48],214:[30,47],215:[28,48],216:[27,47],217:[27,43],218:[32,46],219:[23,32],220:[24,28],221:[25,25],222:[26,22],223:[23,41],224:[21,40],225:[24,34],226:[28,36],227:[30,39],228:[40,51],229:[40,56],230:[40,58],231:[40,61],232:[41,64],233:[41,66],234:[41,68],235:[41,70],236:[43,73],237:[44,75],238:[45,77],239:[46,78],240:[47,78],241:[48,79],242:[49,80],243:[51,79],244:[52,79],245:[53,79],246:[55,77],247:[56,76],248:[56,74],249:[58,72],250:[58,70],251:[60,50],252:[60,52],253:[60,55],254:[60,57],255:[60,60],256:[59,63],257:[59,65],258:[59,68],259:[58,30],260:[59,32],261:[59,34],262:[59,35],263:[59,38],264:[59,41],265:[60,43],266:[60,47],267:[60,47],268:[60,45],269:[55,23],270:[57,25],271:[57,26],272:[58,27],273:[54,21],274:[52,20],275:[52,20],276:[51,20],277:[50,20],278:[48,20],279:[47,20],280:[46,21],281:[46,21],282:[45,22],283:[44,23],284:[43,23],285:[43,24],286:[42,26],287:[42,28],288:[42,30],289:[41,31],290:[41,31],291:[40,35],292:[40,37],293:[40,40],294:[40,41],295:[40,43],296:[40,45],297:[40,47],298:[48,31],299:[47,35],300:[46,39],301:[46,40],302:[45,46],303:[46,46],304:[46,51],305:[46,53],306:[46,55],307:[46,61],308:[46,63],309:[46,64],310:[48,68],311:[49,69],312:[51,69],313:[53,69],314:[53,66],315:[54,62],316:[54,60],317:[54,58],318:[54,57],319:[54,51],320:[54,46],321:[54,45],322:[53,38],323:[53,34],324:[53,33],325:[52,31],326:[50,29],327:[47,26],328:[42,28],329:[45,30],330:[45,27],331:[43,32],332:[46,33],333:[45,33],334:[43,35],335:[45,38],336:[42,38],337:[44,38],338:[42,46],339:[44,43],340:[41,42],341:[44,43],342:[44,45],343:[45,46],344:[41,51],345:[44,51],346:[43,50],347:[45,49],348:[43,52],349:[41,58],350:[44,56],351:[43,59],352:[42,60],353:[43,64],354:[45,58],355:[44,53],356:[42,55],357:[42,62],358:[45,62],359:[45,63],360:[44,66],361:[44,67],362:[43,65],363:[41,69],364:[43,69],365:[43,67],366:[45,73],367:[46,69],368:[46,68],369:[46,65],370:[46,69],371:[42,70],372:[43,71],373:[44,72],374:[45,73],375:[44,69],376:[45,75],377:[46,77],378:[47,71],379:[48,79],380:[49,78],381:[49,72],382:[54,73],383:[51,77],384:[50,77],385:[53,78],386:[52,76],387:[51,74],388:[48,75],389:[52,75],390:[53,75],391:[53,73],392:[54,71],393:[51,72],394:[54,72],395:[54,73],396:[55,74],397:[57,67],398:[56,70],399:[53,70],400:[55,69],401:[56,70],402:[53,64],403:[55,64],404:[57,62],405:[57,59],406:[57,58],407:[58,60],408:[57,61],409:[56,61],410:[56,57],411:[56,55],412:[58,53],413:[56,39],414:[54,41],415:[55,45],416:[58,46],417:[55,50],418:[56,53],419:[56,54],420:[58,53],421:[58,49],422:[57,42],423:[58,40],424:[58,34],425:[54,33],426:[55,34],427:[55,26],428:[53,23],429:[56,33],430:[56,33],431:[55,31],432:[52,30],433:[54,28],434:[51,24],435:[49,22],436:[47,23],437:[46,23],438:[45,25],439:[51,27],440:[49,26],441:[49,26],442:[51,23],443:[56,23],444:[56,24],445:[56,24],446:[57,28],447:[57,29],448:[40,54],449:[42,53],450:[44,54],451:[43,44],452:[42,48],453:[57,47],454:[56,51],455:[57,52],456:[58,56],457:[57,66],458:[56,67],459:[65,54],460:[65,50],461:[66,49],462:[67,45],463:[69,42],464:[69,39],465:[69,38],466:[71,36],467:[72,33],468:[73,30],469:[73,29],470:[74,26],471:[75,25],472:[76,22],473:[77,20],474:[75,24],475:[79,19],476:[80,19],477:[81,19],478:[79,20],479:[82,22],480:[82,25],481:[82,29],482:[82,30],483:[83,36],484:[83,37],485:[83,34],486:[83,44],487:[83,47],488:[83,47],489:[82,42],490:[82,51],491:[83,54],492:[83,56],493:[83,59],494:[82,63],495:[83,64],496:[83,68],497:[82,70],498:[83,73],499:[83,77],500:[81,78],501:[80,79],502:[79,78],503:[78,78],504:[77,78],505:[76,76],506:[76,73],507:[76,70],508:[76,70],509:[76,68],510:[75,67],511:[74,67],512:[73,67],513:[71,67],514:[71,67],515:[69,67],516:[68,67],517:[67,67],518:[65,67],519:[65,66],520:[63,65],521:[63,63],522:[63,62],523:[63,59],524:[63,58],525:[70,56],526:[70,53],527:[71,51],528:[71,50],529:[72,48],530:[73,46],531:[73,44],532:[74,43],533:[75,41],534:[75,39],535:[76,38],536:[77,39],537:[76,40],538:[76,42],539:[76,42],540:[77,45],541:[76,46],542:[76,48],543:[76,49],544:[76,49],545:[76,50],546:[76,54],547:[76,54],548:[76,58],549:[84,57],550:[86,57],551:[86,58],552:[86,60],553:[86,62],554:[86,64],555:[86,66],556:[85,67],557:[84,67],558:[85,63],559:[85,65],560:[84,65],561:[84,62],562:[83,58],563:[84,60],564:[86,59],565:[86,61],566:[85,62],567:[80,62],568:[80,51],569:[78,52],570:[79,53],571:[80,56],572:[77,48],573:[78,45],574:[81,38],575:[80,26],576:[80,25],577:[78,23],578:[77,23],579:[80,21],580:[79,32],581:[79,32],582:[78,30],583:[75,34],584:[74,35],585:[74,30],586:[73,36],587:[71,40],588:[73,41],589:[70,41],590:[69,48],591:[72,44],592:[70,46],593:[70,46],594:[69,50],595:[68,50],596:[67,52],597:[70,54],598:[67,54],599:[66,55],600:[66,60],601:[65,61],602:[65,62],603:[65,64],604:[66,65],605:[66,65],606:[67,60],607:[67,57],608:[68,63],609:[68,65],610:[69,63],611:[70,60],612:[73,64],613:[72,62],614:[70,65],615:[71,65],616:[72,65],617:[72,60],618:[74,60],619:[75,60],620:[76,60],621:[81,59],622:[79,60],623:[77,60],624:[78,58],625:[80,55],626:[81,53],627:[82,51],628:[82,41],629:[82,40],630:[82,46],631:[81,46],632:[80,48],633:[78,49],634:[81,44],635:[79,43],636:[79,43],637:[78,42],638:[78,34],639:[75,33],640:[74,39],641:[74,38],642:[78,28],643:[77,28],644:[76,26],645:[76,28],646:[77,32],647:[77,37],648:[79,38],649:[80,37],650:[80,35],651:[80,35],652:[82,34],653:[81,31],654:[81,26],655:[81,23],656:[77,25],657:[80,28],658:[80,57],659:[78,65],660:[76,63],661:[75,63],662:[78,65],663:[79,67],664:[78,71],665:[77,71],666:[78,74],667:[79,77],668:[79,77],669:[81,77],670:[81,76],671:[78,75],672:[80,74],673:[80,71],674:[80,72],675:[81,71],676:[81,65],677:[80,63],678:[80,66],679:[79,71],680:[77,65],681:[76,65],682:[74,65],683:[74,61],684:[77,61],685:[79,61],686:[79,56],687:[78,53],688:[82,47],689:[80,45],690:[79,45],691:[78,40],692:[81,40],693:[20,38],694:[19,41],695:[18,43],696:[18,46],697:[17,48],698:[16,51],699:[15,54],700:[17,54],701:[20,49]},lines:[],polygons:[],options:{vertices:{strokeColor:"#87998C",fillColor:"#A63A29",altFillColor:"#F5EFD5",lineWidth:2,radius:4},scaleDown:{maxWidth:380,factor:2}}};window.addEventListener("DOMContentLoaded",(function(){new m("my-canvas",w).changeMouseMode("coalesce")}))})();