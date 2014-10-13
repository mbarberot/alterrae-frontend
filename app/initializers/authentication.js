import SistearthAuthenticator from '../authenticators/sistearth';

export default {
  name: 'authentication',
  before: 'simple-auth',
  initialize: function(container) {
    container.register('authenticator:sistearth', SistearthAuthenticator);
  }
};