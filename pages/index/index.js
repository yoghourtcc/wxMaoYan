//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    select:true,
    selected:false,
    movieList:[],
    upList:[]
  },
  select(){
    this.setData({
      select:true,
      selected:false
      
    })
  },
  selected(){
    this.setData({
      select: false,
      selected: true
    })
  },
  // 热映点击进入电影详情
  detail(e){
    let ids = e.currentTarget.dataset.id;
    // console.log(ids)
    wx.request({
      url: `http://127.0.0.1:3000/Movie/find?movieId=${ids}`
    })
    
    wx.navigateTo({
      url: `../details/details?movieId=${ids}`
    })
 
    // console.log(e.currentTarget.dataset.id)
  },
  // 点购票
  buy(e){
   
    let ids = e.currentTarget.dataset.id
    // console.log(ids)
    let name=e.currentTarget.dataset.name
    wx.navigateTo({
      url: `../choose/choose?movieId=${ids}&name=${name}`
    })
   
  },
  // 待映的预售
  book(e){
    let ids = e.currentTarget.dataset.id
    let name = e.currentTarget.dataset.name
    wx.navigateTo({
      url: `../choose/choose?movieId=${ids}&name=${name}`
    })
  },
  // 待映电影详情
  upcom(e){
    wx.request({
      url: `http://127.0.0.1:3000/Movie/find?movieId=${e.currentTarget.dataset.id}`
    })
    let ids = e.currentTarget.dataset.id
    wx.navigateTo({
      url: `../details/details?movieId=${ids}`
    })
  },

  search(){
    wx.navigateTo({
      url:'../search/search'
    })
  },
  onLoad: function () {
    // 热映
    var that=this
    wx.request({
      url: 'http://127.0.0.1:3000/Movie/find',
      header: {
        'content-type': 'application/json' // 默认值
      },
      // data:{},
      success:function(data){
        for(let i=0;i<data.data.length;i++){
         data.data[i].bigImg[0]=data.data[i].bigImg[0].replace('\\','\/\/')
        }
        // console.log(data)
        that.setData({
          movieList:data.data
        })
        
      }
      
    })

    // 待映
    wx.request({
      url: 'http://127.0.0.1:3000/upcoming/find',
      header: {
        'content-type': 'application/json' // 默认值
      },
     success:function(data){
      //  console.log(data)
       let res=data.data;
       for(let i=0;i<res.length;i++){
         res[i].bigImg[0] = res[i].bigImg[0].replace(/\\/, '/')
         for(let j=i+1;j<res.length;j++){
           if(res[i].favor>res[j].favor){
             let temp = res[i];
             res[i] = res[j];
             res[j] = temp;
           }
         }
        
       }
       that.setData({
         upList:res
       })
      
     }

    })
  },

})
