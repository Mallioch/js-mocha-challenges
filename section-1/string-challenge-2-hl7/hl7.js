var PIDParser = {

  name: function(data) {
    var pieces = data.split('|');
    return pieces[5];
  },

  birthYear: function(data) {
    var pieces = data.split('|');
    var date = pieces[7];
    return date.substr(0, 4);
  },

  birthMonth: function(data) {
    var pieces = data.split('|');
    var date = pieces[7];
    return date.substr(4, 2);
  },

  birthDay: function(data) {
    var pieces = data.split('|');
    var date = pieces[7];
    return date.substr(6, 2);
  }
}

var MSHParser = {

  type: function(data) {
    var pieces = data.split('|');
    return pieces[8];
  },

  sendingApplication: function(data) {
    var pieces = data.split('|');
    return pieces[2];
  },

  sendingFacility: function(data) {
    var pieces = data.split('|');
    return pieces[3];
  }

}
