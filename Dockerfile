FROM node:18

# Create app directory
WORKDIR /usr/src/adoption-microservice

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

# Install app dependencies
RUN npm install

# Bundle app source
COPY . .

# Copy the .env and .env.development files
COPY .env ./

# Creates a "dist" folder with the production build
RUN npm run build

# Expose the port on which the app will run
# EXPOSE 3000

RUN npx prisma generate

# RUN npm run start:dev

# Start the server using the production build
CMD ["npm", "run", "start"]