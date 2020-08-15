function useState(defaultValue) {
  return [defaultValue, setValue];
}

function useState(defaultValue) {
  const setValue = () => {}
  const tuple = [defaultValue, setValue]
  return tuple
}

// shit will go to garbage collector like your life
// we gotta keep track of it somewhere else

function useState(defaultValue) {
  const setValue = (newValue) => {
    defaultValue = newValue
    // assign something
    // rerender
  }
  const tuple = [defaultValue, setValue]
  return tuple
}

// add states

const states = [] // !!

function useState(defaultValue) {
  const setValue = (newValue) => {
    defaultValue = newValue
    // assign something
    // rerender
  }
  const tuple = [defaultValue, setValue]
  states.push(tuple) // !!
  return tuple
}

// we gotta find state by id

const states = []
let calls = -1 // !!

function useState(defaultValue) {
  const callId = ++calls // !!
  const setValue = (newValue) => {
    states[callId][0] = newValue;
    // rerender
  }
  const tuple = [defaultValue, setValue]
  states[callId] = tuple // !!
  return tuple
}