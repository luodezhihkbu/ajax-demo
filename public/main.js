console.log("我是main.js");

getCSS.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/1.css");
  // 判断下载是否完成以及请求是否成功，都成功则加载 css ，否则提示 ”加载 CSS 失败“
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      if (request.status === 200) {
        const style = document.createElement("style"); // 创建 style 标签
        style.innerHTML = request.response; // 填写 style 内容， request.response 即为 1.css 的内容
        document.head.appendChild(style); // 插到 head 标签里面
      } else {
        alert("加载 CSS 失败");
      }
    }
  };
  request.send();
};

getJS.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/2.js");
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      if (request.status === 200) {
        const script = document.createElement("script");
        script.innerHTML = request.response;
        document.body.appendChild(script);
      } else {
        alert("加载 js 失败");
      }
    }
  };
  request.send();
};

getHTML.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/3.html");
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      if (request.status === 200) {
        const div = document.createElement("div");
        div.innerHTML = request.response;
        document.body.appendChild(div);
      } else {
        alert("加载 html 失败");
      }
    }
  };
  request.send();
};

getXML.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/4.xml");
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      if (request.status === 200) {
        const dom = request.responseXML; // XML 是 dom 对象
        const text = dom.getElementsByTagName("warning")[0].textContent; // 获取 warning 标签里的第一个文本内容
        console.log(text.trim()); // 把去掉回车和空格后的内容打出来
      } else {
        alert("加载 xml 失败");
      }
    }
  };
  request.send();
};

getJSON.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/5.json");
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      if (request.status === 200) {
        const object = JSON.parse(request.response); // 把 json 字符串类型数据转化成 js 对象
        myName.textContent = 'Hello, ' + object.name; // 替换 id=myName 元素里的文本内容
      } else {
        alert("加载 json 失败");
      }
    }
  };
  request.send();
};

let n = 1;
getPAGE.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", `/page${n + 1}.json`);
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      const div = document.createElement("div");
      div.innerHTML = `第${n + 1}页：` + request.response;
      page.appendChild(div);
      n += 1;
    }
    console.log(n);
  };
  request.send();
};
