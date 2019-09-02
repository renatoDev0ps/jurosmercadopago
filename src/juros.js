function calcular(){
  const taxas = [
    0, // invalid
    0, // first
    2.0245, // second
    1.7718, // third
    1.635, // fourth
    1.5433349, //fifth
    1.478, // sixth
    1.425, //seventh
    1.383, // eighth
    1.345, // ninth
    1.312, // tenth
    1.283, // eleventh
    1.2556 // twelfth
  ];
  var parcela = parseFloat(document.getElementById("id3").value);

  if (parcela >= 1 && parcela <= 12) {
    var compra = parseFloat(document.getElementById("id1").value);
    // var taxa = parseFloat(document.getElementById("id2").value);
    var taxa = taxas[parcela];
    var res = compra*Math.pow(((taxa/100)+1),parcela);
    var res2 = "R$ " + res.toFixed(2).replace(".",",");
    document.getElementById("id2").innerHTML=taxa + '%';
    document.getElementById("id4").innerHTML=res2;
  } else {
    alert('Error');
  }
}
