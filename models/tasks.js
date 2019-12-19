const jazzdb = require('jazzdb');

class TaskModel extends jazzdb.Model {
	name = 'tasks';

	attributes = {
		title: {
			required: true,
			type: jazzdb.AttributeTypes.String
		},
		description: {
			required: true,
			type: jazzdb.AttributeTypes.String
		},
		owner: {
			required: true,
			type: jazzdb.AttributeTypes.String
		},
		status: {
			required: true,
			type: jazzdb.AttributeTypes.String
		}
	};

	async load() {
		return super.load();
	}
	
	async save() {
		return super.save();
	}
	
	create(data) {
		return super.create(data);
	}
	
	delete(id) {
		return super.delete(id);
	}
	
	get(id) {
		return super.get(id);
	}

	toArray() {
    return super.toArray();
	}
	
	update(id, data) {
    return super.update(id, data);
  }
}

module.exports.TaskModel = TaskModel;
