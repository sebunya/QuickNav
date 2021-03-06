window.Template = {
  templates: {},
  loadTemplates: function(names, callback) {
    var self = this;
    var loadTemplate = function(index) {
      var name = names[index];
      $.get('assets/templates/' + name + '.html', function(data) {
        self.templates[name] = data;
        index++;
        if (index < names.length) {
          loadTemplate(index);
        } else {
          callback();
        }
      }, 'text');
    };
    loadTemplate(0);
  },
  get: function(name) {
    return this.templates[name];
  }
};

function _try (_function) {
  try{
    _function();
  }catch(e){
    console.log(e);
    alert(e.message);
  }
}