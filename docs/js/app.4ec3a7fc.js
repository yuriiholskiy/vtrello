(function(t){function e(e){for(var o,r,l=e[0],i=e[1],c=e[2],m=0,d=[];m<l.length;m++)r=l[m],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&d.push(a[r][0]),a[r]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(t[o]=i[o]);u&&u(e);while(d.length)d.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],o=!0,l=1;l<n.length;l++){var i=n[l];0!==a[i]&&(o=!1)}o&&(s.splice(e--,1),t=r(r.s=n[0]))}return t}var o={},a={app:0},s=[];function r(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=o,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/vtrello/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],i=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var u=i;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var o=n("85ec"),a=n.n(o);a.a},"158c":function(t,e,n){"use strict";var o=n("ce1b"),a=n.n(o);a.a},"23f4":function(t,e,n){},3827:function(t,e,n){"use strict";var o=n("724e"),a=n.n(o);a.a},"3a43":function(t,e,n){},"425a":function(t,e,n){"use strict";var o=n("45ce"),a=n.n(o);a.a},"45ce":function(t,e,n){},5106:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("AppToolbar",{attrs:{title:"vtrello"}}),n("router-view")],1)},s=[],r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"w-full bg-orange py-3 text-xl text-white"},[t._v(" "+t._s(t.title)+" ")])},l=[],i={name:"AppToolbar",props:{title:{type:String,default:"Title"}}},c=i,u=(n("425a"),n("2877")),m=Object(u["a"])(c,r,l,!1,null,null,null),d=m.exports,p={name:"App",components:{AppToolbar:d}},f=p,h=(n("034f"),Object(u["a"])(f,a,s,!1,null,null,null)),b=h.exports,k=n("8c4f"),v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"board min-h-with-toolbar overflow-y-hidden overflow-x-auto"},[n("div",{staticClass:"flex flex-row items-start m-4 mb-0"},[t._l(t.board.columns,(function(e,o){return n("BoardColumn",{key:o,attrs:{column:e,board:t.board,"column-index":o}})})),n("div",{staticClass:"column flex"},[n("AppInputField",{staticClass:"p-2 mr-2 flex-grow rounded",attrs:{"field-type":"input",placeholder:"New Column Name"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.createColumn(e)}},model:{value:t.newColumnName,callback:function(e){t.newColumnName=e},expression:"newColumnName"}})],1)],2),n("AppModal",{attrs:{isOpen:t.isTaskOpen},on:{click:function(e){return e.target!==e.currentTarget?null:t.closeTaskModal(e)}}},[n("router-view")],1)],1)},C=[],g=(n("c975"),n("fb6a"),n("b0c0"),n("5530")),x="CREATE_TASK",y="UPDATE_TASK",_="MOVE_TASK",w="REMOVE_ALL_TASKS",T="CREATE_COLUMN",O="REMOVE_COLUMN",j="MOVE_COLUMN",S="ADD_COMMENT",I="DELETE_COMMENT",A="ADD_LABEL",M="REMOVE_LABEL",D=n("2f62"),E=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"fade",mode:"out-in"}},[t.isOpen?n("div",t._g({staticClass:"modal pin absolute px-4 z-50"},t.$listeners),[t._t("default")],2):t._e()])},$=[],L={name:"AppModal",props:{isOpen:{type:Boolean,default:!1}}},N=L,F=(n("3827"),Object(u["a"])(N,E,$,!1,null,null,null)),P=F.exports,B=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("AppDrop",{on:{drop:t.moveTaskOrColumn}},[n("AppDrag",{staticClass:"column bg-grey-light p-2 mr-4 text-left shadow rounded max-h-164 overflow-y-auto overflow-x-hidden",attrs:{isDraggable:!0,"transfer-data":{type:"column",fromColIndex:t.columnIndex}}},[n("div",{staticClass:"flex items-center justify-around font-bold",on:{dblclick:t.openModal}},[n("span",[t._v(t._s(t.column.name))]),t.isClearBtnShown?n("button",{staticClass:"btn",on:{click:t.openTasksDeleteModal}},[t._v(" Clear tasks ")]):t._e()]),n("div",{staticClass:"list-reset"},[t._l(t.column.tasks,(function(e,o){return n("ColumnTask",{key:o,staticClass:"task",attrs:{"task-index":o,"column-index":t.columnIndex,column:t.column,task:e,board:t.board}})})),n("AppInputField",{staticClass:"mt-2",attrs:{"field-type":"input",placeholder:"+ Enter new task"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.createTask(t.column.tasks)}},model:{value:t.newTask,callback:function(e){t.newTask=e},expression:"newTask"}})],2)]),n("AppModal",{attrs:{isOpen:t.isModalOpen},on:{click:function(e){return e.target!==e.currentTarget?null:t.closeModal(e)}}},[n("div",{staticClass:"delete-modal w-1/2 h-64 mt-16 mx-auto p-2 bg-white flex flex-col justify-between items-center"},[n("div",[n("h2",{staticClass:"mt-2"},[t._v("Do you really want delete "+t._s(t.deleteModalText)+"?")]),n("p",{staticClass:"mt-2"},[t._v("It's unreversable action.")])]),n("div",[n("button",{staticClass:"btn bg-indigo",on:{click:function(e){t.isColumnDelete?t.removeColumn(t.columnIndex):t.removeAllTask(t.columnIndex)}}},[t._v(" Continue ")]),n("button",{staticClass:"btn ml-2 bg-red-light",on:{click:t.closeModal}},[t._v(" Close ")])])])])],1)},q=[],W=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("AppDrop",{on:{drop:t.moveTaskOrColumn}},[n("AppDrag",{staticClass:"p-3 mt-2 rounded cursor-pointer hover:bg-grey-lighter",class:t.classes,attrs:{"transfer-data":{type:"task",fromColIndex:t.columnIndex,fromTaskIndex:t.taskIndex}},on:{click:t.openTask}},[n("TaskLabels",{staticClass:"pointer-events-none",attrs:{task:t.task}}),n("div",{staticClass:"w-full flex justify-between font-bold mt-2"},[n("p",[t._v(t._s(t.task.name))]),t.commentsCount>0?n("span",{staticClass:"text-sm flex align-center"},[t._v(" "+t._s(t.commentsCount)+" "),n("svg",{staticClass:"h-4 w-4 fill-current ml-1",attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 32 32"}},[n("g",[n("path",{attrs:{d:"M30.316,24.559l-1.799-4.914c0.568-1.586,0.856-3.25,0.856-4.957C29.375,6.589,22.786,0,14.688,0C6.589,0,0,6.589,0,14.688   s6.589,14.688,14.688,14.688c2.931,0,5.812-0.894,8.233-2.532l3.611,1.414c0.463,0.182,0.919,0.274,1.354,0.274   c0.903,0,1.703-0.402,2.192-1.104C30.395,26.979,30.845,26.005,30.316,24.559z M27.888,26.532c-0.179,0-0.389-0.044-0.624-0.138   l-4.639-1.815c-2.174,1.746-4.931,2.797-7.937,2.797C7.68,27.375,2,21.695,2,14.688C2,7.681,7.68,2,14.688,2   c7.007,0,12.688,5.68,12.688,12.688c0,1.75-0.354,3.417-0.995,4.934l2.059,5.625C28.73,26.042,28.484,26.532,27.888,26.532z"}}),n("circle",{attrs:{cx:"20.375",cy:"14.687",r:"1.625"}}),n("circle",{attrs:{cx:"14.375",cy:"14.687",r:"1.625"}}),n("circle",{attrs:{cx:"8.375",cy:"14.687",r:"1.625"}})])])]):t._e()]),t.task.description?n("p",{staticClass:"w-full flex-no-shrink mt-1 text-sm"},[t._v(" "+t._s(t.task.description)+" ")]):t._e()],1)],1)},U=[],J=(n("99af"),n("caad"),n("a9e3"),n("2532"),n("ade3")),R={props:{board:{type:Object,required:!1},column:{type:Object,required:!0},columnIndex:{type:Number,required:!0}},methods:{moveTask:function(t){var e=t.fromColIndex,n=t.fromTaskIndex,o=this.board.columns[e].tasks;this.$store.dispatch("task/".concat(_),{fromTasks:o,fromTaskIndex:n,toTasks:this.column.tasks,toTaskIndex:this.taskIndex})},moveColumn:function(t){var e=t.fromColIndex;this.$store.dispatch("column/".concat(j),{fromColIndex:e,toColIndex:this.columnIndex})},moveTaskOrColumn:function(t){"task"===t.type?this.moveTask(t):this.moveColumn(t)}}},V=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",t._g({attrs:{draggable:t.isDraggable},on:{dragstart:function(e){return e.target!==e.currentTarget?null:t.handleDrag(e)},dragover:function(t){t.preventDefault()},dragenter:function(t){t.preventDefault()}}},t.$listeners),[t._t("default")],2)},K=[],z={name:"AppDrag",props:{transferData:{type:Object,required:!0},isDraggable:{type:Boolean,default:!0}},methods:{handleDrag:function(t){t.dataTransfer.effectAllowed="move",t.dataTransfer.dropEffect="move",t.dataTransfer.setData("payload",JSON.stringify(this.transferData))}}},H=z,G=Object(u["a"])(H,V,K,!1,null,null,null),Q=G.exports,X=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{on:{drop:function(e){return e.stopPropagation(),t.handleDrop(e)},dragover:function(t){t.preventDefault()},dragenter:function(t){t.preventDefault()}}},[t._t("default")],2)},Y=[],Z={name:"AppDrop",methods:{handleDrop:function(t){var e=JSON.parse(t.dataTransfer.getData("payload"));this.$emit("drop",e)}}},tt=Z,et=Object(u["a"])(tt,X,Y,!1,null,null,null),nt=et.exports,ot=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",t._l(t.task.labels,(function(e){return n("span",{key:e.name,staticClass:"color-label",style:{"background-color":e.color},attrs:{title:e.name},on:{click:function(n){return t.manipulateLabel(e)}}})})),0)},at=[],st={name:"TaskLabels",props:{task:{type:Object,required:!0},isLabelsMenuShow:{type:Boolean}},methods:{manipulateLabel:function(t){this.isLabelsMenuShow?this.$store.dispatch("task/".concat(A),{task:this.task.task,label:t}):this.$store.dispatch("task/".concat(M),{task:this.task,label:t})}}},rt=st,lt=(n("f3b4"),Object(u["a"])(rt,ot,at,!1,null,null,null)),it=lt.exports,ct={name:"ColumnTask",props:{task:{type:Object,required:!0},taskIndex:{type:Number,required:!0}},mixins:[R],computed:{classes:function(){return Object(J["a"])({"text-grey-lighter bg-red-light hover:bg-red":this.isTodoColumn,"text-grey-lighter bg-green hover:bg-green-light":this.isDoneColumn,"text-grey-lighter bg-orange hover:bg-orange-light":this.isProgressColumn},this.color,!0)},commentsCount:function(){return this.task.comments.length},isTodoColumn:function(){return this.column.name.toLowerCase().includes("todo")},isDoneColumn:function(){return this.column.name.toLowerCase().includes("done")},isProgressColumn:function(){return this.column.name.toLowerCase().includes("progress")},isColorExist:function(){return this.column.color||"white"},color:function(){return"bg-".concat(this.isColorExist," hover:bg-").concat(this.isColorExist,"-light")}},methods:{openTask:function(){this.$router.push({name:"task",params:{id:this.task.id}})}},components:{AppDrag:Q,AppDrop:nt,TaskLabels:it}},ut=ct,mt=Object(u["a"])(ut,W,U,!1,null,null,null),dt=mt.exports,pt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return"textarea"===t.fieldType?n("textarea",t._g(t._b({staticClass:"relative w-full h-64 pl-1 bg-grey-light py-2 border rounded mt-2 h-32 border-none leading-normal outline-none",domProps:{value:t.value}},"textarea",t.$attrs,!1),t.combineListeners)):"input"===t.fieldType?n("input",t._g(t._b({staticClass:"w-full py-2 pl-1 block rounded bg-grey-lighten text-sm outline-none",domProps:{value:t.value}},"input",t.$attrs,!1),t.combineListeners)):t._e()},ft=[],ht={name:"AppFields",props:{value:{type:String,default:""},fieldType:{type:String,default:"input"}},computed:{combineListeners:function(){var t=this;return Object(g["a"])({},this.$listeners,{input:function(e){return t.$emit("input",e.target.value)}})}}},bt=ht,kt=Object(u["a"])(bt,pt,ft,!1,null,null,null),vt=kt.exports,Ct={name:"BoardColumn",mixins:[R],data:function(){return{newTask:"",isModalOpen:!1,isColumnDelete:!0}},computed:{isClearBtnShown:function(){return this.column.tasks.length},deleteModalText:function(){return this.isColumnDelete?"this column":"this tasks"}},methods:{createTask:function(t){this.$store.dispatch("task/".concat(x),{tasks:t,name:this.newTask}),this.newTask=""},removeColumn:function(t){this.$store.dispatch("column/".concat(O),t),this.closeModal()},removeAllTask:function(t){this.$store.dispatch("task/".concat(w),t),this.closeModal()},openModal:function(){this.isModalOpen=!0},closeModal:function(){this.isModalOpen=!1,this.isColumnDelete=!0},openTasksDeleteModal:function(){this.isColumnDelete=!1,this.openModal()}},components:{ColumnTask:dt,AppDrag:Q,AppDrop:nt,AppInputField:vt,AppModal:P}},gt=Ct,xt=(n("f9e1"),Object(u["a"])(gt,B,q,!1,null,null,null)),yt=xt.exports,_t={name:"Board",data:function(){return{newColumnName:""}},created:function(){var t=this,e=function(e){"Escape"===e.key&&t.isTaskOpen&&t.closeTaskModal()};document.addEventListener("keydown",e),this.$once("hook:beforeDestroy",e)},computed:Object(g["a"])({},Object(D["c"])(["board"]),{isTaskOpen:function(){return"task"===this.$route.name}}),methods:{closeTaskModal:function(){this.$router.push({name:"board"})},createColumn:function(){var t=this.newColumnName.indexOf("#"),e="",n=this.newColumnName.slice(t+1);e=-1!==t?this.newColumnName.slice(0,t):this.newColumnName;var o=-1!==t?n:"white";this.$store.dispatch("column/".concat(T),{name:e,color:o}),this.newColumnName=""}},components:{AppModal:P,BoardColumn:yt,AppInputField:vt}},wt=_t,Tt=(n("158c"),Object(u["a"])(wt,v,C,!1,null,null,null)),Ot=Tt.exports,jt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"task-view min-h-100 overflow-y-auto rounded-sm"},[n("div",{staticClass:"flex flex-col flex-grow items-start px-4"},[t.task.labels.length?n("h3",[t._v("Labels:")]):t._e(),n("TaskLabels",{staticClass:"mt-1",attrs:{task:t.task}}),n("TaskUpdateForm",{staticClass:"mt-2",attrs:{task:t.task}}),n("div",{staticClass:"mt-4 flex items-center mt-auto"},[n("button",{staticClass:"btn bg-indigo rounded",attrs:{type:"button"},on:{click:t.hideComments}},[t._v(" "+t._s(t.hideCommentsBtnText)+" ")]),n("button",{staticClass:"btn ml-2 bg-indigo rounded",attrs:{type:"button"},on:{click:function(e){t.isLabelsMenuShow=!t.isLabelsMenuShow}}},[t._v(" Add labels ")]),t.isLabelsMenuShow?n("TaskLabels",{staticClass:"ml-4",attrs:{task:{labels:t.filteredLabels,task:t.task},isLabelsMenuShow:t.isLabelsMenuShow}}):t._e()],1),n("transition",{attrs:{name:"fade",mode:"out-in"}},[t.isCommentShow?n("div",{staticClass:"w-full md:h-auto"},[n("h3",{staticClass:"mt-4 text-grey-darker text-xl"},[t._v("Comments:")]),t.isCommentShow?n("div",{staticClass:"block w-full"},[t.task.comments.length?n("CommentList",{attrs:{task:t.task}}):t._e(),n("CommentAddForm",{attrs:{task:t.task}})],1):t._e()]):t._e()])],1)])},St=[],It=(n("a623"),n("4de4"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("form",{staticClass:"w-full"},[n("AppInputField",{staticClass:"text-xl bg-grey-light",attrs:{type:"text",value:t.task.name},on:{change:function(e){return t.updateTaskProp(e.target.value,"name")},keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.updateTaskProp(e.target.value,"name")}}}),n("AppInputField",{attrs:{"field-type":"textarea",value:t.task.description,placeholder:"+ you can add a description"},on:{change:function(e){return t.updateTaskProp(e.target.value,"description")},keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.updateTaskProp(e.target.value,"description")}}})],1)}),At=[],Mt={name:"TaskUpdateForm",props:{task:{type:Object,required:!0}},methods:{updateTaskProp:function(t,e){this.$store.dispatch("task/".concat(y),{task:this.task,key:e,value:t})}},components:{AppInputField:vt}},Dt=Mt,Et=Object(u["a"])(Dt,It,At,!1,null,null,null),$t=Et.exports,Lt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"comments mt-2 list-reset w-full"},t._l(t.task.comments,(function(e,o){return n("CommentItem",{key:e.id,attrs:{comment:e,"comment-index":o,task:t.task}})})),1)},Nt=[],Ft=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[n("div",{staticClass:"p-2"},[n("div",{staticClass:"comment"},[n("div",[n("span",{staticClass:"author"},[t._v(" "+t._s(t.comment.author)+" ")]),n("span",{staticClass:"inline-flex px-2"},[t._v(t._s(t.comment.content))])]),n("span",{staticClass:"text-xl cursor-pointer",on:{click:function(e){return t.deleteComment(t.comment.author)}}},[t._v("×")])])])])},Pt=[],Bt={name:"Comment",props:{comment:{type:Object,required:!0},commentIndex:{type:Number,required:!0},task:{type:Object,required:!0}},methods:{deleteComment:function(t){this.$store.dispatch("comment/".concat(I),{task:this.task,name:t,commentIndex:this.commentIndex})}}},qt=Bt,Wt=(n("f24e"),Object(u["a"])(qt,Ft,Pt,!1,null,null,null)),Ut=Wt.exports,Jt={name:"CommentList",props:{task:{type:Object,required:!0}},components:{CommentItem:Ut}},Rt=Jt,Vt=Object(u["a"])(Rt,Lt,Nt,!1,null,null,null),Kt=Vt.exports,zt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("form",{staticClass:"my-2 w-full",on:{submit:function(e){return e.preventDefault(),t.addComment(e)}}},[n("AppInputField",{staticClass:"bg-grey-light",attrs:{type:"text",placeholder:"who you are?"},model:{value:t.comment.author,callback:function(e){t.$set(t.comment,"author",e)},expression:"comment.author"}}),n("AppInputField",{staticClass:"h-16",attrs:{"field-type":"textarea",placeholder:"+ you can add a comment"},model:{value:t.comment.content,callback:function(e){t.$set(t.comment,"content",e)},expression:"comment.content"}}),n("input",{staticClass:"btn rounded mb-4",class:{"opacity-50 cursor-not-allowed":t.isCommentBtnDisabled},attrs:{type:"submit",value:"+ add comment",disabled:t.isCommentBtnDisabled}})],1)},Ht=[],Gt={name:"CommentAddForm",props:{task:{type:Object,required:!0}},data:function(){return{comment:{author:"",content:""}}},computed:{isCommentBtnDisabled:function(){return!(this.comment.author&&this.comment.content)}},methods:{createFreshComment:function(){return{author:"",content:""}},addComment:function(){var t={author:this.comment.author,content:this.comment.content};this.$store.dispatch("comment/".concat(S),{task:this.task,comment:t}),this.comment=this.createFreshComment()}},components:{AppInputField:vt}},Qt=Gt,Xt=Object(u["a"])(Qt,zt,Ht,!1,null,null,null),Yt=Xt.exports,Zt=[{name:"Done",color:"#51d88a"},{name:"In progress",color:"#faad63"},{name:"Need improvement",color:"#ba2be2"},{name:"Checked",color:"#6cb2eb"},{name:"Hot issue",color:"#ef5753"},{name:"Failed",color:"#e3342f"}],te={name:"Task",data:function(){return{isCommentShow:!1,isLabelsMenuShow:!1,labels:Zt}},computed:Object(g["a"])({},Object(D["b"])(["getTask"]),{task:function(){return this.getTask(this.$route.params.id)},hideCommentsBtnText:function(){return this.isCommentShow?"Hide comments":"Show comments"},filteredLabels:function(){var t=this;return this.labels.filter((function(e){return t.task.labels.every((function(t){return e.name!==t.name}))}))}}),methods:{hideComments:function(){this.isCommentShow=!this.isCommentShow}},components:{TaskUpdateForm:$t,CommentList:Kt,CommentAddForm:Yt,TaskLabels:it}},ee=te,ne=(n("b39f"),Object(u["a"])(ee,jt,St,!1,null,null,null)),oe=ne.exports;o["a"].use(k["a"]);var ae,se,re=[{path:"/",name:"board",component:Ot,children:[{path:"task/:id",name:"task",component:oe}]}],le=new k["a"]({mode:"history",base:"/vtrello/",routes:re}),ie=le,ce=(n("a4d3"),n("e01a"),n("d28b"),n("d3b7"),n("3ca3"),n("ddb0"),n("c740"),n("a434"),n("25f0"),function(){return"_"+Math.random().toString(16).slice(2)}),ue={name:"workshop",columns:[{name:"todo",tasks:[{description:"",name:"first task",id:ce(),userAssigned:null,comments:[{id:ce(),content:"Some comment title",author:"Who?"},{id:ce(),content:"Some comment title 2",author:"Who?"}],labels:[]},{description:"",name:"second task",id:ce(),userAssigned:null,comments:[{id:ce(),content:"Some comment title",author:"Who?"}],labels:[{name:"Done",color:"#38c172"},{name:"Checked",color:"#6cb2eb"}]},{description:"",name:"and thrid",id:ce(),userAssigned:null,comments:[{id:ce(),content:"Some comment title",author:"Who?"},{id:ce(),content:"Some comment title 2",author:"Who?"},{id:ce(),content:"Some comment title 3",author:"Who?"}],labels:[{name:"In progress",color:"#faad63"}]}]},{name:"in-progress",tasks:[{description:"",name:"first task",id:ce(),userAssigned:null,comments:[{id:ce(),content:"Some comment title",author:"Who?"},{id:ce(),content:"Some comment title 2",author:"Who?"}],labels:[]}]},{name:"done",tasks:[{description:"",name:"first task",id:ce(),userAssigned:null,comments:[{id:ce(),content:"Some comment title",author:"Who?"},{id:ce(),content:"Some comment title 2",author:"Who?"},{id:ce(),content:"Some comment title 3",author:"Who?"}],labels:[{name:"Need improvement",color:"#ba2be2"}]}]}]};function me(t){t.subscribe((function(t,e){localStorage.setItem("board",JSON.stringify(e.board))}))}var de,pe,fe,he,be={namespaced:!0,mutations:(ae={},Object(J["a"])(ae,x,(function(t,e){var n=e.tasks,o=e.name;n.push({name:o,id:ce(),description:"",comments:[],labels:[]})})),Object(J["a"])(ae,y,(function(t,e){var n=e.task,a=e.key,s=e.value;o["a"].set(n,a,s)})),Object(J["a"])(ae,_,(function(t,e){var n=e.fromTasks,o=e.toTasks,a=e.fromTaskIndex,s=e.toTaskIndex,r=n.splice(a,1)[0];o.splice(s,0,r)})),Object(J["a"])(ae,w,(function(t,e){var n=e.colIndex,o=e.rootState,a=o.board.columns[n];a.tasks.splice(0,a.tasks.length)})),Object(J["a"])(ae,A,(function(t,e){var n=e.task,o=e.label;n.labels.push(o)})),Object(J["a"])(ae,M,(function(t,e){var n=e.task,o=e.label,a=n.labels.findIndex((function(t){return t.name===o.name}));n.labels.splice(a,1)})),ae),actions:(se={},Object(J["a"])(se,x,(function(t,e){var n=t.commit,o=e.tasks,a=e.name;n(x,{tasks:o,name:a})})),Object(J["a"])(se,y,(function(t,e){var n=t.commit,o=e.task,a=e.key,s=e.value;n(y,{task:o,key:a,value:s})})),Object(J["a"])(se,_,(function(t,e){var n=t.commit,o=e.fromTasks,a=e.toTasks,s=e.fromTaskIndex,r=e.toTaskIndex;n(_,{fromTasks:o,toTasks:a,fromTaskIndex:s,toTaskIndex:r})})),Object(J["a"])(se,w,(function(t,e){var n=t.commit,o=t.rootState;n(w,{colIndex:e,rootState:o})})),Object(J["a"])(se,A,(function(t,e){var n=t.commit,o=e.task,a=e.label;n(A,{task:o,label:a})})),Object(J["a"])(se,M,(function(t,e){var n=t.commit,o=e.task,a=e.label;n(M,{task:o,label:a})})),se)},ke=be,ve={namespaced:!0,mutations:(de={},Object(J["a"])(de,T,(function(t,e){var n=e.name,o=e.color,a=e.rootState;a.board.columns.push({name:n,color:o,tasks:[]})})),Object(J["a"])(de,O,(function(t,e){var n=e.colIndex,o=e.rootState;o.board.columns.splice(n,1)})),Object(J["a"])(de,j,(function(t,e){var n=e.fromColIndex,o=e.toColIndex,a=e.rootState,s=a.board.columns,r=s.splice(n,1)[0];s.splice(o,0,r)})),de),actions:(pe={},Object(J["a"])(pe,T,(function(t,e){var n=t.commit,o=t.rootState,a=e.name,s=e.color;n(T,{name:a,color:s,rootState:o})})),Object(J["a"])(pe,j,(function(t,e){var n=t.commit,o=t.rootState,a=e.fromColIndex,s=e.toColIndex;n(j,{fromColIndex:a,toColIndex:s,rootState:o})})),Object(J["a"])(pe,O,(function(t,e){var n=t.commit,o=t.rootState;n(O,{colIndex:e,rootState:o})})),pe)},Ce=ve,ge={namespaced:!0,mutations:(fe={},Object(J["a"])(fe,S,(function(t,e){var n=e.task,o=e.comment;o.id=ce(),n.comments.push(o)})),Object(J["a"])(fe,I,(function(t,e){var n=e.task,o=e.name,a=e.commentIndex,s=window.prompt("To delete type a name of the comment");s===o&&n.comments.splice(a,1)})),fe),actions:(he={},Object(J["a"])(he,S,(function(t,e){var n=t.commit,o=e.task,a=e.comment;n(S,{task:o,comment:a})})),Object(J["a"])(he,I,(function(t,e){var n=t.commit,o=e.task,a=e.name,s=e.commentIndex;n(I,{task:o,name:a,commentIndex:s})})),he)},xe=ge;o["a"].use(D["a"]);var ye=JSON.parse(localStorage.getItem("board"))||ue,_e=new D["a"].Store({plugins:[me],modules:{task:ke,column:Ce,comment:xe},state:{board:ye},getters:{getTask:function(t){return function(e){var n=!0,o=!1,a=void 0;try{for(var s,r=t.board.columns[Symbol.iterator]();!(n=(s=r.next()).done);n=!0){var l=s.value,i=!0,c=!1,u=void 0;try{for(var m,d=l.tasks[Symbol.iterator]();!(i=(m=d.next()).done);i=!0){var p=m.value;if(p.id===e)return p}}catch(f){c=!0,u=f}finally{try{i||null==d.return||d.return()}finally{if(c)throw u}}}}catch(f){o=!0,a=f}finally{try{n||null==r.return||r.return()}finally{if(o)throw a}}}}}}),we=(n("927c"),n("e37d"));o["a"].config.productionTip=!1,o["a"].use(we["a"]),new o["a"]({router:ie,store:_e,render:function(t){return t(b)}}).$mount("#app")},"724e":function(t,e,n){},"85ec":function(t,e,n){},"927c":function(t,e,n){},"934e":function(t,e,n){},b39f:function(t,e,n){"use strict";var o=n("934e"),a=n.n(o);a.a},ce1b:function(t,e,n){},f24e:function(t,e,n){"use strict";var o=n("3a43"),a=n.n(o);a.a},f3b4:function(t,e,n){"use strict";var o=n("5106"),a=n.n(o);a.a},f9e1:function(t,e,n){"use strict";var o=n("23f4"),a=n.n(o);a.a}});
//# sourceMappingURL=app.4ec3a7fc.js.map