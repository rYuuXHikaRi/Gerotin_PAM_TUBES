import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    Pressable
} from "react-native";

class ScrollViewHorizontal2 extends Component {
    render() {
        return (
            <Pressable style={{ marginTop: 5, marginLeft: 18, }} onPress={this.props.action}>
                <View style={{ flex: 2 }}>
                    <Image source={this.props.imageUri}
                        style={{ flex: 1, width: 114, height: 222, borderRadius: 15 }}
                    />
                </View>
            </Pressable>
        );
    }
}
export default ScrollViewHorizontal2;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});