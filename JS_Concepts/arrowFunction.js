const profile = {
  firstname: "Priynka",
  lastname: "M",
  setName: function (name) {
    this.firstname = name.split(" ")[0];
    this.lastname = name.split(" ")[1];
    console.log(
      "outside Display Name...\n" + this.firstname + " " + this.lastname
    );
    firstname = "Outside!!";
    lastname = "Redeclared";
    displayOldName = function () {
      console.log(
        "Display Name using anonyous fn : " +
          this.firstname +
          " " +
          this.lastname
      );
    };

    displayName = () => {
      firstname = "No Name";
      console.log(
        "Display Name using arrow fn : " + this.firstname + " " + this.lastname
      );
    };
    displayOldName();
    displayName();
  },
};

profile.setName("Khyati Maru");
