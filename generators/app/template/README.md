# App

## Build
```
node ./build/env.js
sh ./build/build.sh
```

## Deploy
```
docker kill  > /dev/null 2>&1 || true
docker rm  > /dev/null 2>&1 || true
cd {WORKSPACE} 
docker load -i image.tar 
cat CONTAINER_TAG | xargs -n 1 -I { docker run -d --name  -p 8006:8080 --env-file ./default.env --restart=unless-stopped :{
```
