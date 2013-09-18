Template.content.html = function() {
    return Template[Session.get('page')]();
}

Template.feature_entry.baseurl = function() {
    return Meteor.absoluteUrl()+Session.get('page');
}
Template.feature_entry.events({
    'click .upvote' : function(obj) {
        Meteor.call('upvote_feature', obj.toElement.id);
        Meteor.call('fetch_content_features', Session.get('page'), function(error, result) {
            if (error) return;
            Session.set('feature_list', result);
        });
    },
    'click .downvote' : function(obj) {
        Meteor.call('downvote_feature', obj.toElement.id);
        Meteor.call('fetch_content_features', Session.get('page'), function(error, result) {
            if (error) return;
            Session.set('feature_list', result);
        });
    }
});
