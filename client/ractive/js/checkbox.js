/*
# Checkbox
A ractive component to display data
*/

(function(Ractive){
console.log("njfnjfnjfnjf");
  var checkbox = Ractive.extend({
    template: "#checkboxTemplate",
    beforeInit: function(){

    },
    init: function(){
      var self = this;
      this.on("toggleval", function(){
        this.set("value", !this.get("value"));
      });
    },
    computed: {
      formattedValue: function(){
        return this.get("value")? "yes":"no";
      }
    }
  });

  Ractive.components.checkbox = checkbox;

})(Ractive);