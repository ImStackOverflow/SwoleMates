webpackJsonp([10],{"7zck":function(t,e){},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("/5sW"),o={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-navigation-drawer",{attrs:{app:""},model:{value:t.sidebar,callback:function(e){t.sidebar=e},expression:"sidebar"}},[t.isAuthenticated?n("v-toolbar",{staticClass:"transparent",attrs:{flat:""}},[n("v-list",[n("v-list-tile",{attrs:{avatar:"",to:/user/+this.$store.state.user.uid}},[n("v-list-tile-avatar",[n("img",{attrs:{src:this.$store.state.user.profPhotoUrl}})]),t._v(" "),n("v-list-tile-content",[n("v-list-tile-title",[t._v(t._s(this.$store.state.user.username))])],1)],1)],1)],1):t._e(),t._v(" "),n("v-list",[t._l(t.menuItems,function(e){return n("v-list-tile",{key:e.title,attrs:{to:e.path}},[n("v-list-tile-action",[n("v-icon",[t._v(t._s(e.icon))])],1),t._v(" "),n("v-list-tile-content",[t._v(t._s(e.title))])],1)}),t._v(" "),n("v-list-tile",{attrs:{to:"/notifications"}},[n("v-list-tile-action",[n("v-icon",[t._v("notifications")])],1),t._v(" "),n("v-list-tile-content",[t._v("Notifications")])],1),t._v(" "),t.isAuthenticated?n("v-list-tile",{on:{click:t.userSignOut}},[n("v-list-tile-action",[n("v-icon",[t._v("exit_to_app")])],1),t._v(" "),n("v-list-tile-content",[t._v("Sign Out")])],1):t._e()],2)],1),t._v(" "),n("v-toolbar",{attrs:{app:""}},[n("span",{staticClass:"hidden-sm-and-up"},[n("v-toolbar-side-icon",{on:{click:function(e){t.sidebar=!t.sidebar}}})],1),t._v(" "),n("v-toolbar-title",[n("router-link",{staticStyle:{cursor:"pointer"},attrs:{to:"/",tag:"span"}},[n("img",{attrs:{src:i("rSll"),height:"60px"}})])],1),t._v(" "),n("v-spacer"),t._v(" "),n("v-toolbar-items",{staticClass:"hidden-xs-only"},[t._l(t.menuItems,function(e){return n("v-btn",{key:e.title,attrs:{flat:"",to:e.path}},[n("v-icon",{attrs:{left:"",dark:""}},[t._v(t._s(e.icon))]),t._v("\n        "+t._s(e.title)+"\n      ")],1)}),t._v(" "),n("v-btn",{attrs:{icon:"",to:"/notifications"}},[n("v-icon",[t._v("notifications")])],1),t._v(" "),t.isAuthenticated?n("v-menu",{attrs:{bottom:"bottom",left:"left","offset-y":"offset-y",attach:"attach"}},[n("v-btn",{attrs:{slot:"activator",flat:"flat"},slot:"activator"},[n("v-icon",{attrs:{left:""}},[t._v("person")]),t._v(" "),n("span",{staticClass:"mr-1"},[t._v(" "+t._s(this.$store.state.user.username)+" ")]),t._v(" "),n("v-icon",[t._v("arrow_drop_down")])],1),t._v(" "),n("v-list",{attrs:{light:"light"}},[n("v-list-tile",{attrs:{to:/user/+this.$store.state.user.uid}},[n("v-list-tile-avatar",[n("v-icon",[t._v("account_box")])],1),t._v(" "),n("v-list-tile-content",[n("v-list-tile-title",[t._v("Profile")])],1)],1),t._v(" "),n("v-list-tile",{on:{click:t.userSignOut}},[n("v-list-tile-avatar",[n("v-icon",[t._v("exit_to_app")])],1),t._v(" "),n("v-list-tile-content",[n("v-list-tile-title",[t._v("Sign Out")])],1)],1)],1)],1):t._e()],2)],1),t._v(" "),n("v-content",[n("router-view")],1)],1)},staticRenderFns:[]},s=i("VU/8")({name:"app",data:function(){return{sidebar:!1}},computed:{appTitle:function(){return this.$store.state.appTitle},isAuthenticated:function(){return this.$store.getters.isAuthenticated},menuItems:function(){return this.isAuthenticated?[{title:"Home",path:"/home",icon:"home"},{title:"Nutrition Info",path:"/nutritionUpload",icon:"kitchen"}]:[{title:"Sign Up",path:"/signup",icon:"face"},{title:"Sign In",path:"/signin",icon:"lock_open"}]}},methods:{userSignOut:function(){this.$store.dispatch("userSignOut")}}},o,!1,null,null,null).exports,a=i("Dd8w"),r=i.n(a),u=i("/ocq"),l=i("yviF"),c=i.n(l),v=(i("dih4"),[{path:"/",component:"Landing",beforeEnter:function(t,e,i){c.a.auth().currentUser?i("/home"):i()}},{path:"/signin",component:"Signin"},{path:"/signup",component:"Signup"},{path:"/home",component:"Home",meta:{requiresAuth:!0}},{path:"/nutritionUpload",component:"Nutrition"},{path:"/user/:uid",component:"User"},{path:"/notifications",component:"Notifications"},{path:"*",component:"NotFound"}].map(function(t){return r()({},t,{component:function(){return i("Opzk")("./"+t.component+".vue")}})}));n.default.use(u.a);var m=new u.a({mode:"history",routes:v});m.beforeEach(function(t,e,i){var n=t.matched.some(function(t){return t.meta.requiresAuth}),o=c.a.auth().currentUser;n&&!o?i("/signin"):i()});var p=m,d=i("3EgV"),f=i.n(d),h=(i("7zck"),i("NYxO"));n.default.use(h.a);var g=new h.a.Store({state:{appTitle:"SwoleMates",user:null,error:null,loading:!1,nutrition:{}},mutations:{setUser:function(t,e){t.user=e},setError:function(t,e){t.error=e},setLoading:function(t,e){t.loading=e},nutrition:function(t,e){t.nutrition=e}},actions:{userSignUp:function(t,e){var i=t.commit;i("setLoading",!0),c.a.auth().createUserWithEmailAndPassword(e.email,e.password).then(function(t){_(t),i("setUser",{username:t.user.displayName,email:t.user.email,emailVerified:t.user.emailVerified,uid:t.user.uid,profPhotoUrl:t.user.photoURL}),i("setLoading",!1),p.push("/home")}).catch(function(t){i("setError",t.message),i("setLoading",!1)})},userSignIn:function(t,e){var i=t.commit;i("setLoading",!0),c.a.auth().signInWithEmailAndPassword(e.email,e.password).then(function(t){_(t),i("setUser",{username:t.user.displayName,email:t.user.email,emailVerified:t.user.emailVerified,uid:t.user.uid,profPhotoUrl:t.user.photoURL}),i("setLoading",!1),i("setError",null),p.push("/home")}).catch(function(t){i("setError",t.message),i("setLoading",!1)})},autoSignIn:function(t,e){(0,t.commit)("setUser",{username:e.displayName,email:e.email,emailVerified:e.emailVerified,uid:e.uid,profPhotoUrl:e.photoURL})},userSignOut:function(t){var e=t.commit;c.a.auth().signOut().then(function(){e("setUser",null),p.push("/")})},googleAuth:function(t){var e=t.commit;e("setLoading",!0);var i=new c.a.auth.GoogleAuthProvider;c.a.auth().signInWithPopup(i).then(function(t){_(t),e("setUser",{username:t.user.displayName,email:t.user.email,emailVerified:t.user.emailVerified,uid:t.user.uid,profPhotoUrl:t.user.photoURL}),e("setLoading",!1),e("setError",null),p.push("/home")}).catch(function(t){e("setError",t.message),console.log("Error signing in:",t)})}},getters:{isAuthenticated:function(t){return null!==t.user&&void 0!==t.user}}}),_=function(t){var e=k.collection("users").doc(t.user.uid);e.get().then(function(i){!1===i.exists&&e.set({username:t.user.displayName,firstName:"",lastName:"",email:t.user.email,profPhotoUrl:t.user.photoURL,created:c.a.firestore.FieldValue.serverTimestamp()})}).catch(function(t){commit("setError",t.message),console.log("Error getting document:",t)})},b=(i("881v"),i("cWbj"),i("hnaQ"));i.d(e,"fsdb",function(){return k}),i.d(e,"storage",function(){return y}),n.default.use(f.a),n.default.use(b.a);var U=c.a.initializeApp({apiKey:"AIzaSyDKeLsWxRS_tg5zzkD1qlw-ot5Jl_MZFyE",authDomain:"swolemates-276ca.firebaseapp.com",databaseURL:"https://swolemates-276ca.firebaseio.com",projectId:"swolemates-276ca",storageBucket:"swolemates-276ca.appspot.com",messagingSenderId:"816721714419"});n.default.config.productionTip=!1;var S=c.a.auth().onAuthStateChanged(function(t){new n.default({el:"#app",router:p,store:g,render:function(t){return t(s)},created:function(){t&&g.dispatch("autoSignIn",t)}}),S()}),w=U.firestore();w.settings({timestampsInSnapshots:!0});var k=w,y=U.storage()},Opzk:function(t,e,i){var n={"./Home.vue":["j7e0",1,0],"./Landing.vue":["MtBL",0,8],"./NotFound.vue":["wkqA",7],"./Notifications.vue":["0jXR",6],"./Nutrition.vue":["/eoA",3,0],"./Signin.vue":["viRm",0,5],"./Signup.vue":["3G/k",0,4],"./User.vue":["i/Eh",2,0]};function o(t){var e=n[t];return e?Promise.all(e.slice(1).map(i.e)).then(function(){return i(e[0])}):Promise.reject(new Error("Cannot find module '"+t+"'."))}o.keys=function(){return Object.keys(n)},o.id="Opzk",t.exports=o},rSll:function(t,e,i){t.exports=i.p+"static/img/swolemates_logo.b389675.png"}},["NHnr"]);
//# sourceMappingURL=app.a32a4a10cb17074fecc5.js.map