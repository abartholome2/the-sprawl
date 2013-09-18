
var navbar_elems = function() {
    return [
        { 'name':'home', },
        { 'name':'muzak',},
        { 'name':'vilm', },
        { 'name':'pron', },
        { 'name':'fuckness', },
        { 'name':'cyberpunk', },
    ];
}

var isActive = function(page) {
    if (Session.get('page') == page) { return true; }
    return false;
};

Template.web_navbar_top.navbar_elems = function() {
    return navbar_elems;
};

Template.web_navbar_top.active = function() {
    return isActive(this.name.toLowerCase());
};

Template.navbar_elem.formatted_name = function() {
    return this.name.charAt(0).toUpperCase() + this.name.slice(1);
}
