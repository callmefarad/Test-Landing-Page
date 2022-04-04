import styled from 'styled-components'

export const HeaderContainer = styled.div`
// background-color: blue;
position: absolute;
width: 90vw;
height: 40vh;
display: flex;
justify-content: space-between;
align-items: flex-start;
// border: 1px solid tomato;
z-index: 200;
`;
// export const HeaderContainer = styled.div`
// // background-color: red;
// width: 90vw;
// height: auto;
// display: flex;
// justify-content: space-between;
// align-items: center;
// margin-top: 34px;
// // border: 1px solid tomato;
// z-index: 1;
// `;
export const Logo = styled.div`
width: 109px;
height: 47px;
margin-top: 30px;
`;
// export const Logo = styled.div`
// width: 109px;
// height: 47px;
// `;
export const AllLink = styled.div`
// background-color: red;
gap: 20px;
width: auto;
display: flex;
justify-content: space-around;
margin-top: 30px;
`;
// export const AllLink = styled.div`
// background-color: red;
// height: inherit;
// width: auto;
// display: flex;
// justify-content: space-around;
// align-items: center;
// `;
export const AllContainer = styled.div`
// background-color: white;
position: relative;
width: 120px;
// height: auto;
// margin: 100px auto;
user-select: none;
display: flex;
flex-direction: column;
`;
export const Product = styled.div`
// background-color: pink;
height: auto;
display: flex;
justify-content: space-between;
align-items: center;
cursor: pointer;
padding: 10px;
`;
export const Text = styled.div`
font-family: Sora;
font-weight: 500;
text-transform: capitalize;
`;
export const Icon = styled.div`
// background-color: green;
// cursor: pointer;
`;
export const Drop = styled.div`
background-color: #f1f1f1;
width: 85%;
position: absolute;
padding: 10px;
box-shadow: 3px 3px 10px 6px rgba(0,0,0, 0.06);
font-family: Sora;
font-weight: 500;
color: grey;
text-transform: capitalize;
top: 117%;
left: 0;
`;
export const ProductList = styled.div`
// background-color: blue;
padding: 10px;
cursor: pointer;
transition: all 0.2s;
font-size: 12px;

:hover{
    background-color: #DFEBC8;
}
`;
export const Company = styled.div`
// background-color: pink;
height: auto;
display: flex;
justify-content: space-between;
align-items: center;
cursor: pointer;
padding: 10px;
`;
export const CompanyDrop = styled.div`
background-color: #f1f1f1;
width: 85%;
position: absolute;
padding: 10px;
box-shadow: 3px 3px 10px 6px rgba(0,0,0, 0.06);
font-family: Sora;
font-weight: 500;
color: grey;
text-transform: capitalize;
top: 117%;
left: 0;
`;
export const CompanyList = styled.div`
// background-color: blue;
padding: 10px;
cursor: pointer;
transition: all 0.2s;
font-size: 12px;

:hover{
    background-color: #DFEBC8;
}
`;
export const Developers = styled.div`
// background-color: pink;
height: auto;
width: 120px;
display: flex;
justify-content: space-between;
align-items: center;
cursor: pointer;
font-family: Sora;
font-weight: 500;
text-transform: capitalize;
font-size: 16px;
margin-right: 5px;
padding: 10px;
`;
export const Pricing = styled.div`
// background-color: pink;
height: auto;
width: 120px;
display: flex;
justify-content: space-between;
align-items: center;
cursor: pointer;
font-family: Sora;
font-weight: 500;
text-transform: capitalize;
font-size: 16px;
margin-right: 5px;
padding: 10px;
`;
export const Help = styled.div`
// background-color: pink;
height: auto;
width: 120px;
display: flex;
justify-content: space-between;
align-items: center;
cursor: pointer;
font-family: Sora;
font-weight: 500;
text-transform: capitalize;
font-size: 16px;
padding: 10px;
`;
export const HelpDrop = styled.div`
background-color: #f1f1f1;
width: 85%;
position: absolute;
padding: 10px;
box-shadow: 3px 3px 10px 6px rgba(0,0,0, 0.06);
font-family: Sora;
font-weight: 500;
color: grey;
text-transform: capitalize;
top: 117%;
left: 0;
`;
export const HelpList = styled.div`
// background-color: blue;
padding: 10px;
cursor: pointer;
transition: all 0.2s;
font-size: 12px;

:hover{
    background-color: #DFEBC8;
}
`;

export const AllNav = styled.div`
// background-color: tomato;
width: auto;
display: flex;
justify-content: center;
align-items: center;
margin-top: 30px;
`;
// export const AllNav = styled.div`
// // background-color: tomato;
// width: auto;
// height: inherit;
// display: flex;
// justify-content: center;
// align-items: center;
// `;
export const Login = styled.div`
// background-color: white;
width: 78px;
height: 40px;
display: flex;
justify-content: center;
align-items: center;
margin-right: 3px;
border: 1px solid #16AF6D;
box-sizing: border-box;
border-radius: 8px;
cursor: pointer;
font-family: Sora;
font-weight: 400;
text-transform: capitalize;
font-size: 12px;
transition: background-color 2s;

:hover{
    background-color: grey;
    border: 1px solid grey;
    font-weight: bold;
}
`;
export const CreateAccount = styled.div`
background-color:  #16AF6D;
width: 175px;
height: 40px;
display: flex;
justify-content: center;
align-items: center;
margin-left: 3px;
border: none;
box-sizing: border-box;
border-radius: 8px;
cursor: pointer;
font-family: Sora;
font-weight: 400;
text-transform: capitalize;
font-size: 12px;
transition: background-color 2s;

:hover{
    background-color: #013E23;
    color: white;
}
`;