![CF](http://i.imgur.com/7v5ASc8.png) Hue-out-there
==============================================

## 401 JavaScript N12 - Midterm Project
[![Build Status](https://dev.azure.com/consultations/hue_out_there/_apis/build/status/hue_out_there-clone?branchName=development)](https://dev.azure.com/consultations/hue_out_there/_build/latest?definitionId=5&branchName=development)

### Author: Sarkis Aghazarian, Alistair Blake, Jessica Elliott, Erik Johnson, Karl Polintan, Anthony Triplett

### Links and Resources
* [Azure - Repo](https://dev.azure.com/consultations/hue_out_there/_git/hue_out_there?path=%2FREADME.md&version=GBmaster)
___
## Web Application
This application turns on/off Hue lights by either a single light or all lights.

## Languages and Tools

### languages
* Javascript

### tools
* node.js
* bcrypt
* cors
* debug
* dotenv
* eslint-plugin-jest
* express
* jest
* jsonwebtoken
* mongodb-memory-server
* mongoose
* mongoose-schema-jsonschema
* morgan
* node-hue-api
* nodemon
* require-directory
* supertest

___

## Getting Started

Clone this repository to your local machine.
```
$ git clone https://github.com/YourProject
```
Once downloaded, you can either use the dotnet CLI utilities or Visual Studio 2017 (or greater) to build the web application.
```
cd YourRepo/YourProject
`npm i`
```
Starting Web App
```
cd YourRepo/YourProject
npm run start
* Separate terminal tab
npm run dbOn
```
On separate terminal tab, you can run the following commands


### Sign up
```
http post :3000/signup username=<username> password=<password>
```
### Sign in
```
http post :3000/signin -a <username>:<password>
```

### Turn Single Light On
```
http get :3000/light/<light number>/on
```
### Turn Single Light Off
```
http get :3000/light/<light number>/on
```
### Turn All Lights On
```
http get :3000/lightgroup/on
```

### Turn All Lights Off
```
http get :3000/lightgroup/off
```
___
## Usage Notes and Examples
* As a user, from my computer, I can access all of my hue lights and change the hue light settings from one centralized place.
* As a user, I can login to my profile so that my settings are easily accessible.
* As a user, I can change settings so that my hue lights can have on-the-fly changes done to them.
* As a user, I can set up pre-made scenes so that I can manipulate groups of lights at any time.
* As a developer, I can test to see what lights are connected so that I know how many lights my code can affect.
* As a developer, I can test to see if I login successfully so that I can test if my hashing and authorization is running correctly.
* As a developer, I can hash the user’s data so that they are protected from malicious software.
* As a developer, I can have modular functions so that my code is not repetitive and is clean when it comes to being read by another developer.
* As a developer, I can log errors so that I know of any potential bugs or edge cases.
___
### Exported Values and Methods
* PORT=`3000`
* MONGODB_URI=`mongodb://localhost/testdb`
* SECRET= `<Choose your own secret>`
___
### Modules

#### `app.js`
* `server` -> has all server paths
* `start` -> starts server

#### `bridge.js`
* `lightOnOff` -> Turns a single light on/off
* `lightGroup` -> Turns all lights on/off

#### `router.js`
* `/signup` -> Make a new profile
* `/signin` -> Sign in to profile
* `/light/:id/on` -> Turns on specified light
* `/light/:id/off` -> Turns off specified light
* `/lightgroup/on` -> Turns on all lights
* `/lightgroup/off` -> Turns off all lights

#### `middleware.js`
* `_authBasic` -> deconstructing buffer and passing it to `_authentication`
* `_authentication` -> checks if user exist

#### `user-model.js`

##### mongoDB 
* `username` -> An unique user profile name
* `password` -> A password for profile
 
##### methods
* `authenticateBasic` -> Check user exists and compares password to saved password
* `comparePassword` -> Checks password against stored password
* `generateToken` -> Creates new token

#### `404.js`
* sends error if parameters fail

#### `errors`
* sends error if path is incorrect 



#### Tests
 To run tests, please use the `npm run test` command.
 
### Necessary hardware: 
* Bridge available to the network.
* Light bulbs connected to the bridge.
