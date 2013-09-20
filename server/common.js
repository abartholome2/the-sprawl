Meteor.methods({
    'upvote_feature' : function(id) {
        Features.update(id, {$inc: {rating: 1}});
    },
    'downvote_feature' : function(id) {
        Features.update(id, {$inc: {rating: -1}});
    },
});

