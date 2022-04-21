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
 *       description: register to application
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
 *                    "firstName": "lucas1234"
 *                    "lastName": "novak1234"
 *                    "email" : "test1234@test.com"
 *                    "password" : "Lucas1234"
 *                registro sin éxito:
 *                  value:    
 *                    "firstName": "lucas2"
 *                    "lastName": "novak"
 *                    "email" : "test1@test.com"
 *                    "password" : "Lucas123"
 *       responses:
 *         '201':
 *           description: OK
 *         '400':
 *           description: Bad Request

 */

/**
 * @swagger
 * /auth/login:
 *   post:
 *       tags: ["Login User"]
 *       description: register to application
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
 *                    "email" : "test1234@test.com"
 *                    "password" : "Lucas1234"
 *                login sin éxito:
 *                  value:    
 *                    "email" : "testsdfs1@test.com"
 *                    "password" : "Lucas123" 
 *       responses:
 *         200:
 *          description: OK
 *         400:
 *          description: Bad Request
 */ 

