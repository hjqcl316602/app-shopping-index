import { hump } from './../js.package/app.string.js'

export default function parseRenderData(data = {}, events = {}) {
  events = parseEvents(events)
  const props = { ...data }
  const on = {}
  for (const name in events) {
    if (events.hasOwnProperty(name)) {
      const handlerName = events[name]
      if (props[handlerName]) {
        on[name] = props[handlerName]
        delete props[handlerName]
      }
    }
  }
  return {
    props,
    on
  }
}

function parseEvents(events) {
  const parsedEvents = {}
  events.forEach((name) => {
    parsedEvents[name] = hump(`on-${name}`)
  })
  return parsedEvents
}
