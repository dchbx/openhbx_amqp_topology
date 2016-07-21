require(react_helper_path);

var rewire = require("rewire");

var RouteArgumentFormModule = rewire(__component_base + '/route_argument_form');
var RouteArgumentForm = RouteArgumentFormModule.component;

describe("RouteArgumentForm", function() {
   beforeEach(function() {
     this.routingArgument = {
       index: 3,
       key: 'the key',
       value: 'the value'
     };
     this.parentForm = { };
     this.prefix = "some_object_prefix";
     this.subject = jasmineReact.render(<RouteArgumentForm parentForm={this.parentForm} prefix={this.prefix} routingArgument={this.routingArgument} />);
   });

   it("should not have an id field", function() {
     var idField = jQuery("#some_object_prefix_route_arguments_attributes_3_id", document).toArray()[0];
     expect(idField).toBeUndefined();
   });

});	
