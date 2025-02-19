import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';

hljs.registerLanguage('javascript', javascript);

const highLightDirective = {
  mounted(el: HTMLElement) {
    const blocks = el.querySelectorAll('pre code');
    blocks.forEach((block) => {
      hljs.highlightElement(block as HTMLElement);
    });
  },
  updated(el: HTMLElement) {
    const blocks = el.querySelectorAll('pre code');
    blocks.forEach((block) => {
      hljs.highlightElement(block as HTMLElement);
    });
  }
};

export default highLightDirective