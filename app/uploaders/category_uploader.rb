class CategoryUploader < CarrierWave::Uploader::Base
  include CarrierWave::MiniMagick

  storage :file

  def store_dir
    "uploads/#{model.class.to_s.underscore}/#{mounted_as}/#{model.id}"
  end

  def extension_white_list
    %w(jpg jpeg png)
  end

  def default_url
    "https://res.cloudinary.com/phucdx/image/upload/v1586698804/Books4U/category.png"
  end

  version :thumb do
    process resize_to_fill: [100, 100]
  end

  def filename
    "avatar-#{secure_token}.#{file.extension}" if original_filename.present?
  end

  protected

  def secure_token
    var = :"@#{mounted_as}_secure_token"
    model.instance_variable_get(var) || model
      .instance_variable_set(var, SecureRandom.uuid)
  end
end
