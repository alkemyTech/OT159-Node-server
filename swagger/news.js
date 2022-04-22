//create news
/** 
 * @swagger
 * components:
 *  schemas:
 *      New:
 *          type: object
 *          properties:
 *              name:
 *                  type: string
 *              content:
 *                  type: string
 *              image:
 *                  type: string
 *              categoryId:
 *                  type: integer
 *          required: 
 *              - categoryId
 *          example:
 *              name: Novedad del día
 *              content: La noverdad del día es la siguiente
 *              image: https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Diario_Critica%2C_noticias_policiales_01.jpg/800px-Diario_Critica%2C_noticias_policiales_01.jpg
 *              categoryId: 1
*/

/**
 * @swagger
 * /news:
 *      post:
 *          tags: [News]
 *          summary: Create news
 *          requestBody:
 *              required: true
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          $ref: '#/components/schemas/news'
 *                      examples:
 *                          Creación exitosa:
 *                              value:
 *                                  "name": "Novedad del día"
 *                                  "content": "La noverdad del día es la siguiente"
 *                                  "image" : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Diario_Critica%2C_noticias_policiales_01.jpg/800px-Diario_Critica%2C_noticias_policiales_01.jpg"
 *                                  "categoryId" : 1
 *                          Creación sin éxito (datos incorrectos)
 *                              value:
 *                                  "name": "Novedad del día"
 *                                  "content": "La noverdad del día es la siguiente"
 *                                  "image" : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Diario_Critica%2C_noticias_policiales_01.jpg/800px-Diario_Critica%2C_noticias_policiales_01.jpg"
 *                                  "categoryId" : "rt"
 *                          Creación sin éxito (Se omite el campo categoryId)
 *                              value:
 *                                  "name": "Novedad del día"
 *                                  "content": "La noverdad del día es la siguiente"
 *                                  "image" : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Diario_Critica%2C_noticias_policiales_01.jpg/800px-Diario_Critica%2C_noticias_policiales_01.jpg"
 *          responses:
 *              '200':
 *                  description: OK
 *              '400':
 *                  description: Bad Request
 *              '404':
 *                  description: Not Found
 *              '500p:
 *                  description: Internal Server Error 
 */

//delete

/**
 * @swagger
 * /news/{id}:
 *   delete:
 *       summary: Remove News
 *       tags: [News]
 *       parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: string
 *            required: true
 *            description: The news id
 *       requestBody:
 *          required: true
 *          content:
 *            application/json:
 *              schema:
 *                 type: object
 *                 $ref: '#/components/schemas/New'
 *       responses:
 *         '200':
 *           description: OK
 *         '404':
 *           description: Bad Request
 *         '500':
 *           description: Internal Server Error 
 */

//get news

/**
 * @swagger
 * /news/:
 *   get:
 *       summary: Get News
 *       tags: [News]
 *       parameters: 
 *       requestBody:
 *          required: true
 *          content:
 *            application/json:
 *              schema:
 *                 type: object
 *                 $ref: '#/components/schemas/New'
 *       responses:
 *         '200':
 *           description: OK 
 *         '500':
 *           description: Internal Server Error 
 */

//get new 

/**
 * @swagger
 * /news/{id}:
 *   get:
 *       summary: get New by id
 *       tags: [News]
 *       parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: string
 *            required: true
 *            description: The news id
 *       requestBody:
 *          required: true
 *          content:
 *            application/json:
 *              schema:
 *                 type: object
 *                 $ref: '#/components/schemas/New'
 *       responses:
 *         '200':
 *           description: OK
 *         '404':
 *           description: Bad Request
 *         '500':
 *           description: Internal Server Error 
 */