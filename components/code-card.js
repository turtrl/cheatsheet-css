class CodeCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = /* html */`
            <style>
                :host {
                    position: relative;
                    display: block;
                }

                .container {
                    width: 100%;
                    height: 100%;
                }
                
                .code, .example {
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    transition: 0.2s;
                }

                .code {
                    opacity: 0;
                }

                .container:hover .code {
                    opacity: 1;
                }

                .container:hover .example {
                    opacity: 0;
                }
            </style>
            <div class="container">
                <div class="example">
                    <slot name="example"></slot>
                </div>
                <div class="code">
                    <slot name="code"></slot>
                </div>
            </div>
        `;
    }
}

window.customElements.define("code-card", CodeCard);