  position: absolute;
  z-index: 1;
`,Kn=Se.div`
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 2;
  transform: translate(-50%, -50%);

  & span {
    margin: 5px;
  }
`,Yn=Se.div`
  position: relative;
  margin: 3px 0;
  background: rgba(0, 0, 0, .4);
  border-radius: 4px;
  text-align: center;

  ${e=>"default"===e.size&&ye`
    height: 25px;

    ${zn} {
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

    ${zn} {
      height: 100%;
    }
  `}
`,Qn=t=>{let{color:n}=t;const{max:o,value:a,size:r="default",team:i,type:s}=t,c=a/o*100|0;return"health"===s?n=qn[i]:"mana"===s&&(n="#466DDC"),e.createElement(Yn,{size:r},"default"===r&&o>0&&e.createElement(Kn,null,0|a,e.createElement("span",null,"/"),0|o),e.createElement(zn,{style:{background:n,width:c+"%"}}))};function Xn(){return(Xn=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}const $n=Se.button`
  appearance: none;
  background: none;
  border: none;
  color: #FFFFFF;
  cursor: pointer;
  font-size: 1.25em;
`,Jn=t=>e.createElement($n,Xn({type:"button"},t)),Zn=Se.div`
  ${e=>e.dead&&ye`
    opacity: 0.8;
    filter: grayscale(100%);
  `}
  position: relative;
  width: ${e=>2*e.radius}px;
  height: ${e=>2*e.radius}px;
  background: rgba(0, 0, 0, .75);
  border-radius: 50%;
  color: #FFCC00;
  font-weight: bold;
  text-align: center;
  line-height: 30px;

  & svg {
    transform: rotate(-90deg);
  }

  & span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    letter-spacing: 0px;

    ${e=>"small"===e.size&&ye`
      font-size: 0.7em;
    `}
  }
`,oo=t=>{const{children:n,size:o="default",xp:a}=t;let r=20,i=3;"small"===o&&(r=10,i=2);const s=to[n-1],c=(a-s)/(to[n]-s),u=r-i,d=2*u*Math.PI,p=d-c*d;return e.createElement(no,{radius:r,size:o},e.createElement("svg",{height:2*r,width:2*r},e.createElement("circle",{stroke:"#FFCC00",fill:"transparent",strokeWidth:i,strokeDasharray:`${d} ${d}`,style:{strokeDashoffset:p},r:u,cx:r,cy:r})),e.createElement("span",null,n))},ao=Se(_t)`
  color: #C22E1F;

  &:hover {
    color: #FF1700;
  }
`,ro=t=>{const{children:n,to:o}=t;return o.startsWith("http")?e.createElement(ao,{as:"a",href:o},n):e.createElement(ao,t)},io=Se.div`
  height: 3px;
  border-bottom: 1px solid black;
`,so=t=>{const{color:n}=t;return e.createElement(io,{style:{background:n}})},co=t=>{const{path:n}=t,o="https://steamcdn-a.akamaihd.net/apps/dota2/images/"+n;return e.createElement("img",{src:o,draggable:"false",alt:""})},uo=t=>{const{refname:n,hero:o}=t,a=`/abilities/${o}_${n}_md.png`;return e.createElement(co,{path:a})},po=t=>{const{refname:n,variant:o}=t;let a="full.png";switch(o){case"portrait":a="vert.jpg";break;case"landscape":a="sb.png";break;case"icon":a="icon.png";break;default:a="full.png"}return e.createElement(co,{path:`heroes/${n}_${a}`})},lo=t=>{const{refname:n}=t;return e.createElement(co,{path:`items/${n}_lg.png`})},fo=Se.div.withConfig({shouldForwardProp:e=>"wrap"!==e})`
  display: flex;
  flex-direction: row;

  ${e=>"center"===e.justify&&ye`
    justify-content: center;
  `}

  ${e=>e.wrap&&ye`
    flex-wrap: wrap;
  `}
`,yo=fo,go=Se(fo)`
  flex-direction: column;
