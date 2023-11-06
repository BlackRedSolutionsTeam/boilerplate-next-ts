import TestComponent, { Props } from '.'

export default {
  title: 'TestComponent',
  component: TestComponent,
  args: {
    title: 'Hello Test!'
  },
  argTypes: {
    color: {
      control: {
        type: 'color',
        presetColors: ['#f00', '#0f0', '#00f']
      }
    }
  }
}

export const DefaultTestComponent = (args: Props) => <TestComponent {...args} />
