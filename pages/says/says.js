// pages/says/says.js
var count = 0;
Page({

  /**
   * 页面的初始数据
   */
 
  data: {
    stars:[0,1,2,3,4],
    normalSrc:'../../img/star_small_off.png',
    selectedSrc:'../../img/star_small_on.png',
    halfSrc:'../../img/half.png',
    key:0,
    num:''
  },
  //点击左边，半颗星
  selectLeft: function (e) {
    var key =e.currentTarget.dataset.key;
    if (this.data.key == 0.5 && e.currentTarget.dataset.key == 0.5){
      key=0;
    }
    this.num = key * 2 + '分'
    console.log(this.num)
    this.setData({
      key:key,
      num: this.num
    })
  },
  selectRight:function(e){
    var key = e.currentTarget.dataset.key;
    this.num=key*2+'分'
    console.log(this.num)
    this.setData({
      key:key,
      num:this.num
    })
  },
  bindFormSubmit(){
      wx.navigateBack({

    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   
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