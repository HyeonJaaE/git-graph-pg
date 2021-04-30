export default {
  title: 'Atoms/Logo',
  argTypes: {
    size: {
      options: ['small', 'medium', 'big'],
      control: { type: 'select'}
    }
  },
  default: "small"
}

const Template = ({}) => {
  return `<Logo/>`
}

export const Default = () => '<Logo/>'

export const Big = Template.bind({});
Big.args = {
  size: 'big'
};


export const num2 = () => '<div><Logo icon="asdf"/><Logo icon="asdf"/></div>'

