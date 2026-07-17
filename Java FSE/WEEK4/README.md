# WEEK4 — Microservices Mandatory Hands-On

This folder contains 5 independent Spring Boot Maven projects that together
implement the "Creating Microservices for account and loan" +
"Spring Cloud API Gateway" hands-on from your composite exercise document.

```
WEEK4/
├── eureka-server/     -> Discovery server (port 8761)
├── account-service/   -> GET /accounts/{number}          (port 8080)
├── loan-service/      -> GET /loans/{number}              (port 8081)
├── greet-service/     -> GET /greet -> "Hello World!"     (port 8082)
└── api-gateway/       -> Routes to all services + logging filter (port 9090)
```

## Why these ports
The original doc has account/loan/greet all default to 8080, which causes the
"port already in use" issue it deliberately walks you through. Here every
service already has a distinct `server.port` set so you can run all 5 at once
without hitting that error. (If your instructor wants you to *reproduce* the
port-conflict step manually, just comment out `server.port` in loan-service's
`application.properties`, run it after account-service, watch it fail, then
uncomment it — that reproduces Steps under "Loan Microservice" exactly.)

## How to run (in this order)

Each folder is a normal Maven project. From inside each folder:

```bash
mvn clean package
mvn spring-boot:run
```

1. **eureka-server** — start first, wait until it's up, then open
   http://localhost:8761 (registry should be empty).
2. **account-service** — start it, refresh Eureka, `ACCOUNT-SERVICE` should
   appear registered.
3. **loan-service** — same, `LOAN-SERVICE` appears.
4. **greet-service** — same, `GREET-SERVICE` appears. Test directly at
   http://localhost:8082/greet
5. **api-gateway** — start last. It auto-routes to every registered service
   using the service ID (lower-cased, per the doc's step 20 config).

## Test URLs once everything is up

| Direct call | Via API Gateway (port 9090) |
|---|---|
| http://localhost:8080/accounts/00987987973432 | http://localhost:9090/account-service/accounts/00987987973432 |
| http://localhost:8081/loans/H00987987972342 | http://localhost:9090/loan-service/loans/H00987987972342 |
| http://localhost:8082/greet | http://localhost:9090/greet-service/greet |

Check the api-gateway console — `LogFilter` prints every incoming request URI,
matching step 21–23 of the doc.

## Sample responses (as specified in the doc)

**Account:**
```json
{ "number": "00987987973432", "type": "savings", "balance": 234343 }
```

**Loan:**
```json
{ "number": "H00987987972342", "type": "car", "loan": 400000, "emi": 3258, "tenure": 18 }
```

## Requirements
- Java 17+
- Maven 3.8+
- Internet access to Maven Central the first time you build (to pull Spring
  Boot 3.2.x / Spring Cloud 2023.0.x dependencies)

## Notes
- All services use Spring Boot 3.2.x + Spring Cloud 2023.0.x (2023.0.x is the
  release train compatible with Spring Boot 3.2, and matches "Spring Boot 3"
  + "Spring Cloud" referenced throughout your exercise PDFs).
- `account-service` and `loan-service` are dummy REST services with no DB —
  exactly as the doc specifies ("without any backend connectivity").
- Group ID used throughout: `com.cognizant` (matches the doc's Spring
  Initializr instructions).
