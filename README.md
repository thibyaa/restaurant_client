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

**Tech Stack**
- JavaScript
- React 
- Additional Libraries:
    - Local Cors Proxy -> Bypass CORS configuration 
    - React-leaflet -> Include map feature, improve UX.
    - React Router -> To improve UI 