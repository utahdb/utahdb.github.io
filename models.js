// this file contains all custom classes to be used in app.js and data.js
const CustomLink = {
    props: {
      href: {
        type: String,
        required: true
      }
    },
    template: `
      <a :href="href" style="color:#16bd5f; font-weight: bold;" target="_blank">
        <slot></slot>
      </a>
    `
};

class TopMenuItem{
    constructor(href, text, dataHover){
        this.href = href;
        this.text = text;
        this.dataHover = dataHover;
    }
}

