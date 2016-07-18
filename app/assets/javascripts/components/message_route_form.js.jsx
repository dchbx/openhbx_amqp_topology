var MessageRouteForm = React.createClass({
  getInitialState : function() {
    return({
       route_kind: this.props.from_exchange_kind,
       from_exchange_id: this.props.from_exchange_id,
       to_exchange_id: this.props.to_exchange_id,
       routing_arguments: this.props.routing_arguments,
       routing_key: this.props.routing_key,
    });
  },
  handleFromExchangeSelect: function(e) {
    this.setState({
      route_kind: this.kindMapping[e.target.value],
      from_exchange_id: e.target.value
    });
  },
  handleToExchangeSelect: function(e) {
    this.setState({
      to_exchange_id: e.target.value
    });
  },
  componentWillMount: function() {
    var kind_map = {};
    this.props.exchanges.forEach(function(item) {
      kind_map[item.id.toString()] = item.kind;
    });
    this.kindMapping = kind_map;
  },
  render: function() {
   var prefix = this.props.prefix;
   var exchanges = this.props.exchanges;
   var selectedFromId = this.state.from_exchange_id;
   var selectedKind = this.state.route_kind;
   var selectedToId = this.state.to_exchange_id;
   var routing_key = this.state.routing_key;

   var routingArgFields = "";
   if (selectedKind == "header") {
     if (this.state.routing_arguments.length > 0) {
       routingArgFields = this.state.routing_arguments.map(function(arg) {
         return(<RouteArgumentForm routingArgument={arg} prefix={prefix} key={"routing_arg_form_" + arg.index}/>);
       });
     } else {
	 var arg = {
           id: null,
	   key: null,
	   value: null,
           index: 0
	 };
         routingArgFields = <RouteArgumentForm routingArgument={arg} prefix={prefix} key="routing_arg_form_0"/>;
     }
   }
   return(
           <div>
	     <div className="field">
                <label htmlFor={prefix + "_from_exchange_id"}>From Exchange</label>
                <select name={prefix + "[from_exchange_id]"} id={prefix + "_from_exchange_id"} defaultValue={selectedFromId} onChange={this.handleFromExchangeSelect}>
		  {exchanges.map(function(ex) {
                    return(<option value={ex.id} key={"from_exchange_option_" + ex.id}>{ex.display}</option>);  
                  })} 
		</select>
	     </div>
	     <div className="field">
                <label htmlFor={prefix + "_to_exchange_id"}>To Exchange</label>
                <select name={prefix + "[to_exchange_id]"} id={prefix + "_to_exchange_id"} defaultValue={selectedToId} onChange={this.handleToExchangeSelect}>
		  {exchanges.map(function(ex) {
                    return(<option value={ex.id} key={"to_exchange_option_" + ex.id} kind={ex.kind}>{ex.display}</option>);  
                  })} 
		</select>
	     </div>
	     <div className="field">
                <label htmlFor={prefix + "_routing_key"}>Routing Key</label>
                <input type="text" name={prefix + "[routing_key]"} id={prefix + "_routing_key"} defaultValue={routing_key}/>
	     </div>
	     {routingArgFields}
	   </div>
	 );
  }
});
