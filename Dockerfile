FROM node as builder

RUN mkdir /frontend
WORKDIR /frontend

COPY ./package.json /frontend/package.json
RUN yarn install

COPY . /frontend
RUN yarn build

FROM nginx

COPY nginx/nginx.conf /etc/nginx/nginx.conf

COPY --from=builder /frontend/build /usr/share/nginx/html/

RUN find /usr/share/nginx/html -type f -exec chmod 644 {} \;
RUN find /usr/share/nginx/html -type d -exec chmod 755 {} \;
