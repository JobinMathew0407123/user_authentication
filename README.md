## Steps to be perfromed to Run the API Locally

1. Clone this repository to your local machine.

   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory.

3. Install the required dependencies.

   ```bash
   npm install
   ```

4. Set up a MongoDB database either locally or using a cloud solution like MongoDB Atlas. Update the MongoDB connection URI in the db.js file.

5. Run the application.

   ```bash
   npm run server
   ```
 # user auth  API  Overview

This is a RESTful API for  registering users  and creating access_token for authozising  this user at  the books management microservice api. 

## API Endpoints and Discriptions
- **User Registeration:**

  - Endpoint: ` POST /api/auth/register`
  - Impcat:
    - will  craete user in the  db with following json {
      ""email":"",
  "name":"",
  "password":""
    }
- **User login:**

  - Endpoint: `POST /api/auth/login`
  - Impcat:
    - will  login the user and give a jwt toke as accees_token in the response for user valiadation ,Jwt token is having an exipiry of 1 day




