// pages/seat/seat.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      cinemaName:'',
      time:'',
      hall:'',
      seat:[],
      selected:{
        "0":"../../img/white.png",
        "1":"../../img/redseat.png",
        "2":"../../img/green.png"
      },
      array:[],
      have:false,
      price:'',
      newprice:'',
      count:0,
      movieName:''
      // index:''
      // x:'',
      // y:''

  },
change(e){
// var that=this;
  let name = e.currentTarget.dataset.name;
  let x = e.currentTarget.dataset.x;
  let y = e.currentTarget.dataset.y;

    if(name==0){
        
        if(this.data.array.length<4){
          this.data.count++;
          this.data.seat[x][y] = 2;
          this.data.array.push(e.currentTarget.dataset);
          this.setData({
            seat: this.data.seat,
            array: this.data.array,
            count:this.data.count
            
          })
        }
       
     
    
    }
    else if(name==2){
      this.data.count--;
      // console.log(x,y)
      // console.log(this.data.seat)
      // console.log(this.data.array)
      this.data.seat[x][y] = 0;
      // this.data.seat[x][y] = 0;
      for(let i=0;i<this.data.array.length;i++){
        if (this.data.array[i].x == x && this.data.array[i].y == y) {
          // this.data.seat[x][y] = 0;
          this.data.array.splice(i,1)
          this.setData({
            seat: this.data.seat,
            array: this.data.array,
            count:this.data.count
          })
        }
      }
     
    }
    // 选中后改变按钮颜色
    if (this.data.array.length > 0) {
      this.data.have = true
      this.setData({
        have: this.data.have
      })
    }else{
      this.data.have=false
      this.setData({
        have: this.data.have
      })
    }

    this.setData({
      newprice: this.data.price * this.data.count
    })
    // console.log(this.data.array);
},
  reduce(e){
    let x = e.currentTarget.dataset.x;
    let y = e.currentTarget.dataset.y;
  //   console.log(e)
  //  console.log(x,y)
  //  console.log(this.data.array)
   
    for (let i = 0; i < this.data.array.length; i++) {
      // console.log(this.data.array)
      if (this.data.array[i].x== x && this.data.array[i].y == y) {
        console.log(2)
        this.data.array.splice(i, 1)
        // this.data.count--;
        this.data.seat[x][y] = 0;
        this.setData({
          seat: this.data.seat,
          array: this.data.array,
          count: this.data.count
        })
      }
    }
    // this.data.count--;
    // this.data.seat[this.data.x][this.data.y] = 0;
    // let some = e.currentTarget.dataset.some;
    // this.setData({
    //   index:some
    // })
    // for (let i = 0; i < this.data.array.length;i++){

    //   this.data.array.splice(this.data.index, 1)
    //   this.setData({
    //     seat: this.data.seat,
    //     array: this.data.array,
    //     count: this.data.count
    //   })
    // }

   
  },
pay(){
  if (this.data.array.length>0){
    let movieName = this.data.movieName;
    let hall = this.data.hall;
    let cinemaName = this.data.cinemaName;
    let time = this.data.time;
    let array = JSON.stringify(this.data.array);
    let newprice = this.data.newprice;
    wx.navigateTo({
      url: `../pay/pay?movieName=${movieName}&hall=${hall}&cinemaName=${cinemaName}&time=${time}&array=${array}&newprice=${newprice}`
    })
  }
 
},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options)
    var that=this;
    that.setData({
      movieName:options.CName,
      time:options.time,
      cinemaName: options.cinema,
      hall: options.hall,
      seat:JSON.parse(options.seat),
      price:options.price
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})