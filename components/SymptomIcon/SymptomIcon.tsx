import { useEffect, useState } from "react";
import { Image } from "react-native";

interface SymptomIconProps {
  icon: string;
}

export const SymptomIcon = ({ icon }: SymptomIconProps) => {

  if (icon === 'head') {
    return (
      <Image source={require('../../icons/head-icon.png')} style={{width: 35, height: 35}}/>
    )
  }
  else if (icon === 'abdominal') {
    return (
      <Image source={require('../../icons/abdominal-pain-icon.png')} style={{width: 35, height: 35}}/>
    )
  }
  else if (icon === 'cheat') {
    return (
      <Image source={require('../../icons/chest-pain-icon.png')} style={{width: 35, height: 35}}/>
    )
  }
  else if (icon === 'cold') {
    return (
      <Image source={require('../../icons/cold-icon.png')} style={{width: 35, height: 35}}/>
    )
  }
  else if (icon === 'ear') {
    return (
      <Image source={require('../../icons/ear-icon.png')} style={{width: 35, height: 35}}/>
    )
  }
  else if (icon === 'eye') {
    return (
      <Image source={require('../../icons/eye-icon.png')} style={{width: 35, height: 35}}/>
    )
  }
  else if (icon === 'full body') {
    return (
      <Image source={require('../../icons/full-body-icon.png')} style={{width: 35, height: 35}}/>
    )
  }
  else if (icon === 'mouth') {
    return (
      <Image source={require('../../icons/mouth-icon.png')} style={{width: 35, height: 35}}/>
    )
  }
  else if (icon === 'runny nose') {
    return (
      <Image source={require('../../icons/runny-nose-icon.png')} style={{width: 35, height: 35}}/>
    )
  }
  else if (icon === 'skin') {
    return (
      <Image source={require('../../icons/skin-icon.png')} style={{width: 35, height: 35}}/>
    )
  }
  else if (icon === 'throat') {
    return (
      <Image source={require('../../icons/throat-icon.png')} style={{width: 35, height: 35}}/>
    )
  }
};