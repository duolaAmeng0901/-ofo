// pages/billing/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    text:'正在计费',
    seconds : 0,
    minutes : 0,
    hours : 0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      number : options.number
    })
    var s = 0;
    var m = 0;
    var h = 0;
    this.timer = setInterval(()=>{
      this.setData({
        seconds : ++s
      })
      if(s === 59) {
        s = -1;
        setTimeout(()=>{
          this.setData({
            minutes: ++m
          })
        },1000)
        if(m === 59) {
          m = -1;
          setTimeout(() => {
            this.setData({
              hours:++h
            })
          }, 1000)
        }
      }
    },1000)
  },
  //结束骑行
  over : function () {
    clearInterval(this.timer);
    this.setData({
      disabled:true
    })
  },
  //回到首页
  moveToIndex : function () {
    if(this.data.disabled){
      wx.redirectTo({
        url:"../index/index"
      })
    }else{
      wx.navigateTo({
        url:"../index/index?disabled=" + this.data.disabled
      })
    }
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