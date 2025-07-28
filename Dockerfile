# Building the image using node base image, FROM command use to build upon the base image, with this syntax:
# image:tag

# First Stage is used to install the dependencies from the host machine app to the image /app directory
FROM node:22-alpine AS initiate
ENV PROD='1'
# set the environment variable PROD to 1, which is used to determine if the app is

# set the working directory in the container to /app
WORKDIR /app
# copy package.json from the host machine to the /app directory in the image
COPY package*.json ./

RUN --mount=type=secret,id=CONNECTION_STRING \
    --mount=type=secret,id=EMAIL_SERVER_HOST \
    --mount=type=secret,id=EMAIL_SERVER_USER \
    --mount=type=secret,id=EMAIL_SERVER_PASSWORD \
    --mount=type=secret,id=EMAIL_SERVER_PORT \
    --mount=type=secret,id=EMAIL_FROM \
     --mount=type=secret,id=NEXTAUTH_URL \
    --mount=type=secret,id=NEXTAUTH_SECRET \
    export CONNECTION_STRING="$(cat /run/secrets/CONNECTION_STRING)" && \
    export EMAIL_SERVER_HOST="$(cat /run/secrets/EMAIL_SERVER_HOST)" && \
    export EMAIL_SERVER_USER="$(cat /run/secrets/EMAIL_SERVER_USER)" && \
    export EMAIL_SERVER_PASSWORD="$(cat /run/secrets/EMAIL_SERVER_PASSWORD)" && \
    export EMAIL_FROM="$(cat /run/secrets/EMAIL_FROM)" && \
    export NEXTAUTH_URL="$(cat /run/secrets/NEXTAUTH_URL)" && \
    export EMAIL_SERVER_PORT="$(cat /run/secrets/EMAIL_SERVER_PORT)" && \
    export NEXTAUTH_SECRET="$(cat /run/secrets/NEXTAUTH_SECRET)" && \
    npm ci




# 2nd Stage is used to build the app
FROM initiate AS build
COPY --from=initiate /app/node_modules ./node_modules
COPY . .
# copy the rest of application from the host machine to the /app directory in the image to build the app
RUN --mount=type=secret,id=CONNECTION_STRING \
    --mount=type=secret,id=EMAIL_SERVER_HOST \
    --mount=type=secret,id=EMAIL_SERVER_USER \
    --mount=type=secret,id=EMAIL_SERVER_PASSWORD \
    --mount=type=secret,id=EMAIL_SERVER_PORT \
    --mount=type=secret,id=EMAIL_FROM \
    --mount=type=secret,id=NEXTAUTH_URL \
    --mount=type=secret,id=NEXTAUTH_SECRET \
    export CONNECTION_STRING="$(cat /run/secrets/CONNECTION_STRING)" && \
    export EMAIL_SERVER_HOST="$(cat /run/secrets/EMAIL_SERVER_HOST)" && \
    export EMAIL_SERVER_USER="$(cat /run/secrets/EMAIL_SERVER_USER)" && \
    export EMAIL_SERVER_PASSWORD="$(cat /run/secrets/EMAIL_SERVER_PASSWORD)" && \
    export EMAIL_FROM="$(cat /run/secrets/EMAIL_FROM)" && \
    export NEXTAUTH_URL="$(cat /run/secrets/NEXTAUTH_URL)" && \
    export NEXTAUTH_SECRET="$(cat /run/secrets/NEXTAUTH_SECRET)" && \
    export EMAIL_SERVER_PORT="$(cat /run/secrets/EMAIL_SERVER_PORT)" && \
    npm run build


# 3rd Stage is used to run the app
FROM initiate AS run

RUN addgroup --system --gid 1001 nonroot
RUN adduser --system --uid 1001 runner
# Create a non-root user to run the app and assign it to the nonroot group
USER runner
# Switch to the user runner

COPY --from=build /app/public ./public
COPY --from=build --chown=runner:nonroot /app/.next/standalone ./
COPY --from=build --chown=runner:nonroot /app/.next/static ./.next/static

EXPOSE 3000

CMD ["npm","run","start"]

# finally, run the app in production mode





