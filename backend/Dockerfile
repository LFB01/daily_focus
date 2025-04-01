# Verwende ein leichtes Java 21-Image (kein Bezug zur IDE Eclipse!)
FROM eclipse-temurin:21-jdk-alpine

# Setze das Arbeitsverzeichnis im Container
WORKDIR /app

# Kopiere das gebaute Spring Boot JAR ins Image
COPY target/daily-focus-0.0.1-SNAPSHOT.jar app.jar

# Starte die Spring Boot Anwendung
ENTRYPOINT ["java", "-jar", "app.jar"]
