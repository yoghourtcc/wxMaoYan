// pages/choose/choose.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    two: true,
    there: false,
    four: false,
    five: false,
    cinemaList:[],
    priceAll:'',
    kongMovie:[],
    idCard:''
  },
  two() {
    this.setData({
      two: true,
      there: false,
      four: false,
      five: false
    })
  },
  there() {
    this.setData({
      two: false,
      there: true,
      four: false,
      five: false
    })
  },
  four() {
    this.setData({
      two: false,
      there: false,
      four: true,
      five: false
    })
  },
  five() {
    this.setData({
      two: false,
      there: false,
      four: false,
      five: true
    })
  },
  clickCinema(e){
    let ids = e.currentTarget.dataset.id;
    // 点击的电影院的下标
    let index= e.currentTarget.dataset.index;
    // 通过下标获取到的电影院的电影
    let longs = this.data.kongMovie[index];
    // 影院名
    let name = e.currentTarget.dataset.name;
    // 影院地址
    let address = e.currentTarget.dataset.address;
    let IDS=this.idCard;
    // console.log(IDS)
    // console.log(e)
    wx.navigateTo({
      url: `../ticket/ticket?cinemaId=${ids}&longs=${longs}&name=${name}&address=${address}&IDS=${IDS}`
    })
    // console.log(e);
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   
    var that=this;
    that.idCard = options.movieId;
    // console.log(options)
   
      // success:function(data){
        
        wx.setNavigationBarTitle({
          title: options.name
    })
    // 获取电影院数据
        let list=[];
        let kongMovie=[];
    wx.request({
      url: 'http://127.0.0.1:3000/cinemas/find',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success:function(data){
        // console.log(data)
        for(let i=0;i<data.data.length;i++){
          for(let j=0;j<data.data[i].Movie.length;j++){
            // console.log(1)
            if (data.data[i].Movie[j] == options.movieId){
              // console.log(2)
              list.push(data.data[i]) 
              kongMovie.push(data.data[i].Movie)
              console.log(kongMovie)
            }

          }
         
        }
        that.setData({
          cinemaList: list,
          kongMovie: kongMovie,
          idCard:that.idcard
        }) 
       
        // console.log(list)
       
      }
    })

    let price=[];
    for(let i=0;i<100;i++){
      price.push(Math.floor(Math.random()*100))
    }
    that.setData({
        priceAll:price
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