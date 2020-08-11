FROM node:12.16.1-alpine3.9 as build
WORKDIR /front-end
ENV PATH /front-end/node_modules/.bin:$PATH
COPY ./package.json /front-end/
RUN yarn --silent
COPY . /front-end
RUN yarn build

# ------------------------------------------------------
# Production Build
# ------------------------------------------------------
FROM nginx:1.17.8-alpine
COPY --from=build /front-end/build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY ./.nginx/nginx.conf /etc/nginx/conf.d
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
