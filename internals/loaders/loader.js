/* eslint-disable */

var tags = ['a', 'abbr', 'address', 'area', 'article', 'aside', 'audio', 'b',
'base', 'bdi', 'bdo', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption',
'cite', 'code', 'col', 'colgroup', 'command', 'datalist', 'dd', 'del', 'details',
'dfn', 'div', 'dl', 'doctype', 'dt', 'em', 'embed', 'fieldset', 'figcaption',
'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header',
'hr', 'html', 'i', 'iframe', 'img', 'input', 'ins', 'kbd', 'keygen', 'label',
'legend', 'li', 'link', 'main', 'map', 'mark', 'menu', 'meta', 'meter', 'nav',
'noscript', 'object', 'ol', 'optgroup', 'option', 'output', 'p', 'param', 'pre',
'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'script', 'section', 'select',
'small', 'source', 'span', 'strong', 'style', 'sub', 'summary', 'sup', 'table',
'tbody', 'td', 'textarea', 'tfoot', 'th', 'thead', 'time', 'title', 'tr', 'track',
'u', 'ul', 'var', 'video', 'wbr', 'svg',
'altGlyph', 'altGlyphDef', 'altGlyphItem', 'animate', 'animateColor',
'animateMotion', 'animateTransform', 'circle', 'clipPath', 'color-profile',
'cursor', 'defs', 'desc', 'ellipse', 'feBlend', 'feColorMatrix',
'feComponentTransfer', 'feComposite', 'feConvolveMatrix', 'feDiffuseLighting',
'feDisplacementMap', 'feDistantLight', 'feFlood', 'feFuncA', 'feFuncB',
'feFuncG', 'feFuncR', 'feGaussianBlur', 'feImage', 'feMerge', 'feMergeNode',
'feMorphology', 'feOffset', 'fePointLight', 'feSpecularLighting',
'feSpotLight', 'feTile', 'feTurbulence', 'filter', 'font', 'font-face',
'font-face-format', 'font-face-name', 'font-face-src', 'font-face-uri',
'foreignObject', 'g', 'glyph', 'glyphRef', 'hkern', 'image', 'line',
'linearGradient', 'marker', 'mask', 'metadata', 'missing-glyph', 'mpath',
'path', 'pattern', 'polygon', 'polyline', 'radialGradient', 'rect',
'set', 'stop', 'switch', 'symbol', 'text', 'textPath', 'title', 'tref',
'tspan', 'use', 'view', 'vkern'];

module.exports = function loader(source) {
  var output = source;
  var matchedTags = source.match(/(\<)([A-Za-z0-9]+)(\>|\S)/g);
  var doneTags = {};

  (matchedTags || []).forEach(function(rawTag) {
    var tag = rawTag.replace('<', '').replace('>', '').trim();
    var openTag = '<' + tag;
    var yoString = ' yo=${' + tag + '} ';

    if (!doneTags[tag] && tags.indexOf(tag) === -1 && source.indexOf('yo`') !== -1) {
      doneTags[tag] = true;
      output = output.replace(new RegExp(openTag, 'g'), openTag + yoString);
    }
  });

  return output;
};
