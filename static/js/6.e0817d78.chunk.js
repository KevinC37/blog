(this.webpackJsonpblog=this.webpackJsonpblog||[]).push([[6],{410:function(e,t,n){},420:function(e,t,n){"use strict";var r=n(4),a=n(12),i=n(1),o=n(0),s=(n(8),n(3)),c=n(9),u=n(138),l=n(17),d=n(30),m=n(24),f=n(41);function b(e){return e.substring(2).toLowerCase()}var p=function(e){var t=e.children,n=e.disableReactTree,r=void 0!==n&&n,a=e.mouseEvent,i=void 0===a?"onClick":a,s=e.onClickAway,c=e.touchEvent,u=void 0===c?"onTouchEnd":c,p=o.useRef(!1),j=o.useRef(null),O=o.useRef(!1),v=o.useRef(!1);o.useEffect((function(){return setTimeout((function(){O.current=!0}),0),function(){O.current=!1}}),[]);var g=o.useCallback((function(e){j.current=l.findDOMNode(e)}),[]),E=Object(m.a)(t.ref,g),h=Object(f.a)((function(e){var t=v.current;if(v.current=!1,O.current&&j.current&&!function(e){return document.documentElement.clientWidth<e.clientX||document.documentElement.clientHeight<e.clientY}(e))if(p.current)p.current=!1;else{var n;if(e.composedPath)n=e.composedPath().indexOf(j.current)>-1;else n=!Object(d.a)(j.current).documentElement.contains(e.target)||j.current.contains(e.target);n||!r&&t||s(e)}})),w=function(e){return function(n){v.current=!0;var r=t.props[e];r&&r(n)}},x={ref:E};return!1!==u&&(x[u]=w(u)),o.useEffect((function(){if(!1!==u){var e=b(u),t=Object(d.a)(j.current),n=function(){p.current=!0};return t.addEventListener(e,h),t.addEventListener("touchmove",n),function(){t.removeEventListener(e,h),t.removeEventListener("touchmove",n)}}}),[h,u]),!1!==i&&(x[i]=w(i)),o.useEffect((function(){if(!1!==i){var e=b(i),t=Object(d.a)(j.current);return t.addEventListener(e,h),function(){t.removeEventListener(e,h)}}}),[h,i]),o.createElement(o.Fragment,null,o.cloneElement(t,x))},j=n(20),O=n(70),v=n(401),g=n(336),E=n(38),h=o.forwardRef((function(e,t){var n=e.action,a=e.classes,c=e.className,u=e.message,l=e.role,d=void 0===l?"alert":l,m=Object(r.a)(e,["action","classes","className","message","role"]);return o.createElement(g.a,Object(i.a)({role:d,square:!0,elevation:6,className:Object(s.a)(a.root,c),ref:t},m),o.createElement("div",{className:a.message},u),n?o.createElement("div",{className:a.action},n):null)})),w=Object(c.a)((function(e){var t="light"===e.palette.type?.8:.98,n=Object(E.c)(e.palette.background.default,t);return{root:Object(i.a)({},e.typography.body2,Object(a.a)({color:e.palette.getContrastText(n),backgroundColor:n,display:"flex",alignItems:"center",flexWrap:"wrap",padding:"6px 16px",borderRadius:e.shape.borderRadius,flexGrow:1},e.breakpoints.up("sm"),{flexGrow:"initial",minWidth:288})),message:{padding:"8px 0"},action:{display:"flex",alignItems:"center",marginLeft:"auto",paddingLeft:16,marginRight:-8}}}),{name:"MuiSnackbarContent"})(h),x=o.forwardRef((function(e,t){var n=e.action,a=e.anchorOrigin,c=(a=void 0===a?{vertical:"bottom",horizontal:"center"}:a).vertical,l=a.horizontal,d=e.autoHideDuration,m=void 0===d?null:d,b=e.children,g=e.classes,E=e.className,h=e.ClickAwayListenerProps,x=e.ContentProps,N=e.disableWindowBlurListener,y=void 0!==N&&N,C=e.message,L=e.onClose,_=e.onEnter,k=e.onEntered,T=e.onEntering,P=e.onExit,R=e.onExited,S=e.onExiting,q=e.onMouseEnter,D=e.onMouseLeave,M=e.open,H=e.resumeHideDuration,I=e.TransitionComponent,A=void 0===I?v.a:I,B=e.transitionDuration,W=void 0===B?{enter:u.b.enteringScreen,exit:u.b.leavingScreen}:B,z=e.TransitionProps,F=Object(r.a)(e,["action","anchorOrigin","autoHideDuration","children","classes","className","ClickAwayListenerProps","ContentProps","disableWindowBlurListener","message","onClose","onEnter","onEntered","onEntering","onExit","onExited","onExiting","onMouseEnter","onMouseLeave","open","resumeHideDuration","TransitionComponent","transitionDuration","TransitionProps"]),G=o.useRef(),J=o.useState(!0),X=J[0],U=J[1],Y=Object(f.a)((function(){L&&L.apply(void 0,arguments)})),K=Object(f.a)((function(e){L&&null!=e&&(clearTimeout(G.current),G.current=setTimeout((function(){Y(null,"timeout")}),e))}));o.useEffect((function(){return M&&K(m),function(){clearTimeout(G.current)}}),[M,m,K]);var Q=function(){clearTimeout(G.current)},V=o.useCallback((function(){null!=m&&K(null!=H?H:.5*m)}),[m,H,K]);return o.useEffect((function(){if(!y&&M)return window.addEventListener("focus",V),window.addEventListener("blur",Q),function(){window.removeEventListener("focus",V),window.removeEventListener("blur",Q)}}),[y,V,M]),!M&&X?null:o.createElement(p,Object(i.a)({onClickAway:function(e){L&&L(e,"clickaway")}},h),o.createElement("div",Object(i.a)({className:Object(s.a)(g.root,g["anchorOrigin".concat(Object(j.a)(c)).concat(Object(j.a)(l))],E),onMouseEnter:function(e){q&&q(e),Q()},onMouseLeave:function(e){D&&D(e),V()},ref:t},F),o.createElement(A,Object(i.a)({appear:!0,in:M,onEnter:Object(O.a)((function(){U(!1)}),_),onEntered:k,onEntering:T,onExit:P,onExited:Object(O.a)((function(){U(!0)}),R),onExiting:S,timeout:W,direction:"top"===c?"down":"up"},z),b||o.createElement(w,Object(i.a)({message:C,action:n},x)))))}));t.a=Object(c.a)((function(e){var t={top:8},n={bottom:8},r={justifyContent:"flex-end"},o={justifyContent:"flex-start"},s={top:24},c={bottom:24},u={right:24},l={left:24},d={left:"50%",right:"auto",transform:"translateX(-50%)"};return{root:{zIndex:e.zIndex.snackbar,position:"fixed",display:"flex",left:8,right:8,justifyContent:"center",alignItems:"center"},anchorOriginTopCenter:Object(i.a)({},t,Object(a.a)({},e.breakpoints.up("sm"),Object(i.a)({},s,d))),anchorOriginBottomCenter:Object(i.a)({},n,Object(a.a)({},e.breakpoints.up("sm"),Object(i.a)({},c,d))),anchorOriginTopRight:Object(i.a)({},t,r,Object(a.a)({},e.breakpoints.up("sm"),Object(i.a)({left:"auto"},s,u))),anchorOriginBottomRight:Object(i.a)({},n,r,Object(a.a)({},e.breakpoints.up("sm"),Object(i.a)({left:"auto"},c,u))),anchorOriginTopLeft:Object(i.a)({},t,o,Object(a.a)({},e.breakpoints.up("sm"),Object(i.a)({right:"auto"},s,l))),anchorOriginBottomLeft:Object(i.a)({},n,o,Object(a.a)({},e.breakpoints.up("sm"),Object(i.a)({right:"auto"},c,l)))}}),{flip:!1,name:"MuiSnackbar"})(x)},432:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return j}));var r=n(26),a=n(10),i=n(0),o=n(60),s=n(398),c=n(397),u=n(136),l=n(13),d=n(420),m=n(71),f=n(94),b=f.a().shape({firstName:f.c().required("First name is required"),lastName:f.c().required("Last name is required"),email:f.c().email("Invalid email").required("Email is required"),password:f.c().min(6,"Password must be at least 6 characters").required("Password is required"),confirmPassword:f.c().oneOf([f.b("password"),null],"Passwords must match").required("Confirm your password")}),p=(n(410),n(2));function j(){var e,t,n,f,j,O,v={resolver:Object(u.a)(b)},g=Object(o.d)(v),E=g.register,h=g.handleSubmit,w=g.formState.errors,x=Object(i.useState)(!1),N=Object(a.a)(x,2),y=N[0],C=N[1],L=Object(l.f)();return Object(i.useEffect)((function(){return function(){return clearTimeout(O)}}),[O]),Object(p.jsxs)("form",{onSubmit:h((function(e){m.b.dispatch({type:"USER/SET_CREDENTIALS",payload:{auth:!1,email:e.email,firstName:e.firstName,lastName:e.lastName,password:e.password}}),C(!0),O=setTimeout((function(){return L("/login")}),2e3)})),className:"form___main",children:[Object(p.jsxs)("h2",{className:"form___header",children:["Hurry up and sign up ",Object(p.jsx)("span",{children:"\ud83d\ude01"})]}),Object(p.jsx)(s.a,Object(r.a)({id:"firstName",type:"text",error:!!w.firstName,margin:"normal",variant:"outlined",className:"input___field",label:"First name"},E("firstName"))),w.firstName&&Object(p.jsx)("p",{children:null===(e=w.firstName)||void 0===e?void 0:e.message}),Object(p.jsx)(s.a,Object(r.a)({type:"text",error:!!w.lastName,margin:"normal",variant:"outlined",className:"input___field",label:"Last name"},E("lastName"))),w.lastName&&Object(p.jsx)("p",{children:null===(t=w.lastName)||void 0===t?void 0:t.message}),Object(p.jsx)(s.a,Object(r.a)({type:"email",error:!!w.email,margin:"normal",variant:"outlined",className:"input___field",label:"Email"},E("email"))),w.email&&Object(p.jsx)("p",{children:null===(n=w.email)||void 0===n?void 0:n.message}),Object(p.jsx)(s.a,Object(r.a)({type:"password",error:!!w.password,margin:"normal",variant:"outlined",className:"input___field",label:"Password"},E("password"))),w.password&&Object(p.jsx)("p",{children:null===(f=w.password)||void 0===f?void 0:f.message}),Object(p.jsx)(s.a,Object(r.a)({type:"password",error:!!w.confirmPassword,margin:"normal",variant:"outlined",className:"input___field",label:"Confirm Password"},E("confirmPassword"))),w.confirmPassword&&Object(p.jsx)("p",{children:null===(j=w.confirmPassword)||void 0===j?void 0:j.message}),Object(p.jsx)(c.a,{variant:"contained",type:"submit",className:"submit___button",color:"primary",children:"Sign up"}),y?Object(p.jsx)("div",{children:Object(p.jsx)(d.a,{open:y,autoHideDuration:2e3,message:"Signed up!"})}):null]})}}}]);
//# sourceMappingURL=6.e0817d78.chunk.js.map