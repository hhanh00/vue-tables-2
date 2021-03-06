module.exports = function(data) {

  if (typeof axios!=='undefined')
    return axios.get(this.url,{params:data}).catch(function(e) {
      this.dispatch('error', e);
    }.bind(this));

  if (typeof this.$http!=='undefined')
  return this.$http.get(this.url, {params:data}).then(function(data) {
    return data.json();
  }.bind(this),  function(e) {
    this.dispatch('error', e);
  }.bind(this));

  if (typeof $!='undefined')
    return $.getJSON(this.url, data).fail(function(e) {
      this.dispatch('error', e);
    }.bind(this));

  throw "vue-tables: No supported ajax library was found. (jQuery, axios or vue-resource)";
}
