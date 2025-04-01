# Build-Phase
FROM eclipse-temurin:21-jdk-alpine AS build
WORKDIR /app
COPY . .
RUN ./mvnw clean package -DskipTests

# Run-Phase
FROM eclipse-temurin:21-jdk-alpine
WORKDIR /app
COPY --from=build /app/target/daily-focus-0.0.1-SNAPSHOT.jar app.jar
ENTRYPOINT ["java", "-jar", "app.jar"]
