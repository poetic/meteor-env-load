if (Meteor.isServer) {
  EnvLoad = {
    loadSettings() {
      var envFile = 'environment.json';

      return new Promise((resolve, reject) => {
        return GlobalAssets.getText(envFile, (err, data) => {
          if (err) {
            reject(err);
          } else {
            resolve(JSON.parse(data));
          }
        });
      });
    },

    status() {
      return new Promise(resolve => {
        return this.loadSettings().then(settings => {
          var keys = Object.keys(settings);

          var missingKeys = keys.filter(key => {
            if (settings[key] && !process.env[key]) {
              return key;
            }
          });

          if (missingKeys.length > 0) { resolve(false); }

          resolve(true);
        }).catch(this.error.bind(this, '#loadSettings'));
      });
    },

    error(method, err) {
      console.log(`${method}: ${err}`);
      process.exit(1);
    }
  }

  Meteor.startup(() => {
    return EnvLoad.status().then(status => {
      if (!status) {
        console.log('Missing one or more environment variables.');
        process.exit(1);
      }
    });
  });
}
