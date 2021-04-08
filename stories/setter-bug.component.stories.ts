import { Meta, Story } from '@storybook/angular/types-6-0';

import { SetterComponent } from './setter-bug.component';

export default {
  title: 'Setter Bug',
  component: SetterComponent,

} as Meta;

const Template: Story<SetterComponent> = (args: SetterComponent) => ({
  moduleMetadata: {
    declarations: [SetterComponent],
  },
  template: ` <app-setter [showDiv]="showDiv"></app-setter>`,
  props: args,
});

export const ShowDiv: Story<SetterComponent> = Template.bind({});
ShowDiv.args = {
  showDiv: true,
};
