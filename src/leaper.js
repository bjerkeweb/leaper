let rAF = window.requestAnimationFrame;

const leaper = () => {

  let element;

  let start;
  let stop;

  let duration;

  let easing;

  let elapsed;

  function getLocation() {
    return window.scrollY || window.pageYOffset;
  }

  // public api
  function api({ target, opts = {} }) {
    duration = opts.duration || 1000;
  }


  return api;

}

let singleton = leaper();

export default singleton;