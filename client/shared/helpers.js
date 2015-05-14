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
        dayClick:function(date,allDay,jsEvent,view){
          var calendarEvent = {};
          calendarEvent.start = date;
          calendarEvent.end = date.add;
          calendarEvent.title = 'New Event';
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
        editable:true,
        resizable: true,
        selectable:true,
        selectHelper: true
      };
    }
});
