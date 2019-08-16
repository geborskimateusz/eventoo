FROM java:8-jdk-alpine

COPY target/eventoo-server-0.0.1-SNAPSHOT.jar /usr/app/

WORKDIR /usr/app

RUN sh -c 'touch eventoo-server-0.0.1-SNAPSHOT.jar'

ENTRYPOINT ["java","-jar","eventoo-server-0.0.1-SNAPSHOT.jar"]