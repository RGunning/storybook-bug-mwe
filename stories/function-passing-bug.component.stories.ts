import { Meta, Story } from '@storybook/angular/types-6-0';
import { FunctionPassingComponent } from './function-passing-bug.component';

export default {
  title: 'Function passing Bug',
  component: FunctionPassingComponent,
} as Meta;

const Template: Story<FunctionPassingComponent> = (args: FunctionPassingComponent) => ({
  moduleMetadata: {
    declarations: [FunctionPassingComponent],
  },
  template: ` <app-function-passing [displayWith]="displayWith"></app-function-passing>`,
  props: args,
});

export const DisplayWith: Story<FunctionPassingComponent> = Template.bind({});
DisplayWith.args = {
  displayWith: (value) => `${value} %`,
};
