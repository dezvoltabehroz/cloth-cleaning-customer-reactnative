

import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import styles from './style';
import { Icon } from '../../components'
export default class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: " support@mail.com",
            phone: " +1234567890",
            contents: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It ha Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from"
        }
    }

    render() {
        return (
            <ScrollView style={{ marginTop: 0 }}>
                <View style={styles.aboutcontentmainStyle}>
                    <Text style={styles.headingTextStyle}>{'About Us'}</Text>
                    <Text style={styles.aboutcontentStyle}>{this.state.contents ? this.state.contents : null}</Text>
                    <Text style={styles.headingTextStyle}>{'Our Values'}</Text>
                    <Text style={styles.aboutcontentStyle}>{this.state.contents ? this.state.contents : null}</Text>
                    <Text style={styles.headingTextStyle}>{'Our Bussines Partners'}</Text>
                    <Text style={styles.aboutcontentStyle}>{this.state.contents ? this.state.contents : null}</Text>
                    <Text style={styles.aboutTitleStyle}>{'Contact Us'}</Text>
                    <View style={styles.contact}>
                        <View style={{ justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row' }}>
                            <Icon.SimpleLineIcons name="globe" color="#5F6365" size={15} />
                            <Text style={styles.contacttype1}> {this.state.email ? this.state.email : null}</Text>
                        </View>
                        <View style={{ justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row' }}>
                            <Icon.MaterialCommunityIcons name="map-marker-outline" color="#5F6365" size={20} />
                            <Text style={styles.contacttype1}> {'Local Store'}</Text>
                        </View>
                        <View style={{ justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row' }}>
                            <Icon.Feather name="phone" color="#5F6365" size={15} />
                            <Text style={styles.contacttype1}> {this.state.phone ? this.state.phone : null}</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        )
    }
}
