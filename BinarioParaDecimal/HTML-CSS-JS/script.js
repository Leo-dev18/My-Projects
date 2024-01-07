var bin_value = document.getElementById("input_binario");
var dec_value = document.getElementById("input_decimal");
var txt_error = document.getElementById('txt_error');

function converter(event) {
    event.preventDefault();

    var qtd = bin_value.value.length - 1;
    var res = null;
    var verify = true

    for (const n of bin_value.value) {
        const numero = parseInt(n, 10);
        if (!(numero === 0 || numero === 1)) {
            verify = false
            break;
        }
    }

    if (verify) {
        localStorage.removeItem('txt_error');
        txt_error.style.display = "none";
        for (const n of bin_value.value) {
            const numero = parseInt(n, 10);
            const pot = n * 2 ** qtd;
            res += pot;
            qtd -= 1;
        };
        dec_value.value = res;
        dec_value.style.backgroundColor = '#a3ffbf'
        setTimeout(function() {
            dec_value.style.backgroundColor = '#ffffff';
        }, 2500);
    } else {
        const msg = '"' + bin_value.value + '"' + ' Não é um valor binário, Tente novamente.';
        bin_value.value = ""
        dec_value.value = ""
        txt_error.textContent = msg
        txt_error.style.display = "block";
        dec_value.style.backgroundColor = '#ff7c7c'
        setTimeout(function() {
            dec_value.style.backgroundColor = '#ffffff';
        }, 2500);
    };
}

function deletarValores() {
    bin_value.value = ""
    dec_value.value = ""
    txt_error.style.display = 'none'
}