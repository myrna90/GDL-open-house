(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{27:function(e,t,n){e.exports=n(54)},32:function(e,t,n){},33:function(e,t,n){},54:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(14),i=n.n(r),c=(n(32),n(6)),l=n(7),s=n(9),u=n(8),p=n(10),m=(n(33),n(15)),d=n(11),h=n(16),f=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={count:!0},n.handleStartStop=n.handleStartStop.bind(Object(h.a)(n)),setTimeout(n.handleStartStop,2e3),n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"handleStartStop",value:function(){this.setState({count:!1})}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("div",null,o.a.createElement("h1",{id:"timer-label"},"FOODMAP"),o.a.createElement("p",{id:"time-left"},this.state.count?o.a.createElement("img",{src:"https://vignette.wikia.nocookie.net/plantsvszombies/images/5/56/Pizza_loading.gif/revision/latest?cb=20170408195505"}):o.a.createElement(d.a,{to:"/Home"}))))}}]),t}(o.a.Component),b=n(26),v=n(17);function g(){var e=Object(b.a)(["<h1>","</h1>\n            "]);return g=function(){return e},e}var O=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).fetchPlaces=function(t,n){var a=t.google,o=new a.maps.places.PlacesService(n),r={location:e.state.mainPlace,radius:1e3,type:["restaurant"]};o.nearbySearch(r,function(e,t){if(console.log(e),t===a.maps.places.PlacesServiceStatus.OK)for(var r=function(){var t=e[i],r=new a.maps.Marker({position:t.geometry.location,map:n,title:t.name});o.getDetails({placeId:t.place_id,fields:["address_component","adr_address","formatted_address","geometry","icon","name","permanently_closed","photo","place_id","plus_code","type","url","utc_offset","vicinity","formatted_phone_number","international_phone_number","opening_hours","website","price_level","rating","review","user_ratings_total"]},function(e){console.log(e)});var c=new a.maps.InfoWindow({content:String.raw(g(),t.name)});r.addListener("click",function(){c.open(n,r)})},i=0;i<e.length;i++)r()})},e.state={mainPlace:{lat:20.650483,lng:-103.4054717}},e}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement(v.Map,{style:{width:"100vw",height:"50vh"},google:this.props.google,zoom:16,onReady:this.fetchPlaces,initialCenter:this.state.mainPlace})}}]),t}(o.a.Component),j=Object(v.GoogleApiWrapper)({apiKey:"AIzaSyC0VLXysIX4t0QzQlWFO0VIUyFfRZLV8nA"})(O),w=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(j,null))}}]),t}(o.a.Component),y=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"app"},o.a.createElement(m.a,null,o.a.createElement(d.b,{path:"/",component:f,exact:!0}),o.a.createElement(d.b,{path:"/Home",component:w})))}}]),t}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[27,1,2]]]);
//# sourceMappingURL=main.a165ed4a.chunk.js.map