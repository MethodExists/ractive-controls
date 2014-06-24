(function(Ractive){

  var ractive = new Ractive({
    el: "ractiveContainer",
    template: "#controlsTemplate",
    data: {
      checkboxes: [
        {label: "Checked", editable: true, value: true},
        {label: "Unchecked", editable: true, value: false},
        {label: "Non editable true", editable: false, value: true},
        {label: "Non editable false", editable: false, value: false}
      ]
    }
  });

})(Ractive);