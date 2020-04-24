export interface IProofEvent {
  sessionId: string;
  deviceId: string;
  proofType: string[];
  geolocation?: string;
  idProof?: string;
  commit?: string;
}
