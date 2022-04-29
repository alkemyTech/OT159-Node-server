/**
 * @swagger
 * components:
 *  schemas:
 *    User:
 *       type: object
 *       properties:
 *          firstName:
 *            type: string
 *          lastName:
 *            type: string
 *          email:
 *            type: string
 *          password:
 *            type: string
 *          photo:
 *            type: string
 *          roleId:
 *            type: number
 *       required:
 *         - firstName
 *         - lastName
 *         - email
 *         - password
 *      
 */

/**
 * @swagger
 * /auth/register:
 *   post:
 *       tags: ["User"]
 *       summary: Sign Up User
 *       description: Register
 *       requestBody:
 *          required: true
 *          content:
 *            application/json:
 *              schema:
 *                 type: object
 *                 $ref: '#/components/schemas/User'
 *              examples:
 *                registro exitoso (Admin User):
 *                  value:    
 *                    "firstName": "User"
 *                    "lastName": "Admin"
 *                    "email" : "lukitmate@admin.com"
 *                    "password" : "User1admin"
 *                    "roleId": "1"
 *                registro exitoso (Standard User):
 *                  value:    
 *                    "firstName": "User"
 *                    "lastName": "Standard"
 *                    "email" : "user1@standard.com"
 *                    "password" : "User1standard"
 *                    "roleId": "2"
 *                registro sin éxito (Email ya existe):
 *                  value:    
 *                    "firstName": "User"
 *                    "lastName": "Standard"
 *                    "email" : "user1@standard.com"
 *                    "password" : "User1standard"
 *                    "roleId": "2"
 *                registro sin éxito (Password no cumple requerimientos):
 *                  value:    
 *                    "firstName": "User"
 *                    "lastName": "Admin"
 *                    "email" : "user2@admin.com"
 *                    "password" : "user1admin"
 *                registro sin éxito (Se omite un campo):
 *                  value:    
 *                    "lastName": "Admin"
 *                    "email" : "user3@admin.com"
 *                    "password" : "User3admin"  
 *       responses:
 *         '201':
 *           description: Created
 *         '400':
 *           description: Bad Request
 *         '422':
 *           description: Unprocessable Entity
 */

/**
 * @swagger
 * /auth/login:
 *   post:
 *       tags: ["User"]
 *       summary: Sign in User
 *       description: Login
 *       requestBody:
 *          required: true
 *          content:
 *            application/json:
 *              schema:
 *                 type: object
 *                 $ref: '#/components/schemas/User'
 *              examples:
 *                login sin éxito (Datos incorrectos):
 *                  value:    
 *                    "email" : "user350@admin.com"
 *                    "password" : "User350admin" 
 *                login sin éxito (Se omite un campo):
 *                  value:    
 *                    "password" : "User1admin"  
 *                login exitoso (Admin User):
 *                  value:    
 *                    "email" : "lukitmate@admin.com"
 *                    "password" : "User1admin"
 *                login exitoso (Standard User):
 *                  value:    
 *                    "email" : "user1@standard.com"
 *                    "password" : "User1standard"
 *
 *       responses:
 *         200:
 *          description: OK
 *         400:
 *          description: Bad Request
 *         404:
 *          description: Not Found
 *         '422':
 *          description: Unprocessable Entity 
 */ 

