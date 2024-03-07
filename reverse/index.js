let word = prompt("Digite aqui uma palavra:")

function reverse (string) {
  var newWord = ""

  for(var i = string.length - 1; i >= 0; i--) {
    newWord += string[i]
  }

  return alert(`O inverso da palavra digitada é: ${newWord}`)
}


reverse(word)