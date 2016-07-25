class ConfigurationImport
  include ActiveModel::Validations
  include ActiveModel::Model

  attr_accessor :definition_file

  validates_presence_of :definition_file

  def purge_records
    Exchange.delete_all
    MessageRoute.delete_all
    RouteArgument.delete_all
  end

  def read_file
    definition_file.read
  end

  def save
    return false unless valid?
    purge_records
    data = read_file
    json_data = JSON.load(data)
    create_models(json_data)
  end

  def create_models(json_data)
    create_models_using_key(json_data, "exchanges", Exchange)
    create_models_using_key(json_data, "message_routes", MessageRoute)
    create_models_using_key(json_data, "route_arguments", RouteArgument)
  end

  def create_models_using_key(json, key, cls)
    attrs_list = json[key]
    return nil if attrs_list.blank?
    attrs_list.each do |attrs_for_model|
      cls.create!(attrs_for_model)
    end
    reset_id_sequence_for(cls)
  end

  def reset_id_sequence_for(cls)
    max_id = cls.maximum(:id) || 0
    new_max_id = max_id + 1
    cls.connection.set_pk_sequence!(cls.table_name, new_max_id)
  end
end
