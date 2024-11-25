const toggle_tema = document.getElementById("toggle_tema");
const tema = window.localStorage.getItem("tema");

/* verifica se o tema armazenado no localStorage é claro, se sim, aplica o tema claro ao body */
if (tema === "light") document.body.classList.add("light");

/* event listener para alterar o tema quando o botão for clicado */
toggle_tema.addEventListener("click", () => {
  document.body.classList.toggle("light");
  if (tema === "light") {
    window.localStorage.setItem("tema", "dark");
  } else window.localStorage.setItem("tema", "light");
});

/* Função para Abrir o Modal da localização */
function abrirModal(){
  const modal = document.getElementById("janela-modal")
  modal.classList.add("abrir")

  modal.addEventListener("click", (e) => {
      if(e.target.id === "fechar" || e.target.id === "janela-modal"){
          modal.classList.remove("abrir")
      }
  })
  
}
/* Função dos banners rotativos */
let count = 1;
document.getElementById("radio1").checked = true;

setInterval( () => {
    nextImage()
}, 5000)

function nextImage(){
    count++;
    if(count>4){
        count = 1;
    }

    document.getElementById("radio"+count).checked = true;
}

