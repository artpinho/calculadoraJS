function calcular(){
  var sbase = window.document.getElementById('salbase')
  var chora = document.getElementById('cargahora')
  let res = document.querySelector('div#res')
  // Adicionais
  let he1 = document.getElementById('contHe1')
  let dhe1 = document.getElementById('dobrohe1')
  let ad1 = document.getElementById('adn1')
  let he2 = document.getElementById('contHe2')
  let dhe2 = document.getElementById('dobrohe2')
  let ad2 = document.getElementById('adn2')
  let he3 = document.getElementById('contHe3')
  let dhe3 = document.getElementById('dobrohe3')
  let ad3 = document.getElementById('adn3')
  let he4 = document.getElementById('contHe4')
  let dhe4 = document.getElementById('dobrohe4')
  let ad4 = document.getElementById('adn4')

  //Dependentes
  let dependentes = document.querySelector('input#dependentes')
  let calcdep = (dependentes.value) * 189.59

  // Respostas
  let vh = document.querySelector('div#vh')
  let hm = document.querySelector('div#hm')
  let inss = document.querySelector('div#inss')
  let irpf = document.querySelector('div#irpf')
  let bruto = document.querySelector('div#bruto')
  let liquido = document.querySelector('div#liquido')
  //Calculos
  let htrab = Number(sbase.value) / (Number(chora.value) * 4)

  let somahe1 = (Number(he1.value) * htrab)
  if (dhe1.checked) {
    somahe1 = (somahe1 * 2)
  } else {
    somahe1 * htrab
  }
    if (ad1.checked) {
      somahe1 = (somahe1 * 1.13)
    }
    
    let somahe2 = (Number(he2.value) * htrab)
    if (dhe2.checked) {
      somahe2 = (somahe2 * 2)
    } else {
      somahe2 * htrab
    }
      if (ad2.checked) {
        somahe2 = (somahe2 * 1.13)
      }

      let somahe3 = (Number(he3.value) * htrab)
      if (dhe3.checked) {
        somahe3 = (somahe3 * 2)
      } else {
        somahe3 * htrab
      }
        if (ad3.checked) {
          somahe3 = (somahe3 * 1.13)
        }

        let somahe4 = (Number(he4.value) * htrab)
        if (dhe4.checked) {
          somahe4 = (somahe4 * 2)
        } else {
          somahe4 * htrab
        }
          if (ad4.checked) {
            somahe4 = (somahe4 * 1.13)
          }
    var tothe = (somahe1 + somahe2 + somahe3 + somahe4)

  //Calculo Bruto
  var sbruto = Number(sbase.value) + Number(tothe)

  //Calculo de INSS
  var somainss = sbruto
  var calcinss
  var aliquotainss
  var inssparcial
  if (somainss >= 0 && somainss <= 1212) {
  aliquotainss = 7.5
  calcinss = (somainss * aliquotainss) / 100
} else if(somainss >= 1213 && somainss <= 2452){
  inssparcial = 90.9
  somainss = somainss - 1212
  aliquotainss = 9.0
  calcinss = ((somainss * aliquotainss) / 100) + inssparcial
} else if(somainss >= 2453 && somainss <= 3679) {
  inssparcial = 202.5
  somainss = somainss - 2452
  aliquotainss = 12.0
  calcinss = ((somainss * aliquotainss) / 100) + inssparcial
} else if (somainss >= 3680 && somainss <=7087) {
  inssparcial = 349.7
  somainss = somainss - 3679
  aliquotainss = 14.0
  calcinss = ((somainss * aliquotainss) / 100) + inssparcial
} else {
  inssparcial = 826.8
  calcinss = 826.8
  aliquotainss = 14.0
}

   // Calculo de IRPF
  var somairpf = sbruto - Number(calcinss)
  var calcirpf
  var descontoirpf
  if (somairpf < 1903) {
    calcirpf = 0
    descontoirpf = 0
  } else if(somairpf >= 1904 && somairpf <= 2826){
    calcirpf = 7.5
    descontoirpf = 142.8
  } else if(somairpf >= 2827 && somairpf <= 3751) {
    calcirpf = 15
    descontoirpf = 354.8
  } else if (somairpf >= 3752 && somairpf <= 4664){
    calcirpf = 22.5
    descontoirpf = 636.1
  } else {
    calcirpf = 27.5
    descontoirpf = 869.3
  }

//Calculo de irpf com dependentes
  var somadep = descontoirpf + calcdep

  //Calculo Liquido
  var somaliquido = (sbruto- calcinss) - somadep

if (sbase.value.length == 0 || sbase.value == 0 || chora.value.length == 0 || chora.value == 0)
{
  window.alert('[ERRO] Preencha todos os campos obrigatórios!')
} else {
  vh.innerHTML = `O valor da sua hora trabalhada é R$ ${htrab.toFixed(2)}.`
  hm.innerHTML = `Suas horas extras no mês serão R$ ${tothe.toFixed(2)}.`
  inss.innerHTML = `Sua alíquota é ${aliquotainss}% e desconto de ${calcinss.toFixed(2)}`
  if (dependentes.value == 0) {
    irpf.innerHTML = `Sua alíquota é de ${calcirpf}% e desconto de ${somadep.toFixed(2)} `
  } else {
    irpf.innerHTML = `Sua alíquota é de ${calcirpf}% e desconto de ${somadep.toFixed(2)} com ${dependentes.value} dependentes.`
  }  
  bruto.innerHTML = `Seu salário bruto é de R$ ${sbruto.toFixed(2)}`
  liquido.innerHTML = `Seu salário líquido é de R$ ${somaliquido.toFixed(2)}`
  } 
}
