FROM node:14-alpine3.14 AS websitebuild

# "development" needed for build, otherwise vuetify throws an error
ENV NODE_ENV=development

# can be passed to nuxt
# ENV APISSL=0
# ENV SSR=1
# ENV SSL=0

# Build main site
# install nuxt dependencies and build static dist folder
RUN mkdir -p /website
WORKDIR /website
ADD app .
RUN yarn && yarn generate

# Build docs stage
RUN mkdir -p /docs
WORKDIR /docs
ADD docs .
RUN yarn && yarn generate

# Hosting Layer
FROM nginx
COPY --from=websitebuild /website/dist/ /usr/share/nginx/html/

                                      # put in random place - no idea where
                                      # is the best place to put it
COPY --from=websitebuild /docs/dist/ /srv/www/docs-app/dist/


COPY app/nginx.conf /etc/nginx/conf.d/default.conf

