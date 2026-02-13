# Node.js image download
FROM node:14

# Create service directory
WORKDIR /usr/src/service

# Copy service code into service directory
COPY . .

# Install dependencies
RUN npm install

# Launch de service
CMD node index.js