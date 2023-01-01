# gathio

[![Build Status](https://travis-ci.com/lowercasename/gathio.svg?branch=master)](https://travis-ci.com/lowercasename/gathio)

Self-destructing, shareable, no-registration event pages.

You can use the publicly hosted version [here](https://gath.io).

# Installation

See [the Wiki](https://github.com/lowercasename/gathio/wiki/install) for installation instructions.

```
cd /srv/
apt update
apt install git
git clone https://github.com/jev-me/gathio/
apt install npm
cd gathio
npm install
apt install mongodb
systemctl start mongodb
systemctl enable mongodb
adduser --home /srv/gathio --disabled-login gathio
chown -R gathio:gathio /srv/gathio
cp config/gathio.service /etc/systemd/system/
systemctl daemon-reload
systemctl start gathio
apt install nginx
nano /etc/nginx/site-enabled/default
```

```
  location / {
      proxy_pass http://localhost:3000/;
  }
```

```
systemctl start nginx
nginx -t
nginx -s reload
```
link-> <site>/new/event/public
