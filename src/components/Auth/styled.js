import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    max-width: 1240px;
    margin-right: auto;
    margin-left: auto;
    padding-right: 15px;
    padding-left: 15px;
`;

const Row = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin-right: -15px;
    margin-left: -15px;
`;

const Col = styled.div`
    flex: 0 0 100%;
    max-width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    @media (min-width: 576px) {
        flex: 0 0 50%;
        max-width: 50%;
    }
    @media (min-width: 768px) {
        flex: 0 0 33.333333%;
        max-width: 33.333333%;
    }
    @media (min-width: 992px) {
        flex: 0 0 25%;
        max-width: 25%;
    }
    @media (min-width: 1200px) {
        flex: 0 0 20%;
        max-width: 20%;
    }
`;

const Card = styled.div`
    width: 100%;
    height: 100%;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    padding: 20px;
    margin-bottom: 20px;
    transition: all 0.3s ease;
    &:hover {
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    }
`;

export { Container, Row, Col, Card };
