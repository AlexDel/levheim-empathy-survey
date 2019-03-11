FROM python:3.6-alpine

RUN apk add --update nodejs nodejs-npm nginx

WORKDIR /home/levheim-empathy-survey

COPY nginx.conf /etc/nginx/nginx.conf

COPY . .

RUN python -m venv venv
RUN venv/bin/pip install -r requirements.txt

WORKDIR /home/levheim-empathy-survey/frontend

RUN npm install
RUN npm install -g @angular/cli
RUN ng build

EXPOSE 80
ENTRYPOINT ["python ./backend/app.py"]






