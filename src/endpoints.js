// math.js
export function send_post(body, timeOfLastSend) {
  if (Date.now() - timeOfLastSend > 25){
      fetch("http://nuc-homeserver:81/x",{
        method: "POST",
        body: body,
        headers: {
            "Authorization": `Bearer tk_mfzjlla9otq9ipggd0u0w490abu9i`
        }
      })
      return Date.now()
  }
  return timeOfLastSend
}
