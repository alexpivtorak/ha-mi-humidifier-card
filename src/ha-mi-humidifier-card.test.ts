import { jest } from '@jest/globals';
import { MiHumidifierCard } from './ha-mi-humidifier-card';

describe('MiHumidifierCard', () => {
  let card: MiHumidifierCard;
  let mockHass: any;

  beforeEach(() => {
    card = new MiHumidifierCard();
    mockHass = {
      states: {
        'humidifier.test_humidifier': {
          state: 'on',
          attributes: {
            target_humidity: 50,
            current_humidity: 45,
            friendly_name: 'Test Humidifier'
          }
        }
      },
      callService: jest.fn().mockResolvedValue(undefined)
    };
    card.hass = mockHass;
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
    jest.clearAllMocks();
  });

  describe('Configuration', () => {
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
  });

  describe('Power Control', () => {
    beforeEach(() => {
      card.setConfig({
        entity: 'humidifier.test_humidifier'
      });
    });

    test('should turn off when currently on', async () => {
      // @ts-ignore - accessing private method for testing
      await card.handlePowerClick();
      jest.advanceTimersByTime(100);
      
      expect(mockHass.callService).toHaveBeenCalledWith(
        'humidifier',
        'turn_off',
        expect.objectContaining({
          entity_id: 'humidifier.test_humidifier'
        })
      );
    });

    test('should turn on when currently off', async () => {
      mockHass.states['humidifier.test_humidifier'].state = 'off';
      
      // @ts-ignore - accessing private method for testing
      await card.handlePowerClick();
      jest.advanceTimersByTime(100);
      
      expect(mockHass.callService).toHaveBeenCalledWith(
        'humidifier',
        'turn_on',
        expect.objectContaining({
          entity_id: 'humidifier.test_humidifier'
        })
      );
    });
  });

  describe('Humidity Control', () => {
    beforeEach(() => {
      card.setConfig({
        entity: 'humidifier.test_humidifier'
      });
    });

    test('should handle target humidity changes within bounds', async () => {
      // @ts-ignore - accessing private method for testing
      await card.handleTargetChange(5);
      jest.advanceTimersByTime(100);
      
      expect(mockHass.callService).toHaveBeenCalledWith(
        'humidifier',
        'set_humidity',
        expect.objectContaining({
          entity_id: 'humidifier.test_humidifier',
          humidity: 55
        })
      );
    });

    test('should not exceed maximum humidity (80%)', async () => {
      mockHass.states['humidifier.test_humidifier'].attributes.target_humidity = 78;
      
      // @ts-ignore - accessing private method for testing
      await card.handleTargetChange(5);
      jest.advanceTimersByTime(100);
      
      expect(mockHass.callService).toHaveBeenCalledWith(
        'humidifier',
        'set_humidity',
        expect.objectContaining({
          humidity: 80
        })
      );
    });

    test('should not go below minimum humidity (40%)', async () => {
      mockHass.states['humidifier.test_humidifier'].attributes.target_humidity = 42;
      
      // @ts-ignore - accessing private method for testing
      await card.handleTargetChange(-5);
      jest.advanceTimersByTime(100);
      
      expect(mockHass.callService).toHaveBeenCalledWith(
        'humidifier',
        'set_humidity',
        expect.objectContaining({
          humidity: 40
        })
      );
    });

    test('should handle service call errors', async () => {
      const consoleError = jest.spyOn(console, 'error').mockImplementation(() => {});
      mockHass.callService.mockRejectedValueOnce(new Error('Service call failed'));
      
      // @ts-ignore - accessing private method for testing
      await card.handleTargetChange(5);
      jest.advanceTimersByTime(100);
      
      expect(consoleError).toHaveBeenCalledWith(
        'Failed to change target humidity:',
        expect.any(Error)
      );
      
      consoleError.mockRestore();
    });
  });

  describe('Rendering', () => {
    beforeEach(() => {
      card.setConfig({
        entity: 'humidifier.test_humidifier'
      });
    });

    test('should render empty when no config', () => {
      card.config = undefined;
      const result = card.render();
      expect(result).toBeDefined();
      expect(result.strings).toEqual(['']);
    });

    test('should render error when entity not found', () => {
      mockHass.states['humidifier.test_humidifier'] = undefined;
      const result = card.render();
      expect(result).toBeDefined();
      expect(result.strings[0]).toContain('Entity not found');
    });
  });
}); 