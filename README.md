### 1. User Microservices
   - **Functionality:**
     - Admins can add/delete users.
     - Default users can fetch their own information only.
   - **Structures:**
     - User struct with fields: Username, Email, Type (default or admin).
   - **Endpoints:**
     - `POST /users` for creating a new user (admin only).
     - `DELETE /users/{userId}` for deleting a user (admin only).
     - `GET /users/me` for a user to fetch their own information.
   - **Database Integration:**
     - Choose a suitable database (e.g., MongoDB, MySQL) for storing user information.
   - **Testing:**
     - Write unit and integration tests for user creation, deletion, and information retrieval functionalities.

### 2. Task Management Microservice
   - **Functionality:**
     - Admins can create/edit tasks, search and sort tasks.
     - Users can fetch their tasks and mark them as complete.
     - Raise an event when a task is marked as complete.
   - **Structures:**
     - Task struct with fields: Title, Description, Priority, Due date.
   - **Endpoints:**
     - `POST /tasks` for creating a new task (admin only).
     - `PUT /tasks/{taskId}` for editing a task (admin only).
     - `GET /tasks` for fetching tasks (with filters and sorting).
     - `PATCH /tasks/{taskId}/complete` for marking a task as complete.
   - **Database Integration:**
     - Use the same or a different database as per the requirement for storing task information.
   - **Event Handling:**
     - Implement a mechanism to raise an event when a task status is updated to complete. This could be a simple message sent to a queue or a notification system.

