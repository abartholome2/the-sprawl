/* var Future = Npm.require("fibers/future");
var parseString = Npm.require('xml2js').parseString;

XML2JS = {
    parse: function(xml, options) {
        var future = new Future;
        var cb = future.resolver();
        parseString(xml, options || {}, cb);
        return future.wait();
    }
}; */
