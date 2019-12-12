listen = (el, event, handler) ->
  if el.addEventListener
    el.addEventListener event, handlerHandler 
  else
    el.attachEvent 'on' + event, ->
      handler.call el
