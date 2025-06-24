#Installing and Prep Stage

FROM node:22-alpine AS prep

RUN apk add --no-cache g++ make py3-pip libc6-compat

WORKDIR /app
# set the working directory in the container

COPY package*.json ./
# copy package.json from host machine to image current directory

RUN npm ci


# Build Stage

FROM prep AS build

WORKDIR /app




COPY --from=prep /app/node_modules ./node_modules
COPY . .

RUN  --mount=type=secret,id=CONNECTION_STRING export CONNECTION_STRING="$(cat /run/secrets/CONNECTION_STRING)" && npm run build



# Running the app stage

#FROM prep AS rundev

#WORKDIR /app

#ENV NEXT_TELEMETRY_DISABLED=1

#COPY . .
#EXPOSE 3000
#CMD ["npm","run","dev"]


FROM prep AS runprod

WORKDIR /app

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

RUN mkdir .next
RUN chown nextjs:nodejs .next
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/package.json ./package.json
COPY --from=build /app/public ./public
COPY --from=build --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=build --chown=nextjs:nodejs /app/.next/static ./.next/static
USER nextjs
EXPOSE '3000'
#ENV HOSTNAME ="0.0.0.0"
CMD ["npm" , "run","start"]

