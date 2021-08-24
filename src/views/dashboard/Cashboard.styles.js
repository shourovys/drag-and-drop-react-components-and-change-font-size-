import styled from "styled-components";

export const DashboardFont = styled.section`
  font-size: ${({fontSize})=>fontSize>9?fontSize+'px':'16px'} !important;

  & input{
      margin-bottom: 32px;
  }
`;
