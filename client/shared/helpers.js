CalEvent = new Mongo.Collection('calevent');
Template.registerHelper('Config', function() {
  return Config;
});

Template.registerHelper('NCSchemas', function() {
  return NCSchemas;
});

Template.registerHelper('socialMedia', function() {
  return _.map(Config.socialMedia, function(obj) {
    return obj;
  });
});

Template.registerHelper('Utils', function() {
  return Utils;
});

Template.calendar.helpers({
	calendarOptions: {
		// Standard fullcalendar options
		height: 700,
		hiddenDays: [ 0 ],
		slotDuration: '01:00:00',
		minTime: '08:00:00',
		maxTime: '19:00:00',
		lang: 'fr',
		// Function providing events reactive computation for fullcalendar plugin
		events: function(start, end, timezone, callback) {
			//console.log(start);
			//console.log(end);
			//console.log(timezone);
			var events = [];
			// Get only events from one document of the Calendars collection
			// events is a field of the Calendars collection document
			var calendar = Calendars.findOne(
				{ "_id":"myCalendarId" },
				{ "fields": { 'events': 1 } }
			);
			// events need to be an array of subDocuments:
			// each event field named as fullcalendar Event Object property is automatically used by fullcalendar
			if (calendar && calendar.events) {
				calendar.events.forEach(function (event) {
					eventDetails = {};
					for(key in event)
						eventDetails[key] = event[key];
					events.push(eventDetails);
				});
			}
			callback(events);
		},
		// Optional: id of the calendar
		id: "calendar1",
		// Optional: Additional classes to apply to the calendar
		addedClasses: "col-md-8",
		// Optional: Additional functions to apply after each reactive events computation
		autoruns: [
			function () {
				console.log("user defined autorun function executed!");
			}
		]
	},
    options: function() {
      return {
        header: {
          left: 'prev,next today',
          center: 'title',
          right: 'month,agendaWeek,agendaDay'
        },
        dayClick:function(date,allDay,jsEvent,view){
          var calendarEvent = {};
          calendarEvent.start = date;
          calendarEvent.end = date;
          calendarEvent.title = 'New Booking';
          calendarEvent.owner = Meteor.userId();
          Meteor.call('saveCalEvent',calendarEvent);
        },
        eventClick:function(calEvent,jsEvent,view){
          Session.set('editing_event',calEvent._id);
          $('#title').val(calEvent.title);
        },
        eventDrop:function(reqEvent){
          Meteor.call('moveEvent',reqEvent);
        },
        events:function(start,end,callback){
          var calEvents = CalEvent.find({},{reactive:false}).fetch();
          callback(calEvents);
        },
        defaultDate: '2015-05-12',
        timezone: 'Europe/London',
        timeFormat: 'H(:mm)',
        events: [
				{
					title: 'All Day Event',
					start: '2015-05-01'
				},
				{
					title: 'Long Event',
					start: '2015-05-07',
					end: '2015-05-10'
				},
				{
					id: 999,
					title: 'Repeating Event',
					start: '2015-05-09T16:00:00'
				},
				{
					id: 999,
					title: 'Repeating Event',
					start: '2015-05-16T16:00:00'
				},
				{
					title: 'Conference',
					start: '2015-05-11',
					end: '2015-05-13'
				},
				{
					title: 'Meeting',
					start: '2015-05-12T10:30:00',
					end: '2015-05-12T12:30:00'
				},
				{
					title: 'Lunch',
					start: '2015-05-12T12:00:00'
				},
				{
					title: 'Meeting',
					start: '2015-05-12T14:30:00'
				},
				{
					title: 'Happy Hour',
					start: '2015-05-12T17:30:00'
				},
				{
					title: 'Dinner',
					start: '2015-05-12T20:00:00'
				},
				{
					title: 'Birthday Party',
					start: '2015-05-13T07:00:00'
				}],
        // TODO: Add the actions back in here
        defaultView: 'agendaWeek',
        editable:true,
        resizable: true,
        selectable:true,
        selectHelper: true
      };
    }
});
