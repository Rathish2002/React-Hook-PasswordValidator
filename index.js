// Write your code here
import {useState} from 'react'

import {
  BgContainer,
  BoxContainer,
  Heading,
  Paragraph,
  InputText,
  ErrPara,
} from './styledComponents'

const PasswordValidator = () => {
  const [isPasswordValidator, setPasswordValidator] = useState(false)

  const checkStatus = isPasswordValidator.length >= 8
  const errMsg = checkStatus
    ? ''
    : 'Your password must be at least 8 charecters'

  const changeText = () => setPasswordValidator(prevState => !prevState)

  return (
    <BgContainer>
      <BoxContainer>
        <Heading>Password Validator</Heading>
        <Paragraph>Check how strong and secure is your password</Paragraph>
        <InputText type="password" />
        <ErrPara>{errMsg}</ErrPara>
      </BoxContainer>
    </BgContainer>
  )
}

export default PasswordValidator
