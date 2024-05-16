import React, { useContext } from 'react';
import { SolutionLayoutContainer, SolutionLayoutTitle, SolutionsLayoutTab, StepsContainer } from "./SolutionLayout.styled";

import { Accordion, Placeholder, Stack, Avatar } from 'rsuite';
import "./accordion.css";
import Steps from '../../assets/imgs/steps.png';
import Solutions from '../../assets/imgs/solutions.jpg';
import TableCell from '../../Components/TableCell';
import Table from "../../Components/Table";

import { AffectationContext } from '../../Contexts/AffectationContexts';
import SolutionGraph from '../../Components/SolutionGraph';

const Header = props => {
    const { avatarUrl, title, subtitle, ...rest } = props;
    return (
      <Stack {...rest} spacing={10} alignItems="flex-start">
        <Avatar src={avatarUrl} alt={title} />
        <Stack spacing={2} direction="column" alignItems="flex-start">
          <div>{title}</div>
          <div style={{ color: 'var(--rs-text-secondary)', fontSize: 12 }}>{subtitle}</div>
        </Stack>
      </Stack>
    );
  };

const SolutionLayout = () => {   

    const { affectationData, dispatch } = useContext(AffectationContext);
    return (
        <SolutionLayoutContainer>
            <SolutionLayoutTitle>
                <h3>
                    Résultats
                </h3>
            </SolutionLayoutTitle>

            <SolutionsLayoutTab>
                <Accordion defaultActiveKey={1}>
                    <Accordion.Panel bodyFill header={<Header avatarUrl={Steps} title="Etapes" subtitle="Les 4 étapes de l'algorithme Hongrois"/>} eventKey={1}>
                        <StepsContainer>
                            {
                                affectationData.initialAssignement!=null ? 
                                    <>
                                        <Table HTitle={affectationData.horizontalHeaders} VTitle={affectationData.verticalHeaders} affectation={affectationData.nbAff} values={affectationData.initialAssignement}/> 
                                        <Table HTitle={affectationData.horizontalHeaders} VTitle={affectationData.verticalHeaders} affectation={affectationData.nbAff} values={affectationData.initialAssignement} BottomTitle={affectationData.minCol}/> 
                                        <Table HTitle={affectationData.horizontalHeaders} VTitle={affectationData.verticalHeaders} affectation={affectationData.nbAff} values={affectationData.zeroPerColumnMatrix} RightTitle={affectationData.minRow}/> 
                                        <Table HTitle={affectationData.horizontalHeaders} VTitle={affectationData.verticalHeaders} affectation={affectationData.nbAff} values={affectationData.zeroParRangee}/> 
                                    </>
                                    
                                    : ""}
                                
                        </StepsContainer>
                    </Accordion.Panel>
                    <Accordion.Panel header={<Header avatarUrl={Solutions} title="Graphe" subtitle="Solution finale" />} eventKey={2}>
                    <SolutionGraph/>
                    </Accordion.Panel>
                </Accordion>
            </SolutionsLayoutTab>

        </SolutionLayoutContainer>
    )
}
export default SolutionLayout;