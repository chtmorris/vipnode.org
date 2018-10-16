(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{124:function(e,t,n){e.exports=n.p+"img/3bc8add.png"},125:function(e,t,n){e.exports=n.p+"img/c44d252.png"},126:function(e,t,n){"use strict";var o=n(14),i=Object(o.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this.$createElement,t=this._self._c||e;return t("section",{attrs:{id:"newsletter"}},[t("h2",[t("span",{staticClass:"hl1"},[this._v("Breaking changes, new features, and updates will be announced by email.")]),this._v(" Subscribe here.\n  ")]),this._v(" "),t("form",{attrs:{action:"https://tinyletter.com/vipnode",method:"post",target:"popupwindow",onsubmit:"window.open('https://tinyletter.com/vipnode', 'popupwindow', 'scrollbars=yes,width=800,height=600');return true"}},[t("input",{attrs:{type:"text",name:"email",id:"tlemail",placeholder:"satoshin@gmx.com"}}),this._v(" "),t("input",{attrs:{type:"hidden",value:"1",name:"embed"}}),this._v(" "),t("input",{staticClass:"button-primary",attrs:{type:"submit",value:"Subscribe"}})]),this._v(" "),t("p",[t("small",[this._v("I promise no ICO spam, just project updates.")])])])}],!1,null,null,null);i.options.__file="Newsletter.vue";t.a=i.exports},127:function(e,t,n){"use strict";var o=[function(){var e=this.$createElement,t=this._self._c||e;return t("section",{staticClass:"text-center",attrs:{id:"sponsors"}},[t("h2",[this._v("Sponsors & Partnerships")]),this._v(" "),t("div",{staticClass:"grid"},[t("a",{attrs:{href:"https://www.ethereum.org/foundation"}},[t("img",{attrs:{src:n(124),alt:"Ethereum Foundation"}})]),this._v(" "),t("a",{attrs:{href:"https://infura.io/"}},[t("img",{attrs:{src:n(125),alt:"Infura"}})]),this._v(" "),t("a",{staticClass:"placeholder",attrs:{href:"mailto:partner@vipnode.org",title:"Email for partnership opportunities"}}),this._v(" "),t("a",{staticClass:"placeholder",attrs:{href:"mailto:partner@vipnode.org",title:"Email for partnership opportunities"}})])])}],i=n(14),r=Object(i.a)({},function(){this.$createElement;this._self._c;return this._m(0)},o,!1,null,null,null);r.options.__file="Sponsors.vue";t.a=r.exports},137:function(e,t,n){"use strict";n.r(t);var o=n(127),i=n(126),r={components:{Sponsors:o.a,Newsletter:i.a},head:function(){return{title:"FAQ · Vipnode"}}},a=n(14),s=Object(a.a)(r,function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("article",{attrs:{id:"faq"}},[n("div",{staticClass:"bumped-in"},[n("h1",[e._v("Frequently Asked Questions")]),e._v(" "),n("h3",[e._v("Why?")]),e._v(" "),n("p",[e._v("There are too many light clients on the Ethereum network and not enough full\n          nodes to service them all. On a bad day, it can take several hours to finally\n          connect to the network with a light client.")]),e._v(" "),n("p",[e._v("vipnode creates an incentive for more people to run full nodes and improve the\n          state of the Ethereum network as a whole.")]),e._v(" "),n("h3",[e._v("Does it work with Parity light clients? What about older Geth clients?")]),e._v(" "),n("p",[e._v("Only geth v1.8.x and newer, for now.")]),e._v(" "),n("h3",[e._v("Any guarantees? What's the SLA? (Service Level Agreement)")]),e._v(" "),n("p",[e._v("During the beta, there are no guarantees. There can be some downtime if\n          resources get tight and the VPS need to be upgraded. I'm not expecting more than\n          a few hours of downtime per month (but hopefully zero).")]),e._v(" "),n("h3",[e._v("Neat, how does it work?")]),e._v(" "),n("p",[e._v("vipnode is running a modified go-ethereum node with a script that monitors the\n          smart contract for new paying nodes. When you pay, it adds your NodeID to the\n          trusted nodes set. When you connect with this NodeID, you get to bypass the\n          normal server limits and get to the front of the line.")]),e._v(" "),n("p",[e._v("Modifications are going to be submitted upstream once they're sufficiently\n          tested.")]),e._v(" "),n("h3",[e._v("How does vipnode relate to Infura?")]),e._v(" "),n("p",[e._v("Infura provides centralized gateways to various services. It's great! It allows apps to connect to it without running any Ethereum infrastructure.")]),e._v(" "),n("p",[e._v("On the other hand, vipnode creates an incentive for more people to run valuable Ethereum infrastructure and serve more native clients in the peer-to-peer network.")]),e._v(" "),n("p"),e._v(" "),n("h3",[e._v("Can I run my own vipnode? What does it cost?")]),e._v(" "),n("p",[e._v("That's the goal! "),n("a",{attrs:{href:"https://github.com/shazow/vipnode"}},[e._v("Everything is open source")]),e._v(", but it's not packaged nicely yet.")]),e._v(" "),n("p",[e._v("Right now I'm running it on Scaleway for about $30/mo, which should hopefully handle many dozens of peers.")]),e._v(" "),n("p",[e._v("I'm collecting data on the resource requirements from this experiment which will\n          help inform the pricing in the future.")]),e._v(" "),n("h3",{attrs:{id:"connect"}},[e._v("How do I connect to the vipnode?")]),e._v(" "),n("p",[e._v("Set your "),n("code",[e._v("<datadir>/geth/static-nodes.json")]),e._v(" to:")]),e._v(" "),n("pre",[n("code",[e._v('[\n    "enode://19b5013d24243a659bda7f1df13933bb05820ab6c3ebf6b5e0854848b97e1f7e308f703466e72486c5bc7fe8ed402eb62f6303418e05d330a5df80738ac974f6@163.172.138.100:30303?discport=30301"\n]')])]),e._v(" "),n("p",[e._v("and restart your Ethereum client.")]),e._v(" "),n("p",[e._v("If you'd like to limit your client just to the vipnode, use the "),n("code",[e._v("--nodiscover")]),e._v("\n        flag.")]),e._v(" "),n("h3",{attrs:{id:"enodeID"}},[e._v("How do I get my enode ID?")]),e._v(" "),n("p",[n("strong",[e._v("When you start your Go Ethereum client, it prints out your enode ID.")]),e._v(" This encodes the public key of your node that can be used for authentication.")]),e._v(" "),n("p",[n("strong",[e._v("It looks like this")]),e._v(":"),n("br"),e._v(" "),n("code",[e._v("enode://6f8a80d143…b39763a4c0@123.123.123.123:30303?discport=30301")])]),e._v(" "),n("p",[n("strong",[e._v("Alternatively, if you have a console to a running geth node, you can run this to print your enode ID:")]),n("br"),e._v(" "),n("code",[e._v("admin.nodeInfo.enode")])]),e._v(" "),n("h3",[e._v("Can I connect to a vipnode for free?")]),e._v(" "),n("p",[e._v("Yes! Each vipnode also allocates at least 25 slots to regular\n          peers and several public light client peers. These numbers can\n          change in the future, but the goal is to be a good citizen of the\n          network and give back to everyone.")]),e._v(" "),n("p",[e._v('Add this vipnode as a "static peer" and grab one of the regular peer slots.')]),e._v(" "),n("h3",[e._v('My geth is stuck at "IPC endpoint opened", or I keep seeing "no suitable peers available"')]),e._v(" "),n("p",[e._v("If you didn't pay for vipnode (or your 30 days expired), then that means there\n          aren't enough free connection slots available. You can keep waiting (it can take\n          a few hours), or "),n("a",{attrs:{href:"/#reserve"}},[e._v("pay for vipnode access")]),e._v(".")]),e._v(" "),n("p",[e._v("If you paid for vipnode, make sure:")]),e._v(" "),n("ol",[n("li",[e._v("You're connecting from the same enode ID as you specified in your payment")]),e._v(" "),n("li",[e._v("You added the vipnode enode to your "),n("code",[e._v("geth/static-nodes.json")])])])])])}],!1,null,null,null);s.options.__file="faq.vue";t.default=s.exports}}]);