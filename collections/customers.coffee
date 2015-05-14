@Customers = new Meteor.Collection('customers');

Schemas.Customers = new SimpleSchema
	name:
		type:String
		max: 255

	contact:
		type:String
		max: 255

	address1:
		type:String
		max: 255

	address2:
		type:String
		max: 255
		optional:true

	town:
		type:String
		max: 255

	county:
		type:String
		max: 255

	postcode:
		type:String
		max: 50

	email:
		type:String
		max:150

	phone:
		type:String
		max:50

	mobile:
		type:String
		max:50

Customers.attachSchema(Schemas.Customers)
