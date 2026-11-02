document.querySelector("#moreBtn").addEventListener("click", () => {
  document.querySelector(".textt").textContent = "Test GITHUB & GIT";
});

document.querySelector("#moreBtn").addEventListener("click", () => {
  document.querySelector(".textt").style.color = "red";
});

document.querySelector("#lessBtn").addEventListener("click", () => {
  document.querySelector(".textP").innerHTML =
    `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis
      reiciendis, fugiat architecto odit quibusdam assumenda saepe magni iusto
      laborum optio eligendi dignissimos labore error voluptate ab, eius
      quaerat. Quaerat eveniet dicta debitis quidem mollitia tempore corrupti,
      molestias odio, dolorum accusantium consequuntur officia qui asperiores,
      labore possimus quos culpa repellat. Sunt veritatis hic maxime illum
      facilis, sequi deserunt cumque. <button id="moreBtn">Read More</button>`;
});
