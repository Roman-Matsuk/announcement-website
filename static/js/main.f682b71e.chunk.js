(this["webpackJsonpannouncement-website"]=this["webpackJsonpannouncement-website"]||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),a=n(7),i=n.n(a),o=(n(14),n(2)),r=n(24),u=(n(15),n(16),n(0)),l=function(){return Object(u.jsx)("header",{className:"header header--parameters",children:Object(u.jsx)("h1",{className:"header__title",children:"Announcement Website"})})},d=(n(18),function(e){var t=e.announcement,n=e.setShowDetails,c=e.setAnnouncementId;return Object(u.jsx)("div",{className:"card",children:Object(u.jsxs)("div",{className:"card__body",children:[Object(u.jsx)("h3",{className:"card__title",children:t.title}),Object(u.jsx)("button",{className:"card__button button",onClick:function(){c(t.id),n(!0)},children:"See more"})]})})}),j=(n(19),function(e){var t=e.announcements,n=e.setShowDetails,c=e.setAnnouncementId,s=e.typeList;return Object(u.jsx)("div",{className:"announcements announcements--".concat(s),children:t.map((function(e){return Object(u.jsx)(d,{announcement:e,setShowDetails:n,setAnnouncementId:c},e.id)}))})}),b=n(8),m=(n(20),function(e){var t=e.setAnnouncements,n=e.seIsNewAnnouncement,s=Object(c.useState)(""),a=Object(o.a)(s,2),i=a[0],l=a[1],d=Object(c.useState)(""),j=Object(o.a)(d,2),m=j[0],O=j[1];return Object(u.jsxs)("form",{onSubmit:function(e){e.preventDefault();var n={id:Object(r.a)(),title:i,description:m,dateAdded:new Date};t((function(e){return[].concat(Object(b.a)(e),[n])})),l(""),O("")},className:"form",children:[Object(u.jsx)("h2",{className:"form__title",children:"New Announcement"}),Object(u.jsxs)("div",{className:"form__fields",children:[Object(u.jsx)("label",{htmlFor:"title",className:"form__label",children:"Title"}),Object(u.jsx)("input",{type:"text",className:"input form__input",id:"title",value:i,onChange:function(e){return l(e.target.value)}})]}),Object(u.jsxs)("div",{className:"form__fields",children:[Object(u.jsx)("label",{htmlFor:"description",className:"form__label",children:"Description"}),Object(u.jsx)("textarea",{className:"form__text textarea",id:"description",rows:"3",value:m,onChange:function(e){return O(e.target.value)}})]}),Object(u.jsx)("button",{type:"button",className:"button form__button",onClick:function(){return n(!1)},children:"Back"}),Object(u.jsx)("button",{className:"button form__button",type:"submit",children:"Create"})]})}),O=n(6),h=n.n(O),f=(n(22),function(e){var t=e.announcementId,n=e.setShowDetails,s=e.setAnnouncements,a=e.announcements,i=e.setAnnouncementId,r=Object(c.useState)(!1),l=Object(o.a)(r,2),d=l[0],b=l[1],m=Object(c.useState)(""),O=Object(o.a)(m,2),f=O[0],x=O[1],p=Object(c.useState)(""),_=Object(o.a)(p,2),N=_[0],v=_[1],g=Object(c.useState)({}),A=Object(o.a)(g,2),S=A[0],w=A[1],C=Object(c.useState)([]),D=Object(o.a)(C,2),I=D[0],k=D[1];Object(c.useEffect)((function(){var e=a.find((function(e){return e.id===t})),n=a.filter((function(n){return(e.title.includes(n.title)||e.description.includes(n.description))&&n.id!==t}));n.length>0&&(n.length=3),w(e),x(e.title),v(e.description),k(n)}),[t,a]);var y=function(){s((function(e){return e.map((function(e){return e.id===t&&(e.title=f,e.description=N),e}))})),b(!1)},F=function(){s((function(e){return e.filter((function(e){return e.id!==t}))})),n(!1)};return Object(u.jsxs)(u.Fragment,{children:[d?Object(u.jsxs)("div",{className:"details",children:[Object(u.jsxs)("div",{className:"details__header",children:[Object(u.jsx)("input",{type:"text",value:f,onChange:function(e){return x(e.target.value)},className:"details__title input"}),Object(u.jsxs)("div",{className:"details__buttons details__buttons--edit",children:[Object(u.jsx)("button",{onClick:y,className:"button",children:"Save"}),Object(u.jsx)("button",{onClick:function(){return b(!1)},className:"button",children:"Cancel"})]})]}),Object(u.jsx)("p",{className:"details__date",children:"Added ".concat(h()(S.dateAdded,"YYYYMMDD").fromNow())}),Object(u.jsx)("textarea",{value:N,onChange:function(e){return v(e.target.value)},className:"details__description textarea"})]}):Object(u.jsxs)("div",{className:"details",children:[Object(u.jsxs)("div",{className:"details__header",children:[Object(u.jsx)("h2",{className:"details__title",children:S.title}),Object(u.jsxs)("div",{className:"details__buttons",children:[Object(u.jsx)("button",{className:"button",onClick:function(){n(!1)},children:"Back"}),Object(u.jsx)("button",{onClick:function(){return b(!0)},className:"button",children:"Edit"}),Object(u.jsx)("button",{onClick:F,className:"button",children:"Delete"})]})]}),Object(u.jsx)("p",{className:"details__date",children:"Added ".concat(h()(S.dateAdded,"YYYYMMDD").fromNow())}),Object(u.jsx)("p",{className:"details__description",children:S.description})]}),I.length>0&&Object(u.jsx)("h3",{className:"details__similar",children:"Similar announcements"}),Object(u.jsx)(j,{announcements:I,setShowDetails:n,setAnnouncementId:i,typeList:"three"})]})});var x=function(){var e=Object(c.useState)([{title:"Announcement #1",description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat excepturi nisi facilis. Ab veniam maxime tempora. Dolore esse quidem quam nisi consequatur magni quia aliquam, dolores quod? Saepe, exercitationem unde?",dateAdded:new Date,id:Object(r.a)()},{title:"Announcement #2",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, unde? ",dateAdded:new Date,id:Object(r.a)()}]),t=Object(o.a)(e,2),n=t[0],s=t[1],a=Object(c.useState)(""),i=Object(o.a)(a,2),d=i[0],b=i[1],O=Object(c.useState)(!1),h=Object(o.a)(O,2),x=h[0],p=h[1],_=Object(c.useState)(!1),N=Object(o.a)(_,2),v=N[0],g=N[1],A=Object(c.useState)(""),S=Object(o.a)(A,2),w=S[0],C=S[1],D=function(e){b(e.target.value)},I=n.filter((function(e){return e.title.toLowerCase().includes(d.toLowerCase())}));return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(l,{}),Object(u.jsx)("div",{className:"app",children:v?Object(u.jsx)(f,{announcementId:w,setShowDetails:g,setAnnouncements:s,announcements:n,setAnnouncementId:C}):Object(u.jsx)(u.Fragment,{children:x?Object(u.jsx)(m,{setAnnouncements:s,seIsNewAnnouncement:p}):Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("div",{className:"app__options",children:[Object(u.jsx)("input",{className:"input app__serch",type:"text",value:d,onChange:D,placeholder:"Search announcements"}),Object(u.jsx)("button",{className:"button button--large",onClick:function(){return p(!0)},children:"Add Announcement"})]}),Object(u.jsx)(j,{announcements:I,setShowDetails:g,setAnnouncementId:C,typeList:"four"})]})})})]})},p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,25)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),s(e),a(e),i(e)}))};i.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(x,{})}),document.getElementById("root")),p()}],[[23,1,2]]]);
//# sourceMappingURL=main.f682b71e.chunk.js.map