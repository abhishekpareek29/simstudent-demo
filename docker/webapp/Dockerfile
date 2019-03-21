FROM ubuntu:16.04

MAINTAINER Abhishek Pareek "abhishekpareek29@gmail.com"

EXPOSE 80

RUN apt-get update
RUN apt-get -y install apache2
RUN apt-get -y install vim


RUN apt-get install -y curl
RUN curl -sL https://deb.nodesource.com/setup_10.x | bash -
RUN apt-get -y install nodejs
RUN apt-get -y install build-essential
RUN npm install -g create-react-app
RUN npm install react-chartjs-2 --save
RUN npm install chart.js@^2.1.1 --save


# Load apache cgi module
RUN a2enmod cgi
RUN service apache2 restart

# Copy over the apache configuration file and enable the site
COPY ./quantworks-webapp.conf /etc/apache2/sites-available/quantworks-webapp.conf
RUN a2ensite quantworks-webapp.conf
RUN a2enmod headers

RUN chmod -R u+rwx,g+x,o+x /var/www/html

CMD /usr/sbin/apache2ctl -D FOREGROUND

