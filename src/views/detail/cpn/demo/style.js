import styled from "styled-components";

export const DetailWrapper = styled.div`
  text-align: center;
  .dots {
    margin: 0 auto;
    width: 140px;
    overflow: hidden;
    .list {
      flex-shrink: 0;
      display: flex;
      transition: transform 250ms ease;
      position: relative;
      span {
        border: 1px solid;
        border-radius: 3px;
        padding: 2px 4px;
      }
    }
  }
`;
