const mongoose = require('mongoose');

const soundSchema = new mongoose.Schema({
	id: {
		type: String,
		required: true,
	},
	published_at: {
		type: Number,
		required: true,
	},
	title: {
		type: String,
		required: true,
	},
	audio: {
		type: String,
		required: true,
	},
});

const Sound = mongoose.model('Sound', soundSchema);

module.exports = Sound;
