let rectangel={
    width:10,
    length:20,
    area:function(){
        console.log(this.width*this.length);
    },
    perimeter:function(){
        console.log(2*(this.width + this.length));
    }
}
rectangel.area()
rectangel.perimeter()