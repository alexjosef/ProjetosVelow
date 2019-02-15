class Pessoa
    attr_accessor :nome, :email
end

class PessoaFisica < Pessoa
    attr_accessor :cpf

    def falar(texto)
        texto
    end
end

class PessoaJuridica < Pessoa
    attr_accessor :cnpj

    def pagar_fornecedor
        "Pagando fornecedor"
    end
end

p1 = Pessoa.new
puts p1.nome = "Alex"
puts p1.email = "alex@velow.com.br"

puts "============================="

p2 = PessoaFisica.new
puts p2.nome = "Lucas"
puts p2.email = "lucas@velow.com.br"
puts p2.cpf = "074.242.589-40"

puts p2.falar("Hello World")

puts "============================="

p3 = PessoaJuridica.new
puts p3.nome = "João"
puts p3.email = "joao@velow.com.br"
puts p3.cnpj = "10.100.100/0001-10"
