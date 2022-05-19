
//Mostrar o valor do input range 
//Resultado em tempo real 

let $rangeInput = document.querySelector("#rangeInput");
let $result = document.querySelector('#result');

$rangeInput.addEventListener('input', function(){
    $result.textContent = this.value
})

//Quando cifra de cesár estiver selecionda um outro campo deve aparecer
//no formulário, no qual o incremento utilizado na cifra deve ser informado
let $selectMethod = document.querySelector('#select');


// Função para mostrar o input ranger na página
//o incremento, caso seja selecionado a opção Cifra de césar

let steps =  document.querySelector('#steps')

$selectMethod.addEventListener('change', function(){
   if($selectMethod.value === 'cesar') {
       steps.style.display = 'block';
   } else {
       steps.style.display = 'none';
   }
})


//Deve haver um botão que com codificar selecionado exibe Codificar
//e com decodificar selecionado muda o texto para Decodificar

// acessando os inputs com o type radio

let $codeRadio = document.querySelector('#code');
let $decodeRadio = document.querySelector('#decode');
let $btn = document.querySelector('#buttonEncrypted')

$codeRadio.checked = true;

// Função que muda o texto do botão dependendo da escolha
//do usuário

$decodeRadio.addEventListener('click', function() {
    $btn.innerText = 'Decodificar';
})

$codeRadio.addEventListener('click', function() {
    $btn.innerText = 'Codificar';
})



//BASE64

//acessando as duas textarea

let $decodeMsg = document.querySelector('#encrypted-msg');
let $userMsg = document.querySelector('#write-msg').value;


function btnEncrypted() {

  let $userMsg = document.querySelector('#write-msg').value;
  let $selectMethod = document.querySelector('#select').value;

  if($selectMethod === 'cesar'){
      cesar($userMsg.value);
   
  }else {
      base64($userMsg);
  }
}

function cesar () {
    let code = document.querySelector('#code').value
    let decode = document.querySelector('#decode').value
    if ($codeRadio.checked) {
        cesarEncrypted();
    } else {
       cesarDecode($userMsg);
    }
}

function ceaserEncode() {
    let txt = box1.value;
    let rangeValue = parseInt(range.value);
    let result = '';
    
    for(let i=0; i<txt.length; i++) {
        let asciiValue = txt[i].charCodeAt();

        if(asciiValue >= 65 && asciiValue <= 90) {
            result += String.fromCharCode(((asciiValue - 65 + rangeValue) % 26) + 65);
        } else if (asciiValue >= 97 && asciiValue <= 122) {
            result += String.fromCharCode(((asciiValue - 97 + rangeValue) % 26) + 97);
        } else {
            result += String.fromCharCode(asciiValue);
        };
    };
    box2.value = result;
};

function  cesarEncrypted() {
  
  let $userMsg = document.querySelector('#write-msg').value;
  let $decodeMsg = document.querySelector('#encrypted-msg');
  let $rangeValue = parseInt($rangeInput.value);
  let result = '';
   console.log($userMsg);
    for(let i=0; i<$userMsg.length; i++) {
        let codeAscii = $userMsg[i].charCodeAt();
  
        if(codeAscii >= 65 && codeAscii <= 90){
           result += String.fromCharCode(((codeAscii - 65 + $rangeValue) % 26 ) + 65);
        } else if(codeAscii >= 97 && codeAscii <= 122) {
            result += String.fromCharCode(((codeAscii - 97 + $rangeValue ) % 26) + 97);
        } else {
            result += String.fromCharCode(codeAscii);
        }
    }

    $decodeMsg.value = result;
    console.log(result)

 } 

 function base64($userMsg) {
    let code = document.querySelector('#code').value
    let decode = document.querySelector('#decode').value
    if (code === 'codificar') {
      document.getElementById('encrypted-msg').value = btoa($userMsg)
    } if (decode === 'decodificar') {
      document.getElementById('encrypted-msg').value = atob($userMsg)
    }
  }


 function cesarDecode() {
    let $userMsg = document.querySelector('#write-msg').value;
    let $decodeMsg = document.querySelector('#encrypted-msg');
    let $rangeValue = parseInt($rangeInput.value);
    let result = '';
     console.log($userMsg);
      for(let i=0; i<$userMsg.length; i++) {
          let codeAscii = $userMsg[i].charCodeAt();
    
          if(codeAscii >= 65 && codeAscii <= 90){
             result += String.fromCharCode(((codeAscii - 65 - $rangeValue + 26) % 26 ) + 65);
          } else if(codeAscii >= 97 && codeAscii <= 122) {
              result += String.fromCharCode(((codeAscii - 97 - $rangeValue + 26) % 26) + 97);
          } else {
              result += String.fromCharCode(codeAscii);
          }
      }
  
      $decodeMsg.value = result;
      console.log(result)
 }






 



// function toB64(text) {
//     const code = document.querySelector('input[name="choice"]:checked').value
//     if (code === 'codificar') {
//       document.getElementById('decodedText').value = btoa(text.value)
//     } else if (code === 'decodificar') {
//       document.getElementById('decodedText').value = atob(text.value)
//     } else {
//       alert('selecione codificar ou decodificar')
//     }
//   }