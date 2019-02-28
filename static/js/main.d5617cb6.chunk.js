(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var o=a(0),n=a.n(o),s=a(8),r=a.n(s),i=(a(15),a(1)),c=a(2),l=a(4),p=a(3),u=a(5),d=(a(7),{GAME_WIDTH:10,GAME_HEIGHT:16,states:{PAUSED:!1,GAME_RESULT:"GAME_RESULT"}}),h=(d.actions,{validateMove:function(e){return!d.states.PAUSED},moveDown:function(e){return this.validateMove(e)&&(console.log("Down"),e.piece.pos_y=e.piece.pos_y+1),e.piece},moveLeft:function(e){return this.validateMove(e)&&(console.log("Left"),e.piece.pos_x=e.piece.pos_x-1),e.piece},moveRight:function(e){return this.validateMove(e)&&(console.log("Right"),e.piece.pos_x=e.piece.pos_x+1),e.piece},hardDrop:function(e){this.validateMove(e)&&console.log("Drop")},rotate:function(e){return this.validateMove(e)&&(console.log("rotate"),e.piece.shapes[e.piece.rotation+1]?e.piece.rotation=e.piece.rotation+1:e.piece.rotation=0),e.piece},pause:function(){d.states.PAUSED=!d.states.PAUSED,d.states.PAUSED?console.log("Pause"):console.log("Resume")}}),f={getNewBoard:function(){return Array(d.GAME_HEIGHT).fill(null).map(function(e){return Array(d.GAME_WIDTH).fill(0)})},drawBoard:function(e){for(var t=this.getNewBoard(),a=e.landed,o=e.piece,n=0;n<a.length;n++)for(var s=0;s<a[n].length;s++)0!==a[n][s]&&(t[n][s]=1);for(var r=0;r<o.shapes[o.rotation].length;r++)for(var i=0;i<o.shapes[o.rotation][r].length;i++)0!==o.shapes[o.rotation][r][i]&&(t[r+o.pos_y][i+o.pos_x]=1);return t}},v={shapes:[[[1,1],[1,1]]],pos_y:0,pos_x:4,rotation:0},w={shapes:[[[1,1],[1,0],[1,0]],[[0,0,0],[1,1,1],[0,0,1]],[[0,1],[0,1],[1,1]],[[0,0,0],[1,0,0],[1,1,1]]],pos_y:0,pos_x:4,rotation:0},m={shapes:[[[1,1],[0,1],[0,1]],[[0,0,0],[0,0,1],[1,1,1]],[[1,0],[1,0],[1,1]],[[0,0,0],[1,1,1],[1,0,0]]],pos_y:0,pos_x:4,rotation:0},E={shapes:[[[0,1,0],[1,1,1]],[[0,1,0],[0,1,1],[0,1,0]],[[1,1,1],[0,1,0]],[[0,1,0],[1,1,0],[0,1,0]]],pos_y:0,pos_x:4,rotation:0},b={shapes:[[[0,1,0],[0,1,0],[0,1,0],[0,1,0]],[[1,1,1,1]]],pos_y:0,pos_x:4,rotation:0},_={shapes:[[[0,1,0],[0,1,1],[0,0,1]],[[0,0,0],[0,1,1],[1,1,0]]],pos_y:0,pos_x:4,rotation:0},y={shapes:[[[0,1,0],[1,1,0],[1,0,0]],[[0,0,0],[1,1,0],[0,1,1]]],pos_y:0,pos_x:4,rotation:0},g={getPiece:function(e,t){var a;switch(e){case"O":a=v;break;case"J":a=w;break;case"L":a=m;break;case"I":a=b;break;case"T":a=E;break;case"Z":a=_;break;case"S":a=y}return a.shapes.length<=t&&(a.rotation=t),a},getPieces:function(){return[]}},k=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"paused",value:function(){if(d.states.PAUSED)return n.a.createElement("div",{class:"paused"},"Paused")}},{key:"render",value:function(){return n.a.createElement("div",{class:"info"},this.paused())}}]),t}(o.Component),A=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(p.a)(t).call(this,e))).state={score:0,linesCleared:0,board:f.getNewBoard(),landed:[[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,1,0,0],[0,0,1,0,0,0,0,1,0,0],[1,1,1,0,0,0,0,1,0,0]],piece:g.getPiece("Z",0)},a.drawBoard(),a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.attachEventListeners()}},{key:"drawBoard",value:function(){this.setState({board:f.drawBoard(this.state)})}},{key:"setPieceState",value:function(e){this.setState({piece:e})}},{key:"drawCol",value:function(e){return 0===e?n.a.createElement("td",{class:"empty"}):n.a.createElement("td",{class:"filled"})}},{key:"render",value:function(){var e=this;return n.a.createElement("div",{class:"reactrisContainer"},n.a.createElement("table",null,n.a.createElement("tbody",null,this.state.board.map(function(t){return n.a.createElement("tr",{key:t.id},t.map(function(t){return e.drawCol(t)}))}))),n.a.createElement("div",{class:"infoTab"},n.a.createElement(k,null)))}},{key:"attachEventListeners",value:function(){var e=this;document.addEventListener("keydown",function(t){if(e.state.piece){switch(t.code){case"ArrowUp":e.setPieceState(h.rotate(e.state));break;case"ArrowDown":e.setPieceState(h.moveDown(e.state));break;case"ArrowLeft":e.setPieceState(h.moveLeft(e.state));break;case"ArrowRight":e.setPieceState(h.moveRight(e.state));break;case"Space":e.setPieceState(h.hardDrop(e.state));break;case"Escape":h.pause()}e.drawBoard()}})}}]),t}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(n.a.createElement(A,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},7:function(e,t,a){},9:function(e,t,a){e.exports=a(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.d5617cb6.chunk.js.map