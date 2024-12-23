import { LitElement } from 'lit';
import { HomeAssistant } from 'custom-card-helpers';
declare global {
    interface Window {
        customCards: Array<{
            type: string;
            name: string;
            description: string;
        }>;
    }
}
export declare class MiHumidifierCard extends LitElement {
    hass: HomeAssistant;
    config: any;
    private isLoading;
    private isTargetLoading;
    private pendingTargetHumidity;
    private debounceTimeout;
    private targetDebounceTimeout;
    static getStubConfig(): {
        entity: string;
    };
    setConfig(config: any): void;
    private handlePowerClick;
    private handleTargetChange;
    static get styles(): any;
    private handleSliderChange;
    protected render(): import("lit-html").TemplateResult<1>;
}
