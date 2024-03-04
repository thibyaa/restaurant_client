**Set Up Instructions**
1. Please clone this repository down to your own device, you will need Visual Studio Code or some form of code editor to run this react-app.
2. To install the node modules un the termnial command `npm install` or `npm i`.
3. To run this app you will need two terminals open:
    - one to run the proxy using the terminal command `npm run proxy`
    - one to start up the development server. using the terminal command `npm start`

**Project Overview**
This project uses the Just Eat Takeaway API to create a front-end that renders 10 restaurants based on the postcode inputted.

**Project Aims**
Minimum Viable Product:
- Access first 10 restaurants based on postcode input.
- Each restaurant to hold information on:
    - Name
    - Address
    - Cuisines
    - Rating

Additional features:
- Error handling for invalid postcodes
- Implementaion of `React-Router`
- Implemention of `Leaflet` to display restaurants onto a map

**Diagrams**

<img width="420" alt="Card Container" src="https://github.com/thibyaa/restaurant_client/assets/105393816/4a8b4746-607e-4305-ae58-7a158d656d08">
<img width="425" alt="Landing Container" src="https://github.com/thibyaa/restaurant_client/assets/105393816/de6786fa-8173-4308-92f6-d54ec7dde05d">
<img width="960" alt="state management diagram" src="https://github.com/thibyaa/restaurant_client/assets/105393816/aec84036-924f-4b6e-bdc2-0216da514527">

**Tech Stack**
- JavaScript
- React 
- Additional Libraries:
    - Local Cors Proxy -> Bypass CORS configuration 
    - React-leaflet -> Include map feature, improve UX.
    - React Router -> To improve UI 
