"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[9873],{74822:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return m},default:function(){return k},frontMatter:function(){return n},metadata:function(){return d},toc:function(){return c}});var a=r(83117),o=r(80102),s=(r(67294),r(3905)),i=r(13904),l=["components"],n={title:"Moodle 3.7.6",tags:["Release notes","Moodle 3.7"],sidebar_position:6,moodleVersion:"3.7.6"},m=void 0,d={unversionedId:"releases/3.7/3.7.6",id:"releases/3.7/3.7.6",title:"Moodle 3.7.6",description:"Release date: 11 May 2020",source:"@site/general/releases/3.7/3.7.6.md",sourceDirName:"releases/3.7",slug:"/releases/3.7/3.7.6",permalink:"/devdocs/general/releases/3.7/3.7.6",draft:!1,editUrl:"https://github.com/moodle/devdocs/edit/main/general/releases/3.7/3.7.6.md",tags:[{label:"Release notes",permalink:"/devdocs/general/tags/release-notes"},{label:"Moodle 3.7",permalink:"/devdocs/general/tags/moodle-3-7"}],version:"current",lastUpdatedBy:"Andrew Lyons",lastUpdatedAt:1655100022,formattedLastUpdatedAt:"13/06/2022",sidebarPosition:6,frontMatter:{title:"Moodle 3.7.6",tags:["Release notes","Moodle 3.7"],sidebar_position:6,moodleVersion:"3.7.6"},sidebar:"releaseNotes",previous:{title:"Moodle 3.7.5",permalink:"/devdocs/general/releases/3.7/3.7.5"},next:{title:"Moodle 3.7.7",permalink:"/devdocs/general/releases/3.7/3.7.7"}},p={},c=[{value:"General fixes and improvements",id:"general-fixes-and-improvements",level:2},{value:"Accessibility improvements",id:"accessibility-improvements",level:2},{value:"Security improvements",id:"security-improvements",level:2},{value:"Security fixes",id:"security-fixes",level:2},{value:"Translations",id:"translations",level:2}],u={toc:c};function k(e){var t=e.components,r=(0,o.Z)(e,l);return(0,s.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)(i.Z,(0,a.Z)({frontMatter:n},void 0!==d?{metadata:d}:{},{mdxType:"MoodlePageBanner"})),(0,s.kt)("p",null,"Release date: 11 May 2020"),(0,s.kt)("p",null,"Here is ",(0,s.kt)("a",{parentName:"p",href:"https://tracker.moodle.org/secure/IssueNavigator!executeAdvanced.jspa?jqlQuery=project+%3D+mdl+AND+resolution+%3D+fixed+AND+fixVersion+in+%28%223.7.6%22%29+ORDER+BY+priority+DESC&runQuery=true&clear=true"},"the full list of fixed issues in 3.7.6"),"."),(0,s.kt)("h2",{id:"general-fixes-and-improvements"},"General fixes and improvements"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-67442"},"MDL-67442")," - Assignment online text and feedback comments don't expand using Safari"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-66245"},"MDL-66245")," - GDPR data request export not usable when using special characters (invalid file paths)"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-52319"},"MDL-52319")," - Failed environment.xml check does not prevent plugin from being installed"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-58964"},"MDL-58964")," - Add existing class attributes to Boost flat navigation nodes"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-67995"},"MDL-67995")," - Single activity format dropdown from types of activity empty"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-68277"},"MDL-68277")," - Essay question type review: answer box should be the right size"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-66200"},"MDL-66200")," - Gradebook CSV import deletes existing feedback comments if set to be ignored"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-68183"},"MDL-68183")," - Searching for user by email (case-insensitive + accent-sensitive) is too expensive on MySQL with many users"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-66671"},"MDL-66671")," - Missing LTI resource crashes sync_grades task"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-68223"},"MDL-68223")," - When grading assignments unable to select annotation comment using the mouse"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-67886"},"MDL-67886")," - admin/cli/check_database_schema.php does not check indexes"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-66849"},"MDL-66849")," - Appearance of tooltip title attributes in custom menu is incorrect"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-68146"},"MDL-68146")," - help and advanced icons are shown twice for checkboxes in forms"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-68049"},"MDL-68049")," - Link-level LTI memberships service not working"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-65539"},"MDL-65539")," - Keyboard drag and drop ordering of sections in courses is broken and confusing"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-68427"},"MDL-68427")," - paging_bar previous/next buttons have wrong page numbers"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-67930"},"MDL-67930")," - Forum discussions with hidden group picture display as broken links"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-68189"},"MDL-68189")," - Names of sections renamed inline do not change in the keyboard drag and drop menu"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-68509"},"MDL-68509")," - Deleting a temporary table forces a reload of the databasemeta cache (Backport of ",(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-58584"},"MDL-58584"),")"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-67499"},"MDL-67499")," - Cannot delete user if email is over 89 characters long"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-67751"},"MDL-67751")," - Folders don't get listed in course resources"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-67672"},"MDL-67672")," - As soon as fullnamedisplay and alternativefullnameformat differ, names in profile title and user menu differ")),(0,s.kt)("h2",{id:"accessibility-improvements"},"Accessibility improvements"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-64494"},"MDL-64494")," - Contrast of colours for success, info, error and warnings text is not accessible"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-67968"},"MDL-67968")," - Calendar: New event: Accessibility issues"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-67970"},"MDL-67970")," - Course homepage: Editing mode on: Accessibility issues"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-68148"},"MDL-68148")," - Course participants: Main: Accessibility issues"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-67902"},"MDL-67902")," - Calendar month view accessibility issues"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-68135"},"MDL-68135")," - Course homepage: View mode: Accessibility issues"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-67901"},"MDL-67901")," - No label for clear my choice option on multiple-choice questions"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-68196"},"MDL-68196")," - Course participants: Enrol user: Accessibility issues"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-68266"},"MDL-68266")," - Course management: insufficient colour contrast")),(0,s.kt)("h2",{id:"security-improvements"},"Security improvements"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-68193"},"MDL-68193")," - db_replace() doesn't emit any audit trail, should emit a Moodle event"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-68443"},"MDL-68443")," - Improve XMLDB path validation of included files")),(0,s.kt)("h2",{id:"security-fixes"},"Security fixes"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=403512"},"MSA-20-0005")," MathJax URL upgraded to later version to remove XSS risk (upstream)"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=403513"},"MSA-20-0006")," Remote code execution possible via SCORM packages")),(0,s.kt)("h2",{id:"translations"},"Translations"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://docs.moodle.org/fr/Notes_de_mise_%C3%A0_jour_de_Moodle_3.7.6"},"Notes de mise \xe0 jour de Moodle 3.7.6")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://docs.moodle.org/es/Notas_de_Moodle_3.7.6"},"Notas de Moodle 3.7.6"))))}k.isMDXComponent=!0}}]);