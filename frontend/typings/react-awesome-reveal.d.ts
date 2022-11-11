import React from 'react';
import type {
  AttentionSeekerProps,
  BounceProps,
  FadeProps,
  FlipProps,
  HingeProps,
  JackInTheBoxProps,
  RevealProps,
  RollProps,
  RotateProps,
  SlideProps,
  ZoomProps,
} from 'react-awesome-reveal';

declare module 'react-awesome-reveal' {
  export interface AttentionSeekerProps extends React.PropsWithChildren<{}> {}
  export interface BounceProps extends React.PropsWithChildren<{}> {}
  export interface FadeProps extends React.PropsWithChildren<{}> {}
  export interface FlipProps extends React.PropsWithChildren<{}> {}
  export interface HingeProps extends React.PropsWithChildren<{}> {}
  export interface JackInTheBoxProps extends React.PropsWithChildren<{}> {}
  export interface RevealProps extends React.PropsWithChildren<{}> {}
  export interface RollProps extends React.PropsWithChildren<{}> {}
  export interface RotateProps extends React.PropsWithChildren<{}> {}
  export interface SlideProps extends React.PropsWithChildren<{}> {}
  export interface ZoomProps extends React.PropsWithChildren<{}> {}
}
