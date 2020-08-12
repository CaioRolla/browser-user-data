import { networks } from './data';
import { SocialMedia } from './types';

export const extractConnectedSocialMedias = async () => {
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

