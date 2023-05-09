class CardNews extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({mode: "open"});
        shadow.appendChild(this.build());
        shadow.appendChild(this.style());
    }

    build() {
        const componenteRoot = document.createElement("div");
        componenteRoot.setAttribute("class", "card");

        const cardLeft = document.createElement("div");
        cardLeft.setAttribute("class", "card__left");

        const autor = document.createElement("span");
        autor.textContent = "By " + (this.getAttribute("autor") || "Anonymous");

        const linkTitle = document.createElement("a");
        linkTitle.textContent = this.getAttribute("title");
        linkTitle.href = this.getAttribute("link-url");

        const newContent = document.createElement("p");
        newContent.textContent = this.getAttribute("contet");
        
        cardLeft.appendChild(autor);
        cardLeft.appendChild(linkTitle);
        cardLeft.appendChild(newContent);

        const cardRight = document.createElement("div");
        cardRight.setAttribute("class", "card__right");

        const newImage = document.createElement("img");
        newImage.src = this.getAttribute("photo") || "./assets/img/foto-default.jpg";
        newImage.alt = "imagem da noticia";
        cardRight.appendChild(newImage);

        componenteRoot.appendChild(cardLeft);
        componenteRoot.appendChild(cardRight);
        
        return componenteRoot;
    }

    style() {
        const style = document.createElement("style");
        style.textContent = `
            .card {
                display: flex;
                flex-direction: row;
                width: 720px;
                box-shadow: 8px 11px 25px -6px rgba(0,0,0,0.55);
                -webkit-box-shadow: 8px 11px 25px -6px rgba(0,0,0,0.55);
                -moz-box-shadow: 8px 11px 25px -6px rgba(0,0,0,0.55);
            }
            
            .card__left {
                display: flex;
                flex-direction: column;
                justify-content: center;
                padding: 10px;
            }
            
            .card__left  span {
                font-weight: 400;
            }

            .card__left  a {
                margin-top: 15px;
                font-size: 25px;
                text-decoration: none;
                color: black;
            }
            
            .card__left  p {
                color: rgb(70, 70, 70);
            }
            
            .card__right img{
                width: 300px;
            }
        `;
        return style;
    }
}

customElements.define("card-news", CardNews);