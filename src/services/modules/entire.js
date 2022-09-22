import BxRequest from "..";

const fetchEntireList = (offset, size = 20) => {
  return BxRequest.get({
    url: "/entire/list",
    params: {
      offset,
      size,
    },
  });
};

export { fetchEntireList };
