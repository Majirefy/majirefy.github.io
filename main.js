var heart = [65, 66, 67, 72, 73, 74, 84, 85, 86, 87, 88, 91, 92, 93, 94, 95, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 266, 267, 268, 269, 270, 271, 272, 273, 287, 288, 289, 290, 291, 292, 308, 309, 310, 311, 329, 330];
var nums;
var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
Array.matrix = function(numrows, numcols, initial) {
    var arr = [];
    for(var i = 0; i < numrows; ++i) {
        var columns = [];
        for(var j = 0; j < numcols; ++j) {
            columns[j] = initial;
        }
        arr[i] = columns;
    }
    return arr;
}
function shuffleArray(array) {
    for(let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
function animate(xPos, yPos, count) {
    var r = randomNumber(64, 254 - 64);
    var g = randomNumber(128, 255);
    var b = randomNumber(128, 255);
    var alpha = randomNumber(55, 85);
    //For heart Sharpe
    if(inArray(count, heart)) {
        r = randomNumber(128 + 64, 255);
        g = randomNumber(0, 63);
        b = randomNumber(0, 63);
        alpha = randomNumber(70, 100);
    }
    context.fillStyle = 'rgba(' + r + ',' + g + ',' + b + ',' + alpha + ')';
    context.fillRect(xPos, yPos, 25, 25);
}
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
draw();
function draw() {
    if(canvas.getContext) {
        nums = Array.matrix(400, 3, 0);
        var x = 0;
        var y = 0;
        var count = 0;
        for(var j = 0; j < 20; j++) {
            for(var i = 0; i < 20; i++) {
                nums[count][0] = x;
                nums[count][1] = y;
                nums[count][2] = count;
                count += 1;
                x += 26;
            }
            x = 0;
            y += 26;
        }
        nums = shuffleArray(nums);
        for(var j = 0; j < nums.length; j++) {
            doSetTimeout(j);
        }
    }
}
function doSetTimeout(i) {
    setTimeout(function() { animate(nums[i][0], nums[i][1], nums[i][2]); }, 10 * i);
}
function animate(xPos, yPos, count) {
    var r = randomNumber(64, 255 - 64);
    var g = randomNumber(128, 255);
    var b = randomNumber(128, 255);
    var alpha = randomNumber(55, 85);
    //For heart Sharpe
    if(inArray(count, heart)) {
        r = randomNumber(128 + 64, 255);
        g = randomNumber(0, 63);
        b = randomNumber(0, 63);
        alpha = randomNumber(70, 100);
    } else {
        context.globalAlpha = 0.6;
    }
    context.fillStyle = 'rgba(' + r + ',' + g + ',' + b + ',' + alpha + ')';
    fillRoundedRect(xPos, yPos, 25, 25, 4);
}
function fillRoundedRect(x, y, w, h, r) {
    context.beginPath();
    context
    context.moveTo(x + r, y);
    context
    context.lineTo(x + w - r, y);
    context
    context.quadraticCurveTo(x + w, y, x + w, y + r);
    context
    context.lineTo(x + w, y + h - r);
    context
    context.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
    context
    context.lineTo(x + r, y + h);
    context
    context.quadraticCurveTo(x, y + h, x, y + h - r);
    context
    context.lineTo(x, y + r);
    context
    context.quadraticCurveTo(x, y, x + r, y);
    context
    context.fill();
}
function inArray(value, array) {
    var count = array.length;
    for(var i = 0; i < count; i++) {
        if(array[i] === value) { return true; }
    }
    return false;
}