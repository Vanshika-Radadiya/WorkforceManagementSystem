# Workforce Management System

This project is a full-stack employee management application built with Spring Boot for the backend and React for the frontend. It allows users to manage employee records, including viewing all employees, adding new employees, updating details, and deleting records.

## Tech Stack

- Backend: Java 17, Spring Boot 3.2, Spring Data JPA, Maven
- Frontend: React 18, React Router, Axios, Bootstrap
- Database: H2 database
- Build Tools: Maven, npm

## Project Structure

```text
WorkforceManagementSystem/
├── WF_Backend/                 # Spring Boot REST API
│   ├── src/main/java/...       # Java classes for controller, model, repository, service
│   ├── src/main/resources/     # application.properties
│   ├── pom.xml                 # Maven dependencies and config
│   └── mvnw / mvnw.cmd         # Maven wrapper
├── WF_Frontend/                # React frontend
│   ├── src/                    # App, components, services
│   ├── public/                 # Static assets
│   ├── package.json            # npm dependencies and scripts
│   └── README.md               # Frontend README
├── README.md                   # Project documentation
└── .gitignore
```

## Prerequisites

- Java 17+
- Maven
- Node.js and npm

## Run the Backend

```bash
cd WF_Backend
./mvnw spring-boot:run
```

On Windows:

```powershell
cd WF_Backend
mvnw.cmd spring-boot:run
```

Backend URL:

- http://localhost:8080

## Run the Frontend

```bash
cd WF_Frontend
npm install
npm start
```

## Usage

1. Start the backend.
2. Start the frontend.
3. Open the browser at http://localhost:3000.

