(self.webpackChunkstrapi_henriquezolini=self.webpackChunkstrapi_henriquezolini||[]).push([[3852],{63852:(p,m,C)=>{"use strict";var x;x={value:!0};var T=C(10434),_=C(76826);function y(e){return e&&typeof e=="object"&&"default"in e?e:{default:e}}var E=y(T),U=y(_),i={CASE_SENSITIVE_EQUAL:9,EQUAL:8,STARTS_WITH:7,WORD_STARTS_WITH:6,STRING_CASE:5,STRING_CASE_ACRONYM:4,CONTAINS:3,ACRONYM:2,MATCHES:1,NO_MATCH:0},c={CAMEL:.8,PASCAL:.6,KEBAB:.4,SNAKE:.2,NO_CASE:0};S.rankings=i,S.caseRankings=c;var L=function(e,r){return String(e.rankedItem).localeCompare(r.rankedItem)};function S(e,r,a){a===void 0&&(a={});var n=a,u=n.keys,t=n.threshold,s=t===void 0?i.MATCHES:t,A=n.baseSort,d=A===void 0?L:A,k=e.reduce(v,[]);return k.sort(function(l,f){return V(l,f,d)}).map(function(l){var f=l.item;return f});function v(l,f,h){var o=b(f,u,r,a),I=o.rankedItem,O=o.rank,N=o.keyIndex,R=o.keyThreshold,G=R===void 0?s:R;return O>=G&&l.push({rankedItem:I,item:f,rank:O,index:h,keyIndex:N}),l}}function b(e,r,a,n){if(!r)return{rankedItem:e,rank:M(e,a,n),keyIndex:-1,keyThreshold:n.threshold};var u=Y(e,r);return u.reduce(function(t,s,A){var d=t.rank,k=t.rankedItem,v=t.keyIndex,l=t.keyThreshold,f=s.itemValue,h=s.attributes,o=M(f,a,n),I=k,O=h.minRanking,N=h.maxRanking,R=h.threshold;return o<O&&o>=i.MATCHES?o=O:o>N&&(o=N),o>d&&(d=o,v=A,l=R,I=f),{rankedItem:I,rank:d,keyIndex:v,keyThreshold:l}},{rank:i.NO_MATCH,keyIndex:-1,keyThreshold:n.threshold})}function M(e,r,a){if(e=H(e,a),r=H(r,a),r.length>e.length)return i.NO_MATCH;if(e===r)return i.CASE_SENSITIVE_EQUAL;var n=K(e),u=B(e,r,n),t=g(e,r,n);return e=e.toLowerCase(),r=r.toLowerCase(),e===r?i.EQUAL+n:e.indexOf(r)===0?i.STARTS_WITH+n:e.indexOf(" "+r)!==-1?i.WORD_STARTS_WITH+n:u?i.STRING_CASE+n:n>0&&t?i.STRING_CASE_ACRONYM+n:e.indexOf(r)!==-1?i.CONTAINS+n:r.length===1?i.NO_MATCH:w(e).indexOf(r)!==-1?i.ACRONYM+n:P(e,r)}function w(e){var r="",a=e.split(" ");return a.forEach(function(n){var u=n.split("-");u.forEach(function(t){r+=t.substr(0,1)})}),r}function K(e){var r=e.toLowerCase()!==e,a=e.indexOf("-")>=0,n=e.indexOf("_")>=0;if(!r&&!n&&a)return c.KEBAB;if(!r&&n&&!a)return c.SNAKE;if(r&&!a&&!n){var u=e[0].toUpperCase()===e[0];return u?c.PASCAL:c.CAMEL}return c.NO_CASE}function B(e,r,a){var n=e.toLowerCase().indexOf(r.toLowerCase());switch(a){case c.SNAKE:return e[n-1]==="_";case c.KEBAB:return e[n-1]==="-";case c.PASCAL:case c.CAMEL:return n!==-1&&e[n]===e[n].toUpperCase();default:return!1}}function g(e,r,a){var n=null;switch(a){case c.SNAKE:n="_";break;case c.KEBAB:n="-";break;case c.PASCAL:case c.CAMEL:n=/(?=[A-Z])/;break;default:n=null}var u=e.split(n);return r.toLowerCase().split("").reduce(function(t,s,A){var d=u[A];return t&&d&&d[0].toLowerCase()===s},!0)}function P(e,r){var a=0,n=0;function u(l,f,h){for(var o=h;o<f.length;o++){var I=f[o];if(I===l)return a+=1,o+1}return-1}function t(l){var f=a/r.length,h=i.MATCHES+f*(1/l);return h}var s=u(r[0],e,0);if(s<0)return i.NO_MATCH;n=s;for(var A=1;A<r.length;A++){var d=r[A];n=u(d,e,n);var k=n>-1;if(!k)return i.NO_MATCH}var v=n-s;return t(v)}function V(e,r,a){var n=-1,u=1,t=e.rank,s=e.keyIndex,A=r.rank,d=r.keyIndex;return t===A?s===d?a(e,r):s<d?n:u:t>A?n:u}function H(e,r){var a=r.keepDiacritics;return e=""+e,a||(e=U.default(e)),e}function W(e,r){typeof r=="object"&&(r=r.key);var a;return typeof r=="function"?a=r(e):r.indexOf(".")!==-1?a=r.split(".").reduce(function(n,u){return n?n[u]:null},e):a=e[r],a!=null?[].concat(a):null}function Y(e,r){return r.reduce(function(a,n){var u=W(e,n);return u&&u.forEach(function(t){a.push({itemValue:t,attributes:D(n)})}),a},[])}function D(e){return typeof e=="string"&&(e={key:e}),E.default({maxRanking:1/0,minRanking:-1/0},e)}m.ZP=S,x=i},76826:p=>{var m={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u1EA4:"A",\u1EAE:"A",\u1EB2:"A",\u1EB4:"A",\u1EB6:"A",\u00C6:"AE",\u1EA6:"A",\u1EB0:"A",\u0202:"A",\u00C7:"C",\u1E08:"C",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u1EBE:"E",\u1E16:"E",\u1EC0:"E",\u1E14:"E",\u1E1C:"E",\u0206:"E",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u1E2E:"I",\u020A:"I",\u00D0:"D",\u00D1:"N",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u1ED0:"O",\u1E4C:"O",\u1E52:"O",\u020E:"O",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00DD:"Y",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u1EA5:"a",\u1EAF:"a",\u1EB3:"a",\u1EB5:"a",\u1EB7:"a",\u00E6:"ae",\u1EA7:"a",\u1EB1:"a",\u0203:"a",\u00E7:"c",\u1E09:"c",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u1EBF:"e",\u1E17:"e",\u1EC1:"e",\u1E15:"e",\u1E1D:"e",\u0207:"e",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u1E2F:"i",\u020B:"i",\u00F0:"d",\u00F1:"n",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u1ED1:"o",\u1E4D:"o",\u1E53:"o",\u020F:"o",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00FD:"y",\u00FF:"y",\u0100:"A",\u0101:"a",\u0102:"A",\u0103:"a",\u0104:"A",\u0105:"a",\u0106:"C",\u0107:"c",\u0108:"C",\u0109:"c",\u010A:"C",\u010B:"c",\u010C:"C",\u010D:"c",C\u0306:"C",c\u0306:"c",\u010E:"D",\u010F:"d",\u0110:"D",\u0111:"d",\u0112:"E",\u0113:"e",\u0114:"E",\u0115:"e",\u0116:"E",\u0117:"e",\u0118:"E",\u0119:"e",\u011A:"E",\u011B:"e",\u011C:"G",\u01F4:"G",\u011D:"g",\u01F5:"g",\u011E:"G",\u011F:"g",\u0120:"G",\u0121:"g",\u0122:"G",\u0123:"g",\u0124:"H",\u0125:"h",\u0126:"H",\u0127:"h",\u1E2A:"H",\u1E2B:"h",\u0128:"I",\u0129:"i",\u012A:"I",\u012B:"i",\u012C:"I",\u012D:"i",\u012E:"I",\u012F:"i",\u0130:"I",\u0131:"i",\u0132:"IJ",\u0133:"ij",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u1E30:"K",\u1E31:"k",K\u0306:"K",k\u0306:"k",\u0139:"L",\u013A:"l",\u013B:"L",\u013C:"l",\u013D:"L",\u013E:"l",\u013F:"L",\u0140:"l",\u0141:"l",\u0142:"l",\u1E3E:"M",\u1E3F:"m",M\u0306:"M",m\u0306:"m",\u0143:"N",\u0144:"n",\u0145:"N",\u0146:"n",\u0147:"N",\u0148:"n",\u0149:"n",N\u0306:"N",n\u0306:"n",\u014C:"O",\u014D:"o",\u014E:"O",\u014F:"o",\u0150:"O",\u0151:"o",\u0152:"OE",\u0153:"oe",P\u0306:"P",p\u0306:"p",\u0154:"R",\u0155:"r",\u0156:"R",\u0157:"r",\u0158:"R",\u0159:"r",R\u0306:"R",r\u0306:"r",\u0212:"R",\u0213:"r",\u015A:"S",\u015B:"s",\u015C:"S",\u015D:"s",\u015E:"S",\u0218:"S",\u0219:"s",\u015F:"s",\u0160:"S",\u0161:"s",\u0162:"T",\u0163:"t",\u021B:"t",\u021A:"T",\u0164:"T",\u0165:"t",\u0166:"T",\u0167:"t",T\u0306:"T",t\u0306:"t",\u0168:"U",\u0169:"u",\u016A:"U",\u016B:"u",\u016C:"U",\u016D:"u",\u016E:"U",\u016F:"u",\u0170:"U",\u0171:"u",\u0172:"U",\u0173:"u",\u0216:"U",\u0217:"u",V\u0306:"V",v\u0306:"v",\u0174:"W",\u0175:"w",\u1E82:"W",\u1E83:"w",X\u0306:"X",x\u0306:"x",\u0176:"Y",\u0177:"y",\u0178:"Y",Y\u0306:"Y",y\u0306:"y",\u0179:"Z",\u017A:"z",\u017B:"Z",\u017C:"z",\u017D:"Z",\u017E:"z",\u017F:"s",\u0192:"f",\u01A0:"O",\u01A1:"o",\u01AF:"U",\u01B0:"u",\u01CD:"A",\u01CE:"a",\u01CF:"I",\u01D0:"i",\u01D1:"O",\u01D2:"o",\u01D3:"U",\u01D4:"u",\u01D5:"U",\u01D6:"u",\u01D7:"U",\u01D8:"u",\u01D9:"U",\u01DA:"u",\u01DB:"U",\u01DC:"u",\u1EE8:"U",\u1EE9:"u",\u1E78:"U",\u1E79:"u",\u01FA:"A",\u01FB:"a",\u01FC:"AE",\u01FD:"ae",\u01FE:"O",\u01FF:"o",\u00DE:"TH",\u00FE:"th",\u1E54:"P",\u1E55:"p",\u1E64:"S",\u1E65:"s",X\u0301:"X",x\u0301:"x",\u0403:"\u0413",\u0453:"\u0433",\u040C:"\u041A",\u045C:"\u043A",A\u030B:"A",a\u030B:"a",E\u030B:"E",e\u030B:"e",I\u030B:"I",i\u030B:"i",\u01F8:"N",\u01F9:"n",\u1ED2:"O",\u1ED3:"o",\u1E50:"O",\u1E51:"o",\u1EEA:"U",\u1EEB:"u",\u1E80:"W",\u1E81:"w",\u1EF2:"Y",\u1EF3:"y",\u0200:"A",\u0201:"a",\u0204:"E",\u0205:"e",\u0208:"I",\u0209:"i",\u020C:"O",\u020D:"o",\u0210:"R",\u0211:"r",\u0214:"U",\u0215:"u",B\u030C:"B",b\u030C:"b",\u010C\u0323:"C",\u010D\u0323:"c",\u00CA\u030C:"E",\u00EA\u030C:"e",F\u030C:"F",f\u030C:"f",\u01E6:"G",\u01E7:"g",\u021E:"H",\u021F:"h",J\u030C:"J",\u01F0:"j",\u01E8:"K",\u01E9:"k",M\u030C:"M",m\u030C:"m",P\u030C:"P",p\u030C:"p",Q\u030C:"Q",q\u030C:"q",\u0158\u0329:"R",\u0159\u0329:"r",\u1E66:"S",\u1E67:"s",V\u030C:"V",v\u030C:"v",W\u030C:"W",w\u030C:"w",X\u030C:"X",x\u030C:"x",Y\u030C:"Y",y\u030C:"y",A\u0327:"A",a\u0327:"a",B\u0327:"B",b\u0327:"b",\u1E10:"D",\u1E11:"d",\u0228:"E",\u0229:"e",\u0190\u0327:"E",\u025B\u0327:"e",\u1E28:"H",\u1E29:"h",I\u0327:"I",i\u0327:"i",\u0197\u0327:"I",\u0268\u0327:"i",M\u0327:"M",m\u0327:"m",O\u0327:"O",o\u0327:"o",Q\u0327:"Q",q\u0327:"q",U\u0327:"U",u\u0327:"u",X\u0327:"X",x\u0327:"x",Z\u0327:"Z",z\u0327:"z"},C=Object.keys(m).join("|"),x=new RegExp(C,"g"),T=new RegExp(C,""),_=function(E){return E.replace(x,function(U){return m[U]})},y=function(E){return!!E.match(T)};p.exports=_,p.exports.has=y,p.exports.remove=_}}]);
