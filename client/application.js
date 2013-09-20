// startup code here
var bkg = "images/deer.jpg";

var Router = Backbone.Router.extend({
    routes: {
        ""                : "main",
        ":page"           : "main",
        ":page/:id"       : "content"
    },

    main: function(page) {
        document.body.innerHTML = "";
        document.body.style.backgroundImage = 'url('+bkg+')';
        page = page?page:"home";
        Session.set('page', page);
        var frag = Meteor.render(function() {
            var i = Template['base_page']();
            return i;
        });
        document.body.appendChild(frag);
    },
    content: function(page, id) {
        document.body.innerHTML = "";
        document.body.style.backgroundImage = 'url(../'+bkg+')';
        page = page?page:"home";
        Session.set('page', page);
        if (id) {
            Meteor.call('fetch_pagecontent', id, function(err, resp) {
                if (err || !resp) {
                    Session.set('livecontent', null);
                } else {
                    Session.set('livecontent', resp.html);
                }
            });
        }
        var frag = Meteor.render(function() {
            var i = Template['base_page']();
            return i;
        });
        document.body.appendChild(frag);
    }
});

var app = new Router;
Meteor.startup(function () {
    Backbone.history.start({pushState: true});
    Session.set('page_url', location.pathname);
});
