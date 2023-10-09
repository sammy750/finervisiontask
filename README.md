This project combines a React frontend and a Node.js backend in a single directory for easy management. It allows you to streamline your development workflow and manage dependencies efficiently.

To get started with this project, follow these steps:

1. **Install Dependencies**:
   - Navigate to the `client` directory and install frontend dependencies:
     ```bash
     cd client
     npm install
     ```
   - Navigate to the `server` directory and install backend dependencies:
     ```bash
     cd server
     npm install
     ```

2. **Root `package.json`**:
   - The root `package.json` file is used to manage shared dependencies and scripts for both the frontend and backend.

3. **Shared Dependencies**:
   - Identify dependencies shared between the frontend and backend and add them to the `dependencies` section of the root `package.json`.

4. **Scripts in Root `package.json`**:
   - Define scripts in the root `package.json` to manage tasks for both the frontend and backend. For example, you can create scripts for starting both the frontend and backend simultaneously:
     ```json
     "scripts": {
       "start": "concurrently \"cd client && npm start\" \"cd server && npm start\""
     }
     ```

5. **Run Scripts from Root**:
   - From the root directory, you can now run shared scripts. To start both the frontend and backend, simply run:
     ```bash
     npm start
     ```

   - If you prefer to start the frontend or backend individually, you can navigate to their respective directories and run scripts there.

     - For the frontend (React):
       ```bash
       cd client
       npm start
       ```

     - For the backend (Node.js):
       ```bash
       cd server
       npm start
       ```

6. **Separate `package.json` Files**:
   - Maintain separate `package.json` files in the `client` and `server` directories for managing frontend and backend-specific dependencies.

## Development Workflow

During development, you can manage your React frontend and Node.js backend from a single command line interface in the root directory.
