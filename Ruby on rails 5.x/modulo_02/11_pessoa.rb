class Pessoa
    def initialize(cont = 1)
        cont.times do |i|
            puts "Inicializando... #{i}"
        end
    end

    def falar2(nome = "pessoal!")
        "Ola, #{nome}!"
    end

    def falar3(texto1 = "Olá", texto2 = "Hello!")
        "#{texto1} em ingles é #{texto2}"
    end
end

p = Pessoa.new
puts p.falar2
puts p.falar3

p1 = Pessoa.new(4)