import React from "react"
import styled from "styled-components"
import PersonCard from './PersonCard'
import Patryk from "../images/persons/patryk-min.png";
import Sebastian from "../images/persons/sebastian-min.png";
import Piotrek from "../images/persons/piotr-min.png";
import Aga from "../images/persons/aga-min.png";
import Kuba from "../images/persons/kuba-min.png";
import { Row } from "react-bootstrap";
import { useMediaQuery } from 'react-responsive';

const Persons = styled.div`
display:flex;
align-items:center;
justify-content:center;
`

export default () => {

    const isMobile = useMediaQuery({ query: `(max-width: 760px)` });

    if (isMobile == true) {
        return (
            <>
                <Persons>
                    <Row>
                        <PersonCard name="Patryk" surname="Ostrowski" role="Software Engineer" photo={Patryk} url="https://www.linkedin.com/in/patryk-ostrowski/" />
                        <PersonCard name="Sebastian" surname="Szczepański" role="CMO " photo={Sebastian} url="https://www.linkedin.com/in/sebastian-piotr-szczepanski/" />
                    </Row>
                </Persons>
                <Persons>
                    <Row>
                        <PersonCard name="Piotr" surname="Filochowski" role="Software Engineer" photo={Piotrek} url="https://www.linkedin.com/in/piotr-filochowski/" />
                        <PersonCard name="Jakub" surname="Krukowski" role="Frontend Developer" photo={Kuba} url="https://www.linkedin.com/in/jakub-krukowski-b4a066187/" />
                    </Row>
                </Persons>
                <Persons>
                    <Row>
                        <PersonCard name="Agnieszka" surname="Pawełek" role="UX Designer" photo={Aga} url="https://www.linkedin.com/in/agnieszka-pawe%C5%82ek-8658a320b"/>
                    </Row>
                </Persons>
            </>
        );
    } else {
        return (
            <>
                <Persons>
                    <Row>
                        <PersonCard name="Patryk" surname="Ostrowski" role="Software Engineer" photo={Patryk} url="https://www.linkedin.com/in/patryk-ostrowski/" />
                        <PersonCard name="Sebastian" surname="Szczepański" role="CMO " photo={Sebastian} url="https://www.linkedin.com/in/sebastian-piotr-szczepanski/" />
                        <PersonCard name="Piotr" surname="Filochowski" role="Software Engineer" photo={Piotrek} url="https://www.linkedin.com/in/piotr-filochowski/" />
                    </Row>
                </Persons>
                <Persons>
                    <Row>
                        <PersonCard name="Jakub" surname="Krukowski" role="Frontend Developer" photo={Kuba} url="https://www.linkedin.com/in/jakub-krukowski-b4a066187/" />
                        <PersonCard name="Agnieszka" surname="Pawełek" role="UX Designer" photo={Aga} url="https://www.linkedin.com/in/agnieszka-pawe%C5%82ek-8658a320b"/>
                    </Row>
                </Persons>
            </>
        );
    }
}