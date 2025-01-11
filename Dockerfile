FROM node:20-alpine
WORKDIR /usr/src/app/retips

RUN npm install -g next

# COPY package.json yarn.lock ./
# RUN npm install

COPY . .

CMD [ "npm", "run", "dev" ]