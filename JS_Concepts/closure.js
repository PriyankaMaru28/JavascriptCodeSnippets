const b = function () {
  var a = 10;

  function newFn() {
    console.log(a);
  }
  return newFn;
};

const obj = {
  firstname: " abc",
  setName: function () {
    displayName = () => {
      console.log(this.firstname);
    };
    displayName();
  },
};

obj.setName();

b()();
d = "what?";
function outest() {
  var c = 10;
  function newIn() {
    function newIn() {
      console.log(c, this.d);
    }
    newIn();
  }
  newIn();
  //   function inner(b) {
  //     var inn = function () {
  //       console.log(a, b, c, d);
  //     };
  //     let a = 20;
  //   }
}

outest();
console.log("============");
function z() {
  var b = 9000;
  function x() {
    var a = 800;
    function y() {
      console.log(a, b);
    }
    y();
  }
  x();
}
z();
