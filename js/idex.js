function validateForm() {
  const form = document.querySelector('form')
  const inputs = form.querySelectorAll('input')

  let isValid = true

  inputs.forEach(input => {
    if (!input.checkValidity()) {
      input.classList.add('invalid')
      isValid = false
    } else {
      input.classList.remove('invalid')
    }
  })
  return isValid
}

function submitForm() {
  if (validateForm()) {
    sendToWhatsapp()
  }
}

function phoneMask(telephone) {
  const text = telephone.value
  const textOnlyNumbers = text.replace(/\D/g, '').substring(0, 11)

  let phoneFormatted = textOnlyNumbers.replace(
    /^(\d{2})(\d{5})(\d{4})/,
    '($1) $2-$3'
  )

  if (textOnlyNumbers.length < 11) {
    phoneFormatted = textOnlyNumbers.replace(
      /^(\d{2})(\d{4})(\d{0,4})/,
      '($1) $2-$3'
    )
  }
  telephone.value = phoneFormatted
}

const fieldPhone = document.getElementById('input-tel')
fieldPhone.addEventListener('input', function () {
  phoneMask(this)
})

function sendToWhatsapp() {
  const nome = document.getElementById('input-name').value
  const sobrenome = document.getElementById('event-name').value
  const email = document.getElementById('input-email').value
  const telefone = document.getElementById('input-tel').value
  const mensagem = document.getElementById('input-info').value

  const texto = `Nome: ${nome} ${sobrenome}\nE-mail: ${email}\nTelefone: ${telefone}\nMensagem: ${mensagem}`
  const textoCodificado = encodeURIComponent(texto)
  const numeroWhatsApp = '5516994063266'
  const url = `https://wa.me/${numeroWhatsApp}?text=${textoCodificado}`

  window.open(url, '_blank')
}
