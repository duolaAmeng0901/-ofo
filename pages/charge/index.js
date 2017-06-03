// pages/charge/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    money : 0
  },
  input : function (e) {
    this.data.money = e.detail.value;
  },
  value: /^\d+$/,
  charge : function () {
    if(this.data.money <= 0 || !this.value.test(this.data.money)){
      wx.showModal({
        title: '充值失败',
        content: '请填写数字',
        success : res => {
          if(res.cancel){
            wx.redirectTo({
              url: '../wallet/index',
            })
          }
        }
      })      
    }else{
      wx.getStorage({
        key: 'overage',
        success: res => {  
          console.log(res);        
          wx.setStorage({
            key: 'overage',
            data: res.data + Number(this.data.money)
          })
        },
        fail : res =>{
          wx.setStorage({
            key: 'overage',
            data: Number(this.data.money)
          })
        }
      })
      wx.redirectTo({
        url: '../wallet/index',
        success : function () {
          wx.showToast({
            title: '充值成功',
          })
        }
      })
    }
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