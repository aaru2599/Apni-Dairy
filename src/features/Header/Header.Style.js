import { Link } from "react-router-dom";
import styled from "styled-components";

export const headerDiv = styled.div`
display: flex;
    justify-content: space-around;
    align-items: center;
`;
export const LinkTag=styled(Link)`
color:black;
text-decoration:none;
margin-right:40px;
font-size:1.5rem;
background-color:#f1faee;
// border:1px solid ""
padding:5px;
border-radius:5px

`;