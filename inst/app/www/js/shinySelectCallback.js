
var shinySelectCallback = new Shiny.InputBinding();



// An input binding must implement these methods
$.extend(shinySelectCallback, {


  // This returns a jQuery object with the DOM element
  find: function(scope) {
    // return $(scope).find('.saxophon');
    return $(scope).find('.shiny-select-callback');
  },

  // return the ID of the DOM element
  getId: function(el) {
    // alert(el.id);
    return el.id;
  },

  // Given the DOM element for the input, return the value
  getValue: function(el) {

    var values = new Array();

    // collect all selected ids from select options
    $.each($(el).find("option:selected"), function() {
      values.push($(this).attr('id'));
    });

    return values;
  },

  // Given the DOM element for the input, set the value
  setValue: function(el, value) {
    el.value = value;
  },

  // Set up the event listeners so that interactions with the
  // input will result in data being sent to server.
  // callback is a function that queues data to be sent to
  // the server.
  subscribe: function(el, callback) {
    $(el).on('change.shinySelectCallback', function(event) {
     callback(true);
    });
  },

  // Remove the event listeners
  unsubscribe: function(el) {
    $(el).off('.shinySelectCallback');
  },

  // Receive messages from the server.
  // Messages sent by updateUrlInput() are received by this function.
  // receiveMessage: function(el, data) {
  //   if (data.hasOwnProperty('value'))
  //     this.setValue(el, data.value);

  //   if (data.hasOwnProperty('label'))
  //     $(el).parent().find('label[for="' + $escape(el.id) + '"]').text(data.label);

  //   $(el).trigger('change');
  // },

  // This returns a full description of the input's state.
  // Note that some inputs may be too complex for a full description of the
  // state to be feasible.
  // getState: function(el) {
  //   return {
  //     label: $(el).parent().find('label[for="' + $escape(el.id) + '"]').text(),
  //     value: el.value
  //   };
  // },

  // The input rate limiting policy
  // getRatePolicy: function() {
  //   return {
  //     // Can be 'debounce' or 'throttle'
  //     policy: 'debounce',
  //     delay: 500
  //   };
  // }
});

Shiny.inputBindings.register(shinySelectCallback, 'shiny.shinySelectCallback');
