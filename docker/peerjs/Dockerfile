#FROM gitpod/workspace-full
#
#USER gitpod


#FROM ubuntu
#
#RUN apt-get update && \
#    apt-get install
#
#CMD [ "node", "server.js" ]

FROM ubuntu:20.04

ENV DEBIAN_FRONTEND=noninteractive

RUN apt-get -y update \
#    && apt-get -y upgrade \
    && apt-get install -y locales curl python3-distutils nodejs npm vim \
    && curl https://bootstrap.pypa.io/get-pip.py -o get-pip.py \
    && python3 get-pip.py \
    && pip install -U pip \
    && rm -rf /var/lib/apt/lists/* \
    && localedef -i en_US -c -f UTF-8 -A /usr/share/locale/locale.alias en_US.UTF-8
ENV LANG en_US.utf8
ADD requirements.txt ./
RUN pip install -r requirements.txt


COPY peerjs /peerjs
COPY peerjs2 /peerjs2
WORKDIR /peerjs
#RUN ls && pwd
RUN [ "npm", "install", "peer", "serve-index"]

CMD ["node","server.js"]
