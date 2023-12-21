 let respostas1 = [];
           function valorRadio1(value) {
            respostas1.push(value);
            console.log("Respostas: ", respostas1);
        }
        let respostas2 = [];
        function valorRadio2(value) {
            respostas2.push(value);
            console.log("Respostas: ", respostas2);
        }
        let respostas3 = [];
        function valorRadio3(value) {
            respostas3.push(value);
            console.log("Respostas: ", respostas3);
        }
        let respostas4 = [];
        function valorRadio4(value) {
            respostas4.push(value);
            console.log("Respostas: ", respostas4);
        }
        let respostas5 = [];
        function valorRadio5(value) {
            respostas5.push(value);
            console.log("Respostas: ", respostas5);
        }
        let respostas6 = [];
        function valorRadio6(value) {
            respostas6.push(value);
            console.log("Respostas: ", respostas6);
        }
    
        function calcularResultado() {
            const respostas = document.forms["vocationalTest"].elements;
            let pontuacao = [];
            let ultimoElementoRespostas1 = respostas1.pop();
            let ultimoElementoRespostas2 = respostas2.pop();
            let ultimoElementoRespostas3 = respostas3.pop();
            let ultimoElementoRespostas4 = respostas4.pop();
            let ultimoElementoRespostas5 = respostas5.pop();
            let ultimoElementoRespostas6 = respostas6.pop();
            pontuacao.push(ultimoElementoRespostas1)
            pontuacao.push(ultimoElementoRespostas2)
            pontuacao.push(ultimoElementoRespostas3)  
            pontuacao.push(ultimoElementoRespostas4)
            pontuacao.push(ultimoElementoRespostas5)
            pontuacao.push(ultimoElementoRespostas6)          
            console.log(pontuacao)
            function maisFrequente(array){
                let contagem={}
                let valorMaisFrequente
                let maiorContagem=0
                array.forEach(function (valor) {
                    contagem[valor]=(contagem[valor]||0)+1
                    if(contagem[valor]>maiorContagem){
                        maiorContagem=contagem[valor]
                        maisFrequente=valor
                    }
                    
                });
                return maisFrequente
            }
            let resFinal=maisFrequente(pontuacao)
            console.log(resFinal)
            /*for (const resposta of respostas) {
                if (resposta.type === "radio" && resposta.checked) {
                    pontuacao += parseInt(resposta.value);
                }
            }*/

            let resultado = "Seu resultado: ";
            if (resFinal == 0) {
                resultado =  "Você pode gostar de uma carreira na área de Mecânica.";

            }

            if (resFinal == 1) {
                resultado = "Você pode gostar de uma carreira na área de Saúde e Segurança.";
            } 

           
            if (resFinal == 2) {
                resultado = "Você pode gostar de uma carreira na área de Informática.";
            } 

           
            if (resFinal == 3) {
                resultado = "Você pode gostar de uma carreira na área de Meio Ambiente.";
            } 

            
            if (resFinal == 4) {
                resultado = "Você pode gostar de uma carreira na área Administrativa.";
            }
            
           
            if (resFinal == 5) {
                resultado = "Você pode gostar de uma carreira na área de Automação.";
            } 

            
            if (resFinal == 6) {
                resultado = "Você pode gostar de uma carreira na área de elétrica.";
            } 
            
            //else {
             //   resultado = "Pedimos que procure nossa secretaria para maiores informações sobre os cursos";
           // }
            let imagemFundo;
            switch (resFinal) {
            case "0":
            imagemFundo = "2.png";
            break;
            case "1":
            imagemFundo = "3.png";
            break;
            case "2":
            imagemFundo = "teste vocacional.png";
            break;
            case "3":
            imagemFundo = "4.png";
            break;
            case "4":
            imagemFundo = "6.png";
            break;
            case "5":
            imagemFundo = "5.png";
            break;
            case "6":
            imagemFundo = "7.png";
            break;
            default:
            imagemFundo = "atenção.png"
            break
            }
            // Abrir uma nova guia com o resultado
            const novaGuia = window.open();
            novaGuia.document.write('<html><head><title>Resultado</title>');
            novaGuia.document.write('<style>');
            // Estilos CSS para a página de resultado
            novaGuia.document.write(`
                body {
                    
                  
                    text-align: right;
                    background-image: url("${imagemFundo}");
                    background-size: 100% 100%;
                    background-repeat: no-repeat, repeat-x;
                    
                }
               
                                              
            `);
          
            novaGuia.document.close();
            location.reload()
        }
        
