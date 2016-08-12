var RouteArgumentForm = React.createClass({
  render: function() {
     var routingArgument = this.props.routingArgument;
     var parentPrefix = this.props.prefix;
     var errors = this.props.routingArgument.errors;
     var index = routingArgument.index;
     var prefixId = parentPrefix + "_route_arguments_attributes_" + index.toString();
     var prefixName= parentPrefix + "[route_arguments_attributes][" + index.toString() + "]";
     var key = routingArgument.key;
     var value = routingArgument.value;
     var id = routingArgument.id;
     var parentForm = this.props.parentForm;
     var id_field = "";
     if (id != null) {
       id_field = <input type="hidden" name={prefixName + "[id]"} value={id} />
     }
     return(
        <fieldset className="form">
	  <legend>Argument <a href="#" data-index={index} onClick={parentForm.deleteArg}><i className="fa fa-times"></i></a></legend>
	  {id_field}
	  <ModelTextField field_name={prefixName + "[key]"} field_id={prefixId + "_key"} field_value={key} errors={errors.key} />
	  <ModelTextField field_name={prefixName + "[value]"} field_id={prefixId + "_value"} field_value={value} errors={errors.value} />
	</fieldset>
     );
  }
});
