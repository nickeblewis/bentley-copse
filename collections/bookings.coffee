@Bookings = new Meteor.Collection('bookings');

Schemas.Bookings = new SimpleSchema
	name:
		type: String
		max: 60

	title:
		type: String
		max: 60

	content:
		type: String
		autoform:
			rows: 5

	createdAt:
		type: Date
		autoValue: ->
			if this.isInsert
				return new Date()
	bookingDateStart:
		type: Date

	bookingDateEnd:
		type: Date

	owner:
        type: String
        regEx: SimpleSchema.RegEx.Id
        autoValue: ->
            if this.isInsert
                return Meteor.userId()
        autoform:
            options: ->
                _.map Meteor.users.find().fetch(), (user)->
                    label: user.emails[0].address
                    value: user._id


Bookings.attachSchema(Schemas.Bookings)
