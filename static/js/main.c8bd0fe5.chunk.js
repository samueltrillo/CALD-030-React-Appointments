(this["webpackJsonp6-react-appointments"]=this["webpackJsonp6-react-appointments"]||[]).push([[0],[,,,,,,,,,,function(t,e,n){},,function(t){t.exports=JSON.parse('[{"id":1,"building":1,"boiler":1,"technician":"Juan Lopez","start_timestamp":"14:30","end_timestamp":"16:30","monthly_hours":20,"maintainceType":"Eventual"},{"id":2,"building":2,"boiler":2,"technician":"Raul Gonzalez","start_timestamp":"15:30","end_timestamp":"17:30","monthly_hours":15,"maintainceType":"Eventual"},{"id":3,"building":3,"boiler":3,"technician":"Samuel Trillo","start_timestamp":"9:30","end_timestamp":"11:30","monthly_hours":18,"maintainceType":"Eventual"},{"id":4,"building":4,"boiler":4,"technician":"Ezequiel Ruiz","start_timestamp":"12:30","end_timestamp":"13:30","monthly_hours":7,"maintainceType":"Eventual"}]')},,,,,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var i=n(0),a=n(1),s=n.n(a),c=n(11),r=n.n(c),p=(n(20),n(14)),o=n(9),h=n(2),l=n(3),j=n(5),d=n(4),m=n(12),u=(n(21),function(t){Object(j.a)(n,t);var e=Object(d.a)(n);function n(){return Object(h.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(i.jsx)("div",{className:"headStyle",children:Object(i.jsx)("h1",{children:"Appointments"})})}}]),n}(a.Component)),b=(n(10),function(t){Object(j.a)(n,t);var e=Object(d.a)(n);function n(){return Object(h.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var t=this,e=this.props.appointment,n=e.id,a=e.building,s=e.boiler,c=e.technician,r=e.start_timestamp,p=e.end_timestamp,o=e.monthly_hours,h=e.maintainceType;return Object(i.jsxs)("tr",{style:{height:"40px",textAlign:"center"},children:[Object(i.jsx)("td",{children:n}),Object(i.jsx)("td",{children:a}),Object(i.jsx)("td",{children:s}),Object(i.jsx)("td",{children:c}),Object(i.jsx)("td",{children:r}),Object(i.jsx)("td",{children:p}),Object(i.jsx)("td",{children:o}),Object(i.jsx)("td",{children:h}),Object(i.jsx)("td",{children:Object(i.jsx)("button",{onClick:function(){return t.props.selectItem(n)},children:"Update"})}),Object(i.jsx)("td",{children:Object(i.jsx)("button",{onClick:function(){return t.props.deleteAppointment(n)},children:"Delete"})})]})}}]),n}(a.Component)),O=function(t){Object(j.a)(n,t);var e=Object(d.a)(n);function n(){return Object(h.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var t=this;return Object(i.jsx)("div",{children:Object(i.jsx)("div",{className:"app-list",children:Object(i.jsxs)("table",{children:[Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{children:"Id"}),Object(i.jsx)("th",{children:"Building"}),Object(i.jsx)("th",{children:"Boiler"}),Object(i.jsx)("th",{children:"Technician"}),Object(i.jsx)("th",{children:"Start time"}),Object(i.jsx)("th",{children:"End time"}),Object(i.jsx)("th",{children:"Montlhy hours"}),Object(i.jsx)("th",{children:"Maintaince type"})]}),Object(i.jsx)("tbody",{children:this.props.appointments.map((function(e){return Object(i.jsx)(b,{appointment:e,deleteAppointment:t.props.deleteAppointment,selectItem:t.props.selectItem},e.id)}))})]})})})}}]),n}(a.Component),x=(n(22),function(t){Object(j.a)(n,t);var e=Object(d.a)(n);function n(){return Object(h.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(i.jsxs)("aside",{children:[Object(i.jsx)("div",{className:"caldar",children:Object(i.jsx)("h3",{children:"CaldAR"})}),Object(i.jsx)("div",{className:"nav",children:Object(i.jsxs)("ol",{children:[Object(i.jsx)("li",{children:Object(i.jsx)("a",{href:"#",children:"Products"})}),Object(i.jsx)("li",{children:Object(i.jsx)("a",{href:"#",children:"Technicians"})}),Object(i.jsx)("li",{children:Object(i.jsx)("a",{href:"#",children:"Customers"})}),Object(i.jsx)("li",{children:Object(i.jsx)("a",{href:"#",children:"Reports"})}),Object(i.jsx)("li",{children:Object(i.jsx)("a",{href:"#",children:"Settings"})})]})})]})}}]),n}(a.Component)),f=n(13),y=(n(23),function(t){Object(j.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(h.a)(this,n);for(var i=arguments.length,a=new Array(i),s=0;s<i;s++)a[s]=arguments[s];return(t=e.call.apply(e,[this].concat(a))).state={id:"",building:"",boiler:"",technician:"",start_timestamp:"",end_timestamp:"",monthly_hours:"",maintainceType:"",appointment:{}},t.onSubmit=function(e){t.state.id?(console.log("Update function"),e.preventDefault(),t.props.updateItem(t.state)):(e.preventDefault(),t.props.addAppointment([t.state.id,t.state.building,t.state.boiler,t.state.technician,t.state.start_timestamp,t.state.end_timestamp,t.state.monthly_hours,t.state.maintainceType])),t.setState({id:"",building:"",boiler:"",technician:"",start_timestamp:"",end_timestamp:"",monthly_hours:"",maintainceType:""})},t.onChange=function(e){return t.setState(Object(f.a)({},e.target.name,e.target.value))},t}return Object(l.a)(n,[{key:"componentDidUpdate",value:function(t){this.props.appointment!==t.appointment&&this.setState({id:this.props.appointment.id,building:this.props.appointment.building,boiler:this.props.appointment.boiler,technician:this.props.appointment.technician,start_timestamp:this.props.appointment.start_timestamp,end_timestamp:this.props.appointment.end_timestamp,monthly_hours:this.props.appointment.monthly_hours,maintainceType:this.props.appointment.maintainceType})}},{key:"render",value:function(){return Object(i.jsx)("div",{children:Object(i.jsx)("div",{children:Object(i.jsxs)("div",{className:"add-box",children:[Object(i.jsx)("h2",{children:"Edit appointment"}),Object(i.jsxs)("form",{onSubmit:this.onSubmit,children:[Object(i.jsxs)("div",{className:"form-box1",children:[Object(i.jsx)("p",{children:"Building"}),Object(i.jsx)("input",{name:"building",value:this.state.building,onChange:this.onChange}),Object(i.jsx)("p",{children:"Boiler"}),Object(i.jsx)("input",{name:"boiler",value:this.state.boiler,onChange:this.onChange}),Object(i.jsx)("p",{children:"Technician"}),Object(i.jsx)("input",{name:"technician",type:"text",value:this.state.technician,onChange:this.onChange})]}),Object(i.jsxs)("div",{className:"form-box1",children:[Object(i.jsx)("p",{children:"Start time"}),Object(i.jsx)("input",{name:"start_timestamp",type:"text",value:this.state.start_timestamp,onChange:this.onChange}),Object(i.jsx)("p",{children:"End time"}),Object(i.jsx)("input",{name:"end_timestamp",type:"text",value:this.state.end_timestamp,onChange:this.onChange}),Object(i.jsx)("p",{children:"Monthly hours"}),Object(i.jsx)("input",{name:"monthly_hours",type:"text",value:this.state.monthly_hours,onChange:this.onChange}),Object(i.jsx)("p",{children:"Maintaince type"}),Object(i.jsx)("input",{name:"maintainceType",type:"text",value:this.state.maintainceType,onChange:this.onChange})]}),Object(i.jsx)("div",{className:"btn",children:Object(i.jsx)("input",{type:"submit",value:"Submit"})})]})]})})})}}]),n}(a.Component)),v=(n(24),function(t){Object(j.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(h.a)(this,n);for(var i=arguments.length,a=new Array(i),s=0;s<i;s++)a[s]=arguments[s];return(t=e.call.apply(e,[this].concat(a))).state={appointments:m,appointment:{}},t.deleteAppointment=function(e){t.setState({appointments:Object(o.a)(t.state.appointments.filter((function(t){return t.id!==e})))})},t.addAppointment=function(e){var n=Object(p.a)(e,8),i=(n[0],n[1]),a=n[2],s=n[3],c=n[4],r=n[5],h=n[6],l=n[7],j={id:Math.floor(1e3*Math.random()),building:i,boiler:a,technician:s,start_timestamp:c,end_timestamp:r,monthly_hours:h,maintainceType:l};t.setState({appointments:[].concat(Object(o.a)(t.state.appointments),[j])})},t.selectItem=function(e){var n=t.state.appointments.find((function(t){return t.id===e}));console.log(n),t.setState({appointment:n})},t.updateItem=function(e){var n=t.state.appointments.map((function(t){return t.id})).indexOf(e.id),i=t.state.appointments;i[n]=e,t.setState({appointments:i,appointment:{}})},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(i.jsxs)("div",{className:"box1",children:[Object(i.jsx)(x,{}),Object(i.jsx)("div",{className:"box2",children:Object(i.jsxs)("div",{children:[Object(i.jsx)(u,{}),Object(i.jsx)(O,{appointments:this.state.appointments,deleteAppointment:this.deleteAppointment,selectItem:this.selectItem}),Object(i.jsx)(y,{appointment:this.state.appointment,updateItem:this.updateItem,appointments:this.state.appointments,addAppointment:this.addAppointment})]})})]})}}]),n}(a.Component)),g=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,26)).then((function(e){var n=e.getCLS,i=e.getFID,a=e.getFCP,s=e.getLCP,c=e.getTTFB;n(t),i(t),a(t),s(t),c(t)}))};r.a.render(Object(i.jsx)(s.a.StrictMode,{children:Object(i.jsx)(v,{})}),document.getElementById("root")),g()}],[[25,1,2]]]);
//# sourceMappingURL=main.c8bd0fe5.chunk.js.map