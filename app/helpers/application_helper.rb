# Helper
module ApplicationHelper
   def flash_messages(opts = {})
      flash.each do |msg_type, text|
        concat(content_tag :div, text, class: "alert alert-#{msg_type}")
      end
      nil
    end
end
