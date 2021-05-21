FROM node:lts-alpine AS BUILD

WORKDIR /app

COPY ./ ./

RUN npm install

RUN npm run build:prod

FROM abdennour/nginx-distroless-unprivileged

USER nginx

COPY --from=BUILD /app/dist/client /usr/share/nginx/html