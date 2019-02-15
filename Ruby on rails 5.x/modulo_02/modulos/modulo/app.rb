require_relative 'pagamento'

include Pagamento::Master

p = Credito.new

puts p.pagando