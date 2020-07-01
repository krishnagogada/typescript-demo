import React, { Component } from 'react'
import { observer } from 'mobx-react'
import { observable, action } from 'mobx'

import { isEnterKeyEvent } from '../../utils/AppUtils'
import { UserInputButton, UserTextInput } from './styledComponents'
import { withTranslation, WithTranslation } from "react-i18next"
import { threadId } from "worker_threads"

interface UserInputProps extends WithTranslation {
  onAddInput: (userInput: string) => any
  buttonText: string
  componentRef: any
}

@observer
class UserInput extends Component<UserInputProps> {
  @observable userInput = ''

  static defaultProps = {
    buttonText: "Add New-"
  }

  onChange = event => {
    const input = event.target.value
    this.updateUserInput(input)
  }

  @action
  updateUserInput(updatedContent: string) {
    this.userInput = updatedContent
  }

  getUserInput = () => {
    return this.userInput
  }

  onAddInput = () => {
    if (this.userInput) {
      const { onAddInput } = this.props
      onAddInput(this.userInput)
      this.updateUserInput('')
    } else {
      alert('Can not add empty input')
    }
  }

  onKeyDown = event => {
    if (isEnterKeyEvent(event)) {
      this.onAddInput()
    }
  }

  render() {
    const { buttonText } = this.props
    return (
      <div>
        <UserTextInput
          type='text'
          onChange={this.onChange}
          onKeyDown={this.onKeyDown}
          value={this.userInput}
        />
        <UserInputButton onClick={this.onAddInput} className=''>
          {buttonText}
        </UserInputButton>
      </div>
    )
  }
}

export default withTranslation('translation', { withRef: true })(UserInput)
