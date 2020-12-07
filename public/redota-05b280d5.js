  position: absolute;
  bottom: 1px;
  right: 3px;
  font-size: 0.85em;

  ${e=>"mana"===e.type&&ge`
    color: #65D9F7;
  `}
`,Os=t=>{const{type:n,value:o}=t;return e.createElement(Is,{type:n},o)},Rs=Se.div`
  ${e=>!e.active&&ge`
    filter: grayscale(100%) brightness(80%);

    ${e.translucentWhenInactive&&ge`
      opacity: 0.8;
    `}
  `}
`,Ps=Se.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
`,Gs=t=>{const{children:n,remaining:o}=t,a=o>0;return e.createElement(e.Fragment,null,a&&e.createElement(Ps,null,Math.ceil(o)),e.createElement(Rs,{active:!a},n))},Ls=t=>{const{path:n}=t,o="https://steamcdn-a.akamaihd.net/apps/dota2/images/"+n;return e.createElement("img",{src:o,draggable:"false",alt:""})},Ns=e.memo((t=>{const{refname:n}=t;return e.createElement(Ls,{path:`abilities/${n}_md.png`})})),Us=e.memo((t=>{const{refname:n,variant:o}=t;let a="full.png";switch(o){case"portrait":a="vert.jpg";break;case"landscape":a="sb.png";break;case"icon":a="icon.png";break;default:a="full.png"}return e.createElement(Ls,{path:`heroes/${n}_${a}`})})),Bs=e.memo((t=>{let{refname:n}=t;return n.startsWith("recipe_")&&(n="recipe"),e.createElement(Ls,{path:`items/${n}_lg.png`})})),js=e.memo((t=>{const{teamID:n}=t;return e.createElement(Ls,{path:`team_logos/${n}.png`})})),Fs=Se.div`
  position: relative;
  width: 60px;
  height: 60px;
  border: 2px solid #333;
  border-color: #444 #333 #333 #444;
  outline: 1px solid #111;
  background: black;

  img {
    display: block;
    width: 100%;
    height: 100%;
  }
  position: absolute;
  z-index: 1;
`,Qs=Se.div`
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 2;
  transform: translate(-50%, -50%);

  span {
    margin: 5px;
  }
`,Xs=Se.div`
  position: relative;
  margin: 4px 0px 0px;
  background: rgba(0, 0, 0, .4);
  border-radius: 4px;
  text-align: center;

  ${e=>"default"===e.size&&ge`
    height: 25px;

    ${Ys} {
      border-radius: 4px;
      top: 1px;
      bottom: 1px;
      left: 1px;
      right: 1px;
    }
  `}

  ${e=>"mini"===e.size&&ge`
    height: 3px;
    margin: 1px auto;

    ${Ys} {
      height: 100%;
    }
  `}
`,$s=t=>{let{color:n}=t;const{max:o,value:a,size:r="default",teamID:s,type:i}=t,c=a/o*100|0;return"health"===i?n=zs[s]:"mana"===i&&(n="#466DDC"),e.createElement(Xs,{size:r},"default"===r&&o>0&&e.createElement(Qs,null,0|a,e.createElement("span",null,"/"),0|o),e.createElement(Ys,{style:{background:n,width:c+"%"}}))};function Js(){return(Js=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}const Zs=Se.button`
  appearance: none;
  background: none;
  border: none;
  color: #FFFFFF;
  cursor: pointer;
  font-size: 1.25em;
`,ei=t=>e.createElement(Zs,Js({type:"button"},t)),ti=Se.div.withConfig({shouldForwardProp:e=>"wrap"!==e})`
  display: flex;
  flex-direction: row;

  ${e=>"center"===e.justify&&ge`
    justify-content: center;
  `}

  ${e=>e.wrap&&ge`
    flex-wrap: wrap;
  `}
`,ni=ti,oi=Se(ti)`
  flex-direction: column;
`,ai=Se.div`
  position: relative;
  width: 50px;
  height: 38px;
  border: 1px solid #333;
  border-color: #333 #444 #444 #333;
  background: black;

  img {
    display: block;
    width: 100%;
    height: 100%;
  }

  ${e=>e.rounded&&ge`
    width: 38px;
    border-radius: 50%;
    overflow: hidden;

    img {
      width: 50px;
      transform: translate(-6px, 0);
    }
  `}
`,ri=Ss((t=>{const{className:n,item:o,rounded:a=!1}=t;return e.createElement(ai,{className:n,rounded:a},o&&e.createElement(Gs,{remaining:o.cooldown},o.charges>0&&e.createElement(Os,{value:o.charges}),o.manaCost>0&&e.createElement(Os,{type:"mana",value:o.manaCost}),e.createElement(Bs,{refname:o.refname})))})),si=Se(ni)`
  align-content: flex-start;
  margin: 9px;

  ${ai} {
    margin: 1px;
  }
`,ii=Ss((t=>{const{items:n,wrap:o}=t;return e.createElement(si,{wrap:o},n.map(((t,n)=>e.createElement(ri,{key:n,item:t}))))})),ci=ri,li=Se.div`
  position: relative;
  width: ${e=>2*e.radius}px;
  height: ${e=>2*e.radius}px;
  background: rgba(0, 0, 0, .75);
  border-radius: 50%;
  color: #FFCC00;
  font-weight: bold;
  text-align: center;
  line-height: 30px;

  svg {
    transform: rotate(-90deg);
  }

  span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    letter-spacing: 0px;

    ${e=>"small"===e.size&&ge`
      font-size: 0.7em;
    `}
  }
`,ui=t=>{const{children:n,size:o="default",xp:a}=t;let r=20,s=3;"small"===o&&(r=10,s=2);const i=qs[n-1],c=(a-i)/(qs[n]-i),l=r-s,u=2*l*Math.PI,d=u-c*u;return e.createElement(li,{radius:r,size:o},e.createElement("svg",{height:2*r,width:2*r},e.createElement("circle",{stroke:"#FFCC00",fill:"transparent",strokeWidth:s,strokeDasharray:`${u} ${u}`,style:{strokeDashoffset:d},r:l,cx:r,cy:r})),e.createElement("span",null,n))},di=e.memo(ui),pi=Se(_t)`
  color: #C22E1F;

  &:hover {
    color: #FF1700;
  }
`,fi=t=>{const{children:n,to:o}=t;return o.startsWith("http")?e.createElement(pi,{as:"a",href:o},n):e.createElement(pi,t)},gi=e.memo(fi),hi=Se.div`
  height: 3px;
  border-bottom: 1px solid black;
`,yi=t=>{const{color:n}=t;return e.createElement(hi,{style:{background:n}})},mi=e.memo(yi),ki=Se.div`
  width: 60px;
  text-align: center;

  img {
    max-width: 40px;
  }
`,bi=t=>{const{teamID:n}=t;return e.createElement(ki,null,e.createElement(js,{teamID:n}))},_i=e.memo(bi),vi=t=>{let{time:n}=t;const o=n<0?"-":"";n=Math.abs(n);const a=n/3600|0;n%=3600;const r=n/60|0;n%=60;const s=0|n;return e.createElement(e.Fragment,null,o,a>0&&e.createElement(e.Fragment,null,a,":"),("00"+r).slice(-2),":",("00"+s).slice(-2),o?" ":"")},Ci=Se.div`
  max-width: 560px;
  padding: 60px 0;
  margin: 0 auto;
  background: rgba(0, 0, 0, .9);
  text-align: center;

  h2 {
    margin-top: 1.5em;
  }

  img {
    max-width: 85%;
  }
`,Ti=Se.span`
  color: #FF1700;
`,Mi=Se.p`
  opacity: .3;
  font-size: .75em;
  margin-top: 1.5em;
`,Ei=()=>{const t=ft(),[n,o]=(0,e.useState)(null),a=e.createElement(gi,{to:"https://github.com/dotabuff/manta"},"Dotabuff"),r=e.createElement(gi,{to:"https://github.com/odota/parser"},"OpenDota"),s=e.createElement(gi,{to:"https://github.com/skadistats/clarity"},"Skadistats"),i=e.createElement(gi,{to:"https://github.com/timkurvers/redota"},"GitHub"),c=e.createElement(gi,{to:"http://replay138.valve.net/570/5712001132_579859928.dem.bz2"},"Download and unzip replay of a pro-team match");return e.createElement(Ci,null,e.createElement("h1",null,"↻Re",e.createElement(Ti,null,"Dota")),e.createElement("p",null,"This is an experiment to revisit past Dota 2 matches in the browser, fully relying on parsing replays client-side without any server involvement."),e.createElement("img",{src:"./images/redota.jpg",alt:"ReDota"}),e.createElement("p",null,"Source is available on ",i,". Contributions welcome!"),e.createElement("p",null,"ReDota is a heavily derived project and stands on the shoulders of giants, notably parsers by ",a,", ",r," and ",s,"."),e.createElement("h2",null,"Select replay file"),e.createElement("p",null,e.createElement("input",{type:"file",onChange:async e=>{const n=e.target.files[0];let a=null;if(n&&(a=await Vn.validate(n),a)){const e=URL.createObjectURL(n),o=encodeURIComponent(n.name),a=encodeURIComponent(e);t.push(`/replay/${o}/${a}`)}else o(a)},accept:".dem"})),!1===n&&e.createElement(Ti,{as:"p"},"The file you selected is not a valid Dota 2 replay file :("),e.createElement("p",null,"The replay file you select is never uploaded to any server. Real-time playback of replays can be taxing on your machine, but should be decently performant in latest versions of Mozilla Firefox and Google Chrome."),e.createElement("p",null,"Need a replay file? ",c,"."),e.createElement("h2",null,"Status"),e.createElement("p",null,"Currently, ReDota is capable of parsing replays and playing back in real time. It does not yet parse everything correctly though."),e.createElement(Mi,null,"Dota 2 is a registered trademark of Valve Corporation.",e.createElement("br",null),"Image resources, lore and other references are property of Valve Corporation.",e.createElement("br",null),"The Dota 2 map background originates from Gamepedia."))},wi=class{constructor(e,t){this.replay=e,this.handle=t,this.class=null,this.teamID=null,this.x=0,this.y=0,this.rotation=null,this.hp=0,this.hpMax=0,this.mp=0,this.mpMax=0,_r(this,{class:Ko,teamID:Ko,x:Ko,y:Ko,rotation:Ko,hp:Ko,hpMax:Ko,mp:Ko,mpMax:Ko,color:Xo,isDead:Xo,name:Xo,team:Xo})}get color(){return zs[this.teamID]}get isDead(){return this.hp<=0}get name(){return Ks[this.class]}get team(){return this.replay.teams.byID.get(this.teamID)}},Ai=class extends wi{constructor(e,t){super(e,t),this.inventoryHandles=[null,null,null,null,null,null],_r(this,{inventoryHandles:Ko,inventory:Xo})}get inventory(){return this.inventoryHandles.map((e=>this.replay.items.get(e)))}},Si=class extends Ai{constructor(e,t){super(e,t),this.refname=null,this.playerID=-1,this.level=1,this.xp=0,this.abilityHandles=[],this.backpackHandles=[null,null,null],this.neutralItemHandle=null,this.stashHandles=[null,null,null,null,null,null],this.teleportScrollHandle=null,_r(this,{refname:Ko,playerID:Ko,level:Ko,xp:Ko,abilityHandles:Ko,backpackHandles:Ko,neutralItemHandle:Ko,stashHandles:Ko,teleportScrollHandle:Ko,backpack:Xo,neutralItem:Xo,player:Xo,teleportScroll:Xo})}get abilities(){return this.abilityHandles.reduce(((e,t)=>{const n=this.replay.abilities.get(t);return!n||n.isSeasonal||n.isTalent||e.push(n),e}),[])}get backpack(){return this.backpackHandles.map((e=>this.replay.items.get(e)))}get color(){return Ws[this.playerID]}get name(){const e="npc_dota_hero_"+this.refname;return Hs[e].localized_name}get neutralItem(){return this.replay.items.get(this.neutralItemHandle)}get player(){return this.replay.players.byID.get(this.playerID)}get stash(){return this.stashHandles.map((e=>this.replay.items.get(e)))}get teleportScroll(){return this.replay.items.get(this.teleportScrollHandle)}},Di={CDOTA_BaseNPC_Barracks:"processBuilding",CDOTA_BaseNPC_Creep_Lane:"processUnit",CDOTA_BaseNPC_Creep_Neutral:"processUnit",CDOTA_BaseNPC_Creep_Siege:"processUnit",CDOTA_BaseNPC_Fort:"processBuilding",CDOTA_BaseNPC_Tower:"processBuilding",CDOTA_BaseNPC_Watch_Tower:"processBuilding",CDOTA_Item_Physical:"processCollectable",CDOTA_Item_Rune:"processCollectable",CDOTA_Item:"processItem",CDOTA_NPC_Observer_Ward:"processUnit",CDOTA_NPC_Sentry_Ward:"processUnit",CDOTA_PlayerResource:"processPlayerResource",CDOTA_Unit_Courier:"processUnitWithInventory",CDOTA_Unit_Roshan:"processUnitWithInventory",CDOTABaseAbility:"processAbility",CDOTAGamerulesProxy:"processGameRules",CDOTAPlayer:"processPlayer",CDOTATeam:"processTeam"},Ii=[{startsWith:"CDOTA_Item_RuneSpawner_Bounty",method:null},{startsWith:"CDOTA_Item_RuneSpawner_Powerup",method:null},{startsWith:"CDOTA_Ability_",method:"processAbility"},{startsWith:"CDOTA_Item_",method:"processItem"},{startsWith:"CDOTA_Unit_Hero_",method:"processHero"}],Oi=t=>{const[n,o]=(0,e.useState)(null),[a,r]=(0,e.useState)(!1),[s,i]=(0,e.useState)(null);(0,e.useEffect)((()=>{t.on("warn",console.warn),t.start()}),[t]),((t,n)=>{const o=(0,e.useRef)();(0,e.useEffect)((()=>{o.current=t}),[t]),(0,e.useEffect)((()=>{if(null!==n){const e=setInterval((()=>{o.current()}),n);return()=>clearInterval(e)}}),[n])})((()=>{t.step(2)}),t&&a?1/t.tickInterval*2:null);const c=t?.units?.find((e=>e.handle===s)),l=(0,e.useCallback)((e=>{t.jump(e)}),[t]),u=(0,e.useCallback)((e=>{e===s&&o({x:c.x,y:c.y}),i(e)}),[s,c,o,i]);return{focus:n,playing:a,requestTick:l,selectedUnit:c,setPlaying:r,setSelection:u}},Ri=Se(oi)`
  margin: 11px 6px 14px;
  justify-content: space-between;
`,Pi=Se.div`
  flex: 1;
  min-width: 3px;
  max-width: 8px;
  height: 3px;
  margin: 0 3px;
  background: darkgray;
  box-shadow: 1px 1px 1px #111,
              -1px 1px 1px #111,
              1px -1px 1px #111,
              -1px -1px 1px #111;

  ${e=>e.acquired&&ge`
    background: #FFCC00;
  `}
`,Gi=Ss((t=>{const{ability:n}=t,{level:o}=n,a=new Array(o).fill();return e.createElement(Ri,null,e.createElement(Rs,{active:o>=1},e.createElement(xs,{ability:n})),e.createElement(ni,{justify:"center"},a.map(((t,n)=>e.createElement(Pi,{key:n,acquired:!0})))))})),Li=Se(ni)`
  flex: 1;
`,Ni=Ss((t=>{const{abilities:n=[]}=t;return e.createElement(Li,null,n.map((t=>!t.hidden&&e.createElement(Gi,{key:t.handle,ability:t}))))})),Ui=Se(oi)`
  position: relative;
  align-content: flex-start;
  width: 180px;
  padding-right: 50px;
`,Bi=Se.div`
  position: absolute;
  top: 30px;
  right: 6px;
`,ji=Se.div`
  position: absolute;
  top: 112px;
  right: 6px;
`,Fi=Ss((t=>{const{backpack:n,inventory:o,neutralItem:a,teleportScroll:r}=t;return e.createElement(Ui,null,e.createElement(ii,{items:o,wrap:!0}),n&&e.createElement(Rs,{active:!1},e.createElement(ii,{items:n})),e.createElement(Bi,null,e.createElement(ci,{item:a,rounded:!0})),e.createElement(ji,null,e.createElement(ci,{item:r,rounded:!0})))})),xi=e.memo(Fi),Hi=Se.div`
  color: #FFCC00;
  text-align: center;
  text-transform: uppercase;
`,Vi=t=>{const{children:n}=t;return e.createElement(Hi,null,n)},qi=e.memo(Vi),Wi=Se.div`
  width: 138px;
  cursor: pointer;

  img {
    width: 138px;
  }
`,zi=t=>{const{hero:n,onClick:o}=t;return e.createElement(Wi,{onClick:o},n&&e.createElement(Us,{refname:n,variant:"portrait"}))},Ki=e.memo(zi),Yi=Se(ni)`
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

  ${Hi} {
    position: absolute;
    top: -25px;
    left: 70px;
    transform: translateX(-50%);
  }

  ${li} {
    position: absolute;
    left: 0;
    bottom: 75px;
    z-index: 1;
    transform: translateX(-50%);
  }

  ${Wi} {
    margin-right: 8px;
  }
`,Qi=Se(oi)`
  min-width: 260px;
  margin: 0 10px;
`,Xi=Ss((t=>{const{selectedUnit:n,setSelection:o}=t;if(!n)return null;const{handle:a,isDead:r,name:s,refname:i,hp:c,hpMax:l,mp:u,mpMax:d,level:p,teamID:f,xp:g,abilities:h,backpack:y,inventory:m,neutralItem:k,teleportScroll:b}=n,_=(0,e.useCallback)((()=>{o(a)}),[a,o]);return e.createElement(Yi,null,e.createElement(qi,null,s),p&&e.createElement(di,{xp:g},p),e.createElement(Rs,{active:!r},e.createElement(Ki,{hero:i,onClick:_})),e.createElement(Qi,null,e.createElement(Ni,{abilities:h}),e.createElement($s,{type:"health",value:c,max:l,teamID:f}),e.createElement($s,{type:"mana",value:u,max:d})),m&&e.createElement(xi,{backpack:y,inventory:m,neutralItem:k,teleportScroll:b}))})),$i=Se(ni)`
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

  > * {
    margin: auto 5px;
  }

  input {
    width: 100%;
  }

  ${Zs} {
    width: 50px;
  }
`,Ji=t=>{const{tick:n,lastTick:o,requestTick:a,playing:r,setPlaying:s}=t;return e.createElement($i,null,e.createElement(ei,{onClick:()=>s(!r)},r?"❚❚":"►"),e.createElement("input",{type:"range",min:0,max:o,step:1,value:n,onChange:e=>a(+e.target.value)}),e.createElement("div",{style:{whiteSpace:"nowrap"}},e.createElement(vi,{time:n/30})," / ",e.createElement(vi,{time:o/30})))},Zi=Se(vi)`
  min-width: 70px;
  text-align: center;
`,ec=t=>e.createElement(Zi,t),tc=e.memo(ec),nc=Se.div`
  cursor: pointer;
  margin-left: 1px;

  &:last-child {
    margin-right: 1px;
  }
`,oc=Ss((t=>{const{hero:n,onClick:o}=t,{color:a,isDead:r,hp:s,hpMax:i,mp:c,mpMax:l,refname:u,teamID:d}=n;return e.createElement(nc,{onClick:o},e.createElement(mi,{color:a}),e.createElement(Rs,{active:!r},e.createElement(Us,{refname:u,variant:"landscape"}),e.createElement($s,{type:"health",size:"mini",value:s,max:i,teamID:d}),e.createElement($s,{type:"mana",size:"mini",value:c,max:l})))})),ac=Se(ni)`
  img {
    display: block;
  }
`,rc=Ss((t=>{const{heroes:n,setSelection:o}=t;return e.createElement(ac,null,n.map((t=>e.createElement(oc,{key:t.handle,hero:t,onClick:()=>o(t.handle)}))))})),sc=Se.div`
  font-weight: bold;
  min-width: 50px;
  text-align: center;
`,ic=t=>{const{value:n}=t;return e.createElement(sc,null,n)},cc=e.memo(ic),lc=Se(ni)`
  align-items: center;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 5;
  background: rgba(0, 0, 0, .5);
`,uc=Ss((t=>{const{setSelection:n,teams:o,time:a}=t,r=o.byID.get(2),s=o.byID.get(3);return r&&s?e.createElement(lc,null,r.proID>0&&e.createElement(_i,{teamID:r.proID}),e.createElement(rc,{heroes:r.heroes,setSelection:n}),e.createElement(cc,{value:r.kills}),e.createElement(tc,{time:a}),e.createElement(cc,{value:s.kills}),e.createElement(rc,{heroes:s.heroes,setSelection:n}),s.proID>0&&e.createElement(_i,{teamID:s.proID})):null})),dc=t=>{const{children:n}=t;return e.createElement("div",null,n)},pc=e=>4e3/16384*e,fc=Se(Rs)`
  ${e=>"large"===e.size&&ge`
    width: 30px;
    height: 30px;
  `}
  padding: 10px;
  border-radius: 50%;
  ${e=>e.selected&&ge`
    border: 3px solid white;
  `}
  position: absolute;
  transform: translate(-50%, 50%);
  background: ${e=>e.color}AA;
  cursor: pointer;

  img {
    display: block;
  }

  ${li} {
    position: absolute;
    bottom: 0;
    left: 0;
    transform: translate(-20%, 20%);
  }
`,gc=Ss((t=>{const{onClick:n,selected:o,unit:a}=t,{handle:r,isDead:s,color:i,x:c,y:l}=a,u=a instanceof Si;return e.createElement(fc,{active:!s,translucentWhenInactive:!0,color:i,onClick:()=>n(r),selected:o,size:u?"large":"default",style:{left:pc(c)+"px",bottom:pc(l)+"px"}},u&&e.createElement(e.Fragment,null,e.createElement(Us,{refname:a.refname,variant:"icon"}),e.createElement(di,{xp:a.xp,size:"small"},a.level)))})),hc=Se.div`
  position: absolute;
  // Adding an additional 8% to place the camera a bit higher up for comfort
  bottom: 58%;
  left: 50%;
`,yc=Se.div`
  position: relative;

  > img {
    position: relative;
    width: 4000px;
    height: 4000px;
    // Minor offsets here to get the map to align with actual entities
    transform: translate(-50.2%, 50.5%)
  }
`,mc=Se.div`
  width: 300px;
  position: absolute;
  bottom: 0;
  left: 0;
  transform: translate(-50%, 50%);
  text-align: center;

  p {
    margin: 10px 10px;
  }
`,kc=t=>{const{children:n,style:o}=t;return e.createElement(hc,{style:o},e.createElement(yc,null,e.createElement(mc,null,e.createElement("p",null,"Loading the Dota 2 map background..."),e.createElement("p",null,"If it never loads, your browser may not support the WebP image format."),e.createElement("p",null,"¯\\_(ツ)_/¯")),e.createElement("img",{src:"./images/map-7.27.webp",alt:"Dota 2 map"}),n))},bc=Se.div`
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
`,_c=t=>{const{children:n,focus:o}=t,[a,r]=(0,e.useState)(0),[s,i]=(0,e.useState)(0),[c,l]=(0,e.useState)(!1);return(0,e.useEffect)((()=>{o&&(r(-pc(o.x)),i(pc(o.y)))}),[o]),e.createElement(bc,{dragging:c,onDoubleClick:e=>e.preventDefault(),onMouseDown:e=>{e.preventDefault(),l(!0)},onMouseUp:e=>{e.preventDefault(),l(!1)},onMouseMove:e=>{var t,n;c&&(t=e.movementX,n=e.movementY,t&&r((e=>e+t)),n&&i((e=>e+n)))}},e.createElement(kc,{style:{transform:`translate(${a}px, ${s}px)`}},n))},vc=Se(gi)`
  position: absolute;
  top: 12px;
  left: 15px;
  z-index: 5;
`,Cc=Se.div`
  width: 100%;
  height: 100%;
  text-shadow: 1px 1px 1px #111,
               -1px 1px 1px #111,
               1px -1px 1px #111,
               -1px -1px 1px #111;
  box-sizing: content-box;
  font-family: 'Galdeano', sans-serif;
  letter-spacing: 0.5px;
`,wc=()=>e.createElement(Ec,null,e.createElement(gt,null,e.createElement(dt,null,e.createElement(ut,{path:"/replay/:safeFilename/:safeReplayURL"},e.createElement(Mc,null)),e.createElement(ut,{path:"/"},e.createElement(Ei,null))))),Ac=document.querySelector("#container");t.render(e.createElement(wc,null),Ac)})()})();