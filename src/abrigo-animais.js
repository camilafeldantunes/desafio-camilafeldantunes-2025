class AbrigoAnimais {

  constructor(){
    this.animais = {
      Rex: {tipo:"cão", brinquedo:["RATO", "BOLA"]}, 
      Mimi: {tipo: "gato", brinquedo:["BOLA", "LASER"]},
      Fofo: {tipo: "gato", brinquedo:["BOLA", "RATO", "LASER"]},
      Zero: {tipo: "gato", brinquedo:["RATO","BOLA"]},
      Bola: {tipo:"cão", brinquedo:["CAIXA", "NOVELO"]},
      Bebe: {tipo: "cão", brinquedo:["LASER", "RATO", "BOLA"]},
      Loco: {tipo: "jabuti", brinquedo:["SKATE", "RATO"]},
    }
  }


  encontraPessoas(brinquedosPessoa1, brinquedosPessoa2, ordemAnimais) {
    var arrayBrinquedos = brinquedosPessoa1.split(",");
    var arrayBrinquedos2 = brinquedosPessoa2.split(",");
    var arrayAnimais = ordemAnimais.split(",");


  }

}



export { AbrigoAnimais as AbrigoAnimais };
