//console.log(2 + '2'-1);

//console.log([] == ![]);

//console.log(3 < 2 < 1);

const object1 = {
    a: 10,
    b: 20,
    c: function () {
      console.log(this.a + this.b);
    },
  };
  const result = object1.c;
  console.log(result)
  //
  // result.c();