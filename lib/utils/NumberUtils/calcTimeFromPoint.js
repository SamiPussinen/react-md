(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.calcTimeFromPoint = mod.exports;
  }
})(this, function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = calcTimeFromPoint;
  function isPointInCircle(cx, cy, r, x, y) {
    var distance = Math.pow(cx - x, 2) + Math.pow(cy - y, 2);
    return distance <= Math.pow(r, 2);
  }

  function toDegrees(radians) {
    return radians * (180 / Math.PI);
  }

  /**
   * Takes a point from a mouse or touch event and a center point of a circle to determine
   * what the new time should be.
   *
   * If the point.y < center.y, the point is in the top half of the circle.
   * If the point.x < center.x, the point is in the left half of the circle.
   *
   * @param {Object} point - The mouse or touch event's point that contains an x and y coordinate.
   * @param {Object} center - The center point for the circle that contains an x and y coordinate.
   * @param {Number} innerRadius - An inner radius for clocks that have 24 hour times. This is
   *    a circle that contains hours 12-23.
   * @param {Boolean} minutes - Boolena if the current time to be calculated is minutes instead of
   *    hours.
   * @param {Boolean} hour12 - Boolean if the clock is a 12 hour clock.
   * @return {Number} the new time.
   */
  function calcTimeFromPoint(point, center, innerRadius, minutes, hour12) {
    var x = point.x - center.x;
    var y = point.y - center.y;
    var degrees = toDegrees(Math.atan2(y, x));
    var sectors = minutes ? 60 : 12;
    var sectorSize = 360 / sectors;
    var time = Math.round(degrees / sectorSize);

    // Since the css transform has 0π at π/2 place, we need to offset the
    // time to that location.
    time += minutes ? 15 : 3;

    // If time is still negative, it is in the top half of the circle
    if (time < 0) {
      time += sectors;
    }

    // Finally, if it is a 24 hour clock, need to check if the point is actually
    // selecting hours 13 - 24 (0).
    if (!minutes && !hour12) {
      var isInCircle = isPointInCircle(0, 0, innerRadius, x, y);

      if (time === 0 && !isInCircle || time !== 0 && isInCircle) {
        time += 12;
      }
    }

    return time;
  }
});