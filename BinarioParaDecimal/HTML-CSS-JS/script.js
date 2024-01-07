var label_1 = document.getElementById('label_binario');
var label_2 = document.getElementById('label_decimal');
var input_1 = document.getElementById("input_binario");
var input_2 = document.getElementById("input_decimal");
var txt_error = document.getElementById('txt_error');
var tipo = 1;


function converter(event) {
    event.preventDefault();
    
    function BinParaDec(){
        var res = null;
        var qtd = input_1.value.length - 1;
        var verify = true;

        for (const n of input_1.value) {
            const numero = parseInt(n, 10);
            if (!(numero === 0 || numero === 1)) {
                verify = false;
                break;
            };
        };
    
        if (verify) {
            txt_error.style.display = "none";
            for (const n of input_1.value) {
                const numero = parseInt(n, 10);
                const pot = numero * 2 ** qtd;
                res += pot;
                qtd -= 1;
            };
            input_2.value = res;
            input_2.style.backgroundColor = '#a3ffbf'
            setTimeout(function() {
                input_2.style.backgroundColor = '#ffffff';
            }, 2500);
        } else {
            const msg = '"' + input_1.value + '"' + ' Não é um valor binário, Tente novamente.';
            input_2.value = "";
            txt_error.textContent = msg;
            txt_error.style.display = "block";
            input_2.style.backgroundColor = '#ff7c7c';
            setTimeout(function() {
                input_2.style.backgroundColor = '#ffffff';
            }, 2500);
        };
    };
  
    function DecParaBin(){
        var valor_decimal = parseInt(input_1.value, 10);
        var res = '';

        while (valor_decimal > 0) {
            var v_bin = valor_decimal % 2;
            valor_decimal = Math.floor(valor_decimal / 2);
            res = v_bin + res;
        }

        input_2.value = res;
        input_2.style.backgroundColor = '#a3ffbf';
        setTimeout(function() {
            input_2.style.backgroundColor = '#ffffff';
        }, 2500);
    };

    if (tipo == 1){
        BinParaDec();
    }else{
        DecParaBin();
    };
};

function deletarValores() {
    input_1.value = "";
    input_2.value = "";
    txt_error.style.display = 'none';
};

function inverter(){
    if (tipo == 1){
        label_1.textContent = 'Número Decimal:';
        label_2.textContent = 'Equivalente Binário:';
        tipo = 2;
    }else{
        label_1.textContent = 'Número Binário:';
        label_2.textContent = 'Equivalente Decimal:';
        tipo = 1;
    };

    const valor1 = input_1.value
    const valor2 = input_2.value
    input_1.value = valor2
    input_2.value = valor1
};