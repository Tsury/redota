  position: absolute;
  z-index: 1;
`,Wn=Se.div`
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 2;
  transform: translate(-50%, -50%);

  & span {
    margin: 5px;
  }
`,Kn=Se.div`
  position: relative;
  margin: 3px 0;
  background: rgba(0, 0, 0, .4);
  border-radius: 4px;
  text-align: center;

  ${e=>"default"===e.size&&ye`
    height: 25px;

    ${qn} {
      border-radius: 4px;
      top: 1px;
      bottom: 1px;
      left: 1px;
      right: 1px;
    }
  `}

  ${e=>"mini"===e.size&&ye`
    height: 3px;
    margin: 1px auto;

    ${qn} {
      height: 100%;
    }
  `}
`,zn=t=>{let{color:n}=t;const{max:o,value:r,size:a="default",type:i}=t,s=r/o*100|0;return"health"===i?n="#4D8A2F":"mana"===i&&(n="#466DDC"),e.createElement(Kn,{size:a},"default"===a&&e.createElement(Wn,null,0|r,e.createElement("span",null,"/"),0|o),e.createElement(qn,{style:{background:n,width:s+"%"}}))};function Yn(){return(Yn=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}const Qn=Se.button`
  appearance: none;
  background: none;
  border: none;
  color: #FFFFFF;
  cursor: pointer;
  font-size: 1.25em;
`,Xn=t=>e.createElement(Qn,Yn({type:"button"},t)),$n=Se(Ct)`
  color: #C22E1F;

  &:hover {
    color: #FF1700;
  }
`,Jn=t=>{const{children:n,to:o}=t;return o.startsWith("http")?e.createElement($n,{as:"a",href:o},n):e.createElement($n,t)},Zn=Se.div`
  height: 3px;
  border-bottom: 1px solid black;
`,eo=t=>{const{color:n}=t;return e.createElement(Zn,{style:{background:n}})},to=t=>{const{path:n}=t,o="https://steamcdn-a.akamaihd.net/apps/dota2/images/"+n;return e.createElement("img",{src:o,draggable:"false",alt:""})},no=t=>{const{name:n,hero:o}=t,r=`/abilities/${o}_${n}_md.png`;return e.createElement(to,{path:r})},oo=t=>{const{name:n,variant:o}=t;let r="full.png";switch(o){case"portrait":r="vert.jpg";break;case"landscape":r="sb.png";break;case"icon":r="icon.png";break;default:r="full.png"}return e.createElement(to,{path:`heroes/${n}_${r}`})},ro=t=>{const{name:n}=t;return e.createElement(to,{path:`items/${n}_lg.png`})},ao=Se.div.withConfig({shouldForwardProp:e=>"wrap"!==e})`
  display: flex;
  flex-direction: row;

  ${e=>"center"===e.justify&&ye`
    justify-content: center;
  `}

  ${e=>e.wrap&&ye`
    flex-wrap: wrap;
  `}
`,io=ao,so=Se(ao)`
  flex-direction: column;
`,co=Se.div`
  max-width: 560px;
  margin: 100px auto;
  background: rgba(0, 0, 0, .9);
  text-align: center;

  h2 {
    margin-top: 1.5em;
  }
`,uo=Se.span`
  color: #FF1700;
`,po=Se.p`
  opacity: .3;
  font-size: .75em;
  margin-top: 1.5em;
