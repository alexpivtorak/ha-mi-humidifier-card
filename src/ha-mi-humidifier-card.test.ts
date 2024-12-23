import { jest } from '@jest/globals';
import { MiHumidifierCard } from './ha-mi-humidifier-card';

describe('MiHumidifierCard', () => {
  let card: MiHumidifierCard;

  beforeEach(() => {
    card = new MiHumidifierCard();
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  test('should throw error when no entity is configured', () => {
    expect(() => {
      card.setConfig({});
    }).toThrow('Please define an entity');
  });

  test('should accept valid config', () => {
    expect(() => {
      card.setConfig({
        entity: 'humidifier.test_humidifier'
      });
    }).not.toThrow();
  });

  test('should return stub config', () => {
    const stubConfig = MiHumidifierCard.getStubConfig();
    expect(stubConfig).toHaveProperty('entity');
    expect(typeof stubConfig.entity).toBe('string');
  });

  test('should handle target humidity changes within bounds', async () => {
    card.setConfig({
      entity: 'humidifier.test_humidifier'
    });
    
    // Mock hass object
    card.hass = {
      states: {
        'humidifier.test_humidifier': {
          state: 'on',
          attributes: {
            target_humidity: 50,
            current_humidity: 45
          }
        }
      },
      callService: jest.fn()
    } as any;

    // @ts-ignore - accessing private method for testing
    card.handleTargetChange(5);
    
    // Fast-forward timers to handle debounce
    jest.advanceTimersByTime(100);
    
    expect(card.hass.callService).toHaveBeenCalledWith(
      'humidifier',
      'set_humidity',
      expect.objectContaining({
        humidity: 55
      })
    );
  });
}); 