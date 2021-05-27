var fullname = 'aa'
var obj = {
  fullname: 'bb',
  getName3: function () {
    console.log(this.fullname)
  },
  getName4: () => {
    console.log(this.fullname)
  },
  p: {
    fullname: 'cc',
    getName() {
      console.log(this.fullname)
    },
    getName2: () => {
      console.log(this.fullname)
    }
  }
}

obj.p.getName()
obj.p.getName2()
obj.getName3()
obj.getName4()

var obj3 = obj.getName3
obj3()
var obj4 = obj.getName4
obj4()