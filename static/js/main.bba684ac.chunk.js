(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{20:function(e,t,n){e.exports={container:"Login_container__3WE2v",input:"Login_input__1K3F6",button:"Login_button__3wsI7"}},65:function(e,t,n){},66:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(34),i=n.n(c),s=n(36),o=n(10),l=n(11),u=n(14),m=n(13),d=n(15),j=n(2),h=n(12),p=n.n(h),b=n(19),g=n(20),f=n.n(g),v=n(1),O=function(e){var t=e.updateUsername,n=Object(a.useState)(""),r=Object(b.a)(n,2),c=r[0],i=r[1],s=Object(j.e)();return Object(v.jsx)("div",{className:f.a.container,children:Object(v.jsxs)("form",{onSubmit:function(e){e.preventDefault(),c.length>=3&&p.a.post("https://ancient-lowlands-88829.herokuapp.com/users/add",{username:c}).then((function(e){t(c),s.push("/")})).catch((function(e){return console.log(e)}))},children:[Object(v.jsx)("div",{children:Object(v.jsx)("input",{className:f.a.input,type:"text",required:!0,value:c,onChange:function(e){return i(e.target.value)}})}),Object(v.jsx)("div",{children:Object(v.jsx)("button",{className:f.a.button,type:"submit",children:"Log in"})})]})})},x=n.p+"static/media/header1.39e9b655.jpg",y=n.p+"static/media/header2.d004abe6.jpg",_=n.p+"static/media/header3.010b7bf3.jpg",k=n.p+"static/media/header4.5944de32.jpg",w=0,M=function(){var e=[x,y,_,k],t=Object(a.useState)(0),n=Object(b.a)(t,2),r=n[0],c=n[1];return Object(a.useEffect)((function(){var e=setInterval((function(){console.log(w),3===w?(w=0,c(0)):(w++,c((function(e){return e+1})))}),5e3);return function(){console.log("clean up"),clearInterval(e)}}),[]),Object(v.jsx)("div",{style:{backgroundImage:"url(".concat(e[r],")"),transition:"background-image 1s ease-in-out",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},id:"title",className:"slide header",children:Object(v.jsx)("h1",{children:"Memory Wheel"})})},N=function(e){var t=e.mem,n=e.index;return Object(v.jsxs)("div",{style:n%2!==0?{backgroundImage:"url(".concat(t.imgb64,")"),zIndex:2}:{},id:"slide".concat(n),className:"slide",children:[Object(v.jsxs)("div",{className:"title",children:[Object(v.jsx)("h1",{children:t.title}),Object(v.jsx)("p",{children:t.content})]}),n%2===0?Object(v.jsx)("style",{dangerouslySetInnerHTML:{__html:["#slide".concat(n,":before {"),"background-image: url(".concat(t.imgb64,");"),"transform: translateZ(-1px) scale(2);","z-index: -1","}"].join("\n")}}):""]})},C=function(e){var t=e.history;return Object(v.jsxs)("div",{id:"end",className:"slide header",children:[Object(v.jsx)("h1",{children:"The End"}),Object(v.jsx)("div",{style:{fontSize:"100px"},children:Object(v.jsx)("div",{className:"fas fa-plus-circle",style:{position:"relative",zIndex:10},onClick:function(){t.push("/create")}})})]})},I=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"componentDidMount",value:function(){""===this.props.username&&this.props.history.push("/login")}},{key:"render",value:function(){return Object(v.jsxs)("div",{children:[Object(v.jsx)(M,{}),this.props.memories.map((function(e,t){return Object(v.jsx)(N,{mem:e,index:t+1},t)})),Object(v.jsx)(C,{history:this.props.history})]})}}]),n}(r.a.Component),S=Object(j.f)(I),U=n(8),P=n.n(U),D=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={imgPreview:null,title:"",content:""},e.handleImageChange=function(t){var n=t.target.files[0];if(n&&["image/png","image/jpeg","image/jpg"].includes(n.type)){var a=new FileReader;a.onload=function(){var t=new Image;t.src=a.result,t.onload=function(){t.width>1920||t.height>1080?alert("Image size must be within 1920x1080"):e.setState({imgPreview:a.result})}},a.readAsDataURL(n)}else alert("Wrong file type")},e.addMemory=function(){var t={imgData:e.state.imgPreview,title:e.state.title,content:e.state.content,date:new Date};p.a.post("https://ancient-lowlands-88829.herokuapp.com/memories/add/".concat(e.props.username),t).then((function(t){console.log(t.data),e.setState({imgData:null,title:"",content:""})})).catch((function(e){console.log(e)}))},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){""===this.props.username&&this.props.history.push("/login")}},{key:"render",value:function(){var e=this;return Object(v.jsxs)("div",{className:P.a.container,children:[Object(v.jsx)("div",{className:P.a.title,children:"Background Image For Your Memory"}),Object(v.jsx)("label",{className:P.a.button,htmlFor:"fileUpload",children:"Upload Image"}),Object(v.jsx)("input",{type:"file",id:"fileUpload",className:P.a.fileUpload,onChange:function(t){return e.handleImageChange(t)}}),Object(v.jsx)("div",{className:P.a.imgPreview,style:{background:this.state.imgPreview?'url("'.concat(this.state.imgPreview,'") no-repeat center/cover'):""}}),Object(v.jsxs)("div",{className:P.a.text,children:[Object(v.jsx)("input",{placeholder:"Title",onChange:function(t){e.setState({title:t.target.value})},value:this.state.title,className:P.a.memTitle}),Object(v.jsx)("textarea",{placeholder:"Content",onChange:function(t){e.setState({content:t.target.value})},value:this.state.content,className:P.a.memContent}),Object(v.jsx)("button",{className:P.a.submit,onClick:this.addMemory,children:"ADD!"})]})]})}}]),n}(r.a.Component),T=Object(j.f)(D),z=(n(65),function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={username:"",memories:[]},e.getUserMemories=function(t){e.setState({username:t},(function(){p.a.get("https://ancient-lowlands-88829.herokuapp.com/users/memories/"+e.state.username).then((function(t){e.setState({memories:[]});var n=Object(s.a)(e.state.memories);t.data.map((function(e){return n.push({imgb64:e.img,title:e.title,content:e.content,date:e.date})})),e.setState({memories:n})})).catch((function(e){return console.log(e)}))}))},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return Object(v.jsx)(d.a,{children:Object(v.jsxs)("div",{className:"App",children:[Object(v.jsx)(j.a,{path:"/",exact:!0,render:function(t){return Object(v.jsx)(S,{username:e.state.username,memories:e.state.memories})}}),Object(v.jsx)(j.a,{path:"/login",render:function(t){return Object(v.jsx)(O,{updateUsername:function(t){return e.getUserMemories(t)}})}}),Object(v.jsx)(j.a,{path:"/create",render:function(t){return Object(v.jsx)(T,{username:e.state.username})}})]})})}}]),n}(r.a.Component));i.a.render(Object(v.jsx)(r.a.StrictMode,{children:Object(v.jsx)(z,{})}),document.getElementById("root"))},8:function(e,t,n){e.exports={container:"createMemory_container__JZgyX",title:"createMemory_title__28APe",button:"createMemory_button__cjpR-",imgPreview:"createMemory_imgPreview__23efK",text:"createMemory_text__3FyM9",memTitle:"createMemory_memTitle__T6Slc",memContent:"createMemory_memContent__c6g1x",fileUpload:"createMemory_fileUpload__1poad",submit:"createMemory_submit__TMmbz"}}},[[66,1,2]]]);
//# sourceMappingURL=main.bba684ac.chunk.js.map