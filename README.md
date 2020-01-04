# Leaper
A (tiny) vanilla javascript smooth scrolling library for modern browsers

## Usage

### Install
To install Leaper, add to your `package.json` dependencies
```bash
npm install leaper
```

### Import
Import Leaper, naming it however you'd like
```es6
import leap from 'leaper';
```

### Call
Leaper exports a single instance, so all you need to do is pass a target selector. The instance can be called multiple times

```es6
leap('.target');
```

## Options
Aside from **target**, all options are optional. The defaults are shown below
```es6
// defaults
leap('.target', {
  duration: 1000,
  easing: easeInQuad,
  offset: 0,
  callback: undefined
});
```

### Target
To scroll to a DOM element on the page, pass a valid css selector. To scroll a fixed amount *from the current position*, pass an integer.
```es6
// scroll to DOM element
leap('.target-selector')
```

```es6
// scroll down by 200px
leap(200);

// scroll up by 200px
leap(-200);
```

## Browser Support

Leaper relies on the [requestAnimationFrame](https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame) API, which is [supported in all modern browsers](https://caniuse.com/#feat=requestanimationframe). If you need to support an older browser, consider adding a pollyfil.

## License
[MIT](https://opensource.org/licenses/MIT) &copy;2020 John Bjerke