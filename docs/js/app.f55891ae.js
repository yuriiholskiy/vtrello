(function(t){function e(e){for(var o,r,l=e[0],i=e[1],c=e[2],m=0,d=[];m<l.length;m++)r=l[m],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&d.push(a[r][0]),a[r]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(t[o]=i[o]);u&&u(e);while(d.length)d.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],o=!0,l=1;l<n.length;l++){var i=n[l];0!==a[i]&&(o=!1)}o&&(s.splice(e--,1),t=r(r.s=n[0]))}return t}var o={},a={app:0},s=[];function r(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=o,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/vtrello/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],i=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var u=i;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var o=n("85ec"),a=n.n(o);a.a},"158c":function(t,e,n){"use strict";var o=n("ce1b"),a=n.n(o);a.a},"23f4":function(t,e,n){},3827:function(t,e,n){"use strict";var o=n("724e"),a=n.n(o);a.a},"3a43":function(t,e,n){},"425a":function(t,e,n){"use strict";var o=n("45ce"),a=n.n(o);a.a},"45ce":function(t,e,n){},5106:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("AppToolbar",{attrs:{title:"vtrello"}}),n("router-view")],1)},s=[],r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"w-full bg-orange py-3 text-xl text-white"},[t._v(" "+t._s(t.title)+" ")])},l=[],i={name:"AppToolbar",props:{title:{type:String,default:"Title"}}},c=i,u=(n("425a"),n("2877")),m=Object(u["a"])(c,r,l,!1,null,null,null),d=m.exports,p={name:"App",components:{AppToolbar:d}},f=p,h=(n("034f"),Object(u["a"])(f,a,s,!1,null,null,null)),k=h.exports,b=n("8c4f"),v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"board p-4 min-h-with-toolbar overflow-y-hidden overflow-x-auto"},[n("div",{staticClass:"flex flex-row items-start"},[t._l(t.board.columns,(function(e,o){return n("BoardColumn",{key:o,attrs:{column:e,board:t.board,"column-index":o}})})),n("div",{staticClass:"column flex"},[n("AppInputField",{staticClass:"p-2 mr-2 flex-grow rounded",attrs:{"field-type":"input",placeholder:"New Column Name"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.createColumn(e)}},model:{value:t.newColumnName,callback:function(e){t.newColumnName=e},expression:"newColumnName"}})],1)],2),n("AppModal",{attrs:{isOpen:t.isTaskOpen},on:{click:function(e){return e.target!==e.currentTarget?null:t.closeTaskModal(e)}}},[n("router-view")],1)],1)},C=[],g=(n("c975"),n("fb6a"),n("b0c0"),n("5530")),x="CREATE_TASK",y="UPDATE_TASK",_="MOVE_TASK",T="REMOVE_ALL_TASKS",O="CREATE_COLUMN",w="REMOVE_COLUMN",j="MOVE_COLUMN",I="ADD_COMMENT",S="DELETE_COMMENT",A=n("2f62"),D=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"fade",mode:"out-in"}},[t.isOpen?n("div",t._g({staticClass:"modal pin absolute px-4 z-50"},t.$listeners),[t._t("default")],2):t._e()])},E=[],M={name:"AppModal",props:{isOpen:{type:Boolean,default:!1}}},$=M,L=(n("3827"),Object(u["a"])($,D,E,!1,null,null,null)),N=L.exports,F=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("AppDrop",{on:{drop:t.moveTaskOrColumn}},[n("AppDrag",{staticClass:"column bg-grey-light p-2 mr-4 text-left shadow rounded max-h-164 overflow-y-auto overflow-x-hidden",attrs:{isDraggable:!0,"transfer-data":{type:"column",fromColIndex:t.columnIndex}}},[n("div",{staticClass:"flex items-center justify-around font-bold",on:{dblclick:t.openModal}},[n("span",[t._v(t._s(t.column.name))]),t.isClearBtnShown?n("button",{staticClass:"btn",on:{click:t.openTasksDeleteModal}},[t._v(" Clear tasks ")]):t._e()]),n("div",{staticClass:"list-reset"},[t._l(t.column.tasks,(function(e,o){return n("ColumnTask",{key:o,attrs:{"task-index":o,"column-index":t.columnIndex,column:t.column,task:e,board:t.board}})})),n("AppInputField",{staticClass:"mt-2",attrs:{"field-type":"input",placeholder:"+ Enter new task"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.createTask(t.column.tasks)}},model:{value:t.newTask,callback:function(e){t.newTask=e},expression:"newTask"}})],2)]),n("AppModal",{attrs:{isOpen:t.isModalOpen},on:{click:function(e){return e.target!==e.currentTarget?null:t.closeModal(e)}}},[n("div",{staticClass:"delete-modal w-1/2 h-64 mt-16 mx-auto p-2 bg-white flex flex-col justify-between items-center"},[n("div",[n("h2",{staticClass:"mt-2"},[t._v("Do you really want delete "+t._s(t.deleteModalText)+"?")]),n("p",{staticClass:"mt-2"},[t._v("It's unreversable action.")])]),n("div",[n("button",{staticClass:"btn bg-indigo",on:{click:function(e){t.isColumnDelete?t.removeColumn(t.columnIndex):t.removeAllTask(t.columnIndex)}}},[t._v(" Continue ")]),n("button",{staticClass:"btn ml-2 bg-red-light",on:{click:t.closeModal}},[t._v(" Close ")])])])])],1)},P=[],q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("AppDrop",{on:{drop:t.moveTaskOrColumn}},[n("AppDrag",{staticClass:"p-3 m-2 rounded cursor-pointer hover:bg-grey-lighter",class:t.classes,attrs:{"transfer-data":{type:"task",fromColIndex:t.columnIndex,fromTaskIndex:t.taskIndex}},on:{click:t.openTask}},[n("div",{staticClass:"w-full flex justify-between font-bold"},[n("p",[t._v(t._s(t.task.name))]),t.commentsCount>0?n("span",{staticClass:"text-sm"},[t._v(t._s(t.commentsCount)+" comments")]):t._e()]),n("TaskLabels",{attrs:{task:t.task}}),t.task.description?n("p",{staticClass:"w-full flex-no-shrink mt-1 text-sm"},[t._v(" "+t._s(t.task.description)+" ")]):t._e()],1)],1)},B=[],W=(n("99af"),n("caad"),n("a9e3"),n("2532"),n("ade3")),U={props:{board:{type:Object,required:!1},column:{type:Object,required:!0},columnIndex:{type:Number,required:!0}},methods:{moveTask:function(t){var e=t.fromColIndex,n=t.fromTaskIndex,o=this.board.columns[e].tasks;this.$store.dispatch("task/".concat(_),{fromTasks:o,fromTaskIndex:n,toTasks:this.column.tasks,toTaskIndex:this.taskIndex})},moveColumn:function(t){var e=t.fromColIndex;this.$store.dispatch("column/".concat(j),{fromColIndex:e,toColIndex:this.columnIndex})},moveTaskOrColumn:function(t){"task"===t.type?this.moveTask(t):this.moveColumn(t)}}},J=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",t._g({attrs:{draggable:t.isDraggable},on:{dragstart:function(e){return e.target!==e.currentTarget?null:t.handleDrag(e)},dragover:function(t){t.preventDefault()},dragenter:function(t){t.preventDefault()}}},t.$listeners),[t._t("default")],2)},K=[],R={name:"AppDrag",props:{transferData:{type:Object,required:!0},isDraggable:{type:Boolean,default:!0}},methods:{handleDrag:function(t){t.dataTransfer.effectAllowed="move",t.dataTransfer.dropEffect="move",t.dataTransfer.setData("payload",JSON.stringify(this.transferData))}}},V=R,z=Object(u["a"])(V,J,K,!1,null,null,null),H=z.exports,G=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{on:{drop:function(e){return e.stopPropagation(),t.handleDrop(e)},dragover:function(t){t.preventDefault()},dragenter:function(t){t.preventDefault()}}},[t._t("default")],2)},Q=[],X={name:"AppDrop",methods:{handleDrop:function(t){var e=JSON.parse(t.dataTransfer.getData("payload"));this.$emit("drop",e)}}},Y=X,Z=Object(u["a"])(Y,G,Q,!1,null,null,null),tt=Z.exports,et=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",t._l(t.task.labels,(function(t){return n("span",{key:t.name,staticClass:"color-label",style:{"background-color":t.color},attrs:{title:t.name}})})),0)},nt=[],ot={name:"TaskLabels",props:{task:{type:Object,required:!0}}},at=ot,st=(n("f3b4"),Object(u["a"])(at,et,nt,!1,null,null,null)),rt=st.exports,lt={name:"ColumnTask",props:{task:{type:Object,required:!0},taskIndex:{type:Number,required:!0}},mixins:[U],computed:{classes:function(){return Object(W["a"])({"text-grey-lighter bg-red-light hover:bg-red":this.isTodoColumn,"text-grey-lighter bg-green hover:bg-green-light":this.isDoneColumn,"text-grey-lighter bg-orange hover:bg-orange-light":this.isProgressColumn},this.color,!0)},commentsCount:function(){return this.task.comments.length},isTodoColumn:function(){return this.column.name.toLowerCase().includes("todo")},isDoneColumn:function(){return this.column.name.toLowerCase().includes("done")},isProgressColumn:function(){return this.column.name.toLowerCase().includes("progress")},isColorExist:function(){return this.column.color||"white"},color:function(){return"bg-".concat(this.isColorExist," hover:bg-").concat(this.isColorExist,"-light")}},methods:{openTask:function(){this.$router.push({name:"task",params:{id:this.task.id}})}},components:{AppDrag:H,AppDrop:tt,TaskLabels:rt}},it=lt,ct=Object(u["a"])(it,q,B,!1,null,null,null),ut=ct.exports,mt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return"textarea"===t.fieldType?n("textarea",t._g(t._b({staticClass:"relative w-full bg-grey-light py-2 pl-2 border rounded mt-2 h-32 border-none leading-normal outline-none",domProps:{value:t.value}},"textarea",t.$attrs,!1),t.combineListeners)):"input"===t.fieldType?n("input",t._g(t._b({staticClass:"w-full py-2 pl-2 block rounded bg-grey-lighten text-sm outline-none",domProps:{value:t.value}},"input",t.$attrs,!1),t.combineListeners)):t._e()},dt=[],pt={name:"AppFields",props:{value:{type:String,default:""},fieldType:{type:String,default:"input"}},computed:{combineListeners:function(){var t=this;return Object(g["a"])({},this.$listeners,{input:function(e){return t.$emit("input",e.target.value)}})}}},ft=pt,ht=Object(u["a"])(ft,mt,dt,!1,null,null,null),kt=ht.exports,bt={name:"BoardColumn",mixins:[U],data:function(){return{newTask:"",isModalOpen:!1,isColumnDelete:!0}},computed:{isClearBtnShown:function(){return this.column.tasks.length},deleteModalText:function(){return this.isColumnDelete?"this column":"this tasks"}},methods:{createTask:function(t){this.$store.dispatch("task/".concat(x),{tasks:t,name:this.newTask}),this.newTask=""},removeColumn:function(t){this.$store.dispatch("column/".concat(w),t),this.closeModal()},removeAllTask:function(t){this.$store.dispatch("task/".concat(T),t),this.closeModal()},openModal:function(){this.isModalOpen=!0},closeModal:function(){this.isModalOpen=!1,this.isColumnDelete=!0},openTasksDeleteModal:function(){this.isColumnDelete=!1,this.openModal()}},components:{ColumnTask:ut,AppDrag:H,AppDrop:tt,AppInputField:kt,AppModal:N}},vt=bt,Ct=(n("f9e1"),Object(u["a"])(vt,F,P,!1,null,null,null)),gt=Ct.exports,xt={name:"Board",data:function(){return{newColumnName:""}},computed:Object(g["a"])({},Object(A["c"])(["board"]),{isTaskOpen:function(){return"task"===this.$route.name}}),methods:{closeTaskModal:function(){this.$router.push({name:"board"})},createColumn:function(){var t=this.newColumnName.indexOf("#"),e="",n=this.newColumnName.slice(t+1);e=-1!==t?this.newColumnName.slice(0,t):this.newColumnName;var o=-1!==t?n:"white";this.$store.dispatch("column/".concat(O),{name:e,color:o}),this.newColumnName=""}},components:{AppModal:N,BoardColumn:gt,AppInputField:kt}},yt=xt,_t=(n("158c"),Object(u["a"])(yt,v,C,!1,null,null,null)),Tt=_t.exports,Ot=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"task-view max-h-128 overflow-y-auto"},[n("div",{staticClass:"flex flex-col flex-grow items-start justify-between px-4"},[n("TaskLabels",{attrs:{task:t.task}}),n("TaskUpdateForm",{staticClass:"mt-2",attrs:{task:t.task}}),n("button",{staticClass:"btn mt-4 bg-indigo rounded",attrs:{type:"button"},on:{click:t.hideComments}},[t._v(" "+t._s(t.hideCommentsBtnText)+" ")]),n("button",{staticClass:"btn mt-4 bg-indigo rounded",attrs:{type:"button"},on:{click:t.addLabels}},[t._v(" Add labels ")]),n("transition",{attrs:{name:"fade",mode:"out-in"}},[t.isCommentShow?n("div",{staticClass:"w-full md:h-auto"},[n("h3",{staticClass:"mt-4 text-grey-darker text-xl"},[t._v("Comments:")]),t.isCommentShow?n("div",{staticClass:"block w-full"},[t.task.comments.length?n("CommentList",{attrs:{task:t.task}}):t._e(),n("CommentAddForm",{attrs:{task:t.task}})],1):t._e()]):t._e()])],1)])},wt=[],jt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("form",{staticClass:"w-full"},[n("AppInputField",{staticClass:"text-xl bg-grey-light",attrs:{type:"text",value:t.task.name},on:{change:function(e){return t.updateTaskProp(e.target.value,"name")},keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.updateTaskProp(e.target.value,"name")}}}),n("AppInputField",{attrs:{"field-type":"textarea",value:t.task.description,placeholder:"+ you can add a description"},on:{change:function(e){return t.updateTaskProp(e.target.value,"description")},keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.updateTaskProp(e.target.value,"description")}}})],1)},It=[],St={name:"TaskUpdateForm",props:{task:{type:Object,required:!0}},methods:{updateTaskProp:function(t,e){this.$store.dispatch("task/".concat(y),{task:this.task,key:e,value:t})}},components:{AppInputField:kt}},At=St,Dt=Object(u["a"])(At,jt,It,!1,null,null,null),Et=Dt.exports,Mt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"comments mt-2 list-reset w-full"},t._l(t.task.comments,(function(e,o){return n("CommentItem",{key:e.id,attrs:{comment:e,"comment-index":o,task:t.task}})})),1)},$t=[],Lt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[n("div",{staticClass:"p-2"},[n("div",{staticClass:"comment"},[n("div",[n("span",{staticClass:"author"},[t._v(" "+t._s(t.comment.author)+" ")]),n("span",{staticClass:"inline-flex px-2"},[t._v(t._s(t.comment.content))])]),n("span",{staticClass:"text-xl cursor-pointer",on:{click:function(e){return t.deleteComment(t.comment.author)}}},[t._v("×")])])])])},Nt=[],Ft={name:"Comment",props:{comment:{type:Object,required:!0},commentIndex:{type:Number,required:!0},task:{type:Object,required:!0}},methods:{deleteComment:function(t){this.$store.dispatch("comment/".concat(S),{task:this.task,name:t,commentIndex:this.commentIndex})}}},Pt=Ft,qt=(n("f24e"),Object(u["a"])(Pt,Lt,Nt,!1,null,null,null)),Bt=qt.exports,Wt={name:"CommentList",props:{task:{type:Object,required:!0}},components:{CommentItem:Bt}},Ut=Wt,Jt=Object(u["a"])(Ut,Mt,$t,!1,null,null,null),Kt=Jt.exports,Rt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("form",{staticClass:"my-2 w-full",on:{submit:function(e){return e.preventDefault(),t.addComment(e)}}},[n("AppInputField",{staticClass:"bg-grey-light",attrs:{type:"text",placeholder:"who you are?"},model:{value:t.comment.author,callback:function(e){t.$set(t.comment,"author",e)},expression:"comment.author"}}),n("AppInputField",{staticClass:"h-16",attrs:{"field-type":"textarea",placeholder:"+ you can add a comment"},model:{value:t.comment.content,callback:function(e){t.$set(t.comment,"content",e)},expression:"comment.content"}}),n("input",{staticClass:"btn rounded",class:{"opacity-50 cursor-not-allowed":t.isCommentBtnDisabled},attrs:{type:"submit",value:"+ add comment",disabled:t.isCommentBtnDisabled}})],1)},Vt=[],zt={name:"CommentAddForm",props:{task:{type:Object,required:!0}},data:function(){return{comment:{author:"",content:""}}},computed:{isCommentBtnDisabled:function(){return!(this.comment.author&&this.comment.content)}},methods:{createFreshComment:function(){return{author:"",content:""}},addComment:function(){var t={author:this.comment.author,content:this.comment.content};this.$store.dispatch("comment/".concat(I),{task:this.task,comment:t}),this.comment=this.createFreshComment()}},components:{AppInputField:kt}},Ht=zt,Gt=Object(u["a"])(Ht,Rt,Vt,!1,null,null,null),Qt=Gt.exports,Xt={name:"Task",data:function(){return{isCommentShow:!1}},computed:Object(g["a"])({},Object(A["b"])(["getTask"]),{task:function(){return this.getTask(this.$route.params.id)},hideCommentsBtnText:function(){return this.isCommentShow?"Hide comments":"Show comments"}}),methods:{hideComments:function(){this.isCommentShow=!this.isCommentShow},addLabels:function(){console.log("addLabels")}},components:{TaskUpdateForm:Et,CommentList:Kt,CommentAddForm:Qt,TaskLabels:rt}},Yt=Xt,Zt=(n("b39f"),Object(u["a"])(Yt,Ot,wt,!1,null,null,null)),te=Zt.exports;o["a"].use(b["a"]);var ee,ne,oe=[{path:"/",name:"board",component:Tt,children:[{path:"task/:id",name:"task",component:te}]}],ae=new b["a"]({mode:"history",base:"/vtrello/",routes:oe}),se=ae,re=(n("a4d3"),n("e01a"),n("d28b"),n("d3b7"),n("3ca3"),n("ddb0"),n("a434"),n("25f0"),function(){return"_"+Math.random().toString(16).slice(2)}),le={name:"workshop",columns:[{name:"todo",tasks:[{description:"",name:"first task",id:re(),userAssigned:null,comments:[{id:re(),content:"Some comment title",author:"Who?"},{id:re(),content:"Some comment title 2",author:"Who?"}],labels:[]},{description:"",name:"second task",id:re(),userAssigned:null,comments:[{id:re(),content:"Some comment title",author:"Who?"}],labels:[{name:"done",color:"#38c172"},{name:"checked",color:"#6cb2eb"}]},{description:"",name:"and thrid",id:re(),userAssigned:null,comments:[{id:re(),content:"Some comment title",author:"Who?"},{id:re(),content:"Some comment title 2",author:"Who?"},{id:re(),content:"Some comment title 3",author:"Who?"}],labels:[{name:"working",color:"#faad63"}]}]},{name:"in-progress",tasks:[{description:"",name:"first task",id:re(),userAssigned:null,comments:[{id:re(),content:"Some comment title",author:"Who?"},{id:re(),content:"Some comment title 2",author:"Who?"}],labels:[]}]},{name:"done",tasks:[{description:"",name:"first task",id:re(),userAssigned:null,comments:[{id:re(),content:"Some comment title",author:"Who?"},{id:re(),content:"Some comment title 2",author:"Who?"},{id:re(),content:"Some comment title 3",author:"Who?"}],labels:[{name:"need improvement",color:"#ba2be2"}]}]}]};function ie(t){t.subscribe((function(t,e){localStorage.setItem("board",JSON.stringify(e.board))}))}var ce,ue,me,de,pe={namespaced:!0,mutations:(ee={},Object(W["a"])(ee,x,(function(t,e){var n=e.tasks,o=e.name;n.push({name:o,id:re(),description:"",comments:[]})})),Object(W["a"])(ee,y,(function(t,e){var n=e.task,a=e.key,s=e.value;o["a"].set(n,a,s)})),Object(W["a"])(ee,_,(function(t,e){var n=e.fromTasks,o=e.toTasks,a=e.fromTaskIndex,s=e.toTaskIndex,r=n.splice(a,1)[0];o.splice(s,0,r)})),Object(W["a"])(ee,T,(function(t,e){var n=e.colIndex,o=e.rootState,a=o.board.columns[n];a.tasks.splice(0,a.tasks.length)})),ee),actions:(ne={},Object(W["a"])(ne,x,(function(t,e){var n=t.commit,o=e.tasks,a=e.name;n(x,{tasks:o,name:a})})),Object(W["a"])(ne,y,(function(t,e){var n=t.commit,o=e.task,a=e.key,s=e.value;n(y,{task:o,key:a,value:s})})),Object(W["a"])(ne,_,(function(t,e){var n=t.commit,o=e.fromTasks,a=e.toTasks,s=e.fromTaskIndex,r=e.toTaskIndex;n(_,{fromTasks:o,toTasks:a,fromTaskIndex:s,toTaskIndex:r})})),Object(W["a"])(ne,T,(function(t,e){var n=t.commit,o=t.rootState;n(T,{colIndex:e,rootState:o})})),ne)},fe=pe,he={namespaced:!0,mutations:(ce={},Object(W["a"])(ce,O,(function(t,e){var n=e.name,o=e.color,a=e.rootState;a.board.columns.push({name:n,color:o,tasks:[]})})),Object(W["a"])(ce,w,(function(t,e){var n=e.colIndex,o=e.rootState;o.board.columns.splice(n,1)})),Object(W["a"])(ce,j,(function(t,e){var n=e.fromColIndex,o=e.toColIndex,a=e.rootState,s=a.board.columns,r=s.splice(n,1)[0];s.splice(o,0,r)})),ce),actions:(ue={},Object(W["a"])(ue,O,(function(t,e){var n=t.commit,o=t.rootState,a=e.name,s=e.color;n(O,{name:a,color:s,rootState:o})})),Object(W["a"])(ue,j,(function(t,e){var n=t.commit,o=t.rootState,a=e.fromColIndex,s=e.toColIndex;n(j,{fromColIndex:a,toColIndex:s,rootState:o})})),Object(W["a"])(ue,w,(function(t,e){var n=t.commit,o=t.rootState;n(w,{colIndex:e,rootState:o})})),ue)},ke=he,be={namespaced:!0,mutations:(me={},Object(W["a"])(me,I,(function(t,e){var n=e.task,o=e.comment;o.id=re(),n.comments.push(o)})),Object(W["a"])(me,S,(function(t,e){var n=e.task,o=e.name,a=e.commentIndex,s=window.prompt("To delete type a name of the comment");s===o&&n.comments.splice(a,1)})),me),actions:(de={},Object(W["a"])(de,I,(function(t,e){var n=t.commit,o=e.task,a=e.comment;n(I,{task:o,comment:a})})),Object(W["a"])(de,S,(function(t,e){var n=t.commit,o=e.task,a=e.name,s=e.commentIndex;n(S,{task:o,name:a,commentIndex:s})})),de)},ve=be;o["a"].use(A["a"]);var Ce=JSON.parse(localStorage.getItem("board"))||le,ge=new A["a"].Store({plugins:[ie],modules:{task:fe,column:ke,comment:ve},state:{board:Ce},getters:{getTask:function(t){return function(e){var n=!0,o=!1,a=void 0;try{for(var s,r=t.board.columns[Symbol.iterator]();!(n=(s=r.next()).done);n=!0){var l=s.value,i=!0,c=!1,u=void 0;try{for(var m,d=l.tasks[Symbol.iterator]();!(i=(m=d.next()).done);i=!0){var p=m.value;if(p.id===e)return p}}catch(f){c=!0,u=f}finally{try{i||null==d.return||d.return()}finally{if(c)throw u}}}}catch(f){o=!0,a=f}finally{try{n||null==r.return||r.return()}finally{if(o)throw a}}}}}});n("927c");o["a"].config.productionTip=!1,new o["a"]({router:se,store:ge,render:function(t){return t(k)}}).$mount("#app")},"724e":function(t,e,n){},"85ec":function(t,e,n){},"927c":function(t,e,n){},"934e":function(t,e,n){},b39f:function(t,e,n){"use strict";var o=n("934e"),a=n.n(o);a.a},ce1b:function(t,e,n){},f24e:function(t,e,n){"use strict";var o=n("3a43"),a=n.n(o);a.a},f3b4:function(t,e,n){"use strict";var o=n("5106"),a=n.n(o);a.a},f9e1:function(t,e,n){"use strict";var o=n("23f4"),a=n.n(o);a.a}});
//# sourceMappingURL=app.f55891ae.js.map