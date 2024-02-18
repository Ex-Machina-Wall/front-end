// math.js
export function send_post(body, timeOfLastSend) {
  console.log(process.env.NTFY_URL)
  if (Date.now() - timeOfLastSend > 25){
      fetch(`${process.env.NTFY_URL}`,{
        method: "POST",
        body: body,
        headers: {
            "Authorization": `Bearer ${process.env.NTFY_TOKEN}`
        }
      })
      return Date.now()
  }
  return timeOfLastSend
}
