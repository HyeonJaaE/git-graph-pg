import VHeader from './index.vue'

export default {
  title: 'Organisms/VHeader',
}

export const Default = () => '<VHeader><Logo/><Logo/><Logo/></VHeader>'

export const Red = () => '<VHeader label="123"><Logo/></VHeader>'

export const Primary = () => ({
  title: 'primary',
  template: `<VHeader><Logo/>asd<Logo/></VHeader>`
})

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { VHeader },
  template:
    "<VHeader :label='label' :size='size' :backgroundColor='backgroundColor' />",
})

export const Small = Template.bind({})
Small.args = {
  size: 'small',
  label: 'Button',
}

export const Medium = Template.bind({})
Medium.args = {
  size: 'medium',
  label: 'Button',
}

export const Large = Template.bind({})
Large.args = {
  size: 'large',
  label: 'Button',
}
