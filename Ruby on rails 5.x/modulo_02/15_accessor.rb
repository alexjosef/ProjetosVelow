class Pessoa
    attr_accessor :nome
end

p1 = Pessoa.new
p1.nome = "Alex" #setter
p1.nome = "João" #setter
p1.nome = "José" #setter

puts p1.nome #getter