(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{130:function(t,e,n){"use strict";var a={data:function(){return{open:!1}}},r=n(14),s=Object(r.a)(a,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tooltip",on:{click:function(e){t.open=!t.open}}},[t.open?n("div",{staticClass:"tooltip-body"},[t._t("default"),t._v(" "),n("button",{staticClass:"button-primary",attrs:{type:"button"}},[t._v("Got it")])],2):t._e()])},[],!1,null,null,null);s.options.__file="Tooltip.vue";e.a=s.exports},131:function(t,e,n){"use strict";var a=n(132),r=n.n(a),s=(n(33),n(3)),o=n.n(s),i="https://pool.vipnode.org/",c=1;function u(t,e){return l.apply(this,arguments)}function l(){return(l=o()(regeneratorRuntime.mark(function t(e,n){var a,r;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(i,{method:"POST",body:JSON.stringify({id:c++,method:e,params:n})});case 2:return a=t.sent,t.next=5,a.json();case 5:if(!(r=t.sent).error){t.next=8;break}throw new Error(r.error.message);case 8:return t.abrupt("return",r.result);case 9:case"end":return t.stop()}},t,this)}))).apply(this,arguments)}function p(){return(p=o()(regeneratorRuntime.mark(function t(e,n,a){var s,o;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return s=n+JSON.stringify(a),t.next=3,e.signMessage(s);case 3:return o=t.sent,t.abrupt("return",u(n,[o].concat(r()(a))));case 5:case"end":return t.stop()}},t,this)}))).apply(this,arguments)}e.a={RPC:u,SignedRPC:function(t,e,n){return p.apply(this,arguments)}}},137:function(t){t.exports=[{constant:!0,inputs:[],name:"withdrawInterval",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"operator",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"",type:"address"}],name:"accounts",outputs:[{name:"balance",type:"uint256"},{name:"timeLocked",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[],name:"forceWithdraw",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"_amount",type:"uint256"}],name:"opWithdraw",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[],name:"forceSettle",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[],name:"addBalance",outputs:[],payable:!0,stateMutability:"payable",type:"function"},{constant:!1,inputs:[{name:"_account",type:"address"},{name:"_releaseAmount",type:"uint256"},{name:"_newBalance",type:"uint256"}],name:"opSettle",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{inputs:[{name:"_operator",type:"address"}],payable:!1,stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!1,name:"account",type:"address"},{indexed:!1,name:"timeLocked",type:"uint256"}],name:"ForceSettle",type:"event"},{anonymous:!1,inputs:[{indexed:!1,name:"account",type:"address"},{indexed:!1,name:"balance",type:"uint256"}],name:"Balance",type:"event"}]},143:function(t,e,n){"use strict";n.r(e);n(36),n(74),n(33);var a=n(3),r=n.n(a),s=(n(75),n(136)),o=n(131),i=n(130),c=n(137),u=new RegExp("[0-9a-f]{128}");function l(t){return new s.Contract("0x0244998de1c9f072aa560b5c0e5221ed7be0b1ec",c,t)}var p,d,h,v,m,f,b,w={data:function(){return{showAddDeposit:!1,loading:!1,amount:"0.02",enode:"",messages:[],accounts:[],nodeIDs:[],active:null,balance:{},networkID:"4",networkName:"Rinkeby"}},methods:{txURL:function(t){return"https://rinkeby.etherscan.io/tx/"+t},formatEther:s.utils.formatEther,load:(b=r()(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this.messages=[],this.accounts=[],this.contract=null,this.loading=!0,t.prev=4,t.next=7,this.loadWallet();case 7:t.next=14;break;case 9:return t.prev=9,t.t0=t.catch(4),this.error("Failed to load wallet. Make sure you have a web3-enabled browser.",t.t0),this.loading=!1,t.abrupt("return",!1);case 14:return t.prev=14,t.next=17,this.loadContractStatus();case 17:return t.next=19,this.loadPoolAccount();case 19:t.next=24;break;case 21:t.prev=21,t.t1=t.catch(14),this.error("Unexpected error occurred. Check console for more details.",t.t1);case 24:return t.prev=24,this.loading=!1,t.finish(24);case 27:return t.abrupt("return",!1);case 28:case"end":return t.stop()}},t,this,[[4,9],[14,21,24,27]])})),function(){return b.apply(this,arguments)}),whitelist:(f=r()(regeneratorRuntime.mark(function t(){var e,n,a,r;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if((e=this.enode.match(u))&&1===e.length){t.next=3;break}return t.abrupt("return",this.error("Invalid enodeID: Should be 128 hex characters."));case 3:return n=e[0],"pool_addNode",a=[this.active.account,+new Date,n],r=this.provider.getSigner(this.active.account),t.prev=7,t.next=10,o.a.SignedRPC(r,"pool_addNode",a);case 10:t.next=15;break;case 12:return t.prev=12,t.t0=t.catch(7),t.abrupt("return",this.error("Failed to authorize node.",t.t0));case 15:return this.success("Authorized node."),t.next=18,this.loadPoolAccount();case 18:case"end":return t.stop()}},t,this,[[7,12]])})),function(){return f.apply(this,arguments)}),requestWithdraw:(m=r()(regeneratorRuntime.mark(function t(){var e,n;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(confirm("Withdraw fees will be deducted from your balance during settlement. Continue?")){t.next=2;break}return t.abrupt("return");case 2:return"pool_withdraw",e=[this.active.account,+new Date],n=this.provider.getSigner(this.active.account),t.prev=5,t.next=8,o.a.SignedRPC(n,"pool_withdraw",e);case 8:t.next=13;break;case 10:return t.prev=10,t.t0=t.catch(5),t.abrupt("return",this.error("Failed to request withdraw.",t.t0));case 13:this.success("Balance settlement requested, it should process within a few days.");case 14:case"end":return t.stop()}},t,this,[[5,10]])})),function(){return m.apply(this,arguments)}),addBalance:(v=r()(regeneratorRuntime.mark(function t(){var e,n;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e=s.utils.parseUnits(this.amount,"ether"),this.getContract()){t.next=4;break}return t.abrupt("return");case 4:return t.prev=4,t.next=7,this.contract.addBalance({value:e});case 7:n=t.sent,t.next=15;break;case 10:if(t.prev=10,t.t0=t.catch(4),!t.t0.message||-1===t.t0.message.indexOf("User denied transaction signature.")){t.next=14;break}return t.abrupt("return",this.warning("Transaction aborted. Try again?"));case 14:return t.abrupt("return",this.error("Smart contract transaction failed.",t.t0));case 15:this.showAddDeposit=!1,this.success('Deposit transaction submitted, it can take a few minutes: <a href="'+this.txURL(n.hash)+'">'+n.hash+"</a>");case 17:case"end":return t.stop()}},t,this,[[4,10]])})),function(){return v.apply(this,arguments)}),error:function(t,e){this.messages.push({body:t,kind:"error"}),void 0!==e&&console.error(e)},success:function(t){this.messages=[{body:t,kind:"success"}]},warning:function(t){this.messages.push({body:t,kind:"warning"})},info:function(t){this.messages.push({body:t,kind:"info"})},getContract:function(){if(this.contract)return this.contract;try{var t=this.provider.getSigner(this.active.account);return this.contract=l(t),this.contract}catch(t){return void this.error("Failed to load smart contract. Make sure you have a web3-enabled browser.",t)}},loadWallet:(h=r()(regeneratorRuntime.mark(function t(){var e,n,a;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(void 0!==window.web3||window.ethereum!==undefind){t.next=2;break}return t.abrupt("return",this.error("Please use a web3-enabled browser to execute this smart contract."));case 2:if(e=[],!window.ethereum){t.next=7;break}return t.next=6,window.ethereum.enable();case 6:e=t.sent;case 7:return t.next=9,this.provider.getNetwork();case 9:if(n=t.sent,String(n.chainId)===this.networkID){t.next=12;break}return t.abrupt("return",this.error("Please switch your wallet from "+n.name+" to "+this.networkName+"."));case 12:if(0!==e.length){t.next=16;break}return t.next=15,this.provider.listAccounts();case 15:t.sent;case 16:if(0!==e.length){t.next=18;break}return t.abrupt("return",this.error("Please unlock your wallet first."));case 18:this.accounts=e,this.active={account:e[0],balance:0},a=this.provider.getSigner(this.active.account),this.contract=l(a);case 22:case"end":return t.stop()}},t,this)})),function(){return h.apply(this,arguments)}),loadContractStatus:(d=r()(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.contract.accounts(this.active.account);case 3:e=t.sent,this.active.balance=e[0],this.active.timelocked=e[1],t.next=11;break;case 8:return t.prev=8,t.t0=t.catch(0),t.abrupt("return",this.error("Failed to load client balance.",t.t0));case 11:case"end":return t.stop()}},t,this,[[0,8]])})),function(){return d.apply(this,arguments)}),loadPoolAccount:(p=r()(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(null!==this.active){t.next=2;break}return t.abrupt("return",this.error("Failed to load pool status: No account detected, please unlock your wallet first."));case 2:return t.prev=2,t.next=5,o.a.RPC("pool_account",[this.active.account]);case 5:e=t.sent,this.balance=e.balance,this.nodeIDs=e.node_short_ids,t.next=13;break;case 10:return t.prev=10,t.t0=t.catch(2),t.abrupt("return",this.error("Failed to load pool status.",t.t0));case 13:case"end":return t.stop()}},t,this,[[2,10]])})),function(){return p.apply(this,arguments)})},mounted:function(){this.load(),this.enode=this.$route.query.enode},computed:{provider:function(){if(window.ethereum)return new s.providers.Web3Provider(window.ethereum);if(window.web3)return new s.providers.Web3Provider(window.web3.currentProvider);throw new Error("Please use a web3-enabled browser")}},components:{Tooltip:i.a}},y=n(14),_=Object(y.a)(w,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"contract-pool"}},[t._m(0),t._v(" "),n("button",{staticClass:"button button-small",attrs:{disabled:t.loading},on:{click:t.load}},[t._v("Reload Account Status")]),t._v(" "),n("p",[t._v("This feature is experimental. Don't use any money you're not willing to donate.")]),t._v(" "),n("div",{staticClass:"full-width white-background"},[n("div",{staticClass:"contract"},[t.messages.length>0?n("ul",{staticClass:"messages"},t._l(t.messages,function(e){return n("li",{class:e.kind,domProps:{innerHTML:t._s(e.body)}})})):t._e(),t._v(" "),t.active?n("div",[n("h3",[t._v("Current Network")]),t._v(" "),n("p",[t._v("Network: "),n("strong",[t._v(t._s(t.networkName))])]),t._v(" "),n("p",[t._v("Account:\n          "),n("select",{directives:[{name:"model",rawName:"v-model",value:t.active.account,expression:"active.account"}],on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(t.active,"account",e.target.multiple?n:n[0])}}},t._l(t.accounts,function(e){return n("option",{domProps:{value:e}},[t._v(t._s(e))])}))]),t._v(" "),n("div",{staticClass:"balance-form"},[n("h3",[t._v("Balance")]),t._v(" "),n("div",[t._v("\n            Balance: "),n("span",{staticClass:"eth"},[t._v(t._s(t.formatEther(t.balance.credit||"0")))])]),t._v(" "),n("div",[t._v("\n            Deposit: "),n("span",{staticClass:"eth"},[t._v(t._s(t.formatEther(t.active.balance)))]),t._v(" "),t.showAddDeposit?n("form",{on:{submit:[t.addBalance,function(t){t.preventDefault()}]}},[n("label",{staticClass:"eth"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.amount,expression:"amount"}],staticClass:"amount",attrs:{type:"text",value:"0.2",placeholder:"0.2",name:"amount"},domProps:{value:t.amount},on:{input:function(e){e.target.composing||(t.amount=e.target.value)}}})]),t._v(" "),n("input",{staticClass:"button-primary",attrs:{type:"submit",disabled:t.loading,value:"Confirm Deposit"}}),t._v(" "),n("input",{attrs:{type:"reset",value:"Cancel"},on:{click:function(e){t.showAddDeposit=!1}}})]):n("span",[n("button",{on:{click:function(e){t.showAddDeposit=!t.showAddDeposit}}},[t._v("Add Deposit")]),t._v(" "),t.active.balance>0?n("button",{attrs:{disabled:t.loading},on:{click:t.requestWithdraw}},[t._v("Request Withdraw")]):t._e()]),t._v(" "),n("Tooltip",[n("ul",{staticStyle:{"min-width":"400px"}},[n("li",[n("strong",[t._v("Deposit fee:")]),t._v(" 0 ETH")]),t._v(" "),n("li",[n("strong",[t._v("Withdraw fee:")]),t._v(" 0.0025 ETH (includes gas fee)")]),t._v(" "),n("li",[n("strong",[t._v("Minimum withdraw balance:")]),t._v(" 0.005 ETH")])])])],1)]),t._v(" "),n("div",{staticClass:"node-ids"},[n("h3",[t._v("Authorized Nodes")]),t._v(" "),t.nodeIDs.length>0?n("ul",t._l(t.nodeIDs,function(e){return n("li",[t._v(t._s(e)+"…")])})):n("p",[t._v("Add your first client node to give it permission to use your account's balance.")]),t._v(" "),n("form",{staticClass:"row",on:{submit:[t.whitelist,function(t){t.preventDefault()}]}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.enode,expression:"enode"}],staticClass:"enode",attrs:{type:"text",value:"",placeholder:"enode://...",name:"enode"},domProps:{value:t.enode},on:{input:function(e){e.target.composing||(t.enode=e.target.value)}}}),t._v(" "),n("input",{staticClass:"button-primary",attrs:{type:"submit",disabled:t.loading,value:"Add Node"}})])])]):t._e()])])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h2",[this._v("Balance for "),e("span",{staticClass:"hl1"},[this._v("pool.vipnode.org")])])}],!1,null,null,null);_.options.__file="ContractPool.vue";var g={components:{ContractPool:_.exports,Tooltip:i.a},head:function(){return{title:"Pool"}}},x=Object(y.a)(g,function(){var t=this.$createElement,e=this._self._c||t;return e("article",[e("section",[e("no-ssr",[e("ContractPool")],1)],1)])},[],!1,null,null,null);x.options.__file="pool.vue";e.default=x.exports}}]);