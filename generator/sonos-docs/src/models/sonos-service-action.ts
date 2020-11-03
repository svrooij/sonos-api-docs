import SonosStateVariable from "./sonos-state-variable";

export interface SonosServiceAction {
  name: string;
  inputs?: SonosServiceActionArgument[];
  outputs?: SonosServiceActionArgument[];
  description?: string;
  remarks?: string;
  availableAt?: string[];
}

export interface SonosServiceActionArgument {
  name: string;
  direction: 'in' | 'out';
  relatedStateVariableName: string;
  relatedStateVariable?: SonosStateVariable; 
  description?: string;
}
