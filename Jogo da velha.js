﻿function main() {
    // Criar o tabuleiro e jogadores, zerar as variaveis.
    // 
    // 0: Posição vazia
    // 1: Jogada na posição do jogador 1
    // 2: Jogada na posição do jogador 2
    var resultadoValidaTabuleiro;
    var velha;
    var linha;
    var coluna;
    var haVencedor;

    haVencedor = false;
    var tabuleiro = createArray(9);

    // Limpar/Zerar o tabuleiro
    var index;

    for (index = 0; index <= 8; index++) {
        tabuleiro[index] = 0;
    }
    var jogada;

    // iniciar o jogo, definir quem joga primeiro
    var jogadorDaVez;

    jogadorDaVez = 1;

    // Anotar/registrar a jogada do primeiro jogador
    velha = 1;
    do {
        window.alert(tabuleiro[0].ToString() + tabuleiro[1] + tabuleiro[2]);
        window.alert(tabuleiro[3].ToString() + tabuleiro[4] + tabuleiro[5]);
        window.alert(tabuleiro[6].ToString() + tabuleiro[7] + tabuleiro[8]);
        jogada = "";
        window.alert("Digite a posição da sua peça Jogador" + jogadorDaVez);
        jogada = window.prompt('Enter a value for jogada');

        // Simula a função Serial.parseInt() do Arduino
        if (validaPosicao(jogada)) {
            linha = parseInt(jogada.charAt(0));
            coluna = parseInt(jogada.charAt(2));
            window.alert("Linha:" + linha + "; Coluna:" + coluna);
            if (tabuleiro[3 * linha + coluna] == 0) {
                tabuleiro[3 * linha + coluna] = jogadorDaVez;
                resultadoValidaTabuleiro = validaTabuleiro(tabuleiro, jogadorDaVez);
                if (resultadoValidaTabuleiro != 2) {
                    if (jogadorDaVez == 1) {
                        jogadorDaVez = 2;
                    } else {
                        jogadorDaVez = 1;
                    }
                }
                velha = velha + 1;
            } else {
                window.alert("Esta posição esta ocupada" + jogadorDaVez + "jogue novamente!!!");

                // informar ao jogador 1 que a posição está preenchida, é invalida e ele precisa informar uma posição válida
            }
        } else {
            window.alert("Numero invalido, digite uma casa novamente");
        }
    } while (resultadoValidaTabuleiro == 0);
    if (velha <= 9) {
        window.alert("Infelizmente deu velha");
    } else {
        window.alert("parabens pela vitoria, jogador" + jogadorDaVez);
    }
}

function validaPosicao(entrada) {
    var entradaValida;

    entradaValida = false;
    if (entrada.length() == 3) {
        if (entrada.charAt(0) == "0" || entrada.charAt(0) == "1" || entrada.charAt(0) == "2") {
            if (entrada.charAt(2) == "0" || entrada.charAt(2) == "1" || entrada.charAt(2) == "2") {
                entradaValida = true;
            }
        }
    }
    
    return entradaValida;
}

function validaTabuleiro(tabuleiro, jogadorDaVez) {
    var retorno;

    retorno = 0;
    window.alert(jogadorDaVez);
    if (tabuleiro[0] == jogadorDaVez && tabuleiro[1] == jogadorDaVez && tabuleiro[2] == jogadorDaVez || tabuleiro[3] == jogadorDaVez && tabuleiro[4] == jogadorDaVez && tabuleiro[5] == jogadorDaVez || tabuleiro[6] == jogadorDaVez && tabuleiro[7] == jogadorDaVez && tabuleiro[8] == jogadorDaVez) {
        retorno = 2;
    } else {
        if (tabuleiro[0] == jogadorDaVez && tabuleiro[3] == jogadorDaVez && tabuleiro[6] == jogadorDaVez || tabuleiro[1] == jogadorDaVez && tabuleiro[4] == jogadorDaVez && tabuleiro[7] == jogadorDaVez || tabuleiro[2] == jogadorDaVez && tabuleiro[5] == jogadorDaVez && tabuleiro[8] == jogadorDaVez) {
            retorno = 2;
        } else {
            if (tabuleiro[0] == jogadorDaVez && tabuleiro[4] == jogadorDaVez && tabuleiro[8] == jogadorDaVez || tabuleiro[2] == jogadorDaVez && tabuleiro[4] == jogadorDaVez && tabuleiro[6] == jogadorDaVez) {
                retorno = 2;
            }
        }
    }
    
    return retorno;
}
