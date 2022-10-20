var chars = 'abcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_-+=/';

var string = '';

for(var ii=0; ii<10; ii++){
    string += chars[Math.floor(Math.random() * chars.length)];
}

var b =document.getElementById('answer').innerHTML = string + "@gmail.com";
