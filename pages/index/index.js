// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    longitude:126,
    latitude:45
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    this.disabled = options.disabled;
    //获取地理位置经纬度
    wx.getLocation({
      success: res => {
        this.setData({
          longitude: res.longitude,
          latitude: res.latitude
        })
      }
    })
    //获取设备信息,设置icon。
    wx.getSystemInfo({
      success:res => {
        this.setData({
          controls:[{
            id:1,
            iconPath:"/images/images/location.png",
            position:{
              width:50,
              height:50,
              left:20,
              top:res.windowHeight - 80
            },
            clickable:true
          },
          {
            id: 2,
            iconPath: "/images/images/use.png",
            position: {
              width: 90,
              height: 90,
              left: res.windowWidth / 2 - 45,
              top: res.windowHeight - 110
            },
            clickable: true
          },
          {
            id: 3,
            iconPath: "/images/images/warn.png",
            position: {
              width: 50,
              height: 50,
              left: res.windowWidth - 70,
              top: res.windowHeight - 80
            },
            clickable: true
          },
          {
            id: 4,
            iconPath: "/images/images/marker.png",
            position: {
              width: 30,
              height: 45,
              left: res.windowWidth / 2 - 15,
              top: res.windowHeight / 2 - 45
            },
            clickable: false
          },
          {
            id: 5,
            iconPath: "/images/images/avatar.png",
            position: {
              width: 50,
              height: 50,
              left: res.windowWidth - 70,
              top: res.windowHeight - 155
            },
            clickable: true
          }]
        })
      }
    })
    console.log('onload')
  },
  //map控件触发函数
  bindcontroltap : function (e) {
    switch(e.controlId) {
      case 1 :
      this.moveToCenter();
      break;
      case 2 :
      if (this.disabled){
        wx.navigateBack({
          delta : 1
        })
      }else{
        this.getCode();                
      }
      break;
      case 3 :
      this.dale();
      break;
      case 5 :
      wx.navigateTo({
        url: '../my/index',
      })
      break;
    }
  },
  //回到起始位置。
  moveToCenter : function () {
    this.mapContext = wx.createMapContext("map");
    this.mapContext.moveToLocation();
  },
  //立即用车.扫码。(未完成)
  getCode : function () {
    wx.scanCode({
      success: res => {
        console.log(res)
        wx.showLoading({
          title: "正在获取密码"
        });
        wx.request({
          url:res.result,
          success: res => {
            wx.hideLoading();
            wx.redirectTo({
              url:'../scanresult/index?password=' + res.data.data.password + '&number=' + res.data.data.number ,
              success: () => {
                wx.showToast({
                  title: '获取密码成功'
                })
              }
            })  
          },
          fail: () => {
          }
        });
      },
      
      fail: () => {
        
      }
    })
  },
  //报障
  dale : function () {
    wx.navigateTo({
      url: '../warn/index/index'
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log('onready')
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log('onshow')
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log('onhide')
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log(onunload)
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