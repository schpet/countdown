// Generated by CoffeeScript 1.4.0
(function() {
  var $body, christmas, days, diff, elements, hours, minutes, present, seconds, time, times, x, _i, _len;

  christmas = new Date(2013, 0, 28, 18, 41);

  present = new Date();

  diff = christmas.getTime() - present.getTime();

  if (diff <= 0) {
    return alert('!!!!!!!!!!!!!!!!!');
  }

  seconds = Math.floor(diff / 1000);

  minutes = Math.floor(seconds / 60);

  hours = Math.floor(minutes / 60);

  days = Math.floor(hours / 24);

  minutes = minutes / 10;

  times = [
    {
      num: days,
      elClass: 'days',
      containerId: 'days'
    }, {
      num: hours,
      elClass: 'hours',
      containerId: 'hours'
    }, {
      num: minutes,
      elClass: 'minutes',
      containerId: 'minutes'
    }
  ];

  for (_i = 0, _len = times.length; _i < _len; _i++) {
    time = times[_i];
    if (time.num > 0) {
      elements = (function() {
        var _j, _ref, _results;
        _results = [];
        for (x = _j = 1, _ref = time.num; 1 <= _ref ? _j <= _ref : _j >= _ref; x = 1 <= _ref ? ++_j : --_j) {
          _results.push("<div class=\"" + time.elClass + "\" />");
        }
        return _results;
      })();
      $("#" + time.containerId).append(elements.join(''));
    }
  }

  $body = $('body');

  $(document).on('mousemove', function(e) {
    var val;
    val = ((e.pageX + e.pageY) * 0.4) % 400;
    return $body.css('background-color', "hsl(" + val + ", 100%, 50%)");
  });

}).call(this);
