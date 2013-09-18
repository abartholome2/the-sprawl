Meteor.startup(function() {
});

Meteor.methods({
    'get_username' : function(userid) {
        var usr = Meteor.users.findOne(userid);
        if (usr) {
            return usr.emails[0].address;
        } else {
            return "unknown";
        }
    }
});
