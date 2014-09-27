#::module checks
module Checks
  extend Checks
#::imports

  #::function valid
  def valid()
    true
  end

  #::function invalid
  def invalid(errorMsg)
    errorMsg
  end

  #::function isDefined
  #@@depends valid,invalid
  def is_defined(val, name)
    val != nil ? valid() : invalid("undefined: #{name}")
  end

  #::function isPositive
  #@@depends valid,invalid
  def is_positive(val)
    val > 0 ? valid() : invalid("negative: #{val}")
  end

  #::function isNegative
  #@@depends valid,invalid
  def is_negative(val)
    val < 0 ? valid() : invalid("positive: #{val}")
  end
  #::addbefore
end