export default {
    title: "Atoms/VButton",
    argTypes: {
        label: {
          default: "button"  
        },
        size: {
            options: ['small', 'medium', 'big'],
            control: { type: 'select' }
        },
        color: {
            options: ['primary', 'danger', 'info'],
            control: { type: 'select' }
        }
    }
}

const Template = (args, {argTypes}) => ({
    props: Object.keys(argTypes),
    template: `<VButton :label="label" :class="color">Button</VButton>`
})

export const Default = Template.bind({});
Default.args = {
    label: "aergerag",
    color: ""
}