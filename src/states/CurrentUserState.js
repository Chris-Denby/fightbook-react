import { atom } from "recoil";

export const currentUserState = atom({
    key: 'currentUserState',
    default: {
        uid: "000000",
        email: "guest@guest.com",
        name: "guest",
    },
});