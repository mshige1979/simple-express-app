# simple-express-app

app runner sample

## settings

### docker-compose

```
docker-compose build
docker-compose up
```

### docker

```
docker build ./ -t app
docker run --name app-test --rm -p 5000:5000 -d app
```
