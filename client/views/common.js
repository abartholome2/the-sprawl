Template.home.rendered = function() {
    var app = new GfxApp('game');
    console.log(app);
    app.init(function() {
        setInterval(function() { app.render(); }, 1000/30);
        setInterval(function() { app.tick(); }, 1000/30);
        // app.scene.camera.setLocation([0, 1000, -10]);

        // app.resources.onAllAssetsLoaded(function() {
        // var landscapeController = LandscapeController.Create(app);    
            // app.resources.onAllAssetsLoaded(function() {
                // app.overlay.removeItem(backdrop);
                // app.overlay.removeItem(backdropspinner);
                // clearInterval(spinnerInterval);    
            // });
        // });
    });
};

Template.setup.rendered = function() {
    if (!window._gaq) {
        window._gaq = [];
        _gaq.push(['_setAccount', 'UA-44237266-1']);
        _gaq.push(['_trackPageview']);

        (function() {
        ga = document.createElement('script'); 
        ga.type = 'text/javascript'; 
        ga.async = true;
        gajs = '.google-analytics.com/ga.js';
        ga.src = ('https:' == document.location.protocol) ? 'https://ssl'+gajs : 'http://www'+gajs; 
        s = document.getElementsByTagName('script')[0]; 
        s.parentNode.insertBefore(ga, s);
        })();
    }
};

Template.login_alert.home = function() {
    return Meteor.absoluteUrl();
};
