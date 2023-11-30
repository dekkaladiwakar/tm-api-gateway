# README.md

## Project Overview

This repository contains three interconnected NestJS projects: `api-gateway`, `user-service`, and `task-service`. These microservices are designed for straightforward interaction via REST APIs. The focus is on simplicity and efficiency, with the flexibility to expand and integrate additional features like billing and email notifications in the future and also include messaging brokers like RabbitMQ, Kafka.

### GitHub Repositories

For more details and to view the source code, visit the following GitHub repositories:

- **API Gateway**: [https://github.com/dekkaladiwakar/tm-api-gateway](https://github.com/dekkaladiwakar/tm-api-gateway)
- **User Service**: [https://github.com/dekkaladiwakar/tm-user-service](https://github.com/dekkaladiwakar/tm-user-service)
- **Task Service**: [https://github.com/dekkaladiwakar/tm-task-service](https://github.com/dekkaladiwakar/tm-task-service)

### Components

1. **API Gateway**: The central hub for handling authentication and user roles, equipped with an `AdminGuard` for managing administrative routes.
2. **User Service**: Manages all user-related functionalities.
3. **Task Service**: Dedicated to task management operations.

### Database Design

Each service operates with its individual database, maintaining data independence and promoting a clean microservice architecture.

### Features and Functionality

- **Authentication and Authorization**: Centrally managed at the `api-gateway` for effective user role management.
- **Guard Implementation**: Ensures secure access to admin routes.
- **Service Independence**: Each microservice is self-contained, ensuring modular design and maintenance.

### Current Limitations and Future Enhancements

While the project effectively meets its current objectives, there are areas identified for future development:

1. **User Deletion and Task Management**: Presently, deleting users does not automatically remove their tasks.
2. **Unit Testing**: More extensive testing is planned to ensure robustness.
3. **Error Handling**: Improvement in error management is a target area.
4. **Code Documentation**: Aiming for more comprehensive and clearer code comments.

### Environment Setup

An `.env.example` file is provided in each repository to guide the setup of your environment variables.

### Database Migrations and Seeders

To set up your database, use the following sequelize-cli commands:

```bash
# Run migrations
npx sequelize-cli db:migrate

# Seed the database
npx sequelize-cli db:seed:all
```

### Cloning and Running the Services

Follow these steps to clone, set up, and run each service:

1. **Clone the Repository**
   ```bash
   git clone [repository link]
   ```

2. **Install NPM Packages**
   ```bash
   cd [project-directory]
   npm install
   ```

3. **Run the Server**
   - For `api-gateway`: `npm start` on port 3000
   - For `user-service`: `npm start` on port 3001
   - For `task-service`: `npm start` on port 3002

   Ensure that the respective ports (3000, 3001, and 3002) are correctly set in your environment variables or configurations as the REST API calls in the `api-gateway` are currently hardcoded to these ports.

### Final Notes

This project lays a solid foundation for a scalable and modular microservices system. Although some aspects are slated for enhancement, the core functionalities are in place and operational. 
