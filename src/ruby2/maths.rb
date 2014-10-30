
#::module maths
module Maths
  extend Maths
#::imports

 require 'checks.rb'
 extend Checks
  ### ::function hypot
  ### ololo
  ### @@depends isDefined,sqrt
  def hypot(dx, dy)
    is_defined(dx, "dx")
    is_defined(dy, "dy")
    sqrt(dx*dx + dy*dy)
  end


  #::function sqrt
  #@@native Math.sqrt(_)
  def sqrt(num)
    Math.sqrt(num)
  end


  #::function normalizeDx
  #@@depends isDefined,hypot
  #@@spec 0.6 == :normalizeDx(3,4)
  #@@spec 0 == :normalizeDx(0,0)
  #@@spec -0.6 == :normalizeDx(-3,4)
  #@@spec 0.6 == :normalizeDx(3,-4)
  ### normalizes dx-part of <dx,dy> vector
  def normalize_dx(dx, dy)
    is_defined(dx, "dx")
    is_defined(dy, "dy")
    return 0 if dx == 0 and dy == 0
    dx / hypot(dx, dy)
  end
  #::function normalizeDy
  #@@depends isDefined,hypot
  #@@spec 0.8 == :normalizeDy(3,4)
  ### normalizes dy-part of <dx,dy> vector
  def normalize_dy(dx, dy)
    is_defined(dx, "dx")
    is_defined(dy, "dy")
    return 0 if dx == 0 and dy == 0
    dy / Maths.hypot(dx, dy)
  end  
  #::addbefore
end