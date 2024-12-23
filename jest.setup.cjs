// Mock customElements
window.customElements = {
  define: jest.fn(),
  get: jest.fn(),
  whenDefined: jest.fn()
};

// Mock requestAnimationFrame
global.requestAnimationFrame = (cb) => setTimeout(cb, 0);
global.cancelAnimationFrame = (id) => clearTimeout(id);

// Mock ResizeObserver
global.ResizeObserver = class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
};

// Mock window.ShadowRoot
if (!window.ShadowRoot) {
  window.ShadowRoot = function() {};
}

// Mock HTMLElement
if (!window.HTMLElement) {
  window.HTMLElement = class HTMLElement {};
} 