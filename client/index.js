
/* Template.page_controller.display_page = function () {
    var page_index = Session.get('page_url');
    if (page_index.charAt(0) == "/")
        page_index = page_index.substring(1, page_index.length);
    if (Template[page_index]) {
        return Template[page_index]();
    } else {
        return Template['page_not_found']();
    }
}

Template.page_controller.events = {
    'click .navlink': function (event) {
        event.preventDefault();
        // get the path from the link        
        var reg = /.+?\:\/\/.+?(\/.+?)(?:#|\?|$)/;
        var pathname = reg.exec(event.currentTarget.href)[1];
        Router.navigate(pathname, true);
    }
} */
