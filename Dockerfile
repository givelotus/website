FROM node:14-alpine3.14 AS websitebuild

# "development" needed for build, otherwise vuetify throws an error
ENV NODE_ENV=development

# can be passed to nuxt
# ENV APISSL=0
# ENV SSR=1
# ENV SSL=0

RUN mkdir -p /website
WORKDIR /website
ADD . .

# Main site
# install nuxt dependencies and build statics
RUN yarn && yarn generate

# Docs site stage
# install nuxt dependencies and build statics
# move /docs folder to the same html folder
# TODO

# Hosting Layer
FROM nginx
COPY --from=websitebuild /website/dist/ /usr/share/nginx/html/


COPY nginx.conf /etc/nginx/conf.d/default.conf

