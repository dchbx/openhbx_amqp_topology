module ApplicationHelper
  def node_name_for_header_route(message_route)
    match_kind = "any"
    x_match_arg = message_route.route_arguments.detect do |arg|
      arg.key == "x-match"
    end
    if x_match_arg
      headers = (x_match_arg.value == "all") ? "all" : "any"
    end
    "headers\n[#{match_kind}]".to_json
  end

  def header_arguments_for(message_route)
    message_route.route_arguments.reject do |arg|
      arg.key == "x-match"
    end
  end

  def header_argument_name_for(route_argument)
    base_key = route_argument.key
    value_key = route_argument.value.blank? ? "" : " = #{route_argument.value}"
    (base_key + value_key).to_json
  end
end
