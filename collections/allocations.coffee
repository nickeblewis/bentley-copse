@Allocations = new Meteor.Collection('allocations');

Schemas.Allocations = new SimpleSchema
	name:
		type:String
		max: 60


Allocations.attachSchema(Schemas.Allocations)
