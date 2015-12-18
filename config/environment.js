/* jshint node: true */

module.exports = function (environment) {
  var ENV = {
    modulePrefix: 'sistearth-frontend',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    contentSecurityPolicy: {
      'default-src': "'none'",
      'script-src': "'self' 'unsafe-inline' 'unsafe-eval'",
      'font-src': "'self'",
      'connect-src': "'self' https://api.sistearth.com",
      'img-src': "'self'",
      'style-src': "'self' 'unsafe-inline'",
      'report-uri': "http://localhost:4200"
    },
    moment: {
      outputFormat: 'LL'
    },
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
    ENV['simple-auth'] = {
      authorizer: 'simple-auth-authorizer:token',
      crossOriginWhitelist: ['https://api.sistearth.com'],
      routeAfterAuthentication: 'game'
    };

    ENV['simple-auth-token'] = {
      serverTokenEndpoint: 'https://api.sistearth.com/api/login',
      identificationField: 'username',
      passwordField: 'password'
    };
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';

    ENV['simple-auth'] = {
      store: 'simple-auth-session-store:ephemeral'
    }
  }

  if (environment === 'production') {
    ENV['simple-auth'] = {
      authorizer: 'simple-auth-authorizer:token',
      crossOriginWhitelist: ['https://api.sistearth.com'],
      routeAfterAuthentication: 'game'
    };

    ENV['simple-auth-token'] = {
      serverTokenEndpoint: 'https://api.sistearth.com/api/login',
      identificationField: 'username',
      passwordField: 'password'
    };
  }

  return ENV;
};
