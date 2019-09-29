# Github App
## This app it's created using Expo
## Libraries/Tools used in the project
- React Native / Expo
- NativeBase Components
- React Navigation
- Redux
- Apollo Graphql Client
- ESlint AirBnb Style

## Required steps to start the App: 
### 1 ) In order to start the app you need to have installed expo-cli globally on your machine: 
### `yarn global add expo-cli` 

### Expo client on your
Android: https://play.google.com/store/apps/details?id=host.exp.exponent

iPhone: 
https://apps.apple.com/us/app/expo-client/id982107779

### 2) `.env` file on Root Directory of the project which should contain these Environment Variables
`API_URL=https://api.github.com/graphql`

`GITHUB_API_TOKEN=token `

### To generate the `GITHUB_API_TOKEN` go to the link below: 
- https://github.com/settings/tokens
### Click the button Generate new token, on the Scope Permission, please select `user` and click on the button Generate token.
### Get the token save into the `.env` file as `GITHUB_API_TOKEN`


### 3) Final step it's to install all the dependencies by going to the Root Directory of the project and run the commands below:
### `yarn install`
### `yarn start`
### New tab on your browser will open instantly,scan the QR Code using your phone camera, and open it using the Expo Client.
