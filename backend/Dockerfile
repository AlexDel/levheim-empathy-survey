FROM python:3.6-jessie

WORKDIR /data/www/

COPY . .

RUN pip3 install -r requirements.txt

EXPOSE 5000

ENTRYPOINT ["python", "/data/www/app.py"]