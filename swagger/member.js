
/**
 * @swagger
 * components:
 *  schemas:
 *    Member:
 *       type: object
 *       properties:
 *          id:
 *           type: int  
 *          name:
 *            type: string
 *            description: the members' name
 *          facebookUrl:
 *            type: string
 *            description: the members' link to facebook
 *          instagramUrl:
 *            type: string
 *            description: the members' link to instagram
 *          image:
 *            type: string
 *            description: the members' Image
 *          description:
 *            type: string
 *            description: the members' description something
 *          linkedinUrl:
 *            type: string
 *            description: the members' description linkedin
 *       required:
 *         - name
 *         - image
 *       example:
 *        name: Merecedez Estafania 
 *        image: "google.com"
 */


/** ================= POST =============================
 * @swagger
 * /members/:
 *  post:
 *      summary: create a new member
 *      tags: [Member]
 *      requestBody:
 *         required: true 
 *         content:
 *          application/json:
 *           schema:
 *             type: object
 *             $ref: '#/components/schemas/Member' 
 *      responses:
 *        200:
 *           description: new user created
 *        400:
 *           description: something happened, please call the admin 
 */

/** --------------Get By ID------------------------------
 * @swagger
 * /members/{id}:
 *  delete:
 *     summary: delete a member
 *     tags: [Member]
 *     parameters:
 *        - in: path
 *          name: id
 *          schema:
 *              type: string
 *              required: true
 *     responses:
 *      200:
 *        description: Member deleted successfully
 *        content:
 *          application/json:
 *            schema:
 *               $ref: '#/components/schemas/Member'
 *      404:
 *         description: Member not found
 */



/** --------------Get By ID------------------------------
 * @swagger
 * /members/:
 *  get:
 *     summary: delete a member
 *     tags: [Member]
 *     responses:
 *      200:
 *        description: Member deleted successfully
 *        content:
 *          application/json:
 *            schema:
 *               $ref: '#/components/schemas/Member'
 *      404:
 *         description: Member not found
 */

