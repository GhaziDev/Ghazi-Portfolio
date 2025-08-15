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


RUN npm ci




# 2nd Stage is used to build the app
FROM initiate AS build

COPY --from=initiate /app/node_modules ./node_modules
COPY . .
# copy the rest of application from the host machine to the /app directory in the image to build the app
RUN --mount=type=secret,id=AWS_ACCESS_KEY_ID \
    --mount=type=secret,id=AWS_SECRET_ACCESS_KEY \
    export AWS_ACCESS_KEY_ID="$(cat /run/secrets/AWS_ACCESS_KEY_ID)" && \
    export AWS_SECRET_ACCESS_KEY="$(cat /run/secrets/AWS_SECRET_ACCESS_KEY)" && \
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





