var slider_all = document.getElementById('slider_all');
var slider_TopLeft = document.getElementById('slider_TopLeft');
var slider_TopRight = document.getElementById('slider_TopRight');
var slider_BottomRight = document.getElementById('slider_BottomRight');
var slider_BottomLeft = document.getElementById('slider_BottomLeft');
var shape = document.getElementById('shape');
var v_topLeft = 0;
var v_topRight = 0;
var v_BottomRight = 0;
var v_BottomLeft = 0;
var span_border_radius = document.getElementById('valor_border_radius');

atualizarBorderRadius();

function atualizarBorderRadius(){
    var shape_css = window.getComputedStyle(shape);
    var borderRadius = shape_css.getPropertyValue('border-radius');
    span_border_radius.textContent = borderRadius;
};

slider_all.addEventListener("input", (event) => {
    var valor = event.target.value + '%';
    shape.style.borderRadius = valor;
    slider_TopLeft.value = 0;
    v_topLeft = 0;
    document.getElementById('rangeValue2').textContent = '0';
    slider_TopRight.value = 0;
    v_topRight = 0;
    document.getElementById('rangeValue3').textContent = '0';
    slider_BottomRight.value = 0;
    v_BottomRight = 0;
    document.getElementById('rangeValue4').textContent = '0';
    slider_BottomLeft.value = 0;
    v_BottomLeft = 0;
    document.getElementById('rangeValue5').textContent = '0';
});
slider_TopLeft.addEventListener("input", (event) => {
    slider_all.value = 0;
    document.getElementById('rangeValue1').textContent = '0';
    var valor = event.target.value + '%';
    var radius = valor + ' ' + v_topRight + ' ' + v_BottomRight + ' ' + v_BottomLeft;
    shape.style.borderRadius = radius;
    v_topLeft = valor;
});
slider_TopRight.addEventListener("input", (event) => {
    var valor = event.target.value + '%';
    var radius = v_topLeft + ' ' + valor + ' ' + v_BottomRight + ' ' + v_BottomLeft;
    shape.style.borderRadius = radius;
    v_topRight = valor;
});
slider_BottomRight.addEventListener("input", (event) => {
    var valor = event.target.value + '%';
    var radius = v_topLeft + ' ' + v_topRight + ' ' + valor + ' ' + v_BottomLeft;
    shape.style.borderRadius = radius;
    v_BottomRight = valor;
});
slider_BottomLeft.addEventListener("input", (event) => {
    var valor = event.target.value + '%';
    var radius = v_topLeft + ' ' + v_topRight + ' ' + v_BottomRight + ' ' + valor ;
    shape.style.borderRadius = radius;
    v_BottomLeft = valor;
});

function setcolor(color){
    if (color === 'white'){
        shape.style.background = 'linear-gradient(137deg, rgb(255, 255, 255) 0%, rgb(194, 194, 194) 50%, rgb(131, 131, 131) 100%)';
        shape.style.boxShadow = '0px 0px 30px 0px rgba(255,255,255,.2)';
        shape.style.transform = 'scale(97%)';
        setTimeout(function() {shape.style.transform = 'scale(100%)';}, 150);
        
    };
    if (color == 'red'){
        shape.style.background = 'linear-gradient(137deg, rgba(255,115,115,1) 0%, rgba(228,53,53,1) 50%, rgba(166,38,38,1) 100%)';
        shape.style.boxShadow = '0px 0px 30px 0px rgba(255,115,115,.2)';
        shape.style.transform = 'scale(97%)';
        setTimeout(function() {shape.style.transform = 'scale(100%)';}, 150);
    };
    if (color == 'green'){
        shape.style.background = 'linear-gradient(137deg, rgba(86,255,179,1) 0%, rgba(49,176,151,1) 50%, rgba(0,126,120,1) 100%)';
        shape.style.boxShadow = '0px 0px 30px 0px rgba(86, 255, 179, 0.2)';
        shape.style.transform = 'scale(97%)';
        setTimeout(function() {shape.style.transform = 'scale(100%)';}, 150);
    };
    if (color == 'blue'){
        shape.style.background = 'linear-gradient(137deg, rgba(0,134,255,1) 0%, rgba(0,101,167,1) 50%, rgba(1,27,156,1) 100%)';
        shape.style.boxShadow = '0px 0px 30px 0px rgba(0,134,255, .2)';
        shape.style.transform = 'scale(97%)';
        setTimeout(function() {shape.style.transform = 'scale(100%)';}, 150);
    };
    if (color == 'yellow'){
        shape.style.background = 'linear-gradient(137deg, rgba(225,255,0,1) 0%, rgba(255,175,0,1) 50%, rgba(255,124,0,1) 100%)';
        shape.style.boxShadow = '0px 0px 30px 0px rgba(225,255,0,.2)';
        shape.style.transform = 'scale(97%)';
        setTimeout(function() {shape.style.transform = 'scale(100%)';}, 150);
    };
};

function configReset(config){
    if (config == 'all'){
        v_topLeft = 0;
        v_topRight = 0;
        v_BottomRight = 0;
        v_BottomLeft = 0;
        document.getElementById('rangeValue1').textContent = '0';
        slider_all.value = 0;
        document.getElementById('rangeValue2').textContent = '0';
        slider_TopLeft.value = 0;
        document.getElementById('rangeValue3').textContent = '0';
        slider_TopRight.value = 0;
        document.getElementById('rangeValue4').textContent = '0';
        slider_BottomRight.value = 0;
        document.getElementById('rangeValue5').textContent = '0';
        slider_BottomLeft.value = 0;
    };
    if (config == 'topLeft'){
        v_topLeft = 0;
        document.getElementById('rangeValue2').textContent = '0';
        slider_TopLeft.value = 0;
    };
    if (config == 'topRight'){
        v_topRight = 0;
        document.getElementById('rangeValue3').textContent = '0';
        slider_TopRight.value = 0;
    };
    if (config == 'bottomRight'){
        v_BottomRight = 0;
        document.getElementById('rangeValue4').textContent = '0';
        slider_BottomRight.value = 0;
    };
    if (config == 'bottomLeft'){
        v_BottomLeft = 0;
        document.getElementById('rangeValue5').textContent = '0';
        slider_BottomLeft.value = 0;
    };

    var radius = v_topLeft + ' ' + v_topRight + ' ' + v_BottomRight + ' ' + v_BottomLeft;
    shape.style.borderRadius = radius;


}
