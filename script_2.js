const element = document.getElementById('hole');
const link = "third_room.html"

element.addEventListener('click', function() {
    window.alert('Cats:   Hello');
    window.alert('Cats:   If you are my friend, you could come in');
    location.href = link;
})
