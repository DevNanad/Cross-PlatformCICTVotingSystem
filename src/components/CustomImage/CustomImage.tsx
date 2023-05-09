import {ImageSourcePropType, Image, StyleProp, ImageStyle } from 'react-native'
import React, { PropsWithChildren } from 'react'

type CustomImageProps = PropsWithChildren<{
    imageUrl: ImageSourcePropType,
    img_style: StyleProp<ImageStyle>
}>

const CustomImage = ({imageUrl, img_style}: CustomImageProps): JSX.Element => {
  return (
    <Image style={img_style} source={imageUrl}/>
  )
}

export default CustomImage