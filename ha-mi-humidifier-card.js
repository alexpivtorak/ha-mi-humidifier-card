var HaMiHumidifierCard=function(r,a,o){"use strict";var v=Object.defineProperty,x=Object.defineProperties;var w=Object.getOwnPropertyDescriptors;var m=Object.getOwnPropertySymbols;var T=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable;var y=(r,a,o)=>a in r?v(r,a,{enumerable:!0,configurable:!0,writable:!0,value:o}):r[a]=o,h=(r,a)=>{for(var o in a||(a={}))T.call(a,o)&&y(r,o,a[o]);if(m)for(var o of m(a))C.call(a,o)&&y(r,o,a[o]);return r},b=(r,a)=>x(r,w(a));var u=(r,a,o)=>new Promise((p,g)=>{var s=t=>{try{e(o.next(t))}catch(n){g(n)}},l=t=>{try{e(o.throw(t))}catch(n){g(n)}},e=t=>t.done?p(t.value):Promise.resolve(t.value).then(s,l);e((o=o.apply(r,a)).next())});var p=Object.defineProperty,g=Object.getOwnPropertyDescriptor,s=(l,e,t,n)=>{for(var i=n>1?void 0:n?g(e,t):e,d=l.length-1,c;d>=0;d--)(c=l[d])&&(i=(n?c(e,t,i):c(i))||i);return n&&i&&p(e,t,i),i};return window.customCards=window.customCards||[],window.customCards.push({type:"ha-mi-humidifier-card",name:"Mi Humidifier Card",description:"A custom card for Mi Humidifier"}),r.MiHumidifierCard=class extends a.LitElement{constructor(){super(...arguments),this.isLoading=!1,this.isTargetLoading=!1,this.pendingTargetHumidity=null,this.debounceTimeout=null,this.targetDebounceTimeout=null}static getStubConfig(){return{type:"custom:ha-mi-humidifier-card",entity:"humidifier.deerma_jsq5_8f1b_humidifier"}}setConfig(e){if(!e.entity)throw new Error("Please define an entity");this.config=e}handlePowerClick(){return u(this,null,function*(){!this.config.entity||this.isLoading||(this.debounceTimeout&&clearTimeout(this.debounceTimeout),this.debounceTimeout=setTimeout(()=>u(this,null,function*(){try{this.isLoading=!0;const t=this.hass.states[this.config.entity].state==="on"?"off":"on",n=t==="on"?"turn_on":"turn_off",i=h({},this.hass.states[this.config.entity]);this.hass.states[this.config.entity]=b(h({},i),{state:t}),this.requestUpdate(),yield this.hass.callService("humidifier",n,{entity_id:this.config.entity})}catch(e){console.error("Failed to toggle power:",e)}finally{this.isLoading=!1,this.debounceTimeout=null}}),100))})}handleTargetChange(e){return u(this,null,function*(){!this.config.entity||this.isTargetLoading||(this.targetDebounceTimeout&&clearTimeout(this.targetDebounceTimeout),this.targetDebounceTimeout=setTimeout(()=>u(this,null,function*(){try{this.isTargetLoading=!0;const t=this.hass.states[this.config.entity],n=this.pendingTargetHumidity!==null?this.pendingTargetHumidity:t.attributes.target_humidity||50,i=Math.min(80,Math.max(40,n+e));i!==n&&(this.pendingTargetHumidity=i,this.requestUpdate(),yield this.hass.callService("humidifier","set_humidity",{entity_id:this.config.entity,humidity:i}))}catch(t){console.error("Failed to change target humidity:",t),this.pendingTargetHumidity=null,this.requestUpdate()}finally{this.isTargetLoading=!1,this.targetDebounceTimeout=null}}),100))})}static get styles(){return a.css`
      ha-card {
        height: 100%;
        background: var(--ha-card-background, var(--card-background-color, #1c1c1c));
        border-radius: var(--ha-card-border-radius, 12px);
        padding: 16px;
        box-sizing: border-box;
      }
      .card-content {
        display: flex;
        flex-direction: column;
        height: 100%;
      }
      .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 16px;
      }
      .title {
        font-size: 1.1em;
        font-weight: 500;
        color: var(--primary-text-color, #fff);
        opacity: 0.9;
      }
      .status {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 16px;
      }
      .humidity-display {
        display: flex;
        align-items: baseline;
        gap: 4px;
      }
      .humidity-value {
        font-size: 2em;
        font-weight: 500;
        color: var(--primary-text-color, #fff);
        line-height: 1;
      }
      .humidity-unit {
        font-size: 1.2em;
        color: var(--primary-text-color, #fff);
        opacity: 0.8;
      }
      .current-humidity {
        font-size: 1.1em;
        color: var(--primary-text-color, #fff);
        opacity: 0.6;
      }
      .state-text {
        font-size: 1.1em;
        color: var(--primary-text-color, #fff);
        opacity: 0.9;
        padding: 4px 12px;
        border-radius: 12px;
        background: var(--primary-color, #0984ff);
      }
      .state-text[inactive] {
        background: var(--disabled-color, #666);
      }
      .slider-container {
        width: 100%;
        margin: 16px 0;
      }
      .slider {
        -webkit-appearance: none;
        width: 100%;
        height: 4px;
        border-radius: 2px;
        background: var(--primary-color, #0984ff);
        outline: none;
        opacity: 0.7;
        transition: opacity .2s;
      }
      .slider:hover {
        opacity: 1;
      }
      .slider::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        width: 16px;
        height: 16px;
        border-radius: 50%;
        background: var(--primary-color, #0984ff);
        cursor: pointer;
        border: 2px solid var(--card-background-color, #1c1c1c);
        box-shadow: 0 0 0 1px var(--primary-color, #0984ff);
      }
      .slider::-moz-range-thumb {
        width: 16px;
        height: 16px;
        border-radius: 50%;
        background: var(--primary-color, #0984ff);
        cursor: pointer;
        border: 2px solid var(--card-background-color, #1c1c1c);
        box-shadow: 0 0 0 1px var(--primary-color, #0984ff);
      }
      .slider:disabled {
        opacity: 0.3;
        cursor: not-allowed;
      }
      .controls {
        display: flex;
        gap: 20px;
        margin-top: 8px;
        justify-content: center;
      }
      .control-button {
        width: 36px;
        height: 36px;
        border-radius: 50%;
        border: 2px solid var(--primary-color, #0984ff);
        background: transparent;
        color: var(--primary-color, #0984ff);
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.5em;
        transition: all 0.2s ease;
        padding: 0;
        line-height: 1;
      }
      .control-button:hover {
        background: var(--primary-color, #0984ff);
        color: var(--card-background-color, #1c1c1c);
      }
      .control-button[disabled] {
        opacity: 0.3;
        cursor: not-allowed;
      }
      .power-button {
        width: 100%;
        padding: 14px;
        border: none;
        border-radius: 8px;
        background: var(--primary-color, #0984ff);
        color: var(--primary-color-text, #fff);
        cursor: pointer;
        margin-top: 24px;
        transition: all 0.2s ease;
        font-size: 1em;
        text-transform: uppercase;
        letter-spacing: 0.5px;
      }
      .power-button:hover {
        opacity: 0.9;
        transform: scale(0.99);
      }
      .power-button[inactive] {
        background: var(--disabled-color, #666);
      }
      .power-button[loading] {
        pointer-events: none;
        opacity: 0.7;
        position: relative;
        overflow: hidden;
      }
      .power-button[loading]::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 2px;
        background: var(--primary-color-text, #fff);
        bottom: 0;
        left: -100%;
        animation: loading 1s infinite linear;
      }
      @keyframes loading {
        from { left: -100%; }
        to { left: 100%; }
      }
      .device-image {
        width: 100%;
        max-width: 200px;
        height: auto;
        margin: 0 auto 16px;
        display: block;
        filter: brightness(0.9) contrast(1.1);
      }
      .controls-row {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 16px;
        padding: 8px;
        background: rgba(var(--rgb-primary-color, 9, 132, 255), 0.1);
        border-radius: 8px;
      }
      
      .control-label {
        font-size: 0.9em;
        color: var(--primary-text-color, #fff);
        opacity: 0.9;
      }

      .toggle-button {
        background: none;
        border: 2px solid var(--primary-color, #0984ff);
        border-radius: 12px;
        padding: 4px 8px;
        color: var(--primary-color, #0984ff);
        cursor: pointer;
        transition: all 0.2s ease;
      }

      .toggle-button[active] {
        background: var(--primary-color, #0984ff);
        color: var(--primary-color-text, #fff);
      }

      .toggle-button:hover {
        opacity: 0.8;
      }

      .water-warning {
        display: flex;
        align-items: center;
        gap: 8px;
        margin-top: 8px;
        padding: 8px 12px;
        background: rgba(var(--rgb-warning-color, 255, 152, 0), 0.2);
        border-radius: 8px;
        color: var(--warning-color, #ff9800);
        font-size: 0.9em;
      }

      .water-warning svg {
        width: 20px;
        height: 20px;
      }

      .water-level {
        display: flex;
        align-items: center;
        gap: 8px;
        margin-top: 16px;
        padding: 8px 12px;
        background: rgba(var(--rgb-primary-color, 9, 132, 255), 0.1);
        border-radius: 8px;
      }

      .water-level svg {
        width: 24px;
        height: 24px;
        color: var(--primary-color, #0984ff);
      }

      .water-level-text {
        color: var(--primary-text-color, #fff);
        font-size: 0.9em;
      }

      .water-level[data-state="empty"] {
        background: rgba(var(--rgb-error-color, 244, 67, 54), 0.1);
      }
      
      .water-level[data-state="empty"] svg {
        color: var(--error-color, #f44336);
      }

      .image-error {
        text-align: center;
        padding: 16px;
        background: rgba(var(--rgb-warning-color, 255, 152, 0), 0.1);
        border-radius: 8px;
        color: var(--warning-color, #ff9800);
        margin: 16px 0;
      }
    `}handleSliderChange(e){var n,i;const t=Number(e.target.value);this.config.entity&&!this.isTargetLoading&&this.handleTargetChange(t-((i=(n=this.pendingTargetHumidity)!=null?n:this.hass.states[this.config.entity].attributes.target_humidity)!=null?i:50))}_renderImage(){return a.html`
      <img 
        src="./images/humidifier-1.png"
        alt="Mi Humidifier"
        class="device-image"
        @error=${e=>{const t=e.target;if(console.log("❌ Failed to load image. Please check:"),console.log("   /config/www/community/ha-mi-humidifier-card/images/humidifier-1.png"),console.log("Current src:",t.src),t.src.includes("/images/"))console.log("🔄 Trying root path..."),t.src="./humidifier-1.png";else{t.style.display="none";const n=t.parentElement;if(n){const i=document.createElement("div");i.className="image-error",i.textContent="⚠️ Image not found",n.appendChild(i)}}}}
      />
    `}render(){var d,c,f;if(!this.config||!this.hass||!this.config.entity)return a.html``;const e=this.hass.states[this.config.entity];if(!e)return a.html`
        <ha-card>
          <div class="card-content">
            <div class="not-found">Entity not found: ${this.config.entity}</div>
          </div>
        </ha-card>
      `;const t=e.attributes.current_humidity||0,n=this.pendingTargetHumidity!==null?this.pendingTargetHumidity:e.attributes.target_humidity||50,i=e.state==="on";return a.html`
      <ha-card>
        <div class="card-content">
          <div class="header">
            <div class="title">${e.attributes.friendly_name||this.config.entity}</div>
            <div class="state-text" ?inactive=${!i}>${i?"ON":"OFF"}</div>
          </div>
          
          ${this._renderImage()}

          <div class="status">
            <div class="humidity-display">
              <span class="humidity-value">${n}</span>
              <span class="humidity-unit">%</span>
            </div>
            <div class="current-humidity">${t}%</div>
          </div>

          <div class="slider-container">
            <input
              type="range"
              min="40"
              max="80"
              step="5"
              .value=${n}
              class="slider"
              @change=${this.handleSliderChange}
              ?disabled=${!i}
            >
          </div>

          <div class="controls">
            <button 
              class="control-button"
              @click=${()=>this.handleTargetChange(-5)}
              ?disabled=${!i}
            >
              -
            </button>
            <button 
              class="control-button"
              @click=${()=>this.handleTargetChange(5)}
              ?disabled=${!i}
            >
              +
            </button>
          </div>

          <div class="water-level" data-state=${((d=this.hass.states[`binary_sensor.${this.config.entity.split(".")[1]}_water_shortage_fault`])==null?void 0:d.state)==="on"?"empty":"ok"}>
            <svg viewBox="0 0 24 24">
              <path fill="currentColor" d="M12,3.77L11.25,4.61C11.25,4.61 9.97,6.06 8.68,7.94C7.39,9.82 6,12.07 6,14.23A6,6 0 0,0 12,20.23A6,6 0 0,0 18,14.23C18,12.07 16.61,9.82 15.32,7.94C14.03,6.06 12.75,4.61 12.75,4.61L12,3.77M12,6.9C12.44,7.42 12.84,7.85 13.68,9.07C14.89,10.83 16,13.07 16,14.23C16,16.45 14.22,18.23 12,18.23C9.78,18.23 8,16.45 8,14.23C8,13.07 9.11,10.83 10.32,9.07C11.16,7.85 11.56,7.42 12,6.9Z" />
            </svg>
            <span class="water-level-text">
              ${((c=this.hass.states[`binary_sensor.${this.config.entity.split(".")[1]}_water_shortage_fault`])==null?void 0:c.state)==="on"?"Tank Empty":"Tank OK"}
            </span>
          </div>

          ${((f=this.hass.states[`binary_sensor.${this.config.entity.split(".")[1]}_water_shortage_fault`])==null?void 0:f.state)==="on"?a.html`
            <div class="water-warning">
              <svg viewBox="0 0 24 24">
                <path fill="currentColor" d="M13 14H11V9H13M13 18H11V16H13M1 21H23L12 2L1 21Z" />
              </svg>
              Water tank needs refilling
            </div>
          `:""}

          <button 
            class="power-button"
            @click=${this.handlePowerClick}
            ?inactive=${!i}
            ?loading=${this.isLoading}
            ?disabled=${this.isLoading}
          >
            ${i?"Turn Off":"Turn On"}
          </button>
        </div>
      </ha-card>
    `}},s([o.property({attribute:!1})],r.MiHumidifierCard.prototype,"hass",2),s([o.property()],r.MiHumidifierCard.prototype,"config",2),s([o.property()],r.MiHumidifierCard.prototype,"isLoading",2),s([o.property()],r.MiHumidifierCard.prototype,"isTargetLoading",2),s([o.property()],r.MiHumidifierCard.prototype,"pendingTargetHumidity",2),r.MiHumidifierCard=s([o.customElement("ha-mi-humidifier-card")],r.MiHumidifierCard),Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),r}({},Lit,LitDecorators);
//# sourceMappingURL=ha-mi-humidifier-card.iife.js.map
