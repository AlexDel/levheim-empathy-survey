FROM node:8-slim as frontend-build

ENV NPM_CONFIG_LOGLEVEL error

WORKDIR /opt

# Install node modules for frontend.
COPY frontend frontend
RUN (cd frontend && npm install && npm install -g @angular/cli && ng build)

FROM nginx:1-alpine

WORKDIR /data/www

COPY --from=frontend-build /opt/frontend/dist .
COPY nginx.conf /etc/nginx/nginx.conf

RUN apk add --update python3 py-pip

COPY backend /data/www/backend
COPY requirements.txt /data/www/requirements.txt

RUN pip install -r requirements.txt

EXPOSE 80
ENTRYPOINT ["python", "/data/www/backend/app.py"]






