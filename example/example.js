
browserUserData
  .extractData()
  .then(data => document.getElementById('data').innerHTML = JSON.stringify(data))

// browserUserData
//   .extractConnectedSocialMedias()
//   .then(socialMedias => document.getElementById('social-medias').innerHTML = JSON.stringify(socialMedias))


// browserUserData.extractLocation()
//   .then(loc => document.getElementById('location').innerHTML = JSON.stringify(loc))