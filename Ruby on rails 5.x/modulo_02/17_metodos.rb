class Pessoa
    def falar # método de instancia
        "Olá, pessoal!"
    end

    def self.gritar(texto) # método de classe, NÃO precisa instanciar o objeto
        "#{texto}!!!!"
    end
end

p1 = Pessoa.new
puts p1.falar

puts Pessoa.gritar("HELLO")