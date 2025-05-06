# Step 1: Build Angular app
FROM node:20-alpine as build
WORKDIR /app
COPY ./frontend ./
RUN npm install
RUN npm run build --prod

# Step 2: Serve with nginx
FROM nginx:alpine
COPY --from=build /app/dist/frontend /usr/share/nginx/html
COPY ./default.conf /etc/nginx/conf.d/default.conf
