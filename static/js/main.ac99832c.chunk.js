(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var s=n(1),c=n.n(s),i=n(4),r=n.n(i),o=(n(9),n(10),n(11),n(0)),a=function(){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h1",{id:"title",children:"Hack the Vault"}),Object(o.jsxs)("p",{id:"intro-description",children:[Object(o.jsx)("strong",{children:"WELCOME TO HI-22."}),Object(o.jsx)("br",{}),"Here the space scavenger will meet the OXOs, they are the inhabitants of this planet. They are not very happy that he came uninvited and because of that, they stole some pieces of his spaceship. Your mission in this game is to recover the missing pieces and escape HI-22.",Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),"The OXOs are hiding the spaceship's GPS in a secret vault. In order to find it, you have a mission. The mission is to hack the secret vault and get the missing GPS."]})]})},d=n(2),l=(n(13),function(e){return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("button",{className:"card",onClick:function(){e.onFlip()},children:e.isFlipped?e.number:"Click to flip"})})}),u=function(){var e=Object(s.useState)(["876345","647912","513864","982637","876345","513864","134076","647912","982637"]),t=Object(d.a)(e,2),n=t[0],c=t[1],i=Object(s.useState)(null),r=Object(d.a)(i,2),a=r[0],u=r[1],b=Object(s.useState)(null),h=Object(d.a)(b,2),j=h[0],m=h[1];Object(s.useEffect)((function(){if(a&&j){if(a.number===j.number&&a.index!==j.index){var e=n.filter((function(e){return e!==a.number}));setTimeout((function(){c(e)}),750)}setTimeout((function(){u(null),m(null)}),750)}}),[a,j,n]);var p=function(e){var t=e.number,n=e.index,s=a&&a.index===n&&a.number===t,c=j&&j.index===n&&j.number===t;return s||c};return Object(o.jsx)("div",{id:"card-section",children:n.map((function(e,t){return Object(o.jsx)(l,{onFlip:function(){return n={number:e,index:t},void(a?j||m(n):u(n));var n},number:e,isFlipped:p({number:e,index:t})},t)}))})},b=(n(14),function(e){return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("button",{id:"keyboard-btn",onClick:function(){e.typedNumber(e.number)},children:e.number})})}),h=function(){var e=Object(s.useState)(""),t=Object(d.a)(e,2),n=t[0],c=t[1],i=function(e){c(n+e)};return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("div",{className:"btn-container",children:[Object(o.jsx)(b,{number:"1",typedNumber:i}),Object(o.jsx)(b,{number:"2",typedNumber:i}),Object(o.jsx)(b,{number:"3",typedNumber:i})]}),Object(o.jsxs)("div",{className:"btn-container",children:[Object(o.jsx)(b,{number:"4",typedNumber:i}),Object(o.jsx)(b,{number:"5",typedNumber:i}),Object(o.jsx)(b,{number:"6",typedNumber:i})]}),Object(o.jsxs)("div",{className:"btn-container",children:[Object(o.jsx)(b,{number:"7",typedNumber:i}),Object(o.jsx)(b,{number:"8",typedNumber:i}),Object(o.jsx)(b,{number:"9",typedNumber:i})]}),Object(o.jsx)(b,{number:"0",typedNumber:i}),Object(o.jsx)("button",{className:"button",onClick:function(){!function(e){"134076"===e?(alert("CONGRATS! You hacked the vault and recovered the lost GPS! Press ok to move forward to the next level and find more spaceship pieces!"),window.parent.postMessage("nextLevel")):alert("Sorry, you have the wrong password. The vault was not hacked! Start again."),c("")}(n)},children:"OPEN THE VAULT"})]})};var j=function(){var e=function(e,t){document.getElementById(e).style.display="none",document.getElementById(t).style.display="block"};return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("div",{id:"intro",children:[Object(o.jsx)(a,{}),Object(o.jsx)("button",{className:"button",onClick:function(){e("intro","challenge1")},children:"LET'S DO IT!"})]}),Object(o.jsxs)("div",{id:"challenge1",children:[Object(o.jsxs)("p",{id:"inspect-p",children:["First, you need to find the code to disable the vault's alarm. To find the alarm's code, you need to Hack and ",Object(o.jsx)("strong",{children:"inspect"})," the hell out of this vault! Find the code and type below."]}),Object(o.jsx)("label",{id:"inspect-label",htmlFor:"inspect-code",children:"Type here the alarm code:"}),Object(o.jsx)("input",{id:"inspect-input",type:"text"}),Object(o.jsx)("button",{className:"button",onClick:function(){!function(){var t=document.getElementById("inspect-input").value;""===t?alert("You need to type something, mate! What kind of hacker are you?"):"ALIENS_ROCK!!"===t?(alert("You did it! Press ok to move forward to the next mission!"),e("challenge1","challenge2")):alert("Sorry, you have the wrong code. Alarm not disabled!")}()},children:"DISABLE ALARM"})]}),Object(o.jsxs)("div",{id:"challenge2",children:[Object(o.jsxs)("p",{className:"password-p",children:["Amazing! You found the code and now the alarm is disabled.",Object(o.jsx)("br",{}),"The next task in this mission is to find the password to open the vault.",Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),"To find the password, you will need to hack the vault system. To make it harder, the OXOs have a firewall memory card game. Only one card is unique and it contains the password. Finish the game and find the card!"]}),Object(o.jsx)("p",{className:"password-sub",children:"Don't forget to memorize the password, you will need it later! "}),Object(o.jsx)(u,{}),Object(o.jsx)("button",{className:"button",onClick:function(){alert("Great job, you hacker! Press ok to move forward to the final mission."),e("challenge2","challenge3")},children:"I HAVE THE PASSWORD"})]}),Object(o.jsxs)("div",{id:"challenge3",children:[Object(o.jsx)("p",{className:"password-p",children:"Nice hacking so far! Now for the final mission, let's see if you have the correct password! All you have to do to open the vault is to type the password in the vault's keyboard. Click below on the correct numbers, in the correct order to open the vault!"}),Object(o.jsxs)("p",{className:"password-sub",children:["If you need a sneak peek of the password again, press ",Object(o.jsx)("button",{id:"back-button",onClick:function(){e("challenge3","challenge2")},children:"here"}),"."]}),Object(o.jsx)(h,{})]})]})},m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,s=t.getFID,c=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),s(e),c(e),i(e),r(e)}))};r.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(j,{})}),document.getElementById("root")),m()}],[[15,1,2]]]);
//# sourceMappingURL=main.ac99832c.chunk.js.map