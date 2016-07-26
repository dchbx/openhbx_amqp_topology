module ExchangesHelper
	def options_for_exchange_kind
		Exchange::ALLOWED_KINDS
	end
end
