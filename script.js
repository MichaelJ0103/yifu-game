function completeMission(name) {
  localStorage.setItem(name, 'done');
  alert("任務完成！");
  location.href = 'badges.html';
}

window.addEventListener("DOMContentLoaded", () => {
  if (location.pathname.includes("badges.html")) {
    const badgeList = document.getElementById("badgeList");
    const azheDone = localStorage.getItem("azhe") === "done";
    const xiaoyuDone = localStorage.getItem("xiaoyu") === "done";

    if (azheDone) {
      badgeList.innerHTML += "<li>阿哲任務完成徽章</li>";
    }
    if (xiaoyuDone) {
      badgeList.innerHTML += "<li>小宇任務完成徽章</li>";
    }
    if (azheDone && xiaoyuDone) {
      badgeList.innerHTML += "<li><strong>金牌徽章：完成所有任務！</strong></li>";
    }
    if (!azheDone && !xiaoyuDone) {
      badgeList.innerHTML = "<li>尚未完成任何任務</li>";
    }
  }
});