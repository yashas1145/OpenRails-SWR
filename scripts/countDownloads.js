var SWRV1 = 0;
var SWRV2 = 0;
var TRAIN = 0;

function swrv1Click(){
    SWRV1 += 1;
    document.getElementById("SWRV1Downloads").innerHTML = SWRV1;
}

function swrV2Click(){
    SWRV2 += 1;
    document.getElementById("SWRV2Downloads").innerHTML = SWRV2;
}

function trainClick(){
    TRAIN += 1;
    document.getElementById("TrainsetDownloads").innerHTML = TRAIN;
}