`,ho=t=>{let{time:n}=t;const o=n<0?"-":"";n=Math.abs(n);const a=n/3600|0;n%=3600;const r=n/60|0;n%=60;const i=0|n;return e.createElement(e.Fragment,null,o,a>0&&e.createElement(e.Fragment,null,a,":"),("00"+r).slice(-2),":",("00"+i).slice(-2),o?" ":"")},mo=Se.div`
  max-width: 560px;
  margin: 100px auto;
  background: rgba(0, 0, 0, .9);
  text-align: center;

  h2 {
    margin-top: 1.5em;
  }
`,ko=Se.span`
  color: #FF1700;
`,bo=Se.p`
  opacity: .3;
  font-size: .75em;
  margin-top: 1.5em;
`,_o=()=>{const t=ft(),[n,o]=(0,e.useState)(null),a=e.createElement(ro,{to:"https://github.com/dotabuff/manta"},"Dotabuff"),r=e.createElement(ro,{to:"https://github.com/odota/parser"},"OpenDota"),i=e.createElement(ro,{to:"https://github.com/skadistats/clarity"},"Skadistats"),s=e.createElement(ro,{to:"https://github.com/timkurvers/redota"},"GitHub"),c=e.createElement(ro,{to:"http://replay308.valve.net/570/4986461644_1194860475.dem.bz2"},"Download and unzip replay of a pro-team match");return e.createElement(mo,null,e.createElement("h1",null,"↻Re",e.createElement(ko,null,"Dota")),e.createElement("p",null,"This is an experiment to revisit past Dota 2 matches in the browser, fully relying on parsing replays client-side without any server involvement."),e.createElement("p",null,"Source is available on ",s,". Contributions welcome!"),e.createElement("p",null,"ReDota is a heavily derived project and stands on the shoulders of giants, notably parsers by ",a,", ",r," and ",i,"."),e.createElement("h2",null,"Select replay file"),e.createElement("p",null,e.createElement("input",{type:"file",onChange:async e=>{const n=e.target.files[0];let a=null;if(n&&(a=await Hn.validate(n),a)){const e=URL.createObjectURL(n),o=encodeURIComponent(n.name),a=encodeURIComponent(e);t.push(`/replay/${o}/${a}`)}else o(a)},accept:".dem"})),!1===n&&e.createElement(ko,{as:"p"},"The file you selected is not a valid Dota 2 replay file :("),e.createElement("p",null,"The replay file you select is never uploaded to any server. Real-time playback of replays can be taxing on your machine, but should be decently performant in latest versions of Mozilla Firefox and Google Chrome."),e.createElement("p",null,"Need a replay file? ",c,"."),e.createElement("h2",null,"Status"),e.createElement("p",null,"Currently, ReDota is capable of parsing replays and playing back in real time. It does not yet parse everything correctly though."),e.createElement(bo,null,"Dota 2 is a registered trademark of Valve Corporation.",e.createElement("br",null),"Image resources, lore and other references are property of Valve Corporation.",e.createElement("br",null),"The Dota 2 map background originates from Gamepedia."))},Co=Se.div`
  margin: 5px;

  & img {
    width: 60px;
    border: 1px solid darkgray;
  }
`,vo=Se.span`
  margin: 4px;
  color: darkgray;

  ${e=>e.acquired&&ye`
    color: #FFCC00;
  `}

  &:after {
    content: '–';
  }
`,To=t=>{const{refname:n}=t;return e.createElement(Co,null,e.createElement(go,null,e.createElement(uo,{hero:"phoenix",refname:n}),e.createElement(yo,{justify:"center"},e.createElement(vo,{acquired:!0}),e.createElement(vo,{acquired:!0}),e.createElement(vo,null))))},Mo=t=>{const{hero:n}=t;return e.createElement(yo,null,e.createElement(To,{hero:n,refname:"icarus_dive"}),e.createElement(To,{hero:n,refname:"fire_spirits"}),e.createElement(To,{hero:n,refname:"sun_ray"}),e.createElement(To,{hero:n,refname:"supernova"}))},Eo=Se.div`
  margin: 2px;

  & img {
    width: 50px;
  }
`,wo=t=>{const{refname:n}=t;return e.createElement(Eo,null,e.createElement(lo,{refname:n}))},Ao=Se(yo)`
  width: 175px;
  margin: 4px;
