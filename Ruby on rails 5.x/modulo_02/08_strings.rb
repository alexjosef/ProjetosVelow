x = "Jackson"
y = 'Rails'

puts x
puts x.class

puts y
puts y.class

a = "Curso de ruby"
b = " on Rails"

puts a + b
puts a << b

x = "curso"
puts x.object_id
x = x + "rails"
puts x 
puts x.object_id
################
q = "curso de "
puts q.object_id
q << "rails"
puts q
puts q.object_id


h = "Alex"
puts "Bem-Vindo ao Programa de Estágio Velow #{h}"