import { easeInQuad } from './easings';

let rAF = window.requestAnimationFrame;

const leaper = () => {

  let element;

  let start;
  let stop;
  
  let offset;
  let easing;

  let distance;
  let duration;

  let timeStart;
  let timeElapsed;

  let next;

  let callback;

  function getLocation() {
    return window.scrollY || window.pageYOffset;
  }

  function getTopOffset( element ) {
    return element.getBoundingClientRect().top + start;
  }

  function loop( now ) {

    // store time started if not already started
    if ( !timeStart ) {
      timeStart = now;
    }

    // determine time spent scrolling so far
    timeElapsed = now - timeStart;

    // calculate next scroll position
    next = easing( timeElapsed, start, distance, duration );

    // scroll to it
    window.scrollTo( 0, next );
    
    // check progress
    timeElapsed < duration
      ? rAF( loop )
      : done();
  }

  function done() {
    // account for rAF rounding inaccuracies
    window.scrollTo(0, start + distance);

    // fire callback if it exists
    if ( typeof callback === 'function' ) {
      callback();
    }

    // reset timer
    timeStart = false;
  }

  // public api
  function api( target, opts = {} ) {
    // set some defaults
    duration = opts.duration || 1000;
    easing   = opts.easing   || easeInQuad;
    offset   = opts.offset   || 0;
    callback = opts.callback || undefined;

    // cache starting position
    start = getLocation();

    // resolve target
    switch ( typeof target ) {
      case 'number':
        element = undefined;
        stop = start + target;
        break;
      
      case 'string':
        element = document.querySelector( target );
        stop = getTopOffset( element );
        break;
    }

    // resolve scroll distance, accounting for offset
    distance = stop - start + offset;

    // start the loop
    rAF( loop );
  }

  return api;

}

export default leaper();