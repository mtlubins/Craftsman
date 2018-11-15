// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
import 'zone.js/dist/zone-error';
export const environment = {
  production: false,
  endpoints: {
    apiPath: 'http://localhost:3000',
    craftsmanPath: '/craftsmen',
    userPath: '/user',
    userProfilePath: '/me',
    loginPath: '/auth/login'
  },
  routerPaths: {
    userEnrollment: 'user',
    craftsmanEnrollment: 'craftsman',
    search: 'search-craftsman'
  }
};
