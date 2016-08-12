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
     var key_error_cls = "";
     var value_error_cls = "";
     var key_input_cls = "";
     var value_input_cls = "";
     var key_feedback_ele = "";
     var value_feedback_ele = "";
     if (errors.value != null) {
       value_error_cls = " has-danger";
       value_input_cls = " form-control-danger";
       value_feedback_ele = <div className="form-control-feedback">{errors.value}</div>;
     }
     if (errors.key != null) {
       key_error_cls = " has-danger";
       key_input_cls = " form-control-danger";
       key_feedback_ele = <div className="form-control-feedback">{errors.key}</div>;
     }
     return(
        <fieldset className="form">
	  <legend>Argument <a href="#" data-index={index} onClick={parentForm.deleteArg}><i className="fa fa-times"></i></a></legend>
	  {id_field}
	  <div className={"form-group" + key_error_cls}>
	    <label htmlFor={prefixId + "_key"}>Key</label>
            <input className={"form-control" + key_input_cls} type="text" name={prefixName + "[key]"} id={prefixId + "_key"} defaultValue={key}/>
	    {key_feedback_ele}
	  </div>
	  <div className={"form-group" + value_error_cls}>
	    <label htmlFor={prefixId + "_value"}>Value</label>
            <input className={"form-control" + value_input_cls} type="text" name={prefixName + "[value]"} id={prefixId + "_value"} defaultValue={value}/>
	    {value_feedback_ele}
	  </div>
	</fieldset>
     );
  }
});
