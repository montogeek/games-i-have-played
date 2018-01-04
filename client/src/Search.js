import React from 'react'
import { createComponent, ThemeProvider } from 'react-fela'

const theme = {
  fontSize: '2rem'
}

const input = props => ({
  padding: '10px',
  fontSize: props.theme.fontSize
})

const label = props => ({
  fontSize: props.theme.fontSize
})

const Input = createComponent(input, 'input', ['onChange'])
const Label = createComponent(label, 'label', ['htmlFor'])

const SearchInput = ({ onChange }) => {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Label htmlFor="name">Enter game name: </Label>
        <Input type="text" id="name" onChange={onChange} />
      </div>
    </ThemeProvider>
  )
}

export default SearchInput
