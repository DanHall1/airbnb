import styled from "styled-components";

export const TabsWrapper = styled.div`
  /* display: flex; */
  .tab {
    flex-shrink: 0;
    flex-basis: 120px;
    padding: 14px 16px;
    height: 48px;
    margin-right:16px ;
    white-space: nowrap;
    border: 1px solid #eee;
    text-align: center;
    cursor: pointer;
    border-radius: 3px;
    box-sizing: border-box;
    box-shadow: 0px 7px 14px rgb(0 132 138 / 15%);
    font-size: 17px;
    line-height: 20px;
    &.active {
      background: #00848a;
      color: #ffffff;
    }
    &:last-child{
      margin-right: 0 ;
    }
  }
`;