`,So=t=>{const{hero:n}=t;return e.createElement(Ao,{justify:"center",wrap:!0},e.createElement(wo,{refname:"tranquil_boots"}),e.createElement(wo,{refname:"rod_of_atos"}),e.createElement(wo,{refname:"heavens_halberd"}),e.createElement(wo,{refname:"heart"}),e.createElement(wo,{refname:"octarine_core"}),e.createElement(wo,{refname:"shivas_guard"}),e.createElement(wo,{refname:"ward_dispenser"}),e.createElement(wo,{refname:"gem"}))},Do=Se.div`
  color: #FFCC00;
  text-align: center;
  text-transform: uppercase;
`,Io=t=>{const{children:n}=t;return e.createElement(Do,null,n)},Oo=Se(Zn)`
  width: 138px;
  cursor: pointer;

  & img {
    width: 138px;
  }
`,Ro=t=>{const{dead:n,hero:o,onClick:a}=t;return e.createElement(Oo,{dead:n,onClick:a},o&&e.createElement(po,{refname:o,variant:"portrait"}))},Po=Se(yo)`
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

  ${Do} {
    position: absolute;
    top: -25px;
    left: 70px;
    transform: translateX(-50%);
  }

  ${no} {
    position: absolute;
    left: 0;
    bottom: 75px;
    z-index: 1;
    transform: translateX(-50%);
  }

  ${Oo} {
    margin-right: 15px;
  }

  ${Ao} {
    margin-left: 8px;
  }
`,Go=t=>{const{selectedEntity:n,setSelection:o}=t;if(!n)return null;const{id:a,dead:r,name:i,refname:s,hp:c,hpMax:u,mp:d,mpMax:p,level:l,team:f,xp:y}=n;return e.createElement(Po,null,e.createElement(Io,null,i),l&&e.createElement(oo,{xp:y},l),e.createElement(Ro,{dead:r,hero:s,onClick:()=>o(a)}),e.createElement(go,null,e.createElement(Mo,null),e.createElement(Qn,{type:"health",value:c,max:u,team:f}),e.createElement(Qn,{type:"mana",value:d,max:p})),e.createElement(So,null))},Lo=Se(yo)`
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

  ${$n} {
    width: 50px;
  }
`,No=t=>{const{tick:n,maxTick:o,requestTick:a,playing:r,setPlaying:i}=t;return e.createElement(Lo,null,e.createElement(Jn,{onClick:()=>i(!r)},r?"❚❚":"►"),e.createElement("input",{type:"range",min:0,max:o,step:1,value:n,onChange:e=>a(+e.target.value)}),e.createElement("div",{style:{whiteSpace:"nowrap"}},e.createElement(ho,{time:n/30})," / ",e.createElement(ho,{time:o/30})))},Uo=Se(ho)`
  min-width: 70px;
  text-align: center;
`,Bo=t=>e.createElement(Uo,t),jo=Se.div`
  cursor: pointer;
  margin-left: 1px;

  &:last-child {
    margin-right: 1px;
  }
`,Fo=t=>{const{color:n,dead:o,id:a,hp:r,hpMax:i,mp:s,mpMax:c,refname:u,onClick:d,team:p}=t;return e.createElement(jo,{onClick:d},e.createElement(so,{color:n}),e.createElement(Zn,{dead:o},e.createElement(po,{key:a,refname:u,variant:"landscape"}),e.createElement(Qn,{type:"health",size:"mini",value:r,max:i,team:p}),e.createElement(Qn,{type:"mana",size:"mini",value:s,max:c})))};function xo(){return(xo=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}const Vo=Se(yo)`
  & img {
    display: block;
  }
`,Ho=t=>{const{heroes:n,setSelection:o}=t;return e.createElement(Vo,null,n.map((t=>e.createElement(Fo,xo({key:t.id},t,{onClick:()=>o(t.id)})))))},qo=Se.div`
  font-weight: bold;
  min-width: 50px;
  text-align: center;
`,Wo=t=>{const{value:n}=t;return e.createElement(qo,null,n)},zo=Se(yo)`
  align-items: center;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 5;
  background: rgba(0, 0, 0, .5);
