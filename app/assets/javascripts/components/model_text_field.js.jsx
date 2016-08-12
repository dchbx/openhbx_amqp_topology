var ModelTextField = React.createClass({
  render : function() {
     var field_name = this.props.field_name;
     var field_id = this.props.field_id;
     var field_value = this.props.value;
     var field_errors = this.props.errors;
     var field_label = this.props.label;
     var input_group_class = "";
     var input_field_class = "";
     var input_field_feedback = "";
     if (field_errors != null) {
       input_group_class = " has-danger";
       input_field_class = " form-control-danger";
       input_field_feedback = 
       key_feedback_ele = <div className="form-control-feedback">{field_errors}</div>;
     }
     return (
	     <div className={"form-group" + input_group_class}>
	     <label htmlFor={field_id}>{field_label}</label>
	     <input className={"form-control" + input_field_class} type="text" name={field_name} id={field_id} defaultValue={field_value}/>
	     {input_field_feedback}
	     </div>
	    );
  }
});
