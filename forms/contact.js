function removeItems() {
  document.getElementById('name').value = '';
  document.getElementById('email').value = '';
  document.getElementById('subject').value = '';
  document.getElementById('message').value = '';
}

var btn = document.getElementById('btn');
btn.addEventListener('click', function (e) {
  e.preventDefault()
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var subject = document.getElementById('subject').value;
  var message = document.getElementById('message').value;
  var body = '' + name + '<br>' + message;


  Email.send({
      Host: "smtp.gmail.com",
      Username: "konelamine1122@gmail.com",
      Password: "equgnaveqbqqivat",
      To: 'konelamine1122@gmail.com',
      From: email,
      Subject: subject,
      Body: body,
  }).then(
      message => alert("Message envoyer")
  );
  
  removeItems();
})