`,Ko=t=>{const{heroes:n,setSelection:o,time:a}=t;if(!n.length)return null;const r=n.filter((e=>2===e.team)),i=n.filter((e=>3===e.team));return e.createElement(zo,null,e.createElement(Ho,{heroes:r,setSelection:o}),e.createElement(Wo,{value:"?"}),e.createElement(Bo,{time:a}),e.createElement(Wo,{value:"?"}),e.createElement(Ho,{heroes:i,setSelection:o}))},Yo=t=>{const{heroes:n,selectedEntity:o,setSelection:a,playing:r,setPlaying:i,tick:s,maxTick:c,time:u,requestTick:d}=t;return e.createElement("div",null,o&&e.createElement(Go,{selectedEntity:o,setSelection:a}),e.createElement(No,{playing:r,setPlaying:i,tick:s,maxTick:c,requestTick:d}),e.createElement(Ko,{heroes:n,setSelection:a,time:u}))},Qo=Se(Zn)`
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

  ${no} {
    position: absolute;
    bottom: 0;
    left: 0;
    transform: translate(-20%, 20%);
  }
`,Xo=t=>{const{id:n,refname:o,level:a,xp:r,dead:i,color:s,onClick:c,selected:u,x:d,y:p,type:l}=t;return e.createElement(Qo,{color:s,dead:i,onClick:()=>c(n),selected:u,style:{left:d+"px",bottom:p+"px"}},"hero"===l&&e.createElement(e.Fragment,null,e.createElement(po,{refname:o,variant:"icon"}),e.createElement(oo,{xp:r,size:"small"},a)))},$o=e.memo(Xo),Jo=Se.div`
  position: absolute;
  // Adding an additional 8% to place the camera a bit higher up for comfort
  bottom: 58%;
  left: 50%;
`,Zo=Se.div`
  position: relative;

  & > img {
    position: relative;
    width: 4000px;
    height: 4000px;
    // Minor offsets here to get the map to align with actual entities
    transform: translate(-50.2%, 50.5%)
  }
`,ea=Se.div`
  width: 300px;
  position: absolute;
  bottom: 0;
  left: 0;
  transform: translate(-50%, 50%);
  text-align: center;

  & p {
    margin: 10px 10px;
  }
`,ta=t=>{const{children:n,style:o}=t;return e.createElement(Jo,{style:o},e.createElement(Zo,null,e.createElement(ea,null,e.createElement("p",null,"Loading the Dota 2 map background..."),e.createElement("p",null,"If it never loads, your browser may not support the WebP image format."),e.createElement("p",null,"¯\\_(ツ)_/¯")),e.createElement("img",{src:"./images/map-7.27.webp",alt:"Dota 2 map"}),n))};function na(){return(na=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}const oa=e=>4e3/16384*e,aa=Se.div`
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
`,ra=t=>{const{entities:n,focus:o,selectedEntity:a,setSelection:r}=t,[i,s]=(0,e.useState)(0),[c,u]=(0,e.useState)(0),[d,p]=(0,e.useState)(!1);(0,e.useEffect)((()=>{o&&(s(-oa(o.x)),u(oa(o.y)))}),[o]);const l=(0,e.useCallback)((e=>{r(e)}),[r]);return e.createElement(aa,{dragging:d,onDoubleClick:e=>e.preventDefault(),onMouseDown:e=>{e.preventDefault(),p(!0)},onMouseUp:e=>{e.preventDefault(),p(!1)},onMouseMove:e=>{var t,n;d&&(t=e.movementX,n=e.movementY,t&&s((e=>e+t)),n&&u((e=>e+n)))}},e.createElement(ta,{style:{transform:`translate(${i}px, ${c}px)`}},n.map((t=>e.createElement($o,na({key:t.id},t,{x:oa(t.x),y:oa(t.y),selected:a===t,onClick:l}))))))},ia=Se(ro)`
  position: absolute;
  top: 12px;
  left: 15px;
  z-index: 5;
`,sa=Se.div`
  width: 100%;
  height: 100%;
  text-shadow: 1px 1px 1px black, -1px -1px 1px black;
