// math.js
export function send_post(body, timeOfLastSend) {
  if (Date.now() - timeOfLastSend > 25){
    let formData = new FormData();
    formData.append('instruction', body);
    fetch("http://four:8000/instruction",{
      method: "POST",
      body: formData,
    })
      return Date.now()
  }
  return timeOfLastSend
}
