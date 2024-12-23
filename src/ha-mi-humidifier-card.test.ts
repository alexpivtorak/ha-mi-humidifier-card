import { jest } from '@jest/globals';
import { MiHumidifierCard } from './ha-mi-humidifier-card';
import { HomeAssistant } from 'custom-card-helpers';
import { HumidifierCardConfig } from './types';

describe('MiHumidifierCard', () => {
  let card: MiHumidifierCard;
  let mockHass: HomeAssistant;
  let mockCallService: jest.Mock;
  let consoleError: ReturnType<typeof jest.spyOn>;

  beforeEach(() => {
    card = new MiHumidifierCard();
    mockCallService = jest.fn(() => Promise.resolve());
    mockHass = {
      states: {
        'humidifier.test_humidifier': {
          state: 'on',
          attributes: {
            target_humidity: 50,
            current_humidity: 45,
            friendly_name: 'Test Humidifier'
          },
          entity_id: 'humidifier.test_humidifier',
          last_changed: '2023-12-23T12:00:00Z',
          last_updated: '2023-12-23T12:00:00Z',
          context: { id: '', user_id: null, parent_id: null }
        }
      },
      callService: mockCallService
    } as unknown as HomeAssistant;
    
    card.hass = mockHass;
    jest.useFakeTimers();
    consoleError = jest.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterEach(() => {
    jest.useRealTimers();
    jest.clearAllMocks();
    consoleError.mockRestore();
  });

  describe('Configuration', () => {
    test('should throw error when no entity is configured', () => {
      expect(() => {
        card.setConfig({} as HumidifierCardConfig);
      }).toThrow('Please define an entity');
    });

    test('should accept valid config', () => {
      expect(() => {
        card.setConfig({
          type: 'custom:ha-mi-humidifier-card',
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
        type: 'custom:ha-mi-humidifier-card',
        entity: 'humidifier.test_humidifier'
      });
    });

    test('should turn off when currently on', async () => {
      const powerClick = (card as any).handlePowerClick.bind(card);
      await powerClick();
      jest.advanceTimersByTime(100);
      
      expect(mockCallService).toHaveBeenCalledWith(
        'humidifier',
        'turn_off',
        expect.objectContaining({
          entity_id: 'humidifier.test_humidifier'
        })
      );
    });

    test('should turn on when currently off', async () => {
      mockHass.states['humidifier.test_humidifier'].state = 'off';
      
      const powerClick = (card as any).handlePowerClick.bind(card);
      await powerClick();
      jest.advanceTimersByTime(100);
      
      expect(mockCallService).toHaveBeenCalledWith(
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
        type: 'custom:ha-mi-humidifier-card',
        entity: 'humidifier.test_humidifier'
      });
    });

    test('should handle target humidity changes within bounds', async () => {
      const targetChange = (card as any).handleTargetChange.bind(card);
      await targetChange(5);
      jest.advanceTimersByTime(100);
      
      expect(mockCallService).toHaveBeenCalledWith(
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
      
      const targetChange = (card as any).handleTargetChange.bind(card);
      await targetChange(5);
      jest.advanceTimersByTime(100);
      
      expect(mockCallService).toHaveBeenCalledWith(
        'humidifier',
        'set_humidity',
        expect.objectContaining({
          humidity: 80
        })
      );
    });

    test('should not go below minimum humidity (40%)', async () => {
      mockHass.states['humidifier.test_humidifier'].attributes.target_humidity = 42;
      
      const targetChange = (card as any).handleTargetChange.bind(card);
      await targetChange(-5);
      jest.advanceTimersByTime(100);
      
      expect(mockCallService).toHaveBeenCalledWith(
        'humidifier',
        'set_humidity',
        expect.objectContaining({
          humidity: 40
        })
      );
    });

    test('should handle service call errors', async () => {
      const error = new Error('Service call failed');
      mockCallService.mockImplementationOnce(() => Promise.reject(error));
      
      const targetChange = (card as any).handleTargetChange.bind(card);
      await targetChange(5);
      jest.advanceTimersByTime(100);
      await Promise.resolve();
      
      expect(consoleError).toHaveBeenCalledWith(
        'Failed to change target humidity:',
        error
      );
    });
  });
}); 