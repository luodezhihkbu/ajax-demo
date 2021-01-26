console.log('我是main.js')
 
getCSS.onclick = () => {
    const request = new XMLHttpRequest()
    request.open("GET", "/style.css")
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
        // 下载完成，但不知道是成功（状态码为2xx）还是失败（状态码为4xx或5xx）
            if (request.status >= 200 && request.status < 300) {
                const style = document.createElement("style")
                // 创建 style 标签
                style.innerHTML = request.response
                // 填写 style 内容
                document.head.appendChild(style)
                // 插到 head 里面
            } else {
                alert("加载 CSS 失败")
            }
        }
    }       
    request.send()
}

getJS.onclick = () => {
    const request = new XMLHttpRequest()
    request.open("GET", "/2.js")
    request.onload = () => {
        const script = document.createElement("script")
        script.innerHTML = request.response
        document.body.appendChild(script)
    }
    request.onerror = () => {}
    request.send()
}

getHTML.onclick = () => {
    const request = new XMLHttpRequest()
    request.open("GET", "/3.html")
    request.onload = () => {
        const div = document.createElement("div")
        div.innerHTML = request.response
        document.body.appendChild(div)
    }
    request.onerror = () => {}
    request.send()
}

getXML.onclick = () => {
    const request = new XMLHttpRequest()
    request.open("GET", "/4.xml")
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            const dom = request.responseXML // XML是dom对象。
            const text = dom.getElementsByTagName('warning')[0].textContent // 获取‘warning’标签里的第一个文本内容。
            console.log(text.trim()) // 把去掉回车和空格后的内容打出来。
        }
    }
    request.send()
}

getJSON.onclick = () => {
    const request = new XMLHttpRequest()
    request.open("GET", "/5.json")
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            const object = JSON.parse(request.response) // 把json字符串类型数据转化成js对象
            myName.textContent = object.name // 把id=myName元素里的文本内容改成object.name
        }
    }
    request.send()
}

let n = 1
getPAGE.onclick = () => {
    const request = new XMLHttpRequest()
    request.open("GET", `/page${n+1}.json`)
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            const div = document.createElement('div')
            div.innerHTML = request.response
            page.appendChild(div)
            n += 1
        }
        console.log(n)
    }
    request.send()
}