`,ca=()=>{const t=ft(),{safeReplayURL:n}=(o=lt(rt).match)?o.params:{};var o;const a=decodeURIComponent(n),[r,i]=(0,e.useState)(null),[s,c]=(0,e.useState)(0),[u,d]=(0,e.useState)(0),[p,l]=(0,e.useState)(!1),[f,y]=(0,e.useState)(null),[g,h]=(0,e.useState)([]),[m,k]=(0,e.useState)(null),[b,_]=(0,e.useState)(null),C=g.find((e=>e.id===m)),v=g.filter((e=>"hero"===e.type)),T=(0,e.useCallback)((e=>{r.seek(e,{silent:!0})}),[r]),M=(0,e.useCallback)((e=>{e===m&&_(C),k(e)}),[_,k,C,m]),E=(0,e.useCallback)((e=>{c(e);const t=r.entities.find((e=>"CDOTAGamerulesProxy"===e.class.name));if(t){const e=t.get("m_pGameRules.m_fGameTime"),n=t.get("m_pGameRules.m_flGameStartTime"),o=t.get("m_pGameRules.m_flPreGameStartTime");if(n)y(e-n);else if(o){const n=t.get("m_pGameRules.m_flStateTransitionTime");y(e-n)}}const n=r.stringTables.byName.EntityNames,o=[];let a=0;for(const e of r.entities){const t={id:e.index},r=e.class.name;if(r.startsWith("CDOTA_Unit_Hero_")){t.type="hero";const o=e.get("m_pEntity.m_nameStringableIndex"),r=n.entries[o].key,i=eo[r];t.name=i.localized_name,t.refname=r.replace("npc_dota_hero_",""),t.color=Wn[++a],t.level=e.get("m_iCurrentLevel"),t.xp=e.get("m_iCurrentXP")}else if("CDOTA_Unit_Courier"===r)t.type="courier";else if("CDOTA_Unit_Roshan"===r)t.type="roshan";else if("CDOTA_BaseNPC_Creep_Lane"===r||"CDOTA_BaseNPC_Creep_Siege"===r)t.type="creep";else if("CDOTA_BaseNPC_Creep_Neutral"===r)t.type="neutral-creep";else if("CDOTA_NPC_Observer_Ward"===r||"CDOTA_NPC_Sentry_Ward"===r)t.type="ward";else{if("CDOTA_BaseNPC_Tower"!==r&&"CDOTA_BaseNPC_Barracks"!==r&&"CDOTA_BaseNPC_Fort"!==r)continue;t.type="building"}t.x=128*e.get("CBodyComponent.m_cellX")+e.get("CBodyComponent.m_vecX")-16384,t.y=128*e.get("CBodyComponent.m_cellY")+e.get("CBodyComponent.m_vecY")-16384,t.hp=e.get("m_iHealth"),t.hpMax=e.get("m_iMaxHealth"),t.mp=e.get("m_flMana"),t.mpMax=e.get("m_flMaxMana"),t.dead=0===t.hp,t.team=e.get("m_iTeamNum"),t.name=t.name||t.type,t.color=t.color||qn[t.team],o.push(t)}h(o)}),[r]);return(0,e.useEffect)((()=>{(async()=>{let e=null;try{const t=await fetch(a);e=await t.arrayBuffer()}catch(e){return void t.push("/")}i(new Hn(e))})()}),[t,a]),(0,e.useEffect)((()=>{r&&(d(r.lastTick),r.on("warn",console.warn),r.start(),r.on("tick",E))}),[E,r]),((t,n)=>{const o=(0,e.useRef)();(0,e.useEffect)((()=>{o.current=t}),[t]),(0,e.useEffect)((()=>{if(null!==n){const e=setInterval((()=>{o.current()}),n);return()=>clearInterval(e)}}),[n])})((()=>{r.step(2)}),r&&p?1/r.tickInterval*2:null),e.createElement(sa,null,e.createElement(ia,{to:"/"},"Back to ReDota"),e.createElement(Yo,{heroes:v,selectedEntity:C,setSelection:M,playing:p,setPlaying:l,tick:s,time:f,maxTick:u,requestTick:T}),e.createElement(ra,{entities:g,focus:b,selectedEntity:C,setSelection:M}))},ua=Se.div`
  box-sizing: content-box;
  font-family: 'Galdeano', sans-serif;
  letter-spacing: 0.5px;
`,da=()=>e.createElement(ua,null,e.createElement(yt,null,e.createElement(pt,null,e.createElement(dt,{path:"/replay/:safeFilename/:safeReplayURL"},e.createElement(ca,null)),e.createElement(dt,{path:"/"},e.createElement(_o,null))))),pa=document.querySelector("#container");t.render(e.createElement(da,null),pa)})()})();