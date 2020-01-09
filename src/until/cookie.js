class Cookie {
  // 设置cookie值
  setItem (name, value, expiredays) {
    let cookieValue;
    if (typeof (value) === 'object') {
      cookieValue = JSON.stringify(value);
    } else {
      cookieValue = value;
    }
    const data = new Date();
    data.setDate(data.getDate() + expiredays);
    document.cookie = `${name}=${escape(cookieValue)
    }${(expiredays == null) ? '' : `;expires=${data.toGMTString()}`};path=/`;
  }
  // 获取cookie值
  getItem (name) {
    if (document.cookie.length > 0) {
      let startIndex = document.cookie.indexOf(`${name}=`);
      if (startIndex !== -1) {
        startIndex = startIndex + name.length + 1;
        let endIndex = document.cookie.indexOf(';', startIndex);
        if (endIndex === -1) {
          endIndex = document.cookie.length;
        }
        return unescape(document.cookie.substring(startIndex, endIndex));
      }
    }
    return null;
  }
  // 删除cookie的值
  delItem () {
    // console.log('delete');
    // const exp = new Date();
    // exp.setTime(exp.getTime() - 1);
    // document.cookie = `${this.name}=0;expires=-1`;
    this.setItem(0, -10)
  }
}

export default new Cookie();
