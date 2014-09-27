
#::module maths
module Maths
  extend Maths
#::imports

  #::function hypot
  #@@depends sqrt,isDefined 
  def hypot(dx, dy)
    isDefined(dx, "dx")
    isDefined(dy, "dy")
    sqrt(dx*dx + dy*dy)
  end

  #::function sqrt
  #@@native Math.sqrt(_)
  def sqrt(num)
    Math.sqrt(num)
  end

  #::addbefore
end