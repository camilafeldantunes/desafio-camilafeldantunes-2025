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

      var brinquedoAnimal = animal.brinquedo;

      var pessoaUm = verificaBrinquedos(brinquedoAnimal, arrayBrinquedosPessoa1);
      var pessoaDois = verificaBrinquedos(brinquedoAnimal, arrayBrinquedosPessoa2);

     if (pessoaUm && !pessoaDois) {
        resultado.push(nome + " - pessoa 1");
      } else if (!pessoaUm && pessoaDois) {
        resultado.push(nome + " - pessoa 2");
      } else {
        resultado.push(nome + " - abrigo");
      }



      return { lista: resultado.sort()};

    } catch(e){

        return { erro: "Animal Inválido"};
    }
    

  }

}

    verificaBrinquedos(listaAnimalBrinquedo, listaPessoaBrinquedo){
      var i = 0;
      for(var brinquedo of listaPessoaBrinquedo){
        if(brinquedo == listaAnimalBrinquedo[i]){
          i++;
      }
      if (i == listaAnimal.length){
        return true;
      }
      return i == listaAnimal.length;
        
    }
  }
  
  



export { AbrigoAnimais as AbrigoAnimais };

