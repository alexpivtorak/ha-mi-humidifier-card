import { LitElement } from 'lit';
import { HomeAssistant } from 'custom-card-helpers';
import { HumidifierCardConfig } from './types';
declare global {
    interface Window {
        customCards: Array<{
            type: string;
            name: string;
            description: string;
            preview?: boolean;
        }>;
    }
}
export declare class MiHumidifierCard extends LitElement {
    hass: HomeAssistant;
    config: HumidifierCardConfig;
    private isLoading;
    private isTargetLoading;
    private pendingTargetHumidity;
    private debounceTimeout;
    private targetDebounceTimeout;
    static getStubConfig(): HumidifierCardConfig;
    setConfig(config: HumidifierCardConfig): void;
    private handlePowerClick;
    private handleTargetChange;
    static get styles(): import("lit").CSSResult;
    private handleSliderChange;
    private _renderImage;
    protected render(): import("lit-html").TemplateResult<1>;
}
