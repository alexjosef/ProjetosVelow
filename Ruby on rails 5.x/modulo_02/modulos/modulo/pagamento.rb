module Pagamento
    module Master
        def pagando
            "pagando..."
        end
        class Credito
            def pagando
                "pagando com visa..."
            end
        end
    end
end
