var pNames=[];
var pPrices=[];

$(".atc").click(function() {
    var prod = $(".pn").val();
    var pri = $(".pp").val()-0;
    pNames.push(prod);
    pPrices.push(pri);
    var ti = pNames.length;
    var tPrice = 0;
    $("#noi").text(ti);
    $(".pNames").append("<p>" + prod + "</p>");
    $(".pPrices").append("<p>" + pri + "</p>");
    pPrices.forEach(function(pPrice) {
        tPrice=tPrice+pri;
    });
    $("#tp").text(tPrice);
});

$(".pc").click(function() {
    var tPrice = 0;
    pPrices.forEach(function(pPrice) {
        tPrice=tPrice+pPrice;
    });
    alert("Thank you for buying a " + pNames[0] + " and more." + " Your total price is " + tPrice + ".");
});
