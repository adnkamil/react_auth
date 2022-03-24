import styled from "styled-components";

export default function NavSyle() {
  const Ul = styled.div`
    /* position:fixed; */
    display: flex;
    justify-content: space-between;
    padding: 16px;
    box-shadow: 3px 3px 11px 3px rgb(0 0 0 / 32%);
    top: 0px;
    border-radius: 0 0 8px 8px;
    align-items:center;
    
    .left {
      font-size: 30px;
      font-weight: 600;

      .logo {
        text-decoration:none;
        color: rgb(3,172,14);
      }
    }


    .right {
      align-items: center;
      margin: 0 20px;
      display: flex;
      justify-content:flex-end;

      .nav-point {
        margin-right:15px;

        .item {
          padding: 10px;
          text-decoration: none;
        }
      }
      
      button {
        text-decoration: none;
        width: 100%;
        height: 32px;
        padding: 0px 16px;
        border-radius: 8px;
        background-color: #ffffff;
        cursor: pointer;
        border: 1px solid rgb(3,172,14);;
  
      }
      .login {
        text-decoration: none;
        color: rgb(3,172,14);;
      }
      
      button:hover {
        background-color: rgb(3,172,14);;
        transition: 0.3s;
  
        .login {
          color: #ffffff;
        }
      }
    }

  `;

  
  return { Ul } 
}
