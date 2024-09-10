To run:

Start the backend
1. Open one terminal and navigate to the root directory
2. Type npm run start
3. The server will run on port 3000

Start the frontend
1. Open another terminal and navigate to /frontend directory
2. Type npm start
3. The server will run on port 8000
4. Navigate to http://localhost:8000/

This is a simple web app that uses Google Maps to display certain location markers that are retrieved from the backend, using Nest and SQLite.
Clicking a marker's title in the left column should center the map to that marker, but that functionality is not present as is. I was able to pipe the selected marker's data into the Map component but could not get it to re-render with the new data coords.

Another sticking point was accessing the API key for the Authorization token. I found that I had to install @nestjs/config to access the .env file.

I used TypeScript to enforce the props going into the components and also used FontAwesome for icons.

This was a fun project to implement and I thank you for the opportunity to demonstrate my React development skills. Thank you for your consideration.

Sean Capelle

