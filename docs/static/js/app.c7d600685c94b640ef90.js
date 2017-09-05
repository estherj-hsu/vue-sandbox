webpackJsonp([0],[,function(e,t,n){function s(e){n(16)}var i=n(0)(n(7),n(23),s,null,null);e.exports=i.exports},function(e,t,n){function s(e){n(15)}var i=n(0)(n(10),n(22),s,"data-v-3e07a5b4",null);e.exports=i.exports},function(e,t,n){function s(e){n(18)}var i=n(0)(n(11),n(26),s,"data-v-95446c62",null);e.exports=i.exports},function(e,t,n){var s=n(0)(n(12),n(24),null,null,null);e.exports=s.exports},,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"app"}},function(e,t){},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{cards:Array}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{inputTemp:0,isC:!1,kgs:10}},computed:{fahrenheit:function(){return 9*this.inputTemp/5+32},celsius:function(){return 5*(this.inputTemp-32)/9},switcherTemp:function(){return this.isC?"攝氏 轉換 華氏":"華氏 轉換 攝氏"},pounds:function(){return 2.205*this.kgs}},methods:{temperatureConversio:function(e){this.isC?alert("攝氏: "+this.celsius):alert("華氏: "+this.fahrenheit)}},filters:{toInt:function(e){return parseInt(e)},toFix2:function(e){return e.toFixed(2)}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{hello:"Hello!",toggle:!1,multi:"male"}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n(19),i=n.n(s),a=n(20),o=n.n(a);t.default={components:{anno:i.a,testContent:o.a},data:function(){return{cards:[{title:"Heading1",info:"Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. ",btntext:"View details »",url:"#1"},{title:"Heading2",info:"Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. ",btntext:"View details »",url:"#2"},{title:"Heading3",info:"Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.",btntext:"View details »",url:"#3"}]}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){var t=n(6),s=n(5),i=n(3),a=n.n(i),o=n(2),r=n.n(o),l=n(4),u=n.n(l),c=n(1),m=n.n(c);t.a.use(s.a);var d=new s.a({mode:"history",base:e,routes:[{path:"/hello",name:"hello",component:a.a},{path:"/c2f",name:"c2f",component:r.a},{path:"/bootstrapPage",name:"bootstrapPage",component:u.a},{path:"/*",redirect:"/hello"}]});new t.a({el:"#app",router:d,render:function(e){return e(m.a)}})}.call(t,"/")},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t,n){function s(e){n(17)}var i=n(0)(n(8),n(25),s,null,null);e.exports=i.exports},function(e,t,n){function s(e){n(14)}var i=n(0)(n(9),n(21),s,null,null);e.exports=i.exports},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("div",{staticClass:"row"},e._l(e.cards,function(t){return n("div",{staticClass:"col-md-4"},[n("h2",[e._v(e._s(t.title))]),n("p",[e._v(e._s(t.info))]),n("p",[n("a",{staticClass:"btn btn-default",attrs:{href:t.url,role:"button"}},[e._v(e._s(t.btntext))])])])})),n("hr"),e._m(0)])},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("footer",[n("p",[e._v("Esther | Front-End Newbie")])])}]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"c2f"},[n("h2",[e._v("°C ↔ °F")]),n("div",{staticClass:"switcherTemp"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.isC,expression:"isC"}],staticClass:"switcherTemp-input",attrs:{id:"switcherTemp",type:"checkbox"},domProps:{checked:Array.isArray(e.isC)?e._i(e.isC,null)>-1:e.isC},on:{__c:function(t){var n=e.isC,s=t.target,i=!!s.checked;if(Array.isArray(n)){var a=e._i(n,null);s.checked?a<0&&(e.isC=n.concat(null)):a>-1&&(e.isC=n.slice(0,a).concat(n.slice(a+1)))}else e.isC=i}}}),e._v("°C"),n("label",{staticClass:"switcherTemp-label",attrs:{for:"switcherTemp"}}),e._v("°F")]),e.isC?n("p",[e._v("華氏："+e._s(e._f("toInt")(e.fahrenheit))+" °F")]):e._e(),e.isC?e._e():n("p",[e._v("攝氏："+e._s(e._f("toInt")(e.celsius))+" °C")]),n("p",[n("span",{directives:[{name:"show",rawName:"v-show",value:e.isC,expression:"isC"}]},[e._v("攝氏：")]),n("span",{directives:[{name:"show",rawName:"v-show",value:!e.isC,expression:"!isC"}]},[e._v("華氏：")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.inputTemp,expression:"inputTemp"}],attrs:{type:"number"},domProps:{value:e.inputTemp},on:{input:function(t){t.target.composing||(e.inputTemp=t.target.value)}}})]),n("h2",[e._v("KG ↔ Pounds")]),n("p",[e._v("Pounds: "+e._s(e._f("toFix2")(e.pounds))+" pounds")]),n("p",[e._v("KG："),n("input",{directives:[{name:"model",rawName:"v-model",value:e.kgs,expression:"kgs"}],attrs:{type:"number"},domProps:{value:e.kgs},on:{input:function(t){t.target.composing||(e.kgs=t.target.value)}}}),e._v(" kgs")])])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("ul",{staticClass:"nav justify-content-center"},[n("li",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link",attrs:{to:{path:"/hello"}}},[e._v("Hello")])],1),n("li",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link",attrs:{to:{name:"c2f"}}},[e._v("CtoF")])],1),n("li",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link",attrs:{to:{path:"/bootstrapPage"}}},[e._v("Bootstrap")])],1)]),n("router-view")],1)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("anno",{slot:"namedSlot"},[n("p",[e._v("If there is content, then no slot.")])]),n("testContent",{attrs:{cards:e.cards}})],1)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"jumbotron"},[e._m(0),n("hr",{staticClass:"my-4"}),e._t("default",[n("h1",[e._v("Default Slot Content")])]),e._t("namedSlot",[n("h1",[e._v("Named Slot Content")])])],2)},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("h1",[e._v("Hello, world!")]),n("p",[e._v("This is a template for a simple marketing or informational website. It includes a large callout called a jumbotron and three supporting pieces of content. Use it as a starting point to create something more unique.")]),n("p"),n("div",{staticClass:"btn btn-primary btn-lg",attrs:{href:"#",role:"button"}},[e._v("Learn more »")]),n("p")])}]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello"},[n("h2",[e._v(e._s(e.hello))]),n("p",[e._v("Esther says: "+e._s(e.hello))]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.hello,expression:"hello"}],attrs:{type:"text"},domProps:{value:e.hello},on:{input:function(t){t.target.composing||(e.hello=t.target.value)}}}),n("p"),n("input",{directives:[{name:"model",rawName:"v-model",value:e.toggle,expression:"toggle"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.toggle)?e._i(e.toggle,null)>-1:e.toggle},on:{__c:function(t){var n=e.toggle,s=t.target,i=!!s.checked;if(Array.isArray(n)){var a=e._i(n,null);s.checked?a<0&&(e.toggle=n.concat(null)):a>-1&&(e.toggle=n.slice(0,a).concat(n.slice(a+1)))}else e.toggle=i}}}),e._v(" Checkbox:  "+e._s(e.toggle)),n("p"),n("input",{directives:[{name:"model",rawName:"v-model",value:e.multi,expression:"multi"}],attrs:{type:"radio",name:"multi",value:"male",checked:""},domProps:{checked:e._q(e.multi,"male")},on:{__c:function(t){e.multi="male"}}}),e._v(" Male "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.multi,expression:"multi"}],attrs:{type:"radio",name:"multi",value:"female"},domProps:{checked:e._q(e.multi,"female")},on:{__c:function(t){e.multi="female"}}}),e._v(" Female "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.multi,expression:"multi"}],attrs:{type:"radio",name:"multi",value:"other"},domProps:{checked:e._q(e.multi,"other")},on:{__c:function(t){e.multi="other"}}}),e._v(" Other"),n("p",[e._v("Gender: "+e._s(e.multi))])])},staticRenderFns:[]}}],[13]);
//# sourceMappingURL=app.c7d600685c94b640ef90.js.map