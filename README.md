# meteor-env-load

`meteor add poetic:env-load`

This package will prevent your app from starting when environment variables are not defined, this way you don't have to worry about all of those `process.env.VAR_NAME` references in your Meteor app.

### Quick Start

  - Install the env-load package itself into your Meteor application
  - Place the following snippet into any file in `/server` such as `/server/env-load.js` or within a `Meteor.isServer()` block:
    ```Javascript
    GlobalAssets = Assets;
    ```

  - Add `private/environment.json`, containing something like:
  ```JSON
  {
    "SECRET_KEY": true,
    "OPTIONAL_KEY": false
  }
  ```

### `private/environment.json`

The keys in this file represent the environment variables used in various places within your Meteor app.

For example, an `environment.json` with the contents of:

```JSON
{
  "SECRET_KEY": true
}
```

means that you are using `process.env.SECRET_KEY` within your app and it is required, so if it is not set, your app will not start. You can use a value of `false` to indicate that an environment variable is optional so that your app will still start up without it. This is useful for documenting variables that may only be relevant to development, testing, or a different deployment environment.

### Other Notes

Using `GlobalAssets = Assets` is neccessary due to the fact that Assets.getText within a Meteor package is limited to that package's assets. By assigning an app's Assets to GlobalAssets, we then have access from within our Meteor package.

### Running Tests

TODO
