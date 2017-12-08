// pages/ticket/ticket.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    current: 0,
    curMovie: {}, //当前电影
    movieList: [],//当前影院的所有电影
    cinema: '',
    scheule: [],
    length: 0,
    address: '',
    price:''

  },
  changeMovie(e){
    let that = this
    let scheuleTime = []
    // console.log(this.data.movieList[e.detail.current])
    if (this.data.movieList[e.detail.current].scheule){
      let scheules = this.data.movieList[e.detail.current].scheule
      that.setData({
        length: scheules.length
      })
      for (let i = 0; i < scheules.length; i++) {
        wx.request({
          url: 'http://127.0.0.1:3000/scheule/find',
          data: {
            _id: scheules[i]
          },
          success: function (data) {
            // console.log(data)
            scheuleTime.push(data.data)
            that.setData({
              scheule: scheuleTime,
              price:that.price
            })
          }
        })
      }
    } else {
      that.setData({
        length: 0
      })

    }
    this.setData({
      curMovie: this.data.movieList[e.detail.current],
      curMovieIndex: e.detail.current
    })
  },
  goSeat(e){
    let time = e.currentTarget.dataset.time;
    let cinema = this.data.cinema;
    let address = this.data.address
    let CName = this.data.curMovie.CName;
    let hall = e.currentTarget.dataset.hall;
    let seat = JSON.stringify(e.currentTarget.dataset.seat);
    let id = e.currentTarget.dataset.id;
    let price = e.currentTarget.dataset.price;
    wx.navigateTo({
      url: `../seat/seat?cinema=${cinema}&address=${address}&CName=${CName}&time=${time}&hall=${hall}&seat=${seat}&id=${id}&price=${price}`,
    })
    // console.log(e.currentTarget)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options)
    var that=this;
    let id = options.cinemaId;
    // console.log(id)
    // 存放电影信息
    let kong=[];
    // 电影院里面的电影
    let cinemaMovies=options.longs.split(',');
    // console.log(cinemaMovies);
    for (let i = 0; i < cinemaMovies.length;i++){
      wx.request({
        url:'http://127.0.0.1:3000/Movie/find',
        data: { _id: cinemaMovies[i] },
        success:function(data){
          // console.log(data)
          data.data.bigImg[0] = data.data.bigImg[0].replace(/\\/, '/')
          data.data.actors = data.data.actors.split('，')
          kong.push(data.data)
          that.setData({
            movieList: kong,
            curMovie: data.data
          })
          //定位电影位子
          if (data.data._id == options.IDS) {
            that.setData({
              current: i
            })
          }
        }
      })
    }
    wx.setNavigationBarTitle({
      title: '影院'
    })
    that.setData({
      cinema: options.name,
      address: options.address
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