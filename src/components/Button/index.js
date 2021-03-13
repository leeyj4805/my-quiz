import React from "react";
import styled from "styled-components";
    // Button 컴포넌트에 속성으로 넘겨준 값들은 props에 보관됩니다.
    // props를 통해 받은 event handling 함수를 클릭 이벤트에 매핑(바인딩)
const StyledButton = styled.button`
    font-size: ${(props) => (props.fontSize === "big" ? "32px" : "16px")};
    color: #ffffff;
    background-color: ${(props) => props.theme.primaryColor100};
    border-radius: 5px;
    border: 0px;
    height: 56px;
    padding: 4px;
    margin: 4px;
    cursor: pointer;
    width: 100%;
    outline: none;
    font-weight: 700;
    &:hover {
        background-color: ${(props) => props.theme.primaryColor80};
    }
}`;

const Button = (props) => (
	<StyledButton onClick={props.onClick}>{props.text}</StyledButton>
);
export default Button;