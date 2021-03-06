module ApplicationCable
  class Connection < ActionCable::Connection::Base
    identified_by :current_user

    def current_user
      self.current_user = find_verified_user
    end

    protected

    def find_verified_user
      if current_user = env["warden"].user
        current_user
      else
        reject_unauthorized_connection
      end
    end
  end
end
