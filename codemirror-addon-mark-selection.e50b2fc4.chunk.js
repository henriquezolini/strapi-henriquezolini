(self.webpackChunkstrapi_henriquezolini=self.webpackChunkstrapi_henriquezolini||[]).push([[5509],{64020:(C,x,y)=>{(function(l){l(y(4631))})(function(l){"use strict";l.defineOption("styleSelectedText",!1,function(e,t,r){var n=r&&r!=l.Init;t&&!n?(e.state.markedSelection=[],e.state.markedSelectionStyle=typeof t=="string"?t:"CodeMirror-selectedtext",h(e),e.on("cursorActivity",v),e.on("change",S)):!t&&n&&(e.off("cursorActivity",v),e.off("change",S),u(e),e.state.markedSelection=e.state.markedSelectionStyle=null)});function v(e){e.state.markedSelection&&e.operation(function(){_(e)})}function S(e){e.state.markedSelection&&e.state.markedSelection.length&&e.operation(function(){u(e)})}var f=8,k=l.Pos,o=l.cmpPos;function s(e,t,r,n){if(o(t,r)!=0)for(var i=e.state.markedSelection,a=e.state.markedSelectionStyle,c=t.line;;){var w=c==t.line?t:k(c,0),p=c+f,d=p>=r.line,b=d?r:k(p,0),g=e.markText(w,b,{className:a});if(n==null?i.push(g):i.splice(n++,0,g),d)break;c=p}}function u(e){for(var t=e.state.markedSelection,r=0;r<t.length;++r)t[r].clear();t.length=0}function h(e){u(e);for(var t=e.listSelections(),r=0;r<t.length;r++)s(e,t[r].from(),t[r].to())}function _(e){if(!e.somethingSelected())return u(e);if(e.listSelections().length>1)return h(e);var t=e.getCursor("start"),r=e.getCursor("end"),n=e.state.markedSelection;if(!n.length)return s(e,t,r);var i=n[0].find(),a=n[n.length-1].find();if(!i||!a||r.line-t.line<=f||o(t,a.to)>=0||o(r,i.from)<=0)return h(e);for(;o(t,i.from)>0;)n.shift().clear(),i=n[0].find();for(o(t,i.from)<0&&(i.to.line-t.line<f?(n.shift().clear(),s(e,t,i.to,0)):s(e,t,i.from,0));o(r,a.to)<0;)n.pop().clear(),a=n[n.length-1].find();o(r,a.to)>0&&(r.line-a.from.line<f?(n.pop().clear(),s(e,a.from,r)):s(e,a.to,r))}})}}]);