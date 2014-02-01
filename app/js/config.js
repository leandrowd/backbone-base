require.config({
  baseUrl: "/app/js",
  urlArgs: 'cb=' + Math.random(),
  paths: {
    jquery: '../components/jquery/jquery.min',
    underscore: '../components/underscore/underscore-min',
    backbone: '../components/backbone/backbone-min',
    spec: '../../test/spec'
  },
  shim: {
    backbone: {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    }
  }
});
