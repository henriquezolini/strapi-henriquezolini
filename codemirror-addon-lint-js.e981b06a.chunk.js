(self.webpackChunkstrapi_henriquezolini=self.webpackChunkstrapi_henriquezolini||[]).push([[953],{96477:(d,w,o)=>{(function(a){a(o(4631))})(function(a){"use strict";function u(s,i){if(!window.JSHINT)return window.console&&window.console.error("Error: window.JSHINT not defined, CodeMirror JavaScript linting cannot run."),[];i.indent||(i.indent=1),JSHINT(s,i,i.globals);var e=JSHINT.data().errors,n=[];return e&&r(e,n),n}a.registerHelper("lint","javascript",u);function r(s,i){for(var e=0;e<s.length;e++){var n=s[e];if(n){if(n.line<=0){window.console&&window.console.warn("Cannot display JSHint error (invalid line "+n.line+")",n);continue}var t=n.character-1,l=t+1;if(n.evidence){var c=n.evidence.substring(t).search(/.\b/);c>-1&&(l+=c)}var f={message:n.reason,severity:n.code&&n.code.startsWith("W")?"warning":"error",from:a.Pos(n.line-1,t),to:a.Pos(n.line-1,l)};i.push(f)}}}})}}]);
