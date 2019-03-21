FROM ubuntu:16.04

MAINTAINER Abhishek Pareek "abhishekpareek29@gmail.com"

EXPOSE 80

RUN apt-get update
RUN apt-get -y install apache2
RUN apt-get -y install apache2-dev
RUN apt-get -y install vim
RUN apt-get -y install libapache2-mod-wsgi-py3
RUN apt-get -y install mysql-client

RUN apt-get update \
  && apt-get install -y python3-pip python3-dev \
  && cd /usr/local/bin \
  && ln -s /usr/bin/python3 python \
  && pip3 install --upgrade pip

RUN pip install uwsgi
RUN pip install flask
RUN pip install flask-restful
RUN pip install Flask-API
RUN pip install Flask-Cors
RUN pip install flask-mysql
RUN pip install mod_wsgi

# Load apache cgi module
RUN a2enmod cgi
RUN a2enmod wsgi
RUN service apache2 restart

# Copy over the apache configuration file and enable the site
COPY ./quantworks-api.conf /etc/apache2/sites-available/quantworks-api.conf
RUN a2ensite quantworks-api.conf
RUN a2enmod headers


RUN chmod -R u+rwx,g+x,o+x /var/www/html

RUN ln -sf /usr/bin/python /usr/local/bin/python

CMD /usr/sbin/apache2ctl -D FOREGROUND
