# transformer.base64-to-buffer

[Transformer](http://github.com/jbenet/transformer) conversion: base64 to buffer

This module is a transformer conversion, published on npm. Read more about transformer at:

- the transformer website: <http://transform.datadex.io>
- the transformer repository: <http://github.com/jbenet/transformer>

## Usage

Use this module through transformer.

### Javascript

```js
var transformer = require('dat-transformer');
var tBase64ToBuffer = transformer('base64', 'buffer');
tBase64ToBuffer('YmVlcCBib29w'); // new Buffer('beep boop', 'ascii')
```
