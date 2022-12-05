function sendReq() {
  let url = 'http://localhost:8081/api/blog/posts';

  fetch(url)
  .then(res => res.json())
  .then(out =>
    console.log('Checkout this JSON! ', out))
  .catch(err => { throw err });  
}