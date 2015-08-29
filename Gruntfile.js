module.exports = function(grunt) {
  // Do grunt-related things in here
  pkg:grunt.file.readJSON('package.json'),
  uglify:{
  	build:{
  		src:'src/<%=pkg.name%>.js',
  		dest:'build/<%pkg.name%>.min.js'
  	}
  }
};