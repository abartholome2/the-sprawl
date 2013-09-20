
// add user account parameters here
Meteor.publish("userData", function() {
    return Meteor.users.find(
        { _id: this.userId },
        { fields: 
            { 
                'sessions': 1 ,
                'contents': 1
            } 
        }
        );
});
