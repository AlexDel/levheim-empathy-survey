FROM python:3.6-jessie

WORKDIR /data/www/

COPY requirements.txt .

RUN pip3 install -r requirements.txt

COPY . .

EXPOSE 5000

ENTRYPOINT ["python", "/data/www/app.py"]