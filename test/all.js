require.inject("nonexistent-file", require("core/inject"));

require("montage-testing").run(require,[
    // Please keep in alphabetical order
    "test/bar-test"

]);
