(this["webpackJsonpmarkdown-previewer"]=this["webpackJsonpmarkdown-previewer"]||[]).push([[0],{10:function(e,t,n){e.exports={body:"Preview_body__1odsA"}},16:function(e,t,n){e.exports={editor:"Editor_editor__2X6ES"}},2:function(e,t,n){e.exports={wrapper:"Box_wrapper__3Z15M",expanded:"Box_expanded__19AvG",content:"Box_content__3PUK6",header:"Box_header__1EQNJ",title:"Box_title__rQpCJ",deletePrompt:"Box_deletePrompt__37Zqq",buttons:"Box_buttons__Zc63-",body:"Box_body__28Yr-",editorBody:"Box_editorBody__2tuMZ",btn:"Box_btn__2bH8N"}},23:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),i=n(15),a=n.n(i),s=(n(23),n(4)),o=n(6),l=n(5),d=n.p+"static/media/icon.d4ad6d8e.svg",u=n(0),b=function(){return Object(u.jsx)("div",{className:l.wrapper,children:Object(u.jsxs)("header",{className:l.content,children:[Object(u.jsx)("img",{src:d,alt:"",className:l.icon}),Object(u.jsx)("h1",{className:l.title,children:"Markdown Previewer"})]})})},j=function(e){var t=e.gridLeft,n=e.gridRight;return Object(u.jsx)("div",{className:o.wrapper,children:Object(u.jsxs)("div",{className:o.content,children:[Object(u.jsx)(b,{}),Object(u.jsxs)("main",{className:o.grid,children:[t,n]})]})})},h=n(16),p=n(2),x=n(7),_=function(e){var t=e.title,n=e.fullScreen,c=e.setFullScreen,i=e.clear,a=e.children,o=Object(r.useState)(!1),l=Object(s.a)(o,2),d=l[0],b=l[1];return n&&n!==t?null:Object(u.jsx)("div",{className:n===t?"".concat(p.wrapper," ").concat(p.expanded):p.wrapper,children:Object(u.jsxs)("section",{className:p.content,children:[Object(u.jsxs)("header",{className:p.header,children:[d&&Object(u.jsxs)("div",{className:p.deletePrompt,children:[Object(u.jsx)("h2",{children:"Clear editor?"}),Object(u.jsxs)("div",{className:p.buttons,children:[Object(u.jsx)("button",{className:p.btn,onClick:function(){i(),b(!1)},children:"Yes"}),Object(u.jsx)("button",{className:p.btn,onClick:function(){return b(!1)},children:"No"})]})]}),Object(u.jsx)("h2",{className:p.title,children:t}),Object(u.jsxs)("div",{className:p.buttons,children:["Editor"===t&&Object(u.jsx)("button",{onClick:function(){return b(!0)},className:p.btn,"aria-label":"Clear editor contents",children:Object(u.jsx)(x.c,{})}),Object(u.jsx)("button",{onClick:function(){c(n?"":t)},className:p.btn,"aria-label":n?"Minimize ".concat(t):"Expand ".concat(t),children:n===t?Object(u.jsx)(x.a,{}):Object(u.jsx)(x.b,{})})]})]}),Object(u.jsx)("div",{className:"Editor"===t?p.editorBody:p.body,children:a})]})})},m=function(e){var t=e.input,n=e.handleChange,r=e.fullScreen,c=e.setFullScreen;return Object(u.jsxs)(_,{title:"Editor",fullScreen:r,setFullScreen:c,clear:function(){return n("")},children:[Object(u.jsx)("label",{htmlFor:"editor",className:"sr-only",children:"Enter markdown"}),Object(u.jsx)("textarea",{className:h.editor,id:"editor",onChange:function(e){return n(e.target.value)},value:t})]})},w=n(9),O=n.n(w),f=n(17),v=n.n(f),g=n(18),k=n(10);O.a.setOptions({gmf:!0,breaks:!0});var N=function(e){var t=e.input,n=e.fullScreen,r=e.setFullScreen,c=O()(t),i=v.a.sanitize(c,{USE_PROFILES:{html:!0}});return Object(u.jsx)(_,{title:"Preview",fullScreen:n,setFullScreen:r,children:Object(u.jsx)("div",{className:k.body,children:Object(u.jsx)("div",{className:k.preview,id:"preview",children:Object(g.a)(i)})})})},y=function(){var e=Object(r.useState)('# Hello! Welcome to my markdown previewer app!\n\nEnter text in markdown format in the Editor box, and watch the Previewer box render it in real time!\n\n## Markdown basics\n\n### Headers can be written by starting the line with number signs.\n\nAdd an empty space between lines to make a paragraph, and surround text with **double asterisks for bold text**, or *single asterisks for italic.*\n\n### As for lists: \n\n- You can write unordered lists\n\n- like this.\n\n1. And ordered lists\n\n2. Like this.\n\n### If you want to render code:\n\n`this-is-how-you-write: inline-code;`\n\n```\n{\n  "and:"a",\n  "code": "block",\n}\n```\n\n> Block quotes are easy, just start the line with >.\n\nFinally, to include images:\n\n![alternative text describing the image](https://picsum.photos/200)\n\nThose are the basics! Want to learn more? Check out this [this handy guide to markdown](https://www.markdownguide.org/)'),t=Object(s.a)(e,2),n=t[0],c=t[1],i=Object(r.useState)(""),a=Object(s.a)(i,2),o=a[0],l=a[1];return Object(u.jsx)(j,{title:"Markdown Previewer",gridLeft:Object(u.jsx)(m,{input:n,handleChange:c,fullScreen:o,setFullScreen:l}),gridRight:Object(u.jsx)(N,{input:n,fullScreen:o,setFullScreen:l})})};n(36),n(37);a.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(y,{})}),document.getElementById("root"))},5:function(e,t,n){e.exports={wrapper:"Header_wrapper__2n0Ou",content:"Header_content__3YoTB",title:"Header_title__2JT2p",icon:"Header_icon__puMWF"}},6:function(e,t,n){e.exports={wrapper:"Layout_wrapper__2zMY1",grid:"Layout_grid__2fvkU"}}},[[38,1,2]]]);
//# sourceMappingURL=main.87741585.chunk.js.map