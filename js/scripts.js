function sendReq() {
  let url = "http://localhost:8081/api/blog/posts";

  fetch(url)
    .then((res) => res.json())
    .then((out) => {
      console.log("Checkout this JSON! ", out);
      populaPosts(out);
    })
    .catch((err) => {
      throw err;
    });
}

function populaPosts(obj) {
  const section = document.querySelector(".posts");
  const posts = obj.items;

  for (const post of posts) {
    const artigo = montaElemento(post, true);

    section.appendChild(artigo);
  }
}
function esconderPosts(obj) {
  const page = document.querySelector(".page");
  page.setAttribute("hidden", "");
  mostraPostClicado(obj);
}

function mostraPostClicado(post) {
  const page = document.querySelector(".destaque");
  const artigo = montaElemento(post, false);
  page.classList.add("col-12");
  page.appendChild(artigo);
}

function montaElemento(conteudo, temBotao) {
  const myArticle = document.createElement("article");
  const myArticle2 = document.createElement("div");
  const myH2 = document.createElement("h2");
  const myPara1 = document.createElement("p");

  myArticle.classList.add("card", "mb-4");
  myArticle2.classList.add("card-body", "bg-dark", "text-light");

  myH2.textContent = conteudo.title;
  myPara1.textContent = conteudo.body;

  myH2.classList.add("card-title", "h4");
  myPara1.classList.add("card-text");

  myArticle.appendChild(myArticle2);
  myArticle2.appendChild(myH2);
  myArticle2.appendChild(myPara1);
  let botao;
  if (temBotao) {
    botao = montaBotao(conteudo);
  } else {
    botao = montaBotaoVoltar();
  }
  myArticle2.appendChild(botao);
  return myArticle;
}

function montaBotao(post) {
  const myButton = document.createElement("button");

  myButton.classList.add("btn", "btn-dark", "bg-purple", "btn-purple");

  myButton.textContent = "Ler Mais →";
  myButton.addEventListener("click", function () {
    esconderPosts(post);
  });
  return myButton;
}

function montaBotaoVoltar() {
  const myButton = document.createElement("button");

  myButton.classList.add("btn", "btn-dark", "bg-purple", "btn-purple");

  myButton.textContent = "Voltar";
  myButton.addEventListener("click", function () {
    window.location.href = "./index.html";
  });
  return myButton;
}
