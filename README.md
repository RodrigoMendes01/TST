# TST

# Estágio ribeirão preto - 2024

1 - Observe o trecho de código abaixo:

int INDICE = 13,
SOMA = 0,
K = 0

enquanto K < INDICE faça {
K = K + 1

SOMA = SOMA + K
}

imprimir(SOMA)

R = 12, vai assumir o valor de K.

3. Descubra a lógica e complete o próximo elemento:

a) 1, 3, 5, 7, R(9)

b) 2, 4, 8, 16, 32, 64, R(128)

c) 0, 1, 4, 9, 16, 25, 36, R(49)

d) 4, 16, 36, 64, R(100)

e) 1, 1, 2, 3, 5, 8, R(13)

f) 2, 10, 12, 16, 17, 18, 19, R(20)

4 - Você está em uma sala com três interruptores, cada um conectado a uma lâmpada em uma sala diferente. Você não pode ver as lâmpadas da sala em que está, mas pode ligar e desligar os interruptores quantas vezes quiser. Seu objetivo é descobrir qual interruptor controla qual lâmpada.

Como você faria para descobrir, usando apenas duas idas até uma das salas das lâmpadas, qual interruptor controla cada lâmpada?

R: Ligaria um interruptor e deixaria ligado para esquentar a lampada, depois ligaria outro e deixaria por menos tempo ligado, iria visitar as salas e qual estivesse mais quente, morno ou frio. Seriam consecutivamente a ordem dos interruptores que eu liguei
