/**
 * @swagger
 * components:
 *  schemas:
 *    register:
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
 * components:
 *  schemas:
 *    login:
 *       type: object
 *       properties:
 *          email:
 *            type: string
 *          password:
 *            type: string
 *       required:
 *         - email
 *         - password
 *      
 */

/**
 * @swagger
 * /auth/register:
 *   post:
 *       tags: ["Register User"]
 *       summary: Sign Up User
 *       description: Register
 *       requestBody:
 *          required: true
 *          content:
 *            application/json:
 *              schema:
 *                 type: object
 *                 $ref: '#/components/schemas/register'
 *              examples:
 *                registro exitoso:
 *                  value:    
 *                    "firstName": "lucas123456"
 *                    "lastName": "novak123456"
 *                    "email" : "test123456@test.com"
 *                    "password" : "Test123456"
 *                    "roleId": "1"
 *                registro sin éxito (Usuario ya existe):
 *                  value:    
 *                    "firstName": "lucas2"
 *                    "lastName": "novak"
 *                    "email" : "test123456@test.com"
 *                    "password" : "Test123456"
 *                    "roleId": "2"
 *                registro sin éxito (Password no cumple requerimientos):
 *                  value:    
 *                    "firstName": "lucas2"
 *                    "lastName": "novak"
 *                    "email" : "test123456@test.com"
 *                    "password" : "test123456"
 *                registro sin éxito (Se omite un campo):
 *                  value:    
 *                    "lastName": "novak"
 *                    "email" : "test123456@test.com"
 *                    "password" : "Test123456"  
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
 *       tags: ["Login User"]
 *       summary: Sign in User
 *       description: Login
 *       requestBody:
 *          required: true
 *          content:
 *            application/json:
 *              schema:
 *                 type: object
 *                 $ref: '#/components/schemas/login'
  *              examples:
 *                login exitoso:
 *                  value:    
 *                    "email" : "test123456@test.com"
 *                    "password" : "Test123456"
 *                login sin éxito (Datos incorrectos):
 *                  value:    
 *                    "email" : "testsdfs1@test.com"
 *                    "password" : "Lucas123" 
 *                login sin éxito (Se omite un campo):
 *                  value:    
 *                    "password" : "Lucas123" 
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

