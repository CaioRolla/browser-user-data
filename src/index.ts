import { networks } from './data';
import { SocialMedia, UserLocation, UserData, Config, UserPlatform, UserHardware } from './types';

import * as platform from 'platform';

const extractConnectedSocialMedias = async () => {
  const networlPromises = networks.map(network => {
    const imgEl = document.createElement('img');
    imgEl.src = network.url;
    return new Promise<SocialMedia | null>((resolve, reject) => {
      imgEl.onload = () => {
        resolve(network.name)
      }
      imgEl.onerror = () => {
        resolve(null)
      }
    })
  });

  const connectedNetworksNames = await Promise.all(networlPromises);

  return connectedNetworksNames.filter(networkName => !!networkName) as SocialMedia[];
}

const extractLocation = async () => {
  if (navigator.geolocation) {

    return new Promise<UserLocation>((resolve, reject) => {

      navigator.geolocation.getCurrentPosition((position) => {

        // const { latitude, longitude } = position.coords;

        // fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=`)
        //   .then(response => resolve(response.json()));

        resolve({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        });

      }, reject)

    });

  }
}

const extractReferrer = async () => {
  return document.referrer;
}

const extractPlatform = async (): Promise<Partial<UserPlatform>> => {
  return {

    name: platform.name,
    version: platform.version,
    layout: platform.layout,
    os: platform.os ? {
      architecture: platform.os.architecture,
      family: platform.os.family,
      version: platform.os.version
    } : undefined,
    description: platform.description,
    product: platform.product,
    manufacturer: platform.manufacturer

  };
}

const extractHardwareInfo = async (): Promise<Partial<UserHardware>> => {
  const canvas = document.createElement('canvas');
  const gl = canvas.getContext('experimental-webgl');

  const anyNavigator = navigator as any;

  const battery = anyNavigator['getBattery'] ?
    await anyNavigator.getBattery() :
    null;

  return {
    vendor: getUnmaskedInfo(gl).vendor,
    renderer: getUnmaskedInfo(gl).renderer,
    screenWidth: screen.width,
    screenHeight: screen.height,
    battery: battery ? {
      level: battery.level,
      charging: battery.charging
    } : undefined
  }

  function getUnmaskedInfo(gl: any) {
    var unMaskedInfo = {
      renderer: '',
      vendor: ''
    };

    var dbgRenderInfo = gl.getExtension('WEBGL_debug_renderer_info');
    if (!!dbgRenderInfo) {
      unMaskedInfo.renderer = gl.getParameter(dbgRenderInfo.UNMASKED_RENDERER_WEBGL);
      unMaskedInfo.vendor = gl.getParameter(dbgRenderInfo.UNMASKED_VENDOR_WEBGL);
      // unMaskedInfo.display = gl.getParameter(dbgRenderInfo.UNMAKES);
    }

    return unMaskedInfo;
  }

}

export const extractData = async (config: Config = {
  extractLocation: true
}): Promise<UserData> => {
  return {
    connectedSocialMedias: await extractConnectedSocialMedias(),
    location: config.extractLocation ? await extractLocation().catch(() => undefined) : undefined,
    referrer: await extractReferrer(),
    platform: await extractPlatform(),
    hardware: await extractHardwareInfo()
  };
}
