<div align="center">
  <p>
  <a href="https://github.com/RWS-NL/air-node-packages"><img src="https://raw.githubusercontent.com/RWS-NL/air-node-packages/master/packages/webcomponents/src/Logo/logo.svg?sanitize=true" height="200" alt="logo"/></a>
  </p>

  <p>
<h1> Rijkswaterstaat jestscreenshot </h1>
<h3> Creates screenshots with Puppeteer when a Jest test fails and optionally upload it to Slack </h3>
  </p>

</div>

---

**Project Status**

[![GitHub](https://img.shields.io/github/license/RWS-NL/air-node-packages?logo=github&style=flat-square)](https://github.com/RWS-NL/air-node-packages/blob/master/LICENSE.md)

**Bundle Sizes**

[![npm bundle size](https://img.shields.io/bundlephobia/min/@rws-air/jestscreenshot?label=jestscreenshot%20-%20minified&logo=webpack&style=flat-square)](https://bundlephobia.com/result?p=@rws-air/jestscreenshot)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/@rws-air/jestscreenshot?label=jestscreenshot%20-%20minzipped&logo=webpack&style=flat-square)](https://bundlephobia.com/result?p=@rws-air/jestscreenshot)

**Versions**

[![npm](https://img.shields.io/npm/v/@rws-air/jestscreenshot?color=crimson&label=jestscreenshot%20version&logo=npm&style=flat-square)](https://www.npmjs.com/package/@rws-air/jestscreenshot)

**Our Badges**

[![website](https://img.shields.io/badge/RWS-Approved-yellow.svg?longCache=true&style=flat-square&logo=gov.uk&logoColor=white&link=https://www.rijkswaterstaat.nl&colorA=000000&colorB=154273)](https://www.rijkswaterstaat.nl)
[![slack](https://img.shields.io/badge/Slack-Powered-green.svg?longCache=true&style=flat-square&logo=slack&logoColor=white&link=https://www.slack.com&colorA=000000&colorB=56B68B)](https://www.slack.com)
[![trello](https://img.shields.io/badge/Trello-Managed-blue.svg?longCache=true&style=flat-square&logo=trello&logoColor=white&link=https://www.slack.com&colorA=000000&colorB=0079BF)](https://trello.com/)
[![Pivotal Tracked](https://img.shields.io/badge/Pivotal-Tracked-blue.svg?longCache=true&style=flat-square&link=https://www.pivotaltracker.com/n/projects/1915901&colorA=000000&colorB=ED7D00&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAAAXNSR0IArs4c6QAAAn5JREFUKBVNUk1IVFEUPue+lzKpNYQQtGqcbCdCuspSkzYtckjSIEEao9q4CVRcjKlo+V/kooXBTFNCNpqhi2hjVuIiyjJrYzSRBVGg9INazrx7T98bGejCu5x7z3fO+b7vXab/VnV7LFucPxeNMceJyZ9KCcWJeSrLq67daapbT8M5HVS33i7TRkeEZDcLzwnTvGJiESki4RKcv1qKguOdwVm3JlV4MhQp14YeE8kzW9nBAaf/pxFqJbaGfD0Ln06FbvkTRiLMUqIUl7vF7NLTyfVFIVqe6DpTwch+bC4YIZFaUBzP63tbvdxScPR5vHXmbv76DEbtyfZahVwViraJ6OZC+VxSl7yf79LYZiknafQoCWVYll2jtRNDk5fd1oXaVc5aQHxFEekApMyedR5kgGrM/RxtwszqBgDT0N2c0sQyd7O74T1Uz4FNpS0C91geJkl+ocEjFwQjNHsyez2bjv6rnQWcP5DHbndzkDIPWedg3JZBeX2LS8qi0wDlobTAJjuxyQqNZR6QJdnQI19aDuyDaagjslEYx4gi9yCaOrDvR/giubEWUySvEJeB2g43byjZxiTFwMdtYZ7ETeP50JBfEsOlvNVxEJNGDdEhZYOFUdBPFJWAg3EHLaV6lDdn1yA0rqxIzvDe7bnFpKxjvv5396BlCthM0Vzp610cjXrexF5bvuto/M2zk6+mHkDVpegRccw0M80QZdRPXK5ddvU4kmhQzB2NdpPXER0GzVJL2RVjnXVPU4UujROhcAW6hcE/F3bNCrumwBbhYrA/DMe/w8n68a7gk9S9u6VXfe9kzo/fq43oFsCdH79K4H8cTCYtO2tgrL1mLY39BzRkHFrrWeoEAAAAAElFTkSuQmCC)](https://www.pivotaltracker.com/n/projects/1915901)
[![Sketch Designed](https://img.shields.io/badge/Sketch-Designed-blue.svg?longCache=true&style=flat-square&link=https://www.sketchapp.com&colorA=000000&colorB=F17100&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAAAXNSR0IArs4c6QAAAV1JREFUKBWlUb8vQ0Ec/1z7qtWmNYlgKTF0aQ0YaxcRu1HCLGL20tEm/gJ/ApGwGawYaGISmg4SbC3tq9e+8/3ceQbvdfK93L3PfX5873JPIab0dWYWQWbeSAnvTi15T39tKiT0KZYx5VwgrUahZKTWrOSfAVpGT3fx0l9R67iikOCib5BFgHM4KqsZUlVgYtNOwYYTjR7jDYNoSheNHNuooAxM77KfLcGG4xH00Cul9An2pVPNuGbmgOKhgZGlsQM8P1o6Adfxmih9vdt9pveBZHM7kiEx6ATwHqw0Mo6SeZxWDfcSLguBvNw0rtp1gAeIp15wUeHNkV/FQmoMbxT67WiMHDV66KXDBNUi/EIRlWQO3U7kjwHkqNFD72+QQG3hVa5RDdoY+C0ytojJUaMn5M2J4Sa3h9v0JDa8hjz8TxGToxZyQ7+fB3D9YwScxEONcYJ3hMuuzDjtX9w3aVN9Whe7I0sAAAAASUVORK5CYII=)](https://www.sketchapp.com)
[![Zeplin Based](https://img.shields.io/badge/Zeplin-Based-blue.svg?longCache=true&style=flat-square&link=https://app.zeplin.io/project/587661de593c722607342d7b&colorA=000000&colorB=FEBD12&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAOCAYAAAAi2ky3AAAAAXNSR0IArs4c6QAAAjBJREFUKBWtUU1rE1EUPfe9yUyajza2TRsq2EVswQqK6N6FiOJGBbeuq+hfKLhw48qFVBRd6A8QxEVFEFy3qLhQUREqBa1JbU0ymXzMzLvXN60fsRay8cJ9vDfvnDPnnQv0qcal/HRtNnu8Dwy0E8C/kBsT0JTtSJPpZMeHPobpetk9mXKgKEZKfNpX+9TLdXoPv/a50pGNZvX5Rv4EODI0h3Iw40IfBLNCrIBQQ16OvINnrtH+2r2Et6MjWS4UzGu+pffgDFfJU3kPiFwgTgHSQyEBVGuOjlau/uNI3hYmUecFtUvNyNcBoG3JejuMmdvcMBVJR6t01hr6W0iWiiV0whfoZEYoysD4EUgnxm0pEQnZN1WjOHCyAlWQjoFUgifJ9eavwrt7D4Hj89wIZpU3mEFkXdjSwykxK61uHKFrvtOgTcL2ljtuxYiXGw2tzI0E68j96d3dbvQYgnHHswJWRIiF69yJ1+ByTaUpI2lybMhJGUFcaSXtW865wdut1eTzZnLhnfJh1uZBasyMx1W4EumfLJttO4Z9FIjswNbbMLat2Iqj6XTuZvAqEUnq9wjkWflp/Ll7LFy2uXg2GEvmiAE/BFsx7horhi9a6LrjqEfpef/DlsTW2jMO8ZwJt6WH9UJ7qVE1lbDILClFUPat7zWpBWiUssXRh8G3talekWT/R0hwBTSwqE69aW4HNS9mD7CiTt4dWvQr65PIqM1ctuP6noPLoxOJWF/g/wD8AHyJ+Mm/jBDkAAAAAElFTkSuQmCC)](https://app.zeplin.io/project/587661de593c722607342d7b)

---

## Installation

Install with [yarn](https://yarnpkg.com) or [npm](https://www.npmjs.com/):

```sh
yarn add -D @rws-air/jestscreenshot @types/jest-environment-puppeteer jest-circus jest-environment-puppeteer
```

## Usage

```js
const JestScreenshot = require('@rws-air/jestscreenshot');
```

## About automated Slack uploading

This library supports uploading your screenshots to Slack by providing the `SLACK_WEBTOKEN` environment variable, or, through the `slackToken` option. You will also nede to provide the Slack Channel ID(s) through the option `slackChannels` and setting `slackUpload` option to `true`.

## Example

**_Please note that you cannot use ES module imports in the `jest-enviroment.ts` file. Jest does not support them._**

```js
// jest.config.js

module.exports = {
  testRunner: 'jest-circus/runner',
  testEnvironment: '<rootDir>/__tests__/jest-environment.js',

  testMatch: ['<rootDir>/__tests__/index.test.ts'],

  globalSetup: 'jest-environment-puppeteer/setup',
  globalTeardown: 'jest-environment-puppeteer/teardown',
  setupFilesAfterEnv: ['expect-puppeteer', '<rootDir>/__tests__/jest-framework.ts']
};
```

```ts
// jest-framework.ts

jest.retryTimes(2);
```

```ts
// jest-environment.ts

/* eslint-disable @typescript-eslint/no-var-requires, @typescript-eslint/no-require-imports, @typescript-eslint/explicit-member-accessibility */
const PuppeteerEnvironment = require('jest-environment-puppeteer');
const JestScreenshot = require('@rws-air/jestscreenshot');
require('jest-circus');

const retryAttempts = process.env.RETRY_ATTEMPTS || 2;

// @ts-ignore
class CustomEnvironment extends PuppeteerEnvironment {
  async setup() {
    await super.setup();

    if (!process.env.CI) await this.localSetup();
  }

  async teardown() {
    // @ts-ignore
    await this.global.page.waitFor(2000);
    await super.teardown();
  }

  async handleTestEvent(event, state) {
    if (event.name === 'test_fn_failure') {
      if (state.currentlyRunningTest.invocations > retryAttempts) {
        const testName = state.currentlyRunningTest.name;
        const jestScreenshot = new JestScreenshot({
          page: this.global.page,
          dirName: __dirname,
          testName,
          slackChannels: ['ChannelID'],
          slackUpload: true
        });

        await jestScreenshot.setup();
      }
    }
  }
}

module.exports = CustomEnvironment;
```

## API Documentation

Check out [the docs on github pages](https://rws-nl.github.io/air-node-packages/modules/_rws_air_jestscreenshot.html)
