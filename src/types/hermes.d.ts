/**
 * See public/third-party-modules/hermes/dist/hermes.min.js
 */

type HermesMessanger = {
  on: (topic: string, fn: (data: any) => void) => void;
  send: (topic: string, data: any) => void;
}

declare const hermes: HermesMessanger;