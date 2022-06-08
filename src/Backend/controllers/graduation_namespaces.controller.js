import { graduationNamespaces } from '../models/index.js';

const GraduationNamespacesController = {
	/*
	 * GET /graduationnamespaces
	 * Returns all graduationnamespaces
	 */
	get(req, res) {
		// Get all graduationnamespaces
		graduationNamespaces.get({}).then((result) => {
			// Get all graduationnamespaces
			res.send(result); // Send all graduationnamespaces
		});
	},

	/*
	 * GET /graduationnamespaces
	 * Get specific graduationnamespaces by id
	 */
	getOne(req, res) {
		graduationNamespaces.get({ id: req.params.id }).then((result) => {
			// Get graduationnamespaces by id
			res.send(result); // Send graduationnamespaces with id = req.params.id
		});
	},

	/*
	 * POST /graduationnamespaces
	 * Create new graduationnamespaces
	 */
	post(req, res) {
		graduationNamespaces.save(req.body).then((result) => {
			// Save graduationnamespaces
			res.send(result); // Send result
		});
	},

	/*
	 * PUT /graduationnamespaces
	 * Update graduationnamespaces
	 */
	put(req, res) {
		graduationNamespaces.update(req.body, { id: req.params.id }).then((result) => {
			// Update graduationnamespaces with id = req.params.id
			res.send(result); // Send result
		});
	},

	/*
	 * DELETE /graduationnamespaces
	 * Delete a graduationnamespaces
	 */
	delete(req, res) {
		graduationNamespaces.delete({ id: req.params.id }).then((result) => {
			// Delete graduationnamespaces with id = req.params.id
			res.send(result); // Send result
		});
	},
};

export default GraduationNamespacesController;