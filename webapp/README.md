## Webapp direcotry contains docker configuration files, database, apache2 vhost and logs.

## Directory Information

### Configuration
 - apache2
  - This directory contains virtual hosts for the app.
 - memcached
  - This directory contains configuration file for memcache.
 - mysql
  - This directory contains configuration file for mysql.
  
### Database
 - This directory contains the database files for this app i.e. these files are used by mysql.
 
### logs
 - All the logs are saved into this directory.

## How to use
### Build Docker Image
docker build -t flask-apache .
docker tag 3640233b68d7 abprk/flask-apache:latest
docker push abprk/flask-apache:latest

### Docker Operations
docker images
docker container ls
docker container stop 21742178318
docker container prune
docker rm 21742178318
docker rmi 27389262719
docker-compose up -d
docker exec -it webapp_api_1 bin/bash



### Docroot
 - There is a directory called docroot in the repo, put your code inside that directory.
