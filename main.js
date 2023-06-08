function solve(){
    var r = document.getElementById('my-input').value;
    if (r == ''){
        alert("Please enter a radius value");
        return false;
    }
    var area = document.getElementById('area');
    var volume = document.getElementById('volume');

    var tolarea = Math.abs(4 * Math.PI * (Math.pow(r, 2))).toFixed(0);

    var tolvol = Math.abs((4) / (3)) * Math.PI * (Math.pow(r, 3));
    var vol = Math.round(tolvol);

    area.innerHTML = "The Area of the Sphere is " +tolarea+ "m\u00b2.";
    volume.innerHTML = "The Volume of the Sphere is " +vol+ "m\u00b3.";
}