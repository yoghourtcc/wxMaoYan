// pages/cinema/cinema.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cinemaList:[],
    price:'',
    kongMovie: []
  },
  search(){
    wx.navigateTo({
      url:'../cinemaSearch/cinemaSearch'
    })
  },
  goto(e){
    let index = e.currentTarget.dataset.index;
    let longs = this.data.kongMovie[index];
    let ids = e.currentTarget.dataset.id
    console.log(longs)
    wx.navigateTo({
      url:`../ticket/ticket?cinemaId=${ids}&longs=${longs}`
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    let priceAll=[];
    let kongMovie = [];
    for(let i=0;i<50;i++){
      priceAll.push(Math.floor(Math.random() * 30)+20)
    }
    that.setData({
      price: priceAll
    })
    wx.request({
      url:'http://127.0.0.1:3000/cinemas/find',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success:function(data){
        for (let i = 0; i < data.data.length; i++) {
          for (let j = 0; j < data.data[i].Movie.length; j++) {
            
             

          }
          kongMovie.push(data.data[i].Movie)
        }
        // console.log(data.data[0].Movie);
        that.setData({
          cinemaList:data.data,
          kongMovie: kongMovie,
        })
      }
    })
    wx.setNavigationBarTitle({
      title: '影院'
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