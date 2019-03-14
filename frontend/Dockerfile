FROM node:8-slim as frontend-build

ENV NPM_CONFIG_LOGLEVEL error

WORKDIR /opt

# Install node modules for frontend.
COPY . .
RUN (npm install && npm install -g @angular/cli && ng build)

FROM nginx:1-alpine

WORKDIR /data/www

COPY --from=frontend-build /opt/dist .
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
