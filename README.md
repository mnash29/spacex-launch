# spacex-launch-bay

Application using GraphQL, Express, React, Apollo, and the SpaceX API to build a dashboard detailing all SpaceX launch information.

## Environment Setup
```sh
git clone https://github.com/mnash29/spacex-launch.git

# Install server dependecies
cd spacex-launch/
npm install

# Install client dependencies
cd client/
npm install

# Start server and client (:3000 and :5000)
npm run dev

# Server only (:3000)
npm run server

# Client only (:5000)
npm run client

# Build for prod into ./public
cd client
npm run build

# Graphql - http://localhost:5000/graphql
```