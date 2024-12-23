// Mock customElements
window.customElements = {
  define: jest.fn(),
  get: jest.fn(),
  whenDefined: jest.fn()
}; 