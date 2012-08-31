var app = {
    initialize: function() {
        this.bind();
        
    },
    bind: function() {
        document.addEventListener('deviceready', this.deviceready, false);
    },
    deviceready: function() {
        // note that this is an event handler so the scope is that of the event
        // so we need to call app.report(), and not this.report()
				

                
		console.log("Hello world!");
		console.log(window.hello);
		console.log("prestart");
		console.log(window.redditapp);
		window.redditapp.start()

		//window.redditapp.start();
		console.log("poststart");
		app.report('deviceready');
    },
    report: function(id) { 
        console.log("report:" + id);
    }
};
