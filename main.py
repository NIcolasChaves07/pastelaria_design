num = 0
calculo = 0
while(num == 10):
    num = num %2
    if(num %2 == 0):
        calculo = num + 2
        print("Resultado: ", calculo)
    else:
        print("Valor é impar")