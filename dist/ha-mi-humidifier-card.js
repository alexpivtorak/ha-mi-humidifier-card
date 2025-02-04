import { LitElement as g, css as u, html as d } from "lit";
import { property as l, customElement as p } from "lit/decorators.js";
var h = Object.defineProperty, f = Object.getOwnPropertyDescriptor, c = (t, e, r, i) => {
  for (var a = i > 1 ? void 0 : i ? f(e, r) : e, n = t.length - 1, s; n >= 0; n--)
    (s = t[n]) && (a = (i ? s(e, r, a) : s(a)) || a);
  return i && a && h(e, r, a), a;
};
customElements.get("ha-mi-humidifier-card") || console.info(
  "%c MI-HUMIDIFIER-CARD %c Version 1.0.0 ",
  "color: white; background: #4527a0; font-weight: 700;",
  "color: #4527a0; background: white; font-weight: 700;"
);
window.customCards = window.customCards || [];
window.customCards.push({
  type: "custom:ha-mi-humidifier-card",
  name: "Mi Humidifier Card",
  description: "A custom card for Mi Humidifier",
  preview: !0
});
let o = class extends g {
  constructor() {
    super(...arguments), this.isLoading = !1, this.isTargetLoading = !1, this.pendingTargetHumidity = null, this.debounceTimeout = null, this.targetDebounceTimeout = null;
  }
  static getStubConfig() {
    return {
      type: "custom:ha-mi-humidifier-card",
      entity: "humidifier.mi_humidifier",
      show_image: !0
    };
  }
  // Required by LovelaceCard
  getCardSize() {
    return 3;
  }
  setConfig(t) {
    if (!t.entity)
      throw new Error("Please define an entity");
    this.config = {
      show_image: !0,
      ...t
    };
  }
  async handlePowerClick() {
    !this.config.entity || this.isLoading || (this.debounceTimeout && clearTimeout(this.debounceTimeout), this.debounceTimeout = setTimeout(async () => {
      try {
        this.isLoading = !0;
        const e = this.hass.states[this.config.entity].state === "on" ? "off" : "on", r = e === "on" ? "turn_on" : "turn_off", i = { ...this.hass.states[this.config.entity] };
        this.hass.states[this.config.entity] = {
          ...i,
          state: e
        }, this.requestUpdate(), await this.hass.callService("humidifier", r, {
          entity_id: this.config.entity
        });
      } catch (t) {
        console.error("Failed to toggle power:", t);
      } finally {
        this.isLoading = !1, this.debounceTimeout = null;
      }
    }, 100));
  }
  async handleTargetChange(t) {
    !this.config.entity || this.isTargetLoading || (this.targetDebounceTimeout && clearTimeout(this.targetDebounceTimeout), this.targetDebounceTimeout = setTimeout(async () => {
      try {
        this.isTargetLoading = !0;
        const e = this.hass.states[this.config.entity], r = this.pendingTargetHumidity !== null ? this.pendingTargetHumidity : e.attributes.target_humidity || 50, i = Math.min(80, Math.max(40, r + t));
        i !== r && (this.pendingTargetHumidity = i, this.requestUpdate(), await this.hass.callService("humidifier", "set_humidity", {
          entity_id: this.config.entity,
          humidity: i
        }));
      } catch (e) {
        console.error("Failed to change target humidity:", e), this.pendingTargetHumidity = null, this.requestUpdate();
      } finally {
        this.isTargetLoading = !1, this.targetDebounceTimeout = null;
      }
    }, 100));
  }
  static get styles() {
    return u`
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
        height: 200px;
        margin: 0 auto 16px;
        display: block;
        background: url("./humidifier-1.png") no-repeat center;
        background-size: contain;
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

      .image-container {
        width: 100%;
        margin-bottom: 16px;
        text-align: center;
      }
      .image-container img {
        max-width: 200px;
        height: auto;
        border-radius: 8px;
      }
    `;
  }
  handleSliderChange(t) {
    const e = Number(t.target.value);
    this.config.entity && !this.isTargetLoading && this.handleTargetChange(e - (this.pendingTargetHumidity ?? this.hass.states[this.config.entity].attributes.target_humidity ?? 50));
  }
  _renderImage() {
    return d`<div class="device-image"></div>`;
  }
  render() {
    var a, n, s;
    if (!this.config || !this.hass || !this.config.entity)
      return d``;
    const t = this.hass.states[this.config.entity];
    if (!t)
      return d`
        <ha-card>
          <div class="card-content">
            <div class="not-found">Entity not found: ${this.config.entity}</div>
          </div>
        </ha-card>
      `;
    const e = t.attributes.current_humidity || 0, r = this.pendingTargetHumidity !== null ? this.pendingTargetHumidity : t.attributes.target_humidity || 50, i = t.state === "on";
    return d`
      <ha-card>
        <div class="card-content">
          ${this.config.show_image ? this._renderImage() : ""}
          <div class="header">
            <div class="title">${t.attributes.friendly_name || this.config.entity}</div>
            <div class="state-text" ?inactive=${!i}>${i ? "ON" : "OFF"}</div>
          </div>
          
          <div class="status">
            <div class="humidity-display">
              <span class="humidity-value">${r}</span>
              <span class="humidity-unit">%</span>
            </div>
            <div class="current-humidity">${e}%</div>
          </div>

          <div class="slider-container">
            <input
              type="range"
              min="40"
              max="80"
              step="5"
              .value=${r}
              class="slider"
              @change=${this.handleSliderChange}
              ?disabled=${!i}
            >
          </div>

          <div class="controls">
            <button 
              class="control-button"
              @click=${() => this.handleTargetChange(-5)}
              ?disabled=${!i}
            >
              -
            </button>
            <button 
              class="control-button"
              @click=${() => this.handleTargetChange(5)}
              ?disabled=${!i}
            >
              +
            </button>
          </div>

          <div class="water-level" data-state=${((a = this.hass.states[`binary_sensor.${this.config.entity.split(".")[1]}_water_shortage_fault`]) == null ? void 0 : a.state) === "on" ? "empty" : "ok"}>
            <svg viewBox="0 0 24 24">
              <path fill="currentColor" d="M12,3.77L11.25,4.61C11.25,4.61 9.97,6.06 8.68,7.94C7.39,9.82 6,12.07 6,14.23A6,6 0 0,0 12,20.23A6,6 0 0,0 18,14.23C18,12.07 16.61,9.82 15.32,7.94C14.03,6.06 12.75,4.61 12.75,4.61L12,3.77M12,6.9C12.44,7.42 12.84,7.85 13.68,9.07C14.89,10.83 16,13.07 16,14.23C16,16.45 14.22,18.23 12,18.23C9.78,18.23 8,16.45 8,14.23C8,13.07 9.11,10.83 10.32,9.07C11.16,7.85 11.56,7.42 12,6.9Z" />
            </svg>
            <span class="water-level-text">
              ${((n = this.hass.states[`binary_sensor.${this.config.entity.split(".")[1]}_water_shortage_fault`]) == null ? void 0 : n.state) === "on" ? "Tank Empty" : "Tank OK"}
            </span>
          </div>

          ${((s = this.hass.states[`binary_sensor.${this.config.entity.split(".")[1]}_water_shortage_fault`]) == null ? void 0 : s.state) === "on" ? d`
            <div class="water-warning">
              <svg viewBox="0 0 24 24">
                <path fill="currentColor" d="M13 14H11V9H13M13 18H11V16H13M1 21H23L12 2L1 21Z" />
              </svg>
              Water tank needs refilling
            </div>
          ` : ""}

          <button 
            class="power-button"
            @click=${this.handlePowerClick}
            ?inactive=${!i}
            ?loading=${this.isLoading}
            ?disabled=${this.isLoading}
          >
            ${i ? "Turn Off" : "Turn On"}
          </button>
        </div>
      </ha-card>
    `;
  }
};
c([
  l({ attribute: !1 })
], o.prototype, "hass", 2);
c([
  l()
], o.prototype, "config", 2);
c([
  l()
], o.prototype, "isLoading", 2);
c([
  l()
], o.prototype, "isTargetLoading", 2);
c([
  l()
], o.prototype, "pendingTargetHumidity", 2);
o = c([
  p("ha-mi-humidifier-card")
], o);
export {
  o as MiHumidifierCard
};
