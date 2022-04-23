/**
 * @swagger
 * components:
 *  schemas:
 *    Testimonial:
 *       type: object
 *       properties:
 *          name:
 *            type: string
 *            description: the testimonial's name
 *          image:
 *            type: string
 *            description: any image 
 *          content:
 *            type: string
 *            description: is a text about news of the ONG
 *       required:
 *         - name
 *         - content
 *       example:
 *          name: Aniversario Fundación Somos Más!
 *          image: picture.jpg
 *          content: Este mes se hará un evento con motivo de festejar nuestro aniversario.
 *      
 */

/**
 * @swagger
 * /testimonials:
 *   post:
 *       summary: create a new testimonial
 *       tags: [Testimonial]
 *       requestBody:
 *          required: true
 *          content:
 *            application/json:
 *              schema:
 *                 type: object
 *                 $ref: '#/components/schemas/Testimonial'
 *              examples:
 *                registro exitoso:
 *                  value:    
 *                    "name": "Aniversario Fundación Somos Más!"
 *                    "image": "picture.jpg"
 *                    "content" : "Este mes se hará un evento con motivo de festejar nuestro aniversario."
 *                registro exitoso (No contiene nombre):
 *                  value:    
 *                    "image": "picture.jpg"
 *                    "content" : "Este mes se hará un evento con motivo de festejar nuestro aniversario."
 *                registro sin éxito (No contiene texto):
 *                  value:    
 *                    "name": "Aniversario Fundación Somos Más!"
 *                    "image": "picture.jpg"
 *       responses:
 *         '201':
 *           description: created
 *         '500':
 *           description: Internal server error
 */

/**
 * @swagger
 * /testimonials/{id}:
 *   put:
 *       summary: update testimonials
 *       tags: [Testimonial]
 *       parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: string
 *            required: true
 *            description: the testimonial id
 *       requestBody:
 *          required: true
 *          content:
 *            application/json:
 *              schema:
 *                 type: object
 *                 $ref: '#/components/schemas/Testimonial'
 *              examples:
 *                registro exitoso:
 *                  value:    
 *                    "name": "Aniversario Fundación Somos Más!"
 *                    "image": "picture.jpg"
 *                    "content" : "Este mes se hará un evento con motivo de festejar nuestro aniversario."
 *                registro sin éxito (No contiene nombre):
 *                  value:    
 *                    "image": "picture.jpg"
 *                    "content" : "Este mes se hará un evento con motivo de festejar nuestro aniversario."
 *                registro sin éxito (No contiene texto):
 *                  value:    
 *                    "name": "Aniversario Fundación Somos Más!"
 *                    "image": "picture.jpg"
 *       responses:
 *         '200':
 *           description: the testimonial has been updated
 *         '404':
 *           description: the id 4 does not exist
 *         '500':
 *           description: the testimonial has not been updated
 */

/**
 * @swagger
 * /testimonials/{id}:
 *   delete:
 *       summary: remove testimonials
 *       tags: [Testimonial]
 *       parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: string
 *            required: true
 *            description: the testimonial id
 *       requestBody:
 *          required: true
 *          content:
 *            application/json:
 *              schema:
 *                 type: object
 *                 $ref: '#/components/schemas/Testimonial'
 *       responses:
 *         '200':
 *           description: the testimonial has been deleted
 *         '404':
 *           description: the id 4 does not exist
 *         '500':
 *           description: the testimonial has not been deleted
 */