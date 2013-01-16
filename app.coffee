christmas = new Date(2013, 0, 28, 18, 41)
present = new Date()

diff = christmas.getTime() - present.getTime()


if diff <= 0
  return alert '!!!!!!!!!!!!!!!!!'

seconds = Math.floor diff / 1000
minutes = Math.floor seconds / 60
hours   = Math.floor minutes / 60
days    = Math.floor hours / 24

minutes = minutes / 10 # 10 daisies in that image

times = [
  { num: days, elClass: 'days', containerId: 'days' }
  { num: hours, elClass: 'hours', containerId: 'hours' }
  { num: minutes, elClass: 'minutes', containerId: 'minutes' }
]


for time in times
  if time.num > 0
    elements = ("<div class=\"#{time.elClass}\" />" for x in [1..time.num])
    $("##{time.containerId}").append(elements.join(''))


$body = $('body')
$(document).on 'mousemove', (e)->
  val = ((e.pageX + e.pageY) * 0.4) % 400
  $body.css 'background-color', "hsl(#{val}, 100%, 50%)"

