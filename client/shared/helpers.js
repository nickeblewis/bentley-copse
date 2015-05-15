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
    options: function() {
      return {
        header: {
          left: 'prev,next today',
          center: 'title',
          right: 'month,agendaWeek,agendaDay'
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
