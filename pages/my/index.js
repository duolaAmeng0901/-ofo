// pages/my/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {
      userUrl : '',
      userName : '未登录'
    },
    text : '登录',
    btntype : 'primary'
  },
  //登录按钮
  login : function () {
    if(this.data.text === '登录'){
      wx.login({
        success : ()=> {
          wx.getUserInfo({
            success : res => {
              this.setData({
                userInfo : {
                  userUrl : res.userInfo.avatarUrl,
                  userName : res.userInfo.nickName
                },
                text : '退出登录',
                btntype : 'warn'
              })
              wx.setStorage({
                key: 'userInfo',
                data: {
                  userInfo: {
                    userUrl: res.userInfo.avatarUrl,
                    userName: res.userInfo.nickName
                  },
                  text: '退出登录',
                  btntype: 'warn'
                }
              })
            }
          })
          
        }
      })
    }else{
      wx.removeStorageSync('userInfo');
      this.setData({
        userInfo: {
          userUrl: '',
          userName: '未登录'
        },
        text: '登录',
        btntype: 'primary'
      })
    }
  },
  //我的钱包
  moveToWallet : function () {
    wx.navigateTo({
      url : "../wallet/index"
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getStorage({
      key : 'userInfo',
      success : res => {
        console.log(res)
        this.setData({
          userInfo : {
            userUrl : res.data.userInfo.userUrl,
            userName : res.data.userInfo.userName
          },
          text : res.data.text,
          btntype : res.data.btntype
        })
      }
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