export default interface SonosStateVariable {
  name: string;
  sendEvents: boolean;
  dataType: string;
  allowedValues?: string[];
  description?: string;
}