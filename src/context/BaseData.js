import { createContext } from "react";

const BaseData = createContext({
  baseUrl: 'https://ms-discord-upy5mhs63a-rj.a.run.app',
  values: {
    email: ['', () => {}],
    discordId: ['', () => {}]
  },
  token: [null, () => {}],
  logged: [false, () => {}]
});

export default BaseData;