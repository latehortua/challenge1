let encriptador = ["a","e","i","o","u"," "]
let palabrascodigo = ["ai","enter","imes","ober","ufat"," "]

function encriptar() {

  let frase = []
  let textoinicial=document.getElementById("textoinicial")
  let textofinal=document.getElementById("textofinal")
  for (let j = 0; j < textoinicial.value.length; j++) {      
      if ( encriptador.indexOf(textoinicial.value[j]) != -1 ) {
          for (let i = 0; i < encriptador.length; i++) {
              if (textoinicial.value[j]==encriptador[i]) {
                  frase.push(palabrascodigo[i])
              }              
          }
      }else{
          frase.push(textoinicial.value[j])
      }
  }        
  document.getElementById("imgbuscar").style.display = "none";
  document.getElementById("tex1-img").style.display = "none";
  document.getElementById("copiar").style.display = "show";
  document.getElementById("copiar").style.display = "inherit";
  textofinal.value=frase.join("")
}

function desencriptar() {  

  let textofinal=document.getElementById("textofinal")
  let frase = document.querySelector("#textoinicial").value
  let nuevaF = frase.replace(/ober/g, "o").replace(/enter/g , "e").replace(/imes/g, "i").replace(/ai/g , "a").replace(/ufat/g,"u");
  textofinal.value=nuevaF

  document.getElementById("imgbuscar").style.display = "none";
  document.getElementById("tex1-img").style.display = "none";
  document.getElementById("copiar").style.display = "show";
  document.getElementById("copiar").style.display = "inherit";
}

function copiar(){
  var contenido = document.getElementById('textofinal').value;

  navigator.clipboard.writeText(contenido)
  .then(() => {
      document.getElementById('textoinicial').value=""
      document.getElementById('textofinal').value=""
  })
}


