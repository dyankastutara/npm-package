function convert(number) {
var word = ["","Satu","Dua","Tiga","Empat","Lima","Enam","Tujuh","Delapan","Sembilan","Sepuluh",
            "Sebelas","Dua Belas","Tiga Belas","Empat Belas","Lima Belas","Enam Belas","Tujuh belas","Delapan Belas","Sembilan Belas"
           ];

    if (number < 20) {
       return word[number];
    }
    else if (number < 100) {
       return word[String(number)[0]] + " Puluh " + convert(number % 10);
    }
    else if(number < 200){
       return "Seratus "+convert(number-100);
    }
    else if (number < 1000) {
       return word[String(number)[0]] + " Ratus " + convert(number % 100);
    }
    else if(number < 2000){
       return "Seribu "+convert(number-1000);
    }
    else if (number < 1000000) {
       return convert(Math.floor(number / 1000)) + " Ribu " + convert(number % 1000);
    }
    else if (number < 1000000000) {
       return convert(((number - (number % 1000000)) / 1000000)) + " Juta " + convert(number % 1000000);
    }
    else if (number < 1000000000000) {
       return convert(((number - (number % 1000000000)) / 1000000000)) + " Miliar " + convert(number % 1000000000);
    }
    else if (number < 1000000000000000) {
       return convert(((number - (number % 1000000000000)) / 1000000000000)) + " Triliun " + convert(number % 1000000000000);
    }

}

module.exports = {
  convert: convert
}
