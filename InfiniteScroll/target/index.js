import "./style.css";
import renderList from "./listRenderer";

const app = document.querySelector("#app");
const fetchMoreTrigger = document.querySelector("#fetchMore");
let page = 0;

const fetchMore = async () => {
  const target = page ? fetchMoreTrigger : app;
  target.classList.add("loading");
  await renderList(page++);
  target.classList.remove("loading");
};

const onScroll = e => {
  const {
    scrollHeight,
    scrollTop,
    clientHeight
  } = e.target.scrollingElement;
  if(scrollTop + clientHeight === scrollHeight) {
    fetchMore();
  }
};

// 연속으로 발생하는 이벤트에 대해서
// throttle: 일정시간간격으로 한번씩만 진행
// debounce: 마지막 한 번만 실행

document.addEventListener("scroll", onScroll);
fetchMore();