`,lo=()=>{const t=ft(),[n,o]=(0,e.useState)(null),r=e.createElement(Jn,{to:"https://github.com/dotabuff/manta"},"Dotabuff"),a=e.createElement(Jn,{to:"https://github.com/odota/parser"},"OpenDota"),i=e.createElement(Jn,{to:"https://github.com/skadistats/clarity"},"Skadistats"),s=e.createElement(Jn,{to:"https://github.com/timkurvers/redota"},"GitHub"),c=e.createElement(Jn,{to:"http://replay308.valve.net/570/4986461644_1194860475.dem.bz2"},"Download and unzip replay of a pro-team match");return e.createElement(co,null,e.createElement("h1",null,"↻Re",e.createElement(uo,null,"Dota")),e.createElement("p",null,"This is an experiment to revisit past Dota 2 matches in the browser, fully relying on parsing replays client-side without any server involvement."),e.createElement("p",null,"Source is available on ",s,". Contributions welcome!"),e.createElement("p",null,"ReDota is a heavily derived project and stands on the shoulders of giants, notably parsers by ",r,", ",a," and ",i,"."),e.createElement("h2",null,"Select replay file"),e.createElement("p",null,e.createElement("input",{type:"file",onChange:async e=>{const n=e.target.files[0];let r=null;if(n&&(r=await Hn.validate(n),r)){const e=URL.createObjectURL(n),o=encodeURIComponent(n.name),r=encodeURIComponent(e);t.push(`/replay/${o}/${r}`)}else o(r)},accept:".dem"})),!1===n&&e.createElement(uo,{as:"p"},"The file you selected is not a valid Dota 2 replay file :("),e.createElement("p",null,"The replay file you select is never uploaded to any server. Real-time playback of replays can be taxing on your machine, but should be decently performant in latest versions of Mozilla Firefox and Google Chrome."),e.createElement("p",null,"Do not have a replay file? ",c,"."),e.createElement("h2",null,"Status"),e.createElement("p",null,"Currently, ReDota is capable of parsing replays and playing back in real time. It does not yet parse everything correctly though."),e.createElement(po,null,"Dota 2 is a registered trademark of Valve Corporation.",e.createElement("br",null),"Image resources, lore and other references are property of Valve Corporation.",e.createElement("br",null),"The Dota 2 map background originates from Gamepedia."))},fo=Se.div`
  margin: 5px;

  & img {
    width: 60px;
    border: 1px solid darkgray;
  }
`,yo=Se.span`
  margin: 4px;
  color: darkgray;

  ${e=>e.acquired&&ye`
    color: #FFCC00;
  `}

  &:after {
    content: '–';
  }
`,go=t=>{const{name:n}=t;return e.createElement(fo,null,e.createElement(so,null,e.createElement(no,{hero:"phoenix",name:n}),e.createElement(io,{justify:"center"},e.createElement(yo,{acquired:!0}),e.createElement(yo,{acquired:!0}),e.createElement(yo,null))))},ho=t=>{const{hero:n}=t;return e.createElement(io,null,e.createElement(go,{hero:n,name:"icarus_dive"}),e.createElement(go,{hero:n,name:"fire_spirits"}),e.createElement(go,{hero:n,name:"sun_ray"}),e.createElement(go,{hero:n,name:"supernova"}))},mo=Se.div`
  margin: 2px;

  & img {
    width: 50px;
  }
`,ko=t=>{const{name:n}=t;return e.createElement(mo,null,e.createElement(ro,{name:n}))},bo=Se(io)`
  width: 175px;
  margin: 4px;
`,Co=t=>{const{hero:n}=t;return e.createElement(bo,{justify:"center",wrap:!0},e.createElement(ko,{name:"tranquil_boots"}),e.createElement(ko,{name:"rod_of_atos"}),e.createElement(ko,{name:"heavens_halberd"}),e.createElement(ko,{name:"heart"}),e.createElement(ko,{name:"octarine_core"}),e.createElement(ko,{name:"shivas_guard"}),e.createElement(ko,{name:"ward_dispenser"}),e.createElement(ko,{name:"gem"}))},vo=Se.div`
  width: 30px;
  height: 30px;
  background: rgba(0, 0, 0, .75);
  border: 2px solid #FFCC00;
  border-radius: 100px;
  color: #FFCC00;
  font-weight: bold;
  text-align: center;
  line-height: 30px;
`,To=t=>{const{children:n}=t;return e.createElement(vo,null,n)},Mo=Se.div`
  color: #FFCC00;
  text-align: center;
  text-transform: uppercase;
`,_o=t=>{const{children:n}=t;return e.createElement(Mo,null,n)},Eo=Se.div`
  cursor: pointer;

  & img {
    width: 138px;
  }
