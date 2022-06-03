"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[81878],{85441:function(e,t,o){o.r(t),o.d(t,{assets:function(){return c},contentTitle:function(){return d},default:function(){return g},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return h}});var n=o(83117),i=o(80102),a=(o(67294),o(3905)),l=o(13904),r=["components"],s={title:"Social engineering",sidebar_position:15,tags:["Coding guidelines","Policies","Security"]},d=void 0,u={unversionedId:"development/policies/security/socialengineering",id:"development/policies/security/socialengineering",title:"Social engineering",description:"This page forms part of the Moodle security guidelines.",source:"@site/general/development/policies/security/socialengineering.md",sourceDirName:"development/policies/security",slug:"/development/policies/security/socialengineering",permalink:"/devdocs/general/development/policies/security/socialengineering",draft:!1,editUrl:"https://github.com/moodle/devdocs/edit/main/general/development/policies/security/socialengineering.md",tags:[{label:"Coding guidelines",permalink:"/devdocs/general/tags/coding-guidelines"},{label:"Policies",permalink:"/devdocs/general/tags/policies"},{label:"Security",permalink:"/devdocs/general/tags/security"}],version:"current",lastUpdatedBy:"Sara Arjona",lastUpdatedAt:1654235511,formattedLastUpdatedAt:"03/06/2022",sidebarPosition:15,frontMatter:{title:"Social engineering",sidebar_position:15,tags:["Coding guidelines","Policies","Security"]},sidebar:"coding",previous:{title:"Buffer overruns",permalink:"/devdocs/general/development/policies/security/bufferoverruns"},next:{title:"Development tools",permalink:"/devdocs/general/development/tools/"}},c={},h=[{value:"What is the danger?",id:"what-is-the-danger",level:2},{value:"How Moodle avoids this problem",id:"how-moodle-avoids-this-problem",level:2},{value:"What you need to do in your code",id:"what-you-need-to-do-in-your-code",level:2},{value:"What you need to do as an administrator",id:"what-you-need-to-do-as-an-administrator",level:2},{value:"See also",id:"see-also",level:2}],p={toc:h};function g(e){var t=e.components,o=(0,i.Z)(e,r);return(0,a.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(l.Z,(0,n.Z)({frontMatter:s},void 0!==u?{metadata:u}:{},{mdxType:"MoodlePageBanner"})),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"This page forms part of the ",(0,a.kt)("a",{parentName:"p",href:"../security"},"Moodle security guidelines"),"."))),(0,a.kt)("h2",{id:"what-is-the-danger"},"What is the danger?"),(0,a.kt)("p",null,"Moodle is so secure that Evil Hacker gives up on trying to crack the software. Instead, he decides that the users are the weakest link."),(0,a.kt)("p",null,"For example, they may get the phone list for your organisation, and start making bogus calls:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\"Hello, I'm from the help desk. It's not very clear, but I think I have a message here saying you are having trouble logging in? Is that right?\"")),(0,a.kt)("p",null,"Eventually, they hopes to someone will get tricked:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},'Gullible user, "Err, yes. I am having trouble logging in, but I don\'t recall asking for help."',(0,a.kt)("br",null),'\nHacker, "Well, I am here now. Let me go through it with you, now what is your username?"',(0,a.kt)("br",null),'\nUser, "It\'s ..."',(0,a.kt)("br",null),'\nHack, "And the password?"',(0,a.kt)("br",null))),(0,a.kt)("p",null,"You get the idea. It can work the other way. Someone phones the help desk pretending to be a helpless teacher who wants to increase a particular student's grade, and the person on the help desk kindly does that for them."),(0,a.kt)("p",null,"One very well known form of social engineering is ",(0,a.kt)("a",{parentName:"p",href:"http://en.wikipedia.org/wiki/Phishing"},"phishing"),"."),(0,a.kt)("h2",{id:"how-moodle-avoids-this-problem"},"How Moodle avoids this problem"),(0,a.kt)("p",null,"This is not a problem that can be solved with technology."),(0,a.kt)("h2",{id:"what-you-need-to-do-in-your-code"},"What you need to do in your code"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"There is not a lot you can do.")),(0,a.kt)("h2",{id:"what-you-need-to-do-as-an-administrator"},"What you need to do as an administrator"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"All you can do is to try to educate your users. However, don't be too hard on them if they are tricked. They were probably only trying to be helpful.")),(0,a.kt)("h2",{id:"see-also"},"See also"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"../security"},"Security")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/general/development/policies"},"Coding"))))}g.isMDXComponent=!0}}]);