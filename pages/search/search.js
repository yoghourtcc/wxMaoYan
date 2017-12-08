// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    focus:true,
    vvv:'',
    movie: [],
    flag:true

  },
  input(e){
   let name=[];
    this.setData({
      vvv:e.detail.value,
    })
    console.log(this.data.vvv)

    var that=this;
    wx.request({
      url:'http://127.0.0.1:3000/Movie/find',
      data:{
          CName:this.data.vvv,

      },
      success:function(data){
      
        console.log(data.data)
        for (let i = 0; i < data.data.length; i++) {
          data.data[i].bigImg[0] = data.data[i].bigImg[0].replace('\\', '\/')
          // console.log(data.data[i].bigImg[0])
          that.setData({
            movie: data.data
          })
        }
  
      
       
      }
    })
    if (this.data.vvv) {
      this.data.flag = true
    } else {
      this.data.flag = false
    }
    this.setData({
      flag: that.data.flag
    })
   
  },
  cancel(){
    wx.navigateBack({
      
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '搜索'
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