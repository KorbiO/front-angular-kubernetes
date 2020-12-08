FROM node:12.7-alpine AS build
WORKDIR /app
COPY  package.json ./
RUN npm install 
COPY . .
RUN npm run ng build --prod

FROM nginx:1.17.1-alpine AS prod-stage
COPY --from=build /app/dist/client-side /usr/share/nginx/html
EXPOSE 80
CMD [ "nginx","-g","daemon off;" ]


