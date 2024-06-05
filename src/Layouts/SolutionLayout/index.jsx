import React, { useContext } from 'react';
import { GraphContainer,SolutionPopup, SolutionLayoutContainer, SolutionLayoutTitle, SolutionsLayoutTab, StepsContainer, Fleche } from "./SolutionLayout.styled";

import { Accordion, Placeholder, Stack, Avatar } from 'rsuite';
import "./accordion.css";
import Steps from '../../assets/imgs/steps.png';
import Solutions from '../../assets/imgs/solutions.jpg';
import TableCell from '../../Components/TableCell';
import Table from "../../Components/Table";

import { AffectationContext } from '../../Contexts/AffectationContexts';
import SolutionGraph from '../../Components/SolutionGraph';
import { Button } from '../../Components/Button';

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

const SolutionLayout = ({active, setActive}) => {   
    const { affectationData, dispatch } = useContext(AffectationContext);
    const onClosePopup = () => {
        dispatch({
            type: 'closePopup'
        })
    }
    return (
        <SolutionLayoutContainer>
            {affectationData.showPopup && 
            (<SolutionPopup>
                <div className="solution-container">
                    <h2>Affectation optimale</h2>
                    <div>
                        <SolutionGraph initialAssignement={affectationData.initialAssignement}/>
                        <span>B={(affectationData.max?affectationData.maxValue*affectationData.nbAff - affectationData.cost: affectationData.cost)}</span>
                    </div>
                    <Button onClick={onClosePopup}>OK</Button>
                </div>
            </SolutionPopup>)
            }
            <SolutionLayoutTitle>
                <h3>
                    Résultats
                </h3>
                <button onClick={()=>setActive(!active)}>Menu</button>
            </SolutionLayoutTitle>

            <SolutionsLayoutTab>
                <Accordion defaultActiveKey={1}>
                    <Accordion.Panel bodyFill header={<Header avatarUrl={Steps} title="Etapes" subtitle="Les 4 étapes de l'algorithme Hongrois"/>} eventKey={1}>
                        <StepsContainer>
                            {
                                affectationData.initialAssignement!=null ? 
                                    <>
                                        {
                                            affectationData.max === true ?
                                            <>
                                            <Table HTitle={affectationData.horizontalHeaders} VTitle={affectationData.verticalHeaders} affectation={affectationData.nbAff} values={affectationData.maxInitialAssignement}/> 
                                            <Fleche>
                                                <p><span>Complément à: {affectationData.maxValue}</span></p>
                                            </Fleche>
                                            </>
                                            : ''
                                        }
                                        <Table HTitle={affectationData.horizontalHeaders} VTitle={affectationData.verticalHeaders} affectation={affectationData.nbAff} values={affectationData.initialAssignement}/> 
                                        <Table HTitle={affectationData.horizontalHeaders} VTitle={affectationData.verticalHeaders} affectation={affectationData.nbAff} values={affectationData.initialAssignement} BottomTitle={affectationData.minCol}/> 
                                        <Table HTitle={affectationData.horizontalHeaders} VTitle={affectationData.verticalHeaders} affectation={affectationData.nbAff} values={affectationData.zeroPerColumnMatrix} RightTitle={affectationData.minRow}/> 
                                        <Table HTitle={affectationData.horizontalHeaders} VTitle={affectationData.verticalHeaders} affectation={affectationData.nbAff} values={affectationData.zeroParRangee}/> 
                                        <Table HTitle={affectationData.horizontalHeaders} VTitle={affectationData.verticalHeaders} affectation={affectationData.nbAff} values={affectationData.solution} BottomTitle={affectationData.plusTitles?.bottomTitle} RightTitle={affectationData.plusTitles?.rightTitle} /> 
                                        <div className="B"><span>B =</span>{affectationData.costText}<span>= {affectationData.cost}</span></div>
                                    </>
                                    
                                    : ""}
                                
                        </StepsContainer>
                        <div className='reinit-container'>
                            <Button onClick={() => {
                                dispatch({
                                    type: "reinit"
                                })
                            }}>Réinitialiser</Button>    
                        </div>
                    </Accordion.Panel>
                    <Accordion.Panel header={<Header avatarUrl={Solutions} title="Graphe" subtitle="Solution finale" />} eventKey={2}>
                        <GraphContainer>
                            {affectationData.graph !== null && <><SolutionGraph initialAssignement={affectationData.initialAssignement}/><span>B={(affectationData.max?affectationData.maxValue*affectationData.nbAff - affectationData.cost: affectationData.cost)}</span></>}
                        </GraphContainer>  
                    </Accordion.Panel>
                </Accordion>
            </SolutionsLayoutTab>

        </SolutionLayoutContainer>
    )
}
export default SolutionLayout;