### 3. Infrastructure Services Repository (Config & Discovery)


# Cloud-Native E-Library - Infrastructure Services

### Student Information
* **Name:** Mahesha Dinushan Heenatigala
* **Student Number:** 2301692062
* **Slack Handle:** Mahesha Dinushan
* **GCP Project ID:** project-c341f623-6f55-4fea-bae

---

## Project Description
This repository hosts the core infrastructure components required for the platform's microservices ecosystem. It contains two primary services:
1. **Config Server:** Provides centralized, versioned configuration management. It uses the `native` profile to serve `.yml` configuration files directly from the classpath to all other microservices.
2. **Discovery Service:** A Netflix Eureka server that acts as a service registry, allowing microservices to register themselves and discover each other dynamically without hardcoded hostnames.

## Technology Stack
* **Runtime:** Java 25
* **Framework:** Spring Boot 4.x
* **Cloud Tooling:** Spring Cloud Config Server, Spring Cloud Netflix Eureka Server

## Setup & Getting Started

**Important:** The Config Server must be started *before* any other service in the ecosystem.

### 1. Starting the Config Server
1. Navigate to the Config Server directory:
   ```bash
   cd config-server
Run the application:

Bash
mvn spring-boot:run
Runs on port 8888.

2. Starting the Discovery Service
Navigate to the Discovery Service directory:

Bash
cd discovery-service
Run the application:

Bash
mvn spring-boot:run
Runs on port 8761. You can view the Eureka dashboard at http://localhost:8761 or http://34.124.167.151:8761.
