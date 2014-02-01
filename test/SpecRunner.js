define('../app/js/config', function (){
  require(['jquery', 'spec/index'], function($, index) {
    var jasmineEnv = jasmine.getEnv(),
        htmlReporter = new jasmine.HtmlReporter();

    jasmineEnv.addReporter(htmlReporter);

    jasmineEnv.specFilter = function(spec) {
      return htmlReporter.specFilter(spec);
    };

    $(function() {
      require(index.specs, function() {
        jasmineEnv.execute();
      });
    });
  });
});
