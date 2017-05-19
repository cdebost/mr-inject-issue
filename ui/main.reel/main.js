/**
 * @module ui/main.reel
 */
var Component = require("montage/ui/component").Component;

require.inject("nonexistent-file", require("core/inject"));

require("somepackage/foo");

/**
 * @class Main
 * @extends Component
 */
exports.Main = Component.specialize(/** @lends Main# */ {

});
