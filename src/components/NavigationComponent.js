import React from 'react';
import { Text } from 'react-native';

export class BigNavigationButton extends React.Component {
    render() {
        return (
            <Button
                onPress={onPressLearnMore}
                title="Learn More"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
            />
        );
    }
}

export class SmallNavigationButton extends React.Component {
    render() {
        return (
            <Button
                onPress={onPressLearnMore}
                title="Learn More"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
            />
        );
    }
}
