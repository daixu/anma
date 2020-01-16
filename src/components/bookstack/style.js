import styled from 'styled-components';

export const ListWrap = styled.ul`
  margin: 0;
  padding: 0;
  width: 100%;
`;

export const ListItem = styled.li`
    width: 50%;
    height: 108px;
    line-height: 108px;
    padding-left: 15px;
    margin-top: 10px;
    display: inline-block;
    position:relative;
`;

export const ImageWrap = styled.img`
  width: 84px;
  height: 108px;
  background-position: center center;
  background-repeat: no-repeat;
`;

export const SpanWrap = styled.span`
  position:absolute;
  margin-left: 10px;
  top:0;
  bottom:0;
`;
