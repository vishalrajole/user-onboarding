# User Onboarding flow

- This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
- Tech Stack used: React, React Router, Material UI (for demo purpose only)
- Internationalization & Localization is implemented with React-intl and Transifex
- Unit tests are covered with Jest and react-testing-library

# Steps for local setup

- Clone repository with `git clone https://github.com/vishalrajole/user-onboarding.git`
- Run `yarn` to install the dependencies
- Run `yarn start` to locally start the project and visit `http://localhost:3000`
- Run `yarn test` to execute unit test cases
- Run `yarn build` for production build

# Demo

- App is deployed with Vercel on https://user-onboarding-indol.vercel.app/

## Make sure you have .transifexrc file created with API token at root/home folder with following content

[https://www.transifex.com]
api_hostname = https://api.transifex.com
hostname = https://www.transifex.com
password = YOUR_TRANSIFEX_TOKEN
username = api
