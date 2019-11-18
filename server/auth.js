var GoogleAuth;
function initClient() {
  gapi.client.init({
    'apiKey': 'apiKey',
    'clientId': 'clientId',
    'scope': 'scope',
    'discoveryDocs': ['discoveryDocs']
  }).then(function () {
    GoogleAuth = gapi.auth2.getAuthInstance();
    GoogleAuth.isSignedIn.listen(updateSigninStatus);
  });
}