`,Ao=t=>{const{hero:n,onClick:o}=t;return e.createElement(Eo,{onClick:o},e.createElement(oo,{name:n,variant:"portrait"}))},wo=Se(io)`
  height: 160px;
  padding-bottom: 65px;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 5;
  background: rgba(0, 0, 0, .5);
  border: 1px solid rgba(0, 0, 0, .5);
  border-top-left-radius: 2px;

  ${Mo} {
    position: absolute;
    top: -25px;
    left: 70px;
    transform: translateX(-50%);
  }

  ${vo} {
    position: absolute;
    left: 0;
    bottom: 75px;
    transform: translateX(-50%);
  }

  ${Eo} {
    margin-right: 15px;
  }

  ${bo} {
    margin-left: 8px;
  }
`,So=t=>{const{selectedEntity:n,setSelection:o}=t;if(!n)return null;const{id:r,name:a,hp:i,hpMax:s,mp:c,mpMax:u}=n;return e.createElement(wo,null,e.createElement(_o,null,a),e.createElement(To,null,"1"),e.createElement(Ao,{hero:a,onClick:()=>o(r)}),e.createElement(so,null,e.createElement(ho,null),e.createElement(zn,{type:"health",value:i,max:s}),e.createElement(zn,{type:"mana",value:c,max:u})),e.createElement(Co,null))},Do=Se(io)`
  display: flex;
  align-items: center;
  width: 500px;
  padding: 7px 7px;
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 6;
  background: rgba(0, 0, 0, .5);
  border-radius: 100px;
  text-align: center;

  & > * {
    margin: auto 5px;
  }

  & input {
    width: 100%;
  }
`,Io=t=>{const{tick:n,maxTick:o,requestTick:r,playing:a,setPlaying:i}=t;return e.createElement(Do,null,e.createElement(Xn,{onClick:()=>i(!a)},a?"❚❚":"►"),e.createElement("input",{type:"range",min:0,max:o,step:1,value:n,onChange:e=>r(+e.target.value)}),e.createElement("div",{style:{whiteSpace:"nowrap"}},n," / ",o))},Oo=t=>{let{time:n}=t;const o=n/60|0;n%=60;const r=0|n;return e.createElement("div",null,("00"+o).slice(-2),":",("00"+r).slice(-2))},Ro=Se.div`
  cursor: pointer;
  margin-left: 1px;

  &:last-child {
    margin-right: 1px;
  }
`,Po=t=>{const{color:n,id:o,hp:r,hpMax:a,mp:i,mpMax:s,name:c,onClick:u}=t;return e.createElement(Ro,{onClick:u,name:c},e.createElement(eo,{color:n}),e.createElement(oo,{key:o,name:c,variant:"landscape"}),e.createElement(zn,{type:"health",size:"mini",value:r,max:a}),e.createElement(zn,{type:"mana",size:"mini",value:i,max:s}))};function Go(){return(Go=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}const Lo=Se(io)`
  & img {
    display: block;
  }
`,No=t=>{const{heroes:n,setSelection:o}=t;return e.createElement(Lo,null,n.map((t=>e.createElement(Po,Go({key:t.id},t,{onClick:()=>o(t.id)})))))},Uo=Se.div`
  font-weight: bold;
  min-width: 50px;
  text-align: center;
`,Bo=t=>{const{value:n}=t;return e.createElement(Uo,null,n)},jo=Se(io)`
  align-items: center;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 5;
  background: rgba(0, 0, 0, .5);
`,Fo=t=>{const{heroes:n,setSelection:o,time:r}=t,a=n.slice(0,5),i=n.slice(5,10);return e.createElement(jo,null,e.createElement(No,{heroes:a,setSelection:o}),e.createElement(Bo,{value:"7"}),e.createElement(Oo,{time:r}),e.createElement(Bo,{value:"1"}),e.createElement(No,{heroes:i,setSelection:o}))},xo=t=>{const{heroes:n,selectedEntity:o,setSelection:r,playing:a,setPlaying:i,tick:s,maxTick:c,time:u,requestTick:d}=t;return e.createElement("div",null,o&&e.createElement(So,{selectedEntity:o,setSelection:r}),e.createElement(Io,{playing:a,setPlaying:i,tick:s,maxTick:c,requestTick:d}),e.createElement(Fo,{heroes:n,setSelection:r,time:u}))},Vo=Se.div`
  ${e=>"hero"===e.type&&ye`
    width: 30px;
    height: 30px;
  `}
  padding: 10px;
  border-radius: 50%;
  ${e=>e.selected&&ye`
    border: 3px solid white;
  `}
  position: absolute;
  transform: translate(-50%, 50%);
  background: ${e=>e.color}AA;
  cursor: pointer;

  & img {
    display: block;
  }
