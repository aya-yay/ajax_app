function check() {
  const posts = document.getElementsByClassName("post");
  postsA = Array.from(posts);
  postsA.forEach(function (post) {
    if (post.getAttribute("data-load") != null) {
      return null;
    }
    post.setAttribute("data-load", "true");
    post.addEventListener("click", (e) => {
      const postId = post.getAttribute("data-id");
      const XHR = new XMLHttpRequest();
      XHR.open("GET", `/posts/${postId}`, true);
      XHR.responseType = "json"
      // ↑レスポンスされてきたJSONにアクセスできる。
      XHR.send();
      XHR.onload = () => {
        // ↑レスポンスなどの受信が成功した場合に呼び出される
        const item = XHR.response.post;
                    //  ↑posts_controllerのcheckアクションで定義・返却されたitemをXHR.response.postで取得できる。
        if (item.checked === true) {
                    // ↑true,falseはposts_controllerで定義されている
          post.setAttribute("data-check", "true");
        } else if (item.checked === false){
          post.removeAttribute("data-check");
        }
        if (XHR.status != 200) {
          alert(`Error ${XHR.status}: ${XHR.statusText}`);
        } else {
          return null;
        }
      }
      XHR.onerror = () => {
        alert("Request failed")
      };
    });
   });
}

window.addEventListener("load", check);

  

