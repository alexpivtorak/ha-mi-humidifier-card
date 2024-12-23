# Home Assistant Mi Humidifier Card

A custom card for Home Assistant that provides a user interface for controlling Xiaomi Mi Humidifier devices.

## Development

### Prerequisites

* [Node.js](https://nodejs.org) (v14 or later)
* [Home Assistant](https://www.home-assistant.io/) instance with Mi Humidifier integration set up

### Setup

1. Clone this repository
2. Run `npm install` to install dependencies
3. Run `npm start` to start the development server
4. Add the following to your Home Assistant configuration (configuration.yaml or through UI):

```yaml
lovelace:
  resources:
    - url: http://localhost:5000/ha-mi-humidifier-card.js
      type: module
```

### Building

Run `npm run build` to create a production build.

## Usage

Add the card to your dashboard through the UI editor or YAML configuration:

```yaml
type: custom:ha-mi-humidifier-card
entity: fan.mi_humidifier
```

## License

This project is licensed under the MIT License.
