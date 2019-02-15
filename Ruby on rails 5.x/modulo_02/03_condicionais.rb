# Estrutura condicional ternária

sexo = 'M'

#if sexo == 'M'
#    puts 'Masculino'
#else
#    puts 'Feminino'
#end

puts (sexo == 'M' ? 'Masculino' : 'Feminino')

# Case

print 'Informe sua idade: '
idade = gets.chomp.to_i

case idade
when 0..2
    puts "bebê"
when 3..12
    puts "criança"
when 13..18
    puts "adolescente"
else
    puts "adulto"
end

# Unless (A não ser que)   

print 'Digite um número: '
num = gets.chomp.to_i

unless num >= 2
    puts 'Número menor que 2'
else
    puts 'Número maior que 2'
end 

# IF

print 'Digite um número: '
num = gets.chomp.to_i

if num >= 2 
    puts 'O número digitado é maior ou igual que 2.'
else
    puts 'Número digitado é menor que 2'
end

