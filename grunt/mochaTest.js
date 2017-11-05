var path = require('path');

var mocha = {
    options: {
	    quiet: false,
		require: "ts-node/register"
	},
    'typescript': {
        src: [
            './typescript/tests/**/*.ts'
        ]
    }
};

module.exports = function(grunt){

    'use strict';
    /*
    grunt.event.on('watch', function(action, filepath){


    });
    */
    return mocha;

};
