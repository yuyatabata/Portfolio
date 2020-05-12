FROM python:3.7

RUN mkdir -p ./src/app

RUN mkdir -p ./src/app/static

WORKDIR /src/app

ADD requirements.txt ./

RUN pip install -r ./requirements.txt