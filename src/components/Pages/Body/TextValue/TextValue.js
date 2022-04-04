import React from 'react'
import { TextContainer, Text1, Two, Text3, Text4, Text5, Pension, Remittance, GetStarted, RequestDemo, One } from './TextValueStyle'
import RemittanceImage from '../../../../images/Pension-Remittance-Switch Infrastructure-for-Africa.png'
import { MdEast } from "react-icons/md";

function TextValue() {
  return (
    <TextContainer>
        <Text1>
            <img src={RemittanceImage} alt='remittance' />
        </Text1>
        <Text4>
            PensionCentral helps organizations of all kinds(Corporate Organizations, FinTechs, Payrolls, VAS, Banks etc) to centrally remit pension in seconds to desired Pension Fund Administrators and Custodians.
        </Text4>
        <Text5>
            <GetStarted>
                <One>Get started for free</One>
                <MdEast style={{color: 'white'}} />
            </GetStarted>
            <RequestDemo>
                <Two>
                    Request a demo
                </Two>
            </RequestDemo>
        </Text5>
    </TextContainer>
  )
}

export default TextValue