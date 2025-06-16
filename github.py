import os

# Solicita o e-mail
email = input("Informe o seu email (parte antes do @): ")
while len(email) <= 5:
    email = input("Informe o seu email (parte antes do @): ")

# Escolha do domínio
print("1 - @ifpr.edu.br; 2 - @gmail.com; 3 - @hotmail.com")
numOp = int(input("Escolha uma opção: "))

op1 = "@ifpr.edu.br"
op2 = "@gmail.com"
op3 = "@hotmail.com"

if numOp == 1:
    emailF = email + op1
elif numOp == 2:
    emailF = email + op2
elif numOp == 3:
    emailF = email + op3
else:
    extensionEmail = input("Informe o domínio do seu e-mail (ex: @seudominio.com): ")
    while not (".com" in extensionEmail and "@" in extensionEmail):
        extensionEmail = input("Informe o domínio do seu e-mail (ex: @seudominio.com): ")
    emailF = email + extensionEmail

print("Seu e-mail completo é:", emailF)

# Mensagem do commit
menCommit = input("Qual é a mensagem do seu commit? ")
while len(menCommit) <= 10:
    menCommit = input("Mensagem muito curta. Digite uma mensagem com mais de 10 caracteres: ")

# Executa os comandos Git
os.system(f'git config user.email "{emailF}"')
os.system('git add .')
os.system(f'git commit -m "{menCommit}"')
os.system('git branch -M main')
os.system('git remote add origin https://github.com/NIcolasChaves07/pastelaria_design.git')
os.system('git push -u origin main')
