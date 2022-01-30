const colors = ['DA1212','4E9F3D','6867AC','FFF323','B33030'];
const container = document.querySelector('.colorChanger');
document.radiofield.onclick = function(){
    var val = document.radiofield.color.value;
    console.log(typeof val);
    container.style.backgroundColor = colors[parseInt(val)]

}

const Textformfield = document.getElementById('value');

function submitFunction(){
    container.style.backgroundColor = colors[Textformfield.value];
}