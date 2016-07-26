module ExchangesHelper
	def options_for_exchange_kind
		options_for_select(Exchange::ALLOWED_KINDS)
	end
end
