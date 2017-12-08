// pages/details/details.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    plain:false,
    detailsList:[],
    select:false,
    want:'想看',
    score:'评分',
    flag:false,
    scoreflag:false,
    wantImg:'../../img/newxin.png',
    scoreImg:'../../img/newstart.png'
  },
  // 点击想看
  wantLook(){
    if(this.data.flag){
      this.setData({
        wantImg:'../../img/newxin.png',
        flag:false,
        want:'想看'

      })
      // console.log(1111)
    }else{
      this.setData({
        wantImg:'../../img/red.png',
        flag:true,
        want:'已想看'
        
      })
      // console.log(222)
    }
  },
  // 点击评分
  setScore(){
    wx.navigateTo({
      url: '../says/says'
    })
  }, 
   change(){
    this.select = !this.select;
    this.setData({
      select:this.select
    })
  },
  // 点击评论
  clickWrite(){
    wx.navigateTo({
      url:'../says/says'
    })
  },
  // 优惠购票
  buyTicket(e){
    let ids=e.currentTarget.dataset.id;
    let name=e.currentTarget.dataset.name;
    wx.navigateTo({
      url: `../choose/choose?movieId=${ids}&name=${name}`
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   
    var that=this;
    that.oneMovie = options.movieId;
    that.movieName = options.movieName;
    // console.log(options)
    wx.request({
      url:'http://127.0.0.1:3000/Movie/find',
      header: {
        'content-type': 'application/json' // 默认值
      },
      data:{
        _id:options.movieId
      },
      success:function(data){
        for (let i = 0; i < data.data.userSay.length; i++) {
          data.data.userSay[i] = JSON.parse(data.data.userSay[i])
        }
        
        // for (let i = 0; i < data.data.bigImg.length; i++) {
          data.data.bigImg[0] = data.data.bigImg[0].replace(/\\/, '/')
        // }
        for (let i = 0; i < data.data.pictures.length; i++) {
          data.data.pictures[i] = data.data.pictures[i].replace(/\\/, '/')
        }
        for (let i = 0; i < data.data.actorImg.length; i++) {
          data.data.actorImg[i] = data.data.actorImg[i].replace(/\\/, '/')
        }
        data.data.actors=data.data.actors.split('，')
        that.setData({
          detailsList:data.data,
        })
        // console.log(data.data.userSay)
      }
    })
    wx.setNavigationBarTitle({
      title: '影片详情'
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function (options) {
    // console.log(options)
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