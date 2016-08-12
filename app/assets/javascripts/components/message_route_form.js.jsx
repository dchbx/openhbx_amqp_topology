var MessageRouteForm = React.createClass({
  getInitialState : function() {
    var maxArgIndex = 0;
    this.props.routing_arguments.forEach(function(ra) {
      if (maxArgIndex <= ra.index) {
	 maxArgIndex = ra.index + 1;
      } 
    });
    return({
       route_kind: this.props.from_exchange_kind,
       from_exchange_id: this.props.from_exchange_id,
       to_exchange_id: this.props.to_exchange_id,
       routing_arguments: this.props.routing_arguments,
       routing_key: this.props.routing_key,
       max_arg_index: maxArgIndex,
       destroyed_arguments: []
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
  deleteArg: function(e) {
    var idx = $(e.currentTarget).attr("data-index");
    e.preventDefault();
    var r_args = this.state.routing_arguments;
    var selected_item = r_args.filter(function(item) {
      return(item.index.toString() == idx.toString())
    })[0];
    var updated_array = r_args.filter(function(item) {
      return(item.index.toString() != idx.toString())
    });
    var current_destroyed_arguments = this.state.destroyed_arguments;
    var updated_destroyed_arguments = current_destroyed_arguments;
    if (selected_item.id != null) {
      updated_destroyed_arguments = current_destroyed_arguments.concat([selected_item]);
    }
    this.setState({
      routing_arguments: updated_array,
      destroyed_arguments: updated_destroyed_arguments
    });
  },
  addArgument: function(e) {
    var existing_args = this.state.routing_arguments;
    var new_arg = {
           id: null,
	   key: null,
	   value: null,
           index: this.state.max_arg_index,
	   errors: {}
    };
    new_arguments = existing_args.concat([new_arg]);
    e.preventDefault();
    this.setState({
      routing_arguments: new_arguments,
      max_arg_index: this.state.max_arg_index + 1
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
   var addArgsButton = "";
   var parentForm = this;
   var destroyedArgs = this.state.destroyed_arguments;
   var destroyedArgElements = "";
   if (destroyedArgs.length > 0) {
      destroyedArgElements = destroyedArgs.map(function(da) {
	return( <div key={"delete_route_arguments_" + da.index.toString()}>
        <input type="hidden" value={da.id} name={prefix + "[route_arguments_attributes][" + da.index.toString() + "][id]"}/>
        <input type="hidden" value={da.key} name={prefix + "[route_arguments_attributes][" + da.index.toString() + "][key]"}/>
        <input type="hidden" value="1" name={prefix + "[route_arguments_attributes][" + da.index.toString() + "][_destroy]"}/>
	</div> );
      });
   }
   if (selectedKind == "headers") {
     addArgsButton = <p><a onClick={this.addArgument} href="">Add Argument</a></p>;
     if (this.state.routing_arguments.length > 0) {
       routingArgFields = this.state.routing_arguments.map(function(arg) {
         return(<RouteArgumentForm routingArgument={arg} prefix={prefix} key={"routing_arg_form_" + arg.index} parentForm={parentForm}/>);
       });
     }
   }
   return(
           <div className="container-fluid">
	     <div className="form-group row">
                <label htmlFor={prefix + "_from_exchange_id"} className="col-form-label col-sm-2">From Exchange</label>
		<div className="col-sm-8">
                <select className="form-control" name={prefix + "[from_exchange_id]"} id={prefix + "_from_exchange_id"} defaultValue={selectedFromId} onChange={this.handleFromExchangeSelect}>
		  {exchanges.map(function(ex) {
                    return(<option value={ex.id} key={"from_exchange_option_" + ex.id}>{ex.display}</option>);  
                  })} 
		</select>
		</div>
	     </div>
	     <div className="form-group row">
                <label className="col-form-label col-sm-2" htmlFor={prefix + "_to_exchange_id"}>To Exchange</label>
		<div className="col-sm-8">
                <select className="form-control" name={prefix + "[to_exchange_id]"} id={prefix + "_to_exchange_id"} defaultValue={selectedToId} onChange={this.handleToExchangeSelect}>
		  {exchanges.map(function(ex) {
                    return(<option value={ex.id} key={"to_exchange_option_" + ex.id} kind={ex.kind}>{ex.display}</option>);  
                  })} 
		</select>
		</div>
	     </div>
	     <div className="form-group row">
                <label className="col-form-label col-sm-2" htmlFor={prefix + "_routing_key"}>Routing Key</label>
		<div className="col-sm-8">
                <input className="form-control" type="text" name={prefix + "[routing_key]"} id={prefix + "_routing_key"} defaultValue={routing_key}/>
		</div>
	     </div>
	     {routingArgFields}
	     {addArgsButton}
	     {destroyedArgElements}
	   </div>
	 );
  }
});