`,Ho=t=>{const{color:n,onClick:o,selected:r,name:a,x:i,y:s,type:c}=t;return e.createElement(Vo,{color:n,onClick:o,selected:r,style:{left:i+"px",bottom:s+"px"}},"hero"===c&&e.createElement(oo,{name:a,variant:"icon"}))},qo=Se.div`
  position: absolute;
  // Adding an additional 8% to place the camera a bit higher up for comfort
  bottom: 58%;
  left: 50%;
`,Wo=Se.div`
  position: relative;

  & > img {
    position: relative;
    width: 4000px;
    height: 4000px;
    // Minor offsets here to get the map to align with actual entities
    transform: translate(-50.2%, 50.5%)
  }
`,Ko=Se.div`
  width: 300px;
  position: absolute;
  bottom: 0;
  left: 0;
  transform: translate(-50%, 50%);
  text-align: center;

  & p {
    margin: 10px 10px;
  }
`,zo=t=>{const{children:n,style:o}=t;return e.createElement(qo,{style:o},e.createElement(Wo,null,e.createElement(Ko,null,e.createElement("p",null,"Loading the Dota 2 map background..."),e.createElement("p",null,"If it never loads, your browser may not support the WebP image format."),e.createElement("p",null,"¯\\_(ツ)_/¯")),e.createElement("img",{src:"./images/map-7.27.webp",alt:"Dota 2 map"}),n))};function Yo(){return(Yo=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}const Qo=e=>4e3/16384*e,Xo=Se.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  overflow: hidden;
  background-image:
    linear-gradient(45deg, #222 25%, transparent 25%),
    linear-gradient(-45deg, #222 25%, transparent 25%),
    linear-gradient(45deg, transparent 75%, #222 75%),
    linear-gradient(-45deg, transparent 75%, #222 75%);
  background-size: 20px 20px;
  background-position: 0 0, 0 10px, 10px -10px, -10px 0px;
  cursor: ${e=>e.dragging?"grabbing":"grab"};
`,$o=t=>{const{entities:n,focus:o,selectedEntity:r,setSelection:a}=t,[i,s]=(0,e.useState)(0),[c,u]=(0,e.useState)(0),[d,p]=(0,e.useState)(!1);return(0,e.useEffect)((()=>{o&&(s(-Qo(o.x)),u(Qo(o.y)))}),[o]),e.createElement(Xo,{dragging:d,onDoubleClick:e=>e.preventDefault(),onMouseDown:e=>{e.preventDefault(),p(!0)},onMouseUp:e=>{e.preventDefault(),p(!1)},onMouseMove:e=>{var t,n;d&&(t=e.movementX,n=e.movementY,t&&s((e=>e+t)),n&&u((e=>e+n)))}},e.createElement(zo,{style:{transform:`translate(${i}px, ${c}px)`}},n.map((t=>e.createElement(Ho,Yo({key:t.id},t,{x:Qo(t.x),y:Qo(t.y),selected:r===t,onClick:()=>a(t.id)}))))))},Jo={2:"#4D8A2F",3:"#FF1700",4:"#000000"},Zo=["#3375FF","#66FFBF","#BF00BF","#F3F00B","#FF6B00","#FE86C2","#A1B447","#65D9F7","#008321","#A46900"],er=Se(Jn)`
  position: absolute;
  top: 12px;
  left: 15px;
  z-index: 5;
`,tr=Se.div`
  width: 100%;
  height: 100%;
  text-shadow: 1px 1px 1px black, -1px -1px 1px black;
`,nr=()=>{const t=ft(),{safeReplayURL:n}=(o=lt(at).match)?o.params:{};var o;const r=decodeURIComponent(n),[a,i]=(0,e.useState)(null),[s,c]=(0,e.useState)(0),[u,d]=(0,e.useState)(0),[p,l]=(0,e.useState)(!1),[f,y]=(0,e.useState)(0),[g,h]=(0,e.useState)([]),[m,k]=(0,e.useState)(null),[b,C]=(0,e.useState)(null),v=g.find((e=>e.id===m)),T=g.filter((e=>"hero"===e.type)),M=(0,e.useCallback)((e=>{a.seek(e,{silent:!0})}),[a]),_=(0,e.useCallback)((e=>{e===m&&C(v),k(e)}),[C,k,v,m]),E=(0,e.useCallback)((e=>{c(e);const t=a.entities.find((e=>"CDOTAGamerulesProxy"===e.class.name));t&&y(t.get("m_pGameRules.m_fGameTime"));const n=[];let o=0;for(const e of a.entities){const t={id:e.index},r=e.class.name;if(r.startsWith("CDOTA_Unit_Hero_"))t.type="hero",t.name=e.class.name.match(/CDOTA_Unit_Hero_(.+)/)[1].toLowerCase(),t.color=Zo[++o];else if("CDOTA_Unit_Courier"===r)t.type="courier";else if("CDOTA_Unit_Roshan"===r)t.type="roshan";else if("CDOTA_BaseNPC_Creep_Lane"===r||"CDOTA_BaseNPC_Creep_Siege"===r)t.type="creep";else if("CDOTA_BaseNPC_Creep_Neutral"===r)t.type="neutral-creep";else if("CDOTA_NPC_Observer_Ward"===r||"CDOTA_NPC_Sentry_Ward"===r)t.type="ward";else{if("CDOTA_BaseNPC_Tower"!==r&&"CDOTA_BaseNPC_Barracks"!==r&&"CDOTA_BaseNPC_Fort"!==r)continue;t.type="building"}t.x=128*e.get("CBodyComponent.m_cellX")+e.get("CBodyComponent.m_vecX")-16384,t.y=128*e.get("CBodyComponent.m_cellY")+e.get("CBodyComponent.m_vecY")-16384,t.hp=e.get("m_iHealth"),t.hpMax=e.get("m_iMaxHealth"),t.mp=e.get("m_flMana"),t.mpMax=e.get("m_flMaxMana"),t.team=e.get("m_iTeamNum"),t.name=t.name||t.type,t.color=t.color||Jo[t.team],n.push(t)}h(n)}),[a]);return(0,e.useEffect)((()=>{(async()=>{let e=null;try{const t=await fetch(r);e=await t.arrayBuffer()}catch(e){return void t.push("/")}i(new Hn(e))})()}),[t,r]),(0,e.useEffect)((()=>{a&&(d(a.lastTick),a.start(),a.on("tick",E))}),[E,a]),((t,n)=>{const o=(0,e.useRef)();(0,e.useEffect)((()=>{o.current=t}),[t]),(0,e.useEffect)((()=>{if(null!==n){const e=setInterval((()=>{o.current()}),n);return()=>clearInterval(e)}}),[n])})((()=>{a&&a.step()}),p?62.5:null),e.createElement(tr,null,e.createElement(er,{to:"/"},"Back to ReDota"),e.createElement(xo,{heroes:T,selectedEntity:v,setSelection:_,playing:p,setPlaying:l,tick:s,time:f,maxTick:u,requestTick:M}),e.createElement($o,{entities:g,focus:b,selectedEntity:v,setSelection:_}))},or=Se.div`
  box-sizing: content-box;
  font-family: 'Galdeano', sans-serif;
  letter-spacing: 1px;
`,rr=()=>e.createElement(or,null,e.createElement(yt,null,e.createElement(pt,null,e.createElement(dt,{path:"/replay/:safeFilename/:safeReplayURL"},e.createElement(nr,null)),e.createElement(dt,{path:"/"},e.createElement(lo,null))))),ar=document.querySelector("#container");t.render(e.createElement(rr,null),ar)})()})();