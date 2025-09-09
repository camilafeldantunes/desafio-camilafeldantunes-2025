
function verificaBrinquedo(listaBrinquedoPessoa, listaBrinquedoAnimais){
    var i = 0;
    for(var brinquedoss of listaBrinquedoPessoa){
        if(brinquedoss == listaBrinquedoAnimais[i]){
          i++;
        } 
        if(i == listaBrinquedoAnimais.length){
          return true;
        }
    }
    return false;
  }


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
    this.jabuti = ["Loco"];
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

      var animaisPessoaUm = 0;
      var animaisPessoaDois = 0;

      for(var nome of arrayAnimais){
        var listaBrinquedoAnimais = this.animais[nome].brinquedo;
        var pessoa1 = verificaBrinquedo(arrayBrinquedosPessoa1, listaBrinquedoAnimais);
        var pessoa2 = verificaBrinquedo(arrayBrinquedosPessoa2, listaBrinquedoAnimais);
      
      
        if(pessoa1 == true && pessoa2 != true && animaisPessoaUm < 3){
          resultado.push(nome + " - pessoa 1");
          animaisPessoaUm++;
        }else if(pessoa1 != true && pessoa2 == true && animaisPessoaDois < 3){
          resultado.push(nome + " - pessoa 2");
          animaisPessoaDois++;
        }else if(pessoa1 == true && pessoa2 == true){
          resultado.push(nome + "- abrigo");
        }else{
          resultado.push(nome + " - abrigo");
        }
      
      
      }


      return { 
        lista: resultado.sort((a,b) => {
          var nomeUm = a.split(" - ")[0];
          var nomeDois = b.split(" - ")[0];
          return nomeUm.localeCompare(nomeDois);
        } )
      };

    } catch(e){

        return { erro: "Animal Inválido"};
    }
    

  }

}

  
  



export { AbrigoAnimais as AbrigoAnimais };
