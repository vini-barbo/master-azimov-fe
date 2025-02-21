FROM node:20-alpine


RUN npm install -g @angular/cli

WORKDIR /
RUN mkdir angular-app
WORKDIR /angular-app

ENV APP_NAME 'app'
ENV ROUTING 'true'
ENV STANDALONE 'false'
ENV STRICT 'true'
ENV STYLE 'scss'

CMD ng serve --host 0.0.0.0 --port 4200

EXPOSE 4200
