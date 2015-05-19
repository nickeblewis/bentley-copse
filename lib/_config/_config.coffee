@Config =
	name: 'Bentley Copse Scout Campsite'
	title: ->
			TAPi18n.__ 'configTitle'
	subtitle: ->
			TAPi18n.__ 'configSubtitle'
	logo: ->
		'<b>' + @name + '</b>'
	footer: ->
		@name + ' - Copyright ' + new Date().getFullYear()
	emails:
		from: 'noreply@' + Meteor.absoluteUrl()
	blog: 'http://meteorfactory.io'
	about: 'http://meteorfactory.io'
	username: false
	homeRoute: '/'
	dashboardRoute: '/dashboard'

	defaultLanguage: 'en'
	dateFormat: 'D/M/YYYY'

	socialMedia:
		facebook:
			url: 'http://facebook.com/nicklewis'
			icon: 'facebook'
		twitter:
			url: 'http://twitter.com/nicklewis'
			icon: 'twitter'
		github:
			url: 'http://github.com/nickeblewis'
			icon: 'github'
		info:
			url: 'http://nicklewis.net'
			icon: 'link'

	publicRoutes: ['home']
