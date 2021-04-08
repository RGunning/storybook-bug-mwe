import { Meta, Story } from '@storybook/angular/types-6-0';

import { MethodNameComponent } from './methodname-bug.component';

export default {
  title: 'Actions Regex Bug',
  component: MethodNameComponent,

} as Meta;

const Template: Story<MethodNameComponent> = (args: MethodNameComponent) => ({
  moduleMetadata: {
    declarations: [MethodNameComponent],
  },
  template: ` <app-method-name ></app-method-name>`,
  props: args,
});

export const Basic: Story<MethodNameComponent> = Template.bind({});