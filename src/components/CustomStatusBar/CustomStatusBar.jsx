import { StatusBar } from 'react-native'
import React, { Fragment } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';

const CustomStatusBar = ({
    children,
    statusBgColor = '#fff',
    barStyle = 'dark-content',
    bgColor = '#fff',
  }) => {
    return (
      <Fragment>
        <StatusBar backgroundColor={statusBgColor} barStyle={barStyle} />
        <SafeAreaView style={{ flex: 0, backgroundColor: statusBgColor }} />
        <SafeAreaView style={{ flex: 1, backgroundColor: bgColor }}>
          {children}
        </SafeAreaView>
      </Fragment>
    );
  };

export default CustomStatusBar