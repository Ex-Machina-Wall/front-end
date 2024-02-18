// math.js
export function send_post(body, timeOfLastSend) {
  console.log(process.env.REACT_APP_NTFY_URL)
  if (Date.now() - timeOfLastSend > 25){
      fetch(`${process.env.REACT_APP_NTFY_URL}`,{
        method: "POST",
        body: body,
        headers: {
            "Authorization": `Bearer ${process.env.REACT_APP_NTFY_TOKEN}`
        }
      })
      return Date.now()
  }
  return timeOfLastSend
}
