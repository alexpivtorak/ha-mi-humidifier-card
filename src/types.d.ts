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

interface HumidifierCardConfig {
  type: string;
  entity: string;
  name?: string;
  show_name?: boolean;
  show_state?: boolean;
  show_target?: boolean;
  show_current?: boolean;
  show_water_level?: boolean;
}

interface HumidifierAttributes {
  friendly_name?: string;
  target_humidity?: number;
  current_humidity?: number;
  mode?: string;
  water_level?: number;
  water_shortage_fault?: boolean;
}

interface HumidifierEntity {
  state: string;
  attributes: HumidifierAttributes;
  entity_id: string;
  last_changed: string;
  last_updated: string;
}

// Image imports
declare module '*.png' {
  const value: string;
  export default value;
}

declare module '*.jpg' {
  const value: string;
  export default value;
}

declare module '*.gif' {
  const value: string;
  export default value;
}

declare module '*.svg' {
  const value: string;
  export default value;
}

export {
  HumidifierCardConfig,
  HumidifierAttributes,
  HumidifierEntity
};
