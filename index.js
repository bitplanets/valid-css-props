var _validCSSProps = {
  'alignment-adjust': true,
  'alignment-baseline': true,
  'animation': true,
  'animation-delay': true,
  'animation-direction': true,
  'animation-duration': true,
  'animation-iteration-count': true,
  'animation-name': true,
  'animation-play-state': true,
  'animation-timing-function': true,
  'appearance': true,
  'backface-visibility': true,
  'background': true,
  'background-attachment': true,
  'background-clip': true,
  'background-color': true,
  'background-image': true,
  'background-origin': true,
  'background-position': true,
  'background-repeat': true,
  'background-size': true,
  'baseline-shift': true,
  'bookmark-label': true,
  'bookmark-level': true,
  'bookmark-target': true,
  'border': true,
  'border-bottom': true,
  'border-bottom-color': true,
  'border-bottom-left-radius': true,
  'border-bottom-right-radius': true,
  'border-bottom-style': true,
  'border-bottom-width': true,
  'border-collapse': true,
  'border-color': true,
  'border-image': true,
  'border-image-outset': true,
  'border-image-repeat': true,
  'border-image-slice': true,
  'border-image-source': true,
  'border-image-width': true,
  'border-left': true,
  'border-left-color': true,
  'border-left-style': true,
  'border-left-width': true,
  'border-radius': true,
  'border-right': true,
  'border-right-color': true,
  'border-right-style': true,
  'border-right-width': true,
  'border-spacing': true,
  'border-style': true,
  'border-top': true,
  'border-top-color': true,
  'border-top-left-radius': true,
  'border-top-right-radius': true,
  'border-top-style': true,
  'border-top-width': true,
  'border-width': true,
  'bottom': true,
  'box-align': true,
  'box-decoration-break': true,
  'box-direction': true,
  'box-flex': true,
  'box-flex-group': true,
  'box-lines': true,
  'box-ordinal-group': true,
  'box-orient': true,
  'box-pack': true,
  'box-shadow': true,
  'box-sizing': true,
  'caption-side': true,
  'clear': true,
  'clip': true,
  'color': true,
  'color-profile': true,
  'column-count': true,
  'column-fill': true,
  'column-gap': true,
  'column-rule': true,
  'column-rule-color': true,
  'column-rule-style': true,
  'column-rule-width': true,
  'column-span': true,
  'column-width': true,
  'columns': true,
  'content': true,
  'counter-increment': true,
  'counter-reset': true,
  'crop': true,
  'cursor': true,
  'direction': true,
  'display': true,
  'dominant-baseline': true,
  'drop-initial-after-adjust': true,
  'drop-initial-after-align': true,
  'drop-initial-before-adjust': true,
  'drop-initial-before-align': true,
  'drop-initial-size': true,
  'drop-initial-value': true,
  'empty-cells': true,
  'fit': true,
  'fit-position': true,
  'float': true,
  'float-offset': true,
  'font': true,
  'font-family': true,
  'font-size': true,
  'font-size-adjust': true,
  'font-stretch': true,
  'font-style': true,
  'font-variant': true,
  'font-weight': true,
  'grid-columns': true,
  'grid-rows': true,
  'hanging-punctuation': true,
  'height': true,
  'hyphenate-after': true,
  'hyphenate-before': true,
  'hyphenate-character': true,
  'hyphenate-lines': true,
  'hyphenate-resource': true,
  'hyphens': true,
  'icon': true,
  'image-orientation': true,
  'image-resolution': true,
  'inline-box-align': true,
  'left': true,
  'letter-spacing': true,
  'line-height': true,
  'line-stacking': true,
  'line-stacking-ruby': true,
  'line-stacking-shift': true,
  'line-stacking-strategy': true,
  'list-style': true,
  'list-style-image': true,
  'list-style-position': true,
  'list-style-type': true,
  'margin': true,
  'margin-bottom': true,
  'margin-left': true,
  'margin-right': true,
  'margin-top': true,
  'mark': true,
  'mark-after': true,
  'mark-before': true,
  'marks': true,
  'marquee-direction': true,
  'marquee-play-count': true,
  'marquee-speed': true,
  'marquee-style': true,
  'max-height': true,
  'max-width': true,
  'min-height': true,
  'min-width': true,
  'move-to': true,
  'nav-down': true,
  'nav-index': true,
  'nav-left': true,
  'nav-right': true,
  'nav-up': true,
  'opacity': true,
  'orphans': true,
  'outline': true,
  'outline-color': true,
  'outline-offset': true,
  'outline-style': true,
  'outline-width': true,
  'overflow': true,
  'overflow-scrolling': true,
  'overflow-style': true,
  'overflow-x': true,
  'overflow-y': true,
  'padding': true,
  'padding-bottom': true,
  'padding-left': true,
  'padding-right': true,
  'padding-top': true,
  'page': true,
  'page-break-after': true,
  'page-break-before': true,
  'page-break-inside': true,
  'page-policy': true,
  'perspective': true,
  'perspective-origin': true,
  'phonemes': true,
  'pointer-events': true,
  'position': true,
  'punctuation-trim': true,
  'quotes': true,
  'rendering-intent': true,
  'resize': true,
  'rest': true,
  'rest-after': true,
  'rest-before': true,
  'right': true,
  'rotation': true,
  'rotation-point': true,
  'ruby-align': true,
  'ruby-overhang': true,
  'ruby-position': true,
  'ruby-span': true,
  'size': true,
  'string-set': true,
  'table-layout': true,
  'target': true,
  'target-name': true,
  'target-new': true,
  'target-position': true,
  'text-align': true,
  'text-align-last': true,
  'text-decoration': true,
  'text-height': true,
  'text-indent': true,
  'text-justify': true,
  'text-outline': true,
  'text-overflow': true,
  'text-shadow': true,
  'text-transform': true,
  'text-wrap': true,
  'top': true,
  'transform': true,
  'transform-origin': true,
  'transform-style': true,
  'transition': true,
  'transition-delay': true,
  'transition-duration': true,
  'transition-property': true,
  'transition-timing-function': true,
  'unicode-bidi': true,
  'user-select': true,
  'vertical-align': true,
  'visibility': true,
  'voice-balance': true,
  'voice-duration': true,
  'voice-pitch': true,
  'voice-pitch-range': true,
  'voice-rate': true,
  'voice-stress': true,
  'voice-volume': true,
  'white-space': true,
  'widows': true,
  'width': true,
  'word-break': true,
  'word-spacing': true,
  'word-wrap': true,
  'z-index': true
}

var vendorPrefixRegEx = /^-.+-/;

module.exports = function(prop) {
  if (prop[0] === '-') {
    return !!_validCSSProps[prop.replace(vendorPrefixRegEx, '')];
  }
  return !!_validCSSProps[prop];
};
