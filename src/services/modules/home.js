import BxRequest from "..";

function fetchHomeData() {
  return BxRequest.get({
    url: "home/goodprice",
  });
}

function fetchHighScore() {
  return BxRequest.get({
    url: "/home/highscore",
  });
}

function fetchDiscountData() {
  return BxRequest.get({
    url: "/home/discount",
  });
}

function fetchHotRecommend() {
  return BxRequest.get({
    url: "home/hotrecommenddest",
  });
}

function fetchLongFor() {
  return BxRequest.get({
    url: "home/longfor",
  });
}

function fetchPlus() {
  return BxRequest.get({
    url: "home/plus"
  })
}

export {
  fetchHighScore,
  fetchHomeData,
  fetchDiscountData,
  fetchHotRecommend,
  fetchLongFor,
  fetchPlus
};
