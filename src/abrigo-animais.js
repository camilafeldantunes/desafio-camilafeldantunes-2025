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
    this.brinquedo = ["RATO", "BOLA", "LASER", "CAIXA", "NOVELO", "SKATE"];
    this.gatos = ["Mimi", "Fofo", "Zero"];
  }

  verificaBrinquedo(brinquedoPessoa){
    for (let brinquedo of listaPessoa) {
      if (!this.brinqValidos.includes(brinquedo)) {
       return { erro: "Brinquedo inválido" };
  }
}
     
  }


  encontraPessoas(brinquedosPessoa1, brinquedosPessoa2, ordemAnimais) {
    try{
      var arrayBrinquedosPessoa1 = brinquedosPessoa1.split(",");
      var arrayBrinquedosPessoa2 = brinquedosPessoa2.split(",");
      var arrayAnimais = ordemAnimais.split(",");
      var resultado = [];

      for(var nome of arrayAnimais){
        var animal = this.animais[nome];
          if(!animal){
            return { erro: "Animal inválido"};
          }
      }

      const a = this.verificaBrinquedo(arrayBrinquedosPessoa1);
      const b = this.verificaBrinquedo(arrayBrinquedosPessoa2);

      



      
      

      return { lista: resultado.sort()};

    } catch(e){

        return { erro: "Animal Inválido"};
    }
    

  }

}

