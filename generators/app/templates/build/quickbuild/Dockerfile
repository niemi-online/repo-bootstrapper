FROM hjin/app-nginx
ENV API=host.docker.internal:8080,host.docker.internal:8443
ENV PROTOCOL=https
ENV PROJECT_NAME=omega
COPY build/default.conf.tmpl /etc/nginx/conf.d/default.conf.tmpl
COPY ./dist/static /usr/share/nginx/html/static
