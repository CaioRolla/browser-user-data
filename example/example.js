
browserUserData
  .extractConnectedSocialMedias()
  .then(socialMedias => document.getElementById('social-medias').innerHTML = JSON.stringify(socialMedias))