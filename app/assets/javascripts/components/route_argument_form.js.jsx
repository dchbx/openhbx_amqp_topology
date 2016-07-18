var RouteArgumentForm = React.createClass({
  render: function() {
     var routingArgument = this.props.routingArgument;
     var parentPrefix = this.props.prefix;
     var index = routingArgument.index;
     var prefixId = parentPrefix + "_route_arguments_attributes_" + index.toString();
     var prefixName= parentPrefix + "[route_arguments_attributes][" + index.toString() + "]";
     var key = routingArgument.key;
     var value = routingArgument.value;
     var id = routingArgument.id;
     var id_field = "";
     if (id != null) {
       id_field = <input type="hidden" name={prefixName + "[id]"} value={id} />
     }
     return(
        <div>
	  {id_field}
	  <div className="field">
	    <label htmlFor={prefixId + "_key"}>Key</label>
                <input type="text" name={prefixName + "[key]"} id={prefixId + "_key"} defaultValue={key}/>
	  </div>
	  <div className="field">
	    <label htmlFor={prefixId + "_value"}>Value</label>
                <input type="text" name={prefixName + "[value]"} id={prefixId + "_value"} defaultValue={value}/>
	  </div>
	</div>
     );
  }
});
