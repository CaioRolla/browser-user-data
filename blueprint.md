# Browser user data

**browser-user-data** is a Javascript library that helps you collect common and not-so-common informations about your application user.


# Available data

| Data          | Available           
| ------------- |:-------------:
| Hardware information     | :heavy_check_mark:
| Platform information      | :heavy_check_mark:      
| Referrer | :heavy_check_mark:      
| Geolocation | :heavy_check_mark:         
| Connected social media | :heavy_check_mark:    
| Geolocation without permission prompt | :construction:         
| Automatic geocoding | :construction:          

## Installation

Use the package manager [npm](https://www.npmjs.com/) to install **browser-user-data**.

```bash
npm i browser-user-data --save
```


## Usage

If you are using **browser-user-data** with Typescript, you can import the package with the import sintax

```typescript
import * as browserUserData from 'browser-user-data';
```

The usage will be like this:

```javascript
browserUserData
  .extractData()
  .then(data => console.log(data))
```

The above method will for permission to collect the user Geolocation. If you don't need, just pass the **extractLocation** atribute of the configuration object has false:

```javascript
browserUserData
  .extractData({
    extractLocation: false
  })
  .then(data => console.log(data))
```

This is the complete output:

```json
{
  "connectedSocialMedias": [
    "Google",
    "Facebook",
    "Twitter"
  ],
  "location": {
    "latitude": -59.86851,
    "longitude": -144.17642
  },
  "referrer": "https://www.npmjs.com/package/browser-user-data",
  "platform": {
    "name": "Chrome",
    "version": "84.0.4147.125",
    "layout": "Blink",
    "os": {
      "architecture": 64,
      "family": "Windows",
      "version": "10"
    },
    "description": "Chrome 84.0.4147.125 on Windows 10 64-bit",
    "product": null,
    "manufacturer": null
  },
  "hardware": {
    "vendor": "Google Inc.",
    "renderer": "ANGLE (Intel(R) HD Graphics 630 Direct3D11 vs_5_0 ps_5_0)",
    "screenWidth": 2560,
    "screenHeight": 1080,
    "battery": {
      "level": 1,
      "charging": true
    }
  }
}
```

{{ template:contributors }}

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](https://choosealicense.com/licenses/mit/)