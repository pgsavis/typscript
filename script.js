var isDone = true;
var decimal = 20;
var hex = 0xf00d;
var binary = 10;
var fullname = "Sayyed Jamal Ghasemi";
var list = [1, 2, 3, 4, 5];
var list2 = ["jamal", "ghasemi"];
var x;
x = ["hello", 10];
x[2] = 10;
x[3] = 20;
console.log(x);
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Yellow"] = 2] = "Yellow";
})(Color || (Color = {}));
var c = Color.Green;
var c1 = Color[1];
console.log(c, c1);
var anyVar = 5;
anyVar = "hesam";
anyVar = true;
var list3 = [20, "jamal", true];