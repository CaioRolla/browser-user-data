
browserUserData
  .extractData()
  .then(data => document.getElementById('data').innerHTML = JSON.stringify(data))
