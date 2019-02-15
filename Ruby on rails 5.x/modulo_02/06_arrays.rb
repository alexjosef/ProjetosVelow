#Arrays/Vetor

v = [[11,12,13],[21,22,23],[31,32,33]]

v.each do |externo|
    externo.each do |interno|
        puts interno
    end
end
puts '==============='
nome = 'Alex'

puts nome[3]
puts '==============='
a = [1,2,3,4,5]

a.each do |item|
    puts item
end
puts '==============='
a1 = Array.new

a1.push(1)
a1.push('Alex')

a1.each do |item|
    puts item
end