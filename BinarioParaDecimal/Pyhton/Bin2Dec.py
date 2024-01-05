import os

os.system('cls')
print('='*45)
print('Conversor de número Binário para Decimal.')
print('='*45)
print('')

while True:
    while True:
        entrada = input('Digite uma sequência de números binários entre 0 ou 1 (ex: 10100010):\n')
        if entrada.isnumeric():
            not_bin = False
            for i in entrada:
                i = int(i)
                if i < 0 or i > 1:
                    not_bin = True
            if not_bin is False:
                qtd = len(entrada) - 1
                res = 0
                for n in entrada:
                    n = int(n)
                    pot = n * 2 ** qtd
                    res += pot
                    qtd -= 1
                os.system('cls')
                print(f'Binário: {entrada}')
                print(f'Decimal: {res}')
                break
            else:
                os.system('cls')
                print(f'Entrada inválida! "{entrada}" não é um número binário tente novamete.\n')
        else:
            os.system('cls')
            print(f'Entrada inválida! "{entrada}" não é um número binário tente novamete.\n')

    again = input('\nDeseja converter outro valor? (s/n):\n').lower()
    while isinstance(again, str) == False or again not in ['s', 'n']:
        again = input('\nDeseja converter outro valor? (s/n):\n').lower()
    if again == 'n':
        os.system('cls')
        break
    else:
        os.system('cls')




