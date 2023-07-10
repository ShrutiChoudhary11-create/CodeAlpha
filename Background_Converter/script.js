function changeColor(){
    var col1 = document.getElementById('color1').value;
    var col2 = document.getElementById('color2').value;
    var col3 = document.getElementById('color3').value;
    var str = "linear-gradient(" + col1 + "," + col2 + "," + col3 + ")";
    console.log(str);
    document.getElementById('bg_color').style.backgroundImage = str;
}