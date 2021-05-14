(self.webpackChunkcircles_handbook=self.webpackChunkcircles_handbook||[]).push([[681],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return u},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),c=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(a),m=r,h=d["".concat(i,".").concat(m)]||d[m]||p[m]||s;return a?n.createElement(h,o(o({ref:t},u),{},{components:a})):n.createElement(h,o({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,o=new Array(s);o[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<s;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},9344:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return o},metadata:function(){return l},toc:function(){return i},default:function(){return u}});var n=a(4786),r=a(6843),s=(a(7294),a(3905)),o={id:"estimate-gas-cost",title:"Exploring transfer steps and estimating the gas cost",slug:"/developers/tutorials/estimate-gas-cost"},l={unversionedId:"developers/tutorials/estimate-gas-cost",id:"developers/tutorials/estimate-gas-cost",isDocsHomePage:!1,title:"Exploring transfer steps and estimating the gas cost",description:"This tutorial is made for finding the transfer steps that the circles api would chose to make a hypothetical transitive transaction. It also explains how to find the estimated gas cost.",source:"@site/docs/developers/tutorials/estimate-gas-cost.md",sourceDirName:"developers/tutorials",slug:"/developers/tutorials/estimate-gas-cost",permalink:"/docs/developers/tutorials/estimate-gas-cost",editUrl:"https://github.com/CirclesUBI/circles-handbook/edit/main/docs/developers/tutorials/estimate-gas-cost.md",version:"current",frontMatter:{id:"estimate-gas-cost",title:"Exploring transfer steps and estimating the gas cost",slug:"/developers/tutorials/estimate-gas-cost"}},i=[{value:"To find the transfer steps you will need:",id:"to-find-the-transfer-steps-you-will-need",children:[]},{value:"To estimate the gas cost you will also need:",id:"to-estimate-the-gas-cost-you-will-also-need",children:[]},{value:"Steps",id:"steps",children:[]}],c={toc:i};function u(e){var t=e.components,a=(0,r.Z)(e,["components"]);return(0,s.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"This tutorial is made for finding the transfer steps that the circles api would chose to make a ",(0,s.kt)("strong",{parentName:"p"},"hypothetical transitive transaction"),". It also explains how to find the estimated gas cost."),(0,s.kt)("h3",{id:"to-find-the-transfer-steps-you-will-need"},"To find the transfer steps you will need:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"A circles account with enough circles"),(0,s.kt)("li",{parentName:"ul"},"The checksummed* safe address to that account (you can find it in your circles wallet) "),(0,s.kt)("li",{parentName:"ul"},"The checksummed* adddress to another account you want to transfer to")),(0,s.kt)("h3",{id:"to-estimate-the-gas-cost-you-will-also-need"},"To estimate the gas cost you will also need:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"A metamask account connected to the first circles account",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"You can follow ",(0,s.kt)("a",{parentName:"li",href:"https://handbook.joincircles.net/docs/developers/tutorials/gnosis-safe-as-wallet"},"this guide")),(0,s.kt)("li",{parentName:"ul"},"Switch from Ethereum mainnet to the xdai network. To add xdai chose custom RCP under Networks and specify the following:",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"name: xdai"),(0,s.kt)("li",{parentName:"ul"},"URL: ",(0,s.kt)("a",{parentName:"li",href:"https://xdai.poanetwork.dev"},"https://xdai.poanetwork.dev")),(0,s.kt)("li",{parentName:"ul"},"Chain ID: 100")))))),(0,s.kt)("p",null,"*A checksummed address will contain some capital letters unlike the non-checksummed address."),(0,s.kt)("h3",{id:"steps"},"Steps"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("strong",{parentName:"li"},"Decide on a transfer:")," ",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"from whom (use an account you have access to)"),(0,s.kt)("li",{parentName:"ul"},"to whom"),(0,s.kt)("li",{parentName:"ul"},"how many circles"))),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("strong",{parentName:"li"},"Find the transfer steps")," ")),(0,s.kt)("p",null,"Run this command in the terminal with your specified data"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell=fish"},'curl -H "Content-Type: application/json" -X POST -d \'{"from":"<FROM_ADDRESS>","to":"<TO_ADDRESS>","value":"<AMOUNT OF CIRCLES IN WEI>"}\' https://api.circles.garden/api/transfers\n')),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell=fish"},'curl -H "Content-Type: application/json" -X POST -d \'{"from":"0x0B900CBbc0e6bc4edc12f56360C8bC141eD1cc1b","to":"0x6dd9EEAb489b59bdd57a59694bEe653feCE987b6","value":"100000000000000000000"}\' https://api.circles.garden/api/transfers\n')),(0,s.kt)("p",null,"This is what the circles.garden](",(0,s.kt)("a",{parentName:"p",href:"https://circles.garden/"},"https://circles.garden/"),") wallet calls to find out how much you can send to an account when doing a transaction through the app.\nIt uses a large amounts of circles to get the maximum amount:\n1 000 000 000 000 000 000 000 000 000 000 000 Wei = 1 trillion circles. (1 Circle is 1 000 000 000 000 000 000 Wei)"),(0,s.kt)("p",null,"The result will look something like this:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "status":"ok",\n    "data":\n    {\n        "from":"...","\n        to":"...",\n        "maxFlowValue":"...",\n        "processDuration":...,\n        "transferValue":"...",\n        "transferSteps":\n        [\n            {"from":"...","step":0,"to":"...","value":"...","tokenOwnerAddress":"..."},\n            {"from":"...","step":1,"to":"...","value":"...","tokenOwnerAddress":"..."}\n        ]\n    }\n}\n')),(0,s.kt)("ol",{start:3},(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("strong",{parentName:"li"},"Extract data arrays specifying the transfers"))),(0,s.kt)("p",null,"Use a script like this to extract arrays of token owners, to, from and values:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"const transfers = require('./transfer.json');\n\nconst tokenOwnerAddresses = [];\nconst srcs = [];\nconst dests = [];\nconst amounts = [];\n\ntransfers.data.transferSteps.forEach(transfer =>{\n    tokenOwnerAddresses.push(transfer.tokenOwnerAddress);\n    srcs.push(transfer.from);\n    dests.push(transfer.to);\n    amounts.push(transfer.value);\n});\n\nconsole.log({\n    tokenOwnerAddresses,\n    srcs,\n    dests,\n    amounts\n});\n")),(0,s.kt)("p",null,"Then remove white spaces and make sure quotations are double quotations."),(0,s.kt)("ol",{start:4},(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("strong",{parentName:"li"},"Get the hex data for the transaction"))),(0,s.kt)("p",null,"Now that you have the lists of tokenOwnerAddresses, srcs, dests and amounts, go to ",(0,s.kt)("a",{parentName:"p",href:"https://blockscout.com/poa/xdai/address/0x29b9a7fBb8995b2423a71cC17cf9810798F6C543/write-contract"},"the circles Hub on blockscout"),"\nIn the write contract tab:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"connect to your metamask account"),(0,s.kt)("li",{parentName:"ul"},'use "3.transferThrough" and paste the value arrays from above'),(0,s.kt)("li",{parentName:"ul"},'click "write"'),(0,s.kt)("li",{parentName:"ul"},"Metamask will open, switch to the data tab and copy the hex data")),(0,s.kt)("ol",{start:5},(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("strong",{parentName:"li"},"Get the gas estimates from the circles api"))),(0,s.kt)("p",null,"Running this curl command (it needs the checksummed safe address, which you can find it in your circles wallet and the hex data)"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell=fish"},'curl -X POST "\nhttps://relay.circles.garden/api/v2/safes/\n<SAFE_ADDRESS>/transactions/estimate/" -H  "Content-Type: application/json" -H  "accept: application/json" -d \'{ "safe": "<SAFE_ADDRESS>", "data": "<HEX_DATA>", "to": "0x29b9a7fBb8995b2423a71cC17cf9810798F6C543", "value": 0, "operation": 0, "gasToken": "0x0000000000000000000000000000000000000000" }\'\n')),(0,s.kt)("p",null,"returns the gas information like this:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "safeTxGas": "4064004",\n  "baseGas": "95328",\n  "dataGas": "95328",\n  "operationalGas": "0",\n  "gasPrice": "1000000000",\n  "lastUsedNonce": 30,\n  "gasToken": "0x0000000000000000000000000000000000000000",\n  "refundReceiver": "0x0739a8D036c966aC9161Ea14855CE0f94C15B87b"\n}\n')),(0,s.kt)("p",null,"The total gas is ",(0,s.kt)("inlineCode",{parentName:"p"},"safeTxGas + baseGas"),". In the example above, the total gas is then ",(0,s.kt)("inlineCode",{parentName:"p"},"4.159.332")," (which under the ",(0,s.kt)("inlineCode",{parentName:"p"},"12.500.000")," gas per block limit). "),(0,s.kt)("p",null,"The gas price is specified in Wei and is constant on the xDai network."))}u.isMDXComponent=!0}}]);