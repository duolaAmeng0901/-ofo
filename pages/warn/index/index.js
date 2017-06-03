// pages/warn/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    color:"",
    text: '照相/相册',
    picUrls : [],
    bikeInfo: {
      number : 0,
      desc : ''
    },
    checkboxValues : [],
    itemsValue : [
      {
        value:"私锁私用",
        color:'#b9dd08',
        checked:false
      },
      {
        value: "车牌损坏",
        color: '#b9dd08',
        checked: false
      },
      {
        value: "轮胎坏了",
        color: '#b9dd08',
        checked: false
      },
      {
        value: "车锁坏了",
        color: '#b9dd08',
        checked: false
      },
      {
        value: "违规乱停",
        color: '#b9dd08',
        checked: false
      },
      {
        value: "密码错误",
        color: '#b9dd08',
        checked: false
      },
      {
        value: "刹车损坏",
        color: '#b9dd08',
        checked: false
      },
      {
        value: "其他故障",
        color: '#b9dd08',
        checked: false
      }
    ]
  },
  //点击复选框添加信息
  bindchange : function (e) {
    var _value = e.detail.value;
    this.setData({
      checkboxValues : _value
    })
    if(_value.length > 0 && this.data.text === '+'){
      this.setData({
        color : '#b9dd08'
      })
    }else{
      this.setData({
        color : ""
      })
    }
  },
  //点击添加图片
  bindtap : function () {
    wx.chooseImage({
      success: res => {
        var urls = res.tempFilePaths[0];
        var _picUrls = this.data.picUrls;
        _picUrls.push(urls);
        this.setData({
          picUrls : _picUrls,
          text : '+'
        })
        if(this.data.checkboxValues.length > 0){
          this.setData({
            color: '#b9dd08'
          })
        }   
      }
    })
  },
  //点击删除图片
  binddelete : function (e) {
    var index = e.target.dataset.index;
    var _picUrls = this.data.picUrls;
    _picUrls.splice(index, 1);
    this.setData({
      picUrls : _picUrls
    })
    if(_picUrls.length === 0){
      this.setData({
        text : '照相/相册',
        color : ''
      })
    }
  },
  //添加车牌号
  changeNumber : function (e) {
    this.setData({
      bikeInfo : {
        number : e.detail.value,
        desc : this.data.binkInfo.desc
      }
    })
  }, 
  //添加备注
  changeDesc : function (e) {
    this.setData({
      bikeInfo : {
        number : this.data.bikeInfo.number,
        desc : e.detail.value
      }
    })
  },
  //提交
  submit : function () {
    if(this.data.color !== '') {
      wx.request({
        url: "https://www.easy-mock.com/mock/592bfd2491470c0ac1fea872/ofo/server",
        success : res => {
          wx.showToast({
            title : '提交成功',
            icon: 'success',
            duration : 2000
          })
        }
      })
    }else{
      wx.showModal({
        title:"请填写信息",
        content : '宝贝，快去填信息！！',
        confirmText : '么么哒',
        cancelText : '不嘛！',
        success : res => {
          if(res.cancel){
            wx.redirectTo({
              url : '../../index/index'
            })
          }
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