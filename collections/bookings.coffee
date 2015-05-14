@Bookings = new Meteor.Collection('bookings');

Schemas.Bookings = new SimpleSchema
	name:
		type:String
		max: 60


Bookings.attachSchema(Schemas.Bookings)
