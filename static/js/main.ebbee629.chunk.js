(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1:function(e){e.exports=[{id:1,image:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",count:0},{id:2,image:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png",count:0},{id:3,image:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png",count:0},{id:4,image:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/010.png",count:0},{id:5,image:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/013.png",count:0},{id:6,image:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png",count:0},{id:7,image:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/019.png",count:0},{id:8,image:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/021.png",count:0},{id:9,image:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/023.png",count:0},{id:10,image:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png",count:0},{id:11,image:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/027.png",count:0},{id:12,image:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/029.png",count:0}]},15:function(e,t,s){},16:function(e,t,s){},17:function(e,t,s){"use strict";s.r(t);var n=s(0),a=s.n(n),o=s(3),c=s.n(o),i=(s(15),s(4)),m=s(5),r=s(7),l=s(6),g=s(8),u={height:"275px",width:"275px",float:"left"},d={height:"100%",overflow:"hidden",textAlign:"center",backgroundImage:"url('https://vignette.wikia.nocookie.net/youtubepoop/images/4/4c/Pokeball.png/revision/latest?cb=20150418234807')",backgroundSize:"100%"},p={display:"block",margin:"auto",paddingTop:"30px",width:"75%"},h=function(e){return a.a.createElement("div",{style:u,onClick:function(){return e.cardClicked(e.id)}},a.a.createElement("div",{style:d},a.a.createElement("img",{style:p,alt:e.name,src:e.image})))},k={width:"100%",fontSize:"3rem",backgroundColor:"#CC0000",marginBottom:"10px",display:"inlineBlock"},f={textAlign:"center",width:"33.3%"},x={color:"#CCCCCC",textAlign:"center"},C=function(e){return a.a.createElement("div",null,a.a.createElement("table",{style:k},a.a.createElement("tbody",null,a.a.createElement("tr",null,a.a.createElement("td",{style:f},e.children),a.a.createElement("td",{style:f},e.message),a.a.createElement("td",{style:f},"Score: ",e.score," Highscore: ",e.highscore)))),a.a.createElement("h4",{style:x},"Clicky Game! Click on an image to earn points, but don't click the same image twice!"))},y=s(1),E=(s(16),function(e){function t(){var e,s;Object(i.a)(this,t);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(s=Object(r.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(a)))).state={cards:y,score:0,highscore:0,message:"Click an Image to Begin"},s.newGame=function(){s.setState({score:0}),s.state.cards.forEach(function(e){e.count=0})},s.cardClicked=function(e){s.state.cards.find(function(t,n){return t.id===e?0===y[n].count?(y[n].count=y[n].count+1,s.setState({score:s.state.score+1,message:"Correct!"},function(){this.state.score>this.state.highscore&&(this.setState({highscore:this.state.score}),12===this.state.score&&this.setState({message:"You Win!"}))}),s.state.cards.sort(function(){return Math.random()-.5}),!0):(s.setState({message:"You Lose!"}),s.newGame(),!1):null})},s}return Object(g.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return a.a.createElement(a.a.Fragment,null,a.a.createElement(C,{score:this.state.score,highscore:this.state.highscore,message:this.state.message},"Clicky Game"),a.a.createElement("div",{className:"container"},this.state.cards.map(function(t){return a.a.createElement(h,{cardClicked:e.cardClicked,id:t.id,key:t.id,image:t.image})})))}}]),t}(n.Component));c.a.render(a.a.createElement(E,null),document.getElementById("root"))},9:function(e,t,s){e.exports=s(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.ebbee629.chunk.js.map