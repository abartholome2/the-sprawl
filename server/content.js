Meteor.methods({
    'add_content' : function(options) {
        if (!options.name) {
            console.log("no name given");
            return null;
        }
        return Contents.insert(options);
    },

    'add_pagecontent' : function(options) {
        if (!options.html) {
            console.log("no html given");
            return null;
        }
        return PageContents.insert(options);
    },

    'fetch_content_features': function(content_name) {
        var vals = Contents.findOne({'name':content_name}).features;
        var fts = Features.find({$query: {'_id': {$in: vals}}, 
            $orderby: {'rating':-1}}).fetch();
        return fts;
    },

    'fetch_pagecontent' : function(content_id) {
        return PageContents.findOne(content_id);
    },

    'add_feature' : function(options) {
        if (!options.title || !options.pagecontent) {
            console.log("no title given");
            return null;
        }

        if (!options.content_id) {
            console.log("no parent content given");
            return null;
        }

        var time = new Date().getTime();
        var d = new Date(time).toString();
        options.date_created  = d;
        options.date_modified = d;

        var fid = Features.insert(options);
        Contents.update(options.content_id, 
                {$push: {
                            'features': fid
                        }
                });
    },
});

