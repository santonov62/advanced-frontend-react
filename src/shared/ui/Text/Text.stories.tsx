import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Text, TextTheme } from './Text';

export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    title: 'Test title for text component',
    text: 'Some tex for text component...',
};
export const Error = Template.bind({});
Error.args = {
    title: 'Test title for text component',
    text: 'Some tex for text component...',
    theme: TextTheme.ERROR,
};
export const titleOnly = Template.bind({});
titleOnly.args = {
    title: 'Title for text component',
};
export const textOnly = Template.bind({});
textOnly.args = {
    text: 'Some tex for text component...',
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    title: 'Test title for text component',
    text: 'Some tex for text component...',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const titleOnlyDark = Template.bind({});
titleOnlyDark.args = {
    title: 'Title for text component',
};
titleOnlyDark.decorators = [ThemeDecorator(Theme.DARK)];

export const textOnlyDark = Template.bind({});
textOnlyDark.args = {
    text: 'Some tex for text component...',
};
textOnlyDark.decorators = [ThemeDecorator(Theme.DARK)];
