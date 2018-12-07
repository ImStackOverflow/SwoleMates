webpackJsonp([3],{"/eoA":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("NHnr"),i=n("8yBH"),o=n("bOdI"),s=n.n(o),a=n("yviF"),c=n.n(a),u={name:"mealPost",data:function(){var t;return t={mealEntries:[],photoDescription:""},s()(t,"nutrition.calories",""),s()(t,"file",null),s()(t,"dialog",!1),s()(t,"disableButton",!0),s()(t,"likes",0),s()(t,"isLiked",!1),t},firestore:{mealEntries:r.fsdb.collection("meals")},watch:{dialog:function(t){t||(this.$refs.imageInput.value="",this.$refs.fieldForm.reset())}},methods:{resetForm:function(){this.dialog=!1,this.disableButton=!0},postMealPhoto:function(){var t=this;this.$firestoreRefs.mealEntries.add({food:this.photoDescription,created:c.a.firestore.FieldValue.serverTimestamp(),user:this.$store.state.user,comments:[],fileLocation:"",likes:this.likes,isLiked:this.isLiked}).then(function(n){t.photoDescription="",e(n.id)}).catch(function(t){console.error("Error creating post document",t)});var e=function(e){var n="meals/"+t.$store.state.user.uid+"/"+e+"/"+t.file.name;r.storage.ref().child(n).put(t.file).then(function(n){t.$firestoreRefs.mealEntries.doc(e).update({fileLocation:n.ref.location.path}).catch(function(t){console.error("Error editing document file location",t)})}).catch(function(t){console.log("Error uploading file",t)})}},onFileChange:function(t){var e=t.target.files||t.dataTransfer.files;e.length&&(this.file=e[0],this.disableButton=!1)}}},l={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{staticStyle:{height:"70px"},attrs:{id:"dialog_box"}},[n("v-layout",{attrs:{row:"","justify-center":""}},[n("v-dialog",{attrs:{persistent:"","max-width":"500px"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[n("v-btn",{staticClass:"white--text",attrs:{slot:"activator",color:"orange"},on:{click:function(e){t.dialog=!0}},slot:"activator"},[n("v-icon",{attrs:{color:"white",medium:""}},[t._v("\n        cloud_upload\n      ")]),t._v("  Upload a photo\n    ")],1),t._v(" "),n("v-card",[n("v-card-title",{staticClass:"headline"},[t._v("Upload Your Meal")]),t._v(" "),n("v-form",{ref:"fieldForm",staticClass:"form-container"},[n("v-container",{attrs:{fluid:""}},[n("v-flex",{attrs:{xs12:""}},[n("v-text-field",{ref:"clearDescription",attrs:{label:"Meal*",required:""},model:{value:t.photoDescription,callback:function(e){t.photoDescription="string"==typeof e?e.trim():e},expression:"photoDescription"}}),t._v(" "),n("v-form",{ref:"uploadForm",on:{submit:function(e){return e.preventDefault(),t.postMealPhoto(e)}}},[n("input",{ref:"imageInput",attrs:{type:"file"},on:{change:t.onFileChange}}),t._v(" "),n("v-card-actions",[n("v-spacer"),t._v(" "),n("v-btn",{attrs:{color:"blue darken-1",flat:""},on:{click:t.resetForm}},[t._v("\n                        Close")]),t._v(" "),n("v-btn",{ref:"postButton",staticClass:"white--text",attrs:{color:"orange",type:"submit",disabled:t.disableButton},on:{click:t.resetForm}},[t._v("\n                          Post\n                        ")])],1)],1),t._v(" "),n("small",[t._v("*indicates required field")])],1)],1)],1)],1)],1)],1)],1)},staticRenderFns:[]};var f=n("VU/8")(u,l,!1,function(t){n("0l6D")},null,null).exports,d={components:{mealTemplate:i.a,mealPost:f},data:function(){return{mealEntries:[]}},firestore:{mealEntries:r.fsdb.collection("meals")}},p={render:function(){var t=this.$createElement,e=this._self._c||t;return e("v-container",{attrs:{fluid:""}},[e("v-layout",{attrs:{row:"",wrap:""}},[e("v-flex",{staticClass:"text-xs-center",attrs:{xs12:"","mt-5":""}},[e("h1",[this._v("Meal Upload")])]),this._v(" "),e("v-flex",{staticClass:"text-xs-center",attrs:{xs12:"","mt-3":""}},[e("mealPost"),this._v(" "),this._l(this.mealEntries,function(t){return e("mealTemplate",{key:t.id,attrs:{item:t}})})],2)],1)],1)},staticRenderFns:[]},h=n("VU/8")(d,p,!1,null,null,null);e.default=h.exports},"0l6D":function(t,e){},"21It":function(t,e,n){"use strict";var r=n("FtD3");t.exports=function(t,e,n){var i=n.config.validateStatus;n.status&&i&&!i(n.status)?e(r("Request failed with status code "+n.status,n.config,null,n.request,n)):t(n)}},"5VQ+":function(t,e,n){"use strict";var r=n("cGG2");t.exports=function(t,e){r.forEach(t,function(n,r){r!==e&&r.toUpperCase()===e.toUpperCase()&&(t[e]=n,delete t[r])})}},"5xdV":function(t,e,n){"use strict";var r=n("bOdI"),i=n.n(r),o=n("NHnr"),s=(n("yviF"),{name:"updateMeal",props:["item"],data:function(){return{mealEntries:[],photoDescription:"",calories:"",likes:0,file:null,dialog:!1,updatedValue:this.updatedField,updatedField:this.updatedValue}},firestore:function(){return{mealItems:o.fsdb.collection("meals")}},watch:{dialog:function(t){t||(this.$refs.imageInput.value="",this.$refs.postButton.disabled=!0)}},methods:{updatePost:function(){var t=this;this.$firestoreRefs.mealItems.doc(this.item.id).update(i()({},"nutrition."+this.updatedField,{attribute:this.updatedField,val:this.updatedValue})).then(function(){t.updatedField="",t.updatedValue=""}).catch(function(t){console.error("Error updating post",t)})}}}),a={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{staticStyle:{height:"70px"},attrs:{id:"dialog_box"}},[n("v-layout",{attrs:{row:"","justify-center":""}},[n("v-dialog",{attrs:{persistent:"","max-width":"500px"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[n("v-btn",{staticClass:"white--text",attrs:{slot:"activator",color:"orange"},on:{click:function(e){t.dialog=!0}},slot:"activator"},[n("v-icon",{attrs:{color:"white",medium:""}},[t._v("\n        update\n      ")]),t._v("  Update Post\n    ")],1),t._v(" "),n("v-card",[n("v-card-title",{staticClass:"headline"},[t._v("Update Your Meal")]),t._v(" "),n("v-form",{staticClass:"form-container"},[n("v-container",{attrs:{fluid:""}},[n("v-flex",{attrs:{xs12:""}},[n("v-text-field",{attrs:{label:"New Nutrition Fact",required:""},model:{value:t.updatedField,callback:function(e){t.updatedField="string"==typeof e?e.trim():e},expression:"updatedField"}}),t._v(" "),n("v-text-field",{attrs:{label:"Value",required:""},model:{value:t.updatedValue,callback:function(e){t.updatedValue="string"==typeof e?e.trim():e},expression:"updatedValue"}}),t._v(" "),n("v-form",{on:{submit:function(e){return e.preventDefault(),t.updatePost(e)}}},[n("v-card-actions",[n("v-spacer"),t._v(" "),n("v-btn",{attrs:{color:"blue darken-1",flat:""},on:{click:function(e){t.dialog=!1}}},[t._v("\n                        Close")]),t._v(" "),n("v-btn",{ref:"postButton",staticClass:"white--text",attrs:{color:"orange",type:"submit",onClick:"this.form.reset()"},on:{click:function(e){t.dialog=!1}}},[t._v("\n                          Post\n                        ")])],1)],1)],1)],1)],1)],1)],1)],1)],1)},staticRenderFns:[]};var c=n("VU/8")(s,a,!1,function(t){n("WzNa")},null,null);e.a=c.exports},"7GwW":function(t,e,n){"use strict";var r=n("cGG2"),i=n("21It"),o=n("DQCr"),s=n("oJlt"),a=n("GHBc"),c=n("FtD3"),u="undefined"!=typeof window&&window.btoa&&window.btoa.bind(window)||n("thJu");t.exports=function(t){return new Promise(function(e,l){var f=t.data,d=t.headers;r.isFormData(f)&&delete d["Content-Type"];var p=new XMLHttpRequest,h="onreadystatechange",m=!1;if("undefined"==typeof window||!window.XDomainRequest||"withCredentials"in p||a(t.url)||(p=new window.XDomainRequest,h="onload",m=!0,p.onprogress=function(){},p.ontimeout=function(){}),t.auth){var v=t.auth.username||"",g=t.auth.password||"";d.Authorization="Basic "+u(v+":"+g)}if(p.open(t.method.toUpperCase(),o(t.url,t.params,t.paramsSerializer),!0),p.timeout=t.timeout,p[h]=function(){if(p&&(4===p.readyState||m)&&(0!==p.status||p.responseURL&&0===p.responseURL.indexOf("file:"))){var n="getAllResponseHeaders"in p?s(p.getAllResponseHeaders()):null,r={data:t.responseType&&"text"!==t.responseType?p.response:p.responseText,status:1223===p.status?204:p.status,statusText:1223===p.status?"No Content":p.statusText,headers:n,config:t,request:p};i(e,l,r),p=null}},p.onerror=function(){l(c("Network Error",t,null,p)),p=null},p.ontimeout=function(){l(c("timeout of "+t.timeout+"ms exceeded",t,"ECONNABORTED",p)),p=null},r.isStandardBrowserEnv()){var y=n("p1b6"),w=(t.withCredentials||a(t.url))&&t.xsrfCookieName?y.read(t.xsrfCookieName):void 0;w&&(d[t.xsrfHeaderName]=w)}if("setRequestHeader"in p&&r.forEach(d,function(t,e){void 0===f&&"content-type"===e.toLowerCase()?delete d[e]:p.setRequestHeader(e,t)}),t.withCredentials&&(p.withCredentials=!0),t.responseType)try{p.responseType=t.responseType}catch(e){if("json"!==t.responseType)throw e}"function"==typeof t.onDownloadProgress&&p.addEventListener("progress",t.onDownloadProgress),"function"==typeof t.onUploadProgress&&p.upload&&p.upload.addEventListener("progress",t.onUploadProgress),t.cancelToken&&t.cancelToken.promise.then(function(t){p&&(p.abort(),l(t),p=null)}),void 0===f&&(f=null),p.send(f)})}},"8yBH":function(t,e,n){"use strict";var r=n("bOdI"),i=n.n(r),o=n("NHnr"),s=n("9v1A"),a=n("yviF"),c=n.n(a),u=n("5xdV"),l=n("mtWM"),f=n.n(l),d=["item_name","brand_name","nf_calories","nf_sodium","nf_serving_weight_grams","item_type"],p={item_type:1},h={from:0,to:5e3},m={props:["query","show"],data:function(){return{inProgress:!1,dialog:!1,nutrition:{}}},watch:{query:function(){this.dialog=!0,this.inProgress=!0,this.getInfo()}},methods:{fullSend:function(){this.$emit("nutrition-recieved",this.nutrition)},getInfo:function(){var t=this;this.inProgress=!0,this.getNutritionInfo(this.query).then(function(e){t.nutrition=t.extractFields(e.hits[0].fields),t.inProgress=!1}).catch(function(t){console.error("there was a fuckup getting nutrition info: "+t)})},getNutritionInfo:function(t){var e={appId:"61d8ed61",appKey:"e4a75788c608ec7da58220c3e25540dc",fields:d,sort:{field:"nf_calories",order:"desc"},min_score:.5,query:t,filters:{not:p,nf_calories:h}};return f.a.post("https://api.nutritionix.com/v1_1/search",e).then(function(t){return t.data}).catch(function(t){console.error("there was an error getting nutrition information:"+t)})},extractFields:function(t){return{calories:t.nf_calories,name:t.item_name,"serving_size (grams)":t.nf_serving_weight_grams}}}},v={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text-xs-center"},[n("v-dialog",{attrs:{width:"500"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[n("v-card",[t.inProgress?n("div",[n("v-card-title",{staticClass:"headline grey lighten-2",attrs:{"primary-title":""}},[t._v("\n          Getting nutition Info\n          "),n("v-progress-linear",{attrs:{indeterminate:!0}})],1)],1):n("div",[n("v-card-title",[t._v("\n        Nutrition info for "+t._s(t.query)+" is:\n        "+t._s(t.nutrition)+"\n        ")]),t._v(" "),n("v-divider"),t._v(" "),n("v-card-actions",[n("v-spacer"),t._v(" "),n("v-btn",{attrs:{color:"red",flat:""},on:{click:function(e){t.dialog=!1}}},[t._v("\n          Its Wrong!\n        ")]),t._v(" "),n("v-btn",{attrs:{color:"green",flat:""},on:{click:function(e){t.dialog=!1,t.fullSend()}}},[t._v("\n          Thats Correct\n        ")])],1)],1)])],1)],1)},staticRenderFns:[]},g={components:{NutritionX:n("VU/8")(m,v,!1,null,null,null).exports},props:["pictureUrl"],data:function(){return{inProgress:!1,showNutrition:!1,dialog:!1,labels:{},query:"dummy",message:{}}},methods:{passit:function(t){this.$emit("nutrition-recieved",t)},getNutritionInfo:function(t){this.dialog=!1,this.showNutrition=!0,this.query=t},userSelection:function(){var t=this;this.inProgress=!0,this.getLabels(this.pictureUrl).then(function(e){t.labels=e,t.inProgress=!1}).catch(function(t){console.error("there was a fuckup getting nutrition info: "+t)})},getLabels:function(t){var e={requests:[{image:{source:{imageUri:t}},features:[{type:"LABEL_DETECTION"}]}]};return f.a.post("https://vision.googleapis.com/v1/images:annotate?key=AIzaSyDKeLsWxRS_tg5zzkD1qlw-ot5Jl_MZFyE",e).then(function(t){try{var e=function(t){var e=[],n=t.data.responses[0].labelAnnotations;for(var r in n)e.push(n[r].description);return e}(t)}catch(t){console.error("there was an error listifying labels: "+error)}finally{return e}}).catch(function(t){console.error("error getting labels :"+t)})}}},y={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text-xs-center"},[n("v-dialog",{attrs:{width:"500"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[n("v-btn",{attrs:{slot:"activator",color:"green lighten-2",dark:""},nativeOn:{click:function(e){return t.userSelection(e)}},slot:"activator"},[t._v("\n    Retrieve Nutrition Information\n    ")]),t._v(" "),n("v-card",[t.inProgress?n("div",[n("v-card-title",{staticClass:"headline grey lighten-2",attrs:{"primary-title":""}},[t._v("\n          Identifying food\n          "),n("v-progress-linear",{attrs:{indeterminate:!0}})],1)],1):n("div",[n("v-card-title",[n("v-list",t._l(t.labels,function(e){return n("v-list-tile",{key:e,on:{click:function(n){t.getNutritionInfo(e)}}},[n("v-list-tile-content",[n("v-list-tile-title",{domProps:{textContent:t._s(e)}})],1)],1)}))],1),t._v(" "),n("v-divider"),t._v(" "),n("v-card-actions",[n("v-spacer"),t._v(" "),n("v-btn",{attrs:{color:"primary",flat:""},on:{click:function(e){t.dialog=!1}}},[t._v("\n          Cancel\n        ")])],1)],1)])],1),t._v(" "),n("nutrition-x",{attrs:{query:t.query},on:{"nutrition-recieved":t.passit}})],1)},staticRenderFns:[]},w=n("VU/8")(g,y,!1,null,null,null).exports,_={name:"mealTemplate",props:["item"],components:{updateMeal:u.a,GoogleVisionModal:w},data:function(){return{newComment:"",imageUrl:"",updatedField:"",updatedValue:""}},mounted:function(){this.getImageUrl()},firestore:function(){return{mealItems:o.fsdb.collection("meals"),users:o.fsdb.collection("users")}},computed:{photoDate:function(){if(this.item.created)return Object(s.a)(1e3*this.item.created.seconds)},dateString:function(){if(this.item.created)return new Date(1e3*this.item.created.seconds).toString()},isOwner:function(){return this.item.user.uid===this.$store.state.user.uid},likedByUser:function(){var t=this,e=!1;this.$firestoreRefs.users.doc(this.$store.state.user.uid).get().then(function(n){var r=n.get("likedPhotos");return console.log(r),null!=r&&(e=r.includes(t.item.id),console.log(r.includes(t.item.id))),e}).catch(function(t){console.log("Error fetching liked image from database",t)})}},watch:{item:function(t,e){this.getImageUrl()}},methods:{deleteItem:function(){this.$firestoreRefs.mealItems.doc(this.item.id).delete().catch(function(t){console.log("Error deleting item from database",t)}),o.storage.ref().child(this.item.fileLocation).delete().catch(function(t){console.log("Error deleting image file from storage",t)})},getImageUrl:function(){var t=this;"fileLocation"in this.item&&""!==this.item.fileLocation&&o.storage.ref().child(this.item.fileLocation).getDownloadURL().then(function(e){t.imageUrl=e}).catch(function(t){console.log("Error downloading image",t)})},likeItem:function(){var t=this,e=this.$firestoreRefs.users.doc(this.$store.state.user.uid),n=this.$firestoreRefs.mealItems.doc(this.item.id),r=c.a.firestore.FieldValue;e.get().then(function(i){0==t.item.isLiked?(t.item.likes++,e.update({likedPhotos:r.arrayUnion(t.item.id)}),t.item.isLiked=!0):(t.item.likes--,e.update({likedPhotos:r.arrayRemove(t.item.id)}),t.item.isLiked=!1),n.update({likes:t.item.likes}),n.update({isLiked:t.item.isLiked})}).catch(function(t){console.log("Error liking image file in database",t)})},postComment:function(){var t=this;this.$firestoreRefs.mealItems.doc(this.item.id).update({comments:c.a.firestore.FieldValue.arrayUnion({commentText:this.newComment,user:this.$store.state.user})}).then(function(){t.newComment=""}).catch(function(t){console.error("Error creating comment",t)})},updatePost:function(){var t=this;this.$firestoreRefs.mealItems.doc(this.item.id).update(i()({},"nutrition."+this.updatedField,{attribute:this.updatedField,val:this.updatedValue})).then(function(){t.updatedField="",t.updatedValue=""})},updateFromNutrition:function(t){this.updateAField("calories",t.calories),this.updateAField("Serving Size (grams)",t["serving_size (grams)"])},updateAField:function(t,e){this.$firestoreRefs.mealItems.doc(this.item.id).update(i()({},"nutrition."+t,{attribute:t,val:e})).catch(function(t){console.error("Error updating post",t)})}}},x={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-layout",[n("v-flex",{attrs:{xs12:"",sm8:"","offset-sm2":""}},[n("div",{attrs:{id:"progress-pic"}},[n("v-app",{attrs:{id:"v-progress-pic"}},[n("v-card",[n("v-container",{attrs:{fluid:"","grid-list-md":""}},[n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",[n("div",{staticClass:"avatar",attrs:{align:"left"}},[n("v-avatar",{attrs:{slot:"activator",size:"36px"},slot:"activator"},[n("img",{attrs:{src:t.item.user.profPhotoUrl}})]),t._v("   "+t._s(t.item.user.username)+"\n                  ")],1),t._v(" "),n("div",{staticClass:"timestamp",attrs:{title:t.dateString}},[t._v("\n                    "+t._s(t.photoDate)+"\n                  ")]),t._v(" "),n("br"),n("br"),t._v(" "),n("v-img",{attrs:{src:t.imageUrl,height:"400px"}}),t._v(" "),n("v-card-actions",{attrs:{align:"right"}},[n("v-btn",{directives:[{name:"show",rawName:"v-show",value:t.item.isLiked,expression:"item.isLiked"}],attrs:{flat:"",color:"red",icon:""},on:{click:t.likeItem}},[n("v-icon",[t._v("favorite")]),t._v(t._s(t.item.likes)+"\n                    ")],1),t._v(" "),n("v-btn",{directives:[{name:"show",rawName:"v-show",value:!t.item.isLiked,expression:"!item.isLiked"}],attrs:{icon:""},on:{click:t.likeItem}},[n("v-icon",[t._v("favorite")]),t._v(t._s(t.item.likes)+"\n                    ")],1),t._v("\n                      "+t._s(t.likedByUser)+"\n                    "),t.isOwner?n("v-btn",{staticStyle:{float:"right"},attrs:{icon:"",flat:"",color:"red"},on:{click:t.deleteItem}},[n("v-icon",[t._v("delete")])],1):t._e(),t._v(" "),t.isOwner?n("google-vision-modal",{attrs:{pictureUrl:t.imageUrl},on:{"nutrition-recieved":t.updateFromNutrition}}):t._e()],1),t._v(" "),n("v-spacer",{attrs:{align:"left"}},[t._v("\n                            "+t._s(t.item.food)+"\n                    ")]),t._v(" "),t._l(t.item.nutrition,function(e){return n("v-spacer",{key:e.key,attrs:{align:"left"}},[t._v("\n                             "+t._s(e.attribute)+": "+t._s(e.val)+"\n                    ")])})],2)],1),t._v(" "),t.isOwner?n("updateMeal",{attrs:{item:this.item}}):t._e(),t._v(" "),n("v-form",[n("v-text-field",{attrs:{label:"Comment...",required:""},model:{value:t.newComment,callback:function(e){t.newComment="string"==typeof e?e.trim():e},expression:"newComment"}}),t._v(" "),n("v-btn",{on:{click:t.postComment}},[t._v("\n                  Post Comment\n                ")])],1),t._v(" "),n("h4",[t._v("Comments")]),t._v(" "),t._l(t.item.comments,function(e){return n("div",[n("h5",[t._v(t._s(e.user.email)+":")]),t._v(" "),n("p",[t._v(t._s(e.commentText)+" ")])])})],2)],1)],1)],1)])],1)},staticRenderFns:[]};var b=n("VU/8")(_,x,!1,function(t){n("ukyY")},null,null);e.a=b.exports},DQCr:function(t,e,n){"use strict";var r=n("cGG2");function i(t){return encodeURIComponent(t).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}t.exports=function(t,e,n){if(!e)return t;var o;if(n)o=n(e);else if(r.isURLSearchParams(e))o=e.toString();else{var s=[];r.forEach(e,function(t,e){null!==t&&void 0!==t&&(r.isArray(t)?e+="[]":t=[t],r.forEach(t,function(t){r.isDate(t)?t=t.toISOString():r.isObject(t)&&(t=JSON.stringify(t)),s.push(i(e)+"="+i(t))}))}),o=s.join("&")}return o&&(t+=(-1===t.indexOf("?")?"?":"&")+o),t}},FtD3:function(t,e,n){"use strict";var r=n("t8qj");t.exports=function(t,e,n,i,o){var s=new Error(t);return r(s,e,n,i,o)}},GHBc:function(t,e,n){"use strict";var r=n("cGG2");t.exports=r.isStandardBrowserEnv()?function(){var t,e=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function i(t){var r=t;return e&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return t=i(window.location.href),function(e){var n=r.isString(e)?i(e):e;return n.protocol===t.protocol&&n.host===t.host}}():function(){return!0}},"JP+z":function(t,e,n){"use strict";t.exports=function(t,e){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return t.apply(e,n)}}},KCLY:function(t,e,n){"use strict";(function(e){var r=n("cGG2"),i=n("5VQ+"),o={"Content-Type":"application/x-www-form-urlencoded"};function s(t,e){!r.isUndefined(t)&&r.isUndefined(t["Content-Type"])&&(t["Content-Type"]=e)}var a,c={adapter:("undefined"!=typeof XMLHttpRequest?a=n("7GwW"):void 0!==e&&(a=n("7GwW")),a),transformRequest:[function(t,e){return i(e,"Content-Type"),r.isFormData(t)||r.isArrayBuffer(t)||r.isBuffer(t)||r.isStream(t)||r.isFile(t)||r.isBlob(t)?t:r.isArrayBufferView(t)?t.buffer:r.isURLSearchParams(t)?(s(e,"application/x-www-form-urlencoded;charset=utf-8"),t.toString()):r.isObject(t)?(s(e,"application/json;charset=utf-8"),JSON.stringify(t)):t}],transformResponse:[function(t){if("string"==typeof t)try{t=JSON.parse(t)}catch(t){}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(t){return t>=200&&t<300}};c.headers={common:{Accept:"application/json, text/plain, */*"}},r.forEach(["delete","get","head"],function(t){c.headers[t]={}}),r.forEach(["post","put","patch"],function(t){c.headers[t]=r.merge(o)}),t.exports=c}).call(e,n("W2nU"))},Re3r:function(t,e){function n(t){return!!t.constructor&&"function"==typeof t.constructor.isBuffer&&t.constructor.isBuffer(t)}
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
t.exports=function(t){return null!=t&&(n(t)||function(t){return"function"==typeof t.readFloatLE&&"function"==typeof t.slice&&n(t.slice(0,0))}(t)||!!t._isBuffer)}},TNV1:function(t,e,n){"use strict";var r=n("cGG2");t.exports=function(t,e,n){return r.forEach(n,function(n){t=n(t,e)}),t}},W2nU:function(t,e){var n,r,i=t.exports={};function o(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function a(t){if(n===setTimeout)return setTimeout(t,0);if((n===o||!n)&&setTimeout)return n=setTimeout,setTimeout(t,0);try{return n(t,0)}catch(e){try{return n.call(null,t,0)}catch(e){return n.call(this,t,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:o}catch(t){n=o}try{r="function"==typeof clearTimeout?clearTimeout:s}catch(t){r=s}}();var c,u=[],l=!1,f=-1;function d(){l&&c&&(l=!1,c.length?u=c.concat(u):f=-1,u.length&&p())}function p(){if(!l){var t=a(d);l=!0;for(var e=u.length;e;){for(c=u,u=[];++f<e;)c&&c[f].run();f=-1,e=u.length}c=null,l=!1,function(t){if(r===clearTimeout)return clearTimeout(t);if((r===s||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(t);try{r(t)}catch(e){try{return r.call(null,t)}catch(e){return r.call(this,t)}}}(t)}}function h(t,e){this.fun=t,this.array=e}function m(){}i.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];u.push(new h(t,e)),1!==u.length||l||a(p)},h.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=m,i.addListener=m,i.once=m,i.off=m,i.removeListener=m,i.removeAllListeners=m,i.emit=m,i.prependListener=m,i.prependOnceListener=m,i.listeners=function(t){return[]},i.binding=function(t){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(t){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},WzNa:function(t,e){},XmWM:function(t,e,n){"use strict";var r=n("KCLY"),i=n("cGG2"),o=n("fuGk"),s=n("xLtR");function a(t){this.defaults=t,this.interceptors={request:new o,response:new o}}a.prototype.request=function(t){"string"==typeof t&&(t=i.merge({url:arguments[0]},arguments[1])),(t=i.merge(r,{method:"get"},this.defaults,t)).method=t.method.toLowerCase();var e=[s,void 0],n=Promise.resolve(t);for(this.interceptors.request.forEach(function(t){e.unshift(t.fulfilled,t.rejected)}),this.interceptors.response.forEach(function(t){e.push(t.fulfilled,t.rejected)});e.length;)n=n.then(e.shift(),e.shift());return n},i.forEach(["delete","get","head","options"],function(t){a.prototype[t]=function(e,n){return this.request(i.merge(n||{},{method:t,url:e}))}}),i.forEach(["post","put","patch"],function(t){a.prototype[t]=function(e,n,r){return this.request(i.merge(r||{},{method:t,url:e,data:n}))}}),t.exports=a},cGG2:function(t,e,n){"use strict";var r=n("JP+z"),i=n("Re3r"),o=Object.prototype.toString;function s(t){return"[object Array]"===o.call(t)}function a(t){return null!==t&&"object"==typeof t}function c(t){return"[object Function]"===o.call(t)}function u(t,e){if(null!==t&&void 0!==t)if("object"!=typeof t&&(t=[t]),s(t))for(var n=0,r=t.length;n<r;n++)e.call(null,t[n],n,t);else for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.call(null,t[i],i,t)}t.exports={isArray:s,isArrayBuffer:function(t){return"[object ArrayBuffer]"===o.call(t)},isBuffer:i,isFormData:function(t){return"undefined"!=typeof FormData&&t instanceof FormData},isArrayBufferView:function(t){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(t):t&&t.buffer&&t.buffer instanceof ArrayBuffer},isString:function(t){return"string"==typeof t},isNumber:function(t){return"number"==typeof t},isObject:a,isUndefined:function(t){return void 0===t},isDate:function(t){return"[object Date]"===o.call(t)},isFile:function(t){return"[object File]"===o.call(t)},isBlob:function(t){return"[object Blob]"===o.call(t)},isFunction:c,isStream:function(t){return a(t)&&c(t.pipe)},isURLSearchParams:function(t){return"undefined"!=typeof URLSearchParams&&t instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product)&&"undefined"!=typeof window&&"undefined"!=typeof document},forEach:u,merge:function t(){var e={};function n(n,r){"object"==typeof e[r]&&"object"==typeof n?e[r]=t(e[r],n):e[r]=n}for(var r=0,i=arguments.length;r<i;r++)u(arguments[r],n);return e},extend:function(t,e,n){return u(e,function(e,i){t[i]=n&&"function"==typeof e?r(e,n):e}),t},trim:function(t){return t.replace(/^\s*/,"").replace(/\s*$/,"")}}},cWxy:function(t,e,n){"use strict";var r=n("dVOP");function i(t){if("function"!=typeof t)throw new TypeError("executor must be a function.");var e;this.promise=new Promise(function(t){e=t});var n=this;t(function(t){n.reason||(n.reason=new r(t),e(n.reason))})}i.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},i.source=function(){var t;return{token:new i(function(e){t=e}),cancel:t}},t.exports=i},dIwP:function(t,e,n){"use strict";t.exports=function(t){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(t)}},dVOP:function(t,e,n){"use strict";function r(t){this.message=t}r.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},r.prototype.__CANCEL__=!0,t.exports=r},fuGk:function(t,e,n){"use strict";var r=n("cGG2");function i(){this.handlers=[]}i.prototype.use=function(t,e){return this.handlers.push({fulfilled:t,rejected:e}),this.handlers.length-1},i.prototype.eject=function(t){this.handlers[t]&&(this.handlers[t]=null)},i.prototype.forEach=function(t){r.forEach(this.handlers,function(e){null!==e&&t(e)})},t.exports=i},mtWM:function(t,e,n){t.exports=n("tIFN")},oJlt:function(t,e,n){"use strict";var r=n("cGG2"),i=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];t.exports=function(t){var e,n,o,s={};return t?(r.forEach(t.split("\n"),function(t){if(o=t.indexOf(":"),e=r.trim(t.substr(0,o)).toLowerCase(),n=r.trim(t.substr(o+1)),e){if(s[e]&&i.indexOf(e)>=0)return;s[e]="set-cookie"===e?(s[e]?s[e]:[]).concat([n]):s[e]?s[e]+", "+n:n}}),s):s}},p1b6:function(t,e,n){"use strict";var r=n("cGG2");t.exports=r.isStandardBrowserEnv()?{write:function(t,e,n,i,o,s){var a=[];a.push(t+"="+encodeURIComponent(e)),r.isNumber(n)&&a.push("expires="+new Date(n).toGMTString()),r.isString(i)&&a.push("path="+i),r.isString(o)&&a.push("domain="+o),!0===s&&a.push("secure"),document.cookie=a.join("; ")},read:function(t){var e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},pBtG:function(t,e,n){"use strict";t.exports=function(t){return!(!t||!t.__CANCEL__)}},pxG4:function(t,e,n){"use strict";t.exports=function(t){return function(e){return t.apply(null,e)}}},qRfI:function(t,e,n){"use strict";t.exports=function(t,e){return e?t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):t}},t8qj:function(t,e,n){"use strict";t.exports=function(t,e,n,r,i){return t.config=e,n&&(t.code=n),t.request=r,t.response=i,t}},tIFN:function(t,e,n){"use strict";var r=n("cGG2"),i=n("JP+z"),o=n("XmWM"),s=n("KCLY");function a(t){var e=new o(t),n=i(o.prototype.request,e);return r.extend(n,o.prototype,e),r.extend(n,e),n}var c=a(s);c.Axios=o,c.create=function(t){return a(r.merge(s,t))},c.Cancel=n("dVOP"),c.CancelToken=n("cWxy"),c.isCancel=n("pBtG"),c.all=function(t){return Promise.all(t)},c.spread=n("pxG4"),t.exports=c,t.exports.default=c},thJu:function(t,e,n){"use strict";var r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";function i(){this.message="String contains an invalid character"}i.prototype=new Error,i.prototype.code=5,i.prototype.name="InvalidCharacterError",t.exports=function(t){for(var e,n,o=String(t),s="",a=0,c=r;o.charAt(0|a)||(c="=",a%1);s+=c.charAt(63&e>>8-a%1*8)){if((n=o.charCodeAt(a+=.75))>255)throw new i;e=e<<8|n}return s}},ukyY:function(t,e){},xLtR:function(t,e,n){"use strict";var r=n("cGG2"),i=n("TNV1"),o=n("pBtG"),s=n("KCLY"),a=n("dIwP"),c=n("qRfI");function u(t){t.cancelToken&&t.cancelToken.throwIfRequested()}t.exports=function(t){return u(t),t.baseURL&&!a(t.url)&&(t.url=c(t.baseURL,t.url)),t.headers=t.headers||{},t.data=i(t.data,t.headers,t.transformRequest),t.headers=r.merge(t.headers.common||{},t.headers[t.method]||{},t.headers||{}),r.forEach(["delete","get","head","post","put","patch","common"],function(e){delete t.headers[e]}),(t.adapter||s.adapter)(t).then(function(e){return u(t),e.data=i(e.data,e.headers,t.transformResponse),e},function(e){return o(e)||(u(t),e&&e.response&&(e.response.data=i(e.response.data,e.response.headers,t.transformResponse))),Promise.reject(e)})}}});
//# sourceMappingURL=3.dcebbada4155e2507485.js.map