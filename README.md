<!-- ⚠️ This README has been generated from the file(s) "blueprint.md" ⚠️-->
[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#browser-user-data)

# ➤ Browser user data

**browser-user-data** is a Javascript library that helps you collect common and not-so-common informations about your application user.


[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#table-of-contents)

## ➤ Table of Contents

* [➤ Browser user data](#-browser-user-data)
* [➤ Available data](#-available-data)
* [➤ Installation](#-installation)
* [➤ Usage](#-usage)
* [➤ Contributors](#-contributors)
* [➤ Contributing](#-contributing)
* [➤ License](#-license)


[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#available-data)

# ➤ Available data

| Data          | Available           
| ------------- |:-------------:
| Hardware information     | :heavy_check_mark:
| Platform information      | :heavy_check_mark:      
| Referrer | :heavy_check_mark:      
| Geolocation | :heavy_check_mark:         
| Connected social media | :heavy_check_mark:    
| Geolocation without permission prompt | :construction:         
| Automatic geocoding | :construction:          


[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#installation)

## ➤ Installation

Use the package manager [npm](https://www.npmjs.com/) to install **browser-user-data**.

```bash
npm i browser-user-data --save
```

**Alternatively**, you can also import directly into your html.

```html
<script src="https://raw.githubusercontent.com/CaioRolla/browser-user-data/master/bundles/browser-user-data-1.0.7.js"></script>
```


[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#usage)

## ➤ Usage

If you are using **browser-user-data** with Typescript, you can import the package with the import sintax

```typescript
import { extractData } from 'browser-user-data';
```

The usage will be the same no matter how you installed the package:

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


[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#contributors)

## ➤ Contributors
	

| [<img alt="Caio Rolla" src="https://avatars0.githubusercontent.com/u/25801532?s=460&u=7c8427b4390269cad8de8cb27b872c5098e41ae2&v=4" width="100">](https://twitter.com/caio_rolla) |
|:--------------------------------------------------:|
| [Caio Rolla](https://twitter.com/caio_rolla)     |
| [caio.cesar.rolla@gmail.com](mailto:caio.cesar.rolla@gmail.com) |
| You don't need state management if you use global variables. :bug: |



[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#contributing)

## ➤ Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.


[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#license)

## ➤ License
[MIT](https://choosealicense.com/licenses/mit/)