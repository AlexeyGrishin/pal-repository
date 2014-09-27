
#::module strings
module Strings
  extend Strings
#::imports
  require './checks'
  extend Checks

  #::function truncate
  #@@depends isDefined, isPositive
  def truncate(str, max_length, trailing)
    is_defined(str, 'str')
    is_positive(max_length)
    if str.length > max_length
      str[0, max_length - trailing.length] + trailing
    else
      str
    end
  end

  #::function normalizeSpaces
  def normalize_spaces(str)
    str
  end
  #::addbefore
end
